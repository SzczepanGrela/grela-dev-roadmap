# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-07**<br>
Estimated completion / szacowane ukończenie: **92%**<br>
Forecast / prognoza: **2026-10-07–2026-10-20**, 13–25 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Accepted corrections are merged and deployed at 6971496. Combined CI, bounded local capacity and public smoke pass. Remaining work is scoped live recovery/rolling/client acceptance, post-release inspect and separately tracked platform/metadata tasks; no 100% claim.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Source state:** PRs #26/#27/#28 merged into 6971496. Combined final CI and protected normal release passed. Public revision and exact frontend match verified October 7. Remaining live recovery/rolling/client acceptance is separate from functional completion.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Production:** October 7 public health reports 697149654f7f84dfe8aabe3565838348ef3a8220. Independent full smoke and byte-identical app.js pass. Operator pre-release inspect confirms expected CPU/RAM/UID/cap-drop/init and no mounts on old baseline. New-container inspect and live fault/load tests remain pending.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | PR-only integration with strict required Quality; all three accepted PRs merged without bypass. |
| Quality CI | Complete | Combined CI plus bounded real HTTP/cgroup qualification pass on the final image; live operational acceptance is separate. |
| Immutable release | Complete | Same tested/attested digest deployed by run 37574806859 at 6971496. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Local capped HTTP overload/recovery passes; worst memory peak 469.61 MiB, not eliminated OOM risk. Live identity/rolling remains. |
| Runtime safety | Partial | Pre-release baseline inspect confirms selected caps/user/network; final-image local tests pass. New-container inspect/parser exceptions remain. |
| Readiness and preflight | Complete | Final image capped HTTP/readiness and protected release preflight/public smoke pass; health latency is not guaranteed under arbitrary load. |
| Atomic promotion and rollback | Partial | Normal production release passed; actual-source rollback tests retained. Live rejected candidate/failed-smoke rollback pending agreed window. |
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

Corrected actual-runbook tests merged; coordinator integration/local-capacity/normal-release record updated. Final live fault/rolling/client evidence remains to be added.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Bounded local HTTP overload returns 429 Retry-After and recovers; no OOM, worst peak 469.61/512 MiB. Independent public client/spoof/rolling acceptance remains separate.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 65% · difficulty 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. Actual-source rollback/freshness regressions retained. Rejected unhealthy candidate, failed-smoke rollback and measured live overlap still require an agreed window.

#### Connect the service to central monitoring

**Delivery · In progress · 35% · difficulty 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Automate promotion of the CI-tested digest

**Delivery · In progress · 95% · difficulty 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 65% · difficulty 3/5 · 2–4 h**

Operator October 7 pre-release inspect confirms baseline non-root, 1 CPU/512 MiB, no extra swap, cap-drop ALL, init, isolated network and no mounts. New-container inspect pending. PID/security/read-only/tmpfs/logging were not reread; accepted parser exceptions stay open.

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

Przyjęte poprawki scalono i wdrożono jako 6971496. Wspólne CI, ograniczone testy lokalne i publiczny smoke przeszły. Pozostały odbiór recovery/rolling/klientów, inspect po wdrożeniu i osobne zadania platformy/metadanych; bez deklaracji 100%.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Stan źródła:** PRs #26/#27/#28 merged into 6971496. Combined final CI and protected normal release passed. Public revision and exact frontend match verified October 7. Remaining live recovery/rolling/client acceptance is separate from functional completion.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Produkcja:** October 7 public health reports 697149654f7f84dfe8aabe3565838348ef3a8220. Independent full smoke and byte-identical app.js pass. Operator pre-release inspect confirms expected CPU/RAM/UID/cap-drop/init and no mounts on old baseline. New-container inspect and live fault/load tests remain pending.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Scalenia przez PR z wymaganym Quality; bez obchodzenia ochrony. |
| Quality CI | Gotowe | Wspólne CI i ograniczone testy HTTP/cgroup końcowego obrazu przeszły; odbiór operacyjny jest osobny. |
| Niezmienne wydanie | Gotowe | Ten sam przetestowany i poświadczony digest wdrożony przez run 37574806859, rewizja 6971496. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Lokalne HTTP pod limitami i recovery przeszły; szczyt 469,61 MiB nie eliminuje ryzyka OOM. Pozostają testy tożsamości/rolling. |
| Bezpieczeństwo runtime | Częściowe | Odczyt bazowy potwierdza wybrane limity/użytkownika/sieć; lokalne testy obrazu przeszły. Pozostają nowy inspect i wyjątki parsera. |
| Readiness i preflight | Gotowe | Końcowy obraz przeszedł ograniczone HTTP/readiness, preflight i publiczny smoke; bez gwarancji opóźnienia przy dowolnym obciążeniu. |
| Atomowa promocja i rollback | Częściowe | Zwykłe wdrożenie przeszło; testy kodu rollbacku zachowane. Próby odrzucenia kandydata i failed-smoke czekają na okno. |
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

Corrected actual-runbook tests merged; coordinator integration/local-capacity/normal-release record updated. Final live fault/rolling/client evidence remains to be added.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Bounded local HTTP overload returns 429 Retry-After and recovers; no OOM, worst peak 469.61/512 MiB. Independent public client/spoof/rolling acceptance remains separate.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 65% · trudność 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. Actual-source rollback/freshness regressions retained. Rejected unhealthy candidate, failed-smoke rollback and measured live overlap still require an agreed window.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · W toku · 35% · trudność 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · W toku · 95% · trudność 3/5 · 1–2 h**

Final integrated main Quality -> attested digest -> protected Coolify production succeeded in run 37574806859. Private access/contract/serialization retained; live recovery tests and credential scope review are separate.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 65% · trudność 3/5 · 2–4 h**

Operator October 7 pre-release inspect confirms baseline non-root, 1 CPU/512 MiB, no extra swap, cap-drop ALL, init, isolated network and no mounts. New-container inspect pending. PID/security/read-only/tmpfs/logging were not reread; accepted parser exceptions stay open.

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
