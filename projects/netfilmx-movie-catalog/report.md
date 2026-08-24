# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **71%**  
Forecast / prognoza: **2026-10-05–2026-10-22**, 48–72 h, low confidence / niska pewność

## English

### Purpose and current state

NetFilmx is a hosted .NET movie-catalog application with a sizeable local modernization in progress. The public endpoint returned HTTP 200, but the local branch is 12 commits ahead and has 45 changed or untracked paths. Remote green CI therefore does not validate the full local candidate.

### Completed and verified

- The application is deployed and responds publicly at `netfilmx.grela.dev`.
- The local test suite reported 79 passed and 2 skipped.
- Existing remote CI is green for the pushed revision.
- The repository contains application, test and deployment foundations.

### Remaining work and known issues

- Split and review the 12 local commits and 45 dirty/untracked paths without losing user work.
- Resolve nullable warnings and rerun the complete build with warnings reviewed.
- Upgrade or remove AutoMapper 13.0.1, which is affected by the high-severity advisory GHSA-rvv3-g6hj-g44x, then verify behavior.
- Push the reviewed candidate and require CI results for that exact commit.
- Add layered limits appropriate to catalog search/authentication and protect expensive or write endpoints more strictly than static browsing.
- Narrow trusted proxy networks and verify the real client IP chain through Cloudflare and NPM.
- Replace stop-then-start deployment with candidate preflight/rollback, later blue-green.
- Add browser smoke coverage and refresh the production screenshot.

### Decisions

The dirty working tree is an explicit risk boundary: its contents are reported, not altered by this roadmap work. The completion forecast has low confidence until the unpublished delta is organized and CI evaluates it. Public reports name the dependency advisory but contain no credentials or exploit recipe.

## Polski

### Cel i stan bieżący

NetFilmx to hostowany katalog filmów .NET z dużą lokalną modernizacją w toku. Publiczny endpoint zwrócił HTTP 200, lecz lokalna gałąź jest 12 commitów do przodu i zawiera 45 zmienionych lub nowych ścieżek. Zielone zdalne CI nie sprawdza więc całego lokalnego kandydata.

### Wykonane i zweryfikowane

- Aplikacja działa publicznie pod `netfilmx.grela.dev`.
- Lokalne testy: 79 zaliczonych i 2 pominięte.
- Zdalne CI jest zielone dla aktualnie wypchniętej rewizji.
- Istnieją podstawy aplikacji, testów i wdrożenia.

### Do zrobienia i znane problemy

- Uporządkować 12 lokalnych commitów i 45 zmienionych/nowych ścieżek bez naruszania pracy użytkownika.
- Usunąć lub świadomie obsłużyć ostrzeżenia nullable.
- Zaktualizować albo usunąć AutoMapper 13.0.1 objęty ostrzeżeniem GHSA-rvv3-g6hj-g44x i wykonać testy regresji.
- Wypchnąć przejrzany kandydat i wymagać CI dokładnie dla tego commitu.
- Wdrożyć warstwowe limity dla wyszukiwania, logowania i kosztownych/zapisujących endpointów.
- Zawęzić zaufane proxy i sprawdzić łańcuch adresu klienta przez Cloudflare i NPM.
- Dodać preflight z rollbackiem, a docelowo blue-green.
- Dodać browser smoke i odświeżyć screenshot produkcji.

### Decyzje

Brudny worktree jest granicą ryzyka: raport go opisuje, ale roadmapa go nie modyfikuje. Prognoza ma niską pewność do czasu uporządkowania niewypchniętych zmian i zweryfikowania ich przez CI.

