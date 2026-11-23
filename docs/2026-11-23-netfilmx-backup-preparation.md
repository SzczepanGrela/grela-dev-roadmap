# NetFilmx playback acceptance and backup preparation

`operator-declared`, recorded November 23: anonymous playback, seeking, quality
selection, Polish subtitles and Off work in the owner's ordinary browser.
This closes the requested positive human sample. Other device/Sintel deferrals,
warm-cache authorization checks and wider quota/load acceptance keep their scope.
The owner also confirms the expected protected-environment OIDC mapping; actual
GitHub runner authentication remains to be observed separately.

`observed`, November 23: the existing production revision remains healthy.
Main `7d1408b` passed [CI and publication](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/44148850905);
Deploy was skipped. This confirms publication of the API-contract correction,
not a new runtime release. Both normal deployment switches remain false, and
the protected deployment environment still needs its access configuration.

`operator-declared`: one backup daily, seven latest local copies and thirty
encrypted copies in dedicated private off-host storage. These are retained-copy
counts, not seven backups per day. The decryption identity stays on the operator
computer. No legacy/media backup or full-platform recovery programme is reopened.

`observed`: private storage and the encryption tools/local identity are prepared.
Synthetic encryption/decryption, wrong-key and truncation rejection pass. The
new-production collector and systemd units are prepared and source tests pass;
read-only collection preflight works against actual production configuration.
They are not installed or scheduled. A bucket-scoped storage credential is the
remaining external input; the current provider integration cannot create tokens.

`target`: install the reviewed collector, create and retrieve its first encrypted
off-host set, validate recovery, then enable the daily timer. Preserve separate
local/remote freshness and failure status; rotate remote copies only after a
successful full readback. Reuse the accepted November 17 selected-copy restore
without repeating film qualification or the withdrawn legacy programme.

Then observe the real protected CI caller, compatible rolling/rollback and
bounded overlap before automatic deployment. Admin provisioning, uploads and
transcoding remain deferred/disabled. No percentage or effort re-estimate.
