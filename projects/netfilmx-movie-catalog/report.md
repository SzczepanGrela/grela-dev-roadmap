# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-27**<br>
Estimated completion / szacowane ukończenie: **58%**<br>
Forecast / prognoza: **2026-10-28–2026-11-09**, 51–99 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

October 27: NAB26-1/P1 accepted and merged in PR #2; main 2e7cd6f8 has a qualified published image with verified provenance/SBOM. Turnstile, an unrouted media Worker, RSA/JWKS and Coolify settings are prepared. Running public app remains a5a0d90 and R2 media remain public; production protection is not active. See docs/2026-10-27-netfilmx-protection-preparation.md. Complete private-R2/gateway cutover and real-provider anonymous playback/negative tests; admin provisioning can be explicitly deferred with panel acceptance open. Then configure actual production CI access/contract, accept compatible rolling/rollback and backups of new PG/keys/configuration, and verify the protected caller before activating automatic promotion. UI and uploads/transcoding stay separate. Earlier dated evidence and historical effort/calendar estimates retain scope. Only repository-governance is closed from actual readback: its 2–3 h are removed and aggregate scores/totals recomputed mechanically; no new general percentage/effort forecast is invented.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Source state:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate. October 27: only the completed repository-governance task is removed from remaining work (2–3 h); aggregate scores/totals are recalculated. Other per-task estimates and calendar dates remain historical, not a current delivery promise.
- **Tests and CI:** October 27 main CI 40460430114 success: Test and audit, Qualify exact image, Quality gate and Publish tested digest. Deploy skipped. Qualified artifact published without rebuilding as sha256:dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055; linux/amd64, full revision and signed provenance/SPDX verified. Both deployment flags false; protected main/production confirmed. Actual private CI configuration/caller remains incomplete.
- **Production:** First public launch accepted October 24 on a5a0d90a332cc47931b5aff924f817ab6366918c. October 27 readiness still reports that revision; selected VPS readback finds healthy web/PG, 7 videos, 10 subtitles, 0 users/admins, no restarts/OOM. Provider preparation created widget, unrouted Worker with R2 binding/limits/public JWKS and disabled outer cache/logging/public previews; Coolify settings/key mount saved, successor image pulled. No web/domain cutover; R2 media remain public and the runtime read-only key mount is pending. Root-only same-host snapshot readability passed, not scheduled backup/restore acceptance. No new media transfer, legacy cleanup or upload/transcoding activation. See docs/2026-10-27-netfilmx-protection-preparation.md.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | October 27 confirms main/production protection and merged PR #2. The specific branch-protection task is complete; wider repository/documentation hygiene is separate. |
| Quality CI | Complete | Main CI 40460430114 passes test/audit, exact-image qualification/scan and Quality; 321 .NET, 80 Python, 23 gateway plus Chromium/Firefox. This control certifies CI scope, not live Turnstile or deferred device tests. |
| Immutable release | Complete | October 27 qualified main artifact published without rebuild; exact digest/revision/linux-amd64 and cryptographic provenance/SPDX verified. Deployment is separate and still pending for this successor. |
| Deployment access | Partial | Protected production exists, but required Coolify secrets/contract and public URL are absent at repository/environment scope. Existing Tailscale secret names do not establish actual OIDC/private runner access. Operator temporary API access does not certify CD; old SSH consumers need reconciliation. |
| Network, TLS and client identity | Partial | First public HTTPS/catalogue/auth/player launch accepted October 24; October 27 retains private app network/no host ports and exact proxy peers. Media gateway cutover/bypass and broader identity acceptance remain separate. |
| Abuse protection | Partial | October 27: NAB26-1/P1 accepted and merged in PR #2; main 2e7cd6f8 has a qualified published image with verified provenance/SBOM. Turnstile, an unrouted media Worker, RSA/JWKS and Coolify settings are prepared. Running public app remains a5a0d90 and R2 media remain public; production protection is not active. See docs/2026-10-27-netfilmx-protection-preparation.md. Real provider/cutover/negative acceptance pending. Admin test can be explicitly deferred; uploads/transcoding and automatic release flags stay false. |
| Runtime safety | Partial | October 27 selected live web and PG each have 1 CPU/512 MiB, no additional swap, no published host ports, healthy/no OOM/restarts. Signing-key RO mount is saved, not yet verified in a new container; overlap/security exceptions retain their scope. |
| Readiness and preflight | Partial | Initial explicit migration/import, persistent PG/keyring and public ready revision accepted. October 27 live revision remains a5a0d90; new published candidate and real protected provider path not deployed/accepted. Managed health gate is configured but actual successor/rollback acceptance remains open. |
| Managed release and recovery | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Partial | Local PG/keyring recovery evidence retained. October 27 same-VPS snapshot/readability and separate playback-key copy are preparation only. Scheduled new-PG/keys/config backup, retention/location, failure visibility and isolated restore remain; legacy recovery programme stays withdrawn. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local desktop/Android credits readability partially confirmed; visual design not approved. Future UI/mobile/credits scope has explicit responsive, accessibility, player and attribution criteria. Other presentation checks remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production migration/import and catalogue launch were accepted October 24; October 27 confirms retained 7 videos/10 subtitles. Remaining i18n and later upload/transcoding gates stay open; do not repeat accepted media work.

#### Modernize UI, mobile interaction and credits presentation

**Implementation · Planned · 0% · difficulty 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

October 18 draft 6f57dbb: CI/CD 39086857490 and audit 39086857541 green, 304 .NET/image/scan/Quality; Publish/Deploy skipped. Coordinator 24 focused manifest/credits tests and 67 new/78 prior evidence checks pass; local image ID independently read. Worker 14 actual-player public HLS cases inspected, TLS/CORS enabled, app origin represented privately. Production gates, Sintel uncertainty and manual deferrals remain. October 22 NP18-1 at 206b467: CI 39688750629 / audit 39688750573 success, 304 .NET and image/Quality; Publish/Deploy skipped. Coordinator independently passes 79 Python tests, verifies 23 worker files and local image identity; 14 local PG tests and bounded PG18 workload evidence inspected. October 23 main CI 39875110432 passes application tests/audits, exact-image qualification, scan, SBOM and Quality. This is a publication checkpoint, not application deployment or new manual media acceptance. October 27 NAB26-1/P1/main CI 40460430114 passes 321 .NET, 80 Python, 23 gateway, Chromium/Firefox and exact-image/security qualification. Coordinator independently accepted P1 behavior. Historical media/device/Sintel deferrals remain; CI acceptance is distinct from live provider behavior.

#### Require green CI on protected main

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

Completed on October 27 effective GitHub readback: protected main requires PR/resolved discussions and strict Quality bound to GitHub Actions; no force-push/deletion/bypass. Production requires operator approval, main only, no admin bypass; self-review follows accepted single-operator policy. PR #1/#2 merged through normal protection. CI credentials/OIDC/caller remain immutable-deploy; broader documentation/hygiene remain architecture-docs/repository-hygiene. Closing only this evidenced task removes its previous 2–3 h remaining estimate.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

October 20 coordinator accepted 052f439: first-release/delivery/status/database/keyring/recovery docs separate launch A from final rolling/new-state backups B and later uploads C. Existing commands, R1 and bootstrap separation preserved; stale media blocker removed. No further legacy recovery/off-host prerequisite. Runtime/media acceptance remains 6f57dbb; real production settings/results still need recording. No new runtime pass or effort re-estimate. October 22 PG18 configuration, storage and local qualification docs accepted at 206b467. Current target uses the reviewed PG18.6-trixie digest and fresh parent volume; earlier PG16/media evidence remains historical. A/B/C unchanged. October 23 coordinator records fresh-PG/credential/key-directory/auth preparation and main image publication separately from pending app bootstrap; no effort re-estimate. October 27: current publication/provider-preparation evidence, actual CD gaps and component/key/cache/rollback standard reconciled in roadmap/private VPS documentation. Current procedure separates web, PG and Cloudflare Worker updates; publication is not deployment. Final runtime acceptance will require another dated closeout, not a new claim here.

#### Protect anonymous playback and retain admin access

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

October 27: NAB26-1/P1 accepted, PR #2 merged and image published; Managed widget, unrouted R2 Worker, RSA/JWKS and Coolify variables/key mount prepared. Old public app and public R2 domain unchanged. Remaining: coordinated private-media cutover, qualified web deployment, real Turnstile/playback/denial/cache tests, effective RO mount and provider limit behavior. No cost alerts/spending cutoff. Admin setup can be deferred with panel test explicitly open. See docs/2026-10-27-netfilmx-protection-preparation.md.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

October 27: PR #2 main 2e7cd6f8 qualified/published at digest dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055 with verified attestations; previous a5a0d90 is running. Build/publish works, Deploy skipped and both flags false. GitHub production lacks required Coolify access/contract and URL configuration; actual runner OIDC/private API/caller unaccepted. Reconcile old SSH credential consumers. Workflow deploys web only; PG/Worker require separate versioned procedure. Complete access, protected baseline/rolling acceptance and controlled normal caller before activation.

#### Accept health-gated rolling releases and scoped recovery

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance. NetFilmx: no further legacy recovery/off-host prerequisite; use accepted local tests and verify final new-deployment coverage. October 21 NP18-1 adds bounded local PG18 persistence/session and small new-database restore regression coverage before launch. It does not reopen legacy recovery or certify production rolling/backups. October 22 NP18-1 passes bounded PG18 migration/import/grants, same-volume recreation, two-web registration/login/CSRF/refresh/logout and small new-PG restore with original keyring. This closes the database-version qualification, not production rolling or scheduled backups. October 27: first-launch scope already accepted. Preparation saved a same-VPS private PG/keyring/credential/configuration snapshot and playback signing-key recovery copy; dump/tar readability only. Final rolling/compatible protected rollback, overlap, sessions/shared keys/schema, scheduled new-state backups/retention/location and isolated restore/failure visibility remain open. Gateway/key configuration is part of recovery. No rollback to public R2; use closed maintenance until a compatible protected baseline exists.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA. October 26 scope: NetFilmx playback cost alerts and spending cutoff are explicitly excluded; this does not waive separate backup-failure visibility or other applications' budgets. October 27: grant-bearing URL logging disabled in prepared Worker (observability/Logpush/tails); this is secret hygiene, not accepted failure alerting. Preserve useful nonsecret deployment/backup diagnostics. Cost alerts/spending cutoff stay excluded; shared platform monitoring and later transcoding visibility remain separate.

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

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

27 października: NAB26-1/P1 odebrane i scalone w PR #2; main 2e7cd6f8 ma kwalifikowany opublikowany obraz ze sprawdzonym provenance/SBOM. Turnstile, Worker bez publicznej trasy, RSA/JWKS i ustawienia Coolify są przygotowane. Publiczna aplikacja nadal działa na a5a0d90, a media R2 są publiczne; nowa ochrona nie jest aktywna. Zobacz docs/2026-10-27-netfilmx-protection-preparation.md. Dokończyć przełączenie na prywatny R2/gateway oraz prawdziwe testy Turnstile, anonimowego odtwarzania i odmów. Konto admina można jawnie odłożyć z otwartym odbiorem panelu. Następnie skonfigurować dostęp/kontrakt CI, odebrać zgodny rolling/rollback, backupy nowego PG/kluczy/konfiguracji i chronione wywołanie workflowu przed aktywacją automatycznej promocji. UI i upload/transkodowanie osobno. Wcześniejsze dowody oraz historyczne estymaty pracy/kalendarza zachowują zakres. Z rzeczywistego odczytu zamknięto tylko repository-governance: usunięto jego 2–3 h i mechanicznie przeliczono sumy/wskaźniki; bez nowej ogólnej wyceny postępu/pracy.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Stan źródła:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate. October 27: only the completed repository-governance task is removed from remaining work (2–3 h); aggregate scores/totals are recalculated. Other per-task estimates and calendar dates remain historical, not a current delivery promise.
- **Testy i CI:** October 27 main CI 40460430114 success: Test and audit, Qualify exact image, Quality gate and Publish tested digest. Deploy skipped. Qualified artifact published without rebuilding as sha256:dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055; linux/amd64, full revision and signed provenance/SPDX verified. Both deployment flags false; protected main/production confirmed. Actual private CI configuration/caller remains incomplete.
- **Produkcja:** First public launch accepted October 24 on a5a0d90a332cc47931b5aff924f817ab6366918c. October 27 readiness still reports that revision; selected VPS readback finds healthy web/PG, 7 videos, 10 subtitles, 0 users/admins, no restarts/OOM. Provider preparation created widget, unrouted Worker with R2 binding/limits/public JWKS and disabled outer cache/logging/public previews; Coolify settings/key mount saved, successor image pulled. No web/domain cutover; R2 media remain public and the runtime read-only key mount is pending. Root-only same-host snapshot readability passed, not scheduled backup/restore acceptance. No new media transfer, legacy cleanup or upload/transcoding activation. See docs/2026-10-27-netfilmx-protection-preparation.md.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | 27 października potwierdzono ochronę main/production i scalenie PR #2. Zadanie ochrony gałęzi zakończone; szersza higiena repozytorium/dokumentacji pozostaje osobna. |
| Quality CI | Gotowe | CI main 40460430114 zalicza testy/audyt, kwalifikację/skan obrazu i Quality; 321 .NET, 80 Python, 23 gatewaya oraz Chromium/Firefox. Odbiór dotyczy CI, nie prawdziwego Turnstile ani odłożonych urządzeń. |
| Niezmienne wydanie | Gotowe | 27 października kwalifikowany artefakt main opublikowano bez przebudowy; digest/rewizja/linux-amd64 i podpisane provenance/SPDX zweryfikowane. Wdrożenie tej wersji pozostaje osobnym etapem. |
| Dostęp wdrożeniowy | Częściowe | Chronione production istnieje, ale brakuje wymaganych sekretów/kontraktu Coolify i publicznego URL na poziomie repozytorium/środowiska. Nazwy sekretów Tailscale nie potwierdzają rzeczywistego OIDC/dostępu runnera. Tymczasowy dostęp operatora do API nie odbiera CD; konsumenci dawnych SSH wymagają uzgodnienia. |
| Sieć, TLS i tożsamość klienta | Częściowe | Pierwszy start HTTPS/katalog/auth/player odebrano 24 października; 27 października zachowano prywatną sieć/brak portów hosta i dokładne proxy. Przełączenie/brak obejść gatewaya oraz szerszy odbiór tożsamości pozostają osobne. |
| Ochrona przed nadużyciami | Częściowe | 27 października: NAB26-1/P1 odebrane i scalone w PR #2; main 2e7cd6f8 ma kwalifikowany opublikowany obraz ze sprawdzonym provenance/SBOM. Turnstile, Worker bez publicznej trasy, RSA/JWKS i ustawienia Coolify są przygotowane. Publiczna aplikacja nadal działa na a5a0d90, a media R2 są publiczne; nowa ochrona nie jest aktywna. Zobacz docs/2026-10-27-netfilmx-protection-preparation.md. Odbiór prawdziwego dostawcy/przełączenia/odmów oczekuje. Test admina można jawnie odłożyć; uploads/transcoding i automatyczne wydania nadal false. |
| Bezpieczeństwo runtime | Częściowe | Odczyt 27 października: web i PG po 1 CPU/512 MiB, bez dodatkowego swapu i portów hosta, healthy/bez OOM/restartów. Mount RO klucza podpisującego zapisany, ale jeszcze niezweryfikowany w nowym kontenerze; overlap/wyjątki bezpieczeństwa pozostają osobne. |
| Readiness i preflight | Częściowe | Jawna migracja/import, trwały PG/keyring i publiczna readiness odebrane przy pierwszym starcie. 27 października produkcja nadal a5a0d90; nowy obraz i prawdziwa chroniona ścieżka nie są wdrożone/odebrane. Zarządzany healthcheck skonfigurowany, rzeczywisty następca/rollback nadal oczekuje. |
| Zarządzane wydanie i odzyskiwanie | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Częściowe | Zachowano lokalne dowody odzyskiwania PG/keyring. Kopia na tym samym VPS/czytelność i osobna kopia klucza playback z 27 października to przygotowanie. Harmonogram backupu nowego PG/kluczy/konfiguracji, retencja/miejsce, widoczność błędów i izolowany restore oczekują; legacy pozostaje wycofane. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Czytelność credits częściowo potwierdzona na komputerze/Androidzie; wygląd niezaakceptowany. Osobne UI/mobile/credits ma kryteria responsywności, dostępności, playera i atrybucji. Pozostały odbiór prezentacji nadal otwarty. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production migration/import and catalogue launch were accepted October 24; October 27 confirms retained 7 videos/10 subtitles. Remaining i18n and later upload/transcoding gates stay open; do not repeat accepted media work.

#### Zmodernizować UI, obsługę mobilną i prezentację credits

**Implementacja · Planowane · 0% · trudność 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

October 18 draft 6f57dbb: CI/CD 39086857490 and audit 39086857541 green, 304 .NET/image/scan/Quality; Publish/Deploy skipped. Coordinator 24 focused manifest/credits tests and 67 new/78 prior evidence checks pass; local image ID independently read. Worker 14 actual-player public HLS cases inspected, TLS/CORS enabled, app origin represented privately. Production gates, Sintel uncertainty and manual deferrals remain. October 22 NP18-1 at 206b467: CI 39688750629 / audit 39688750573 success, 304 .NET and image/Quality; Publish/Deploy skipped. Coordinator independently passes 79 Python tests, verifies 23 worker files and local image identity; 14 local PG tests and bounded PG18 workload evidence inspected. October 23 main CI 39875110432 passes application tests/audits, exact-image qualification, scan, SBOM and Quality. This is a publication checkpoint, not application deployment or new manual media acceptance. October 27 NAB26-1/P1/main CI 40460430114 passes 321 .NET, 80 Python, 23 gateway, Chromium/Firefox and exact-image/security qualification. Coordinator independently accepted P1 behavior. Historical media/device/Sintel deferrals remain; CI acceptance is distinct from live provider behavior.

#### Wymagać zielonego CI na chronionym main

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

Completed on October 27 effective GitHub readback: protected main requires PR/resolved discussions and strict Quality bound to GitHub Actions; no force-push/deletion/bypass. Production requires operator approval, main only, no admin bypass; self-review follows accepted single-operator policy. PR #1/#2 merged through normal protection. CI credentials/OIDC/caller remain immutable-deploy; broader documentation/hygiene remain architecture-docs/repository-hygiene. Closing only this evidenced task removes its previous 2–3 h remaining estimate.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

October 20 coordinator accepted 052f439: first-release/delivery/status/database/keyring/recovery docs separate launch A from final rolling/new-state backups B and later uploads C. Existing commands, R1 and bootstrap separation preserved; stale media blocker removed. No further legacy recovery/off-host prerequisite. Runtime/media acceptance remains 6f57dbb; real production settings/results still need recording. No new runtime pass or effort re-estimate. October 22 PG18 configuration, storage and local qualification docs accepted at 206b467. Current target uses the reviewed PG18.6-trixie digest and fresh parent volume; earlier PG16/media evidence remains historical. A/B/C unchanged. October 23 coordinator records fresh-PG/credential/key-directory/auth preparation and main image publication separately from pending app bootstrap; no effort re-estimate. October 27: current publication/provider-preparation evidence, actual CD gaps and component/key/cache/rollback standard reconciled in roadmap/private VPS documentation. Current procedure separates web, PG and Cloudflare Worker updates; publication is not deployment. Final runtime acceptance will require another dated closeout, not a new claim here.

#### Chronić anonimowe odtwarzanie i zachować dostęp admina

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

October 27: NAB26-1/P1 accepted, PR #2 merged and image published; Managed widget, unrouted R2 Worker, RSA/JWKS and Coolify variables/key mount prepared. Old public app and public R2 domain unchanged. Remaining: coordinated private-media cutover, qualified web deployment, real Turnstile/playback/denial/cache tests, effective RO mount and provider limit behavior. No cost alerts/spending cutoff. Admin setup can be deferred with panel test explicitly open. See docs/2026-10-27-netfilmx-protection-preparation.md.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

October 27: PR #2 main 2e7cd6f8 qualified/published at digest dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055 with verified attestations; previous a5a0d90 is running. Build/publish works, Deploy skipped and both flags false. GitHub production lacks required Coolify access/contract and URL configuration; actual runner OIDC/private API/caller unaccepted. Reconcile old SSH credential consumers. Workflow deploys web only; PG/Worker require separate versioned procedure. Complete access, protected baseline/rolling acceptance and controlled normal caller before activation.

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance. NetFilmx: no further legacy recovery/off-host prerequisite; use accepted local tests and verify final new-deployment coverage. October 21 NP18-1 adds bounded local PG18 persistence/session and small new-database restore regression coverage before launch. It does not reopen legacy recovery or certify production rolling/backups. October 22 NP18-1 passes bounded PG18 migration/import/grants, same-volume recreation, two-web registration/login/CSRF/refresh/logout and small new-PG restore with original keyring. This closes the database-version qualification, not production rolling or scheduled backups. October 27: first-launch scope already accepted. Preparation saved a same-VPS private PG/keyring/credential/configuration snapshot and playback signing-key recovery copy; dump/tar readability only. Final rolling/compatible protected rollback, overlap, sessions/shared keys/schema, scheduled new-state backups/retention/location and isolated restore/failure visibility remain open. Gateway/key configuration is part of recovery. No rollback to public R2; use closed maintenance until a compatible protected baseline exists.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA. October 26 scope: NetFilmx playback cost alerts and spending cutoff are explicitly excluded; this does not waive separate backup-failure visibility or other applications' budgets. October 27: grant-bearing URL logging disabled in prepared Worker (observability/Logpush/tails); this is secret hygiene, not accepted failure alerting. Preserve useful nonsecret deployment/backup diagnostics. Cost alerts/spending cutoff stay excluded; shared platform monitoring and later transcoding visibility remain separate.

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
