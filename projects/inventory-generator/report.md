# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-04**<br>
Estimated completion / szacowane ukończenie: **84%**<br>
Forecast / prognoza: **2026-10-05–2026-10-20**, 20–38 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Three-slot/no-wait admission, payload-free validation logs and expanded regressions accepted. Full closeout declined: two independently reproduced cache overwrite paths and operator selector/rollback prerequisites remain. Gemini prepares two follow-up PRs for review, then portfolio; separate capacity/live recovery/platform gates stay open. Percentages are task bookkeeping, not security certification.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Source state:** October 4 follow-up: clean main 16ed383d after #23–25, identical source tree to green PR #25 CI. Conservative admission/log/test corrections accepted; browser recovery and operator prerequisites still defective. Public health remains 9a2dee6; main workflow pending at readback.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37176477678: 84 .NET, 17 Python, 12 browser scenarios and container/Quality gates pass; PR deployment skipped. PR and main source trees match, not their release identities. Main workflow 37176616872 pending at readback. Scan scope does not establish absence of all vulnerabilities.
- **Production:** October 4 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. No new coordinator deployment approval, cancellation, Docker inspect, header audit or live failure/load exercise. Older runtime/header observations retain their dates.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main protection remains active; runbook commands and production/completion claims require correction. |
| Quality CI | Partial | 84 .NET / 17 Python / 12 browser scenarios pass on the reviewed source tree. Recovery lifecycle/fresh-context regressions and capped HTTP workload remain. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Three-slot/no-wait admission restored, body/null/text protections retained. Actual peak/capped HTTP and rolling capacity remain unqualified. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Exact-image smoke and real-Kestrel streamed-body 413 pass in PR CI. Boundary workload under production caps remains unqualified. |
| Atomic promotion and rollback | Partial | Managed promotion and rollback implementation tested with fake clients; production rejection/failure recovery not demonstrated. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Partial | Bounded validation reason-code logs and no-submitted-name regressions accepted; central integration, retention and alert delivery still open. |
| Web identity | Partial | Mobile/settings focus and language switching covered in CI; recovery interaction/messages, licensing and preview acceptance remain. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 90% · difficulty 3/5 · 4–7 h**

Reviewed 16ed383d retains null/text safeguards and restores three-slot/no-wait admission. Strict supplied-type validation and reason-code logs corrected. Independent Chromium still reproduces cache overwrite after temporary recovery dismissal/add (5001 rows to one), and startup default persistence before validation when the preference cookie is absent. No actual user loss asserted.

#### Expand export and browser coverage

**Quality · In progress · 90% · difficulty 3/5 · 3–6 h**

PR #25 Quality 37176477678 passes 58 unit + 26 integration, 17 Python and 12 browser scenarios on the same source tree as main 16ed383d. Real Kestrel streamed-body 413, file import/download, mobile, settings focus, mocked HTTP429 recovery and network errors now covered. Independent Python rerun passes; isolated Chromium exposes missing recovery-lifecycle/fresh-context regressions. Capped HTTP workload evidence remains open.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 2–3 h**

Several CLI/scan/OOM details corrected. Remaining runbook defects: numeric applicationId mistaken for UUID, direct rollback shortcut without exclusion of unresolved deployments, inaccurate timeout/soak guarantee and unbounded monitoring requests. Refresh work-status and validate examples offline; main changes are not automatically deployed.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Main 16ed383d restores three export slots without waiting; shared weighted per-client buckets retained. Corrected benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Existing protected exact-digest pipeline retained. PR #25 container/Quality passed against the same source tree as main; deploy skipped. Main run 37176616872 pending at October 4 readback, public revision 9a2dee6. Source-tree equivalence does not qualify a main image or prove deployment.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

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

Metadata/favicon/header work retained. CI now exercises 375x667 layout, settings-modal keyboard/focus and PL/EN switching. Recovery still has hardcoded/stale messages; recovery accessibility, licensing and representative browser preview remain to review. No blanket WCAG claim.

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

Przywrócenie 3 slotów bez oczekiwania, logi walidacji bez danych wejściowych i rozszerzone regresje uznane. Pełny odbiór wstrzymany: odtworzono dwie ścieżki nadpisania cache; pozostają selektory i warunki rollbacku w runbooku. Gemini przygotuje dwa PR-y do review, potem portfolio; capacity, recovery produkcji i platforma pozostają osobnymi bramkami. Procenty to ewidencja zadań, nie certyfikat bezpieczeństwa.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Stan źródła:** October 4 follow-up: clean main 16ed383d after #23–25, identical source tree to green PR #25 CI. Conservative admission/log/test corrections accepted; browser recovery and operator prerequisites still defective. Public health remains 9a2dee6; main workflow pending at readback.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37176477678: 84 .NET, 17 Python, 12 browser scenarios and container/Quality gates pass; PR deployment skipped. PR and main source trees match, not their release identities. Main workflow 37176616872 pending at readback. Scan scope does not establish absence of all vulnerabilities.
- **Produkcja:** October 4 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. No new coordinator deployment approval, cancellation, Docker inspect, header audit or live failure/load exercise. Older runtime/header observations retain their dates.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main działa; polecenia runbooka i deklaracje produkcji/ukończenia wymagają korekty. |
| Quality CI | Częściowe | 84 .NET / 17 Python / 12 scenariuszy przeglądarki przechodzi na sprawdzonym drzewie źródeł. Pozostają regresje całego recovery/świeżych kontekstów i pomiary HTTP pod limitami. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Przywrócono 3 sloty bez oczekiwania, zachowano ochronę body/null/tekstu. Rzeczywisty szczyt pamięci, HTTP pod limitami i capacity rolling pozostają nieodebrane. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Smoke obrazu i real-Kestrel ze strumieniowym body 413 przechodzą w CI PR. Graniczne obciążenie pod limitami produkcji pozostaje nieodebrane. |
| Atomowa promocja i rollback | Częściowe | Promocję i rollback przetestowano na fake clients; produkcyjna odmowa i recovery awarii nie zostały dowiedzione. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Częściowe | Uznano ograniczone logi reason-code i regresje braku przesłanych nazw; integracja centralna, retencja i dostarczanie alertów pozostają otwarte. |
| Tożsamość webowa | Częściowe | CI obejmuje mobile/focus ustawień i zmianę języka; pozostaje odbiór recovery/komunikatów, licencji i podglądu. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 90% · trudność 3/5 · 4–7 h**

Reviewed 16ed383d retains null/text safeguards and restores three-slot/no-wait admission. Strict supplied-type validation and reason-code logs corrected. Independent Chromium still reproduces cache overwrite after temporary recovery dismissal/add (5001 rows to one), and startup default persistence before validation when the preference cookie is absent. No actual user loss asserted.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 90% · trudność 3/5 · 3–6 h**

PR #25 Quality 37176477678 passes 58 unit + 26 integration, 17 Python and 12 browser scenarios on the same source tree as main 16ed383d. Real Kestrel streamed-body 413, file import/download, mobile, settings focus, mocked HTTP429 recovery and network errors now covered. Independent Python rerun passes; isolated Chromium exposes missing recovery-lifecycle/fresh-context regressions. Capped HTTP workload evidence remains open.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 2–3 h**

Several CLI/scan/OOM details corrected. Remaining runbook defects: numeric applicationId mistaken for UUID, direct rollback shortcut without exclusion of unresolved deployments, inaccurate timeout/soak guarantee and unbounded monitoring requests. Refresh work-status and validate examples offline; main changes are not automatically deployed.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Main 16ed383d restores three export slots without waiting; shared weighted per-client buckets retained. Corrected benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Existing protected exact-digest pipeline retained. PR #25 container/Quality passed against the same source tree as main; deploy skipped. Main run 37176616872 pending at October 4 readback, public revision 9a2dee6. Source-tree equivalence does not qualify a main image or prove deployment.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

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

Metadata/favicon/header work retained. CI now exercises 375x667 layout, settings-modal keyboard/focus and PL/EN switching. Recovery still has hardcoded/stale messages; recovery accessibility, licensing and representative browser preview remain to review. No blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
