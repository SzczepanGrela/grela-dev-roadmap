# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-09**<br>
Estimated completion / szacowane ukończenie: **92%**<br>
Forecast / prognoza: **2026-10-07–2026-10-20**, 13–25 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

October 9 accepts isolated unhealthy-candidate rejection, healthy baseline retention and restoration. The canary had no public route or generated export load. All 157 sampled neighbouring health probes returned 200; CPU peak 88% still needs duration/load review before another exercise. Production failed-smoke rollback, rolling-load capacity and temporary cleanup remain. Earlier client/runtime/CI evidence retains its dates; progress/effort estimates are unchanged and platform gaps stay separate.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Source state:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 accepts app-client isolation, retry/recovery, sampled header-bypass rejection and selected runtime inspect. Tooling-only #29 is merged at d62e2dc; its ordinary promotion was cancelled before production steps. October 9 isolated canary rejection, healthy baseline retention and restoration passed. Production failed-smoke rollback and rolling-load capacity remain separate. Progress and effort estimates retain October 7.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Production:** October 9 public health before/after the canary exercise remains at 697149654f7f84dfe8aabe3565838348ef3a8220. October 8 client/runtime evidence retains its date. On an isolated domainless canary, Docker evidence corroborates rejection of a deliberately unhealthy candidate, survival of the healthy baseline and healthy restoration. Production failed-smoke rollback and measured rolling-load capacity remain pending.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | PR-only integration with strict required Quality; all three accepted PRs merged without bypass. |
| Quality CI | Complete | Combined CI plus bounded real HTTP/cgroup qualification pass on the final image; live operational acceptance is separate. |
| Immutable release | Complete | Same tested/attested digest deployed by run 37574806859 at 6971496. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | October 8 paired public clients and sampled forwarded-header checks pass at the app/public-path level. Observer and VPS use different edge locations; same-colo edge isolation remains unproven. Earlier network/TLS evidence retains its date. |
| Abuse protection | Partial | Local capped HTTP overload/recovery and public app-client/retry/header checks pass. Worst local peak 469.61 MiB does not eliminate OOM risk. Rolling capacity remains unqualified. |
| Runtime safety | Partial | Selected new-container inspect confirms the deployed revision, caps, non-root user, capability removal, init and log rotation. Missing PID/security/read-only protections retain the parser exception; unqueried fields are not refreshed. |
| Readiness and preflight | Complete | Final image capped HTTP/readiness and protected release preflight/public smoke pass; health latency is not guaranteed under arbitrary load. |
| Atomic promotion and rollback | Partial | Normal production release and isolated canary health-gate rejection/retention/restoration passed. Live production failed-smoke rollback remains pending. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
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

Corrected runbook tests merged; integration, local-capacity and normal-release evidence recorded. October 8 adds selected new-container inspect, paired public clients, retry/recovery and sampled header-bypass results. Final live fault/rolling evidence remains. October 9 adds accepted isolated health-gate rejection/retention/restoration; production failed-smoke, rolling-load and cleanup evidence remain.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. Same-colo edge isolation and rolling capacity remain open.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 65% · difficulty 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. October 9 run https://github.com/SzczepanGrela/inventory-generator/actions/runs/37892036349 and selected Docker events prove an unhealthy candidate was removed while the old container stayed healthy. The old container received SIGTERM 5.513 seconds after a healthy replacement qualified. Production failed-smoke rollback, measured rolling load and scoped cleanup remain.

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
- Keep process-local counters for normal single-process operation only if measured brief rolling overlap is safe; no shared counter is installed or planned for that conditional scope.

## Polski

### Cel i aktualny stan

Lokalny edytor inwentarza z serwerowym generowaniem DOCX, CSV i HTML.

9 października przyjęto odrzucenie niezdrowego kandydata w izolowanym canary, zachowanie zdrowej starej instancji i przywrócenie zdrowej konfiguracji. Canary nie miał publicznej trasy ani obciążenia eksportami. Wszystkie 157 prób zdrowia sąsiedniej aplikacji zwróciło 200; szczyt CPU 88% wymaga sprawdzenia czasu trwania i load przed kolejną próbą. Pozostają failed-smoke rollback produkcji, pomiar pod obciążeniem i sprzątanie zasobów tymczasowych. Starsze dowody zachowują daty, procenty i szacunki bez zmian, a zadania platformy pozostają osobne.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Stan źródła:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 accepts app-client isolation, retry/recovery, sampled header-bypass rejection and selected runtime inspect. Tooling-only #29 is merged at d62e2dc; its ordinary promotion was cancelled before production steps. October 9 isolated canary rejection, healthy baseline retention and restoration passed. Production failed-smoke rollback and rolling-load capacity remain separate. Progress and effort estimates retain October 7.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Produkcja:** October 9 public health before/after the canary exercise remains at 697149654f7f84dfe8aabe3565838348ef3a8220. October 8 client/runtime evidence retains its date. On an isolated domainless canary, Docker evidence corroborates rejection of a deliberately unhealthy candidate, survival of the healthy baseline and healthy restoration. Production failed-smoke rollback and measured rolling-load capacity remain pending.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Scalenia przez PR z wymaganym Quality; bez obchodzenia ochrony. |
| Quality CI | Gotowe | Wspólne CI i ograniczone testy HTTP/cgroup końcowego obrazu przeszły; odbiór operacyjny jest osobny. |
| Niezmienne wydanie | Gotowe | Ten sam przetestowany i poświadczony digest wdrożony przez run 37574806859, rewizja 6971496. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | 8 października przeszły równoległe testy klientów i próby podrobienia nagłówków. Źródła trafiają do różnych lokalizacji edge; rozdzielenie IP w tej samej lokalizacji pozostaje niepotwierdzone. Starsze dowody sieci/TLS zachowują datę. |
| Ochrona przed nadużyciami | Częściowe | Lokalne HTTP pod limitami oraz publiczne testy klientów/retry/nagłówków przeszły. Lokalny szczyt 469,61 MiB nie eliminuje ryzyka OOM. Pomiar obciążenia podczas rolling pozostaje otwarty. |
| Bezpieczeństwo runtime | Częściowe | Wybrany inspect nowego kontenera potwierdza rewizję, limity, użytkownika non-root, cap-drop, init i rotację logów. Brakujące zabezpieczenia PID/security/read-only pozostają wyjątkiem parsera; nieodczytane pola zachowują starszą datę. |
| Readiness i preflight | Gotowe | Końcowy obraz przeszedł ograniczone HTTP/readiness, preflight i publiczny smoke; bez gwarancji opóźnienia przy dowolnym obciążeniu. |
| Atomowa promocja i rollback | Częściowe | Zwykłe wdrożenie oraz odrzucenie niezdrowego canary z zachowaniem starej instancji i przywróceniem zdrowej przeszły. Failed-smoke rollback produkcji pozostaje otwarty. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
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

Corrected runbook tests merged; integration, local-capacity and normal-release evidence recorded. October 8 adds selected new-container inspect, paired public clients, retry/recovery and sampled header-bypass results. Final live fault/rolling evidence remains. October 9 adds accepted isolated health-gate rejection/retention/restoration; production failed-smoke, rolling-load and cleanup evidence remain.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. Same-colo edge isolation and rolling capacity remain open.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 65% · trudność 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. October 9 run https://github.com/SzczepanGrela/inventory-generator/actions/runs/37892036349 and selected Docker events prove an unhealthy candidate was removed while the old container stayed healthy. The old container received SIGTERM 5.513 seconds after a healthy replacement qualified. Production failed-smoke rollback, measured rolling load and scoped cleanup remain.

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
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
