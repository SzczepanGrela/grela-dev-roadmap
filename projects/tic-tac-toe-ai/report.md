# Tic-Tac-Toe AI — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **73%**<br>
Forecast / prognoza: **2026-09-28–2026-10-21**, 17–28 h, high confidence / pewność: high

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Interactive Tic-Tac-Toe laboratory for classic, reinforcement-learning and ONNX agents.

The project is feature-complete and now in hardening/maintenance.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `69083b6c5e741646e352cccaab03cd6b21c65cb3`
- **Source state:** clean main synchronized with origin after the production rollout
- **Tests and CI:** Quality 32871780435 and Deploy 32871780001 succeeded for 69083b6; no ruleset or production environment exists.
- **Production:** Public health returned status ok with all eight agents ready; the deployed frontend contains stale-response protection and NPM logs the verified visitor IP.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Complete | Quality 32871780435 passed Python 3.12/3.13 tests, eight Playwright scenarios, four training smoke jobs and the Docker build for 69083b6. |
| Immutable release | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Deployment access | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | Cloudflare HTTPS, global NPM CF-Connecting-IP restoration and exact-NPM application trust are deployed; the visitor address was verified end-to-end without retaining it, while direct-origin rejection still needs an external test. |
| Abuse protection | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Coordination and retention | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Ship and verify the current fixes

**Implementation · Done · 100% · difficulty 2/5 · 0–0 h**

Reset, scoreboard, weighted token bucket, Retry-After, stale-response protection and trusted-proxy changes were deployed at 69083b6.

#### Keep backend and browser coverage green

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

Quality 32871780435 passed backend tests on Python 3.12/3.13, eight Playwright tests, all training smoke jobs and the Docker build.

#### Enable ruleset and production environment

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

GitHub returned no ruleset or environment.

#### Update limits and operations runbook

**Documentation · Done · 100% · difficulty 2/5 · 0–0 h**

The application runbook and portfolio standard document weighted games and the Cloudflare-to-NPM-to-application trust chain.

#### Configure and test Cloudflare and NPM

**Delivery · In progress · 70% · difficulty 3/5 · 1–2 h**

NPM now restores visitor IPs globally and the application trusts only NPM; the visitor address was verified end-to-end against the workstation without retaining it in the roadmap. TTT-specific Cloudflare/NPM limits and a non-Cloudflare direct-origin rejection test remain.

#### Build once in CI and deploy a GHCR digest

**Delivery · Planned · 0% · difficulty 4/5 · 4–7 h**

The VPS still builds a short-SHA image from moving main and globally prunes images.

#### Implement Redis, stable gateway and blue-green

**Delivery · Planned · 0% · difficulty 4/5 · 8–12 h**

The current preflight removes the checked candidate before recreating production; limiter state is process-local.

#### Add 429, latency and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

### Architecture decisions

- Keep the current preflight-plus-rollback deploy before implementing blue-green.
- Moves use a 30/min token bucket with burst 10; series consume tokens by requested game count.
- UFW/DOCKER-USER admits origin HTTPS only from Cloudflare; NPM validates and normalizes CF-Connecting-IP, while the application trusts only NPM as the forwarding peer and rate-limits the resulting visitor IP.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Interaktywne laboratorium kółka i krzyżyka dla agentów klasycznych, RL i ONNX.

Projekt jest funkcjonalnie ukończony i znajduje się w fazie hardening/maintenance.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `69083b6c5e741646e352cccaab03cd6b21c65cb3`
- **Stan źródła:** clean main synchronized with origin after the production rollout
- **Testy i CI:** Quality 32871780435 and Deploy 32871780001 succeeded for 69083b6; no ruleset or production environment exists.
- **Produkcja:** Public health returned status ok with all eight agents ready; the deployed frontend contains stale-response protection and NPM logs the verified visitor IP.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Gotowe | Quality 32871780435 przeszedł testy Python 3.12/3.13, osiem scenariuszy Playwright, cztery treningi smoke i build Dockera dla 69083b6. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | HTTPS Cloudflare, globalne odtwarzanie CF-Connecting-IP w NPM i zaufanie aplikacji wyłącznie do NPM są wdrożone; adres odwiedzającego potwierdzono end-to-end bez zapisywania go, ale odrzucenie bezpośredniego ruchu do originu wymaga testu zewnętrznego. |
| Ochrona przed nadużyciami | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Wypchnąć i zweryfikować bieżące poprawki

**Implementacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

Reset, scoreboard, weighted token bucket, Retry-After, stale-response protection and trusted-proxy changes were deployed at 69083b6.

#### Utrzymać pełne testy backendu i przeglądarki

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

Quality 32871780435 passed backend tests on Python 3.12/3.13, eight Playwright tests, all training smoke jobs and the Docker build.

#### Włączyć ruleset i środowisko production

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

GitHub returned no ruleset or environment.

#### Uaktualnić limity i runbook operacyjny

**Dokumentacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

The application runbook and portfolio standard document weighted games and the Cloudflare-to-NPM-to-application trust chain.

#### Skonfigurować i przetestować Cloudflare oraz NPM

**Wdrożenie · W toku · 70% · trudność 3/5 · 1–2 h**

NPM now restores visitor IPs globally and the application trusts only NPM; the visitor address was verified end-to-end against the workstation without retaining it in the roadmap. TTT-specific Cloudflare/NPM limits and a non-Cloudflare direct-origin rejection test remain.

#### Budować raz w CI i wdrażać digest GHCR

**Wdrożenie · Planowane · 0% · trudność 4/5 · 4–7 h**

The VPS still builds a short-SHA image from moving main and globally prunes images.

#### Wdrożyć Redis, stabilny gateway i blue-green

**Wdrożenie · Planowane · 0% · trudność 4/5 · 8–12 h**

The current preflight removes the checked candidate before recreating production; limiter state is process-local.

#### Dodać metryki 429, opóźnień i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

### Decyzje architektoniczne

- Zachować preflight z rollbackiem przed wdrożeniem blue-green.
- Ruchy używają token bucket 30/min z burstem 10; serie zużywają tokeny według liczby gier.
- UFW/DOCKER-USER dopuszcza HTTPS do originu wyłącznie z Cloudflare; NPM weryfikuje i normalizuje CF-Connecting-IP, a aplikacja ufa jako peerowi proxy tylko NPM i limituje wynikowe IP odwiedzającego.
- Projekt podlega profilowi standardu v2: vps-web.
