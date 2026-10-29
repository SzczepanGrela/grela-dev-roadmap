# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-29**<br>
Estimated completion / szacowane ukończenie: **58%**<br>
Forecast / prognoza: **2026-10-28–2026-11-09**, 51–99 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

October 29: SDK-corrected main 9f67ed88/digest 17a0fcea is deployed healthy; Invisible and private R2/Worker active, signing-key mount RO and catalogue retained. Source/main CI, provenance/SPDX/tree parity and public/negative smoke pass. Real production SDK initializes; headless 600010 rejection obtains no grant. Positive human Firefox playback is requested and pending, so protection is not accepted. See docs/2026-10-29-netfilmx-cutover-followup.md. Complete positive real-provider/human playback, seek/captions, valid-grant warm-cache denials and actual Workers Free CPU/quota checks. Do not repeat the deployed SDK correction or reopen R2. Admin deferred; uploads/transcoding and both CI flags false. Then accept actual CI caller/access/contract, compatible rolling/rollback and new PG/keys/configuration backup recovery before automatic promotion.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Source state:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate. October 27: only the completed repository-governance task is removed from remaining work (2–3 h); aggregate scores/totals are recalculated. Other per-task estimates and calendar dates remain historical, not a current delivery promise.
- **Tests and CI:** Source CI 40923663597/audit 40923663525 and main CI 40932096823 succeed: 16 JS, 321 .NET, 80 Python, 23 gateway, Chromium/Firefox and image qualification/scan. Qualified sha256:17a0fcea0300cde8693ccdfe9003523172cca4d2585a80b88e130ad0e278ebfd published without rebuild; signed provenance/SPDX/main/ref/workflow/run/tree parity verified. Normal Deploy skipped; both activation flags false. Actual CI caller/configuration remains incomplete.
- **Production:** October 29 SDK-corrected main 9f67ed880a37837808f01907c779af9611dd6e6b/digest 17a0fcea finished 19:25:30UTC; selected 22:04 runtime: sole healthy web, no OOM/restarts, signing key RO/readable, keyring RW, 7 videos/10 subtitles/0 users/admins. Playback true; uploads/transcoding false; Invisible, private R2/Worker, PG and keys unchanged. Public 22:05 smoke passes revision/exact playerJS/PrivacyAddendum, missing token 400 / CSRF 400 / registration 404. Unmodified production real SDK initializes, headless rejected 600010 without grant; human Firefox positive test requested/pending. Fresh private snapshot readability only, tokens revoked. Actual CI caller/rolling/backups/warm-cache/CPUquota acceptance remains open. See docs/2026-10-29-netfilmx-cutover-followup.md.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | October 27 confirms main/production protection and merged PR #2. The specific branch-protection task is complete; wider repository/documentation hygiene is separate. |
| Quality CI | Complete | Main CI 40460430114 passes test/audit, exact-image qualification/scan and Quality; 321 .NET, 80 Python, 23 gateway plus Chromium/Firefox. This control certifies CI scope, not live Turnstile or deferred device tests. |
| Immutable release | Complete | October 29 PR #4 main 9f67ed88/digest 17a0fcea passed source/main qualification, signed provenance/SPDX and reviewed-tree parity; published and operator-deployed without rebuild. Normal CI Deploy skipped; live acceptance separate. |
| Deployment access | Partial | Protected production exists, but required Coolify secrets/contract and public URL are absent at repository/environment scope. Existing Tailscale secret names do not establish actual OIDC/private runner access. Operator temporary API access does not certify CD; old SSH consumers need reconciliation. |
| Network, TLS and client identity | Partial | October 28 media Custom Domain is served by the Worker with private R2; public storage aliases deny access and negative origin/path checks pass. First-launch HTTPS remains accepted. Valid-grant playback and protected warmed-cache acceptance remain open after failed human Firefox playback. |
| Abuse protection | Partial | October 29: SDK-corrected main 9f67ed88/digest 17a0fcea is deployed healthy; Invisible and private R2/Worker active, signing-key mount RO and catalogue retained. Source/main CI, provenance/SPDX/tree parity and public/negative smoke pass. Real production SDK initializes; headless 600010 rejection obtains no grant. Positive human Firefox playback is requested and pending, so protection is not accepted. See docs/2026-10-29-netfilmx-cutover-followup.md. |
| Runtime safety | Partial | October 29 sole new web healthy, no OOM/restarts, effective signing-key mount RW=false/readable by app UID and retained keyring. Playback enabled; uploads/transcoding/seed, auto deploy and previews remain off. Existing resource constraints retained. Overlap/rolling and actual Workers Free CPU/quota remain unaccepted. |
| Readiness and preflight | Partial | October 29: SDK-corrected main 9f67ed88/digest 17a0fcea is deployed healthy; Invisible and private R2/Worker active, signing-key mount RO and catalogue retained. Source/main CI, provenance/SPDX/tree parity and public/negative smoke pass. Real production SDK initializes; headless 600010 rejection obtains no grant. Positive human Firefox playback is requested and pending, so protection is not accepted. See docs/2026-10-29-netfilmx-cutover-followup.md. |
| Managed release and recovery | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Partial | Fresh October 29 19:24 same-host SDK-release snapshot preserves PG/keys/credentials/configuration, readability only; no restore/schedule/off-host acceptance. Earlier copies retained, tokens revoked. New-state backup/recovery remains open; legacy programme withdrawn. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local desktop/Android credits readability partially confirmed; visual design not approved. Future UI/mobile/credits scope has explicit responsive, accessibility, player and attribution criteria. Other presentation checks remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production migration/import and catalogue launch were accepted October 24; October 27 confirms retained 7 videos/10 subtitles. Remaining i18n and later upload/transcoding gates stay open; do not repeat accepted media work. October 28 selected runtime readback still has seven videos/ten subtitles; no media qualification, transfer or transcoding was repeated.

#### Modernize UI, mobile interaction and credits presentation

**Implementation · Planned · 0% · difficulty 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

October 29 PR #4 reviewed f0a5579/main 9f67ed88: source CI 40923663597, audit 40923663525 and main CI 40932096823 pass; 16 JavaScript, 321 .NET, 80 Python, 23 gateway, actual Chromium/Firefox fixtures, exact-image qualification/scan. P1 stale callback and pause/AbortError regressions retained; real3857 regression reproduced before SDK-onload fix. Earlier failed CI 40803496353/40805787744 and historical media/device results remain in docs/2026-10-29-netfilmx-cutover-followup.md. Actual deployed SDK initializes then rejects headless 600010; no positive human/provider acceptance is claimed.

#### Require green CI on protected main

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

Completed on October 27 effective GitHub readback: protected main requires PR/resolved discussions and strict Quality bound to GitHub Actions; no force-push/deletion/bypass. Production requires operator approval, main only, no admin bypass; self-review follows accepted single-operator policy. PR #1/#2 merged through normal protection. CI credentials/OIDC/caller remain immutable-deploy; broader documentation/hygiene remain architecture-docs/repository-hygiene. Closing only this evidenced task removes its previous 2–3 h remaining estimate.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

October 29 public/private current records reconcile actual private-R2/Worker, Invisible, deployed main 9f67ed88/digest 17a0fcea, exact runtime mount, snapshots/token revocation and pending human acceptance. Versioned web/PG/edge/key contracts and standards include real-provider acceptance, SDK loading mode, background UX/privacy and safe diagnostic codes. Earlier preparation, first launch, SDK/live/CI failures and A/B/C scope remain dated history in docs/2026-10-29-netfilmx-cutover-followup.md. Normal CI caller, rolling/rollback and new-state recovery remain open; no effort re-estimate.

#### Protect anonymous playback and retain admin access

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

October 29: SDK-corrected main 9f67ed88/digest 17a0fcea is deployed healthy; Invisible and private R2/Worker active, signing-key mount RO and catalogue retained. Source/main CI, provenance/SPDX/tree parity and public/negative smoke pass. Real production SDK initializes; headless 600010 rejection obtains no grant. Positive human Firefox playback is requested and pending, so protection is not accepted. See docs/2026-10-29-netfilmx-cutover-followup.md. Complete positive real-provider/human playback, seek/captions, valid-grant warm-cache denials and actual Workers Free CPU/quota checks. Do not repeat the deployed SDK correction or reopen R2. Admin deferred; uploads/transcoding and both CI flags false. Then accept actual CI caller/access/contract, compatible rolling/rollback and new PG/keys/configuration backup recovery before automatic promotion. Public artwork stays allowlisted; no per-segment Turnstile, cost alerts or spending cutoff. Historical failures and Safari/iOS/Sintel deferrals retained in dated records.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

October 29 PR #4 reviewed f0a5579/main 9f67ed880a37837808f01907c779af9611dd6e6b passed source CI 40923663597/audit 40923663525 and main CI 40932096823; exact sha256:17a0fcea0300cde8693ccdfe9003523172cca4d2585a80b88e130ad0e278ebfd qualified/published/operator-deployed. Signed provenance/SPDX/main/workflow/run/tree parity verified. Deployment finished 19:25:30 UTC, selected runtime healthy/RO key and catalogue retained. Normal Deploy skipped and both flags false; actual CI access/contract/caller remains unaccepted, operator API does not close it. PG/Worker separate; rolling/rollback/new-state recovery remain.

#### Accept health-gated rolling releases and scoped recovery

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Earlier accepted local PG/keyring persistence, two-web sessions and small new-PG restore retain their scoped dates; no renewed legacy recovery programme. October 29 operator release finishes with one healthy9f67ed88 web, effective RO signing key and retained catalogue. Same-host snapshots preserve PG/keys/configuration and pass readability only, not scheduled backup/off-host/restore. Actual protected stateful rolling/overlap, compatible rollback, shared sessions/schema, backup policy/failure visibility and isolated new-state recovery remain open. Healthy release and headless rejection do not establish a positive protected playback baseline. Historical evidence in docs/2026-10-29-netfilmx-cutover-followup.md.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Deployed player exposes bounded SDK/verification/grant/media stage codes without tokens or grant URLs. Gateway raw URL logging/observability/Logpush/tails remain off. These controls and release probes do not establish central monitoring, delivered worker/release/backup alerts or measured CPU/quota. Backup-failure visibility remains applicable; NetFilmx playback cost alerts/spending cutoff explicitly excluded. Shared monitoring/later transcoding visibility remain separate.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Historical October 15 subtitle decision: ten Sintel WebVTTs retained with existing MP4s. The earlier two-MP4/ten-VTT publication proposal is superseded by the October 17 seven-film HLS decision below; preserve its files/evidence, do not apply its patch.
- October 16: preserve scoped manual passes without claiming Sintel synchronization acceptance or inventing an offset. Credits readability is partially confirmed; visual design is not approved. Plan UI/mobile/credits separately after the current release work, retaining all creator/licence/source/change attribution.
- October 17: operator reduced detailed manual testing. Preserve unperformed VLC/Android/Safari checks as deferred, not passed; do not chase exact versions or request another round. Sintel cause and full synchronization acceptance remain unresolved. Reduced scope does not itself authorize media publication.
- October 17: prepare adaptive HLS for all seven originals through the shared pipeline, without upscaling or sync offsets. Technical local review accepted a357fd4; 1398 objects/20 variants with ten byte-identical VTTs. Maximum 1080 bounding box, source-limited quality and first audio/stereo are explicit publication choices. Operator must accept the exact packet/conditions before publication; HTTPS/hash readback precedes separately authorized 17-reference activation and final-image qualification. No current merge/deploy/provider write; uploads/worker false.
- October 17 later execution: accept exact packet publication and identified-client HTTPS result, preserving failed default HTTP evidence and all old objects. Use the fixed honest NetFilmxPublicationVerifier/1.0 User-Agent in the supported CLI; keep all controls and 403 rejection, no browser impersonation or provider-rule changes. No repeat transfer. Manifest activation and final-image/player acceptance remain separate.
- October 17 NHP17-1 accepted at 82f6a79. No further client correction or repeat publication; manifest activation remains separately authorized.
- October 18: accept exactly 17 candidate references and local final-image catalogue/player qualification at 6f57dbb. Do not repeat completed publication or deferred manual tests. Production release remains separately authorized.
- October 20 clarification: downtime is accepted during preparation, initial deployment and migration. Final Coolify operation still requires health-gated rolling updates and backups of necessary durable data/configuration/keys with proportionate recovery verification. No numeric uptime SLA, permanent replicas or multi-host HA. Stateless/static/non-server projects use their applicable hosting and data scope. Existing data, backup schedules and release guards remain. This is planning, not new runtime acceptance or re-estimation; docs/operating-standard.md applies to future repositories too.
- October 20 release-plan review accepts documentation-only 052f439 without corrective assignment. Coordinator next owns protection/access and concrete first-launch inputs; no acknowledgement-only test/report cycle. A/B/C remain separate, preserving accepted runtime/media 6f57dbb, R1 and disabled uploads/worker. No app merge/GHCR/deploy authorization is implied.
- October 20: apply only reviewed GitHub protection and explicit false release flags; keep the app PR draft and do not trigger deployment. Next prepare concrete Coolify/PG/keyring/access/resource settings. Existing legacy credential consumers require separate reconciliation.
- October 21: select PostgreSQL 18 before first launch for its longer support horizon. Worker prepares the official pinned image, CI/fixtures/storage and bounded database qualification; no 16-to-18 data migration, media retest or legacy restore. Use a fresh PG18 volume. Keep R1, active media manifest, draft PR and false upload/worker/release flags. Existing progress/effort estimates remain dated and unchanged.
- October 23: authorize marking PR #1 ready, merging accepted 206b467 and publishing its qualified main image to GHCR while leaving both deployment flags false. This supersedes the draft/no-merge boundary only for this publication; it does not authorize production migration/import, app startup or routing changes.
- Historical target, superseded by the October 26 anonymous-playback decision below. Target, October 25, 2026 — Next scope: add Turnstile to registration/login with backend Siteverify and negative/public acceptance. Reviewed release source has no widget or token validation; the October 24 public functional smoke did not test anti-bot enforcement. Keep uploads/worker false and prior media acceptance intact. Apply docs/anti-bot-standard.md; functional smoke is separate from anti-bot acceptance.
- October 26 target: anonymous viewing; withdraw public viewer signup and pretend wallet/purchases while retaining protected admin access and stored data. Managed Turnstile validates playback-grant issuance and admin login; a private-R2 media Worker checks film-scoped signed grants before cache/R2. Public catalogue artwork remains allowlisted. Workers Free; no cost alerts or spending cutoff. Implementation and live positive/negative acceptance are pending. Preserve uploads/worker false, prior media evidence and final-operation gaps. See docs/2026-10-26-netfilmx-playback-protection.md.
- October 27: publication/provider preparation accepted separately from active protection and final CD. Administrator identity is not a technical playback dependency; account/panel verification may be explicitly deferred. No temporary account was created. Web workflow does not update Worker or PG; follow component release/closed recovery contract.
- October 29 operator decision after failed live Firefox playback: ordinary Play with automatic background verification, no separate verification screen/click. Prepare matching Invisible provider/code, bounded readiness/attempts/retry, preserved pause/time/quality/captions and provider privacy link. Keep legitimate rejection, private R2 and separate live acceptance. This pending correction does not reopen admin provisioning or activate automatic CI.
- October 29 execution follows the background-verification choice: qualified web and matching Invisible mode deployed with unchanged secrets/private storage. A fresh same-host copy is readability evidence only. Requested human Firefox retest must receive its own result; CI/readiness/negative probes do not close protection. Keep normal CI flags false and admin deferred.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

29 października: poprawka SDK main 9f67ed88/digest 17a0fcea wdrożona healthy; Invisible i prywatny R2/Worker aktywne, mount klucza RO i katalog zachowane. CI PR/main, provenance/SPDX/zgodność drzewa i public/negative smoke przeszły. Produkcyjny SDK inicjalizuje się, ale headless jest odrzucany kodem 600010 bez grantu. Zlecony pozytywny test człowieka w Firefox oczekuje; ochrona nieodebrana. Zobacz docs/2026-10-29-netfilmx-cutover-followup.md. Odebrać pozytywny test dostawcy/człowieka, seek/napisy, odmowy na rozgrzanym cache i rzeczywiste limity Workers Free/CPU. Nie powtarzać wdrożonej poprawki SDK ani nie otwierać R2. Admin odłożony; uploads/transkodowanie i obie flagi CI false. Następnie odebrać rzeczywistego callera/dostęp/kontrakt CI, zgodny rolling/rollback i backup/odzyskiwanie nowego PG/kluczy/konfiguracji przed automatyczną promocją.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Stan źródła:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate. October 27: only the completed repository-governance task is removed from remaining work (2–3 h); aggregate scores/totals are recalculated. Other per-task estimates and calendar dates remain historical, not a current delivery promise.
- **Testy i CI:** Source CI 40923663597/audit 40923663525 and main CI 40932096823 succeed: 16 JS, 321 .NET, 80 Python, 23 gateway, Chromium/Firefox and image qualification/scan. Qualified sha256:17a0fcea0300cde8693ccdfe9003523172cca4d2585a80b88e130ad0e278ebfd published without rebuild; signed provenance/SPDX/main/ref/workflow/run/tree parity verified. Normal Deploy skipped; both activation flags false. Actual CI caller/configuration remains incomplete.
- **Produkcja:** October 29 SDK-corrected main 9f67ed880a37837808f01907c779af9611dd6e6b/digest 17a0fcea finished 19:25:30UTC; selected 22:04 runtime: sole healthy web, no OOM/restarts, signing key RO/readable, keyring RW, 7 videos/10 subtitles/0 users/admins. Playback true; uploads/transcoding false; Invisible, private R2/Worker, PG and keys unchanged. Public 22:05 smoke passes revision/exact playerJS/PrivacyAddendum, missing token 400 / CSRF 400 / registration 404. Unmodified production real SDK initializes, headless rejected 600010 without grant; human Firefox positive test requested/pending. Fresh private snapshot readability only, tokens revoked. Actual CI caller/rolling/backups/warm-cache/CPUquota acceptance remains open. See docs/2026-10-29-netfilmx-cutover-followup.md.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | 27 października potwierdzono ochronę main/production i scalenie PR #2. Zadanie ochrony gałęzi zakończone; szersza higiena repozytorium/dokumentacji pozostaje osobna. |
| Quality CI | Gotowe | CI main 40460430114 zalicza testy/audyt, kwalifikację/skan obrazu i Quality; 321 .NET, 80 Python, 23 gatewaya oraz Chromium/Firefox. Odbiór dotyczy CI, nie prawdziwego Turnstile ani odłożonych urządzeń. |
| Niezmienne wydanie | Gotowe | 29 października PR #4 main 9f67ed88/digest 17a0fcea przeszedł kwalifikację PR/main, podpisane provenance/SPDX i zgodność drzewa; opublikowany i wdrożony bez rebuild. Normalny Deploy CI pominięty; odbiór live osobny. |
| Dostęp wdrożeniowy | Częściowe | Chronione production istnieje, ale brakuje wymaganych sekretów/kontraktu Coolify i publicznego URL na poziomie repozytorium/środowiska. Nazwy sekretów Tailscale nie potwierdzają rzeczywistego OIDC/dostępu runnera. Tymczasowy dostęp operatora do API nie odbiera CD; konsumenci dawnych SSH wymagają uzgodnienia. |
| Sieć, TLS i tożsamość klienta | Częściowe | 28 października domena mediów prowadzi do Workera z prywatnym R2; publiczne aliasy odmawiają, testy złego Origin/ścieżek przeszły. HTTPS pierwszego startu zachowuje odbiór. Odtwarzanie z ważnym grantem i ochrona rozgrzanego cache oczekują po nieudanej próbie Firefox. |
| Ochrona przed nadużyciami | Częściowe | 29 października: poprawka SDK main 9f67ed88/digest 17a0fcea wdrożona healthy; Invisible i prywatny R2/Worker aktywne, mount klucza RO i katalog zachowane. CI PR/main, provenance/SPDX/zgodność drzewa i public/negative smoke przeszły. Produkcyjny SDK inicjalizuje się, ale headless jest odrzucany kodem 600010 bez grantu. Zlecony pozytywny test człowieka w Firefox oczekuje; ochrona nieodebrana. Zobacz docs/2026-10-29-netfilmx-cutover-followup.md. |
| Bezpieczeństwo runtime | Częściowe | 29 października jeden nowy web healthy, bez OOM/restartów, skuteczny mount klucza RW=false/czytelny przez UID aplikacji i zachowany keyring. Playback aktywny; uploads/transkodowanie/seed, auto deploy i preview wyłączone. Limity zachowane. Overlap/rolling i realne limity Workers Free/CPU nieodebrane. |
| Readiness i preflight | Częściowe | 29 października: poprawka SDK main 9f67ed88/digest 17a0fcea wdrożona healthy; Invisible i prywatny R2/Worker aktywne, mount klucza RO i katalog zachowane. CI PR/main, provenance/SPDX/zgodność drzewa i public/negative smoke przeszły. Produkcyjny SDK inicjalizuje się, ale headless jest odrzucany kodem 600010 bez grantu. Zlecony pozytywny test człowieka w Firefox oczekuje; ochrona nieodebrana. Zobacz docs/2026-10-29-netfilmx-cutover-followup.md. |
| Zarządzane wydanie i odzyskiwanie | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Częściowe | Świeża kopia przed wydaniem SDK z 29 października 19:24 na tym samym hoście zachowuje PG/klucze/poświadczenia/konfigurację, tylko czytelność; bez odbioru restore/harmonogramu/off-host. Starsze kopie zachowane, tokeny wycofane. Backup/odzyskiwanie nowego stanu otwarte; legacy wycofane. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Czytelność credits częściowo potwierdzona na komputerze/Androidzie; wygląd niezaakceptowany. Osobne UI/mobile/credits ma kryteria responsywności, dostępności, playera i atrybucji. Pozostały odbiór prezentacji nadal otwarty. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production migration/import and catalogue launch were accepted October 24; October 27 confirms retained 7 videos/10 subtitles. Remaining i18n and later upload/transcoding gates stay open; do not repeat accepted media work. October 28 selected runtime readback still has seven videos/ten subtitles; no media qualification, transfer or transcoding was repeated.

#### Zmodernizować UI, obsługę mobilną i prezentację credits

**Implementacja · Planowane · 0% · trudność 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

October 29 PR #4 reviewed f0a5579/main 9f67ed88: source CI 40923663597, audit 40923663525 and main CI 40932096823 pass; 16 JavaScript, 321 .NET, 80 Python, 23 gateway, actual Chromium/Firefox fixtures, exact-image qualification/scan. P1 stale callback and pause/AbortError regressions retained; real3857 regression reproduced before SDK-onload fix. Earlier failed CI 40803496353/40805787744 and historical media/device results remain in docs/2026-10-29-netfilmx-cutover-followup.md. Actual deployed SDK initializes then rejects headless 600010; no positive human/provider acceptance is claimed.

#### Wymagać zielonego CI na chronionym main

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

Completed on October 27 effective GitHub readback: protected main requires PR/resolved discussions and strict Quality bound to GitHub Actions; no force-push/deletion/bypass. Production requires operator approval, main only, no admin bypass; self-review follows accepted single-operator policy. PR #1/#2 merged through normal protection. CI credentials/OIDC/caller remain immutable-deploy; broader documentation/hygiene remain architecture-docs/repository-hygiene. Closing only this evidenced task removes its previous 2–3 h remaining estimate.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

October 29 public/private current records reconcile actual private-R2/Worker, Invisible, deployed main 9f67ed88/digest 17a0fcea, exact runtime mount, snapshots/token revocation and pending human acceptance. Versioned web/PG/edge/key contracts and standards include real-provider acceptance, SDK loading mode, background UX/privacy and safe diagnostic codes. Earlier preparation, first launch, SDK/live/CI failures and A/B/C scope remain dated history in docs/2026-10-29-netfilmx-cutover-followup.md. Normal CI caller, rolling/rollback and new-state recovery remain open; no effort re-estimate.

#### Chronić anonimowe odtwarzanie i zachować dostęp admina

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

October 29: SDK-corrected main 9f67ed88/digest 17a0fcea is deployed healthy; Invisible and private R2/Worker active, signing-key mount RO and catalogue retained. Source/main CI, provenance/SPDX/tree parity and public/negative smoke pass. Real production SDK initializes; headless 600010 rejection obtains no grant. Positive human Firefox playback is requested and pending, so protection is not accepted. See docs/2026-10-29-netfilmx-cutover-followup.md. Complete positive real-provider/human playback, seek/captions, valid-grant warm-cache denials and actual Workers Free CPU/quota checks. Do not repeat the deployed SDK correction or reopen R2. Admin deferred; uploads/transcoding and both CI flags false. Then accept actual CI caller/access/contract, compatible rolling/rollback and new PG/keys/configuration backup recovery before automatic promotion. Public artwork stays allowlisted; no per-segment Turnstile, cost alerts or spending cutoff. Historical failures and Safari/iOS/Sintel deferrals retained in dated records.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

October 29 PR #4 reviewed f0a5579/main 9f67ed880a37837808f01907c779af9611dd6e6b passed source CI 40923663597/audit 40923663525 and main CI 40932096823; exact sha256:17a0fcea0300cde8693ccdfe9003523172cca4d2585a80b88e130ad0e278ebfd qualified/published/operator-deployed. Signed provenance/SPDX/main/workflow/run/tree parity verified. Deployment finished 19:25:30 UTC, selected runtime healthy/RO key and catalogue retained. Normal Deploy skipped and both flags false; actual CI access/contract/caller remains unaccepted, operator API does not close it. PG/Worker separate; rolling/rollback/new-state recovery remain.

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Earlier accepted local PG/keyring persistence, two-web sessions and small new-PG restore retain their scoped dates; no renewed legacy recovery programme. October 29 operator release finishes with one healthy9f67ed88 web, effective RO signing key and retained catalogue. Same-host snapshots preserve PG/keys/configuration and pass readability only, not scheduled backup/off-host/restore. Actual protected stateful rolling/overlap, compatible rollback, shared sessions/schema, backup policy/failure visibility and isolated new-state recovery remain open. Healthy release and headless rejection do not establish a positive protected playback baseline. Historical evidence in docs/2026-10-29-netfilmx-cutover-followup.md.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Deployed player exposes bounded SDK/verification/grant/media stage codes without tokens or grant URLs. Gateway raw URL logging/observability/Logpush/tails remain off. These controls and release probes do not establish central monitoring, delivered worker/release/backup alerts or measured CPU/quota. Backup-failure visibility remains applicable; NetFilmx playback cost alerts/spending cutoff explicitly excluded. Shared monitoring/later transcoding visibility remain separate.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Historyczna decyzja o napisach z 15 października: dziesięć WebVTT Sintela zachowanych z istniejącymi MP4. Plan publikacji dwóch MP4 i dziesięciu VTT zastępuje poniższa decyzja o HLS siedmiu filmów z 17 października; zachować pliki/dowody, nie stosować starego patcha.
- 16 października: zachować odebrane próby bez uznawania synchronizacji Sintela ani zgadywania offsetu. Czytelność credits częściowo potwierdzona; wygląd niezaakceptowany. UI/mobile/credits zaplanowane osobno po bieżącym wydaniu, z zachowaniem twórców/licencji/źródeł/zmian.
- 17 października: operator ograniczył szczegółowe próby ręczne. Niewykonane VLC/Android/Safari pozostają odłożone, nie zaliczone; bez ponownej rundy i żądania dokładnych wersji. Przyczyna i pełny odbiór synchronizacji Sintela nierozstrzygnięte. Ograniczenie testów nie jest samo w sobie zgodą na publikację mediów.
- 17 października: HLS wszystkich siedmiu oryginałów przez wspólny pipeline, bez upscalingu i przesuwania synchronizacji. Lokalny odbiór techniczny a357fd4 zaliczony; 1398 obiektów/20 wariantów i dziesięć identycznych bajtowo VTT. Maksymalna ramka 1080, jakość ograniczona źródłem i pierwsze audio/stereo są jawnymi wyborami publikacji. Operator akceptuje konkretny pakiet/warunki przed publikacją; odczyt HTTPS/sum poprzedza osobno autoryzowaną aktywację 17 referencji i kwalifikację finalnego obrazu. Bez bieżącego merge/deploy/zapisu providerów; uploads/worker false.
- Późniejszy odbiór 17 października: przyjąć publikację dokładnego pakietu i HTTPS z jawnym klientem; zachować nieudaną próbę domyślnego HTTP oraz wszystkie stare obiekty. W CLI użyć stałego jawnego User-Agent NetFilmxPublicationVerifier/1.0; wszystkie kontrole i zatrzymanie przy 403 pozostają, bez podszywania się pod przeglądarkę i zmiany reguł providera. Nie ponawiać transferu. Aktywacja manifestu oraz finalny obraz/player pozostają osobnym etapem.
- 17 października NHP17-1 odebrane na 82f6a79. Bez dalszej poprawki klienta i ponownej publikacji; aktywacja manifestu wymaga osobnego upoważnienia.
- 18 października: odebrać dokładnie 17 referencji kandydata oraz lokalną kwalifikację finalnego obrazu/katalogu/playera na 6f57dbb. Nie powtarzać publikacji ani odłożonych prób ręcznych. Wydanie produkcyjne wymaga osobnego upoważnienia.
- Doprecyzowanie 20 października: przerwy są dozwolone podczas przygotowania, pierwszego wdrożenia i migracji. Docelowy Coolify nadal wymaga rolling update z bramką zdrowia i backupów potrzebnych danych/konfiguracji/kluczy z proporcjonalnym sprawdzeniem odtworzenia. Bez liczbowego SLA, stałych replik i HA wielu hostów. Dla projektów stateless/statycznych/bez serwera stosować właściwy zakres hostingu i danych. Zachować dane, harmonogramy kopii i zabezpieczenia wdrożeń. To plan, nie nowy odbiór ani estymacja; docs/operating-standard.md obejmuje też przyszłe repozytoria.
- Odbiór planu 20 października przyjmuje dokumentacyjny 052f439 bez poprawki dla workera. Następny krok koordynatora to ochrona/dostęp i konkretne dane pierwszego uruchomienia; bez rundy testów/raportów tylko dla potwierdzenia. A/B/C osobno, z zachowaniem odebranych kodu/mediów 6f57dbb, R1 oraz wyłączonych uploads/worker. Odbiór nie oznacza zgody na merge/GHCR/deploy aplikacji.
- 20 października: zastosować uzgodnioną ochronę GitHub i jawne false flagi wdrożeń; zachować draft aplikacji bez wywoływania wdrożenia. Następnie przygotować konkretne ustawienia Coolify/PG/kluczy/dostępu/zasobów. Konsumenci starych poświadczeń wymagają osobnego uzgodnienia.
- 21 października: wybrać PostgreSQL 18 przed pierwszym uruchomieniem ze względu na dłuższe wsparcie. Worker przygotuje oficjalny przypięty obraz, CI/fixtures/storage i ograniczoną kwalifikację bazy; bez migracji danych 16→18, ponownego odbioru mediów ani restore legacy. Nowy wolumen PG18. Zachować R1, aktywny manifest, draft PR i false flagi uploads/worker/wdrożeń. Datowane estymaty postępu/pracy bez zmian.
- 23 października: zatwierdzono wyjście PR #1 z draftu, scalenie odebranego 206b467 i publikację kwalifikowanego obrazu main w GHCR przy obu flagach wdrożeń false. Zastępuje to zakaz merge tylko dla tej publikacji; nie upoważnia do produkcyjnej migracji/importu, uruchomienia aplikacji ani zmiany routingu.
- Historyczny cel zastąpiony poniższą decyzją z 26 października o anonimowym odtwarzaniu. Cel, 25 października 2026 — Najbliższy zakres: Turnstile rejestracji/logowania, Siteverify w backendzie i odbiór negatywny/publiczny. Sprawdzone źródło wydania nie ma widgetu ani walidacji tokenu; publiczny smoke z 24 października nie sprawdzał ochrony botowej. Zachować uploads/worker false i wcześniejszy odbiór mediów. Stosować docs/anti-bot-standard.md; odbiór funkcjonalny jest osobny od antybotowego.
- Cel 26 października: anonimowe oglądanie; wycofanie publicznej rejestracji widzów i pozornego portfela/zakupów z zachowaniem chronionego admina i istniejących danych. Managed Turnstile chroni wydawanie dostępu do filmu i logowanie admina; Worker z prywatnym R2 sprawdza podpisane uprawnienie przed cache/R2. Publiczne grafiki katalogu pozostają na jawnej liście. Workers Free; bez alertów kosztowych i odcięcia budżetowego. Implementacja i odbiór pozytywny/negatywny oczekują. Zachować uploads/worker false, wcześniejsze dowody mediów i luki docelowego utrzymania. Zobacz docs/2026-10-26-netfilmx-playback-protection.md.
- 27 października: publikacja/przygotowanie dostawcy odebrane osobno od aktywnej ochrony i pełnego CD. Tożsamość admina nie jest techniczną zależnością odtwarzania; konto/test panelu można jawnie odłożyć. Nie utworzono konta tymczasowego. Workflow weba nie aktualizuje Workera/PG; stosować kontrakt komponentów i zamkniętego odzyskiwania.
- Decyzja operatora 29 października po nieudanej próbie Firefox: zwykły Play i automatyczna weryfikacja w tle, bez dodatkowego ekranu/kliknięcia. Przygotować zgodny tryb Invisible dostawcy/kodu, ograniczone terminy/próby/retry, zachowanie pauzy/czasu/jakości/napisów i odnośnik prywatności. Zachować odmowy, prywatny R2 i osobny odbiór rzeczywistego dostawcy. Oczekująca poprawka nie wznawia admina ani automatycznego CI.
- Wykonanie 29 października realizuje wybór weryfikacji w tle: kwalifikowany web i zgodny Invisible wdrożono z niezmienionymi sekretami/prywatnym storage. Świeża kopia na tym samym hoście potwierdza tylko czytelność. Zlecony ponowny test człowieka w Firefox musi mieć własny wynik; CI/readiness/odmowy nie zamykają ochrony. Flagi normalnego CI false, admin odłożony.
