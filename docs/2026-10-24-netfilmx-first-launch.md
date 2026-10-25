# NetFilmx — zakres pierwszego publicznego uruchomienia

**Observed, 24 października 2026; zapis do roadmapy 25 października.**
Koordynator zweryfikował publiczny HTTPS i działającą aplikację z main
`a5a0d90a332cc47931b5aff924f817ab6366918c`, obraz
`ghcr.io/szczepangrela/netfilmx-movie-catalog@sha256:ea01f504718a014ee92baf1276d2586044d5eaed80dd7fe203d50504fd10c47b`.
Źródło: zachowany raport publicznego odbioru koordynatora z 24 października,
wynik Chromium oraz osobny końcowy odczyt runtime i usunięcia własnego konta
testowego. Surowe dowody operatora pozostają poza publicznym repozytorium.

- Pierwszy start na świeżym PostgreSQL 18 po jawnej migracji/importowaniu katalogu;
  role migracji/runtime rozdzielone, trwały keyring, jeden web z limitami.
- Publiczny readiness wskazał właściwą rewizję; HTTPS, katalog siedmiu filmów,
  rejestracja/logowanie, refresh/logout i odrzucenie żądań bez CSRF przeszły.
- Chromium przez zwykły publiczny DNS/TLS sprawdził Sintel: HLS, wybór jakości,
  Auto, seeking oraz próbki PL/EN/Off. Nie zastosowano przechwytywania żądań ani
  obejścia TLS/wyzwań Cloudflare. Własne konto testowe i jego dane usunięto.
- Ten sam kontener pozostał healthy, bez OOM i restartów w końcowym odczycie.

To próbka jednego filmu/jednej przeglądarki, odtwarzana bez dźwięku. Nie zamyka
nierozstrzygniętego Sintel AV ani odłożonych prób urządzeń/Safari i nie powtarza
wcześniejszej pełnej kwalifikacji mediów. Uploads/worker oraz obie flagi
automatycznego wdrożenia pozostawały false. Rolling, zgodny rollback i backupy
nowego PostgreSQL/keyringu/konfiguracji pozostają odrębnymi zadaniami.

**Osobna obserwacja kodu, 24 października:** w sprawdzonym źródle odpowiadającym
wydaniu nie ma widgetu Turnstile ani weryfikacji Siteverify w formularzach kont.
Testy funkcjonalne nie stanowią odbioru ochrony przed botami. Aktualnych reguł
WAF/Bot Fight Mode w Cloudflare nie odczytano; brak integracji formularza nie
oznacza deklaracji braku innych zabezpieczeń edge.

**Target, 25 października:** następnym zakresem `route-protection` jest Turnstile
rejestracji/logowania i odbiór według [standardu antybotowego](anti-bot-standard.md).
Ta aktualizacja jest dokumentacyjna: nie wdraża integracji ani nie zmienia
wyjątków utrzymania. Historyczne estymaty/procenty zachowano bez nowej wyceny.
