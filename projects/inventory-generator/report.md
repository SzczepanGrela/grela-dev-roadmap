# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-09**<br>
Estimated completion / szacowane ukończenie: **92%**<br>
Forecast / prognoza: **2026-10-07–2026-10-20**, 13–25 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

The final October 9 bounded canary rolling run passed after two retained incomplete attempts. All eight CSV/HTML/DOCX structures, healthy replacement and normal baseline retirement were verified. Public Inventory and neighbour health: 51 successes each, maxima 0.174565/0.183307 s. Combined sampled canary memory 423.16 MiB; minimum available host RAM 4519.71 MiB; maximum load1 2.7041. CPU peaked at 93.79% but did not breach the sustained >85% for >15 s guard. Recorded cgroup OOM counters were zero. This accepts the measured brief rolling scope, not arbitrary sustained capacity, permanent replicas, active-request drain after SIGTERM or guaranteed zero downtime. The prior ambiguous attempt and rollback-runner warning are not retroactively explained. Scoped cleanup and final records remain; no further load test required. Progress and effort estimates retain October 7 and broader platform tasks stay separate.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Source state:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 public client/retry/header checks and selected runtime inspect passed. October 9 isolated health-gate rejection, controlled failed-smoke rollback and final bounded rolling workload passed. Temporary resource/tool cleanup and final records remain. Earlier stopped attempts and one unexplained rollback-runner warning retain their scope. Progress and effort estimates retain October 7; this is not full platform completion.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Production:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity. A separate final October 9 canary run accepts bounded rolling-load capacity with all eight structures, normal retirement and final public revisions verified. No new production promotion was part of that load run.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | PR-only integration with strict required Quality; all three accepted PRs merged without bypass. |
| Quality CI | Complete | Combined CI plus bounded real HTTP/cgroup qualification pass on the final image; live operational acceptance is separate. |
| Immutable release | Complete | Same tested/attested digest deployed by run 37574806859 at 6971496. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | October 8 paired public clients and sampled forwarded-header checks pass at the app/public-path level. Observer and VPS use different edge locations; same-colo edge isolation remains unproven. Earlier network/TLS evidence retains its date. |
| Abuse protection | Partial | Local capped HTTP overload/recovery, public app-client/retry/header checks and final bounded rolling load passed. Three slots/no queue and brief independent-counter overlap accepted at tested limits. Same-colo edge isolation remains open; sampled peaks do not eliminate future OOM risk. |
| Runtime safety | Partial | Selected new-container inspect confirms the deployed revision, caps, non-root user, capability removal, init and log rotation. Missing PID/security/read-only protections retain the parser exception; unqueried fields are not refreshed. |
| Readiness and preflight | Complete | Final image capped HTTP/readiness and protected release preflight/public smoke pass; health latency is not guaranteed under arbitrary load. |
| Atomic promotion and rollback | Complete | Normal release, isolated unhealthy-candidate rejection, controlled failed-smoke recovery to the exact prior image and bounded rolling workload passed. One earlier runner probe warning remains unexplained; this certifies the tested release/recovery paths, not zero downtime. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; the bounded old/new workload passed. Temporary app/resource and exercise-tool cleanup still needs completion and absence verification. |
| Observability | Partial | Bounded validation reason-code logs and no-submitted-name regressions accepted; central integration, retention and alert delivery still open. |
| Web identity | Partial | PL/EN, mobile and keyboard browser CI pass on merged code; public app.js matches. Preview/licensing remains. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · Done · 100% · difficulty 3/5 · 0–0 h**

Accepted recovery/legacy migration/raw backup fixes merged and deployed. Real HTTP 50k-cell/near-2MiB CSV, HTML and DOCX correctness and invalid-payload bounds pass on the CI image. No unlimited-load or complete OOM-safety claim.

#### Expand export and browser coverage

**Quality · Done · 100% · difficulty 3/5 · 0–0 h**

https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass. Accepted independent browser recovery/migration tests retained. Local CI-image HTTP qualification: 38 baseline + 59 repeat requests at 1 CPU/512 MiB, valid DOCX/CSV/HTML structures, expected 400/413/429, zero OOM. Worst cgroup peak 469.61 MiB, health up to 2.0571 s in a burst; bounded evidence only.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 90% · difficulty 2/5 · 2–3 h**

Corrected runbooks and release implementation merged. Normal protected release, selected runtime, public clients/headers, isolated health gate, controlled rollback and final bounded rolling workload are accepted. All eight structures and normal baseline retirement passed in the final October 9 attempt; resource/tool cleanup and final record reconciliation remain. Earlier incomplete attempts and runner warning retain their original scope.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. October 9 final bounded rolling workload passed at three slots/no queue and intended per-instance limits; process-local overlap accepted for that scope. Same-colo edge isolation remains open.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 65% · difficulty 4/5 · 3–6 h**

Normal protected release passed at 6971496. Isolated health gate run 37892036349 and controlled failed-smoke rollback run 37894951905 restored the exact prior image, with healthy-before-stop ordering and export smoke. Final October 9 bounded canary rolling run validated eight CSV/HTML/DOCX outputs, old SIGTERM/exit 0 and sole healthy replacement; 51 successful health probes per app, no guard rejection. All exercise gates passed; temporary resource/tool cleanup remains. One earlier runner warning remains unexplained; no zero-downtime claim.

#### Connect the service to central monitoring

**Delivery · In progress · 35% · difficulty 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Automate promotion of the CI-tested digest

**Delivery · In progress · 95% · difficulty 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 65% · difficulty 3/5 · 2–4 h**

Selected operator post-release inspect, recorded October 8, confirms 6971496, non-root, 1 CPU/512 MiB, no extra swap allowance, capability removal, init, isolated network, bounded local logging and exact trusted proxies. PID/security options remain absent and rootfs writable; parser exception remains. This sample does not refresh mounts/tmpfs or process flags.

#### Verify favicon, metadata and accessible preview

**Documentation · In progress · 70% · difficulty 2/5 · 1–2 h**

Combined browser CI covers PL/EN/ARIA recovery, mobile viewport, keyboard modal focus and exports; public frontend matches 6971496. Representative preview/licensing acceptance remains separate; no blanket WCAG claim.

### Architecture decisions

- Keep the local-first stateless architecture.
- Use per-format export limits plus body, row and concurrency caps.
- The project follows the v2 standard profile: vps-web.
- Use prebuilt GHCR digests with Coolify/Traefik/Tunnel. Manual production success does not establish automatic CD, trusted client IP or rollback.
- Temporarily omit no-new-privileges from Custom Docker Options due to the reproduced 4.3.14 parser issue; verify effective settings and revisit via reviewed Compose or upgrade.
- Keep process-local counters for one ordinary process and brief two-instance rolling overlap at the October 9 tested limits: three slots without waiting, 1 CPU/512 MiB per container. The bounded measurement condition passed; permanent replicas or larger budgets need a new assessment. No shared counter installed.

## Polski

### Cel i aktualny stan

Lokalny edytor inwentarza z serwerowym generowaniem DOCX, CSV i HTML.

Końcowa ograniczona próba rolling canary 9 października przeszła po dwóch zachowanych próbach niepełnych. Sprawdzono wszystkie osiem struktur CSV/HTML/DOCX, zdrową nową instancję i prawidłowe wyłączenie starej. Zdrowie publicznego Inventory i sąsiada: po 51 sukcesów, maksima 0,174565/0,183307 s. Łączna próbkowana pamięć canary 423,16 MiB; minimum dostępnego RAM hosta 4519,71 MiB; najwyższe load1 2,7041. CPU osiągnęło 93,79%, lecz nie przekroczyło warunku ponad 85% przez ponad 15 s. Zapisane liczniki OOM były zerowe. Odbiór dotyczy zmierzonego krótkiego rolling, nie dowolnego stałego obciążenia, stałych replik, dokańczania aktywnego żądania po SIGTERM ani gwarancji zerowego downtime. Nie wyjaśnia wstecz wcześniejszej niejednoznacznej próby i ostrzeżenia runnera rollbacku. Pozostają sprzątanie i końcowe wpisy; nie trzeba kolejnego testu obciążenia. Szacunki zachowują datę 7 października, szersze zadania platformy pozostają osobne.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Stan źródła:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 public client/retry/header checks and selected runtime inspect passed. October 9 isolated health-gate rejection, controlled failed-smoke rollback and final bounded rolling workload passed. Temporary resource/tool cleanup and final records remain. Earlier stopped attempts and one unexplained rollback-runner warning retain their scope. Progress and effort estimates retain October 7; this is not full platform completion.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Produkcja:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity. A separate final October 9 canary run accepts bounded rolling-load capacity with all eight structures, normal retirement and final public revisions verified. No new production promotion was part of that load run.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Scalenia przez PR z wymaganym Quality; bez obchodzenia ochrony. |
| Quality CI | Gotowe | Wspólne CI i ograniczone testy HTTP/cgroup końcowego obrazu przeszły; odbiór operacyjny jest osobny. |
| Niezmienne wydanie | Gotowe | Ten sam przetestowany i poświadczony digest wdrożony przez run 37574806859, rewizja 6971496. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | 8 października przeszły równoległe testy klientów i próby podrobienia nagłówków. Źródła trafiają do różnych lokalizacji edge; rozdzielenie IP w tej samej lokalizacji pozostaje niepotwierdzone. Starsze dowody sieci/TLS zachowują datę. |
| Ochrona przed nadużyciami | Częściowe | Lokalne HTTP pod limitami, publiczne testy klientów/retry/nagłówków i końcowy test rolling przeszły. Trzy sloty bez kolejki i krótki overlap niezależnych liczników przyjęte przy zmierzonych limitach. Izolacja edge w tej samej lokalizacji pozostaje otwarta; pomiary nie eliminują przyszłego ryzyka OOM. |
| Bezpieczeństwo runtime | Częściowe | Wybrany inspect nowego kontenera potwierdza rewizję, limity, użytkownika non-root, cap-drop, init i rotację logów. Brakujące zabezpieczenia PID/security/read-only pozostają wyjątkiem parsera; nieodczytane pola zachowują starszą datę. |
| Readiness i preflight | Gotowe | Końcowy obraz przeszedł ograniczone HTTP/readiness, preflight i publiczny smoke; bez gwarancji opóźnienia przy dowolnym obciążeniu. |
| Atomowa promocja i rollback | Gotowe | Zwykłe wdrożenie, odrzucenie niezdrowego kandydata, kontrolowany failed-smoke rollback do dokładnego obrazu i ograniczony test rolling przeszły. Jedno wcześniejsze ostrzeżenie runnera pozostaje niewyjaśnione; przyjęto przetestowane ścieżki dostawy i odzyskiwania, bez gwarancji zerowego downtime. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; ograniczony test starej i nowej instancji przeszedł. Pozostało usunięcie tymczasowych zasobów i narzędzi ćwiczeń oraz potwierdzenie ich braku. |
| Obserwowalność | Częściowe | Uznano ograniczone logi reason-code i regresje braku przesłanych nazw; integracja centralna, retencja i dostarczanie alertów pozostają otwarte. |
| Tożsamość webowa | Częściowe | CI PL/EN, mobile i klawiatury przechodzi na scalonym kodzie; publiczny app.js zgodny. Pozostają podgląd/licencje. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · Gotowe · 100% · trudność 3/5 · 0–0 h**

Accepted recovery/legacy migration/raw backup fixes merged and deployed. Real HTTP 50k-cell/near-2MiB CSV, HTML and DOCX correctness and invalid-payload bounds pass on the CI image. No unlimited-load or complete OOM-safety claim.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · Gotowe · 100% · trudność 3/5 · 0–0 h**

https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass. Accepted independent browser recovery/migration tests retained. Local CI-image HTTP qualification: 38 baseline + 59 repeat requests at 1 CPU/512 MiB, valid DOCX/CSV/HTML structures, expected 400/413/429, zero OOM. Worst cgroup peak 469.61 MiB, health up to 2.0571 s in a burst; bounded evidence only.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 90% · trudność 2/5 · 2–3 h**

Corrected runbooks and release implementation merged. Normal protected release, selected runtime, public clients/headers, isolated health gate, controlled rollback and final bounded rolling workload are accepted. All eight structures and normal baseline retirement passed in the final October 9 attempt; resource/tool cleanup and final record reconciliation remain. Earlier incomplete attempts and runner warning retain their original scope.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. October 9 final bounded rolling workload passed at three slots/no queue and intended per-instance limits; process-local overlap accepted for that scope. Same-colo edge isolation remains open.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 65% · trudność 4/5 · 3–6 h**

Normal protected release passed at 6971496. Isolated health gate run 37892036349 and controlled failed-smoke rollback run 37894951905 restored the exact prior image, with healthy-before-stop ordering and export smoke. Final October 9 bounded canary rolling run validated eight CSV/HTML/DOCX outputs, old SIGTERM/exit 0 and sole healthy replacement; 51 successful health probes per app, no guard rejection. All exercise gates passed; temporary resource/tool cleanup remains. One earlier runner warning remains unexplained; no zero-downtime claim.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · W toku · 35% · trudność 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · W toku · 95% · trudność 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 65% · trudność 3/5 · 2–4 h**

Selected operator post-release inspect, recorded October 8, confirms 6971496, non-root, 1 CPU/512 MiB, no extra swap allowance, capability removal, init, isolated network, bounded local logging and exact trusted proxies. PID/security options remain absent and rootfs writable; parser exception remains. This sample does not refresh mounts/tmpfs or process flags.

#### Zweryfikować favicon, metadane i dostępny podgląd

**Dokumentacja · W toku · 70% · trudność 2/5 · 1–2 h**

Combined browser CI covers PL/EN/ARIA recovery, mobile viewport, keyboard modal focus and exports; public frontend matches 6971496. Representative preview/licensing acceptance remains separate; no blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu dla jednej zwykłej instancji i krótkiego rolling dwóch instancji przy limitach przetestowanych 9 października: trzy sloty bez czekania, 1 CPU/512 MiB na kontener. Warunek pomiarów spełniony; stałe repliki lub większe limity wymagają nowej oceny. Brak wspólnego licznika.
