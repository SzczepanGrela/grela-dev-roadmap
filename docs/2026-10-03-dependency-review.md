# Roadmap dependency review — October 3

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

## Proposed narrow exception — not activated

An operator decision is pending. If accepted, a temporary exception would cover
only this advisory and its derived Astro audit entry, require unchanged static
deployment/no sensitive remote-image cache, and expire for review on 2026-10-17.
Every other HIGH/CRITICAL finding and an invalid/failed audit must still fail CI.
Any SSR, auth, server adapter or remote cache change would invalidate the scope.
Remove the exception when an upstream fix is available and requalify the lock.

At this checkpoint the existing audit command remains unchanged and PR #13 is
blocked by that finding. Neither the exception nor a production merge/deploy
was performed. Local build/browser success does not mean all CI gates are green.
