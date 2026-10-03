import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { evaluateAudit, sourceDigest, verifyAuditProcess } from "./audit-dependencies.mjs";

const advisory = "https://github.com/advisories/GHSA-ch52-4w7c-c8xp";
const now = new Date("2026-10-03T15:00:00Z");
function reportFor(vulnerabilities = {}) {
  const totals = { info: 0, low: 0, moderate: 0, high: 0, critical: 0, total: 0 };
  for (const finding of Object.values(vulnerabilities)) {
    totals[finding.severity] += 1;
    totals.total += 1;
  }
  return { auditReportVersion: 2, vulnerabilities, metadata: { vulnerabilities: totals } };
}
const accepted = () => reportFor({
  "http-cache-semantics": {
    name: "http-cache-semantics", severity: "high", nodes: ["node_modules/http-cache-semantics"],
    via: [{ name: "http-cache-semantics", dependency: "http-cache-semantics", severity: "high", url: advisory }],
  },
  astro: { name: "astro", severity: "high", nodes: ["node_modules/astro"], via: ["http-cache-semantics"] },
});
function fixture(t) {
  const projectRoot = mkdtempSync(join(tmpdir(), "roadmap-audit-"));
  t.after(() => rmSync(projectRoot, { recursive: true, force: true }));
  mkdirSync(join(projectRoot, "security"));
  mkdirSync(join(projectRoot, "src"));
  writeFileSync(join(projectRoot, "src/index.astro"), "<p>Static page</p>");
  const config = 'export default {output: "static"};';
  writeFileSync(join(projectRoot, "astro.config.mjs"), config);
  const policy = {
    advisory, package: "http-cache-semantics", version: "4.2.0",
    approvedOn: "2026-10-03", expiresAt: "2026-10-17T00:00:00Z",
    configSha256: createHash("sha256").update(config).digest("hex"),
    sourceSha256: sourceDigest(projectRoot),
  };
  writeFileSync(join(projectRoot, "security/npm-audit-exception.json"), JSON.stringify(policy));
  const lock = { lockfileVersion: 3, packages: {
    "node_modules/http-cache-semantics": { version: "4.2.0" },
    "node_modules/astro": { dependencies: { "http-cache-semantics": "^4.2.0" } },
  } };
  writeFileSync(join(projectRoot, "package-lock.json"), JSON.stringify(lock));
  return { projectRoot, now, lock };
}

test("accepts only the reviewed HIGH advisory and its Astro chain", (t) => {
  assert.equal(evaluateAudit(accepted(), fixture(t)).exceptionApplied, true);
});
test("no vulnerabilities pass without relying on an exception, even after expiry", () => {
  assert.equal(evaluateAudit(reportFor(), { projectRoot: "/missing", now: new Date("2027-01-01") }).exceptionApplied, false);
});
test("preserves the original HIGH threshold for lower severities", () => {
  const low = { name: "example", severity: "moderate", nodes: ["node_modules/example"],
    via: [{ name: "example", dependency: "example", severity: "moderate", url: "https://github.com/advisories/example" }] };
  assert.equal(evaluateAudit(reportFor({ example: low })).exceptionApplied, false);
});
test("blocks unrelated HIGH and CRITICAL issues", (t) => {
  const scope = fixture(t);
  for (const severity of ["high", "critical"]) {
    const r = accepted();
    r.vulnerabilities.example = { name: "example", severity, nodes: ["node_modules/example"],
      via: [{ name: "example", dependency: "example", severity, url: "https://github.com/advisories/example" }] };
    assert.throws(() => evaluateAudit(reportFor(r.vulnerabilities), scope), /Blocking/);
  }
});
test("blocks additional advisories on either excepted package", (t) => {
  const scope = fixture(t);
  for (const name of ["astro", "http-cache-semantics"]) {
    const r = accepted();
    r.vulnerabilities[name].via.push({ name, dependency: name, url: "https://github.com/advisories/GHSA-new-issue", severity: "high" });
    assert.throws(() => evaluateAudit(r, scope), /outside|Unapproved/);
  }
});
test("blocks changed advisory, severity, nodes and incomplete derived chain", (t) => {
  const scope = fixture(t);
  const changes = [
    (r) => { r.vulnerabilities["http-cache-semantics"].via[0].url = "https://github.com/advisories/another"; },
    (r) => { r.vulnerabilities["http-cache-semantics"].severity = "critical"; },
    (r) => { r.vulnerabilities["http-cache-semantics"].nodes.push("node_modules/other/node_modules/http-cache-semantics"); },
    (r) => { delete r.vulnerabilities["http-cache-semantics"]; },
  ];
  for (const change of changes) {
    const r = accepted(); change(r);
    assert.throws(() => evaluateAudit(reportFor(r.vulnerabilities), scope));
  }
});
test("expires at October 17 UTC and rejects clock before approval", (t) => {
  const scope = fixture(t);
  assert.equal(evaluateAudit(accepted(), { ...scope, now: new Date("2026-10-16T23:59:59Z") }).exceptionApplied, true);
  for (const date of ["2026-10-17T00:00:00Z", "2026-10-18", "2026-10-02", "invalid"]) {
    assert.throws(() => evaluateAudit(accepted(), { ...scope, now: new Date(date) }), /expired|clock/);
  }
});
test("configuration change to SSR invalidates the exception", (t) => {
  const scope = fixture(t);
  writeFileSync(join(scope.projectRoot, "astro.config.mjs"), 'export default {output: "server"};');
  assert.throws(() => evaluateAudit(accepted(), scope), /configuration changed/);
});
test("source changes and new endpoints invalidate the exception", (t) => {
  const scope = fixture(t);
  writeFileSync(join(scope.projectRoot, "src/api.ts"), "export const GET = () => new Response('auth');");
  assert.throws(() => evaluateAudit(accepted(), scope), /source changed/);
});
test("new cache consumers and installed versions invalidate the exception", (t) => {
  const scope = fixture(t);
  scope.lock.packages["node_modules/http-cache-semantics"].version = "4.2.1";
  writeFileSync(join(scope.projectRoot, "package-lock.json"), JSON.stringify(scope.lock));
  assert.throws(() => evaluateAudit(accepted(), scope), /version/);
  scope.lock.packages["node_modules/http-cache-semantics"].version = "4.2.0";
  scope.lock.packages["node_modules/server"] = { optionalDependencies: { "http-cache-semantics": "^4.2.0" } };
  writeFileSync(join(scope.projectRoot, "package-lock.json"), JSON.stringify(scope.lock));
  assert.throws(() => evaluateAudit(accepted(), scope), /consumer changed/);
});
test("malformed, partial, error and inconsistent reports cannot pass", (t) => {
  const scope = fixture(t);
  for (const r of [null, {}, { error: { code: "EAI_AGAIN" } },
    { ...accepted(), error: { code: "EAUDIT" } },
    { ...accepted(), metadata: {} }, { ...accepted(), auditReportVersion: 1 }]) {
    assert.throws(() => evaluateAudit(r, scope));
  }
});
test("reports cannot hide a HIGH advisory under a lower package severity", (t) => {
  const r = accepted();
  r.vulnerabilities["http-cache-semantics"].severity = "moderate";
  assert.throws(() => evaluateAudit(reportFor(r.vulnerabilities), fixture(t)), /severity/);
});
test("timeout, process failure and non-JSON npm output cannot pass", () => {
  for (const result of [{ error: new Error("timeout") }, { status: 2 },
    { status: null, signal: "SIGTERM" }, { status: 0, stdout: "not-json" },
    { status: 1, stdout: JSON.stringify(reportFor()) }]) {
    assert.throws(() => verifyAuditProcess(result));
  }
});
test("the checked-in source and configuration match their review fingerprints", () => {
  const projectRoot = new URL("../", import.meta.url).pathname;
  assert.equal(evaluateAudit(accepted(), { projectRoot, now }).exceptionApplied, true);
  assert.equal(JSON.parse(readFileSync(join(projectRoot, "package-lock.json"))).packages["node_modules/devalue"].version, "5.9.4");
});
