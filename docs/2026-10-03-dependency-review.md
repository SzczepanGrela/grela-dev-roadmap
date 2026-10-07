# Roadmap dependency review — October 3

Historical record: the exception described below was **retired on October 7**
after compatible dependency updates and a clean registry audit. See the
[follow-up](2026-10-07-dependency-followup.md) for current gate behavior.

PR #13's first CI run [37130260934](https://github.com/SzczepanGrela/grela-dev-roadmap/actions/runs/37130260934)
failed the existing high-severity npm audit gate. The lock contained devalue
5.9.1 and http-cache-semantics 4.2.0 through Astro 7.2.8.

devalue was updated compatibly to **5.9.4**, removing its reported advisories
without changing Astro/React or applying `npm audit fix --force`.
[The upstream advisory](https://github.com/advisories/GHSA-j22f-vq7h-c4qm)
identifies the patched 5.9 line. Build/browser checks are requalified after the
lock change; this is separate from the application status updates.

## Remaining upstream finding

[GHSA-ch52-4w7c-c8xp](https://github.com/advisories/GHSA-ch52-4w7c-c8xp)
has no published patched version at this review. npm audit still reports the
cache package and its Astro dependency chain. Do not downgrade Astro to an
old major just to change the reported dependency graph.

Source review found Astro's imports in its **remote-image build cache**.
Our `astro.config.mjs` uses `output: "static"`, no server adapter; application
source has no Astro image-transform imports or server/auth/session endpoints.
Production serves the built HTML/assets, not the Astro Node preview server.
Therefore the advisory's cross-user shared-session-cache path was **not found
in the reviewed production architecture**. This is a scoped reachability
assessment, not a claim that the installed package has been fixed.

## Approved narrow exception

On **2026-10-03**, after the risk and scope were explained, the operator explicitly
approved this exception. The approval covers only HIGH
**GHSA-ch52-4w7c-c8xp** in **http-cache-semantics 4.2.0** and Astro's derived
entry for that exact dependency. It expires at **2026-10-17 00:00 UTC**; it does
not silently extend itself. This acceptance does not fix the upstream package.

The [then-current policy](https://github.com/SzczepanGrela/grela-dev-roadmap/blob/bac3853567840e0aafff6798b767982f76c6091b/security/npm-audit-exception.json) and
[then-current audit gate](https://github.com/SzczepanGrela/grela-dev-roadmap/blob/bac3853567840e0aafff6798b767982f76c6091b/scripts/audit-dependencies.mjs) enforced the reviewed boundary:

- `npm audit --json --audit-level=high` still runs against the registry. Only
  the exact advisory and derived entry may be excepted; additional advisories,
  any other HIGH/CRITICAL finding and escalation to CRITICAL fail the gate.
- Audit errors, timeouts, invalid JSON, incomplete/inconsistent reports and
  unexpected exit status fail closed.
- Configuration and all `src/` files must match the reviewed SHA-256 fingerprints.
  A source/configuration edit, including an adapter, endpoint or remote image
  cache, invalidates the exception until a fresh source review is recorded.
- The lock must contain one cache package at version 4.2.0, consumed only by Astro.
  A changed installation path, version or consumer invalidates this scope.
- Once the audit no longer contains HIGH/CRITICAL findings, it passes normally
  without relying on this exception, even after expiry. Remove the policy and
  exception code after an upstream fix and dependency requalification.

Run `npm run test:audit` for the rejection/expiry/scope regressions and
`npm run audit:dependencies` for the live gate. Plain `npm audit` intentionally
continues to report the known package; do not replace this with a blanket
severity reduction, omitted dependency group or `audit fix --force`.

Local verification passed the live audit gate and 14 security-gate regression
cases; source build and existing desktop/mobile/detail browser acceptance remain
separate checks. PR #13's resulting GitHub run is authoritative for its exact
commit. No merge or production deployment is authorized by this risk decision.
