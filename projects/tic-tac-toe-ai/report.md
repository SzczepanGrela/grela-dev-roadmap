# Tic-Tac-Toe AI — status report / raport stanu

Audit date / data audytu: **2026-09-10**<br>
Estimated completion / szacowane ukończenie: **83%**<br>
Forecast / prognoza: **2026-10-08–2026-11-02**, 17–30 h, medium confidence / pewność: medium

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Interactive Tic-Tac-Toe laboratory for classic, reinforcement-learning and ONNX agents.

September 10 reconciliation adds the operator-observed active per-IP Cloudflare edge rule in the operator-declared grela.dev zone. Behavioral acceptance remains unknown; proxy limits, remaining runtime fields, automatic CD and rollback tests remain incomplete. Percentages and hours are planning estimates, not measurements.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `f1a924b6b53d393c5e256bd4e2a727c5e16ed35b`
- **Source state:** Clean local worktree at the revision returned by the operator-supplied production health check; scope: delivery/configuration reconciliation.
- **Tests and CI:** GitHub API September 6: Quality 33940262401 successful for f1a924b6b53d393c5e256bd4e2a727c5e16ed35b; active Protect main ruleset, no environment returned.
- **Production:** September 5–10 evidence: public health returns eight agents ready at revision f1a924b6b53d393c5e256bd4e2a727c5e16ed35b from the immutable Coolify container. Runtime exact proxy peers were configured; an external request resolved to the actual client IP and a forged X-Forwarded-For value did not replace it. Cloudflare returns the exact HTTPS redirect and HSTS max-age 63072000. Operator screenshots show active rule grela-expensive-public-api with a 20 requests per IP/10 seconds edge budget and a 10-second block for selected move/match/export paths; the operator declares its zone as grela.dev, while behavioral acceptance is not yet verified.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Active Protect main ruleset observed; environment absent and required-check enforcement not re-read. |
| Quality CI | Complete | Quality 33940262401 succeeded for the deployed revision; verified via GitHub API September 6. |
| Immutable release | Complete | CI source and operator production evidence identify the full revision and immutable GHCR digest; manual deployment is proven. |
| Deployment access | Partial | The legacy host account/launcher were removed. Private platform access exists; automated deployment credentials and external legacy credential revocation remain unverified. |
| Network, TLS and client identity | Partial | Public HTTPS, exact redirect, scoped HSTS, exact trusted peers, canonical client IP and forged-header rejection passed through the dedicated Tunnel/Traefik path; final direct-origin readback remains operator-declared. |
| Abuse protection | Partial | The weighted in-process limiter receives verified client identity. Active Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone has a 20 requests per IP/10-second threshold and 10-second block for move/match/export paths; behavior, proxy limits and shared state across overlapping replicas remain unverified. |
| Runtime safety | Partial | Non-root, capability drop, init and CPU/RAM limits observed; parser exception and remaining effective controls documented. |
| Readiness and preflight | Partial | Image HEALTHCHECK and positive internal/public readiness are observed; candidate failure and critical-path preflight still need verification. |
| Atomic promotion and rollback | Partial | Coolify deployment succeeded; no evidence of tested blue-green or automatic recovery after public smoke failure. |
| Coordination and retention | Partial | Manual release succeeded; capacity serialization, automated CD and retention/recovery behavior are not yet accepted. |
| Observability | Missing | The required complete implementation was not found in the audited tic tac toe ai source. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Ship and verify the current fixes

**Implementation · Done · 100% · difficulty 2/5 · 0–0 h**

Reset, scoreboard, weighted token bucket, Retry-After, stale-response protection and trusted-proxy changes were deployed at 69083b6.

#### Keep backend and browser coverage green

**Quality · Done · 100% · difficulty 2/5 · 0–0 h**

Quality 33940262401 successful for deployed revision f1a924b6b53d393c5e256bd4e2a727c5e16ed35b (September 6 API verification).

#### Enable ruleset and production environment

**Quality · In progress · 60% · difficulty 2/5 · 1–2 h**

September 6 API confirms active Protect main ruleset; no GitHub Environment returned. Exact required-check enforcement still needs confirmation.

#### Document the Coolify migration and known limitations

**Documentation · Done · 100% · difficulty 2/5 · 0–0 h**

September 6: private infrastructure runbook, public Coolify checklist and normalized project status reconciled with dated evidence; unverified controls are explicitly listed.

#### Verify Tunnel/Traefik identity and edge controls

**Delivery · In progress · 80% · difficulty 3/5 · 2–4 h**

Public health works through dedicated Tunnel/Traefik ingress. Runtime exact-peer configuration, real client-IP propagation and forged X-Forwarded-For rejection passed on September 8. Exact HTTPS redirect and scoped HSTS were externally observed September 9. Operator screenshots on September 10 showed active first-position Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone: over 20 matching requests per IP in 10 seconds blocks move/match/export paths for 10 seconds; load behavior and final direct-origin readback remain.

#### Build once in CI and deploy a GHCR digest

**Delivery · Done · 100% · difficulty 4/5 · 0–0 h**

Operator inspect and public health match the immutable GHCR release at f1a924b6b53d393c5e256bd4e2a727c5e16ed35b; manual Coolify deployment succeeded. Automatic CD is tracked separately.

#### Verify promotion/rollback and share limiter state

**Delivery · In progress · 25% · difficulty 4/5 · 6–10 h**

Health and manual digest deployment observed. Limiter state is process-local; shared state during replica overlap, failed candidate handling, blue-green and automatic public-smoke rollback remain.

#### Add 429, latency and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

#### Automate promotion of the CI-tested digest

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Manual digest deployment is proven; CI-to-Coolify authentication, exact-digest submission, status polling, serialization and retention still need implementation and verification.

#### Verify runtime settings and resolve parser exceptions

**Delivery · In progress · 50% · difficulty 3/5 · 2–4 h**

Operator inspect confirms non-root, cap-drop ALL, init, 1 CPU and 512 MiB. Coolify 4.3.14 security-opt parsing failed; further hardening was deferred. PID/log limits and final security/read-only/tmpfs settings need verification.

### Architecture decisions

- Moves use a 30/min token bucket with burst 10; series consume tokens by requested game count.
- The project follows the v2 standard profile: vps-web.
- Use prebuilt GHCR digests with Coolify/Traefik/Tunnel. Manual production success does not establish automatic CD, trusted client IP or rollback.
- Temporarily omit no-new-privileges from Custom Docker Options due to the reproduced 4.3.14 parser issue; verify effective settings and revisit via reviewed Compose or upgrade.

## Polski

### Cel i aktualny stan

Interaktywne laboratorium kółka i krzyżyka dla agentów klasycznych, RL i ONNX.

Uzgodnienie z 10 września dodaje aktywną regułę Cloudflare edge per IP w zadeklarowanej przez operatora strefie grela.dev. Test zachowania pozostaje nieznany; limity proxy, pozostałe pola runtime, automatyczne CD i rollback są niepełne. Procenty i godziny to estymacje, nie pomiary.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/tic-tac-toe-ai` @ `f1a924b6b53d393c5e256bd4e2a727c5e16ed35b`
- **Stan źródła:** Clean local worktree at the revision returned by the operator-supplied production health check; scope: delivery/configuration reconciliation.
- **Testy i CI:** GitHub API September 6: Quality 33940262401 successful for f1a924b6b53d393c5e256bd4e2a727c5e16ed35b; active Protect main ruleset, no environment returned.
- **Produkcja:** September 5–10 evidence: public health returns eight agents ready at revision f1a924b6b53d393c5e256bd4e2a727c5e16ed35b from the immutable Coolify container. Runtime exact proxy peers were configured; an external request resolved to the actual client IP and a forged X-Forwarded-For value did not replace it. Cloudflare returns the exact HTTPS redirect and HSTS max-age 63072000. Operator screenshots show active rule grela-expensive-public-api with a 20 requests per IP/10 seconds edge budget and a 10-second block for selected move/match/export paths; the operator declares its zone as grela.dev, while behavioral acceptance is not yet verified.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Potwierdzono aktywny Protect main; brak środowiska i ponownego odczytu szczegółów wymaganych kontroli. |
| Quality CI | Gotowe | Quality 33940262401 przeszedł dla wdrożonej rewizji; potwierdzone API GitHub 6 września. |
| Niezmienne wydanie | Gotowe | Źródło CI i wyniki produkcji od operatora wskazują pełną rewizję oraz digest GHCR; wdrożenie ręczne potwierdzone. |
| Dostęp wdrożeniowy | Częściowe | Usunięto stare konto/launcher. Istnieje prywatny dostęp platformy; poświadczenia automatycznego CD i wycofanie starych uprawnień zewnętrznych wymagają weryfikacji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Publiczny HTTPS, dokładne przekierowanie, ograniczony HSTS, dokładne zaufane proxy, właściwe IP klienta i odrzucenie fałszywego nagłówka przeszły przez dedykowaną ścieżkę Tunnel/Traefik; końcowy odczyt originu pozostaje deklaracją operatora. |
| Ochrona przed nadużyciami | Częściowe | Ważony limiter procesu otrzymuje zweryfikowane IP klienta. Aktywna reguła Cloudflare grela-expensive-public-api w zadeklarowanej strefie grela.dev ma próg 20 żądań per IP/10 s i blokadę 10 s dla ścieżek ruchu/meczu/eksportu; zachowanie, limity proxy oraz wspólny stan nakładających się replik pozostają niezweryfikowane. |
| Bezpieczeństwo runtime | Częściowe | Potwierdzone non-root, cap-drop, init i CPU/RAM; zapisano wyjątek parsera i brakujące odczyty. |
| Readiness i preflight | Częściowe | Potwierdzone HEALTHCHECK obrazu oraz wewnętrzny/publiczny readiness; awaria kandydata i preflight krytycznych ścieżek wymagają weryfikacji. |
| Atomowa promocja i rollback | Częściowe | Deployment Coolify przeszedł; brak dowodu przetestowanego blue-green lub automatycznego rollbacku po błędzie publicznego smoke. |
| Koordynacja i retencja | Częściowe | Ręczne wydanie przeszło; serializacja pojemności, automatyczne CD i zachowanie retencji/odzyskiwania nie zostały jeszcze odebrane. |
| Obserwowalność | Brak | W audytowanym źródle projektu tic tac toe ai nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Wypchnąć i zweryfikować bieżące poprawki

**Implementacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

Reset, scoreboard, weighted token bucket, Retry-After, stale-response protection and trusted-proxy changes were deployed at 69083b6.

#### Utrzymać pełne testy backendu i przeglądarki

**Jakość · Gotowe · 100% · trudność 2/5 · 0–0 h**

Quality 33940262401 successful for deployed revision f1a924b6b53d393c5e256bd4e2a727c5e16ed35b (September 6 API verification).

#### Włączyć ruleset i środowisko production

**Jakość · W toku · 60% · trudność 2/5 · 1–2 h**

September 6 API confirms active Protect main ruleset; no GitHub Environment returned. Exact required-check enforcement still needs confirmation.

#### Udokumentować migrację Coolify i znane ograniczenia

**Dokumentacja · Gotowe · 100% · trudność 2/5 · 0–0 h**

September 6: private infrastructure runbook, public Coolify checklist and normalized project status reconciled with dated evidence; unverified controls are explicitly listed.

#### Zweryfikować tożsamość i ochronę przez Tunnel/Traefik

**Wdrożenie · W toku · 80% · trudność 3/5 · 2–4 h**

Public health works through dedicated Tunnel/Traefik ingress. Runtime exact-peer configuration, real client-IP propagation and forged X-Forwarded-For rejection passed on September 8. Exact HTTPS redirect and scoped HSTS were externally observed September 9. Operator screenshots on September 10 showed active first-position Cloudflare rule grela-expensive-public-api in the operator-declared grela.dev zone: over 20 matching requests per IP in 10 seconds blocks move/match/export paths for 10 seconds; load behavior and final direct-origin readback remain.

#### Budować raz w CI i wdrażać digest GHCR

**Wdrożenie · Gotowe · 100% · trudność 4/5 · 0–0 h**

Operator inspect and public health match the immutable GHCR release at f1a924b6b53d393c5e256bd4e2a727c5e16ed35b; manual Coolify deployment succeeded. Automatic CD is tracked separately.

#### Zweryfikować promocję/rollback i współdzielić stan limitera

**Wdrożenie · W toku · 25% · trudność 4/5 · 6–10 h**

Health and manual digest deployment observed. Limiter state is process-local; shared state during replica overlap, failed candidate handling, blue-green and automatic public-smoke rollback remain.

#### Dodać metryki 429, opóźnień i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

No central metrics or alerts cover rate rejections, AI saturation and rollback failures.

#### Zautomatyzować promocję digestu sprawdzonego w CI

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Manual digest deployment is proven; CI-to-Coolify authentication, exact-digest submission, status polling, serialization and retention still need implementation and verification.

#### Zweryfikować runtime i rozwiązać wyjątki parsera

**Wdrożenie · W toku · 50% · trudność 3/5 · 2–4 h**

Operator inspect confirms non-root, cap-drop ALL, init, 1 CPU and 512 MiB. Coolify 4.3.14 security-opt parsing failed; further hardening was deferred. PID/log limits and final security/read-only/tmpfs settings need verification.

### Decyzje architektoniczne

- Ruchy używają token bucket 30/min z burstem 10; serie zużywają tokeny według liczby gier.
- Projekt podlega profilowi standardu v2: vps-web.
- Używać digestów GHCR z Coolify/Traefik/Tunnel. Sukces ręcznego deployu nie oznacza automatycznego CD, zaufanego IP ani rollbacku.
- Czasowo pominąć no-new-privileges w Custom Docker Options z powodu odtworzonego błędu 4.3.14; sprawdzić efektywne ustawienia i wrócić do rozwiązania przez Compose lub aktualizację.
