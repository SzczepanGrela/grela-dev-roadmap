# Air Quality App — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **65%**  
Forecast / prognoza: **2026-10-22–2026-11-18**, 40–60 h, low confidence / niska pewność

## English

### Purpose and current state

Air Quality App is a web project for presenting air-quality information. A substantial local change set is unfinished: 17 tracked paths are modified and three are new. The last pushed CI run was green, while local tests for the dirty state were not run because the required environment was unavailable. Deployment remains opt-in and no public DNS was confirmed.

### Completed and verified

- The main application and quality workflow exist.
- The most recent remote CI for pushed code passed.
- Deployment assets are present but do not yet prove a public production service.
- The existing local changes were inventoried and left untouched.

### Remaining work and known issues

- Review and divide the 20-path local delta into testable commits.
- Recreate the required local test environment and validate the exact candidate.
- Document external data-source behavior, timeouts, caching and failure states.
- Decide the production activation point, then configure DNS, NPM and HTTPS.
- Add conservative cache-aware limits: ordinary reads at the edge/proxy, stricter application controls for refresh or external-provider calls.
- Add candidate-container preflight, rollback and eventually blue-green delivery.
- Add browser tests for loading, provider failure and stale-data presentation.
- Capture a production screenshot only after the endpoint is stable.

### Decisions

The app must degrade clearly when an upstream air-quality provider is unavailable; rate limiting alone is not resilience. Cached responses, bounded retries, timeouts and circuit-breaking behavior should reduce both cost and upstream pressure. Forecast confidence remains low until the dirty candidate can run in its intended environment.

## Polski

### Cel i stan bieżący

Air Quality App prezentuje informacje o jakości powietrza. Lokalnie trwa duży zestaw zmian: 17 ścieżek zmodyfikowano, a trzy są nowe. Ostatnie CI wypchniętego kodu było zielone, lecz testów lokalnego stanu nie uruchomiono z powodu braku wymaganego środowiska. Deploy jest opcjonalny, a publiczny DNS nie został potwierdzony.

### Wykonane i zweryfikowane

- Istnieją główna aplikacja i workflow jakości.
- Najnowsze zdalne CI wypchniętej wersji przeszło.
- Istnieją pliki wdrożeniowe, ale nie potwierdzają jeszcze publicznej produkcji.
- Zmiany lokalne zinwentaryzowano i pozostawiono bez ingerencji.

### Do zrobienia i znane problemy

- Podzielić 20-ścieżkowy lokalny zestaw zmian na testowalne commity.
- Odtworzyć środowisko i sprawdzić dokładnie lokalnego kandydata.
- Opisać timeouty, cache, zachowanie źródeł danych i błędy.
- Ustalić moment uruchomienia produkcji, skonfigurować DNS, NPM i HTTPS.
- Zastosować cache i limity: zwykłe odczyty na edge/proxy, ostrzejsze limity dla odświeżeń i zapytań do dostawcy.
- Dodać preflight, rollback, a później blue-green.
- Dodać testy przeglądarkowe dla awarii dostawcy i starych danych.
- Wykonać screenshot po ustabilizowaniu endpointu.

### Decyzje

Awaria zewnętrznego źródła musi być obsłużona czytelnie; sam rate limiting nie zapewnia odporności. Cache, ograniczone retry, timeouty i circuit breaker zmniejszą koszt oraz obciążenie dostawcy. Pewność prognozy pozostaje niska.

