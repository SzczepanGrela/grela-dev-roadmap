# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **53%**<br>
Forecast / prognoza: **2026-08-28–2026-09-02**, 22–38 h, high confidence / pewność: high

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Remote is stable; uncommitted user CSS must not be overwritten.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `bee8f313dace9e1271c1bee59f8ce4fe3a96346b`
- **Source state:** local worktree with one modified CSS file
- **Tests and CI:** Latest GitHub CI/CD run succeeded at bee8f31; no ruleset or environment is configured.
- **Production:** inventory.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Partial | Latest GitHub CI/CD run succeeded at bee8f31; no ruleset or environment is configured. |
| Immutable release | Missing | The required complete implementation was not found in the audited inventory generator source. |
| Deployment access | Partial | inventory generator has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Missing | inventory.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Partial | inventory generator has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | inventory generator has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Missing | The required complete implementation was not found in the audited inventory generator source. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited inventory generator source. |
| Coordination and retention | Partial | inventory generator has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited inventory generator source. |
| Web identity | Missing | The required complete implementation was not found in the audited inventory generator source. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 80% · difficulty 3/5 · 2–4 h**

One local CSS change remains; export endpoints still need format-specific body, row and concurrency bounds.

#### Expand export and browser coverage

**Quality · In progress · 70% · difficulty 3/5 · 3–5 h**

Unit and integration projects exist and CI is green; expensive export and browser cases remain.

#### Enable ruleset and required Quality checks

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

GitHub returned no active ruleset or deployment environment.

#### Complete operations documentation and favicon

**Documentation · In progress · 75% · difficulty 2/5 · 2–3 h**

README and MIT exist, but the public web identity and v2 operations runbook are incomplete.

#### Enable DNS, TLS and three-layer limits

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

The target hostname does not resolve and Cloudflare/NPM controls cannot be verified.

#### Publish and deploy an image by digest

**Delivery · Planned · 0% · difficulty 3/5 · 4–7 h**

The current server script rebuilds the image and performs global image pruning.

#### Implement readiness, blue-green and rollback

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

There is no retained inactive slot, stable router or external smoke rollback.

#### Connect the service to central monitoring

**Delivery · Planned · 0% · difficulty 3/5 · 2–4 h**

No cross-application metrics, deployment alerts or 429 visibility were verified.

### Architecture decisions

- Keep the local-first stateless architecture.
- Use per-format export limits plus body, row and concurrency caps.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Lokalny edytor inwentarza z serwerowym generowaniem DOCX, CSV i HTML.

Origin jest stabilny; lokalnej zmiany CSS użytkownika nie wolno nadpisać.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `bee8f313dace9e1271c1bee59f8ce4fe3a96346b`
- **Stan źródła:** local worktree with one modified CSS file
- **Testy i CI:** Latest GitHub CI/CD run succeeded at bee8f31; no ruleset or environment is configured.
- **Produkcja:** inventory.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt inventory generator ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Częściowe | Projekt inventory generator ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt inventory generator ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Częściowe | Projekt inventory generator ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 80% · trudność 3/5 · 2–4 h**

One local CSS change remains; export endpoints still need format-specific body, row and concurrency bounds.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 70% · trudność 3/5 · 3–5 h**

Unit and integration projects exist and CI is green; expensive export and browser cases remain.

#### Włączyć ruleset i wymagane Quality

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

GitHub returned no active ruleset or deployment environment.

#### Uzupełnić dokumentację operacyjną i favicon

**Dokumentacja · W toku · 75% · trudność 2/5 · 2–3 h**

README and MIT exist, but the public web identity and v2 operations runbook are incomplete.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

The target hostname does not resolve and Cloudflare/NPM controls cannot be verified.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Planowane · 0% · trudność 3/5 · 4–7 h**

The current server script rebuilds the image and performs global image pruning.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

There is no retained inactive slot, stable router or external smoke rollback.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · Planowane · 0% · trudność 3/5 · 2–4 h**

No cross-application metrics, deployment alerts or 429 visibility were verified.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
