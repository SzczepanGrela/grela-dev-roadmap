# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-20**<br>
Estimated completion / szacowane ukończenie: **54%**<br>
Forecast / prognoza: **2026-10-28–2026-11-09**, 53–102 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Latest October 20 review accepts documentation-only 052f439 and the A/B/C release plan without blocking findings. Accepted runtime/active catalogue/local image stay at 6f57dbb. Coordinator next owns effective protection/access, selected main digest and fresh-PG bootstrap inputs. Further legacy backup/off-host/restore is withdrawn; final rolling and new-PG/keyring/configuration backup/recovery remain open. No app merge/GHCR/deploy. Sintel unresolved, manual trials deferred, uploads/worker false; UI/hygiene planned. Progress, effort and dated estimates unchanged. Later same-day protection setup is accepted; remaining next step is private access/target configuration, not reapplying main/environment rules.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Source state:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Tests and CI:** October 20 CI/CD 39403987568 and dependency audit 39403987575 successful for 052f439; sealed TRX 304 .NET with zero failures/skips, image/scan/Quality pass, Publish/Deploy skipped. Accepted real-media local image remains based on 6f57dbb, distinct from CI and not a published main digest. Earlier two-web recovery remains tied to 986e9aa.
- **Production:** Earlier 1398-object media publication/full HTTPS and 24 retained old objects remain accepted. Exactly 17 catalogue references active in draft candidate; local real-media image/player acceptance complete. No app merge/GHCR/deploy/VPS change; uploads/worker false. Local app origin does not prove production app routing/certificate/proxy. Production protection/budgets/cutover remain. Further legacy backup/off-host/restore is withdrawn; final rolling and new-PG/keyring/configuration backup/recovery remain planned, not accepted. October 20 accepts only the release instructions; no protection/setup or app release was performed by that review. Later October 20: active main ruleset 25478258, reviewed main-only production and both false flags independently read back. Main source and draft unchanged; no workflow dispatched. Private access/real caller remain pending; variables do not retrofit legacy SSH workflow code.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | October 20 effective readback confirms active main PR/Quality protection, reviewed main-only production and both false release flags. This supersedes the earlier absent-protection observation. Broader repository hygiene/neutral existing branch naming remain unverified; no history/branch changes. Status retains remaining governance scope. |
| Quality CI | Partial | October 18 6f57dbb CI/audits green, 304 .NET; coordinator 24 focused tests and evidence/image checks pass. Local final-image real catalogue/player accepted; production gates remain. Other control dates unchanged. |
| Immutable release | Partial | Qualified-image/digest/attestation workflow and R1 prepared. Main/environment protection installed October 20; both flags false. Private access, published main digest and bootstrap/caller acceptance still pending. |
| Deployment access | Partial | Legacy SSH path retired in candidate; production required review/main-only/no-admin-bypass configured October 20. Scoped private API/OIDC/pull access and effective caller remain unaccepted; old credential consumers not reconciled. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Local two-web/PG/keyring fixture verifies effective 1 CPU/512 MiB limits, no swap and non-root web; maximum web peak 441.76 MiB. Production/encoder headroom unaccepted. |
| Readiness and preflight | Partial | October 18 real approved manifest imported by candidate image CLI after explicit PG migration/runtime grants; repeat refused, PG/web restart preserves IDs/mappings and readiness. Production bootstrap/schema-compatible rollback still unaccepted. |
| Managed release and recovery | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Partial | Preserved source reconciled; local PG/keyring recovery accepted with synthetic media. October 20 policy withdraws further legacy backup/off-host/restore; existing copies/results remain. Final new-deployment rolling and new-PG/keyring/configuration backup/recovery are planned, not accepted; uploads/worker gates stay separate. No new runtime control assessment. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local desktop/Android credits readability partially confirmed; visual design not approved. Future UI/mobile/credits scope has explicit responsive, accessibility, player and attribution criteria. Other presentation checks remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production import, remaining i18n and later upload/worker gates stay open.

#### Modernize UI, mobile interaction and credits presentation

**Implementation · Planned · 0% · difficulty 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

October 18 draft 6f57dbb: CI/CD 39086857490 and audit 39086857541 green, 304 .NET/image/scan/Quality; Publish/Deploy skipped. Coordinator 24 focused manifest/credits tests and 67 new/78 prior evidence checks pass; local image ID independently read. Worker 14 actual-player public HLS cases inspected, TLS/CORS enabled, app origin represented privately. Production gates, Sintel uncertainty and manual deferrals remain.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 20 live effective readback: main ruleset 25478258 active, PR/resolved threads/strict Quality gate bound to GitHub Actions required, no force-push/deletion/bypass. Production requires operator review with self-review allowed, no admin bypass and main branch only. Both activation variables false. Single-operator zero independent PR approvals retained. Actual private access/caller and credential-consumer reconciliation remain separate; no source merge or release.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

October 20 coordinator accepted 052f439: first-release/delivery/status/database/keyring/recovery docs separate launch A from final rolling/new-state backups B and later uploads C. Existing commands, R1 and bootstrap separation preserved; stale media blocker removed. No further legacy recovery/off-host prerequisite. Runtime/media acceptance remains 6f57dbb; real production settings/results still need recording. No new runtime pass or effort re-estimate.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Main/environment protection installed and read back October 20. Private access, published main digest, first healthy bootstrap and real protected caller remain unaccepted.

#### Accept health-gated rolling releases and scoped recovery

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance. NetFilmx: no further legacy recovery/off-host prerequisite; use accepted local tests and verify final new-deployment coverage.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

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

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Najnowszy odbiór 20 października przyjmuje dokumentacyjny 052f439 i plan A/B/C bez uwag blokujących. Odebrany kod/aktywny katalog/lokalny obraz pozostają na 6f57dbb. Koordynator odpowiada teraz za skuteczną ochronę/dostęp, wybrany digest main i dane bootstrapu świeżego PG. Dalsze backupy/off-host/restore legacy wycofane; docelowy rolling i backupy/odtworzenie nowego PG/kluczy/konfiguracji otwarte. Bez merge/GHCR/deploy aplikacji. Sintel nierozstrzygnięty, próby ręczne odłożone, uploads/worker false; UI/porządki planowane. Postęp, praca i datowane estymaty bez zmian. Późniejszy tego samego dnia etap ochrony odebrany; następny krok to prywatny dostęp/konfiguracja celu, bez ponownego ustawiania reguł main/środowiska.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Stan źródła:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Testy i CI:** October 20 CI/CD 39403987568 and dependency audit 39403987575 successful for 052f439; sealed TRX 304 .NET with zero failures/skips, image/scan/Quality pass, Publish/Deploy skipped. Accepted real-media local image remains based on 6f57dbb, distinct from CI and not a published main digest. Earlier two-web recovery remains tied to 986e9aa.
- **Produkcja:** Earlier 1398-object media publication/full HTTPS and 24 retained old objects remain accepted. Exactly 17 catalogue references active in draft candidate; local real-media image/player acceptance complete. No app merge/GHCR/deploy/VPS change; uploads/worker false. Local app origin does not prove production app routing/certificate/proxy. Production protection/budgets/cutover remain. Further legacy backup/off-host/restore is withdrawn; final rolling and new-PG/keyring/configuration backup/recovery remain planned, not accepted. October 20 accepts only the release instructions; no protection/setup or app release was performed by that review. Later October 20: active main ruleset 25478258, reviewed main-only production and both false flags independently read back. Main source and draft unchanged; no workflow dispatched. Private access/real caller remain pending; variables do not retrofit legacy SSH workflow code.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Odczyt 20 października potwierdza ochronę PR/Quality main, zatwierdzane production ograniczone do main i obie flagi wdrożeń false. Zastępuje wcześniejszy brak ochrony. Szersze porządki repo/neutralne nazwy istniejących branchy pozostają niezweryfikowane; bez zmian historii/branchy. Status zachowuje pozostały zakres governance. |
| Quality CI | Częściowe | 18 października 6f57dbb: CI/audyty zielone, 304 .NET; 24 testy koordynatora i kontrola dowodów/obrazu zaliczone. Lokalny finalny obraz z rzeczywistym katalogiem/playerem odebrany; bramki produkcyjne pozostają. Daty innych kontroli bez zmian. |
| Niezmienne wydanie | Częściowe | Workflow kwalifikowanego obrazu/digestu/atestacji i R1 przygotowane. Ochrona main/środowiska zainstalowana 20 października; obie flagi false. Prywatny dostęp, opublikowany digest main i odbiór bootstrapu/wywołującego nadal oczekują. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; zatwierdzanie production/main-only/bez omijania przez administratora skonfigurowane 20 października. Prywatne API/OIDC/pull access i rzeczywisty wywołujący nieodebrane; konsumenci starych poświadczeń nieuzgodnieni. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Lokalny test dwóch webów/PG/keyring potwierdza 1 CPU/512 MiB, brak swapu i non-root web; maksymalny pik weba 441.76 MiB. Zapas produkcji/kodowania nieodebrany. |
| Readiness i preflight | Częściowe | 18 października rzeczywisty zatwierdzony manifest zaimportowano CLI obrazu po jawnej migracji PG/uprawnieniach runtime; powtórka odrzucona, restart PG/web zachowuje ID/powiązania i readiness. Produkcyjny bootstrap/rollback zgodny ze schematem nadal nieodebrany. |
| Zarządzane wydanie i odzyskiwanie | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Częściowe | Zachowane źródła uzgodnione; lokalne odzyskiwanie PG/keyring odebrane z syntetycznymi mediami. Polityka z 20 października wycofuje dalsze backupy/off-host/restore legacy; kopie/wyniki zachowane. Docelowy rolling nowego wdrożenia i backupy/odtworzenie nowego PG/kluczy/konfiguracji są planowane, nie odebrane; upload/worker osobno. Bez nowej oceny runtime. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Czytelność credits częściowo potwierdzona na komputerze/Androidzie; wygląd niezaakceptowany. Osobne UI/mobile/credits ma kryteria responsywności, dostępności, playera i atrybucji. Pozostały odbiór prezentacji nadal otwarty. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

At a357fd4 all seven retained originals use the shared FFmpegService for H.264/AAC adaptive HLS: 20 variants without upscaling, maximum 1920x1080 bounding box, first audio/AAC stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. October 18 superseding acceptance at 6f57dbb activates exactly seven HLS and ten VTT references, byte-identical approved proposal; real CLI import/restart and actual-player public-media results accepted locally. Historical two-MP4 proposal is not used. Production import, remaining i18n and later upload/worker gates stay open.

#### Zmodernizować UI, obsługę mobilną i prezentację credits

**Implementacja · Planowane · 0% · trudność 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

October 18 draft 6f57dbb: CI/CD 39086857490 and audit 39086857541 green, 304 .NET/image/scan/Quality; Publish/Deploy skipped. Coordinator 24 focused manifest/credits tests and 67 new/78 prior evidence checks pass; local image ID independently read. Worker 14 actual-player public HLS cases inspected, TLS/CORS enabled, app origin represented privately. Production gates, Sintel uncertainty and manual deferrals remain.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 20 live effective readback: main ruleset 25478258 active, PR/resolved threads/strict Quality gate bound to GitHub Actions required, no force-push/deletion/bypass. Production requires operator review with self-review allowed, no admin bypass and main branch only. Both activation variables false. Single-operator zero independent PR approvals retained. Actual private access/caller and credential-consumer reconciliation remain separate; no source merge or release.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

October 20 coordinator accepted 052f439: first-release/delivery/status/database/keyring/recovery docs separate launch A from final rolling/new-state backups B and later uploads C. Existing commands, R1 and bootstrap separation preserved; stale media blocker removed. No further legacy recovery/off-host prerequisite. Runtime/media acceptance remains 6f57dbb; real production settings/results still need recording. No new runtime pass or effort re-estimate.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Main/environment protection installed and read back October 20. Private access, published main digest, first healthy bootstrap and real protected caller remain unaccepted.

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance. NetFilmx: no further legacy recovery/off-host prerequisite; use accepted local tests and verify final new-deployment coverage.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

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
