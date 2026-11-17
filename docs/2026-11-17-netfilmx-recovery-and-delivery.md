# NetFilmx recovery and delivery checkpoint

Observed November 17, 2026. Production remains the healthy November 16 release
eb9f6ca8 / 07477009. No production release or provider configuration change.

A real new-state backup was restored in isolated containers with the pinned
PostgreSQL and current exact web image. All 24 tables, seven films, ten subtitles,
three migrations, ownership and runtime grants were preserved. Restored keyring
and signing key remained readable with private permissions; the restored app
accepted a form issued by live production before the trial and rejected missing
antiforgery protection. There are no users/admin sessions to recover. All trial
resources were removed; production stayed healthy. This accepts the selected-copy
recovery check, not a backup schedule, remote coverage or final rolling operation.

Twenty-one gateway checks plus the disabled direct-bucket alias passed. Public
artwork works and unauthorised media access remains denied. The last 24 hours
showed 324 successful Worker executions, one client disconnect and no execution
errors; sampled successful CPU p99 was 5.369 ms. These are low-traffic observations,
not positive human playback, warmed-cache denial or account-wide quota acceptance.

Delivery review found two API compatibility issues: the old client expected a
write-only domain alias and a label field hidden from ordinary read permissions.
The correction in [PR #10](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/10)
uses the canonical domain and requires Coolify-managed labels,
without granting CI access to sensitive settings. Regression against the old
client reproduced the failure; all 84 Python tests and a read-only comparison
with the real API pass. PR integration/full CI are separate from those results.
The API check does not inspect generated label contents; operator/runtime checks
and public routing probes remain part of acceptance.

Production environment protections remain configured but deployment credentials/
configuration are not installed. Both activation flags remain false. Current
Tailscale workload identity mapping still needs verification. Automatic CD,
actual rolling/compatible rollback, scheduled backups and failure visibility
remain open. A daily local/encrypted remote backup policy is proposed, awaiting
the owner's destination/retention choice; no new schedule/upload was configured.

Real human/provider playback is still pending. Admin creation, Safari/iOS and
Sintel synchronization retain earlier deferrals; uploads/transcoding remain off.
No percentage, remaining effort or historical calendar was re-estimated.
Earlier [credits release](2026-11-16-netfilmx-credits-presentation.md) and failed
attempts remain dated evidence. No repeat media encoding or legacy recovery work.
