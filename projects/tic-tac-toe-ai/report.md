# Tic-Tac-Toe AI — status report / raport stanu

Audit date / data audytu: **2026-09-28**<br>
Estimated completion / szacowane ukończenie: **92%**<br>
Forecast / prognoza: **2026-10-08–2026-11-02**, 12–23 h, medium confidence / pewność: medium

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Browser game with 3×3, 5×5 and 9×9 boards, local and agent play, and streamed series. MCTS supports 5×5; the optional Jev provider remains disabled pending its final evaluation and activation decision. Training modules remain in the repository.

September 28 reconciliation closes accepted delivery work while retaining shared-state limits, monitoring, hardening exceptions and the final Jev gate. Evidence dates are preserved; no whole-server audit is implied. Hours and percentages are planning estimates, and other projects retain their earlier audit dates.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `3188ef1ab518fff289d7f2aacd3976d3a2b28818`
- **Source state:** Scoped reconciliation of the September 25 feature release, public PR history and dated September 16–27 operator/edge evidence. No fresh whole-host audit; dependency maintenance is tracked separately.
- **Tests and CI:** Feature Quality and protected deployment run 36082090397 succeeded for 3188ef1. Main protection and production approval were accepted September 17. Dependency PRs #25/#4 are separately validated before promotion. PR #39 passed complete Quality 36443465139 and protected main release 36444253457.
- **Production:** September 16–18: managed health, rejected candidate, public-smoke rollback, serialized releases and overlap capacity accepted. September 21: persistent Jev ledger, off-host backup and isolated paused restore/reconciliation accepted. September 25: responsive UI and NDJSON series released with Jev disabled. September 27: stream edge coverage and one-client block/recovery, TLS minimum 1.2 and latest scheduled backup metadata confirmed. Full VPS recovery, broader rate-limit behavior and current runtime readback remain separate. September 28 public stream timing, shared endpoint-budget recovery and paired public application-client isolation passed. Revision 15a57d7 from PR #39 passed protected release 36444253457; correlated public/server logs confirmed cooperative cancellation after the first game. A subsequent TTT-only edge burst also blocked Inventory export and recovered; paired sources reached different Cloudflare locations. A synchronized rolling test then completed all ten MCTS games, including games 9–10 after old-container SIGTERM, and delivered complete without error. Same-location distinct-IP isolation and rolling shared budgets remain open.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Complete | Protected main and operator-approved production accepted September 17; license and public docs maintained. Self-approval is allowed. |
| Quality CI | Complete | Feature CI passed; dependency updates use a separate fresh PR gate. |
| Immutable release | Complete | CI qualifies and attests one image; protected deployment promotes its digest and verifies public revision. |
| Deployment access | Complete | Private Coolify API, production-scoped credentials and mapped OIDC identity accepted; old TTT repository secrets and host account retired. Token scope is the Coolify team. |
| Network, TLS and client identity | Complete | Dated identity/spoof/HTTPS checks and independent IPv4/IPv6 origin rejection passed; TLS minimum 1.2 verified September 27. This is not TLS inside the Docker network. |
| Abuse protection | Partial | Edge one-client acceptance passed September 27. September 28 application rejection/recovery, public stream timing and paired public application-client isolation passed; local identity/queue/disconnect tests also passed. Public disconnect was correlated with actual worker cancellation in the operator's logs after PR #39. Shared TTT/Inventory edge block and recovery passed; the paired observer remained usable from a different Cloudflare location. A synchronized rolling test also delivered all ten MCTS games, with games 9–10 finishing after old-container SIGTERM. Same-location distinct-IP isolation and rolling shared state remain open. Local two-process characterization later confirmed budget duplication/reset while game continuation worked; the existing shared-state target remains unmet. |
| Runtime safety | Partial | Non-root, capability drop, init and CPU/RAM limits observed; parser exception and remaining effective controls documented. |
| Readiness and preflight | Complete | Image probe, managed candidate-health gate and rejected-candidate test accepted; stable preflight and full post-promotion smoke are separate. Optional provider failure does not fail local readiness. |
| Atomic promotion and rollback | Complete | Managed rolling and automatic restoration of the previous attested digest after forced public revision failure passed September 16–17. A September 28 public MCTS series also completed across old-container SIGTERM. No claim of blue-green slots. |
| Coordination and retention | Complete | Per-production serialization and two-container capacity acceptance passed September 17; app-scoped retention preserves rollback. Broader shared limiter state remains a separate task. |
| Observability | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Ship and verify the current fixes

**Implementation · Done · 100% · difficulty 2/5 · 0–0 h**

September 18–25: configurable 3×3/5×5/9×9 play, MCTS 5×5, redesigned responsive game sheet and incremental NDJSON series released in PRs #21–24 and #34–35. Optional provider activation is separate.

#### Keep backend and browser coverage green

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

Feature release 3188ef1 passed in run 36082090397. Dependency PRs #25/#4 were updated, checked and merged September 27–28; runs 36360057813 and 36360447941 passed. Main run 36367310173 passed Python 3.12/3.13, training, browser, image/scan and release verification before production approval. PR #36 passed full Quality run 36374994035; 226 backend tests passed locally against the production runtime lock. PR #39 passed full Quality 36443465139 and main release 36444253457; 228 backend tests passed locally, including 13 delivery cases.

#### Enable ruleset and production environment

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

September 17 acceptance: main requires Quality, production permits only main and requires operator approval. Sole-owner self-approval is allowed; this is not an independent second-person review.

#### Document the Coolify migration and known limitations

**Documentation · Done · 100% · difficulty 2/5 · 0–0 h**

September 28 reconciliation updates the public plan, reusable Coolify checklist and normalized record from dated private evidence. Private topology and credentials remain outside this repository. PR #36 removed unused SSH deployment source/tests and stale fallback/canary instructions; the delivery-verification guide distinguishes local tests from public acceptance.

#### Verify Tunnel/Traefik identity and edge controls

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

September 27 edge coverage and single-client block/recovery passed. September 28 public MCTS games arrived at 1.59/3.34/4.42 seconds; weighted batch/stream application rejection and recovery passed. PR #36 adds local independent-client/proxy-trust, queue and real-HTTP disconnect coverage. The paired public test recorded 45 application 429s from one source while all ten ten-game requests from another succeeded. PR #39 adds stream/work correlation. The September 28 public disconnect after game 1 stopped game 2; no games 3–10 started, confirmed by the operator's server logs. A TTT-only edge burst also blocked Inventory export, followed by recovery. Three VPS block cycles coincided with 35 unblocked validation responses from the observer, but the sources reached different Cloudflare locations. A synchronized same-image rolling test then delivered all ten MCTS games and complete, with games 9–10 finishing after old-container SIGTERM. Same-location distinct-IP isolation and rolling shared counters remain open.

#### Build once in CI and deploy a GHCR digest

**Delivery · Done · 100% · difficulty 4/5 · 0–0 h**

Accepted CI build/scan/attestation → protected production → Coolify exact-digest promotion. Feature release 3188ef1 passed in run 36082090397; later dependency releases keep the same contract.

#### Verify promotion/rollback and share limiter state

**Delivery · In progress · 65% · difficulty 4/5 · 3–6 h**

September 16–17 managed health, rejected candidate, automatic recovery after failed public smoke, release serialization and measured two-container capacity passed. This is accepted managed rolling, not a claim of blue-green slots. September 28 synchronized public MCTS acceptance proved that the old container completed games 9–10 after SIGTERM and delivered all ten games plus complete before exiting. Shared rate-limit state remains open; Redis is not yet installed. This does not certify every long-running or stateful workload. A later local HTTP experiment on two independent processes confirmed game continuation across replicas, separate 30-game series allowances and another full allowance after replacement. This characterizes the current limitation; it is not public shared-counter acceptance. The shared store and its failure policy still need selection.

#### Add 429, latency and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

#### Automate promotion of the CI-tested digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

September 17 accepted protected automatic digest promotion through private Coolify API, OIDC environment mapping and reusable-workflow secret forwarding. Later feature releases passed; no SSH launcher is used for deployment.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 50% · difficulty 3/5 · 2–4 h**

September 11 operator readback confirms non-root, cap-drop ALL, init, CPU/RAM limits and local log rotation. PID/no-new-privileges/read-only/tmpfs exceptions remain; this dated evidence is not a new full runtime audit.

#### Finish Jev evaluation and decide activation

**Implementation · Blocked · 85% · difficulty 3/5 · 2–4 h**

Adapter, durable spending ledger, backups and isolated restore accepted; all variants through 9×9 K=8 evaluated. K=9 waits for the October UTC evaluation allowance. Public activation is a separate decision; Jev remains disabled. No extra paid evaluation is part of dependency maintenance.

### Architecture decisions

- Moves use a 30/min token bucket with burst 10; series consume tokens by requested game count.
- The project follows the v2 standard profile: vps-web.
- Use one tested GHCR digest and protected Coolify managed rolling promotion with public smoke and rollback. Preserve the current Jev ledger when rolling back image bytes.
- Temporarily omit no-new-privileges from Custom Docker Options due to the reproduced 4.3.14 parser issue; verify effective settings and revisit via reviewed Compose or upgrade.

## Polski

### Cel i aktualny stan

Gra przeglądarkowa z planszami 3×3, 5×5 i 9×9, grą lokalną i agentami oraz przyrostowymi seriami. MCTS obsługuje 5×5; opcjonalny Jev pozostaje wyłączony do zakończenia oceny i decyzji o aktywacji. Moduły treningowe pozostają w repozytorium.

Uzgodnienie z 28 września zamyka odebrane prace wdrożeniowe, zachowując limity współdzielonego stanu, monitoring, wyjątki hardeningu i końcową bramkę Jev. Daty dowodów pozostają jawne; nie wykonano nowego audytu całego serwera. Godziny i procenty są estymacjami, a inne projekty zachowują wcześniejsze daty audytu.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `3188ef1ab518fff289d7f2aacd3976d3a2b28818`
- **Stan źródła:** Scoped reconciliation of the September 25 feature release, public PR history and dated September 16–27 operator/edge evidence. No fresh whole-host audit; dependency maintenance is tracked separately.
- **Testy i CI:** Feature Quality and protected deployment run 36082090397 succeeded for 3188ef1. Main protection and production approval were accepted September 17. Dependency PRs #25/#4 are separately validated before promotion. PR #39 passed complete Quality 36443465139 and protected main release 36444253457.
- **Produkcja:** September 16–18: managed health, rejected candidate, public-smoke rollback, serialized releases and overlap capacity accepted. September 21: persistent Jev ledger, off-host backup and isolated paused restore/reconciliation accepted. September 25: responsive UI and NDJSON series released with Jev disabled. September 27: stream edge coverage and one-client block/recovery, TLS minimum 1.2 and latest scheduled backup metadata confirmed. Full VPS recovery, broader rate-limit behavior and current runtime readback remain separate. September 28 public stream timing, shared endpoint-budget recovery and paired public application-client isolation passed. Revision 15a57d7 from PR #39 passed protected release 36444253457; correlated public/server logs confirmed cooperative cancellation after the first game. A subsequent TTT-only edge burst also blocked Inventory export and recovered; paired sources reached different Cloudflare locations. A synchronized rolling test then completed all ten MCTS games, including games 9–10 after old-container SIGTERM, and delivered complete without error. Same-location distinct-IP isolation and rolling shared budgets remain open.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Gotowe | Chroniony main i zatwierdzane przez operatora production odebrane 17 września; licencja i dokumentacja utrzymywane. Self-approval dozwolone. |
| Quality CI | Gotowe | CI wydania funkcjonalnego przeszło; zależności podlegają osobnej bieżącej walidacji PR. |
| Niezmienne wydanie | Gotowe | CI kwalifikuje i atestuje jeden obraz; chroniony deploy promuje jego digest i sprawdza publiczną rewizję. |
| Dostęp wdrożeniowy | Gotowe | Odebrane prywatne API Coolify, sekrety production i tożsamość OIDC; stare sekrety repo oraz konto hosta TTT wycofane. Token ma zakres zespołu Coolify. |
| Sieć, TLS i tożsamość klienta | Gotowe | Datowane testy IP/spoof/HTTPS i niezależnego odrzucenia originu IPv4/IPv6 przeszły; minimum TLS 1.2 sprawdzono 27 września. Nie oznacza to TLS wewnątrz sieci Docker. |
| Ochrona przed nadużyciami | Częściowe | Odbiór edge dla jednego klienta przeszedł 27 września. 28 września przeszły testy odrzucenia/odnowienia budżetu aplikacji, czasu zdarzeń i izolacji dwóch publicznych klientów oraz lokalne testy tożsamości/kolejki/rozłączeń. Po PR #39 logi operatora potwierdziły również zatrzymanie obliczeń po rozłączeniu publicznego strumienia. Wspólna blokada edge TTT/Inventory i powrót dostępu przeszły; drugi klient pozostał dostępny przez inne centrum Cloudflare. Zsynchronizowany test rolling update dostarczył też wszystkie 10 gier MCTS, w tym gry 9–10 zakończone po SIGTERM starego kontenera. Pozostają izolacja różnych IP w jednym centrum i wspólny stan przy rolling update. Późniejszy lokalny test dwóch procesów potwierdził powielenie/reset budżetu przy poprawnej kontynuacji gry; docelowy wspólny stan pozostaje niewdrożony. |
| Bezpieczeństwo runtime | Częściowe | Potwierdzone non-root, cap-drop, init i CPU/RAM; zapisano wyjątek parsera i brakujące odczyty. |
| Readiness i preflight | Gotowe | Probe obrazu, bramka zdrowia kandydata i test odrzucenia odebrane; stabilny preflight oddzielono od pełnego smoke po promocji. Awaria opcjonalnego dostawcy nie wyłącza gotowości lokalnej gry. |
| Atomowa promocja i rollback | Gotowe | Zarządzany rolling i przywrócenie poprzedniego atestowanego digestu po wymuszonym błędzie publicznej rewizji przeszły 16–17 września. 28 września publiczna seria MCTS zakończyła się również po SIGTERM starego kontenera. Nie deklarujemy slotów blue-green. |
| Koordynacja i retencja | Gotowe | Serializacja production i odbiór pojemności dla dwóch kontenerów przeszły 17 września; retencja aplikacji zachowuje rollback. Wspólny stan limitera pozostaje osobnym zadaniem. |
| Obserwowalność | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Wypchnąć i zweryfikować bieżące poprawki

**Implementacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

September 18–25: configurable 3×3/5×5/9×9 play, MCTS 5×5, redesigned responsive game sheet and incremental NDJSON series released in PRs #21–24 and #34–35. Optional provider activation is separate.

#### Utrzymać pełne testy backendu i przeglądarki

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

Feature release 3188ef1 passed in run 36082090397. Dependency PRs #25/#4 were updated, checked and merged September 27–28; runs 36360057813 and 36360447941 passed. Main run 36367310173 passed Python 3.12/3.13, training, browser, image/scan and release verification before production approval. PR #36 passed full Quality run 36374994035; 226 backend tests passed locally against the production runtime lock. PR #39 passed full Quality 36443465139 and main release 36444253457; 228 backend tests passed locally, including 13 delivery cases.

#### Włączyć ruleset i środowisko production

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

September 17 acceptance: main requires Quality, production permits only main and requires operator approval. Sole-owner self-approval is allowed; this is not an independent second-person review.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

September 28 reconciliation updates the public plan, reusable Coolify checklist and normalized record from dated private evidence. Private topology and credentials remain outside this repository. PR #36 removed unused SSH deployment source/tests and stale fallback/canary instructions; the delivery-verification guide distinguishes local tests from public acceptance.

#### Zweryfikować tożsamość i ochronę przez Tunnel/Traefik

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

September 27 edge coverage and single-client block/recovery passed. September 28 public MCTS games arrived at 1.59/3.34/4.42 seconds; weighted batch/stream application rejection and recovery passed. PR #36 adds local independent-client/proxy-trust, queue and real-HTTP disconnect coverage. The paired public test recorded 45 application 429s from one source while all ten ten-game requests from another succeeded. PR #39 adds stream/work correlation. The September 28 public disconnect after game 1 stopped game 2; no games 3–10 started, confirmed by the operator's server logs. A TTT-only edge burst also blocked Inventory export, followed by recovery. Three VPS block cycles coincided with 35 unblocked validation responses from the observer, but the sources reached different Cloudflare locations. A synchronized same-image rolling test then delivered all ten MCTS games and complete, with games 9–10 finishing after old-container SIGTERM. Same-location distinct-IP isolation and rolling shared counters remain open.

#### Budować raz w CI i wdrażać digest GHCR

**Wdrożenie · Gotowe · 100% · trudność 4/5 · 0–0 h**

Accepted CI build/scan/attestation → protected production → Coolify exact-digest promotion. Feature release 3188ef1 passed in run 36082090397; later dependency releases keep the same contract.

#### Zweryfikować promocję/rollback i współdzielić stan limitera

**Wdrożenie · W toku · 65% · trudność 4/5 · 3–6 h**

September 16–17 managed health, rejected candidate, automatic recovery after failed public smoke, release serialization and measured two-container capacity passed. This is accepted managed rolling, not a claim of blue-green slots. September 28 synchronized public MCTS acceptance proved that the old container completed games 9–10 after SIGTERM and delivered all ten games plus complete before exiting. Shared rate-limit state remains open; Redis is not yet installed. This does not certify every long-running or stateful workload. A later local HTTP experiment on two independent processes confirmed game continuation across replicas, separate 30-game series allowances and another full allowance after replacement. This characterizes the current limitation; it is not public shared-counter acceptance. The shared store and its failure policy still need selection.

#### Dodać metryki 429, opóźnień i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

September 17 accepted protected automatic digest promotion through private Coolify API, OIDC environment mapping and reusable-workflow secret forwarding. Later feature releases passed; no SSH launcher is used for deployment.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 50% · trudność 3/5 · 2–4 h**

September 11 operator readback confirms non-root, cap-drop ALL, init, CPU/RAM limits and local log rotation. PID/no-new-privileges/read-only/tmpfs exceptions remain; this dated evidence is not a new full runtime audit.

#### Zakończyć ocenę Jev i zdecydować o aktywacji

**Implementacja · Zablokowane · 85% · trudność 3/5 · 2–4 h**

Adapter, durable spending ledger, backups and isolated restore accepted; all variants through 9×9 K=8 evaluated. K=9 waits for the October UTC evaluation allowance. Public activation is a separate decision; Jev remains disabled. No extra paid evaluation is part of dependency maintenance.

### Decyzje architektoniczne

- Ruchy używają token bucket 30/min z burstem 10; serie zużywają tokeny według liczby gier.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać jednego testowanego digestu GHCR i chronionej promocji rolling Coolify z publicznym smoke i rollbackiem. Cofnięcie obrazu zachowuje aktualny licznik Jev.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
