# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-03**<br>
Estimated completion / szacowane ukończenie: **60%**<br>
Forecast / prognoza: **2026-10-05–2026-10-25**, 43–77 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Prepared code now covers database bootstrap, media retention, durable uploads, sessions/CSRF/JWT and HTTP/dependency controls. It remains a draft, with production unchanged. A dedicated Codex session owns remaining stateful delivery; coordinator owns platform/roadmap review. Fresh accounts and empty history are selected; originals and legacy database retained. UI modernization follows backend/release acceptance; effort/date ranges include uncertain live acceptance.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a39d3ad6e527bcf08430d311db2c0cf0528820c3`
- **Source state:** Clean reconciled preparation branch codex/netfilmx-preparation, draft PR #1 at a39d3ad. Original unpublished/dirty source is preserved separately; preparation is not the production version.
- **Tests and CI:** CI/CD 37042739347 and Dependency audit 37042739346 green for a39d3ad; Deploy VPS skipped. Locked NuGet/npm audits were clean October 2; no claim of all future or container advisories absent.
- **Production:** No NetFilmx deployment/data import/cutover occurred in this preparation. The August 25 public HTTP 200 is historical, not a current release or route acceptance.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Draft CI exists; production main/environment protection and legacy deploy replacement remain. |
| Quality CI | Partial | Candidate 229 .NET and 3 DOM tests, clean locked dependency audit and green draft CI; runtime/recovery/browser gaps remain. |
| Immutable release | Missing | No qualified GHCR digest-to-Coolify path; old deployment must be replaced before merge. |
| Deployment access | Partial | Legacy deployment retained; reviewed protected private platform credentials/path remain to implement. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Private staging and bounded worker are candidate controls; actual mounts, resources/keyring and image safety not accepted. |
| Readiness and preflight | Partial | Database regressions pass; explicit migrations/readiness and old/new compatibility still required. |
| Atomic promotion and rollback | Missing | No managed stateful promotion and tested release/data recovery yet. |
| Coordination and retention | Partial | Source/media preserved and bounded singleton code exists; deployment serialization/capacity/scoped retention remain. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Candidate browser/vendor changes and DOM tests exist; public identity/accessibility/media-license acceptance remains. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 80% · difficulty 5/5 · 12–22 h**

Candidate reconciles source, PostgreSQL/SQLite tests, retained-media bootstrap, private staging/durable upload intents and bounded worker, strict sessions/CSRF/JWT and explicit DTOs. Seven existing media entries selected; two browser derivatives, persistent Data Protection, explicit migration/readiness and i18n remain.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 6–12 h**

At a39d3ad: 229 .NET tests passed with 0 skipped plus 3 DOM tests; locked NuGet/npm audits clean at Oct 2 and CI green. .NET 10/native container qualification, remaining warnings and actual worker/restore/browser acceptance still required.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

Production-ready main protection and approval gates are not established by this candidate. Retain draft #1 until legacy main-push SSH deploy is safely replaced; do not trigger it by merging.

#### Align architecture and operations documentation

**Documentation · In progress · 80% · difficulty 3/5 · 2–4 h**

Candidate README/docs and reviewed source/data/security decisions now exist. App worker maintains a public-safe checkpoint; coordinator integrates roadmap/platform facts. Final runtime/keyring/migration/recovery docs await implementation.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling; login/register/refresh/write rate limits; bounded password/admin concurrency, body limits and image decoding. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · Planned · 0% · difficulty 4/5 · 6–10 h**

Legacy main-push SSH rebuild/deploy remains in candidate workflow; deploy job skipped on draft CI. Implement protected tested-digest GHCR/Coolify promotion and scoped rollback before merge. No production migration occurred.

#### Add readiness, stable gateway and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 8–14 h**

Explicit migrations, persistent shared keyring and singleton worker compatibility must precede rolling acceptance. Rehearse fresh PostgreSQL/keyring restoration and measured image/storage/queue restart behavior; no stateful production promotion accepted.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Useful worker lifecycle logs exist in preparation but delivered deploy/transcoding/backup alerts and central monitoring are not accepted.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Dedicated Codex implementation session; no merge while the legacy main-push deployment remains. Data Protection persistence, explicit migrations and .NET 10 precede production.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Kod przygotowania obejmuje bootstrap bazy, zachowanie mediów, trwałe uploady, sesje/CSRF/JWT oraz HTTP/zależności. Pozostaje draftem, bez zmiany produkcji. Osobny Codex prowadzi stateful delivery, koordynator platformę/roadmapę. Wybrano nowe konta i pustą historię; oryginały i stara baza zostają. UI następuje po odbiorze backendu/wydania; daty obejmują niepewny odbiór produkcji.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a39d3ad6e527bcf08430d311db2c0cf0528820c3`
- **Stan źródła:** Clean reconciled preparation branch codex/netfilmx-preparation, draft PR #1 at a39d3ad. Original unpublished/dirty source is preserved separately; preparation is not the production version.
- **Testy i CI:** CI/CD 37042739347 and Dependency audit 37042739346 green for a39d3ad; Deploy VPS skipped. Locked NuGet/npm audits were clean October 2; no claim of all future or container advisories absent.
- **Produkcja:** No NetFilmx deployment/data import/cutover occurred in this preparation. The August 25 public HTTP 200 is historical, not a current release or route acceptance.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | CI draftu istnieje; ochrona main/production oraz zastąpienie legacy deploy pozostają. |
| Quality CI | Częściowe | Kandydat: 229 .NET, 3 DOM, czysty audyt locków i zielone CI; pozostają runtime/recovery/browser. |
| Niezmienne wydanie | Brak | Brak kwalifikowanej ścieżki GHCR digest→Coolify; stary deploy trzeba zastąpić przed scaleniem. |
| Dostęp wdrożeniowy | Częściowe | Legacy deploy pozostaje; chroniona prywatna ścieżka platformy i uprawnienia wymagają wdrożenia. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Private staging i bounded worker są w kandydacie; mounty/resources/keyring i bezpieczeństwo obrazu nieodebrane. |
| Readiness i preflight | Częściowe | Regresje bazy przechodzą; jawne migracje/readiness i zgodność old/new pozostają. |
| Atomowa promocja i rollback | Brak | Brak zarządzanej promocji stateful i przetestowanego recovery wydania/danych. |
| Koordynacja i retencja | Częściowe | Źródło/media zachowane, bounded singleton jest w kodzie; serializacja/capacity/retencja deployu pozostają. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Zmiany browser/vendor i testy DOM istnieją; publiczny odbiór identity/dostępności/licencji pozostaje. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 80% · trudność 5/5 · 12–22 h**

Candidate reconciles source, PostgreSQL/SQLite tests, retained-media bootstrap, private staging/durable upload intents and bounded worker, strict sessions/CSRF/JWT and explicit DTOs. Seven existing media entries selected; two browser derivatives, persistent Data Protection, explicit migration/readiness and i18n remain.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 6–12 h**

At a39d3ad: 229 .NET tests passed with 0 skipped plus 3 DOM tests; locked NuGet/npm audits clean at Oct 2 and CI green. .NET 10/native container qualification, remaining warnings and actual worker/restore/browser acceptance still required.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

Production-ready main protection and approval gates are not established by this candidate. Retain draft #1 until legacy main-push SSH deploy is safely replaced; do not trigger it by merging.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 80% · trudność 3/5 · 2–4 h**

Candidate README/docs and reviewed source/data/security decisions now exist. App worker maintains a public-safe checkpoint; coordinator integrates roadmap/platform facts. Final runtime/keyring/migration/recovery docs await implementation.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling; login/register/refresh/write rate limits; bounded password/admin concurrency, body limits and image decoding. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · Planowane · 0% · trudność 4/5 · 6–10 h**

Legacy main-push SSH rebuild/deploy remains in candidate workflow; deploy job skipped on draft CI. Implement protected tested-digest GHCR/Coolify promotion and scoped rollback before merge. No production migration occurred.

#### Dodać readiness, stabilny gateway i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–14 h**

Explicit migrations, persistent shared keyring and singleton worker compatibility must precede rolling acceptance. Rehearse fresh PostgreSQL/keyring restoration and measured image/storage/queue restart behavior; no stateful production promotion accepted.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Useful worker lifecycle logs exist in preparation but delivered deploy/transcoding/backup alerts and central monitoring are not accepted.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Osobna sesja wykonawcza Codexa; nie scalać przy aktywnym legacy deploy main-push. Trwałe Data Protection, jawne migracje i .NET 10 przed produkcją.
