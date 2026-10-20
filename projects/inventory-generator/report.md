# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-11**<br>
Estimated completion / szacowane ukończenie: **89%**<br>
Forecast / prognoza: **2026-10-13–2026-10-20**, 10–20 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

The final October 9 bounded canary rolling run passed after two retained incomplete attempts. All eight CSV/HTML/DOCX structures, healthy replacement and normal baseline retirement were verified. Public Inventory and neighbour health: 51 successes each, maxima 0.174565/0.183307 s. Combined sampled canary memory 423.16 MiB; minimum available host RAM 4519.71 MiB; maximum load1 2.7041. CPU peaked at 93.79% but did not breach the sustained >85% for >15 s guard. Recorded cgroup OOM counters were zero. This accepts the measured brief rolling scope, not arbitrary sustained capacity, permanent replicas, active-request drain after SIGTERM or guaranteed zero downtime. The prior ambiguous attempt and rollback-runner warning are not retroactively explained. Scoped resources are retired, evidence archived and source cleanup merged in PR #30 on October 11. D02.3a-f are accepted; no further load test is required. Remaining shared platform tasks stay separate; their older effort estimates are retained while completed documentation/rolling tasks are removed from remaining totals. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `672d160a9f789a2b758a3bb3f7834986682256ff`
- **Source state:** PR #30 merged at 672d160 after full green Quality for reviewed a25abb1; temporary exercise workflow/modules/injection hooks retired, ordinary release/rollback tests retained. October 10 operator cleanup and public health confirm retained runtime 6971496. D02.3a-f accepted. Remaining platform and presentation estimates retain their earlier scope; task totals update only completed operations docs and rolling acceptance, not a new full application audit. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass. Cleanup PR Quality also passes: https://github.com/SzczepanGrela/inventory-generator/actions/runs/38096117190; production job skipped on PR. Post-merge run 38102609591 passed all Quality and release-verification jobs; Production was cancelled while waiting for environment approval, preserving the deployed runtime.
- **Production:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity. A separate final October 9 canary run accepts bounded rolling-load capacity with all eight structures, normal retirement and final public revisions verified. No new production promotion was part of that load run. October 10 post-cleanup selected operator checks confirm healthy Inventory 6971496 and the neighbouring app, absent test network and retained proxy production connections. Panel resource/destination/project deletion is operator-confirmed; no direct panel API readback is claimed.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | PR-only integration with strict required Quality; all three accepted PRs merged without bypass. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Complete | Combined CI plus bounded real HTTP/cgroup qualification pass on the final image; live operational acceptance is separate. |
| Immutable release | Complete | Same tested/attested digest deployed by run 37574806859 at 6971496. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | October 8 paired public clients and sampled forwarded-header checks pass at the app/public-path level. Observer and VPS use different edge locations; same-colo edge isolation remains unproven. Earlier network/TLS evidence retains its date. |
| Abuse protection | Partial | Local capped HTTP overload/recovery, public app-client/retry/header checks and final bounded rolling load passed. Three slots/no queue and brief independent-counter overlap accepted at tested limits. Same-colo edge isolation remains open; sampled peaks do not eliminate future OOM risk. |
| Runtime safety | Partial | Selected new-container inspect confirms the deployed revision, caps, non-root user, capability removal, init and log rotation. Missing PID/security/read-only protections retain the parser exception; unqueried fields are not refreshed. |
| Readiness and preflight | Complete | Final image capped HTTP/readiness and protected release preflight/public smoke pass; health latency is not guaranteed under arbitrary load. |
| Managed release and recovery | Complete | Normal release, isolated unhealthy-candidate rejection, controlled failed-smoke recovery to the exact prior image and bounded rolling workload passed. One earlier runner probe warning remains unexplained; this certifies the tested release/recovery paths, not zero downtime. October 20: downtime is allowed during migration/bootstrap; final managed release/recovery requirements remain. Existing status is not a new runtime acceptance. |
| Coordination and retention | Complete | Serialized release and scoped retention code retained; bounded overlap accepted. Operator-confirmed test resource deletion, selected container/network absence and post-cleanup health recorded. Full evidence archived; PR #30 retires exercise tooling. Production image retained. |
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

**Documentation · Done · 100% · difficulty 2/5 · 0–0 h**

Corrected runbooks and release implementation merged. Normal protected release, selected runtime, public clients/headers, isolated health gate, controlled rollback and final bounded rolling workload are accepted. All eight structures and normal baseline retirement passed in the final October 9 attempt; cleanup was pending at that checkpoint. Earlier incomplete attempts and runner warning retain their original scope. October 10 operator confirmation and selected Docker/public-health readbacks accept temporary app, dedicated network/destination and empty-project cleanup. Full passing JSONL archived and verified privately. PR #30 merged October 11 as 672d160 retires exercise tools and records acceptance; production remains 6971496. No repeat drill required.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. October 9 final bounded rolling workload passed at three slots/no queue and intended per-instance limits; process-local overlap accepted for that scope. Same-colo edge isolation remains open.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Accept health-gated rolling releases and scoped recovery

**Delivery · Done · 100% · difficulty 4/5 · 0–0 h**

Normal protected release passed at 6971496. Isolated health gate run 37892036349 and controlled failed-smoke rollback run 37894951905 restored the exact prior image, with healthy-before-stop ordering and export smoke. Final October 9 bounded canary rolling run validated eight CSV/HTML/DOCX outputs, old SIGTERM/exit 0 and sole healthy replacement; 51 successful health probes per app, no guard rejection. All exercise gates passed; cleanup was pending at that checkpoint. One earlier runner warning remains unexplained; no zero-downtime claim. October 10 operator confirmation and selected Docker/public-health readbacks accept temporary app, dedicated network/destination and empty-project cleanup. Full passing JSONL archived and verified privately. PR #30 merged October 11 as 672d160 retires exercise tools and records acceptance; production remains 6971496. No repeat drill required. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Connect the service to central monitoring

**Delivery · In progress · 35% · difficulty 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

#### Automate promotion of the CI-tested digest

**Delivery · In progress · 95% · difficulty 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 65% · difficulty 3/5 · 2–4 h**

Selected operator post-release inspect, recorded October 8, confirms 6971496, non-root, 1 CPU/512 MiB, no extra swap allowance, capability removal, init, isolated network, bounded local logging and exact trusted proxies. PID/security options remain absent and rootfs writable; parser exception remains. This sample does not refresh mounts/tmpfs or process flags.

#### Verify favicon, metadata and accessible preview

**Documentation · In progress · 70% · difficulty 2/5 · 1–2 h**

Combined browser CI covers PL/EN/ARIA recovery, mobile viewport, keyboard modal focus and exports; public frontend matches 6971496. Representative preview/licensing acceptance remains separate; no blanket WCAG claim.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Keep the local-first stateless architecture.
- Use per-format export limits plus body, row and concurrency caps.
- The project follows the v2 standard profile: vps-web.
- Use prebuilt GHCR digests with Coolify/Traefik/Tunnel. Manual production success does not establish automatic CD, trusted client IP or rollback.
- Temporarily omit no-new-privileges from Custom Docker Options due to the reproduced 4.3.14 parser issue; verify effective settings and revisit via reviewed Compose or upgrade.
- Keep process-local counters for one ordinary process and brief two-instance rolling overlap at the October 9 tested limits: three slots without waiting, 1 CPU/512 MiB per container. The bounded measurement condition passed; permanent replicas or larger budgets need a new assessment. No shared counter installed.
- October 20 clarification: downtime is accepted during preparation, initial deployment and migration. Final Coolify operation still requires health-gated rolling updates and backups of necessary durable data/configuration/keys with proportionate recovery verification. No numeric uptime SLA, permanent replicas or multi-host HA. Stateless/static/non-server projects use their applicable hosting and data scope. Existing data, backup schedules and release guards remain. This is planning, not new runtime acceptance or re-estimation; docs/operating-standard.md applies to future repositories too.

## Polski

### Cel i aktualny stan

Lokalny edytor inwentarza z serwerowym generowaniem DOCX, CSV i HTML.

Końcowa ograniczona próba rolling canary 9 października przeszła po dwóch zachowanych próbach niepełnych. Sprawdzono wszystkie osiem struktur CSV/HTML/DOCX, zdrową nową instancję i prawidłowe wyłączenie starej. Zdrowie publicznego Inventory i sąsiada: po 51 sukcesów, maksima 0,174565/0,183307 s. Łączna próbkowana pamięć canary 423,16 MiB; minimum dostępnego RAM hosta 4519,71 MiB; najwyższe load1 2,7041. CPU osiągnęło 93,79%, lecz nie przekroczyło warunku ponad 85% przez ponad 15 s. Zapisane liczniki OOM były zerowe. Odbiór dotyczy zmierzonego krótkiego rolling, nie dowolnego stałego obciążenia, stałych replik, dokańczania aktywnego żądania po SIGTERM ani gwarancji zerowego downtime. Nie wyjaśnia wstecz wcześniejszej niejednoznacznej próby i ostrzeżenia runnera rollbacku. Zasoby testowe usunięte, dowody zachowane, sprzątanie źródeł scalone w PR #30 11 października. D02.3a-f są przyjęte; nie potrzeba kolejnego testu obciążenia. Wspólne zadania platformy pozostają osobne, z wcześniejszymi estymacjami; z sum odjęto ukończone zadania dokumentacji i rolling. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `672d160a9f789a2b758a3bb3f7834986682256ff`
- **Stan źródła:** PR #30 merged at 672d160 after full green Quality for reviewed a25abb1; temporary exercise workflow/modules/injection hooks retired, ordinary release/rollback tests retained. October 10 operator cleanup and public health confirm retained runtime 6971496. D02.3a-f accepted. Remaining platform and presentation estimates retain their earlier scope; task totals update only completed operations docs and rolling acceptance, not a new full application audit. October 20 phase clarification only: bootstrap downtime accepted; final rolling and required-data backups retained. No new source audit, acceptance or effort/calendar estimate.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass. Cleanup PR Quality also passes: https://github.com/SzczepanGrela/inventory-generator/actions/runs/38096117190; production job skipped on PR. Post-merge run 38102609591 passed all Quality and release-verification jobs; Production was cancelled while waiting for environment approval, preserving the deployed runtime.
- **Produkcja:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity. A separate final October 9 canary run accepts bounded rolling-load capacity with all eight structures, normal retirement and final public revisions verified. No new production promotion was part of that load run. October 10 post-cleanup selected operator checks confirm healthy Inventory 6971496 and the neighbouring app, absent test network and retained proxy production connections. Panel resource/destination/project deletion is operator-confirmed; no direct panel API readback is claimed.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Scalenia przez PR z wymaganym Quality; bez obchodzenia ochrony. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Gotowe | Wspólne CI i ograniczone testy HTTP/cgroup końcowego obrazu przeszły; odbiór operacyjny jest osobny. |
| Niezmienne wydanie | Gotowe | Ten sam przetestowany i poświadczony digest wdrożony przez run 37574806859, rewizja 6971496. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | 8 października przeszły równoległe testy klientów i próby podrobienia nagłówków. Źródła trafiają do różnych lokalizacji edge; rozdzielenie IP w tej samej lokalizacji pozostaje niepotwierdzone. Starsze dowody sieci/TLS zachowują datę. |
| Ochrona przed nadużyciami | Częściowe | Lokalne HTTP pod limitami, publiczne testy klientów/retry/nagłówków i końcowy test rolling przeszły. Trzy sloty bez kolejki i krótki overlap niezależnych liczników przyjęte przy zmierzonych limitach. Izolacja edge w tej samej lokalizacji pozostaje otwarta; pomiary nie eliminują przyszłego ryzyka OOM. |
| Bezpieczeństwo runtime | Częściowe | Wybrany inspect nowego kontenera potwierdza rewizję, limity, użytkownika non-root, cap-drop, init i rotację logów. Brakujące zabezpieczenia PID/security/read-only pozostają wyjątkiem parsera; nieodczytane pola zachowują starszą datę. |
| Readiness i preflight | Gotowe | Końcowy obraz przeszedł ograniczone HTTP/readiness, preflight i publiczny smoke; bez gwarancji opóźnienia przy dowolnym obciążeniu. |
| Zarządzane wydanie i odzyskiwanie | Gotowe | Zwykłe wdrożenie, odrzucenie niezdrowego kandydata, kontrolowany failed-smoke rollback do dokładnego obrazu i ograniczony test rolling przeszły. Jedno wcześniejsze ostrzeżenie runnera pozostaje niewyjaśnione; przyjęto przetestowane ścieżki dostawy i odzyskiwania, bez gwarancji zerowego downtime. 20 października: przerwa dozwolona na migrację/bootstrap; docelowe wymagania wdrożeń/odzyskiwania pozostają. Status nie oznacza nowego odbioru runtime. |
| Koordynacja i retencja | Gotowe | Zachowano serializację wdrożeń i retencję; ograniczony overlap przyjęty. Operator potwierdził usunięcie zasobów testowych; zapisano brak kontenerów/sieci i zdrowie po sprzątaniu. Dowody zarchiwizowane, PR #30 usuwa narzędzia ćwiczeń. Obraz produkcyjny zachowany. |
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

**Dokumentacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

Corrected runbooks and release implementation merged. Normal protected release, selected runtime, public clients/headers, isolated health gate, controlled rollback and final bounded rolling workload are accepted. All eight structures and normal baseline retirement passed in the final October 9 attempt; cleanup was pending at that checkpoint. Earlier incomplete attempts and runner warning retain their original scope. October 10 operator confirmation and selected Docker/public-health readbacks accept temporary app, dedicated network/destination and empty-project cleanup. Full passing JSONL archived and verified privately. PR #30 merged October 11 as 672d160 retires exercise tools and records acceptance; production remains 6971496. No repeat drill required.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. October 9 final bounded rolling workload passed at three slots/no queue and intended per-instance limits; process-local overlap accepted for that scope. Same-colo edge isolation remains open.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Odebrać rolling update z bramką zdrowia i odzyskiwanie w ustalonym zakresie

**Wdrożenie · Gotowe · 100% · trudność 4/5 · 0–0 h**

Normal protected release passed at 6971496. Isolated health gate run 37892036349 and controlled failed-smoke rollback run 37894951905 restored the exact prior image, with healthy-before-stop ordering and export smoke. Final October 9 bounded canary rolling run validated eight CSV/HTML/DOCX outputs, old SIGTERM/exit 0 and sole healthy replacement; 51 successful health probes per app, no guard rejection. All exercise gates passed; cleanup was pending at that checkpoint. One earlier runner warning remains unexplained; no zero-downtime claim. October 10 operator confirmation and selected Docker/public-health readbacks accept temporary app, dedicated network/destination and empty-project cleanup. Full passing JSONL archived and verified privately. PR #30 merged October 11 as 672d160 retires exercise tools and records acceptance; production remains 6971496. No repeat drill required. October 20 clarification: migration/first routing may use downtime; final scope includes health-gated rolling, functional smoke, scoped rollback and necessary-data backups/recovery. Stable ID and historical progress/effort retained; no new live acceptance.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · W toku · 35% · trudność 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work. Final-operation backup-failure visibility remains applicable to protected datasets; no numeric uptime SLA.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · W toku · 95% · trudność 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 65% · trudność 3/5 · 2–4 h**

Selected operator post-release inspect, recorded October 8, confirms 6971496, non-root, 1 CPU/512 MiB, no extra swap allowance, capability removal, init, isolated network, bounded local logging and exact trusted proxies. PID/security options remain absent and rootfs writable; parser exception remains. This sample does not refresh mounts/tmpfs or process flags.

#### Zweryfikować favicon, metadane i dostępny podgląd

**Dokumentacja · W toku · 70% · trudność 2/5 · 1–2 h**

Combined browser CI covers PL/EN/ARIA recovery, mobile viewport, keyboard modal focus and exports; public frontend matches 6971496. Representative preview/licensing acceptance remains separate; no blanket WCAG claim.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu dla jednej zwykłej instancji i krótkiego rolling dwóch instancji przy limitach przetestowanych 9 października: trzy sloty bez czekania, 1 CPU/512 MiB na kontener. Warunek pomiarów spełniony; stałe repliki lub większe limity wymagają nowej oceny. Brak wspólnego licznika.
- Doprecyzowanie 20 października: przerwy są dozwolone podczas przygotowania, pierwszego wdrożenia i migracji. Docelowy Coolify nadal wymaga rolling update z bramką zdrowia i backupów potrzebnych danych/konfiguracji/kluczy z proporcjonalnym sprawdzeniem odtworzenia. Bez liczbowego SLA, stałych replik i HA wielu hostów. Dla projektów stateless/statycznych/bez serwera stosować właściwy zakres hostingu i danych. Zachować dane, harmonogramy kopii i zabezpieczenia wdrożeń. To plan, nie nowy odbiór ani estymacja; docs/operating-standard.md obejmuje też przyszłe repozytoria.
