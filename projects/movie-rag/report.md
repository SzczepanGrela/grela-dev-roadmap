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
- **Source state:** clean public main shallow clone October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
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
| Verified deployment | Missing | The required complete implementation was not found in the audited movie rag source. October 20 scope: verify the selected deployment and public smoke; downtime allowed. Earlier missing blue-green/automatic rollback evidence is not a release blocker. Existing status records historical evidence, not a fresh acceptance. |
| Coordination and retention | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. October 20: backup/uptime alert requirements withdrawn; useful resource/cost diagnostics remain separate. |
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

#### Complete attribution and the operating runbook

**Documentation · In progress · 55% · difficulty 3/5 · 3–5 h**

October 20 planning revision: Attribution/licensing and useful runbook work remain. Backup/restore documentation is optional, not a release prerequisite. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Split Search, Ask AI and ingestion limits

**Delivery · In progress · 55% · difficulty 4/5 · 4–7 h**

Ask AI has in-memory per-IP and daily limits plus Turnstile; other costly paths and shared state remain.

#### Deploy qualified digests with functional smoke

**Delivery · Planned · 0% · difficulty 5/5 · 6–10 h**

October 20 planning revision: Replace mutable deployment inputs and global prune with scoped Coolify digest deployment, routing and query/streaming smoke. Downtime allowed; no mandatory blue-green/backup/restore exercise. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Add useful resource and Groq cost diagnostics

**Delivery · Planned · 0% · difficulty 4/5 · 3–5 h**

October 20 planning revision: Bound resource/cost/deployment visibility to useful needs. Mandatory tested backups and availability alerts are removed from this task. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Search and Ask AI use separate policies and SLAs.
- Ask AI keeps Turnstile, daily quota, global concurrency and a Groq circuit breaker.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- October 20 owner policy: portfolio apps have no promoted user traffic requirement, uptime SLA or mandatory backups. Downtime/stop-start is acceptable; off-host copies, restore drills and availability exercises are optional, not release gates. Keep correctness/security/resource/cost controls and existing data/configuration. docs/operating-standard.md applies to this and future repositories. Prior source/audit dates and effort estimates are historical, not a fresh scope estimate.

## Polski

### Cel i aktualny stan

Semantyczne i agentowe wyszukiwanie filmów po fabule, scenach, motywach i obsadzie.

Aplikacja jest dojrzała i live; pozostał głównie polish produkcyjny. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/movie-rag` @ `8f525098c70afddaa0a0aba847fb3881956649cf`
- **Stan źródła:** clean public main shallow clone October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
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
| Sprawdzone wdrożenie | Brak | W audytowanym źródle projektu movie rag nie znaleziono wymaganej kompletnej implementacji. Zakres 20 października: sprawdzić wybrane wdrożenie i publiczny smoke; przerwa dozwolona. Wcześniejszy brak blue-green/automatycznego rollbacku nie blokuje wydania. Status zachowuje dowód historyczny, nie jest nowym odbiorem. |
| Koordynacja i retencja | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. 20 października: wycofano wymóg alertów backup/uptime; użyteczna diagnostyka zasobów/kosztów pozostaje osobno. |
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

#### Dokończyć atrybucję i runbook utrzymania

**Dokumentacja · W toku · 55% · trudność 3/5 · 3–5 h**

October 20 planning revision: Attribution/licensing and useful runbook work remain. Backup/restore documentation is optional, not a release prerequisite. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Rozdzielić limity Search, Ask AI i ingestion

**Wdrożenie · W toku · 55% · trudność 4/5 · 4–7 h**

Ask AI has in-memory per-IP and daily limits plus Turnstile; other costly paths and shared state remain.

#### Wdrażać sprawdzone digests ze smoke funkcji

**Wdrożenie · Planowane · 0% · trudność 5/5 · 6–10 h**

October 20 planning revision: Replace mutable deployment inputs and global prune with scoped Coolify digest deployment, routing and query/streaming smoke. Downtime allowed; no mandatory blue-green/backup/restore exercise. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Dodać diagnostykę zasobów i kosztów Groq

**Wdrożenie · Planowane · 0% · trudność 4/5 · 3–5 h**

October 20 planning revision: Bound resource/cost/deployment visibility to useful needs. Mandatory tested backups and availability alerts are removed from this task. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Search i Ask AI używają osobnych polityk i SLA.
- Ask AI zachowuje Turnstile, quota, global concurrency i circuit breaker Groq.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Decyzja właściciela 20 października: aplikacje portfolio nie wymagają ciągłości ruchu, SLA uptime ani backupów. Przerwy/stop-start są akceptowalne; off-host, restore i ćwiczenia ciągłości są opcjonalne, nie blokują wydania. Zachować kontrole funkcji/bezpieczeństwa/zasobów/kosztów i istniejące dane/konfigurację. docs/operating-standard.md obejmuje to i przyszłe repozytoria. Starsze daty audytu/źródeł i estymaty pozostają historyczne, bez nowej wyceny zakresu.
