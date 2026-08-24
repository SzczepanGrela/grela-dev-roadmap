# Smakosz Web App — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **61%**<br>
Forecast / prognoza: **2026-11-19–2027-02-13**, 74–128 h, low confidence / niska pewność

## English

### Purpose and current state

Smakosz is a mature multi-service food application with API, client, orchestrator, PostgreSQL and monitoring components already running on the VPS. The repository has extensive implementation and tests and the latest CI is green. A deeper audit found that a green workflow does not currently guarantee release integrity: production uses mutable images/configuration, has no safe candidate promotion or automatic rollback, and transactional email is affected by an expired Brevo API key. The canonical replacement domain has not yet been selected.

### Completed and verified

- The core multi-service architecture and substantial automated test suite exist.
- API, client, orchestrator, PostgreSQL and observability containers are running.
- The latest CI run passed.
- Application rate limiting and forwarded-header handling are already present.
- The project demonstrates more production depth than a simple portfolio demo.
- GitHub Actions already builds application images and pushes them to GHCR, so the target fix can preserve off-server builds.
- The repository and the reported VPS runtime confirm four Smakosz-owned observability containers: Prometheus 3.5.1, Grafana 13.0.1, Grafana Image Renderer 3.12.9 and Node Exporter 1.9.1. All currently share `smakosz_network` with the application.
- Prometheus retains 30 days and currently scrapes Smakosz API, orchestrator, itself and the single host Node Exporter. Grafana provisions Prometheus dashboards plus Unified Alerting and already uses Brevo SMTP for notifications.
- No separate Alertmanager, cAdvisor, Loki, Promtail or Alloy service is defined in the current Compose file.

### Remaining work and known issues

- Add a public README covering architecture, local setup, migrations, tests and deployment.
- Add an explicit license after confirming all included assets/dependencies permit it.
- Repair release integrity: publish a manifest with full `CONFIG_SHA` and exact GHCR digests; deploy those digests instead of `latest`; stop downloading Compose, scripts and monitoring configuration from moving `main`.
- Consolidate the duplicate force-deploy workflow into the normal manual workflow input and serialize deployment both in GitHub and with real server-side `flock` locks.
- Add true preflight and blue-green promotion for the client and API. Start and verify the inactive slot, switch a stable router atomically, run an external HTTPS smoke test and automatically route back on failure. Never delete the checked candidate and recreate an unchecked production container.
- Keep Hangfire orchestrator singleton or protect it with a distributed leader lock and graceful drain. Keep PostgreSQL and monitoring shared rather than duplicating them with application slots.
- Move EF migrations out of application startup into a controlled, backed-up expand/contract step. Use `/health/ready`, including required dependencies, for promotion rather than `/health/live` alone.
- Remove global `docker image prune -f`, unconditional NPM restarts and zone-wide Cloudflare `purge_everything`; retain an application-scoped rollback image and invalidate only versioned or affected assets.
- Pin infrastructure images and update PostgreSQL/monitoring separately from application releases. Add CPU, memory and PID limits to every service.
- Select the new canonical domain, then migrate Cloudflare DNS, NPM/TLS, CORS, callbacks, cookie domain, PWA metadata and all generated email links. Keep the old hostname as a temporary redirect, verify HTTPS externally and retire it only after the transition window.
- Replace the expired Brevo API-key integration with Brevo SMTP behind an email-sender abstraction (for example MailKit). Store SMTP host, port, username, password and sender identity as environment secrets; revoke/remove obsolete API credentials.
- Queue transactional mail with bounded retry/backoff, idempotency and correlation IDs. Test account confirmation, password reset and resend flows without logging credentials or message tokens. Verify the sender domain plus SPF, DKIM and DMARC after the domain decision.
- Move Prometheus, Grafana, Grafana Image Renderer and Node Exporter out of the Smakosz Compose lifecycle into an independently deployed central observability stack and external `observability-network`.
- Preserve or safely migrate the existing `prometheus_data` and `grafana_data` volumes, provisioned dashboards, Unified Alerting rules and Brevo SMTP contact point. Update the Grafana sender/contact addresses during the canonical-domain migration.
- Perform a staged migration: snapshot/backup first; start parallel central candidates under new names; verify Smakosz metrics, dashboards and alert delivery; switch Grafana access; retain the old stack for rollback; remove observability services from Smakosz only after acceptance.
- Keep one Node Exporter for the VPS. Attach Prometheus only to the application networks it must scrape, label all targets by application/service/environment/instance and extend it to every hosted app. Consider one central cAdvisor for per-container CPU, memory and restart metrics after reviewing Docker access and resource cost.
- Reassess the current 256 MB Prometheus limit, 30-day retention and disk/cardinality budget before adding all applications. Keep Grafana and Prometheus private and deploy/update them independently from every application.
- Audit trusted proxy ranges and the real client-IP path.
- Classify limits separately for anonymous reads, authentication, writes and expensive recommendations/search.
- Ensure shared limiter state for multiple API instances; Redis is preferred before blue-green.
- Add focused browser smoke tests and a production screenshot.
- Document backup/restore and operational ownership of database migrations.

### Decisions

Existing app-level limits are retained but must be reviewed as part of a three-layer policy: Cloudflare for broad abuse, NPM for route-level protection and application code for identity/business/compute limits. Every release is identified by a full commit SHA and immutable image digests. Blue-green duplicates only safe stateless services; database migration compatibility and singleton background processing are explicit release gates. SMTP replaces direct Brevo API calls, but Brevo remains the relay provider and SMTP credentials remain secrets. Observability is VPS infrastructure, not a Smakosz subservice: one central stack monitors Smakosz and all other hosted applications without being restarted by their deployments.

## Polski

### Cel i stan bieżący

Smakosz to dojrzała wielousługowa aplikacja gastronomiczna z API, klientem, orchestratorem, PostgreSQL i monitoringiem działającymi na VPS. Repozytorium zawiera rozbudowaną implementację i testy, a ostatnie CI jest zielone. Dokładniejszy audyt wykazał jednak, że zielony workflow nie gwarantuje obecnie spójnego wydania: produkcja używa ruchomych obrazów/konfiguracji, nie ma bezpiecznej promocji kandydata ani automatycznego rollbacku, a e-maile transakcyjne nie działają poprawnie z powodu wygasłego klucza Brevo API. Nowa domena kanoniczna nie została jeszcze wybrana.

### Wykonane i zweryfikowane

- Istnieje wielousługowa architektura i duży zestaw testów.
- Kontenery API, klienta, orchestratora, bazy i obserwowalności działają.
- Najnowsze CI przeszło.
- W aplikacji są już rate limiter i obsługa forwarded headers.
- Projekt ma większą głębię produkcyjną niż prosty demo projekt.
- GitHub Actions już buduje obrazy aplikacji i wysyła je do GHCR, więc naprawa zachowa budowanie poza VPS.
- Repozytorium i podany stan VPS potwierdzają cztery kontenery obserwowalności należące do Smakosza: Prometheus 3.5.1, Grafana 13.0.1, Grafana Image Renderer 3.12.9 oraz Node Exporter 1.9.1. Wszystkie współdzielą obecnie `smakosz_network` z aplikacją.
- Prometheus przechowuje 30 dni danych i obecnie pobiera metryki Smakosz API, orchestratora, samego siebie oraz pojedynczego hostowego Node Exportera. Grafana provisionuje dashboardy Prometheusa i Unified Alerting oraz już używa SMTP Brevo do powiadomień.
- W aktualnym Compose nie ma osobnego Alertmanagera, cAdvisora, Loki, Promtail ani Alloy.

### Do zrobienia i znane problemy

- Dodać publiczne README: architektura, uruchomienie, migracje, testy i deploy.
- Dodać licencję po sprawdzeniu praw do wszystkich zasobów.
- Naprawić spójność release'u: publikować manifest z pełnym `CONFIG_SHA` i dokładnymi digestami GHCR; wdrażać digests zamiast `latest`; nie pobierać Compose, skryptów ani konfiguracji monitoringu z ruchomego `main`.
- Połączyć zduplikowany force-deploy z parametrem ręcznym zwykłego workflow oraz serializować deploy w GitHub i prawdziwymi blokadami `flock` na serwerze.
- Wdrożyć prawdziwy preflight i blue-green dla klienta oraz API: uruchomić nieaktywny slot, sprawdzić go, atomowo przełączyć stabilny router, wykonać zewnętrzny smoke HTTPS i automatycznie cofnąć routing przy błędzie. Nie usuwać sprawdzonego kandydata po to, by stworzyć niesprawdzony kontener produkcyjny.
- Utrzymać Hangfire orchestrator jako singleton albo zabezpieczyć go distributed leader lockiem i graceful drain. PostgreSQL i monitoring pozostają współdzielone, a nie dublowane razem ze slotami aplikacji.
- Przenieść migracje EF ze startu aplikacji do kontrolowanego kroku z backupem i strategią expand/contract. Do promocji używać `/health/ready` z wymaganymi zależnościami, nie tylko `/health/live`.
- Usunąć globalny `docker image prune -f`, bezwarunkowy restart NPM i strefowe Cloudflare `purge_everything`; zachować obraz rollbacku danej aplikacji i unieważniać tylko wersjonowane lub faktycznie zmienione zasoby.
- Przypiąć wersje/digests infrastruktury, a PostgreSQL i monitoring aktualizować osobno. Dodać limity CPU, RAM i PID do każdej usługi.
- Wybrać nową domenę kanoniczną, następnie zmigrować Cloudflare DNS, NPM/TLS, CORS, callbacki, cookie domain, metadane PWA i linki generowane w e-mailach. Stary hostname czasowo przekierowywać, zewnętrznie sprawdzić HTTPS i wycofać go dopiero po okresie przejściowym.
- Zastąpić integrację opartą na wygasłym kluczu Brevo API wysyłką przez SMTP Brevo za abstrakcją nadawcy (np. MailKit). Host, port, login, hasło i tożsamość nadawcy przechowywać jako sekrety środowiska; stare dane API wycofać/usunąć.
- Kolejkować maile transakcyjne z ograniczonym retry/backoff, idempotencją i correlation ID. Przetestować potwierdzenie konta, reset hasła i resend bez logowania poświadczeń ani tokenów wiadomości. Po wyborze domeny zweryfikować domenę nadawcy, SPF, DKIM i DMARC.
- Przenieść Prometheusa, Grafanę, Grafana Image Renderer i Node Exportera poza cykl życia Compose Smakosza do niezależnie wdrażanego centralnego stacku oraz zewnętrznej `observability-network`.
- Zachować lub bezpiecznie zmigrować istniejące wolumeny `prometheus_data` i `grafana_data`, provisionowane dashboardy, reguły Unified Alerting oraz contact point SMTP Brevo. Podczas migracji domeny zmienić też adres nadawcy i odbiorcy alertów Grafany.
- Wykonać migrację etapami: najpierw snapshot/backup; następnie równoległe centralne kontenery-kandydaci pod nowymi nazwami; sprawdzenie metryk Smakosza, dashboardów i dostarczenia alertu; przełączenie dostępu do Grafany; zachowanie starego stacku do rollbacku; usunięcie obserwowalności ze Smakosza dopiero po akceptacji.
- Utrzymywać jeden Node Exporter dla VPS. Prometheusa dołączać wyłącznie do sieci aplikacji, które ma scrapować, etykietować targety przez application/service/environment/instance i rozszerzyć monitoring na każdą hostowaną aplikację. Rozważyć jeden centralny cAdvisor dla CPU, RAM i restartów kontenerów po ocenie dostępu do Dockera oraz kosztu zasobów.
- Przed dodaniem wszystkich aplikacji ponownie dobrać obecny limit Prometheusa 256 MB, retencję 30 dni oraz budżet dysku/cardinality. Grafana i Prometheus pozostają prywatne i są wdrażane/aktualizowane niezależnie od każdej aplikacji.
- Zrewidować trusted proxies i ścieżkę adresu klienta.
- Rozdzielić limity odczytów, logowania, zapisów oraz kosztownych rekomendacji/wyszukiwania.
- Zapewnić wspólny stan limitera, najlepiej Redis, przed wieloma instancjami.
- Dodać browser smoke, screenshot oraz procedurę backup/restore i migracji.

### Decyzje

Istniejące limity aplikacyjne pozostają, ale mają tworzyć trzy warstwy z Cloudflare i NPM. Każdy release identyfikuje pełny commit SHA i niezmienne digests obrazów. Blue-green dubluje wyłącznie bezpieczne usługi bezstanowe; kompatybilność migracji bazy i singletonowe przetwarzanie w tle są bramkami wydania. SMTP zastępuje bezpośrednie wywołania Brevo API, ale Brevo pozostaje relayem, a poświadczenia SMTP pozostają sekretami. Obserwowalność jest infrastrukturą VPS, a nie podusługą Smakosza: jeden centralny stack monitoruje Smakosza i pozostałe hostowane aplikacje bez restartowania przez ich deploymenty.
