# Tic-Tac-Toe AI — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **94%**  
Forecast / prognoza: **2026-11-02–2026-12-05**, 12–20 h, high confidence / wysoka pewność

## English

### Purpose and current state

Tic-Tac-Toe AI is a public interactive laboratory for classic search, reinforcement-learning and ONNX agents. The implementation, tests, CI/CD and production service are working. The latest audited commit was `5164282`; both Quality and Deploy succeeded and `https://tictactoe.grela.dev` returned HTTP 200.

### Completed and verified

- Human vs AI, local player vs player and AI vs AI/series workflows are shipped.
- Replay, Polish/English localization, themes, favicon and winning-line animation are present.
- Backend, integration and browser coverage is automated; the latest workflow covered 66 non-browser tests and five browser tests.
- Docker delivery uses Tailscale OIDC and SSH to the application account.
- The deploy starts a candidate, checks health and retains rollback behavior before replacing the old production container.
- README, model/training instructions, infrastructure documentation and MIT license exist.

### Remaining work and known issues

- Verify actual Cloudflare and NPM rate-limit rules, not only repository configuration.
- Narrow trusted proxy addresses so client identity cannot be supplied by an untrusted hop.
- Exercise rate-limit behavior through the complete public proxy chain.
- Move distributed limiter state to Redis before simultaneously serving blue and green instances.
- Implement true blue-green routing and automatic rollback based on external health.
- Add operational visibility for limit rejections, deployment failures and application latency.
- Keep model metadata and benchmarks reproducible as dependencies change.

### Decisions

Current application limits remain 30 moves per minute, three series per minute and two concurrent AI operations. Fail2ban handles repeated host-level abuse; Cloudflare and NPM absorb generic HTTP bursts; semantic and compute-cost limits live in FastAPI. Preflight-plus-rollback is an accepted intermediate state, but it is not called blue-green.

## Polski

### Cel i stan bieżący

Tic-Tac-Toe AI to publiczne laboratorium agentów klasycznych, reinforcement learning i ONNX. Implementacja, testy, CI/CD i produkcja działają. Audytowany commit to `5164282`; workflowy Quality i Deploy przeszły, a `https://tictactoe.grela.dev` zwrócił HTTP 200.

### Wykonane i zweryfikowane

- Dostępne są tryby człowiek–AI, lokalny gracz–gracz oraz AI–AI/serie.
- Działają replay, PL/EN, motywy, favicon i animacja zwycięskiej linii.
- Automatyczne pokrycie obejmuje backend, integrację i przeglądarkę; ostatnie CI wykonało 66 testów nieprzeglądarkowych i pięć browser tests.
- Docker deploy używa Tailscale OIDC oraz SSH do konta aplikacji.
- Wdrożenie uruchamia kandydata, wykonuje health check i zachowuje rollback przed podmianą produkcji.
- Są README, instrukcje modeli/treningu, dokumentacja infrastruktury i MIT.

### Do zrobienia i znane problemy

- Zweryfikować rzeczywiste reguły Cloudflare i NPM.
- Zawęzić adresy zaufanych proxy.
- Przetestować limitowanie przez cały publiczny łańcuch proxy.
- Przenieść stan limiterów do Redis przed równoczesnym blue/green.
- Dodać prawdziwe blue-green z przełączeniem ruchu i rollbackiem.
- Dodać obserwowalność odrzuceń, wdrożeń i opóźnień.
- Utrzymywać odtwarzalne metadane modeli i benchmarki.

### Decyzje

Limity aplikacji pozostają: 30 ruchów/min, trzy serie/min i dwie równoległe operacje AI. Fail2ban chroni host, Cloudflare i NPM pochłaniają ogólne bursty, a FastAPI egzekwuje limity semantyczne i koszt obliczeń. Obecny preflight z rollbackiem nie jest jeszcze blue-green.

