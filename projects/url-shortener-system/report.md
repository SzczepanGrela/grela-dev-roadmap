# URL Shortener System — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **24%**<br>
Forecast / prognoza: **2026-11-06–2026-12-18**, 72–119 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

URL shortening and analytics services awaiting production modernization and a public UI.

This is a substantial modernization rather than a simple containerization task. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/UrlShortenerSystem` @ `5596d689aefbf80ac12700a9e9ff77ca14702112`
- **Source state:** clean public master shallow clone October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Tests and CI:** No GitHub Actions runs, ruleset or environment were found.
- **Production:** s.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Missing | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Missing | No GitHub Actions runs, ruleset or environment were found. |
| Immutable release | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Deployment access | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Network, TLS and client identity | Missing | s.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Partial | url shortener system has some mechanisms but does not yet satisfy the complete v2 control. Target, October 25: Require Turnstile with backend validation and negative/public acceptance for anonymous browser link creation before public launch. Keep redirects challenge-free; preserve SSRF/anti-phishing checks and quotas. Any machine API requires separate credentials, authorization and budgets, not an anonymous bypass. |
| Runtime safety | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Readiness and preflight | Partial | url shortener system has some mechanisms but does not yet satisfy the complete v2 control. |
| Managed release and recovery | Missing | The required complete implementation was not found in the audited url shortener system source. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Observability | Missing | The required complete implementation was not found in the audited url shortener system source. |
| Web identity | Missing | The required complete implementation was not found in the audited url shortener system source. |

### Remaining and active tasks

#### Protect link creation with Turnstile and fix XFF/SSRF

**Implementation · In progress · 45% · difficulty 5/5 · 18–28 h**

The API has tests and an in-memory limiter, but trusts unsafe client identity and lacks cost-separated policies. Target, October 25, 2026: Require Turnstile with backend validation and negative/public acceptance for anonymous browser link creation before public launch. Keep redirects challenge-free; preserve SSRF/anti-phishing checks and quotas. Any machine API requires separate credentials, authorization and budgets, not an anonymous bypass. See docs/anti-bot-standard.md. Existing effort/progress estimates are historical; no re-estimation or implementation credit in this update.

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

#### Accept health-gated rolling releases and scoped recovery

**Delivery · Planned · 0% · difficulty 5/5 · 8–14 h**

GHCR digests, OIDC deploy, stable routing and rollback do not exist. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Configure domain, limits and monitoring

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

The target DNS is absent and edge/proxy limits and monitoring are not configured.

#### Add favicon and public UI metadata

**Documentation · Planned · 0% · difficulty 2/5 · 1–2 h**

No web frontend or favicon exists.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Redirect traffic must not share the low creation limit.
- Use trusted proxy middleware, SSRF/private-address validation and a bounded analytics worker.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- October 20 clarification: downtime is accepted during preparation, initial deployment and migration. Final Coolify operation still requires health-gated rolling updates and backups of necessary durable data/configuration/keys with proportionate recovery verification. No numeric uptime SLA, permanent replicas or multi-host HA. Stateless/static/non-server projects use their applicable hosting and data scope. Existing data, backup schedules and release guards remain. This is planning, not new runtime acceptance or re-estimation; docs/operating-standard.md applies to future repositories too.
- Target, October 25, 2026 — Require Turnstile with backend validation and negative/public acceptance for anonymous browser link creation before public launch. Keep redirects challenge-free; preserve SSRF/anti-phishing checks and quotas. Any machine API requires separate credentials, authorization and budgets, not an anonymous bypass. Apply docs/anti-bot-standard.md; functional smoke is separate from anti-bot acceptance.

## Polski

### Cel i aktualny stan

Usługi skracania URL i analityki oczekujące modernizacji produkcyjnej oraz publicznego UI.

To duża modernizacja, a nie tylko konteneryzacja. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/UrlShortenerSystem` @ `5596d689aefbf80ac12700a9e9ff77ca14702112`
- **Stan źródła:** clean public master shallow clone October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Testy i CI:** No GitHub Actions runs, ruleset or environment were found.
- **Produkcja:** s.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Brak | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Brak | GitHub nie zwrócił żadnego wykonanego workflow Quality dla tego repozytorium. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Częściowe | Projekt url shortener system ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. Cel, 25 października: Wymagać Turnstile z walidacją backendu i odbiorem negatywnym/publicznym dla anonimowego tworzenia linków w przeglądarce przed publikacją. Przekierowania bez wyzwania; zachować ochronę SSRF/antyphishing i kwoty. API maszynowe wymaga osobnych poświadczeń, autoryzacji i budżetów, nie anonimowego obejścia. |
| Bezpieczeństwo runtime | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Readiness i preflight | Częściowe | Projekt url shortener system ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Zarządzane wydanie i odzyskiwanie | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Obserwowalność | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Brak | W audytowanym źródle projektu url shortener system nie znaleziono wymaganej kompletnej implementacji. |

### Zadania pozostałe i bieżące

#### Chronić tworzenie linków przez Turnstile i naprawić XFF/SSRF

**Implementacja · W toku · 45% · trudność 5/5 · 18–28 h**

The API has tests and an in-memory limiter, but trusts unsafe client identity and lacks cost-separated policies. Target, October 25, 2026: Require Turnstile with backend validation and negative/public acceptance for anonymous browser link creation before public launch. Keep redirects challenge-free; preserve SSRF/anti-phishing checks and quotas. Any machine API requires separate credentials, authorization and budgets, not an anonymous bypass. See docs/anti-bot-standard.md. Existing effort/progress estimates are historical; no re-estimation or implementation credit in this update.

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

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–14 h**

GHCR digests, OIDC deploy, stable routing and rollback do not exist. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Skonfigurować domenę, limity i monitoring

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

The target DNS is absent and edge/proxy limits and monitoring are not configured.

#### Dodać favicon i metadane publicznego UI

**Dokumentacja · Planowane · 0% · trudność 2/5 · 1–2 h**

No web frontend or favicon exists.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Ruch przekierowań nie może dzielić niskiego limitu tworzenia.
- Użyć trusted proxy, ochrony SSRF/private IP i ograniczonego workera analityki.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Doprecyzowanie 20 października: przerwy są dozwolone podczas przygotowania, pierwszego wdrożenia i migracji. Docelowy Coolify nadal wymaga rolling update z bramką zdrowia i backupów potrzebnych danych/konfiguracji/kluczy z proporcjonalnym sprawdzeniem odtworzenia. Bez liczbowego SLA, stałych replik i HA wielu hostów. Dla projektów stateless/statycznych/bez serwera stosować właściwy zakres hostingu i danych. Zachować dane, harmonogramy kopii i zabezpieczenia wdrożeń. To plan, nie nowy odbiór ani estymacja; docs/operating-standard.md obejmuje też przyszłe repozytoria.
- Cel, 25 października 2026 — Wymagać Turnstile z walidacją backendu i odbiorem negatywnym/publicznym dla anonimowego tworzenia linków w przeglądarce przed publikacją. Przekierowania bez wyzwania; zachować ochronę SSRF/antyphishing i kwoty. API maszynowe wymaga osobnych poświadczeń, autoryzacji i budżetów, nie anonimowego obejścia. Stosować docs/anti-bot-standard.md; odbiór funkcjonalny jest osobny od antybotowego.
