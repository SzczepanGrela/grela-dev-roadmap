# NetFilmx: poprawka bibliotek odtwarzacza

**Stan zaobserwowany 5 listopada 2026.** Poprawka jest wdrożona; pozytywny test
człowieka z rzeczywistym Turnstile pozostaje otwarty.

Po zgłoszeniu wiecznego ładowania potwierdzono, że Docker pomijał katalogi `dist`
z bibliotekami odtwarzacza. Strona zwracała 404 dla media-icons, HLS i napisów;
komponent odtwarzacza nie był rejestrowany. Testy uruchamiane z kodu źródłowego
nie wykrywały braków w gotowym obrazie. To potwierdzony bloker, bez twierdzenia,
że odtworzono każdy szczegół zachowania z przeglądarki operatora.

[PR #5](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/5), head
`a63bba47684a8267de6d0076ff1ff782e0d8cf19`, zawęża wykluczenie do generowanego
bundla Workera. Nowy test Chromium/Firefox pobiera pliki z gotowego kontenera,
otwiera rzeczywistą stronę filmu, sprawdza komponenty oraz wykonuje bibliotekę
HLS i parser polskich napisów. Nie otwiera mediów i nie omija Turnstile.
Oddzielny istniejący test z syntetycznymi mediami nadal sprawdza funkcjonalność.

[CI PR 41660055544](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/41660055544)
i [CI main 41676712730](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/41676712730)
przeszły. Main `b6e907e420edd4f290e38e5bf8045511e5060dc4`, digest
`sha256:07eebd2740211ddb0f0409b82fdc7ef1e4ad338c36e5fd803e62616e574e62d8`:
podpisy, SBOM i zgodność drzewa potwierdzono przed wdrożeniem 5 listopada.
Runtime healthy, dane i klucze zachowane. Siedem sprawdzonych zasobów publicznych
zwraca 200 i zgodną zawartość. Produkcyjny Firefox rejestruje odtwarzacz bez błędów
JS. Sesja automatyczna jest odrzucana przez Turnstile kodem 600010, bez grantu;
to nie jest pozytywny test człowieka. Ponowny test operatora został zlecony.

Prywatne media, gateway i Invisible pozostają; uploads/transkodowanie oraz obie
flagi zwykłego CD są false. Kopia przed wydaniem przeszła kontrolę czytelności,
nie test odtworzenia. Finalny caller CI, rolling/rollback, backupy nowego stanu,
chroniony cache i limity dostawcy pozostają otwarte. Brak zmian procentów/estymat.
Wcześniejsze błędy i zakresy zachowuje [rekord październikowy](2026-10-29-netfilmx-cutover-followup.md).

Lekcja standardu: dla aplikacji przeglądarkowych sprawdzać graf zależności z
rzeczywistego obrazu, włącznie z bibliotekami ładowanymi później. Odbiór obrazu,
testy funkcji i test prawdziwego dostawcy/człowieka mają osobne wyniki.
