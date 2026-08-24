# POS Order System — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **59%**  
Forecast / prognoza: **2026-09-14–2026-09-21**, 16–24 h, medium confidence / średnia pewność

## English

### Purpose and current state

POS Order System is a desktop ordering application. It remains intentionally desktop-only: it is not a website and will not be placed behind NPM, Cloudflare or application HTTP rate limits. Its delivery target is a reproducible desktop release rather than a VPS container.

### Completed and verified

- The principal desktop workflow is implemented.
- The audited worktree was clean.
- `dotnet test` exited successfully, but discovered no tests; this is not equivalent to meaningful automated coverage.
- The project is retained in the public portfolio and does not require a production hostname.

### Remaining work and known issues

- Add focused unit tests for pricing, ordering and state transitions.
- Add CI that restores, builds and tests on a supported .NET runner.
- Document supported operating systems, installation, data location and recovery.
- Produce a versioned desktop release and checksums through GitHub Releases.
- Add basic startup/error logging without collecting private order data.
- Perform a clean-machine installation and smoke test before marking delivery complete.

### Decisions

No web-hosting checklist or rate-limit profile applies. Host-level Fail2ban is unrelated because the application exposes no network service. Security work should focus on local data, dependency updates, safe file permissions and signed or checksummed release artifacts.

## Polski

### Cel i stan bieżący

POS Order System jest aplikacją desktopową do obsługi zamówień. Pozostaje celowo aplikacją desktopową: nie będzie hostowany przez NPM ani Cloudflare i nie potrzebuje limitów HTTP. Rezultatem delivery ma być powtarzalny release desktopowy, nie kontener na VPS.

### Wykonane i zweryfikowane

- Główny przepływ aplikacji jest zaimplementowany.
- Audytowany worktree był czysty.
- `dotnet test` zakończył się kodem 0, lecz nie wykrył testów; nie oznacza to rzeczywistego pokrycia.
- Projekt pozostaje w publicznym portfolio i nie wymaga domeny produkcyjnej.

### Do zrobienia i znane problemy

- Dodać testy jednostkowe wyceny, zamówień i zmian stanu.
- Dodać CI wykonujące restore, build i test.
- Opisać wspierane systemy, instalację, położenie danych i odzyskiwanie.
- Przygotować wersjonowany GitHub Release z sumami kontrolnymi.
- Dodać podstawowe logowanie startu i błędów bez zapisywania prywatnych danych zamówień.
- Przeprowadzić instalację i smoke test na czystym środowisku.

### Decyzje

Checklisty hostingu i rate limiting nie dotyczą tego projektu. Fail2ban również nie ma zastosowania, ponieważ aplikacja nie udostępnia usługi sieciowej. Priorytetem są lokalne dane, aktualizacje zależności, uprawnienia plików oraz wiarygodne artefakty wydania.

