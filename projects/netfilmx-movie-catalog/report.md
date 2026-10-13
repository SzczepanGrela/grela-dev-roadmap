# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-13**<br>
Estimated completion / szacowane ukończenie: **70%**<br>
Forecast / prognoza: **2026-10-05–2026-10-25**, 35–66 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Source reconciliation and bounded local catalogue recovery accepted; candidate stays draft. Two MP4 proposals and seven-video/13-image local Chromium evidence are preparation, not rights/real-origin acceptance. Exact Gran Dillama licence version, artwork sources/notices, derivative choices and Firefox/Safari/mobile remain open. Production limits, backup policy, protection and legacy recovery/cutover stay separate. Uploads/worker remain off. Percentages and October 4 effort estimates retained, not remeasured or promised dates.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Source state:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Tests and CI:** CI/CD 38383261814 and Dependency audit 38383261832 green for 35e32d7 October 13. Exact image/Quality pass; publish/deploy skipped. Local recovery used an earlier image at 986e9aa; runtime source is unchanged through reviewed head. Full local recovery is not a CI gate. Scanner gates fixable HIGH/CRITICAL, not every advisory.
- **Production:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, zero rulesets/environments at October 12 readback; workflow gate code is not installed protection. |
| Quality CI | Partial | Final October 13 CI: 256 .NET/zero skips, 34 Python and qualified image; coordinator 34 Python pass. Local synthetic recovery accepted; real media/browser/live gates remain. |
| Immutable release | Partial | R1 accepted; one qualified image and digest/attestation workflow prepared. PR publication skipped; effective protection, main digest and bootstrap unaccepted. |
| Deployment access | Partial | Legacy SSH path retired in candidate; scoped private access and protected environment still need effective configuration. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Local two-web/PG/keyring fixture verifies effective 1 CPU/512 MiB limits, no swap and non-root web; maximum web peak 441.76 MiB. Production/encoder headroom unaccepted. |
| Readiness and preflight | Partial | Explicit migration, runtime-role grants and synthetic empty-catalogue import/refusal pass locally; real accepted manifest and production bootstrap/schema-compatible rollback remain. |
| Atomic promotion and rollback | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. |
| Coordination and retention | Partial | Preserved source reconciled; local PG/keyring recovery accepted with synthetic media. Real legacy recovery/retention and production rolling remain; upload/worker gates stay separate. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local Chromium decodes/seeks seven videos and 13 images. Complete rights/artwork attribution, remaining browsers and actual HTTPS-origin acceptance remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

October 13 source reconciliation accounts for all 77 expanded paths in the preserved dirty set: 51 identical, 25 further developed, one shared deletion; no missing feature found in that set. Search/i18n/catalogue/admin remain; obsolete startup migration, volatile queue and guessed object deletion intentionally retired. Two offline MP4 proposals exist, but rights/artwork notices, accepted playback keys and remaining i18n stay open.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

Final 35e32d7 CI on October 13 confirms 256 .NET/zero skips, 34 Python and qualified image; coordinator independently reran 34 Python. R1 remains accepted. Worker local recovery on runtime source 986e9aa passes within synthetic catalogue scope. Local Chromium seven-video/13-image checks are not real-origin or complete browser/media acceptance; warnings and later worker gates remain.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

October 13 plan separates catalogue-first delivery from later upload/worker activation. Recovery harness/results, media proposals and complete preserved-source reconciliation reviewed. Effective production settings, backup policy, title/artwork rights and executed real-media/production acceptance remain.

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
- Dedicated worker completes media/artwork rights, two offline derivative proposals and remaining browser/real-origin evidence. Coordinator accepted source reconciliation and local synthetic catalogue recovery; owns production protection, budgets and backup/cutover. Preserve legacy source/data; do not re-copy obsolete startup migrations or media deletion. Upload/worker activation and UI remain later.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Uzgodnienie źródeł i ograniczone lokalne odtworzenie katalogu odebrane; kandydat pozostaje draftem. Dwa MP4 i lokalny Chromium dla siedmiu filmów/13 grafik są przygotowaniem, nie odbiorem praw/rzeczywistego origin. Pozostają wersja licencji Gran Dillama, źródła/podpisy grafik, wybór pochodnych i Firefox/Safari/mobile. Osobno limity produkcji, kopie, ochrona oraz odzyskiwanie starego wdrożenia/cutover. Uploady/worker wyłączone. Procenty i estymaty z 4 października zachowano, bez nowego pomiaru czy obiecanego terminu.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Stan źródła:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Testy i CI:** CI/CD 38383261814 and Dependency audit 38383261832 green for 35e32d7 October 13. Exact image/Quality pass; publish/deploy skipped. Local recovery used an earlier image at 986e9aa; runtime source is unchanged through reviewed head. Full local recovery is not a CI gate. Scanner gates fixable HIGH/CRITICAL, not every advisory.
- **Produkcja:** Worker reports no production/R2 mutation; coordinator performed no fresh VPS/provider audit or app merge/deploy. No production digest published by this PR run. Uploads/worker stay off. Protection readback retains October 12 date; local recovery does not establish new release readiness.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, zero rulesets/environments w odczycie 12 października; kod workflow nie stanowi aktywnej ochrony. |
| Quality CI | Częściowe | CI z 13 października: 256 .NET/zero skips, 34 Python i kwalifikacja obrazu; koordynator potwierdza 34 Python. Syntetyczne lokalne odtworzenie odebrane; pozostają rzeczywiste media/przeglądarki/produkcja. |
| Niezmienne wydanie | Częściowe | R1 odebrane; przygotowano kwalifikowany obraz oraz workflow digest/attestation. Publikacja PR pominięta; ochrona, digest main i bootstrap nieodebrane. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; prywatny dostęp i chronione środowisko wymagają konfiguracji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Lokalny test dwóch webów/PG/keyring potwierdza 1 CPU/512 MiB, brak swapu i non-root web; maksymalny pik weba 441.76 MiB. Zapas produkcji/kodowania nieodebrany. |
| Readiness i preflight | Częściowe | Jawna migracja, uprawnienia runtime i syntetyczny import/odmowa importu przechodzą lokalnie; pozostają rzeczywisty manifest i produkcyjny bootstrap/rollback zgodny ze schematem. |
| Atomowa promocja i rollback | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. |
| Koordynacja i retencja | Częściowe | Zachowane źródła uzgodnione; lokalne odzyskiwanie PG/keyring odebrane z syntetycznymi mediami. Pozostają odzyskiwanie/retencja starego wdrożenia i rolling produkcji; upload/worker osobno. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Lokalny Chromium odtwarza/przewija siedem filmów i dekoduje 13 grafik. Pozostają pełne prawa/podpisy grafik, inne przeglądarki i rzeczywisty HTTPS mediów. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

October 13 source reconciliation accounts for all 77 expanded paths in the preserved dirty set: 51 identical, 25 further developed, one shared deletion; no missing feature found in that set. Search/i18n/catalogue/admin remain; obsolete startup migration, volatile queue and guessed object deletion intentionally retired. Two offline MP4 proposals exist, but rights/artwork notices, accepted playback keys and remaining i18n stay open.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

Final 35e32d7 CI on October 13 confirms 256 .NET/zero skips, 34 Python and qualified image; coordinator independently reran 34 Python. R1 remains accepted. Worker local recovery on runtime source 986e9aa passes within synthetic catalogue scope. Local Chromium seven-video/13-image checks are not real-origin or complete browser/media acceptance; warnings and later worker gates remain.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

October 13 plan separates catalogue-first delivery from later upload/worker activation. Recovery harness/results, media proposals and complete preserved-source reconciliation reviewed. Effective production settings, backup policy, title/artwork rights and executed real-media/production acceptance remain.

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
- Osobny agent domyka prawa do mediów/grafik, dwie propozycje pochodnych i pozostałe przeglądarki/rzeczywisty origin. Koordynator odebrał uzgodnienie źródeł i lokalne syntetyczne odtworzenie katalogu; odpowiada za ochronę, limity i kopie/cutover. Zachować stare źródła/dane; nie kopiować ponownie migracji przy starcie ani usuwania mediów. Uploady/worker i UI później.
