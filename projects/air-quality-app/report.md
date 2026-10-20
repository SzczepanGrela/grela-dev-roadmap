# Air Quality App — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **42%**<br>
Forecast / prognoza: **2026-10-02–2026-10-20**, 38–62 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Polish air-quality dashboard with history, maps, interpolation and ML estimates.

The local work is valuable but counts as in progress until tested and pushed. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/air-quality-app` @ `d6275111902d4fc445685770664d97a9ad4fa2f5`
- **Source state:** local worktree with 20 changed paths October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
- **Tests and CI:** Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists.
- **Production:** air.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Partial | Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited air quality app source. |
| Deployment access | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Missing | air.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Verified deployment | Missing | The required complete implementation was not found in the audited air quality app source. October 20 scope: verify the selected deployment and public smoke; downtime allowed. Earlier missing blue-green/automatic rollback evidence is not a release blocker. Existing status records historical evidence, not a fresh acceptance. |
| Coordination and retention | Partial | air quality app has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited air quality app source. October 20: backup/uptime alert requirements withdrawn; useful resource/cost diagnostics remain separate. |
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

The current workflow builds test images while the VPS deploy uses moving source state. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update.

#### Implement explicit migrations and a simple release

**Delivery · Planned · 0% · difficulty 5/5 · 5–8 h**

October 20 planning revision: Keep readiness, explicit migrations, immutable artifacts and public smoke. Downtime is accepted; blue-green and rollback drills are not required. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Monitor API, worker, database and limits

**Delivery · Planned · 0% · difficulty 4/5 · 3–5 h**

No verified central dashboards or alerts cover the complete service.

#### Add favicon and deployed-site metadata

**Documentation · Planned · 0% · difficulty 2/5 · 1–2 h**

No favicon reference was found in the audited frontend.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Map tiles use a high cached limit; estimates use a lower CPU-aware limit.
- Workers, training and PostgreSQL remain private.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- October 20 owner policy: portfolio apps have no promoted user traffic requirement, uptime SLA or mandatory backups. Downtime/stop-start is acceptable; off-host copies, restore drills and availability exercises are optional, not release gates. Keep correctness/security/resource/cost controls and existing data/configuration. docs/operating-standard.md applies to this and future repositories. Prior source/audit dates and effort estimates are historical, not a fresh scope estimate.

## Polski

### Cel i aktualny stan

Panel jakości powietrza w Polsce z historią, mapami, interpolacją i estymacją ML.

Lokalna praca jest wartościowa, ale pozostaje w toku do czasu testów i pushu. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/air-quality-app` @ `d6275111902d4fc445685770664d97a9ad4fa2f5`
- **Stan źródła:** local worktree with 20 changed paths October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
- **Testy i CI:** Latest CI and deploy workflow succeeded at d627511, but local backend/frontend changes remain unaudited by CI; no ruleset or environment exists.
- **Produkcja:** air.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sprawdzone wdrożenie | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. Zakres 20 października: sprawdzić wybrane wdrożenie i publiczny smoke; przerwa dozwolona. Wcześniejszy brak blue-green/automatycznego rollbacku nie blokuje wydania. Status zachowuje dowód historyczny, nie jest nowym odbiorem. |
| Koordynacja i retencja | Częściowe | Projekt air quality app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu air quality app nie znaleziono wymaganej kompletnej implementacji. 20 października: wycofano wymóg alertów backup/uptime; użyteczna diagnostyka zasobów/kosztów pozostaje osobno. |
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

The current workflow builds test images while the VPS deploy uses moving source state. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update.

#### Wdrożyć jawne migracje i proste wydanie

**Wdrożenie · Planowane · 0% · trudność 5/5 · 5–8 h**

October 20 planning revision: Keep readiness, explicit migrations, immutable artifacts and public smoke. Downtime is accepted; blue-green and rollback drills are not required. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Monitorować API, worker, bazę i limity

**Wdrożenie · Planowane · 0% · trudność 4/5 · 3–5 h**

No verified central dashboards or alerts cover the complete service.

#### Dodać favicon i metadane wdrożonej strony

**Dokumentacja · Planowane · 0% · trudność 2/5 · 1–2 h**

No favicon reference was found in the audited frontend.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Kafelki używają wysokiego limitu z cache; estymacje niższego limitu CPU.
- Workery, trening i PostgreSQL pozostają prywatne.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Decyzja właściciela 20 października: aplikacje portfolio nie wymagają ciągłości ruchu, SLA uptime ani backupów. Przerwy/stop-start są akceptowalne; off-host, restore i ćwiczenia ciągłości są opcjonalne, nie blokują wydania. Zachować kontrole funkcji/bezpieczeństwa/zasobów/kosztów i istniejące dane/konfigurację. docs/operating-standard.md obejmuje to i przyszłe repozytoria. Starsze daty audytu/źródeł i estymaty pozostają historyczne, bez nowej wyceny zakresu.
