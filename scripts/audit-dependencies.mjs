import { createHash } from "node:crypto";
import { lstatSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const advisory = "https://github.com/advisories/GHSA-ch52-4w7c-c8xp";
const severities = ["info", "low", "moderate", "high", "critical"];
const object = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const check = (condition, message) => {
  if (!condition) throw new Error(message);
};

export function sourceDigest(projectRoot) {
  const hash = createHash("sha256");
  function visit(relative) {
    const path = join(projectRoot, relative);
    const stat = lstatSync(path);
    check(!stat.isSymbolicLink(), `Review required: symlink in ${relative}`);
    if (stat.isDirectory()) {
      for (const name of readdirSync(path).sort()) visit(`${relative}/${name}`);
    } else {
      check(stat.isFile(), `Review required: unsupported source entry ${relative}`);
      hash.update(relative).update("\0").update(readFileSync(path)).update("\0");
    }
  }
  visit("src");
  return hash.digest("hex");
}

function validateExceptionScope(projectRoot, now) {
  const policy = JSON.parse(readFileSync(join(projectRoot, "security/npm-audit-exception.json")));
  check(policy.advisory === advisory && policy.package === "http-cache-semantics" && policy.version === "4.2.0",
    "Unexpected exception policy; security review required");
  check(policy.approvedOn === "2026-10-03" && policy.expiresAt === "2026-10-17T00:00:00Z",
    "Exception approval period changed; operator review required");
  check(Number.isFinite(now.getTime()) && now >= new Date(`${policy.approvedOn}T00:00:00Z`) && now < new Date(policy.expiresAt),
    "Exception expired or clock outside approval period; update the dependency or obtain a new review");
  const config = readFileSync(join(projectRoot, "astro.config.mjs"));
  check(createHash("sha256").update(config).digest("hex") === policy.configSha256,
    "Astro configuration changed; static-only exception requires a new review");
  check(sourceDigest(projectRoot) === policy.sourceSha256,
    "Application source changed; static-only exception requires a new review");
  const lock = JSON.parse(readFileSync(join(projectRoot, "package-lock.json")));
  check(lock.lockfileVersion === 3 && object(lock.packages), "Invalid dependency lock");
  const copies = Object.entries(lock.packages).filter(([path]) => /(^|\/)node_modules\/http-cache-semantics$/.test(path));
  check(copies.length === 1 && copies[0][0] === "node_modules/http-cache-semantics" && copies[0][1].version === policy.version,
    "Cache package version or installation path changed; exception requires a new review");
  const consumers = Object.entries(lock.packages).filter(([, entry]) =>
    [entry.dependencies, entry.optionalDependencies, entry.peerDependencies, entry.devDependencies]
      .some((dependencies) => dependencies && Object.hasOwn(dependencies, "http-cache-semantics")));
  check(consumers.length === 1 && consumers[0][0] === "node_modules/astro",
    "Cache dependency consumer changed; exception requires a new review");
  return policy;
}

export function evaluateAudit(report, { projectRoot = root, now = new Date() } = {}) {
  check(object(report) && report.auditReportVersion === 2 && !report.error && object(report.vulnerabilities),
    "Invalid or failed npm audit report");
  const counts = Object.fromEntries(severities.map((severity) => [severity, 0]));
  const findings = Object.entries(report.vulnerabilities);
  for (const [name, finding] of findings) {
    check(object(finding) && finding.name === name && severities.includes(finding.severity)
      && Array.isArray(finding.via) && finding.via.length > 0
      && Array.isArray(finding.nodes) && finding.nodes.length > 0
      && finding.nodes.every((node) => typeof node === "string" && node.startsWith("node_modules/")),
    `Invalid audit finding: ${name}`);
    for (const via of finding.via) {
      const severity = typeof via === "string" ? report.vulnerabilities[via]?.severity : via?.severity;
      check((typeof via === "string" && object(report.vulnerabilities[via]))
        || (object(via) && typeof via.name === "string" && typeof via.dependency === "string"
          && typeof via.url === "string" && via.url.startsWith("https://")), `Invalid advisory in ${name}`);
      check(severities.includes(severity) && severities.indexOf(severity) <= severities.indexOf(finding.severity),
        `Invalid advisory severity in ${name}`);
    }
    counts[finding.severity] += 1;
  }
  const totals = report.metadata?.vulnerabilities;
  check(object(totals) && severities.every((severity) => totals[severity] === counts[severity])
    && totals.total === findings.length, "Missing or inconsistent audit totals");

  const blockers = findings.filter(([, finding]) => ["high", "critical"].includes(finding.severity));
  if (blockers.length === 0) return { exceptionApplied: false, blockers: 0 };
  // All other HIGH/CRITICAL findings remain blocking, including new advisories
  // in either of these packages and an escalation of the accepted HIGH issue.
  for (const [name, finding] of blockers) {
    check(finding.severity === "high", `Blocking ${finding.severity} vulnerability: ${name}`);
    if (name === "http-cache-semantics") {
      const via = finding.via[0];
      check(finding.via.length === 1 && object(via) && via.url === advisory
        && via.name === name && via.dependency === name && via.severity === "high"
        && finding.nodes.length === 1 && finding.nodes[0] === "node_modules/http-cache-semantics",
      `Unapproved cache advisory or installation path: ${name}`);
    } else if (name === "astro") {
      check(finding.via.length === 1 && finding.via[0] === "http-cache-semantics"
        && finding.nodes.length === 1 && finding.nodes[0] === "node_modules/astro",
      "Astro has a finding outside the approved dependency chain");
    } else {
      throw new Error(`Blocking ${finding.severity} vulnerability: ${name}`);
    }
  }
  check(blockers.some(([name]) => name === "http-cache-semantics"), "Unresolved cache advisory chain");
  const policy = validateExceptionScope(projectRoot, now);
  return { exceptionApplied: true, blockers: blockers.length, expiresAt: policy.expiresAt };
}

export function verifyAuditProcess(result) {
  check(!result.error && !result.signal && [0, 1].includes(result.status),
    "npm audit could not complete; security gate remains closed");
  const report = JSON.parse(result.stdout);
  const evaluation = evaluateAudit(report);
  check(result.status === (evaluation.blockers > 0 ? 1 : 0), "Unexpected npm audit exit status");
  return evaluation;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const result = spawnSync("npm", ["audit", "--json", "--audit-level=high"], {
      cwd: root, encoding: "utf8", timeout: 120_000, maxBuffer: 8 * 1024 * 1024,
    });
    const evaluation = verifyAuditProcess(result);
    console.log(evaluation.exceptionApplied
      ? `Accepted only GHSA-ch52-4w7c-c8xp and its Astro chain; static scope verified; expires ${evaluation.expiresAt}.`
      : "npm audit passed: no HIGH/CRITICAL findings; no exception applied.");
  } catch (error) {
    console.error(`Dependency audit blocked: ${error.message}`);
    process.exitCode = 1;
  }
}
