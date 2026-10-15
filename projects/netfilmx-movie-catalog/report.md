# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-15**<br>
Estimated completion / szacowane ukończenie: **70%**<br>
Forecast / prognoza: **2026-10-05–2026-10-25**, 35–66 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Bounded subtitle implementation accepted. Operator quality/stereo/caption checks, audible Safari/mobile and twelve-object publication/actual HTTPS remain; twelve manifest keys inactive. Final-image real-media import/restart remains, earlier synthetic recovery is separate. Production budgets/backups/protection/legacy recovery/cutover open; uploads/worker off. Percentages and October 4 estimates retained without remeasurement or promised dates.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Source state:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Tests and CI:** CI/CD 38704058532 and Dependency audit 38704058491 green for f4aca03 October 15; logs inspected. Image/Quality pass, publish/deploy skipped. Runtime patched to .NET 10.0.13, SDK 10.0.401 unchanged. Scanner gates fixable HIGH/CRITICAL, not every advisory. Earlier recovery remains source 986e9aa, not this final image.
- **Production:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, zero rulesets/environments at October 12 readback; workflow gate code is not installed protection. |
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
| Web identity | Partial | Earlier seven-film/13-image evidence retained. New actual-player synthetic MP4/HLS caption selection/Off, seeking/keyboard and missing-track recovery pass in worker Chromium/Firefox. Real sidecars/manual audio/native devices and published HTTPS/CORS remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

Source reconciliation and credits/source evidence remain accepted. At f4aca03 ten Sintel WebVTTs, persistent subtitle relations, PG/SQLite migrations/import, actual player language/Off and source-retaining upload failure/retry handling are implemented and reviewed. Two MP4s unchanged. Twelve shipping keys remain null; manual media and later worker gates, remaining i18n stay open.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

Final f4aca03 CI: 294 .NET/zero skips, 34 Python, image/Quality and dependency audit green; publish/deploy skipped. Runtime image patched to .NET 10.0.13. Coordinator independently passed 56 focused tests and checked media identities. Worker actual-player Chromium/Firefox tests cover local synthetic MP4/HLS and missing VTT; audible/native-device/real HTTPS and actual Sintel timing remain unaccepted.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

Subtitle contract and twelve-object publication proposal reviewed. Keep previous rights/source/credits and synthetic recovery acceptance; operator media/device checks, publication/readback, final-image real-media import/restart and production recovery/cutover remain. Uploads/worker stay disabled.

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

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Subtitle implementation reviewed; retain all ten Sintel languages as WebVTT without reconverting unchanged MP4s. Operator media acceptance and twelve-object publication/readback precede manifest activation and final-image qualification. Coordinator owns protection, budgets, backup/cutover. Preserve originals and parent; uploads/worker and UI modernization remain later.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Implementacja napisów odebrana w ograniczonym zakresie. Pozostają odbiór jakości/stereo/napisów, odsłuch/Safari/mobile i publikacja dwunastu obiektów/rzeczywisty HTTPS; dwanaście kluczy manifestu nieaktywne. Import/restart finalnego obrazu z mediami pozostaje, wcześniejsze syntetyczne odtworzenie osobno. Limity/kopie/ochrona/odzyskiwanie/cutover otwarte; uploady/worker wyłączone. Procenty i estymaty z 4 października bez nowego pomiaru czy obiecanego terminu.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Stan źródła:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Testy i CI:** CI/CD 38704058532 and Dependency audit 38704058491 green for f4aca03 October 15; logs inspected. Image/Quality pass, publish/deploy skipped. Runtime patched to .NET 10.0.13, SDK 10.0.401 unchanged. Scanner gates fixable HIGH/CRITICAL, not every advisory. Earlier recovery remains source 986e9aa, not this final image.
- **Produkcja:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, zero rulesets/environments w odczycie 12 października; kod workflow nie stanowi aktywnej ochrony. |
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
| Tożsamość webowa | Częściowe | Zachowano wcześniejsze dowody siedmiu filmów/13 grafik. Nowe testy rzeczywistego playera na syntetycznych MP4/HLS: języki/Off, przewijanie/klawiatura i brak pliku napisów przechodzą w Chromium/Firefox wykonawcy. Rzeczywiste napisy/odsłuch/urządzenia i docelowy HTTPS/CORS pozostają. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

Source reconciliation and credits/source evidence remain accepted. At f4aca03 ten Sintel WebVTTs, persistent subtitle relations, PG/SQLite migrations/import, actual player language/Off and source-retaining upload failure/retry handling are implemented and reviewed. Two MP4s unchanged. Twelve shipping keys remain null; manual media and later worker gates, remaining i18n stay open.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

Final f4aca03 CI: 294 .NET/zero skips, 34 Python, image/Quality and dependency audit green; publish/deploy skipped. Runtime image patched to .NET 10.0.13. Coordinator independently passed 56 focused tests and checked media identities. Worker actual-player Chromium/Firefox tests cover local synthetic MP4/HLS and missing VTT; audible/native-device/real HTTPS and actual Sintel timing remain unaccepted.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

Subtitle contract and twelve-object publication proposal reviewed. Keep previous rights/source/credits and synthetic recovery acceptance; operator media/device checks, publication/readback, final-image real-media import/restart and production recovery/cutover remain. Uploads/worker stay disabled.

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

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Napisy odebrane technicznie; zachować dziesięć języków Sintel jako WebVTT bez ponownej konwersji niezmienionych MP4. Odbiór operatora i publikacja/odczyt dwunastu obiektów poprzedzają aktywację manifestu i kwalifikację finalnego obrazu. Koordynator odpowiada za ochronę, limity, kopie/cutover. Zachować oryginały i parent; uploady/worker oraz modernizacja UI później.
