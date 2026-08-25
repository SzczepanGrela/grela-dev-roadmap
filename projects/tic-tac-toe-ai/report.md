# Tic-Tac-Toe AI — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **63%**<br>
Forecast / prognoza: **2026-09-28–2026-10-21**, 21–36 h, high confidence / pewność: high

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Interactive Tic-Tac-Toe laboratory for classic, reinforcement-learning and ONNX agents.

The project is feature-complete and now in hardening/maintenance.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `5164282681e04d2279400d86b9a494aa817558d0`
- **Source state:** local worktree with 10 changed paths after tested UI, limiter and proxy fixes
- **Tests and CI:** Quality and Deploy succeeded at 5164282; 68 non-browser and 7 Playwright tests pass locally for the dirty candidate; no ruleset or environment exists.
- **Production:** tictactoe.grela.dev returned HTTPS 200 through Cloudflare; the local candidate is not deployed.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Partial | Quality and Deploy succeeded at 5164282; 68 non-browser and 7 Playwright tests pass locally for the dirty candidate; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Deployment access | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | tictactoe.grela.dev returned HTTPS 200 through Cloudflare; the local candidate is not deployed. |
| Abuse protection | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Coordination and retention | Partial | tic tac toe ai has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Ship and verify the current fixes

**Implementation · In progress · 90% · difficulty 2/5 · 1–2 h**

Reset, scoreboard, weighted token bucket, Retry-After and trusted-proxy changes pass locally but are not deployed.

#### Keep backend and browser coverage green

**Quality · In progress · 95% · difficulty 2/5 · 1–2 h**

The candidate passes 68 non-browser and seven Playwright tests plus a Docker build.

#### Enable ruleset and production environment

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

GitHub returned no ruleset or environment.

#### Update limits and operations runbook

**Documentation · In progress · 80% · difficulty 2/5 · 1–2 h**

Documentation must reflect weighted games, trusted proxy handling and the final deployment model.

#### Configure and test Cloudflare and NPM

**Delivery · In progress · 35% · difficulty 3/5 · 2–4 h**

Application limits exist locally; edge/proxy rules and multi-user real-IP isolation remain unverified.

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
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Interaktywne laboratorium kółka i krzyżyka dla agentów klasycznych, RL i ONNX.

Projekt jest funkcjonalnie ukończony i znajduje się w fazie hardening/maintenance.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `5164282681e04d2279400d86b9a494aa817558d0`
- **Stan źródła:** local worktree with 10 changed paths after tested UI, limiter and proxy fixes
- **Testy i CI:** Quality and Deploy succeeded at 5164282; 68 non-browser and 7 Playwright tests pass locally for the dirty candidate; no ruleset or environment exists.
- **Produkcja:** tictactoe.grela.dev returned HTTPS 200 through Cloudflare; the local candidate is not deployed.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | Część publicznego HTTPS lub routingu działa, ale pełny zaufany łańcuch sieciowy nie został potwierdzony. |
| Ochrona przed nadużyciami | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Częściowe | Projekt tic tac toe ai ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Wypchnąć i zweryfikować bieżące poprawki

**Implementacja · W toku · 90% · trudność 2/5 · 1–2 h**

Reset, scoreboard, weighted token bucket, Retry-After and trusted-proxy changes pass locally but are not deployed.

#### Utrzymać pełne testy backendu i przeglądarki

**Jakość · W toku · 95% · trudność 2/5 · 1–2 h**

The candidate passes 68 non-browser and seven Playwright tests plus a Docker build.

#### Włączyć ruleset i środowisko production

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

GitHub returned no ruleset or environment.

#### Uaktualnić limity i runbook operacyjny

**Dokumentacja · W toku · 80% · trudność 2/5 · 1–2 h**

Documentation must reflect weighted games, trusted proxy handling and the final deployment model.

#### Skonfigurować i przetestować Cloudflare oraz NPM

**Wdrożenie · W toku · 35% · trudność 3/5 · 2–4 h**

Application limits exist locally; edge/proxy rules and multi-user real-IP isolation remain unverified.

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
- Projekt podlega profilowi standardu v2: vps-web.
