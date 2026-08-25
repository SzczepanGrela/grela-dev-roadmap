# URL Shortener System — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **25%**<br>
Forecast / prognoza: **2026-10-27–2026-12-08**, 70–115 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

URL shortening and analytics services awaiting production modernization and a public UI.

This is a substantial modernization rather than a simple containerization task.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/UrlShortenerSystem` @ `5596d689aefbf80ac12700a9e9ff77ca14702112`
- **Source state:** clean public master shallow clone
- **Tests and CI:** No GitHub Actions runs, ruleset or environment were found.
- **Production:** s.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Missing | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Missing | No GitHub Actions runs, ruleset or environment were found. |
| Immutable release | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Deployment access | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Network, TLS and client identity | Missing | s.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Partial | url shortener system has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Readiness and preflight | Partial | url shortener system has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Coordination and retention | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Observability | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Web identity | Missing | The required complete implementation was not found in the audited url shortener system source. |

### Remaining and active tasks

#### Fix XFF, SSRF and endpoint policies

**Implementation · In progress · 45% · difficulty 5/5 · 18–28 h**

The API has tests and an in-memory limiter, but trusts unsafe client identity and lacks cost-separated policies.

#### Bound and harden the analytics queue

**Implementation · In progress · 35% · difficulty 4/5 · 6–10 h**

Analytics needs bounded ingestion, backpressure and failure isolation.

#### Restore security, integration and load tests

**Quality · In progress · 40% · difficulty 4/5 · 12–20 h**

Tests exist in source but no workflow run verifies them on GitHub.

#### Move to main, CI and a ruleset

**Quality · Planned · 0% · difficulty 3/5 · 2–3 h**

The default branch remains master and GitHub has no workflow or ruleset.

#### Rename and document the architecture

**Documentation · In progress · 25% · difficulty 3/5 · 6–10 h**

The repository lacks a public README/license baseline and target deployment documentation.

#### Build an accessible UI and production containers

**Delivery · Planned · 0% · difficulty 5/5 · 12–20 h**

No frontend, production container topology or deployment workflow is present.

#### Add immutable CI/CD, preflight and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 8–14 h**

GHCR digests, OIDC deploy, stable routing and rollback do not exist.

#### Configure domain, limits and monitoring

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

The target DNS is absent and edge/proxy limits and monitoring are not configured.

#### Add favicon and public UI metadata

**Documentation · Planned · 0% · difficulty 2/5 · 1–2 h**

No web frontend or favicon exists.

### Architecture decisions

- Redirect traffic must not share the low creation limit.
- Use trusted proxy middleware, SSRF/private-address validation and a bounded analytics worker.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Usługi skracania URL i analityki oczekujące modernizacji produkcyjnej oraz publicznego UI.

To duża modernizacja, a nie tylko konteneryzacja.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/UrlShortenerSystem` @ `5596d689aefbf80ac12700a9e9ff77ca14702112`
- **Stan źródła:** clean public master shallow clone
- **Testy i CI:** No GitHub Actions runs, ruleset or environment were found.
- **Produkcja:** s.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Brak | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Brak | GitHub nie zwrócił żadnego wykonanego workflow Quality dla tego repozytorium. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Częściowe | Projekt url shortener system ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Readiness i preflight | Częściowe | Projekt url shortener system ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Obserwowalność | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |

### Zadania pozostałe i bieżące

#### Naprawić XFF, SSRF i polityki endpointów

**Implementacja · W toku · 45% · trudność 5/5 · 18–28 h**

The API has tests and an in-memory limiter, but trusts unsafe client identity and lacks cost-separated policies.

#### Ograniczyć i uodpornić kolejkę analityki

**Implementacja · W toku · 35% · trudność 4/5 · 6–10 h**

Analytics needs bounded ingestion, backpressure and failure isolation.

#### Przywrócić testy bezpieczeństwa, integracji i load

**Jakość · W toku · 40% · trudność 4/5 · 12–20 h**

Tests exist in source but no workflow run verifies them on GitHub.

#### Przejść na main, CI i ruleset

**Jakość · Planowane · 0% · trudność 3/5 · 2–3 h**

The default branch remains master and GitHub has no workflow or ruleset.

#### Zmienić nazwę i udokumentować architekturę

**Dokumentacja · W toku · 25% · trudność 3/5 · 6–10 h**

The repository lacks a public README/license baseline and target deployment documentation.

#### Zbudować dostępny UI i kontenery produkcyjne

**Wdrożenie · Planowane · 0% · trudność 5/5 · 12–20 h**

No frontend, production container topology or deployment workflow is present.

#### Dodać niezmienne CI/CD, preflight i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–14 h**

GHCR digests, OIDC deploy, stable routing and rollback do not exist.

#### Skonfigurować domenę, limity i monitoring

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

The target DNS is absent and edge/proxy limits and monitoring are not configured.

#### Dodać favicon i metadane publicznego UI

**Dokumentacja · Planowane · 0% · trudność 2/5 · 1–2 h**

No web frontend or favicon exists.

### Decyzje architektoniczne

- Ruch przekierowań nie może dzielić niskiego limitu tworzenia.
- Użyć trusted proxy, ochrony SSRF/private IP i ograniczonego workera analityki.
- Projekt podlega profilowi standardu v2: vps-web.
