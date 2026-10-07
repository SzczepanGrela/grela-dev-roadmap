# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-07**<br>
Estimated completion / szacowane ukończenie: **84%**<br>
Forecast / prognoza: **2026-10-07–2026-10-20**, 20–38 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

IC07-1 and IC07-2 accepted in reviewed open #26 fdeadde3 and #27 ca22156. Raw recovery preserves malformed/empty source, and the remaining exception-order test now checks the actual runbook. Gemini may start portfolio; coordinator owns integration and remaining capacity/runtime/live acceptance. Progress stays 84%, separate from production status.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Source state:** Reviewed open #26 fdeadde3b3ecbe5aafb3397a611e0e3e90b13c5e and #27 ca22156981d5467100f4f151201fcff6b8c9139d, independent branches from main 16ed383d. IC07-1/IC07-2 accepted: exact raw recovery export and actual-runbook regression pass. Separate green CI; public health 9a2dee6 on October 7. Progress remains 84% pending integration and remaining acceptance.
- **Tests and CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37561455949: 84 .NET / 17 Python / browser suite incl. 7J; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37561775782: 84 .NET / 34 Python / baseline browser suite. Exact heads/statuses/logs checked; zero .NET skips, Container/Quality pass, deploy skipped. Separate branches, not combined qualification.
- **Production:** October 7 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. No coordinator app merge, deployment approval, cancellation, live load/failure exercise, new Docker inspect or header audit. Older host facts retain their dates.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main protection retained; both candidates remain open and source/CI/live/task attribution is corrected. No app merge or deployment approval. |
| Quality CI | Partial | Separate CI passes with 17/34 Python tests. All 12 independent recovery/migration cases and actual-runbook mutation check pass; IC07-1/IC07-2 accepted. Combined/capped HTTP qualification pending. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Three-slot/no-wait admission restored, body/null/text protections retained. Actual peak/capped HTTP and rolling capacity remain unqualified. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Exact-image smoke and real-Kestrel streamed-body 413 pass in PR CI. Boundary workload under production caps remains unqualified. |
| Atomic promotion and rollback | Partial | Actual-source #27 manual-old/stale-push/image-label checks pass. Emergency route requires coordinated promotion freeze. Live recovery/capacity acceptance remains separate. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Partial | Bounded validation reason-code logs and no-submitted-name regressions accepted; central integration, retention and alert delivery still open. |
| Web identity | Partial | PL/EN recovery and write-failure feedback retained. Exact raw malformed/empty recovery export accepted; representative preview/licensing acceptance remains. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 90% · difficulty 3/5 · 4–7 h**

#26 fdeadde3 preserves exact authoritative raw strings in recovery downloads, including empty, malformed and structurally invalid JSON. Independent full-storage equality and complete 5001-row envelope checks pass, with no stale legacy fallback. Earlier failed-write/reset/import/migration/retry behavior remains accepted. IC07-1 closed in candidate; integration/capped acceptance remains.

#### Expand export and browser coverage

**Quality · In progress · 90% · difficulty 3/5 · 3–6 h**

#26 Quality 37561455949: 84 .NET / 17 Python / browser suite incl. 7J; #27 Quality 37561775782: 84 .NET / 34 Python / baseline browser suite. Independent 34 Python and 12 intercepted browser scenarios pass. Reversing handlers in the actual runbook makes the intended regression fail. Combined/capped HTTP acceptance remains.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 2–3 h**

#27 ca22156 binds the final exception-order regression to actual runbook AST; independent mutation of the real example is detected. Timing, D02.3a scope, buffered DOCX, serialized manual rollback/freeze and selector/status corrections retained. IC07-2 closed in candidate; integration and live acceptance remain.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate #26 fdeadde3 / #27 ca22156 Container and Quality gates pass; deploy skipped. Both remain open from main 16ed383d. Public health 9a2dee6 on October 7. Local merge-tree is conflict-free, but no combined qualified image or deployment is claimed.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation retained. Actual-source freshness/image-label/selector/exception-order regressions pass in #27, including a runbook mutation check. Emergency direct route requires coordinated promotion freeze. Combined candidate, live recovery/overlap and capped capacity remain separate.

#### Connect the service to central monitoring

**Delivery · In progress · 35% · difficulty 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Automate promotion of the CI-tested digest

**Delivery · In progress · 90% · difficulty 3/5 · 1–2 h**

Exact-digest attestation/revision verification, private API, protected production, app contract, bounded polling, serialization and scoped retention implemented. Production job in 37091518872 succeeded. Remaining failure/capacity acceptance and credential scope review are tracked separately.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 50% · difficulty 3/5 · 2–4 h**

Keep dated September 29 runtime evidence and parser exceptions. October 3 source contract/image smoke use non-root, 1 CPU/512 MiB, cap-drop ALL/init; no fresh effective host inspect establishes PID/security/read-only/tmpfs settings.

#### Verify favicon, metadata and accessible preview

**Documentation · In progress · 70% · difficulty 2/5 · 1–2 h**

Recovery PL/EN dialog/buttons/ARIA and no-false-success behavior retained. Raw malformed/empty authoritative recovery downloads now preserve exact source without storage mutation. Representative preview/licensing acceptance remains; no blanket WCAG claim.

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

IC07-1 i IC07-2 przyjęte w otwartych #26 fdeadde3 i #27 ca22156. Recovery zachowuje uszkodzone/puste źródło, a test wyjątków sprawdza rzeczywisty runbook. Gemini może zacząć portfolio; koordynator prowadzi integrację i pozostały odbiór capacity/runtime/produkcji. 84% pozostaje oddzielone od stanu wdrożenia.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Stan źródła:** Reviewed open #26 fdeadde3b3ecbe5aafb3397a611e0e3e90b13c5e and #27 ca22156981d5467100f4f151201fcff6b8c9139d, independent branches from main 16ed383d. IC07-1/IC07-2 accepted: exact raw recovery export and actual-runbook regression pass. Separate green CI; public health 9a2dee6 on October 7. Progress remains 84% pending integration and remaining acceptance.
- **Testy i CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37561455949: 84 .NET / 17 Python / browser suite incl. 7J; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37561775782: 84 .NET / 34 Python / baseline browser suite. Exact heads/statuses/logs checked; zero .NET skips, Container/Quality pass, deploy skipped. Separate branches, not combined qualification.
- **Produkcja:** October 7 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. No coordinator app merge, deployment approval, cancellation, live load/failure exercise, new Docker inspect or header audit. Older host facts retain their dates.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main zachowana; oba PR-y otwarte, poprawiono przypisanie kodu/CI/produkcji/zadań. Bez scalenia aplikacji i zatwierdzenia wdrożenia. |
| Quality CI | Częściowe | Osobne CI przechodzą z 17/34 testami Python. Wszystkie 12 niezależnych przypadków recovery/migracji i mutacja runbooka przechodzą; IC07-1/IC07-2 przyjęte. Odbiór integracji/HTTP pod limitami pozostaje. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Przywrócono 3 sloty bez oczekiwania, zachowano ochronę body/null/tekstu. Rzeczywisty szczyt pamięci, HTTP pod limitami i capacity rolling pozostają nieodebrane. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Smoke obrazu i real-Kestrel ze strumieniowym body 413 przechodzą w CI PR. Graniczne obciążenie pod limitami produkcji pozostaje nieodebrane. |
| Atomowa promocja i rollback | Częściowe | Sprawdzenia rzeczywistego kodu #27 dla manual-old/stale-push/etykiety przechodzą. Ścieżka awaryjna wymaga uzgodnionego zamrożenia promocji. Odbiór recovery/capacity produkcji pozostaje osobny. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Częściowe | Uznano ograniczone logi reason-code i regresje braku przesłanych nazw; integracja centralna, retencja i dostarczanie alertów pozostają otwarte. |
| Tożsamość webowa | Częściowe | Zachowano PL/EN recovery i komunikaty błędów zapisu. Przyjęto eksport dokładnego uszkodzonego/pustego źródła; odbiór podglądu/licencji pozostaje. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 90% · trudność 3/5 · 4–7 h**

#26 fdeadde3 preserves exact authoritative raw strings in recovery downloads, including empty, malformed and structurally invalid JSON. Independent full-storage equality and complete 5001-row envelope checks pass, with no stale legacy fallback. Earlier failed-write/reset/import/migration/retry behavior remains accepted. IC07-1 closed in candidate; integration/capped acceptance remains.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 90% · trudność 3/5 · 3–6 h**

#26 Quality 37561455949: 84 .NET / 17 Python / browser suite incl. 7J; #27 Quality 37561775782: 84 .NET / 34 Python / baseline browser suite. Independent 34 Python and 12 intercepted browser scenarios pass. Reversing handlers in the actual runbook makes the intended regression fail. Combined/capped HTTP acceptance remains.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 2–3 h**

#27 ca22156 binds the final exception-order regression to actual runbook AST; independent mutation of the real example is detected. Timing, D02.3a scope, buffered DOCX, serialized manual rollback/freeze and selector/status corrections retained. IC07-2 closed in candidate; integration and live acceptance remain.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate #26 fdeadde3 / #27 ca22156 Container and Quality gates pass; deploy skipped. Both remain open from main 16ed383d. Public health 9a2dee6 on October 7. Local merge-tree is conflict-free, but no combined qualified image or deployment is claimed.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation retained. Actual-source freshness/image-label/selector/exception-order regressions pass in #27, including a runbook mutation check. Emergency direct route requires coordinated promotion freeze. Combined candidate, live recovery/overlap and capped capacity remain separate.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · W toku · 35% · trudność 3/5 · 2–4 h**

Validation logs now use bounded reason codes/counts, with three integration regressions checking submitted names do not appear. Duration/outcome hooks retained. Central integration, delivered alerts and client-IP retention review remain separate acceptance work.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · W toku · 90% · trudność 3/5 · 1–2 h**

Exact-digest attestation/revision verification, private API, protected production, app contract, bounded polling, serialization and scoped retention implemented. Production job in 37091518872 succeeded. Remaining failure/capacity acceptance and credential scope review are tracked separately.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 50% · trudność 3/5 · 2–4 h**

Keep dated September 29 runtime evidence and parser exceptions. October 3 source contract/image smoke use non-root, 1 CPU/512 MiB, cap-drop ALL/init; no fresh effective host inspect establishes PID/security/read-only/tmpfs settings.

#### Zweryfikować favicon, metadane i dostępny podgląd

**Dokumentacja · W toku · 70% · trudność 2/5 · 1–2 h**

Recovery PL/EN dialog/buttons/ARIA and no-false-success behavior retained. Raw malformed/empty authoritative recovery downloads now preserve exact source without storage mutation. Representative preview/licensing acceptance remains; no blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
