# Roadmap dependency follow-up — October 7

PR #13's [Quality run 37557546807](https://github.com/SzczepanGrela/grela-dev-roadmap/actions/runs/37557546807)
blocked a HIGH finding in `source-map-js`. The existing narrow cache exception
correctly did not allow it. A fresh npm audit also reported `smol-toml` and the
already-known cache finding.

The lock now selects compatible versions within existing dependency ranges:

| Package | Previous | Current |
| --- | --- | --- |
| source-map-js | 1.2.1 | 1.2.2 |
| http-cache-semantics | 4.2.0 | 4.3.0 |
| smol-toml | 1.8.0 | 1.9.0 |

The [source-map-js advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q)
identifies 1.2.2 as patched; the
[smol-toml advisory](https://github.com/advisories/GHSA-r4xh-jqrq-34v2)
identifies 1.9.0. The cache advisory's web page still showed no patched version
at this readback, while the npm registry offered 4.3.0 and the installed dependency
tree's audit returned **zero findings**. Record this distinction rather than
claiming a maintainer patch review that was not performed.

No major upgrade, forced audit fix, dependency omission or reduced threshold was
used. Astro/React versions and application source remain unchanged; the earlier
devalue 5.9.4 update is retained.

## Exception retired

The [October 3 exception](2026-10-03-dependency-review.md) is no longer needed.
Its policy file and allowlist/source-fingerprint code were removed. Every reported
HIGH/CRITICAL finding now blocks the gate, including the previously excepted
cache advisory and its Astro chain. Lower severities retain the existing HIGH
threshold. Audit failures, malformed/inconsistent reports, timeouts and unexpected
exit statuses still fail closed. Nothing extends the original approval period.

## Validation

- Clean install from the lock (`npm ci --ignore-scripts`): 318 packages audited,
  zero vulnerabilities reported on October 7.
- Thirteen direct Node security-gate regressions pass, including rejection of the
  former exception, unrelated HIGH/CRITICAL findings and broken audit reports.
- `npm run audit:dependencies` passes against the registry with no exceptions.
- Astro check/build: zero errors/warnings/hints, 15 static pages.
- Existing Chromium checks pass for desktop, mobile and project detail views.

The PR's resulting CI is authoritative for its exact final commit. This dependency
maintenance does not merge PR #13 or deploy a site.
