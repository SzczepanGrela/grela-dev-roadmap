# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-16**<br>
Estimated completion / szacowane ukończenie: **54%**<br>
Forecast / prognoza: **2026-10-28–2026-11-09**, 53–102 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Subtitle code acceptance retained; manual media acceptance is partial on desktop Chrome and physical Android. Sintel voice/lip mismatch unresolved; technical timing comparison and flash/beep control do not accept it. Finish Home retry, Android ending/rotation/resume, all ten real tracks and exact device/audio record; Safari/iOS pending. Credits readability partially confirmed, design unapproved: separate planned UI task. Twelve publication keys inactive; real HTTPS and final-image/media/production gates remain, uploads/worker off. Adding UI scope changes weighted progress 70% to 57% and effort 35–66 to 51–98 h; existing task completion is unchanged. Low-confidence calendar is a rebased projection, not booked work. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `f4aca03ec70af427cd3da82912d88ea1b87aec20`
- **Source state:** Unchanged reviewed candidate f4aca03, clean worker checkout and remote draft PR #1 checked October 16. Only new UI/mobile/credits scope estimated at 16–32 h from operator feedback and reviewed UI evidence; previous task ranges retain their October 4 baseline without fresh remeasurement. Calendar rebased for the dedicated worker lane; candidate is not production.
- **Tests and CI:** CI/CD 38704058532 and Dependency audit 38704058491 green for f4aca03 October 15; logs inspected. Image/Quality pass, publish/deploy skipped. Runtime patched to .NET 10.0.13, SDK 10.0.401 unchanged. Scanner gates fixable HIGH/CRITICAL, not every advisory. Earlier recovery remains source 986e9aa, not this final image.
- **Production:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, zero rulesets/environments at October 12 readback; workflow gate code is not installed protection. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Partial | October 15 f4aca03 CI: 294 .NET/zero skips, 34 Python, qualified image/Quality and audits green. Coordinator passed 56 focused tests. Manual media, native devices and live gates remain. |
| Immutable release | Partial | R1 accepted; one qualified image and digest/attestation workflow prepared. PR publication skipped; effective protection, main digest and bootstrap unaccepted. |
| Deployment access | Partial | Legacy SSH path retired in candidate; scoped private access and protected environment still need effective configuration. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Local two-web/PG/keyring fixture verifies effective 1 CPU/512 MiB limits, no swap and non-root web; maximum web peak 441.76 MiB. Production/encoder headroom unaccepted. |
| Readiness and preflight | Partial | Explicit migration, runtime-role grants and synthetic empty-catalogue import/refusal pass locally; real accepted manifest and production bootstrap/schema-compatible rollback remain. |
| Atomic promotion and rollback | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. |
| Coordination and retention | Partial | Preserved source reconciled; local PG/keyring recovery accepted with synthetic media. Real legacy recovery/retention and production rolling remain; upload/worker gates stay separate. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local desktop/Android credits readability partially confirmed; visual design not approved. Future UI/mobile/credits scope has explicit responsive, accessibility, player and attribution criteria. Other presentation checks remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

Source reconciliation and credits/source evidence remain accepted. At f4aca03 ten Sintel WebVTTs, persistent subtitle relations, PG/SQLite migrations/import, actual player language/Off and source-retaining upload failure/retry handling are implemented and reviewed. Two MP4s unchanged. Twelve shipping keys remain null; manual media and later worker gates, remaining i18n stay open.

#### Modernize UI, mobile interaction and credits presentation

**Implementation · Planned · 0% · difficulty 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

October 15 f4aca03 CI: 294 .NET/zero skips, 34 Python, image/Quality and dependency audit green; publish/deploy skipped. Runtime 10.0.13, earlier coordinator 56 focused tests accepted. October 15–16 operator Chrome desktop/physical Android checks partially pass; all-ten-real-track rendering, remaining Android checks, Safari/iOS and actual HTTPS remain. Same-MP4 native/Vidstack comparison and sampled source/output timing do not resolve perceived Sintel voice/lip mismatch.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

Subtitle contract and twelve-object proposal retained. October 16 manual record distinguishes partial local/device acceptance, unresolved Sintel sync, readable credits and unapproved visual design. UI/mobile/credits now has its own planned task and acceptance brief. Keep previous source/credits and synthetic recovery acceptance separate from publication/readback, final-image real-media import/restart and production recovery/cutover; uploads/worker off.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Qualify readiness, stateful rolling updates and rollback

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Subtitle implementation reviewed; retain all ten Sintel languages as WebVTT without reconverting unchanged MP4s. Operator media acceptance and twelve-object publication/readback precede manifest activation and final-image qualification. Coordinator owns protection, budgets, backup/cutover. Preserve originals and parent; uploads/worker and UI modernization remain later.
- October 16: preserve scoped manual passes without claiming Sintel synchronization acceptance or inventing an offset. Credits readability is partially confirmed; visual design is not approved. Plan UI/mobile/credits separately after the current release work, retaining all creator/licence/source/change attribution.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Odbiór kodu napisów zachowany; ręczny odbiór mediów częściowy w Chrome na komputerze i fizycznym Androidzie. Rozminięcie głosu i ust Sintela niewyjaśnione; porównanie czasów i próba błysk/dźwięk nie zamykają uwagi. Pozostają Home, końcówka/obrót/wznowienie Androida, wszystkie 10 ścieżek i dane urządzenia/audio; Safari/iOS pending. Credits częściowo czytelne, wygląd niezaakceptowany: osobne planowane UI. Dwanaście kluczy nieaktywnych; HTTPS i odbiór finalnego obrazu/produkcji nadal otwarte, uploady/worker wyłączone. Dodanie UI zmienia ważony postęp 70% na 57% i pracę 35–66 na 51–98 h; ukończenie wcześniejszych zadań bez zmian. Daty o niskiej pewności są przeliczoną prognozą, nie rezerwacją pracy. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `f4aca03ec70af427cd3da82912d88ea1b87aec20`
- **Stan źródła:** Unchanged reviewed candidate f4aca03, clean worker checkout and remote draft PR #1 checked October 16. Only new UI/mobile/credits scope estimated at 16–32 h from operator feedback and reviewed UI evidence; previous task ranges retain their October 4 baseline without fresh remeasurement. Calendar rebased for the dedicated worker lane; candidate is not production.
- **Testy i CI:** CI/CD 38704058532 and Dependency audit 38704058491 green for f4aca03 October 15; logs inspected. Image/Quality pass, publish/deploy skipped. Runtime patched to .NET 10.0.13, SDK 10.0.401 unchanged. Scanner gates fixable HIGH/CRITICAL, not every advisory. Earlier recovery remains source 986e9aa, not this final image.
- **Produkcja:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, zero rulesets/environments w odczycie 12 października; kod workflow nie stanowi aktywnej ochrony. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Częściowe | CI f4aca03 z 15 października: 294 .NET/zero pominięć, 34 Python, kwalifikacja obrazu/Quality i audyty zielone. Koordynator zaliczył 56 ukierunkowanych testów. Odbiór ręczny mediów, urządzeń i produkcji pozostaje. |
| Niezmienne wydanie | Częściowe | R1 odebrane; przygotowano kwalifikowany obraz oraz workflow digest/attestation. Publikacja PR pominięta; ochrona, digest main i bootstrap nieodebrane. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; prywatny dostęp i chronione środowisko wymagają konfiguracji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Lokalny test dwóch webów/PG/keyring potwierdza 1 CPU/512 MiB, brak swapu i non-root web; maksymalny pik weba 441.76 MiB. Zapas produkcji/kodowania nieodebrany. |
| Readiness i preflight | Częściowe | Jawna migracja, uprawnienia runtime i syntetyczny import/odmowa importu przechodzą lokalnie; pozostają rzeczywisty manifest i produkcyjny bootstrap/rollback zgodny ze schematem. |
| Atomowa promocja i rollback | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. |
| Koordynacja i retencja | Częściowe | Zachowane źródła uzgodnione; lokalne odzyskiwanie PG/keyring odebrane z syntetycznymi mediami. Pozostają odzyskiwanie/retencja starego wdrożenia i rolling produkcji; upload/worker osobno. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Czytelność credits częściowo potwierdzona na komputerze/Androidzie; wygląd niezaakceptowany. Osobne UI/mobile/credits ma kryteria responsywności, dostępności, playera i atrybucji. Pozostały odbiór prezentacji nadal otwarty. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

Source reconciliation and credits/source evidence remain accepted. At f4aca03 ten Sintel WebVTTs, persistent subtitle relations, PG/SQLite migrations/import, actual player language/Off and source-retaining upload failure/retry handling are implemented and reviewed. Two MP4s unchanged. Twelve shipping keys remain null; manual media and later worker gates, remaining i18n stay open.

#### Zmodernizować UI, obsługę mobilną i prezentację credits

**Implementacja · Planowane · 0% · trudność 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

October 15 f4aca03 CI: 294 .NET/zero skips, 34 Python, image/Quality and dependency audit green; publish/deploy skipped. Runtime 10.0.13, earlier coordinator 56 focused tests accepted. October 15–16 operator Chrome desktop/physical Android checks partially pass; all-ten-real-track rendering, remaining Android checks, Safari/iOS and actual HTTPS remain. Same-MP4 native/Vidstack comparison and sampled source/output timing do not resolve perceived Sintel voice/lip mismatch.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

Subtitle contract and twelve-object proposal retained. October 16 manual record distinguishes partial local/device acceptance, unresolved Sintel sync, readable credits and unapproved visual design. UI/mobile/credits now has its own planned task and acceptance brief. Keep previous source/credits and synthetic recovery acceptance separate from publication/readback, final-image real-media import/restart and production recovery/cutover; uploads/worker off.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Sprawdzić readiness, rolling update ze stanem i rollback

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Napisy odebrane technicznie; zachować dziesięć języków Sintel jako WebVTT bez ponownej konwersji niezmienionych MP4. Odbiór operatora i publikacja/odczyt dwunastu obiektów poprzedzają aktywację manifestu i kwalifikację finalnego obrazu. Koordynator odpowiada za ochronę, limity, kopie/cutover. Zachować oryginały i parent; uploady/worker oraz modernizacja UI później.
- 16 października: zachować odebrane próby bez uznawania synchronizacji Sintela ani zgadywania offsetu. Czytelność credits częściowo potwierdzona; wygląd niezaakceptowany. UI/mobile/credits zaplanowane osobno po bieżącym wydaniu, z zachowaniem twórców/licencji/źródeł/zmian.
