# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-04**<br>
Estimated completion / szacowane ukończenie: **70%**<br>
Forecast / prognoza: **2026-10-05–2026-10-25**, 35–66 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Substantial candidate progress: shared keyring, explicit migrations/readiness, singleton worker, .NET 10 and qualified image CI. Tests pass, but review found rollback can race a deployment with unresolved state. Corrective worker work, protected first-resource bootstrap, media rights/derivatives/import and actual restore/rolling/resource acceptance remain. No production or media changes; candidate is still draft. Estimates include uncertain live acceptance, not an execution deadline.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Source state:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Tests and CI:** CI/CD 37150511344 and Dependency audit 37150511216 green at cbf2ec1; Publish tested digest and Deploy tested digest skipped. Image scanner gates fixable HIGH/CRITICAL findings, not every advisory. Three DOM tests cover validation helpers, not full browser acceptance.
- **Production:** No production migration, data import or cutover in this preparation/review. No GHCR digest published by this PR run. Historic public HTTP 200 does not establish readiness of the new release.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, no environments at October 4 readback; candidate gate code is not effective protection. |
| Quality CI | Partial | 256 .NET / 26 Python / 3 DOM and image/audit CI green; release error handling and live acceptance remain. |
| Immutable release | Partial | One qualified image and GHCR attestations/digest promotion prepared; PR publication skipped, release correction/bootstrap unaccepted. |
| Deployment access | Partial | Legacy SSH path retired in candidate; scoped private access and protected environment still need effective configuration. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Isolated .NET 10 image smoke verifies non-root runtime/native tools/restart; actual mounts, aggregate resources and worker load remain. |
| Readiness and preflight | Partial | Explicit bounded schema/queue migrations and readiness tested; real database bootstrap and schema-compatible rollback acceptance remain. |
| Atomic promotion and rollback | Partial | Prepared releaser has two paths allowing rollback with unresolved deployment; fix before merge, then rehearse stateful recovery. |
| Coordination and retention | Partial | Serialized release and singleton code exist; actual resource/queue overlap, scoped retention and recovery require acceptance. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Candidate browser/vendor changes and DOM tests exist; public identity/accessibility/media-license acceptance remains. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

Candidate now includes shared persistent Data Protection, explicit bounded migrations/readiness and singleton worker ownership. .NET 10 replaces .NET 8. Retained seven-media manifest still needs two browser derivatives, verified rights/credits/import and remaining i18n.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

Exact-head CI cbf2ec1: 256 .NET passed, zero skipped, 26 Python and 3 DOM tests; locked audits and isolated image smoke pass. Coordinator reran Python/DOM and reproduced two release error paths that queue rollback before confirming the first deployment stopped. Remaining warnings and actual worker/restore/browser acceptance are open.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 4 read-only GitHub metadata: main unprotected, no environments. Quality gate and production-environment references exist in candidate code, but reviewer/main restrictions must be configured and verified before protected release. Automatic promotion stays disabled pending acceptance.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

Data Protection, migration/readiness, release-delivery and work-status docs now describe tested candidate scope and live blockers. Coordinator review/handoff records release error correction, distinct first-resource bootstrap and retained-data/media gates. Final effective configuration/restore/production evidence remains.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

Candidate replaces SSH rebuild/prune with one qualified image, GHCR publication/attestation and serialized Coolify digest promotion. Publication/deployment skipped in PR CI. Fix unresolved-deployment rollback paths; establish protected governance and bootstrap of the first healthy baseline. No new production release.

#### Add readiness, stable gateway and blue-green

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
- Dedicated Codex worker owns implementation. Keyring/migration/.NET 10 and replacement delivery code are prepared. Fix release error paths, establish protected governance and separately review initial bootstrap; automatic production promotion remains disabled until accepted.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Istotny postęp kandydata: wspólny keyring, jawne migracje/readiness, singleton worker, .NET 10 i kwalifikacja obrazu w CI. Testy przechodzą, lecz review wykazało ryzyko rollbacku przy nierozstrzygniętym stanie wdrożenia. Pozostają poprawka agenta, chroniony bootstrap, prawa/pochodne/import mediów i rzeczywisty odbiór restore/rolling/zasobów. Bez zmian produkcji/mediów; kandydat nadal jest draftem. Estymacja uwzględnia niepewny odbiór produkcji i nie jest terminem realizacji.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `cbf2ec16cac64d2dfe4d85b8b575f4eacdd69578`
- **Stan źródła:** Clean preparation branch codex/netfilmx-preparation, draft PR #1 at cbf2ec1. .NET 10/keyring/migration/image preparation reviewed; release error handling requires correction. Original source retained; candidate is not production.
- **Testy i CI:** CI/CD 37150511344 and Dependency audit 37150511216 green at cbf2ec1; Publish tested digest and Deploy tested digest skipped. Image scanner gates fixable HIGH/CRITICAL findings, not every advisory. Three DOM tests cover validation helpers, not full browser acceptance.
- **Produkcja:** No production migration, data import or cutover in this preparation/review. No GHCR digest published by this PR run. Historic public HTTP 200 does not establish readiness of the new release.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, brak environments w odczycie 4 października; kod bramek nie stanowi aktywnej ochrony. |
| Quality CI | Częściowe | 256 .NET / 26 Python / 3 DOM oraz CI obrazu/audytu zielone; pozostaje obsługa błędów releasera i odbiór produkcji. |
| Niezmienne wydanie | Częściowe | Jeden kwalifikowany obraz i attestation/promocja digestu przygotowane; publikacja PR pominięta, poprawka/bootstrap nieodebrane. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; prywatny dostęp i chronione środowisko wymagają konfiguracji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Smoke obrazu .NET 10 potwierdza non-root/narzędzia/restart; rzeczywiste mounty, zasoby i obciążenie workera pozostają. |
| Readiness i preflight | Częściowe | Jawne ograniczone migracje schematu/kolejki i readiness przetestowane; pozostaje bootstrap bazy i odbiór rollbacku zgodnego ze schematem. |
| Atomowa promocja i rollback | Częściowe | Releaser ma dwie ścieżki rollbacku przy nierozstrzygniętym wdrożeniu; naprawić przed scaleniem, następnie przetestować stateful recovery. |
| Koordynacja i retencja | Częściowe | Serializacja wydania i singleton istnieją w kodzie; rzeczywisty overlap zasobów/kolejki, retencja i recovery wymagają odbioru. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Zmiany browser/vendor i testy DOM istnieją; publiczny odbiór identity/dostępności/licencji pozostaje. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

Candidate now includes shared persistent Data Protection, explicit bounded migrations/readiness and singleton worker ownership. .NET 10 replaces .NET 8. Retained seven-media manifest still needs two browser derivatives, verified rights/credits/import and remaining i18n.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

Exact-head CI cbf2ec1: 256 .NET passed, zero skipped, 26 Python and 3 DOM tests; locked audits and isolated image smoke pass. Coordinator reran Python/DOM and reproduced two release error paths that queue rollback before confirming the first deployment stopped. Remaining warnings and actual worker/restore/browser acceptance are open.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 4 read-only GitHub metadata: main unprotected, no environments. Quality gate and production-environment references exist in candidate code, but reviewer/main restrictions must be configured and verified before protected release. Automatic promotion stays disabled pending acceptance.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

Data Protection, migration/readiness, release-delivery and work-status docs now describe tested candidate scope and live blockers. Coordinator review/handoff records release error correction, distinct first-resource bootstrap and retained-data/media gates. Final effective configuration/restore/production evidence remains.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

Candidate replaces SSH rebuild/prune with one qualified image, GHCR publication/attestation and serialized Coolify digest promotion. Publication/deployment skipped in PR CI. Fix unresolved-deployment rollback paths; establish protected governance and bootstrap of the first healthy baseline. No new production release.

#### Dodać readiness, stabilny gateway i blue-green

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
- Osobny Codex prowadzi implementację. Keyring/migracje/.NET 10 i nowe wdrażanie są przygotowane. Poprawić błędy releasera, ustanowić ochronę repozytorium i oddzielnie odebrać bootstrap; automatyczna promocja produkcji pozostaje wyłączona do odbioru.
