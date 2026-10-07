import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const severities = ["info", "low", "moderate", "high", "critical"];
const object = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
const check = (condition, message) => {
  if (!condition) throw new Error(message);
};

export function evaluateAudit(report) {
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
  check(blockers.length === 0, `Blocking vulnerabilities: ${blockers.map(([name, finding]) => `${name} (${finding.severity})`).join(", ")}`);
  return { exceptionApplied: false, blockers: 0 };
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
    verifyAuditProcess(result);
    console.log("npm audit passed: no HIGH/CRITICAL findings; no exceptions allowed.");
  } catch (error) {
    console.error(`Dependency audit blocked: ${error.message}`);
    process.exitCode = 1;
  }
}
