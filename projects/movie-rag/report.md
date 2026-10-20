# MovieRAG — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **53%**<br>
Forecast / prognoza: **2026-12-11–2027-02-15**, 28–47 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Semantic and agentic movie search over plots, scenes, themes and cast.

The application is live and mature; remaining work is production polish rather than core delivery. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/movie-rag` @ `8f525098c70afddaa0a0aba847fb3881956649cf`
- **Source state:** clean public main shallow clone October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Tests and CI:** Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists.
- **Production:** movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Complete | Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists. |
| Immutable release | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Deployment access | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25. |
| Abuse protection | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Managed release and recovery | Missing | The required complete implementation was not found in the audited movie rag source. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Maintain Search and Ask AI provider resilience

**Implementation · In progress · 85% · difficulty 4/5 · 3–5 h**

Search and Explain are shipped with provider error handling; remaining resilience and cancellation work is bounded.

#### Add load, cancellation and failure tests

**Quality · In progress · 70% · difficulty 4/5 · 5–8 h**

CI is green and rate-limit tests exist; public-chain and sustained-load scenarios remain.

#### Add license, ruleset and production environment

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

GitHub reports no recognized license, ruleset or environment.

#### Complete attribution, backups and runbook

**Documentation · In progress · 55% · difficulty 3/5 · 3–5 h**

Operational backup/restore and licensing documentation remain incomplete.

#### Split Search, Ask AI and ingestion limits

**Delivery · In progress · 55% · difficulty 4/5 · 4–7 h**

Ask AI has in-memory per-IP and daily limits plus Turnstile; other costly paths and shared state remain.

#### Accept health-gated rolling releases and scoped recovery

**Delivery · Planned · 0% · difficulty 5/5 · 6–10 h**

The workflow publishes images but deploys latest/short tags and globally prunes images without true blue-green. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Add backups, telemetry and Groq alerts

**Delivery · Planned · 0% · difficulty 4/5 · 3–5 h**

Central resource/deployment visibility and tested database backups were not verified. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Search and Ask AI use separate policies and SLAs.
- Ask AI keeps Turnstile, daily quota, global concurrency and a Groq circuit breaker.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- October 20 clarification: downtime is accepted during preparation, initial deployment and migration. Final Coolify operation still requires health-gated rolling updates and backups of necessary durable data/configuration/keys with proportionate recovery verification. No numeric uptime SLA, permanent replicas or multi-host HA. Stateless/static/non-server projects use their applicable hosting and data scope. Existing data, backup schedules and release guards remain. This is planning, not new runtime acceptance or re-estimation; docs/operating-standard.md applies to future repositories too.

## Polski

### Cel i aktualny stan

Semantyczne i agentowe wyszukiwanie filmów po fabule, scenach, motywach i obsadzie.

Aplikacja jest dojrzała i live; pozostał głównie polish produkcyjny. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/movie-rag` @ `8f525098c70afddaa0a0aba847fb3881956649cf`
- **Stan źródła:** clean public main shallow clone October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Testy i CI:** Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists.
- **Produkcja:** movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Gotowe | GitHub Actions potwierdza zielony, proporcjonalny zestaw kontroli jakości dla audytowanego commitu. |
| Niezmienne wydanie | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Dostęp wdrożeniowy | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | Część publicznego HTTPS lub routingu działa, ale pełny zaufany łańcuch sieciowy nie został potwierdzony. |
| Ochrona przed nadużyciami | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Zarządzane wydanie i odzyskiwanie | Brak | W audytowanym źródle projektu movie rag nie znaleziono wymaganej kompletnej implementacji. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Utrzymać Search i Ask AI oraz odporność providera

**Implementacja · W toku · 85% · trudność 4/5 · 3–5 h**

Search and Explain are shipped with provider error handling; remaining resilience and cancellation work is bounded.

#### Dodać testy obciążenia, anulowania i awarii

**Jakość · W toku · 70% · trudność 4/5 · 5–8 h**

CI is green and rate-limit tests exist; public-chain and sustained-load scenarios remain.

#### Dodać licencję, ruleset i production environment

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

GitHub reports no recognized license, ruleset or environment.

#### Dokończyć atrybucję, backupy i runbook

**Dokumentacja · W toku · 55% · trudność 3/5 · 3–5 h**

Operational backup/restore and licensing documentation remain incomplete.

#### Rozdzielić limity Search, Ask AI i ingestion

**Wdrożenie · W toku · 55% · trudność 4/5 · 4–7 h**

Ask AI has in-memory per-IP and daily limits plus Turnstile; other costly paths and shared state remain.

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · Planowane · 0% · trudność 5/5 · 6–10 h**

The workflow publishes images but deploys latest/short tags and globally prunes images without true blue-green. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Dodać backupy, telemetry i alerty Groq

**Wdrożenie · Planowane · 0% · trudność 4/5 · 3–5 h**

Central resource/deployment visibility and tested database backups were not verified. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Search i Ask AI używają osobnych polityk i SLA.
- Ask AI zachowuje Turnstile, quota, global concurrency i circuit breaker Groq.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Doprecyzowanie 20 października: przerwy są dozwolone podczas przygotowania, pierwszego wdrożenia i migracji. Docelowy Coolify nadal wymaga rolling update z bramką zdrowia i backupów potrzebnych danych/konfiguracji/kluczy z proporcjonalnym sprawdzeniem odtworzenia. Bez liczbowego SLA, stałych replik i HA wielu hostów. Dla projektów stateless/statycznych/bez serwera stosować właściwy zakres hostingu i danych. Zachować dane, harmonogramy kopii i zabezpieczenia wdrożeń. To plan, nie nowy odbiór ani estymacja; docs/operating-standard.md obejmuje też przyszłe repozytoria.
