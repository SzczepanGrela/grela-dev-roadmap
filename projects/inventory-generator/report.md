# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-03**<br>
Estimated completion / szacowane ukończenie: **77%**<br>
Forecast / prognoza: **2026-10-05–2026-10-18**, 19–38 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

Gemini implemented substantial .NET 10, export and protected CD work. Coordinator review reproduced HTML-message injection, null-payload 500s and import/cache gaps; live rollback/capacity and browser evidence remain. Progress is weighted task bookkeeping, not a security/production certification. Gemini corrects these before taking the portfolio; estimates are remaining work, not guaranteed release dates.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `005dc2534c44e311e1f24690794e60e7d452cb27`
- **Source state:** Clean source at 005dc25 reviewed October 3. CI rebuilt and deployed that revision; isolated local probes found defects outside existing green test coverage.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37091518872 succeeded: rebuilt .NET 10 tests, exact-image export smoke, fixable HIGH/CRITICAL Trivy, SBOM/provenance, attestation and protected production. This scanner scope is not absence of all vulnerabilities.
- **Production:** October 3 public health returned status ok and source revision 005dc2534c44e311e1f24690794e60e7d452cb27; root 200 with CSP/nosniff/framing/referrer/permissions/HSTS. Live failure rollback/capacity remains unaccepted; no fresh Docker runtime audit.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main ruleset and protected production are active; public documentation still contains stale runtime/limit claims. |
| Quality CI | Partial | Green rebuilt .NET/Python/image/security gates; reproduced validation/HTML issues and real browser/cost coverage remain. |
| Immutable release | Complete | Run 37091518872 tests and attests one digest, then verifies its source revision for protected CD. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | Public TLS/headers and exact-proxy regressions exist; retain older network evidence and pending live client/edge checks. |
| Abuse protection | Partial | Weighted buckets and body/cell/concurrency caps exist; null payload failures and safe maximum workload/rolling aggregate need qualification. |
| Runtime safety | Partial | Current source contract/image smoke plus older host snapshot; no new effective hardening readback. |
| Readiness and preflight | Partial | Docker health/revision and all-format exact-image probes exist; representative boundary exports and malformed-input readiness still need tests. |
| Atomic promotion and rollback | Partial | Managed promotion and rollback implementation tested with fake clients; production rejection/failure recovery not demonstrated. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists; measured old/new capacity remains open. |
| Observability | Missing | No accepted central export/429/deploy alert delivery; bounded application hooks remain. |
| Web identity | Partial | Metadata/favicon/header changes implemented; browser/licensing/accessibility acceptance remains. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 80% · difficulty 3/5 · 3–6 h**

October 3 source: all formats, body/cell/row limits and weighted buckets implemented. Isolated local HTTP requests with null attributes/products return 500; imported error text reaches an HTML toast sink. Fix schema/null handling and untrusted text before acceptance.

#### Expand export and browser coverage

**Quality · In progress · 80% · difficulty 3/5 · 4–8 h**

Quality 37091518872 rebuilt .NET 10 and exact-image smoke. Coordinator ran 17 Python tests and existing .NET binaries (46 unit + 12 integration), without a local rebuild. Real browser/cache/import, streamed-body and workload boundary regressions remain.

#### Enable ruleset and required Quality checks

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Document the Coolify migration and known limitations

**Documentation · In progress · 80% · difficulty 2/5 · 1–2 h**

Coolify contract, smoke and release documentation exist. Update stale .NET 8 README architecture, weighted DOCX cost-unit description, browser guarantees and acceptance evidence; implementation is not full operational acceptance.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 80% · difficulty 3/5 · 2–4 h**

Weighted shared export bucket 10 cost units/minute; DOCX costs two plus its own bucket; per-process export semaphore 3. Existing exact-proxy tests and shared edge evidence retained. Safe aggregate workload and public isolation/recovery remain; temporary counter overlap is conditional on capacity evidence.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Quality 37091518872 qualifies/attests one .NET 10 image and protected CD verifies digest plus source revision. Public health independently returned 005dc25 on October 3. This does not refresh older host inspect fields.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 50% · difficulty 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

#### Connect the service to central monitoring

**Delivery · Planned · 0% · difficulty 3/5 · 2–4 h**

Source logs generation errors; accepted export latency/overload visibility, central integration and delivered alerts were not demonstrated. Add bounded app hooks; platform integration remains separately owned.

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

Gemini wykonał istotne prace .NET 10, eksportu i chronionego CD. Przegląd odtworzył HTML injection komunikatów, 500 dla null oraz luki importu/cache; pozostają dowody przeglądarkowe i produkcyjne rollback/capacity. Procent to ważona ewidencja zadań, nie certyfikat bezpieczeństwa/produkcji. Gemini poprawia te rzeczy przed portfolio; estymaty nie gwarantują dat wydania.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `005dc2534c44e311e1f24690794e60e7d452cb27`
- **Stan źródła:** Clean source at 005dc25 reviewed October 3. CI rebuilt and deployed that revision; isolated local probes found defects outside existing green test coverage.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37091518872 succeeded: rebuilt .NET 10 tests, exact-image export smoke, fixable HIGH/CRITICAL Trivy, SBOM/provenance, attestation and protected production. This scanner scope is not absence of all vulnerabilities.
- **Produkcja:** October 3 public health returned status ok and source revision 005dc2534c44e311e1f24690794e60e7d452cb27; root 200 with CSP/nosniff/framing/referrer/permissions/HSTS. Live failure rollback/capacity remains unaccepted; no fresh Docker runtime audit.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Ochrona main i produkcji działa; dokumentacja ma nadal nieaktualne deklaracje runtime/limitów. |
| Quality CI | Częściowe | Zielone bramki .NET/Python/obrazu/security; pozostają błędy walidacji/HTML i rzeczywiste testy przeglądarki/kosztów. |
| Niezmienne wydanie | Gotowe | Run 37091518872 testuje i poświadcza jeden digest, następnie weryfikuje rewizję dla chronionego CD. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny TLS/nagłówki i regresje exact-proxy działają; starsze dowody sieci oraz brakujące testy klientów/edge zachowują swój zakres. |
| Ochrona przed nadużyciami | Częściowe | Ważone buckety i limity body/komórek/współbieżności istnieją; null oraz maksymalny koszt i suma rolling wymagają kwalifikacji. |
| Bezpieczeństwo runtime | Częściowe | Bieżący kontrakt/smoke obrazu i starszy snapshot hosta; brak nowego odczytu efektywnego hardeningu. |
| Readiness i preflight | Częściowe | Health/revision Dockera i smoke formatów istnieją; reprezentatywne granice eksportów i błędne dane wymagają testów. |
| Atomowa promocja i rollback | Częściowe | Promocję i rollback przetestowano na fake clients; produkcyjna odmowa i recovery awarii nie zostały dowiedzione. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje; pomiary capacity starej/nowej instancji pozostają otwarte. |
| Obserwowalność | Brak | Brak odebranego centralnego monitoringu eksportów/429 i alertów; pozostają ograniczone hooki aplikacji. |
| Tożsamość webowa | Częściowe | Metadane/favicon/nagłówki wdrożone w kodzie; pozostaje odbiór przeglądarki/licencji/dostępności. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 80% · trudność 3/5 · 3–6 h**

October 3 source: all formats, body/cell/row limits and weighted buckets implemented. Isolated local HTTP requests with null attributes/products return 500; imported error text reaches an HTML toast sink. Fix schema/null handling and untrusted text before acceptance.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 80% · trudność 3/5 · 4–8 h**

Quality 37091518872 rebuilt .NET 10 and exact-image smoke. Coordinator ran 17 Python tests and existing .NET binaries (46 unit + 12 integration), without a local rebuild. Real browser/cache/import, streamed-body and workload boundary regressions remain.

#### Włączyć ruleset i wymagane Quality

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

October 3 coordinator installed/read back active ruleset 24407679: main requires PR, strict GitHub Actions Quality gate, thread resolution, no force-push/deletion/bypass. Existing production environment requires owner approval, main only; self-review allowed.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · W toku · 80% · trudność 2/5 · 1–2 h**

Coolify contract, smoke and release documentation exist. Update stale .NET 8 README architecture, weighted DOCX cost-unit description, browser guarantees and acceptance evidence; implementation is not full operational acceptance.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 80% · trudność 3/5 · 2–4 h**

Weighted shared export bucket 10 cost units/minute; DOCX costs two plus its own bucket; per-process export semaphore 3. Existing exact-proxy tests and shared edge evidence retained. Safe aggregate workload and public isolation/recovery remain; temporary counter overlap is conditional on capacity evidence.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Quality 37091518872 qualifies/attests one .NET 10 image and protected CD verifies digest plus source revision. Public health independently returned 005dc25 on October 3. This does not refresh older host inspect fields.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 50% · trudność 4/5 · 3–6 h**

App-specific managed rolling, readiness, saved-release rollback code and fake-client regressions implemented. Live unhealthy-candidate rejection, failed-public-smoke rollback and safe overlap capacity are still unproven; coordinate bounded production exercises.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · Planowane · 0% · trudność 3/5 · 2–4 h**

Source logs generation errors; accepted export latency/overload visibility, central integration and delivered alerts were not demonstrated. Add bounded app hooks; platform integration remains separately owned.

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
