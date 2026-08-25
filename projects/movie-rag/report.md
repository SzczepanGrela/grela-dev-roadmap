# MovieRAG — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **56%**<br>
Forecast / prognoza: **2026-12-01–2027-02-03**, 26–43 h, medium confidence / pewność: medium

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Semantic and agentic movie search over plots, scenes, themes and cast.

The application is live and mature; remaining work is production polish rather than core delivery.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/movie-rag` @ `8f525098c70afddaa0a0aba847fb3881956649cf`
- **Source state:** clean public main shallow clone
- **Tests and CI:** Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists.
- **Production:** movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Complete | Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists. |
| Immutable release | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Deployment access | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25. |
| Abuse protection | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | movie rag has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited movie rag source. |
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

#### Deploy digests with preflight and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 6–10 h**

The workflow publishes images but deploys latest/short tags and globally prunes images without true blue-green.

#### Add backups, telemetry and Groq alerts

**Delivery · Planned · 0% · difficulty 4/5 · 3–5 h**

Central resource/deployment visibility and tested database backups were not verified.

### Architecture decisions

- Search and Ask AI use separate policies and SLAs.
- Ask AI keeps Turnstile, daily quota, global concurrency and a Groq circuit breaker.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Semantyczne i agentowe wyszukiwanie filmów po fabule, scenach, motywach i obsadzie.

Aplikacja jest dojrzała i live; pozostał głównie polish produkcyjny.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/movie-rag` @ `8f525098c70afddaa0a0aba847fb3881956649cf`
- **Stan źródła:** clean public main shallow clone
- **Testy i CI:** Latest CI/CD runs succeeded; GHCR images exist but use latest/short SHA deployment; no ruleset or environment exists.
- **Produkcja:** movierag.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Gotowe | GitHub Actions potwierdza zielony, proporcjonalny zestaw kontroli jakości dla audytowanego commitu. |
| Niezmienne wydanie | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Dostęp wdrożeniowy | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | Część publicznego HTTPS lub routingu działa, ale pełny zaufany łańcuch sieciowy nie został potwierdzony. |
| Ochrona przed nadużyciami | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt movie rag ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu movie rag nie znaleziono wymaganej kompletnej implementacji. |
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

#### Wdrażać digests z preflight i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 6–10 h**

The workflow publishes images but deploys latest/short tags and globally prunes images without true blue-green.

#### Dodać backupy, telemetry i alerty Groq

**Wdrożenie · Planowane · 0% · trudność 4/5 · 3–5 h**

Central resource/deployment visibility and tested database backups were not verified.

### Decyzje architektoniczne

- Search i Ask AI używają osobnych polityk i SLA.
- Ask AI zachowuje Turnstile, quota, global concurrency i circuit breaker Groq.
- Projekt podlega profilowi standardu v2: vps-web.
