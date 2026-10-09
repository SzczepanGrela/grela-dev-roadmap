# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-10-09**<br>
Estimated completion / szacowane ukończenie: **92%**<br>
Forecast / prognoza: **2026-10-07–2026-10-20**, 13–25 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

October 9 canary health gating and controlled production recovery remain accepted; one rollback runner warning remains unexplained. The later bounded rolling attempt returned eight HTTP 200 exports and 53 successful health probes per app, with sampled combined canary memory of 400.16 MiB. A host load guard stopped it before final validation. The old helper omitted the rejected sample, so the exact triggering load is unknown; local diagnostic logging is corrected. Seven output structures and final recovery were not validated by this attempt. Later 15:36:39 UTC readback confirms low host load and one healthy canary. The timing and cause of the earlier load spike remain unknown. The original log is located; its selected ending confirms sole healthy replacement before the guard stopped observation at 16.801 seconds of twenty required. One separate follow-up is prepared with corrected diagnostics and unchanged limits, without claiming a new result. Capacity acceptance and cleanup remain open. Progress and effort estimates retain October 7; platform gaps stay separate.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Source state:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 accepts app-client isolation, retry/recovery, sampled header-bypass rejection and selected runtime inspect. Tooling-only #29 is merged at d62e2dc. October 9 isolated canary rejection/restoration and controlled production failed-smoke rollback passed; production returned to exact stable 6971496. One runner health-read warning remains unexplained. The later bounded canary rolling attempt returned eight HTTP 200 exports but stopped on the host load guard before final validation. Capacity acceptance and cleanup remain. Progress and effort estimates retain October 7.
- **Tests and CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Production:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | PR-only integration with strict required Quality; all three accepted PRs merged without bypass. |
| Quality CI | Complete | Combined CI plus bounded real HTTP/cgroup qualification pass on the final image; live operational acceptance is separate. |
| Immutable release | Complete | Same tested/attested digest deployed by run 37574806859 at 6971496. |
| Deployment access | Partial | Inventory private Coolify/Tailscale production authentication succeeded; credential scope review remains separate. |
| Network, TLS and client identity | Partial | October 8 paired public clients and sampled forwarded-header checks pass at the app/public-path level. Observer and VPS use different edge locations; same-colo edge isolation remains unproven. Earlier network/TLS evidence retains its date. |
| Abuse protection | Partial | Local capped HTTP overload/recovery and public app-client/retry/header checks pass. Worst local peak 469.61 MiB does not eliminate OOM risk. Rolling capacity remains unqualified. The live bounded canary rolling attempt stopped at the host guard after eight HTTP 200 responses; it is partial evidence, not capacity acceptance. |
| Runtime safety | Partial | Selected new-container inspect confirms the deployed revision, caps, non-root user, capability removal, init and log rotation. Missing PID/security/read-only protections retain the parser exception; unqueried fields are not refreshed. |
| Readiness and preflight | Complete | Final image capped HTTP/readiness and protected release preflight/public smoke pass; health latency is not guaranteed under arbitrary load. |
| Atomic promotion and rollback | Partial | Normal release, isolated canary health gate and controlled production failed-smoke recovery passed; exact prior image and final exports verified. One runner health probe failed for unknown reason, so uninterrupted availability is not established. Rolling-load and temporary cleanup remain separate. |
| Coordination and retention | Partial | Serialized release and scoped retention code exists. Live old/new workload produced responses but hit the host guard before final validation; capacity acceptance and cleanup remain open. |
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

Corrected runbook tests merged; integration, local-capacity and normal-release evidence recorded. October 8 adds selected runtime inspect and public client/retry/header checks. October 9 accepts isolated unhealthy-candidate rejection/retention/restoration and controlled production recovery to exact 6971496. One runner health-read warning has unknown cause. Rolling-load and scoped cleanup remain. Later October 9 bounded canary load: eight HTTP 200 exports, host load guard stop before final validation, no completed acceptance. Later selected host readback confirms low load and one healthy canary. This does not accept the interrupted attempt; thresholds unchanged.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 85% · difficulty 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. Same-colo edge isolation and rolling capacity remain open.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 65% · difficulty 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. Isolated health gate passed in run 37892036349. Controlled failed-smoke rollback https://github.com/SzczepanGrela/inventory-generator/actions/runs/37894951905 restored the exact prior image/revision, corroborated by Docker events and final export smoke. Successor health preceded old-container SIGTERM by 5.961 s on promotion and 6.001 s on rollback. One runner probe failure remains unexplained; zero downtime is not claimed. Rolling-load measurement and cleanup remain. Later October 9 bounded canary load: eight HTTP 200 exports, host load guard stop before final validation, no completed acceptance. Later selected host readback confirms low load and one healthy canary. This does not accept the interrupted attempt; thresholds unchanged.

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

Odbiór health gate canary i kontrolowanego odzyskiwania produkcji z 9 października pozostaje ważny; jedno ostrzeżenie runnera podczas rollbacku jest niewyjaśnione. Późniejsza ograniczona próba rolling dała osiem eksportów HTTP 200 i po 53 poprawne próby zdrowia aplikacji, przy 400,16 MiB łącznej próbkowanej pamięci canary. Próg obciążenia hosta przerwał próbę przed końcową walidacją. Stary skrypt nie zapisał odrzuconej próbki, więc dokładna wartość wyzwalająca zatrzymanie jest nieznana; lokalnie poprawiono diagnostykę. Nie ukończono sprawdzania struktury siedmiu odpowiedzi ani stanu końcowego. Późniejszy odczyt o 15:36:39 UTC potwierdza małe obciążenie hosta i jeden zdrowy kontener canary. Czas ustąpienia i przyczyna wcześniejszego skoku pozostają nieznane. Oryginalny log został odnaleziony; jego końcówka potwierdza jedną zdrową nową instancję przed zatrzymaniem obserwacji po 16,801 sekundy z wymaganych dwudziestu. Przygotowano jedną osobną próbę z poprawioną diagnostyką i niezmienionymi limitami, bez deklarowania nowego wyniku. Odbiór wydajności i sprzątanie pozostają otwarte. Szacunki postępu i czasu zachowują datę 7 października; zadania platformy są osobne.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `697149654f7f84dfe8aabe3565838348ef3a8220`
- **Stan źródła:** PRs #26/#27/#28 merged into deployed 6971496; normal protected release passed. October 8 accepts app-client isolation, retry/recovery, sampled header-bypass rejection and selected runtime inspect. Tooling-only #29 is merged at d62e2dc. October 9 isolated canary rejection/restoration and controlled production failed-smoke rollback passed; production returned to exact stable 6971496. One runner health-read warning remains unexplained. The later bounded canary rolling attempt returned eight HTTP 200 exports but stopped on the host load guard before final validation. Capacity acceptance and cleanup remain. Progress and effort estimates retain October 7.
- **Testy i CI:** https://github.com/SzczepanGrela/inventory-generator/actions/runs/37574806859: 84 .NET (zero skips), 34 Python, 12 browser suites; Container, fixable HIGH/CRITICAL scan, attestation, Quality, release preflight and Production all pass.
- **Produkcja:** October 9 controlled rollback promoted qualified d62e2dc, then restored exact 697149654f7f84dfe8aabe3565838348ef3a8220 after the deliberate post-smoke failure. Both retirements followed successor health; final exports passed. Supplied operator monitor: 122/122 HTTP 200 per app, Inventory max 0.109637 s, neighbour max 0.134085 s. One independent runner probe failed for unknown reason. This does not prove uninterrupted service or rolling-load capacity.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Scalenia przez PR z wymaganym Quality; bez obchodzenia ochrony. |
| Quality CI | Gotowe | Wspólne CI i ograniczone testy HTTP/cgroup końcowego obrazu przeszły; odbiór operacyjny jest osobny. |
| Niezmienne wydanie | Gotowe | Ten sam przetestowany i poświadczony digest wdrożony przez run 37574806859, rewizja 6971496. |
| Dostęp wdrożeniowy | Częściowe | Uwierzytelnienie produkcji przez prywatne Coolify/Tailscale przeszło; przegląd zakresu uprawnień pozostaje osobny. |
| Sieć, TLS i tożsamość klienta | Częściowe | 8 października przeszły równoległe testy klientów i próby podrobienia nagłówków. Źródła trafiają do różnych lokalizacji edge; rozdzielenie IP w tej samej lokalizacji pozostaje niepotwierdzone. Starsze dowody sieci/TLS zachowują datę. |
| Ochrona przed nadużyciami | Częściowe | Lokalne HTTP pod limitami oraz publiczne testy klientów/retry/nagłówków przeszły. Lokalny szczyt 469,61 MiB nie eliminuje ryzyka OOM. Pomiar obciążenia podczas rolling pozostaje otwarty. Ograniczoną próbę rolling canary zatrzymał próg hosta po ośmiu odpowiedziach HTTP 200; to dowód częściowy, bez odbioru capacity. |
| Bezpieczeństwo runtime | Częściowe | Wybrany inspect nowego kontenera potwierdza rewizję, limity, użytkownika non-root, cap-drop, init i rotację logów. Brakujące zabezpieczenia PID/security/read-only pozostają wyjątkiem parsera; nieodczytane pola zachowują starszą datę. |
| Readiness i preflight | Gotowe | Końcowy obraz przeszedł ograniczone HTTP/readiness, preflight i publiczny smoke; bez gwarancji opóźnienia przy dowolnym obciążeniu. |
| Atomowa promocja i rollback | Częściowe | Zwykłe wdrożenie, health gate canary i kontrolowany failed-smoke rollback produkcji przeszły; zgodny poprzedni obraz i końcowe eksporty potwierdzone. Przyczyna jednej nieudanej próby zdrowia z runnera jest nieznana; ciągłość dostępności nie została dowiedziona. Pomiar rolling pod obciążeniem i sprzątanie pozostają osobne. |
| Koordynacja i retencja | Częściowe | Kod serializacji wydań i retencji istnieje. Test starej i nowej instancji zwrócił odpowiedzi, ale próg hosta zatrzymał końcową walidację; odbiór capacity i sprzątanie pozostają otwarte. |
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

Corrected runbook tests merged; integration, local-capacity and normal-release evidence recorded. October 8 adds selected runtime inspect and public client/retry/header checks. October 9 accepts isolated unhealthy-candidate rejection/retention/restoration and controlled production recovery to exact 6971496. One runner health-read warning has unknown cause. Rolling-load and scoped cleanup remain. Later October 9 bounded canary load: eight HTTP 200 exports, host load guard stop before final validation, no completed acceptance. Later selected host readback confirms low load and one healthy canary. This does not accept the interrupted attempt; thresholds unchanged.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 85% · trudność 3/5 · 2–4 h**

Three slots, no waiting, weighted per-client budgets retained. Local capped HTTP overload/recovery passed; worst peak 469.61/512 MiB without OOM. October 8 public paired run: VPS 13/30 exports passed, 17 application DOCX 429s with Retry-After, recovery 200; observer 12/12 passed, eight during the regular VPS series. Forged X-Forwarded-For remained application 429; forged CF-Connecting-IP received public-path 403, not an observed origin response. Same-colo edge isolation and rolling capacity remain open.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Final 6971496 CI publishes/tests/attests digest sha256:7b9853fa84e67a53d332b0b2ec67c5e0690f97c2c8b8ab3f654d6689440a825e; run 37574806859 deploys it successfully via protected production. Public revision and frontend match. Stale unstarted October 3 deployment cancelled to unblock main queue.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 65% · trudność 4/5 · 3–6 h**

Normal protected deployment and public smoke pass at 6971496. Isolated health gate passed in run 37892036349. Controlled failed-smoke rollback https://github.com/SzczepanGrela/inventory-generator/actions/runs/37894951905 restored the exact prior image/revision, corroborated by Docker events and final export smoke. Successor health preceded old-container SIGTERM by 5.961 s on promotion and 6.001 s on rollback. One runner probe failure remains unexplained; zero downtime is not claimed. Rolling-load measurement and cleanup remain. Later October 9 bounded canary load: eight HTTP 200 exports, host load guard stop before final validation, no completed acceptance. Later selected host readback confirms low load and one healthy canary. This does not accept the interrupted attempt; thresholds unchanged.

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
