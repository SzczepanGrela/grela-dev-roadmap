# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-05**<br>
Estimated completion / szacowane ukończenie: **84%**<br>
Forecast / prognoza: **2026-10-05–2026-10-20**, 20–38 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Previous cache startup/edit reproductions fixed in #26. Full acceptance still declined: failed storage replacement loses recovery and reports success; #27 manual rollback invocation is skipped by freshness, with additional exclusion/selector/status errors. Update existing PRs, leave them open for review; portfolio next after accepted app fixes. Progress remains 84%, a bookkeeping estimate rather than certification.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Source state:** Reviewed open PR #26 a5f6eba and #27 52967d8, both based on main 16ed383d; each has green CI and neither contains the other. Prior recovery startup/edit defects fixed in #26, but failed storage replacement and manual rollback/runbook remain blocked. Public health still 9a2dee6. Progress stays 84% pending acceptance.
- **Tests and CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37259777133: 84 .NET / 17 Python / 12 browser; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37260202674: 84 .NET / 20 Python / 12 browser. Container/Quality green and deploy skipped in both. Separate heads, no combined candidate acceptance; scan scope remains limited.
- **Production:** October 5 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. Coordinator made no app merge, deployment approval, cancellation, live load/failure exercise, Docker inspect or fresh header audit. Older host observations retain their dates.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main protection retained; both reviewed PRs remain open. Runbook/task-status attribution still requires correction. |
| Quality CI | Partial | Separate PR CI suites pass, with 17/20 Python tests respectively. Failed-write browser regression and integrated candidate/capped HTTP evidence remain. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Three-slot/no-wait admission restored, body/null/text protections retained. Actual peak/capped HTTP and rolling capacity remain unqualified. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Exact-image smoke and real-Kestrel streamed-body 413 pass in PR CI. Boundary workload under production caps remains unqualified. |
| Atomic promotion and rollback | Partial | Status guards added in #27, but documented manual rollback is skipped and snapshot checks do not exclude competing promoters. Offline correction before live recovery acceptance. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Partial | Bounded validation reason-code logs and no-submitted-name regressions accepted; central integration, retention and alert delivery still open. |
| Web identity | Partial | Recovery banner added in #26 and previous edit/startup paths pass. Failed persistence feedback and recovery PL/EN labels still need correction. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 90% · difficulty 3/5 · 4–7 h**

Main 16ed383d retains null/text safeguards, three-slot/no-wait admission and reason-code logs. Open #26 a5f6eba fixes temporary-edit/startup cache overwrites. Independent Chromium still reproduces partial attributes/products replacement, cleared recovery and success toast after injected storage failure during reset or valid import. No actual user loss asserted.

#### Expand export and browser coverage

**Quality · In progress · 90% · difficulty 3/5 · 3–6 h**

Open #26 Quality 37259777133: 84 .NET / 17 Python / 12 browser scenarios; open #27 Quality 37260202674: 84 .NET / 20 Python / 12 browser scenarios. Each CI green, but #27 lacks #26 subcases. Independent 20 Python tests pass; Chromium confirms old defects fixed with cookie absent/false/true, and exposes failed-write reset/import regressions. Combined acceptance and capped HTTP workload remain.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 2–3 h**

Open #27 explains numeric Coolify ID and adds status guards, but its documented old-revision rollback produces deploy=false in an offline workflow check. Direct helper path lacks exclusion of competing promoters; overlap filter is malformed. Correct unknown-state exception order, timing budgets and task/CI attribution. Do not call candidate work deployed or fully accepted.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate PR #26/#27 Container and Quality gates pass; deployment skipped for each. Both remain open, based on main 16ed383d. Public health 9a2dee6 on October 5. No reviewed combined image or new deployment is claimed.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation exists. #27 guards active/unknown statuses, but the documented manual dispatch is skipped when old expected_revision differs from main, and direct helper history reads do not serialize competing promoters. Fix/test instructions offline; live rejection/recovery/overlap capacity remain separate coordinated gates.

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

Metadata/favicon/header work retained; existing CI covers mobile/settings focus and language switching. #26 adds a persistent recovery banner, but recovery dialog/buttons and new accessible label remain partly Polish in English mode. Recovery failure UX and representative preview/licensing acceptance remain; no blanket WCAG claim.

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

Poprzednie reprodukcje startupu/edycji cache są naprawione w #26. Odbiór nadal wstrzymany: nieudany zapis wyłącza recovery i pokazuje sukces; polecenie rollbacku #27 jest pomijane przez freshness, pozostają błędy wykluczenia/selektora/statusów. Aktualizować te same PR-y i zostawić do review; portfolio po odbiorze poprawek. 84% pozostaje szacunkiem ewidencyjnym, nie certyfikatem.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Stan źródła:** Reviewed open PR #26 a5f6eba and #27 52967d8, both based on main 16ed383d; each has green CI and neither contains the other. Prior recovery startup/edit defects fixed in #26, but failed storage replacement and manual rollback/runbook remain blocked. Public health still 9a2dee6. Progress stays 84% pending acceptance.
- **Testy i CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37259777133: 84 .NET / 17 Python / 12 browser; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37260202674: 84 .NET / 20 Python / 12 browser. Container/Quality green and deploy skipped in both. Separate heads, no combined candidate acceptance; scan scope remains limited.
- **Produkcja:** October 5 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. Coordinator made no app merge, deployment approval, cancellation, live load/failure exercise, Docker inspect or fresh header audit. Older host observations retain their dates.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main zachowana; oba sprawdzone PR-y pozostają otwarte. Runbook i przypisanie statusów zadań wymagają korekty. |
| Quality CI | Częściowe | Osobne CI PR-ów przechodzą, odpowiednio z 17/20 testami Python. Pozostają regresje błędów zapisu oraz odbiór połączonego kandydata/HTTP pod limitami. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Przywrócono 3 sloty bez oczekiwania, zachowano ochronę body/null/tekstu. Rzeczywisty szczyt pamięci, HTTP pod limitami i capacity rolling pozostają nieodebrane. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Smoke obrazu i real-Kestrel ze strumieniowym body 413 przechodzą w CI PR. Graniczne obciążenie pod limitami produkcji pozostaje nieodebrane. |
| Atomowa promocja i rollback | Częściowe | Dodano guardy statusów w #27, lecz opisany rollback jest pomijany, a odczyt historii nie wyklucza innych promoterów. Korekta offline przed odbiorem recovery produkcji. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Częściowe | Uznano ograniczone logi reason-code i regresje braku przesłanych nazw; integracja centralna, retencja i dostarczanie alertów pozostają otwarte. |
| Tożsamość webowa | Częściowe | Dodano baner recovery w #26, a wcześniejsze ścieżki edycji/startupu przechodzą. Komunikaty po błędach zapisu i etykiety PL/EN recovery wymagają korekty. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 90% · trudność 3/5 · 4–7 h**

Main 16ed383d retains null/text safeguards, three-slot/no-wait admission and reason-code logs. Open #26 a5f6eba fixes temporary-edit/startup cache overwrites. Independent Chromium still reproduces partial attributes/products replacement, cleared recovery and success toast after injected storage failure during reset or valid import. No actual user loss asserted.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 90% · trudność 3/5 · 3–6 h**

Open #26 Quality 37259777133: 84 .NET / 17 Python / 12 browser scenarios; open #27 Quality 37260202674: 84 .NET / 20 Python / 12 browser scenarios. Each CI green, but #27 lacks #26 subcases. Independent 20 Python tests pass; Chromium confirms old defects fixed with cookie absent/false/true, and exposes failed-write reset/import regressions. Combined acceptance and capped HTTP workload remain.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 2–3 h**

Open #27 explains numeric Coolify ID and adds status guards, but its documented old-revision rollback produces deploy=false in an offline workflow check. Direct helper path lacks exclusion of competing promoters; overlap filter is malformed. Correct unknown-state exception order, timing budgets and task/CI attribution. Do not call candidate work deployed or fully accepted.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate PR #26/#27 Container and Quality gates pass; deployment skipped for each. Both remain open, based on main 16ed383d. Public health 9a2dee6 on October 5. No reviewed combined image or new deployment is claimed.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation exists. #27 guards active/unknown statuses, but the documented manual dispatch is skipped when old expected_revision differs from main, and direct helper history reads do not serialize competing promoters. Fix/test instructions offline; live rejection/recovery/overlap capacity remain separate coordinated gates.

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

Metadata/favicon/header work retained; existing CI covers mobile/settings focus and language switching. #26 adds a persistent recovery banner, but recovery dialog/buttons and new accessible label remain partly Polish in English mode. Recovery failure UX and representative preview/licensing acceptance remain; no blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
