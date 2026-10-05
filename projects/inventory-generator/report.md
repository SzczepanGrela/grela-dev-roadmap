# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-05**<br>
Estimated completion / szacowane ukończenie: **84%**<br>
Forecast / prognoza: **2026-10-05–2026-10-20**, 20–38 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Most prior corrections accepted: single-write recovery, no false success, PL/EN, manual old-target deployment, exception order and overlap filters. Remaining #26 issue: failed compensation leaves a mixed project after reload. #27 needs narrow source-bound regression, timing and status corrections. Update same PRs; portfolio follows app acceptance. Progress stays 84%, not a certification.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Source state:** Second review of open #26 bed0918 and #27 e69f0b3, independently based on main 16ed383d. Single-write recovery and manual rollback fixes accepted; failed compensation still loses original columns after reload. Narrow #27 timing/status/source-bound-test corrections remain. Green separate CI; public health still 9a2dee6. Progress remains 84% pending accepted integration.
- **Tests and CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37263576163: 84 .NET / 17 Python / browser suite incl. 7F-I; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37264055818: 84 .NET / 28 Python / baseline browser suite. Test logs verified; Container/Quality green, deploy skipped in both. Separate heads, no combined candidate acceptance; scan scope unchanged.
- **Production:** October 5 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. Coordinator made no app merge, deployment approval, cancellation, live load/failure exercise, Docker inspect or fresh header audit. Older host observations retain their dates.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main protection retained; both PRs open. Separate code/CI/live status clarified; canonical task naming needs a small correction. |
| Quality CI | Partial | Separate suites pass with 17/28 Python tests. Independent checks find failed-compensation recovery gap. Bind copied tests to actual source; integrated/capped HTTP acceptance remains. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Three-slot/no-wait admission restored, body/null/text protections retained. Actual peak/capped HTTP and rolling capacity remain unqualified. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Exact-image smoke and real-Kestrel streamed-body 413 pass in PR CI. Boundary workload under production caps remains unqualified. |
| Atomic promotion and rollback | Partial | Actual-source #27 manual-old/stale-push/image-label checks pass. Emergency route requires coordinated promotion freeze. Live recovery/capacity acceptance remains separate. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Partial | Bounded validation reason-code logs and no-submitted-name regressions accepted; central integration, retention and alert delivery still open. |
| Web identity | Partial | PL/EN recovery dialog and ARIA labels corrected; no false success on failed writes. Remaining recovery durability and preview/licensing acceptance. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 90% · difficulty 3/5 · 4–7 h**

Main 16ed383d safeguards retained. #26 bed0918 passes reset/import single-write failure, complete original download after reload and retry. If compensation also fails, recovery downloads new columns with 5001 old rows; no false success now. Require durable whole-project commit before acceptance. Synthetic failure, no actual user loss observed.

#### Expand export and browser coverage

**Quality · In progress · 90% · difficulty 3/5 · 3–6 h**

#26 Quality 37263576163: 84 .NET / 17 Python / browser suite including 7F-I; #27 Quality 37264055818: 84 .NET / 28 Python / baseline browser suite. Separate green CI. Independent six browser fault cases and 28 Python tests; actual workflow/runbook checks pass. Replace copied snippet tests with actual-source regressions. Combined candidate/capped HTTP acceptance remain.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 2–3 h**

#27 e69f0b3 fixes manual old-revision deployment, emergency promotion-freeze prerequisite, exception ordering and overlap selector. Correct remaining API timing prose (15s, three GET attempts, early success), canonical task attribution and unsupported atomic-storage claim. No live rollback acceptance implied.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate PR #26/#27 Container and Quality gates pass; deployment skipped for each. Both remain open, based on main 16ed383d. Public health 9a2dee6 on October 5. No reviewed combined image or new deployment is claimed.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation retained. Actual #27 workflow permits manual old target, skips stale automatic push and rejects bad image labels; production protection/serialization retained. Emergency direct route now requires operational exclusion of other promoters. Independent offline checks pass; live recovery/overlap and capped capacity remain separate.

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

Recovery banner, translated PL/EN dialog/buttons and ARIA labels now implemented; browser CI passes 7I. No false success after failed persistence; prior startup/edit paths accepted. Recovery after failed compensation and representative preview/licensing acceptance remain; no blanket WCAG claim.

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

Większość poprawek przyjęta: pojedynczy błąd zapisu, brak fałszywego sukcesu, PL/EN, ręczne wdrożenie starej wersji, kolejność wyjątków i filtry. Pozostaje #26: błąd zapisu przywracającego zostawia mieszany projekt po odświeżeniu. #27 wymaga wąskich korekt testów powiązanych ze źródłem, czasu i statusów. Te same PR-y; portfolio po odbiorze aplikacji. 84% pozostaje szacunkiem.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `16ed383d2affb96a7a538ec935a7b3b7dd337257`
- **Stan źródła:** Second review of open #26 bed0918 and #27 e69f0b3, independently based on main 16ed383d. Single-write recovery and manual rollback fixes accepted; failed compensation still loses original columns after reload. Narrow #27 timing/status/source-bound-test corrections remain. Green separate CI; public health still 9a2dee6. Progress remains 84% pending accepted integration.
- **Testy i CI:** #26 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37263576163: 84 .NET / 17 Python / browser suite incl. 7F-I; #27 https://github.com/SzczepanGrela/inventory-generator/actions/runs/37264055818: 84 .NET / 28 Python / baseline browser suite. Test logs verified; Container/Quality green, deploy skipped in both. Separate heads, no combined candidate acceptance; scan scope unchanged.
- **Produkcja:** October 5 public health returned 9a2dee631f4aff76dc2024d3036287ad93216452. Coordinator made no app merge, deployment approval, cancellation, live load/failure exercise, Docker inspect or fresh header audit. Older host observations retain their dates.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main zachowana; oba PR-y otwarte. Rozdzielono kod/CI/produkcję; nazwa zadania wymaga drobnej korekty. |
| Quality CI | Częściowe | Osobne CI przechodzą z 17/28 testami Python. Niezależne sprawdzenia wykazały lukę przy błędzie zapisu przywracającego. Powiązać skopiowane testy z rzeczywistym źródłem; odbiór integracji/HTTP pod limitami pozostaje. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Przywrócono 3 sloty bez oczekiwania, zachowano ochronę body/null/tekstu. Rzeczywisty szczyt pamięci, HTTP pod limitami i capacity rolling pozostają nieodebrane. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Smoke obrazu i real-Kestrel ze strumieniowym body 413 przechodzą w CI PR. Graniczne obciążenie pod limitami produkcji pozostaje nieodebrane. |
| Atomowa promocja i rollback | Częściowe | Sprawdzenia rzeczywistego kodu #27 dla manual-old/stale-push/etykiety przechodzą. Ścieżka awaryjna wymaga uzgodnionego zamrożenia promocji. Odbiór recovery/capacity produkcji pozostaje osobny. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Częściowe | Uznano ograniczone logi reason-code i regresje braku przesłanych nazw; integracja centralna, retencja i dostarczanie alertów pozostają otwarte. |
| Tożsamość webowa | Częściowe | Poprawiono PL/EN dialogu recovery i etykiet ARIA; brak fałszywego sukcesu po błędzie zapisu. Pozostaje trwałość odzyskiwania i odbiór podglądu/licencji. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 90% · trudność 3/5 · 4–7 h**

Main 16ed383d safeguards retained. #26 bed0918 passes reset/import single-write failure, complete original download after reload and retry. If compensation also fails, recovery downloads new columns with 5001 old rows; no false success now. Require durable whole-project commit before acceptance. Synthetic failure, no actual user loss observed.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 90% · trudność 3/5 · 3–6 h**

#26 Quality 37263576163: 84 .NET / 17 Python / browser suite including 7F-I; #27 Quality 37264055818: 84 .NET / 28 Python / baseline browser suite. Separate green CI. Independent six browser fault cases and 28 Python tests; actual workflow/runbook checks pass. Replace copied snippet tests with actual-source regressions. Combined candidate/capped HTTP acceptance remain.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 2–3 h**

#27 e69f0b3 fixes manual old-revision deployment, emergency promotion-freeze prerequisite, exception ordering and overlap selector. Correct remaining API timing prose (15s, three GET attempts, early success), canonical task attribution and unsupported atomic-storage claim. No live rollback acceptance implied.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Main 16ed383d retains three export slots without waiting and shared weighted per-client buckets. Candidate changes do not expand admission. Benchmark labels describe post-run working set/live heap, not peak. HTTP/cgroup/rolling capacity and independent live client acceptance remain unqualified; process-local overlap remains conditional.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Protected exact-digest pipeline retained. Separate PR #26/#27 Container and Quality gates pass; deployment skipped for each. Both remain open, based on main 16ed383d. Public health 9a2dee6 on October 5. No reviewed combined image or new deployment is claimed.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

Managed rolling/readiness/rollback implementation retained. Actual #27 workflow permits manual old target, skips stale automatic push and rejects bad image labels; production protection/serialization retained. Emergency direct route now requires operational exclusion of other promoters. Independent offline checks pass; live recovery/overlap and capped capacity remain separate.

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

Recovery banner, translated PL/EN dialog/buttons and ARIA labels now implemented; browser CI passes 7I. No false success after failed persistence; prior startup/edit paths accepted. Recovery after failed compensation and representative preview/licensing acceptance remain; no blanket WCAG claim.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
- Zachować liczniki procesu tylko pod warunkiem pomiarów bezpiecznego krótkiego overlapu; współdzielony licznik nie jest wdrożony ani planowany w tym warunkowym zakresie.
