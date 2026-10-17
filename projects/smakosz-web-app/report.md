# Smakosz Web App — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **38%**<br>
Forecast / prognoza: **2026-10-21–2026-11-23**, 56–94 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Restaurant and dish discovery platform with moderation, recommendations and ML operations.

The project is technically mature, but public documentation, canonical hosting metadata, release integrity and ownership of the existing observability stack require work. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/SmakoszWebApp` @ `7d75ca159441b6f5f9f335b84f8fbe27361c8fcc`
- **Source state:** clean public main shallow clone
- **Tests and CI:** Both public CI/CD workflows succeeded at 7d75ca1; no ruleset or GitHub environment exists.
- **Production:** smakosz.grela.dev did not resolve; running Smakosz containers were previously verified on the VPS under another/current address.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Partial | Both public CI/CD workflows succeeded at 7d75ca1; no ruleset or GitHub environment exists. |
| Immutable release | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Deployment access | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | smakosz.grela.dev did not resolve; running Smakosz containers were previously verified on the VPS under another/current address. |
| Abuse protection | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Runtime safety | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Coordination and retention | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Partial | smakosz web app has some mechanisms but does not yet satisfy the complete v2 control. |
| Web identity | Complete | The audit verified full implementation of web-identity. |

### Remaining and active tasks

#### Maintain the broad production feature set

**Implementation · In progress · 80% · difficulty 5/5 · 5–8 h**

The application is substantial and operational, with deferred product defects still recorded.

#### Expand security and distributed-behavior tests

**Quality · In progress · 65% · difficulty 5/5 · 8–12 h**

CI is green, but multi-slot, migration and singleton-worker failure modes need explicit tests.

#### Consolidate workflows and protect main

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Two deployment workflows remain and GitHub returned no ruleset or environment.

#### Add public README, license and runbook

**Documentation · In progress · 45% · difficulty 3/5 · 5–8 h**

GitHub reports no recognized license and the public operational architecture remains incomplete.

#### Replace expired Brevo API delivery with SMTP

**Implementation · Planned · 0% · difficulty 3/5 · 4–7 h**

Mail delivery is blocked by an expired API key and should move behind an SMTP sender abstraction.

#### Harden identity, proxy and runtime limits

**Delivery · In progress · 50% · difficulty 4/5 · 5–8 h**

Application limits and forwarded-header handling exist, but distributed state and outer policies need verification. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update.

#### Implement digests, readiness and safe blue-green

**Delivery · In progress · 30% · difficulty 5/5 · 14–24 h**

Current workflows use moving configuration and require immutable manifests, migration gates and real rollback.

#### Select and migrate the canonical domain

**Delivery · Planned · 0% · difficulty 3/5 · 4–7 h**

The planned smakosz.grela.dev hostname does not resolve and callbacks, cookies and old-domain redirects need migration.

#### Move monitoring to the shared VPS stack

**Delivery · Planned · 0% · difficulty 5/5 · 7–12 h**

Prometheus, Grafana, renderer and Node Exporter are still coupled to the Smakosz stack.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Use user identity for authenticated writes and IP only as a safety floor.
- Refresh/logout/me must not share the tight login policy.
- Deploy full-SHA release manifests and exact image digests; never production latest or moving main configuration.
- Blue-green applies to stateless client/API; PostgreSQL stays shared and Hangfire stays singleton or leader-locked.
- Use Brevo SMTP behind an email-sender abstraction and keep all relay credentials in environment secrets.
- Run one independent observability stack per VPS environment and preserve Smakosz dashboards, alerts and history during the staged migration.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.

## Polski

### Cel i aktualny stan

Platforma odkrywania restauracji i dań z moderacją, rekomendacjami i operacjami ML.

Projekt jest technicznie dojrzały, ale dokumentacja, metadane hostingu, spójność wydań i odpowiedzialność za istniejący stack obserwowalności wymagają pracy. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/SmakoszWebApp` @ `7d75ca159441b6f5f9f335b84f8fbe27361c8fcc`
- **Stan źródła:** clean public main shallow clone
- **Testy i CI:** Both public CI/CD workflows succeeded at 7d75ca1; no ruleset or GitHub environment exists.
- **Produkcja:** smakosz.grela.dev did not resolve; running Smakosz containers were previously verified on the VPS under another/current address.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Dostęp wdrożeniowy | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | Część publicznego HTTPS lub routingu działa, ale pełny zaufany łańcuch sieciowy nie został potwierdzony. |
| Ochrona przed nadużyciami | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Bezpieczeństwo runtime | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Koordynacja i retencja | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Częściowe | Projekt smakosz web app ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Tożsamość webowa | Gotowe | Audyt potwierdził pełną realizację kontroli „web-identity”. |

### Zadania pozostałe i bieżące

#### Utrzymać szeroki zestaw funkcji produkcyjnych

**Implementacja · W toku · 80% · trudność 5/5 · 5–8 h**

The application is substantial and operational, with deferred product defects still recorded.

#### Rozbudować testy bezpieczeństwa i zachowania rozproszonego

**Jakość · W toku · 65% · trudność 5/5 · 8–12 h**

CI is green, but multi-slot, migration and singleton-worker failure modes need explicit tests.

#### Scalić workflowy i chronić main

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Two deployment workflows remain and GitHub returned no ruleset or environment.

#### Dodać publiczny README, licencję i runbook

**Dokumentacja · W toku · 45% · trudność 3/5 · 5–8 h**

GitHub reports no recognized license and the public operational architecture remains incomplete.

#### Zastąpić wygasłe Brevo API wysyłką SMTP

**Implementacja · Planowane · 0% · trudność 3/5 · 4–7 h**

Mail delivery is blocked by an expired API key and should move behind an SMTP sender abstraction.

#### Wzmocnić limity tożsamości, proxy i runtime

**Wdrożenie · W toku · 50% · trudność 4/5 · 5–8 h**

Application limits and forwarded-header handling exist, but distributed state and outer policies need verification. Target revised September 6: implement the delivery step through Coolify using the shared checklist, an immutable GHCR digest and Traefik/Tunnel; preserve data and custom routes. Production migration not verified in this update.

#### Wdrożyć digests, readiness i bezpieczne blue-green

**Wdrożenie · W toku · 30% · trudność 5/5 · 14–24 h**

Current workflows use moving configuration and require immutable manifests, migration gates and real rollback.

#### Wybrać i zmigrować domenę kanoniczną

**Wdrożenie · Planowane · 0% · trudność 3/5 · 4–7 h**

The planned smakosz.grela.dev hostname does not resolve and callbacks, cookies and old-domain redirects need migration.

#### Wydzielić monitoring do wspólnego stacku VPS

**Wdrożenie · Planowane · 0% · trudność 5/5 · 7–12 h**

Prometheus, Grafana, renderer and Node Exporter are still coupled to the Smakosz stack.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Dla zapisów używać user ID, a IP jako dodatkowego bezpiecznika.
- Refresh/logout/me nie mogą dzielić ciasnego limitu logowania.
- Wdrażać manifest pełnego SHA i dokładne digests obrazów; nigdy produkcyjne latest ani konfigurację z ruchomego main.
- Blue-green dotyczy bezstanowych klienta/API; PostgreSQL pozostaje wspólny, a Hangfire singletonem lub używa leader locka.
- Użyć SMTP Brevo za abstrakcją nadawcy i trzymać wszystkie dane relayu w sekretach środowiska.
- Utrzymywać jeden niezależny stack obserwowalności na środowisko VPS oraz zachować dashboardy, alerty i historię Smakosza podczas migracji etapowej.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
