# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-03**<br>
Estimated completion / szacowane ukończenie: **80%**<br>
Forecast / prognoza: **2026-10-05–2026-10-20**, 21–40 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

HTML/null fixes and dependency updates accepted; full closeout declined. Cache recovery overwrites rejected projects; eight-slot waiting is not bounded or qualified by a post-run working-set measurement. Payload-bearing logs, runbook errors and missing browser scenarios remain. Main and production are distinct; Gemini prepares three corrective PRs before portfolio. Percentages are task bookkeeping, not security certification.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `1410c48fd7a6184da990e50361da6725962007eb`
- **Source state:** October 3 follow-up: clean main 1410c48 after #20/#17/#18/#21/#22; independent local rebuild/tests. Public health remains 9a2dee6. Main and deployment differ; closeout not accepted.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37144043491 passes: 58 unit + 22 integration, 17 Python, six browser scenarios, exact-image smoke and fixable HIGH/CRITICAL Trivy. Deploy skipped for PR. Coverage is narrower than worker report; scan does not establish absence of all vulnerabilities.
- **Production:** October 3 public health 200 / 9a2dee631f4aff76dc2024d3036287ad93216452 with security headers. Main 1410c48 is ahead; #21 waiting and #22 pending at readback. No new production approval, failure/load exercise or Docker inspect by coordinator.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main protection remains active; runbook commands and production/completion claims require correction. |
| Quality CI | Partial | 80 .NET / 17 Python / six CI browser scenarios pass. Actual import/download, mobile, focus/HTTP429 coverage and capped HTTP workload remain. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Null/text fixes accepted; eight-slot main candidate has unbounded waiter count. Post-run process memory cannot qualify container peak or rolling capacity. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Tiny exact-image smoke and independent local real-Kestrel null/body checks pass. Boundary workload under production caps remains unqualified. |
| Atomic promotion and rollback | Partial | Managed promotion and rollback implementation tested with fake clients; production rejection/failure recovery not demonstrated. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Partial | Duration/outcome hooks exist, but raw validation strings log submitted names. No accepted central integration or alert delivery. |
| Web identity | Partial | Metadata/favicon/header changes implemented; browser/licensing/accessibility acceptance remains. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 85% · difficulty 3/5 · 4–7 h**

PR #20 fixes HTML message sinks and null entries; independent local Kestrel returns 400 for all three null-attribute exports and 413 for real chunked oversized input. Rejected cached projects can still be overwritten, schema coerces invalid types and validation logs contain column names. PR #22 adds unqualified eight-slot waiting; preserve conservative admission until reviewed.

#### Expand export and browser coverage

**Quality · In progress · 85% · difficulty 3/5 · 4–8 h**

PR #22 Quality 37144043491: 58 unit + 22 integration, 17 Python and six browser scenarios pass. Independent source rebuild and all .NET/Python tests pass. Browser scenarios do not cover actual import/export, mobile, focus trap, network/HTTP429 button behavior. Add Kestrel regression to CI and capped HTTP workload evidence; direct generator benchmark is insufficient.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 2–3 h**

README updated to .NET 10/cost units and operator runbook added. Correct nonexistent workflow input target_digest, positional smoke arguments, container/neighbor resolution and stale slot/scan claims; validate examples offline. Work-status overstates deployed/accepted coverage and absence of vulnerabilities/OOM.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 80% · difficulty 3/5 · 2–4 h**

Public 9a2dee6 retains three export slots without waiting. Main 1410c48 raises to eight plus a five-second wait with no queue-count bound, after binding/validation. Shared weighted per-client buckets retained. Restore conservative admission or qualify bounded queue and capped HTTP behavior before promotion. Process-local overlap remains conditional.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Existing protected exact-digest pipeline retained. PR #22 image smoke/scan passed but deployment skipped; main #21 run 37136097843 waiting and #22 run 37144206035 pending at October 3 readback. Public revision 9a2dee6. A merged PR does not prove its production deployment.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

#### Connect the service to central monitoring

**Delivery · In progress · 20% · difficulty 3/5 · 2–4 h**

Export duration/dimensions/output-size and rejection logs added. Validation log strings embed submitted column names, reproduced locally with synthetic data. Replace with bounded reason codes; central integration and delivered alerts remain unaccepted.

#### Automate promotion of the CI-tested digest

**Delivery · In progress · 90% · difficulty 3/5 · 1–2 h**

Exact-digest attestation/revision verification, private API, protected production, app contract, bounded polling, serialization and scoped retention implemented. Production job in 37091518872 succeeded. Remaining failure/capacity acceptance and credential scope review are tracked separately.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 50% · difficulty 3/5 · 2–4 h**

Keep dated September 29 runtime evidence and parser exceptions. October 3 source contract/image smoke use non-root, 1 CPU/512 MiB, cap-drop ALL/init; no fresh effective host inspect establishes PID/security/read-only/tmpfs settings.

#### Verify favicon, metadata and accessible preview

**Documentation · In progress · 60% · difficulty 2/5 · 1–2 h**

Metadata/favicon/ARIA/browser-header changes exist and public root headers pass. Responsive PL/EN, keyboard/focus, licensing and representative browser preview still need evidence; no blanket WCAG claim.

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

Poprawki HTML/null i zależności uznane; pełny odbiór odrzucony. Recovery cache nadpisuje odrzucony projekt; ośmiu slotów i oczekiwania nie kwalifikuje odczyt pamięci po pracy. Pozostają dane wejściowe w logach, błędy runbooka i brakujące scenariusze przeglądarki. Main różni się od produkcji; Gemini przygotuje trzy korekty przed portfolio. Procenty są ewidencją zadań, nie certyfikatem bezpieczeństwa.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `1410c48fd7a6184da990e50361da6725962007eb`
- **Stan źródła:** October 3 follow-up: clean main 1410c48 after #20/#17/#18/#21/#22; independent local rebuild/tests. Public health remains 9a2dee6. Main and deployment differ; closeout not accepted.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37144043491 passes: 58 unit + 22 integration, 17 Python, six browser scenarios, exact-image smoke and fixable HIGH/CRITICAL Trivy. Deploy skipped for PR. Coverage is narrower than worker report; scan does not establish absence of all vulnerabilities.
- **Produkcja:** October 3 public health 200 / 9a2dee631f4aff76dc2024d3036287ad93216452 with security headers. Main 1410c48 is ahead; #21 waiting and #22 pending at readback. No new production approval, failure/load exercise or Docker inspect by coordinator.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main działa; polecenia runbooka i deklaracje produkcji/ukończenia wymagają korekty. |
| Quality CI | Częściowe | 80 .NET / 17 Python / sześć scenariuszy CI przechodzi. Pozostają import/download, mobile, focus/HTTP429 i pomiar HTTP pod limitami. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Poprawki null/tekstu uznane; kandydat z ośmioma slotami nie ogranicza liczby oczekujących. Odczyt po pracy nie kwalifikuje szczytu kontenera ani rolling. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Mały smoke obrazu i lokalny real-Kestrel null/body przechodzą. Graniczne obciążenie pod limitami produkcji pozostaje nieodebrane. |
| Atomowa promocja i rollback | Częściowe | Promocję i rollback przetestowano na fake clients; produkcyjna odmowa i recovery awarii nie zostały dowiedzione. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Częściowe | Hooki czasu/wyniku istnieją, ale walidacja loguje przesłane nazwy. Brak odebranej integracji centralnej i dostarczania alertów. |
| Tożsamość webowa | Częściowe | Metadane/favicon/nagłówki wdrożone w kodzie; pozostaje odbiór przeglądarki/licencji/dostępności. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 85% · trudność 3/5 · 4–7 h**

PR #20 fixes HTML message sinks and null entries; independent local Kestrel returns 400 for all three null-attribute exports and 413 for real chunked oversized input. Rejected cached projects can still be overwritten, schema coerces invalid types and validation logs contain column names. PR #22 adds unqualified eight-slot waiting; preserve conservative admission until reviewed.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 85% · trudność 3/5 · 4–8 h**

PR #22 Quality 37144043491: 58 unit + 22 integration, 17 Python and six browser scenarios pass. Independent source rebuild and all .NET/Python tests pass. Browser scenarios do not cover actual import/export, mobile, focus trap, network/HTTP429 button behavior. Add Kestrel regression to CI and capped HTTP workload evidence; direct generator benchmark is insufficient.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 2–3 h**

README updated to .NET 10/cost units and operator runbook added. Correct nonexistent workflow input target_digest, positional smoke arguments, container/neighbor resolution and stale slot/scan claims; validate examples offline. Work-status overstates deployed/accepted coverage and absence of vulnerabilities/OOM.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 80% · trudność 3/5 · 2–4 h**

Public 9a2dee6 retains three export slots without waiting. Main 1410c48 raises to eight plus a five-second wait with no queue-count bound, after binding/validation. Shared weighted per-client buckets retained. Restore conservative admission or qualify bounded queue and capped HTTP behavior before promotion. Process-local overlap remains conditional.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Existing protected exact-digest pipeline retained. PR #22 image smoke/scan passed but deployment skipped; main #21 run 37136097843 waiting and #22 run 37144206035 pending at October 3 readback. Public revision 9a2dee6. A merged PR does not prove its production deployment.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · W toku · 20% · trudność 3/5 · 2–4 h**

Export duration/dimensions/output-size and rejection logs added. Validation log strings embed submitted column names, reproduced locally with synthetic data. Replace with bounded reason codes; central integration and delivered alerts remain unaccepted.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · W toku · 90% · trudność 3/5 · 1–2 h**

Exact-digest attestation/revision verification, private API, protected production, app contract, bounded polling, serialization and scoped retention implemented. Production job in 37091518872 succeeded. Remaining failure/capacity acceptance and credential scope review are tracked separately.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 50% · trudność 3/5 · 2–4 h**

Keep dated September 29 runtime evidence and parser exceptions. October 3 source contract/image smoke use non-root, 1 CPU/512 MiB, cap-drop ALL/init; no fresh effective host inspect establishes PID/security/read-only/tmpfs settings.

#### Zweryfikować favicon, metadane i dostępny podgląd

**Dokumentacja · W toku · 60% · trudność 2/5 · 1–2 h**

Metadata/favicon/ARIA/browser-header changes exist and public root headers pass. Responsive PL/EN, keyboard/focus, licensing and representative browser preview still need evidence; no blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
