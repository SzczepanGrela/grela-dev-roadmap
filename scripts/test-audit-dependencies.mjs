import assert from "node:assert/strict";
import { test } from "node:test";
import { evaluateAudit, verifyAuditProcess } from "./audit-dependencies.mjs";

function reportFor(vulnerabilities = {}) {
  const totals = { info: 0, low: 0, moderate: 0, high: 0, critical: 0, total: 0 };
  for (const finding of Object.values(vulnerabilities)) {
    totals[finding.severity] += 1;
    totals.total += 1;
  }
  return { auditReportVersion: 2, vulnerabilities, metadata: { vulnerabilities: totals } };
}
function finding(name, severity, url = "https://github.com/advisories/example") {
  return { name, severity, nodes: [`node_modules/${name}`],
    via: [{ name, dependency: name, severity, url }] };
}
const formerException = () => reportFor({
  "http-cache-semantics": finding("http-cache-semantics", "high",
    "https://github.com/advisories/GHSA-ch52-4w7c-c8xp"),
  astro: { name: "astro", severity: "high", nodes: ["node_modules/astro"], via: ["http-cache-semantics"] },
});

test("clean reports pass with no exception", () => {
  assert.deepEqual(evaluateAudit(reportFor()), { exceptionApplied: false, blockers: 0 });
  assert.equal(verifyAuditProcess({ status: 0, stdout: JSON.stringify(reportFor()) }).blockers, 0);
});
test("the retired cache advisory and Astro chain are blocking again", () => {
  assert.throws(() => evaluateAudit(formerException()), /Blocking.*http-cache-semantics.*astro/);
  assert.throws(() => verifyAuditProcess({ status: 1, stdout: JSON.stringify(formerException()) }), /Blocking/);
});
for (const severity of ["info", "low", "moderate"]) {
  test(`preserves the existing HIGH threshold for ${severity} findings`, () => {
    const report = reportFor({ example: finding("example", severity) });
    assert.equal(verifyAuditProcess({ status: 0, stdout: JSON.stringify(report) }).blockers, 0);
  });
}
for (const severity of ["high", "critical"]) {
  test(`blocks ${severity} findings in any package`, () => {
    assert.throws(() => evaluateAudit(reportFor({ example: finding("example", severity) })), /Blocking/);
  });
}
test("malformed, partial and error reports cannot pass", () => {
  for (const report of [null, [], {}, { error: { code: "EAI_AGAIN" } },
    { ...reportFor(), error: { code: "EAUDIT" } },
    { ...reportFor(), metadata: {} }, { ...reportFor(), auditReportVersion: 1 }]) {
    assert.throws(() => evaluateAudit(report));
  }
});
test("inconsistent severity totals cannot hide findings", () => {
  const report = reportFor({ example: finding("example", "moderate") });
  report.metadata.vulnerabilities = reportFor().metadata.vulnerabilities;
  assert.throws(() => evaluateAudit(report), /totals/);
});
test("invalid finding names, severity, nodes and advisory entries fail closed", () => {
  const mutations = [
    (f) => { f.name = "different"; },
    (f) => { f.severity = "unknown"; },
    (f) => { f.nodes = []; },
    (f) => { f.nodes = ["invalid-path"]; },
    (f) => { f.via = []; },
    (f) => { f.via = [null]; },
    (f) => { f.via[0].url = "invalid-url"; },
  ];
  for (const mutate of mutations) {
    const f = finding("example", "moderate");
    mutate(f);
    assert.throws(() => evaluateAudit(reportFor({ example: f })), /Invalid/);
  }
});
test("a derived advisory needs the referenced package finding", () => {
  const report = formerException();
  delete report.vulnerabilities["http-cache-semantics"];
  assert.throws(() => evaluateAudit(reportFor(report.vulnerabilities)), /Invalid advisory/);
});
test("a HIGH advisory cannot be hidden under a lower package severity", () => {
  const f = finding("example", "high");
  f.severity = "moderate";
  assert.throws(() => evaluateAudit(reportFor({ example: f })), /severity/);
});
test("timeouts, process failures, invalid output and contradictory exit status fail closed", () => {
  for (const result of [{ error: new Error("timeout") }, { status: 2 },
    { status: null, signal: "SIGTERM" }, { status: 0, stdout: "not-json" },
    { status: 1, stdout: JSON.stringify(reportFor()) }]) {
    assert.throws(() => verifyAuditProcess(result));
  }
});
