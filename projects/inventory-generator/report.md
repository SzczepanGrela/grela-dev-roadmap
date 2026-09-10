# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-09-10**<br>
Estimated completion / szacowane ukończenie: **61%**<br>
Forecast / prognoza: **2026-09-10–2026-09-14**, 20–36 h, medium confidence / pewność: medium

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Local-first inventory editor and server-side DOCX, CSV and HTML generator.

September 10 reconciliation adds the operator-observed active per-IP Cloudflare export edge rule in the operator-declared grela.dev zone. Behavioral acceptance remains unknown; per-format/concurrency safeguards, proxy limits, automatic CD and rollback remain incomplete. Percentages and hours are planning estimates, not measurements.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `f1c14ebb6dcbd5b5b04274558e661e573e1e42d9`
- **Source state:** Commit f1c14ebb was created from a clean main baseline; only the forwarded-header implementation and its integration tests changed, and local plus CI tests passed.
- **Tests and CI:** GitHub Quality 34241221870 succeeded for f1c14ebb6dcbd5b5b04274558e661e573e1e42d9: restore/build/tests, image build and push, fixable HIGH/CRITICAL Trivy gate, SBOM/provenance and attestation passed.
- **Production:** On September 9 the operator reported a successful Coolify redeploy of digest 0d112419 with runtime-only exact proxy configuration; selective image, environment, health and public revision checks all had the expected results. External checks independently observed the exact HTTPS redirect, HSTS max-age 63072000 and a Cloudflare MISS-to-HIT transition for the stylesheet. On September 10 operator screenshots showed active rule grela-expensive-public-api with a 20 requests per IP/10 seconds edge budget and a 10-second block covering `/api/export/`; the operator declares its zone as grela.dev, while behavioral acceptance is not yet verified. The runtime command output was not pasted, so those container settings remain operator-declared rather than a fresh host audit.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | September 6 GitHub API returned no rulesets or environments. |
| Quality CI | Partial | Quality 34241221870 for f1c14ebb includes .NET build/tests, exact-proxy negative-boundary coverage and final-image scanning; browser/export edge cases remain. |
| Immutable release | Complete | CI source and operator production evidence identify the full revision and immutable GHCR digest; manual deployment is proven. |
| Deployment access | Partial | The legacy host account/launcher were removed. Private platform access exists; automated deployment credentials and external legacy credential revocation remain unverified. |
| Network, TLS and client identity | Partial | Public HTTPS, exact redirect and scoped HSTS were externally observed through dedicated Tunnel/Traefik ingress. Exact proxy trust and spoof rejection are source/CI tested and deployed per operator confirmation; live Inventory IP echo and final direct-origin readback remain. |
| Abuse protection | Partial | The 30/min application export limiter uses identity reconstructed only through exact known proxies. Active Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone gives `/api/export/` a 20 requests per IP/10-second threshold and 10-second block; behavior plus format/concurrency and proxy limits remain unverified. |
| Runtime safety | Partial | Non-root, capability drop, init and CPU/RAM limits observed; parser exception and remaining effective controls documented. |
| Readiness and preflight | Partial | Image HEALTHCHECK and positive internal/public readiness are observed; candidate failure and critical-path preflight still need verification. |
| Atomic promotion and rollback | Partial | Coolify deployment succeeded; no evidence of tested blue-green or automatic recovery after public smoke failure. |
| Coordination and retention | Partial | Manual release succeeded; capacity serialization, automated CD and retention/recovery behavior are not yet accepted. |
| Observability | Missing | The required complete implementation was not found in the audited inventory generator source. |
| Web identity | Unverified | Not assessed during the deployment reconciliation; verify static assets and browser behavior. |

### Remaining and active tasks

#### Finish UI and export safeguards

**Implementation · In progress · 80% · difficulty 3/5 · 2–4 h**

The prior CSS correction was committed (83e32db). Source at f1c14ebb retains a 30/min export policy with hardened client partitioning; per-format body/row/concurrency safeguards remain work.

#### Expand export and browser coverage

**Quality · In progress · 80% · difficulty 3/5 · 3–5 h**

Quality 34241221870 passed for f1c14ebb. Integration tests cover independent two-hop forwarded clients and spoof rejection from an unknown direct peer; browser/export edge cases remain.

#### Enable ruleset and required Quality checks

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

September 6 GitHub API returned no rulesets or environments. Required pre-merge Quality and production environment remain to configure.

#### Document the Coolify migration and known limitations

**Documentation · Done · 100% · difficulty 2/5 · 0–0 h**

September 9: private ingress evidence, the public Coolify checklist and normalized project status were reconciled; unverified runtime controls remain explicit.

#### Enable DNS, TLS and three-layer limits

**Delivery · In progress · 70% · difficulty 3/5 · 3–5 h**

Public HTTPS works through the Tunnel/Traefik path. Exact HTTPS redirect, scoped HSTS and working Cloudflare asset cache were externally observed September 9. Exact-proxy source/CI tests and operator-confirmed runtime deployment passed. Operator screenshots on September 10 showed active first-position Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone: over 20 matching requests per IP in 10 seconds blocks export paths for 10 seconds; load behavior, proxy and cost-specific bounds remain.

#### Publish and deploy an image by digest

**Delivery · Done · 100% · difficulty 3/5 · 0–0 h**

Quality produced immutable digest 0d112419 for f1c14ebb; the operator reported matching Coolify image, runtime variable, healthy state and public revision after manual deployment. Automatic CD is tracked separately.

#### Implement readiness, blue-green and rollback

**Delivery · In progress · 30% · difficulty 4/5 · 3–5 h**

Image readiness and successful Coolify rolling deployment observed. Unhealthy-candidate behavior, shared limiter state during overlap, public-smoke rollback and data-safe recovery still require tests.

#### Connect the service to central monitoring

**Delivery · Planned · 0% · difficulty 3/5 · 2–4 h**

No cross-application metrics, deployment alerts or 429 visibility were verified.

#### Automate promotion of the CI-tested digest

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Manual digest deployment is proven; CI-to-Coolify authentication, exact-digest submission, status polling, serialization and retention still need implementation and verification.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 50% · difficulty 3/5 · 2–4 h**

Operator inspect confirms non-root, cap-drop ALL, init, 1 CPU and 512 MiB. Coolify 4.3.14 security-opt parsing failed; further hardening was deferred. PID/log limits and final security/read-only/tmpfs settings need verification.

#### Verify favicon, metadata and accessible preview

**Documentation · Planned · 0% · difficulty 2/5 · 1–2 h**

A public health response does not verify the favicon, licensing, metadata, accessibility or screenshot; complete a browser/static-asset check.

### Architecture decisions

- Keep the local-first stateless architecture.
- Use per-format export limits plus body, row and concurrency caps.
- The project follows the v2 standard profile: vps-web.
- Use prebuilt GHCR digests with Coolify/Traefik/Tunnel. Manual production success does not establish automatic CD, trusted client IP or rollback.
- Temporarily omit no-new-privileges from Custom Docker Options due to the reproduced 4.3.14 parser issue; verify effective settings and revisit via reviewed Compose or upgrade.

## Polski

### Cel i aktualny stan

Lokalny edytor inwentarza z serwerowym generowaniem DOCX, CSV i HTML.

Uzgodnienie z 10 września dodaje aktywną regułę Cloudflare edge per IP dla eksportu w zadeklarowanej przez operatora strefie grela.dev. Test zachowania pozostaje nieznany; limity per format/współbieżności, proxy, automatyczne CD i rollback są niepełne. Procenty i godziny to estymacje, nie pomiary.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/inventory-generator` @ `f1c14ebb6dcbd5b5b04274558e661e573e1e42d9`
- **Stan źródła:** Commit f1c14ebb was created from a clean main baseline; only the forwarded-header implementation and its integration tests changed, and local plus CI tests passed.
- **Testy i CI:** GitHub Quality 34241221870 succeeded for f1c14ebb6dcbd5b5b04274558e661e573e1e42d9: restore/build/tests, image build and push, fixable HIGH/CRITICAL Trivy gate, SBOM/provenance and attestation passed.
- **Produkcja:** On September 9 the operator reported a successful Coolify redeploy of digest 0d112419 with runtime-only exact proxy configuration; selective image, environment, health and public revision checks all had the expected results. External checks independently observed the exact HTTPS redirect, HSTS max-age 63072000 and a Cloudflare MISS-to-HIT transition for the stylesheet. On September 10 operator screenshots showed active rule grela-expensive-public-api with a 20 requests per IP/10 seconds edge budget and a 10-second block covering `/api/export/`; the operator declares its zone as grela.dev, while behavioral acceptance is not yet verified. The runtime command output was not pasted, so those container settings remain operator-declared rather than a fresh host audit.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | API GitHub 6 września nie zwróciło rulesetów ani środowisk. |
| Quality CI | Częściowe | Quality 34241221870 dla f1c14ebb obejmuje build/testy .NET, negatywne testy granicy proxy i skan obrazu; pozostają przypadki przeglądarki/eksportu. |
| Niezmienne wydanie | Gotowe | Źródło CI i wyniki produkcji od operatora wskazują pełną rewizję oraz digest GHCR; wdrożenie ręczne potwierdzone. |
| Dostęp wdrożeniowy | Częściowe | Usunięto stare konto/launcher. Istnieje prywatny dostęp platformy; poświadczenia automatycznego CD i wycofanie starych uprawnień zewnętrznych wymagają weryfikacji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny HTTPS, dokładne przekierowanie i ograniczony HSTS potwierdzono zewnętrznie przez dedykowany ingress Tunnel/Traefik. Dokładne zaufanie proxy i spoofing przetestowano w źródle/CI oraz wdrożono według operatora; pozostaje test IP Inventory na żywo i końcowy odczyt originu. |
| Ochrona przed nadużyciami | Częściowe | Aplikacyjny limiter eksportu 30/min używa tożsamości odtworzonej tylko przez dokładnie znane proxy. Aktywna reguła Cloudflare grela-expensive-public-api w zadeklarowanej strefie grela.dev daje `/api/export/` próg 20 żądań per IP/10 s i blokadę 10 s; zachowanie oraz limity formatu/współbieżności i proxy pozostają niezweryfikowane. |
| Bezpieczeństwo runtime | Częściowe | Potwierdzone non-root, cap-drop, init i CPU/RAM; zapisano wyjątek parsera i brakujące odczyty. |
| Readiness i preflight | Częściowe | Potwierdzone HEALTHCHECK obrazu oraz wewnętrzny/publiczny readiness; awaria kandydata i preflight krytycznych ścieżek wymagają weryfikacji. |
| Atomowa promocja i rollback | Częściowe | Deployment Coolify przeszedł; brak dowodu przetestowanego blue-green lub automatycznego rollbacku po błędzie publicznego smoke. |
| Koordynacja i retencja | Częściowe | Ręczne wydanie przeszło; serializacja pojemności, automatyczne CD i zachowanie retencji/odzyskiwania nie zostały jeszcze odebrane. |
| Obserwowalność | Brak | W audytowanym źródle projektu inventory generator nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Niezweryfikowane | Nie sprawdzano w uzgodnieniu deploymentu; potrzebna kontrola plików statycznych i przeglądarki. |

### Zadania pozostałe i bieżące

#### Dokończyć UI i zabezpieczenia eksportu

**Implementacja · W toku · 80% · trudność 3/5 · 2–4 h**

The prior CSS correction was committed (83e32db). Source at f1c14ebb retains a 30/min export policy with hardened client partitioning; per-format body/row/concurrency safeguards remain work.

#### Rozbudować testy eksportu i przeglądarki

**Jakość · W toku · 80% · trudność 3/5 · 3–5 h**

Quality 34241221870 passed for f1c14ebb. Integration tests cover independent two-hop forwarded clients and spoof rejection from an unknown direct peer; browser/export edge cases remain.

#### Włączyć ruleset i wymagane Quality

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

September 6 GitHub API returned no rulesets or environments. Required pre-merge Quality and production environment remain to configure.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

September 9: private ingress evidence, the public Coolify checklist and normalized project status were reconciled; unverified runtime controls remain explicit.

#### Uruchomić DNS, TLS i trzy warstwy limitów

**Wdrożenie · W toku · 70% · trudność 3/5 · 3–5 h**

Public HTTPS works through the Tunnel/Traefik path. Exact HTTPS redirect, scoped HSTS and working Cloudflare asset cache were externally observed September 9. Exact-proxy source/CI tests and operator-confirmed runtime deployment passed. Operator screenshots on September 10 showed active first-position Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone: over 20 matching requests per IP in 10 seconds blocks export paths for 10 seconds; load behavior, proxy and cost-specific bounds remain.

#### Publikować i wdrażać obraz po digestcie

**Wdrożenie · Gotowe · 100% · trudność 3/5 · 0–0 h**

Quality produced immutable digest 0d112419 for f1c14ebb; the operator reported matching Coolify image, runtime variable, healthy state and public revision after manual deployment. Automatic CD is tracked separately.

#### Wdrożyć readiness, blue-green i rollback

**Wdrożenie · W toku · 30% · trudność 4/5 · 3–5 h**

Image readiness and successful Coolify rolling deployment observed. Unhealthy-candidate behavior, shared limiter state during overlap, public-smoke rollback and data-safe recovery still require tests.

#### Podłączyć usługę do centralnego monitoringu

**Wdrożenie · Planowane · 0% · trudność 3/5 · 2–4 h**

No cross-application metrics, deployment alerts or 429 visibility were verified.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Manual digest deployment is proven; CI-to-Coolify authentication, exact-digest submission, status polling, serialization and retention still need implementation and verification.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 50% · trudność 3/5 · 2–4 h**

Operator inspect confirms non-root, cap-drop ALL, init, 1 CPU and 512 MiB. Coolify 4.3.14 security-opt parsing failed; further hardening was deferred. PID/log limits and final security/read-only/tmpfs settings need verification.

#### Zweryfikować favicon, metadane i dostępny podgląd

**Dokumentacja · Planowane · 0% · trudność 2/5 · 1–2 h**

A public health response does not verify the favicon, licensing, metadata, accessibility or screenshot; complete a browser/static-asset check.

### Decyzje architektoniczne

- Zachować bezstanową architekturę local-first.
- Stosować limity per format oraz limity body, rekordów i współbieżności.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
