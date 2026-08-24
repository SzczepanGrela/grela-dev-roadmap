# Flatfinder — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **43%**  
Forecast / prognoza: **2027-03-05–2027-06-09**, 160–240 h, low confidence / niska pewność

## English

### Purpose and current state

Flatfinder combines property scraping, backend processing and model/training work. The backend and data pipeline are substantial, but the frontend is still a placeholder and deployment is a stub. The last two CI runs were red; their retained logs were no longer available (HTTP 410), so the root failure must be reproduced. No license or public hostname is ready.

### Completed and verified

- Significant scraper, backend and training code exists.
- The project has CI definitions and a non-trivial technical foundation.
- Repository and workflow state were audited without changing its dirty or generated content.

### Remaining work and known issues

- Reproduce current CI locally or in a fresh run and repair the actual failures.
- Remove the tracked local-only `.claude/settings.local.json` from version control and document safe local configuration; inspect history before public release.
- Add a license only after checking rights to training data, listing data and third-party assets.
- Replace the frontend placeholder with a scoped usable interface.
- Define lawful data-source terms, robots/politeness behavior, retention, deletion and provenance.
- Bound scraper concurrency, apply per-source delay/jitter/backoff and respect provider-specific constraints.
- Separate public UI/API limits from scraper job quotas and administrative training operations.
- Add a durable job queue, idempotency, retry limits and observability.
- Package services, add health/readiness and configure the future `flatfinder.grela.dev` route.
- Design schema-compatible preflight/rollback and eventual blue-green deployment.
- Add end-to-end tests using stable fixtures instead of depending on live listing pages.

### Decisions

Flatfinder gets a specialized policy: per-source crawl budgets and concurrency are more important than a single HTTP requests-per-minute number. Public endpoints still use Cloudflare/NPM/application layers, while workers use queues, provider quotas and backpressure. The forecast excludes legal approval delays and therefore remains low confidence.

## Polski

### Cel i stan bieżący

Flatfinder łączy scraping ofert, backend oraz trening modeli. Backend i pipeline danych są rozbudowane, ale frontend pozostaje placeholderem, a wdrożenie stubem. Dwa ostatnie CI były czerwone; logi wygasły (HTTP 410), więc błąd trzeba odtworzyć. Brak licencji i gotowej domeny.

### Wykonane i zweryfikowane

- Istnieje znaczący kod scrapera, backendu i treningu.
- Projekt ma definicje CI i rozbudowany fundament techniczny.
- Stan repozytorium sprawdzono bez modyfikowania lokalnych treści.

### Do zrobienia i znane problemy

- Odtworzyć aktualne CI i naprawić rzeczywiste przyczyny błędów.
- Usunąć z wersjonowania lokalny `.claude/settings.local.json`, opisać konfigurację i sprawdzić historię.
- Dodać licencję dopiero po weryfikacji praw do danych i zasobów.
- Zastąpić placeholder frontendu użytecznym, ograniczonym zakresem UI.
- Ustalić zasady źródeł, robots/politeness, retencję, usuwanie i pochodzenie danych.
- Ograniczyć współbieżność scrapera oraz dodać opóźnienia, jitter i backoff per źródło.
- Oddzielić limity publicznego API od quota zadań scrapera i treningu.
- Dodać trwałą kolejkę, idempotencję, ograniczone retry i obserwowalność.
- Spakować usługi, dodać health/readiness i domenę.
- Zaprojektować preflight/rollback oraz docelowe blue-green.
- Dodać E2E na stabilnych fixture'ach.

### Decyzje

Najważniejsze są budżety i współbieżność per źródło, nie jeden wspólny limit HTTP. Publiczne endpointy użyją trzech warstw, a workery kolejek, quota i backpressure. Prognoza nie obejmuje ewentualnych opóźnień prawnych.

