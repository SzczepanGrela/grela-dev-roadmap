# NetFilmx: poprawka panelu ładowania

**Stan zaobserwowany 5 listopada 2026, po wdrożeniu.** Napis i przycisk
prześwitywały przez spinner odtwarzacza. Panel ma teraz nieprzezroczyste tło,
które znika po przygotowaniu odtwarzania. Logika Turnstile i grantów jest bez zmian.
Sam zrzut nakładania elementów nie dowodzi kolejnego błędu odtwarzania.

[PR #6](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/6), head
`7eab2b7b1f57985db0afece32d94b6e7df8e6105`, scalono jako
`9a72f671b11dfd49e26d426151a292095166f630`. Pierwszy skan obrazu zatrzymał
wydanie na podatnościach .NET i APT. Runtime podniesiono do przypiętego
ASP.NET 10.0.14-noble i dodano aktualizację pakietów APT bez wyłączania skanów.
Powolne pobieranie zależności przeglądarek w CI rozwiązano zmianą mirrora na
oficjalne archiwum Ubuntu przez HTTPS. Poprzednie zatrzymane przebiegi zachowano.

[CI PR 42080844424](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/42080844424)
i [CI main 42082332972](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/42082332972)
przeszły: testy aplikacji, Chromium/Firefox, kwalifikacja obrazu i skan.
Podpisy, SBOM i zgodność drzewa potwierdzono dla obrazu
`sha256:d8669053629f7fa45399b6c348c95a4ff4478e68450eaa8e3269e8286a6a0c55`.
Wdrożenie zakończyło się 18:36:58 UTC. Runtime jest zdrowy, dane i klucze zachowane.

Publiczne sprawdzenie potwierdza wersję, poprawiony panel oraz odmowy bez tokena
i CSRF. Zrzut produkcyjnego Firefoksa pokazuje panel bez prześwitującego spinnera
i bez błędów JS. To sprawdzenie wyglądu; pozytywny test człowieka z rzeczywistym
Turnstile nadal oczekuje. Kopia przed wydaniem jest czytelna, bez nowego testu
odtworzenia. Gateway/prywatne media pozostają; uploads/transkodowanie i obie
flagi zwykłego CD są false. Admin, końcowy caller CI/rolling/backupy oraz wcześniejsze
odroczenia pozostają otwarte. Procenty i estymaty nie zostały zmienione.

Wcześniejsze wyniki zachowuje [rekord bibliotek odtwarzacza](2026-11-05-netfilmx-player-assets.md).
