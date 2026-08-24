# Smakosz Web App — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **78%**  
Forecast / prognoza: **2026-11-19–2027-01-02**, 40–64 h, low confidence / niska pewność

## English

### Purpose and current state

Smakosz is a mature multi-service food application with API, client, orchestrator, PostgreSQL and monitoring components already running on the VPS. The repository has extensive implementation and tests and the latest CI is green. Public portfolio readiness is held back by missing repository documentation/licensing and an unconfirmed `smakosz.grela.dev` DNS route.

### Completed and verified

- The core multi-service architecture and substantial automated test suite exist.
- API, client, orchestrator, PostgreSQL and observability containers are running.
- The latest CI run passed.
- Application rate limiting and forwarded-header handling are already present.
- The project demonstrates more production depth than a simple portfolio demo.

### Remaining work and known issues

- Add a public README covering architecture, local setup, migrations, tests and deployment.
- Add an explicit license after confirming all included assets/dependencies permit it.
- Configure and externally verify `smakosz.grela.dev`, NPM and HTTPS.
- Audit trusted proxy ranges and the real client-IP path.
- Classify limits separately for anonymous reads, authentication, writes and expensive recommendations/search.
- Ensure shared limiter state for multiple API instances; Redis is preferred before blue-green.
- Add candidate preflight/rollback and later blue-green routing for independently deployable services.
- Add focused browser smoke tests and a production screenshot.
- Document backup/restore and operational ownership of database migrations.

### Decisions

Existing app-level limits are retained but must be reviewed as part of a three-layer policy: Cloudflare for broad abuse, NPM for route-level protection and application code for identity/business/compute limits. Stateful services are not duplicated casually during blue-green; schema compatibility and migration order must be designed explicitly.

## Polski

### Cel i stan bieżący

Smakosz to dojrzała wielousługowa aplikacja gastronomiczna z API, klientem, orchestratorem, PostgreSQL i monitoringiem działającymi na VPS. Repozytorium zawiera rozbudowaną implementację i testy, a ostatnie CI jest zielone. Gotowość portfolio ogranicza brak publicznego README/licencji oraz niepotwierdzona domena `smakosz.grela.dev`.

### Wykonane i zweryfikowane

- Istnieje wielousługowa architektura i duży zestaw testów.
- Kontenery API, klienta, orchestratora, bazy i obserwowalności działają.
- Najnowsze CI przeszło.
- W aplikacji są już rate limiter i obsługa forwarded headers.
- Projekt ma większą głębię produkcyjną niż prosty demo projekt.

### Do zrobienia i znane problemy

- Dodać publiczne README: architektura, uruchomienie, migracje, testy i deploy.
- Dodać licencję po sprawdzeniu praw do wszystkich zasobów.
- Skonfigurować i zewnętrznie sprawdzić domenę, NPM i HTTPS.
- Zrewidować trusted proxies i ścieżkę adresu klienta.
- Rozdzielić limity odczytów, logowania, zapisów oraz kosztownych rekomendacji/wyszukiwania.
- Zapewnić wspólny stan limitera, najlepiej Redis, przed wieloma instancjami.
- Dodać preflight/rollback i docelowe blue-green dla usług.
- Dodać browser smoke, screenshot oraz procedurę backup/restore i migracji.

### Decyzje

Istniejące limity aplikacyjne pozostają, ale mają tworzyć trzy warstwy z Cloudflare i NPM. Usług stanowych nie duplikuje się bez projektu kompatybilności schematu i kolejności migracji.

