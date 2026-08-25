# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **43%**<br>
Forecast / prognoza: **2026-09-11–2026-09-24**, 46–75 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Security-sensitive findings are public at advisory level without exploit instructions.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `d1f1da4534b31f52815d4db82ed64b6f37ecf99f`
- **Source state:** local worktree with 70 changed paths and unpublished commits
- **Tests and CI:** Latest public CI/CD runs succeeded, but they do not cover the large local worktree; no ruleset or environment exists.
- **Production:** netfilmx.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Partial | Latest public CI/CD runs succeeded, but they do not cover the large local worktree; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited netfilmx movie catalog source. |
| Deployment access | Partial | netfilmx movie catalog has some mechanisms but does not yet satisfy the complete v2 control. |
| Network, TLS and client identity | Partial | netfilmx.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25. |
| Abuse protection | Missing | The required complete implementation was not found in the audited netfilmx movie catalog source. |
| Runtime safety | Partial | netfilmx movie catalog has some mechanisms but does not yet satisfy the complete v2 control. |
| Readiness and preflight | Partial | netfilmx movie catalog has some mechanisms but does not yet satisfy the complete v2 control. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited netfilmx movie catalog source. |
| Coordination and retention | Partial | netfilmx movie catalog has some mechanisms but does not yet satisfy the complete v2 control. |
| Observability | Missing | The required complete implementation was not found in the audited netfilmx movie catalog source. |
| Web identity | Missing | The required complete implementation was not found in the audited netfilmx movie catalog source. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 65% · difficulty 5/5 · 12–20 h**

Seventy changed paths include storage, FFmpeg, jobs and UI work that is not represented by public CI.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 55% · difficulty 4/5 · 10–16 h**

The public workflow is green, but local changes and deferred security work remain.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

GitHub returned no active ruleset or environment.

#### Align architecture and operations documentation

**Documentation · In progress · 60% · difficulty 3/5 · 3–5 h**

Documentation does not yet describe the complete dirty implementation or v2 delivery model.

#### Add login, upload and transcoding limits

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

No application rate-limit implementation was found; HLS requires bandwidth rather than low request limits.

#### Move build to GHCR and deploy by digest

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

The VPS currently rebuilds a local image and globally prunes Docker images.

#### Add readiness, stable gateway and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 6–10 h**

Health checks exist, but there is no candidate promotion, drain or public rollback smoke test.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Central monitoring and actionable deployment/transcoding alerts were not verified.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Znaleziska bezpieczeństwa są publiczne na poziomie advisory, bez instrukcji wykorzystania.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `d1f1da4534b31f52815d4db82ed64b6f37ecf99f`
- **Stan źródła:** local worktree with 70 changed paths and unpublished commits
- **Testy i CI:** Latest public CI/CD runs succeeded, but they do not cover the large local worktree; no ruleset or environment exists.
- **Produkcja:** netfilmx.grela.dev returned HTTPS 200 through Cloudflare on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Częściowe | Quality CI istnieje, ale nie obejmuje całego bieżącego stanu lub części wymaganych kontroli v2. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu netfilmx movie catalog nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Częściowe | Projekt netfilmx movie catalog ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Sieć, TLS i tożsamość klienta | Częściowe | Część publicznego HTTPS lub routingu działa, ale pełny zaufany łańcuch sieciowy nie został potwierdzony. |
| Ochrona przed nadużyciami | Brak | W audytowanym źródle projektu netfilmx movie catalog nie znaleziono wymaganej kompletnej implementacji. |
| Bezpieczeństwo runtime | Częściowe | Projekt netfilmx movie catalog ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Readiness i preflight | Częściowe | Projekt netfilmx movie catalog ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu netfilmx movie catalog nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Częściowe | Projekt netfilmx movie catalog ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |
| Obserwowalność | Brak | W audytowanym źródle projektu netfilmx movie catalog nie znaleziono wymaganej kompletnej implementacji. |
| Tożsamość webowa | Brak | W audytowanym źródle projektu netfilmx movie catalog nie znaleziono wymaganej kompletnej implementacji. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 65% · trudność 5/5 · 12–20 h**

Seventy changed paths include storage, FFmpeg, jobs and UI work that is not represented by public CI.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 55% · trudność 4/5 · 10–16 h**

The public workflow is green, but local changes and deferred security work remain.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

GitHub returned no active ruleset or environment.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 60% · trudność 3/5 · 3–5 h**

Documentation does not yet describe the complete dirty implementation or v2 delivery model.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

No application rate-limit implementation was found; HLS requires bandwidth rather than low request limits.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

The VPS currently rebuilds a local image and globally prunes Docker images.

#### Dodać readiness, stabilny gateway i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 6–10 h**

Health checks exist, but there is no candidate promotion, drain or public rollback smoke test.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Central monitoring and actionable deployment/transcoding alerts were not verified.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
