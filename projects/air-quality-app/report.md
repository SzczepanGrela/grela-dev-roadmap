# Air Quality App — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **45%**<br>
Forecast / prognoza: **2026-09-21–2026-10-08**, 36–58 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Polish air-quality dashboard with history, maps, interpolation and ML estimates.

The local work is valuable but counts as in progress until tested and pushed.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/air-quality-app` @ `d6275111902d4fc445685770664d97a9ad4fa2f5`
- **Source state:** local worktree with 20 changed paths
- **Tests and CI:** Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists.
- **Production:** air.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Partial | Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited air quality app source. |
| Deployment access | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Missing | air.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited air quality app source. |
| Coordination and retention | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited air quality app source. |
| Web identity | Missing | The required complete implementation was not found in the audited air quality app source. |

### Remaining and active tasks

#### Finish AQI model, estimation and dashboard

**Implementation · In progress · 70% · difficulty 4/5 · 8–12 h**

Twenty changed paths cover data collection, estimation, API and frontend behavior.

#### Run complete backend, frontend and migration tests

**Quality · In progress · 65% · difficulty 4/5 · 8–12 h**

Public CI is green at HEAD, while the dirty candidate requires complete environment verification.

#### Enable ruleset and production environment

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

GitHub returned neither a ruleset nor an environment.

#### Document sources, models and operations

**Documentation · In progress · 65% · difficulty 3/5 · 3–5 h**

Model transparency and the deployment runbook need to match the dirty candidate.

#### Split map, history and estimation limits

**Delivery · In progress · 45% · difficulty 4/5 · 3–5 h**

A global in-memory middleware exists locally; endpoint cost, real IP and external layers remain.

#### Publish images and manifest by digest

**Delivery · Planned · 0% · difficulty 4/5 · 4–7 h**

The current workflow builds test images while the VPS deploy uses moving source state.

#### Implement compatible migrations and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 5–8 h**

Readiness exists, but promotion, public smoke rollback and migration gating do not.

#### Monitor API, worker, database and limits

**Delivery · Planned · 0% · difficulty 4/5 · 3–5 h**

No verified central dashboards or alerts cover the complete service.

#### Add favicon and deployed-site metadata

**Documentation · Planned · 0% · difficulty 2/5 · 1–2 h**

No favicon reference was found in the audited frontend.

### Architecture decisions

- Map tiles use a high cached limit; estimates use a lower CPU-aware limit.
- Workers, training and PostgreSQL remain private.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Panel jakości powietrza w Polsce z historią, mapami, interpolacją i estymacją ML.

Lokalna praca jest wartościowa, ale pozostaje w toku do czasu testów i pushu.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/air-quality-app` @ `d6275111902d4fc445685770664d97a9ad4fa2f5`
- **Stan źródła:** local worktree with 20 changed paths
- **Testy i CI:** Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists.
- **Produkcja:** air.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. |

### Zadania pozostałe i bieżące

#### Dokończyć model AQI, estymację i dashboard

**Implementacja · W toku · 70% · trudność 4/5 · 8–12 h**

Twenty changed paths cover data collection, estimation, API and frontend behavior.

#### Uruchomić pełne testy backendu, frontendu i migracji

**Jakość · W toku · 65% · trudność 4/5 · 8–12 h**

Public CI is green at HEAD, while the dirty candidate requires complete environment verification.

#### Włączyć ruleset i środowisko produkcyjne

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

GitHub returned neither a ruleset nor an environment.

#### Udokumentować źródła, modele i operacje

**Dokumentacja · W toku · 65% · trudność 3/5 · 3–5 h**

Model transparency and the deployment runbook need to match the dirty candidate.

#### Rozdzielić limity mapy, historii i estymacji

**Wdrożenie · W toku · 45% · trudność 4/5 · 3–5 h**

A global in-memory middleware exists locally; endpoint cost, real IP and external layers remain.

#### Publikować obrazy i manifest po digestach

**Wdrożenie · Planowane · 0% · trudność 4/5 · 4–7 h**

The current workflow builds test images while the VPS deploy uses moving source state.

#### Wdrożyć kompatybilne migracje i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 5–8 h**

Readiness exists, but promotion, public smoke rollback and migration gating do not.

#### Monitorować API, worker, bazę i limity

**Wdrożenie · Planowane · 0% · trudność 4/5 · 3–5 h**

No verified central dashboards or alerts cover the complete service.

#### Dodać favicon i metadane wdrożonej strony

**Dokumentacja · Planowane · 0% · trudność 2/5 · 1–2 h**

No favicon reference was found in the audited frontend.

### Decyzje architektoniczne

- Kafelki używają wysokiego limitu z cache; estymacje niższego limitu CPU.
- Workery, trening i PostgreSQL pozostają prywatne.
- Projekt podlega profilowi standardu v2: vps-web.
