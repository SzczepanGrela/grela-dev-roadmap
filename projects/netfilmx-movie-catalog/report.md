# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-12**<br>
Estimated completion / szacowane ukończenie: **70%**<br>
Forecast / prognoza: **2026-10-05–2026-10-25**, 35–66 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

R1 accepted and plan reviewed; candidate remains draft. Next: seven-media provenance/derivatives and real local PG/keyring/two-web recovery with uploads/worker off. Production protection, backup policy and licensed media acceptance remain; worker activation has additional later gates. No fresh VPS/R2 audit or app merge/deploy. Progress and October 4 effort estimates are retained, not newly measured or a promised date.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Source state:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Tests and CI:** CI/CD 37262046514 and Dependency audit 37262046312 green for final 1afb625; completed October 5, inspected October 12. Exact image and Quality gate pass; Publish tested digest and Deploy tested digest skipped. Scanner gates fixable HIGH/CRITICAL, not every advisory. Refresh qualification with subsequent candidate changes.
- **Production:** No production migration, data import or cutover in this preparation/review. No GHCR digest published by this PR run. Historic public HTTP 200 does not establish readiness of the new release.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, zero rulesets/environments at October 12 readback; workflow gate code is not installed protection. |
| Quality CI | Partial | 34 Python independently pass; October 5 final-head CI confirms 256 .NET/zero skips and qualified image. R1 accepted; live media/stateful/browser acceptance remains. |
| Immutable release | Partial | R1 accepted; one qualified image and digest/attestation workflow prepared. PR publication skipped; effective protection, main digest and bootstrap unaccepted. |
| Deployment access | Partial | Legacy SSH path retired in candidate; scoped private access and protected environment still need effective configuration. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Isolated .NET 10 image smoke verifies non-root runtime/native tools/restart; actual mounts, aggregate resources and worker load remain. |
| Readiness and preflight | Partial | Explicit bounded schema/queue migrations and readiness tested; real database bootstrap and schema-compatible rollback acceptance remain. |
| Atomic promotion and rollback | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. |
| Coordination and retention | Partial | Serialized release and singleton code exist; actual resource/queue overlap, scoped retention and recovery require acceptance. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Candidate browser/vendor changes and DOM tests exist; public identity/accessibility/media-license acceptance remains. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

Candidate now includes shared persistent Data Protection, explicit bounded migrations/readiness and singleton worker ownership. .NET 10 replaces .NET 8. Retained seven-media manifest still needs two browser derivatives, verified rights/credits/import and remaining i18n.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

R1 correction reviewed October 12 at final draft 1afb625: 34 Python tests independently rerun, including eight release-boundary regressions. October 5 exact-head CI confirms 256 .NET passed, zero skipped, browser checks and qualified image. Unknown deployment state prevents rollback mutations; warnings and actual worker/restore/browser acceptance remain.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

First-release plan at 1afb625 covers protected bootstrap, media/credits, PG/keyring recovery, worker/resource and operator gates. Coordinator accepted R1 and preparation plan October 12, distinguishing catalogue-only qualification from later upload/worker activation. Effective configuration and executed media/restore/production evidence remain.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Qualify readiness, stateful rolling updates and rollback

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Explicit migrations/readiness, shared keyring and one worker server are implemented and tested. Two hosted workers transfer ownership locally, but actual two-container rolling/resource/cancellation and mounted PostgreSQL/keyring/staging restore remain. Image rollback does not roll back schema or cross from PostgreSQL to legacy SQLite.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Dedicated worker owns implementation. Coordinator accepted R1 and the first-release plan; execute media and local catalogue-only recovery next. Effective protection/bootstrap remain separate. Upload/worker activation requires its own queue/encoder/recovery evidence; no automatic production promotion yet.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

R1 odebrane, plan przejrzany; kandydat pozostaje draftem. Dalej: pochodzenie/pochodne siedmiu mediów i rzeczywiste lokalne odtwarzanie PG/keyring/dwóch webów z uploads/worker off. Pozostają ochrona produkcji, polityka kopii i odbiór legalnych mediów; aktywacja workera ma dodatkowe późniejsze bramki. Bez nowego audytu VPS/R2, merge lub deploy aplikacji. Procenty i estymaty pracy z 4 października zachowano, nie są nowym pomiarem ani obiecanym terminem.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Stan źródła:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Testy i CI:** CI/CD 37262046514 and Dependency audit 37262046312 green for final 1afb625; completed October 5, inspected October 12. Exact image and Quality gate pass; Publish tested digest and Deploy tested digest skipped. Scanner gates fixable HIGH/CRITICAL, not every advisory. Refresh qualification with subsequent candidate changes.
- **Produkcja:** No production migration, data import or cutover in this preparation/review. No GHCR digest published by this PR run. Historic public HTTP 200 does not establish readiness of the new release.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, zero rulesets/environments w odczycie 12 października; kod workflow nie stanowi aktywnej ochrony. |
| Quality CI | Częściowe | 34 Python niezależnie przechodzi; CI końcowego SHA z 5 października potwierdza 256 .NET/zero skips i kwalifikację obrazu. R1 odebrane; odbiór mediów/stanu/przeglądarki pozostaje. |
| Niezmienne wydanie | Częściowe | R1 odebrane; przygotowano kwalifikowany obraz oraz workflow digest/attestation. Publikacja PR pominięta; ochrona, digest main i bootstrap nieodebrane. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; prywatny dostęp i chronione środowisko wymagają konfiguracji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Smoke obrazu .NET 10 potwierdza non-root/narzędzia/restart; rzeczywiste mounty, zasoby i obciążenie workera pozostają. |
| Readiness i preflight | Częściowe | Jawne ograniczone migracje schematu/kolejki i readiness przetestowane; pozostaje bootstrap bazy i odbiór rollbacku zgodnego ze schematem. |
| Atomowa promocja i rollback | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. |
| Koordynacja i retencja | Częściowe | Serializacja wydania i singleton istnieją w kodzie; rzeczywisty overlap zasobów/kolejki, retencja i recovery wymagają odbioru. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Zmiany browser/vendor i testy DOM istnieją; publiczny odbiór identity/dostępności/licencji pozostaje. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

Candidate now includes shared persistent Data Protection, explicit bounded migrations/readiness and singleton worker ownership. .NET 10 replaces .NET 8. Retained seven-media manifest still needs two browser derivatives, verified rights/credits/import and remaining i18n.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

R1 correction reviewed October 12 at final draft 1afb625: 34 Python tests independently rerun, including eight release-boundary regressions. October 5 exact-head CI confirms 256 .NET passed, zero skipped, browser checks and qualified image. Unknown deployment state prevents rollback mutations; warnings and actual worker/restore/browser acceptance remain.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

First-release plan at 1afb625 covers protected bootstrap, media/credits, PG/keyring recovery, worker/resource and operator gates. Coordinator accepted R1 and preparation plan October 12, distinguishing catalogue-only qualification from later upload/worker activation. Effective configuration and executed media/restore/production evidence remain.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Sprawdzić readiness, rolling update ze stanem i rollback

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Explicit migrations/readiness, shared keyring and one worker server are implemented and tested. Two hosted workers transfer ownership locally, but actual two-container rolling/resource/cancellation and mounted PostgreSQL/keyring/staging restore remain. Image rollback does not roll back schema or cross from PostgreSQL to legacy SQLite.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Osobny agent prowadzi implementację. Koordynator odebrał R1 i plan pierwszego wydania; teraz media i lokalne odtwarzanie samego katalogu. Ochrona/bootstrap pozostają oddzielne. Aktywacja uploadów/workera wymaga dowodów kolejki/kodowania/odzyskiwania; bez automatycznej promocji produkcji.
