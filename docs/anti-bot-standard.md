# Standard ochrony przed automatycznymi nadużyciami

**Target, zatwierdzony przez operatora 25 października 2026.** Dotyczy obecnych
i przyszłych projektów. To wymagania planu i odbioru, nie deklaracja aktywnej
ochrony w produkcji. Stan konkretnej aplikacji zapisujemy w jej `project.json`.
Datowane wyniki pozostają ważne w swoim zakresie; nowe wymaganie nie podnosi
procentów postępu ani nie stanowi ponownej wyceny zadań.

## Zakres

Turnstile jest domyślną ochroną publicznych formularzy rejestracji i logowania,
resetu hasła oraz ponownego wysyłania wiadomości weryfikacyjnych, jeśli takie
funkcje istnieją. Chroni też publiczne tworzenie linków, formularze kontaktowe
i uruchamianie kosztownych operacji AI dostępnych z przeglądarki.

| Projekt | Wymaganie / istniejące zadanie | Granica zakresu |
| --- | --- | --- |
| NetFilmx | [Plan z 26 października](2026-10-26-netfilmx-playback-protection.md): Turnstile przy wydawaniu dostępu do filmu oraz logowaniu admina, w `route-protection`. | Anonimowe oglądanie; wycofanie publicznej rejestracji/walleta. Prywatny R2 i Worker sprawdzający grant przed cache. Publiczny katalog/grafiki; bez wyzwania na każdy segment HLS. Uploads/worker pozostają false. |
| Smakosz | Rejestracja, logowanie, reset/resend w `abuse-and-runtime`; sprawdzić istniejącą implementację przed zmianą. | Wywołania refresh/logout i zwykłe odczyty nie wymagają wyzwania. Limity i autoryzacja zapisów nadal obowiązują. |
| MovieRAG | Utrzymać i odebrać Turnstile Ask AI w `cost-protection`. | Historyczny raport opisuje implementację; bieżąca konfiguracja i pełny odbiór nie są tu potwierdzone. Search ma własne limity. |
| Tic-Tac-Toe AI | Dodać ochronę wejścia w płatne operacje Jev w `edge-verification`. | Bez wyzwania na każdy zwykły ruch, fragment strumienia lub odczyt. Zachować trwały budżet kosztów i przyjęty wyjątek liczników podczas rolling. |
| URL Shortener | Publiczne tworzenie linków w `api-security`, przed udostępnieniem tej funkcji. | Przekierowania nie wymagają Turnstile. Autoryzowany interfejs maszynowy ma osobne poświadczenia i kwoty. |
| grela.dev | Turnstile przyszłego formularza kontaktowego; warunek w `cloudflare-pages`. | Portfolio pozostaje statyczne. Nie dodajemy formularza ani backendu w ramach tego wymagania. |
| Inventory Generator | W `edge-and-limits` ocenić potrzebę Turnstile kosztownych anonimowych eksportów przy stwierdzonych nadużyciach lub zmianie ekspozycji. | Warunkowe, obecnie nie obowiązkowe. Zachować odebrane limity body/wierszy/kosztów, trzy sloty bez kolejki i zakres wyjątku overlap. |

Air Quality, zwykłe odczyty pozostałych serwisów, strony statyczne, segmenty HLS,
healthchecki oraz prywatni workerzy nie otrzymują obowiązkowego Turnstile.
Prywatny scraping Flatfinder pozostaje uwierzytelniony i limitowany. Projekty
desktopowe i repozytoria bez publicznego endpointu nie potrzebują integracji.
Nowy formularz lub kosztowny publiczny endpoint wymaga ponownej oceny zakresu.

Wyjątek NetFilmxa, zatwierdzony 25–26 października: wydanie uprawnienia do
anonimowego odtwarzania wymaga Turnstile. Sam segment HLS korzysta z tego
uprawnienia bez nowego wyzwania. Alerty kosztowe i odcięcie budżetowe są poza
tym zadaniem; istniejące budżety innych aplikacji pozostają obowiązujące.

## Kontrakt implementacji

- Formularz otrzymuje widget i przekazuje token do backendu. Backend wywołuje
  Siteverify i sprawdza `success`, oczekiwany `hostname` oraz `action` **przed**
  utworzeniem konta, wysłaniem maila, zapisem linku lub płatną pracą.
- Brak/błąd/wygasły lub ponownie użyty token nie pozwala wykonać chronionej
  operacji. Przy timeout lub błędzie dostawcy operacja pozostaje niewykonana;
  użytkownik otrzymuje komunikat i możliwość ponowienia z nowym tokenem.
- Token jest jednorazowy, ważny do pięciu minut. Nie zamieniamy jednego sukcesu
  w nieograniczone zwolnienie. Dłuższy przepływ, np. gra Jev, może otrzymać
  uprawnienie przechowywane po stronie serwera, z jawnym zakresem, czasem życia,
  związaniem z sesją/użytkownikiem i limitem operacji; wymaga osobnych testów.
- Klucz publiczny może być w stronie; sekret pozostaje tylko w backendzie.
  Rozdzielić konfigurację testową i produkcyjną, ustalić dozwolone hosty i
  działania. Nie zapisywać tokenów ani sekretów w logach i raportach.
- Zachować CSRF, autoryzację, limity IP/użytkownika, body i współbieżności oraz
  trwałe budżety płatnych operacji. Limitować także próby walidacji, aby sam
  Siteverify nie stał się nieograniczonym kosztem. Turnstile nie zastępuje tych
  mechanizmów i nie gwarantuje zatrzymania wszystkich botów.
- WAF/Managed Challenge/Bot Fight Mode to odrębna warstwa. Tunel, proxied DNS,
  widget utworzony w panelu ani HTTP 200 nie dowodzą integracji formularza.
  Uwierzytelnione API maszynowe ma jawny kontrakt dostępu i kwot, a nie publiczny
  przełącznik omijający ochronę przeglądarki.

## Odbiór i automatyzacja

Lekcja P1 NetFilmx, 27 października: widget i jego callbacki należą do konkretnej
próby weryfikacji. Po przekazaniu tokenu stary expiry/error/timeout/success nie
może zmienić aktywnego grantu ani nowej próby. Grant ma własny termin ważności.
Regresja powinna sprawdzić także spóźnione callbacki, retry i odnowienie sesji.
Przy zewnętrznym gatewayu stosować [standard komponentów](release-components-standard.md):
autoryzacja przed cache, brak publicznych aliasów, zgodne klucze i osobny rollback.

1. **CI:** kontrolowany adapter Siteverify / oficjalne klucze testowe wyłącznie
   poza produkcją. Testy poprawnego tokenu oraz braku, błędu, wygaśnięcia, replay,
   niezgodnego hosta/action i awarii dostawcy. Sprawdzić brak skutków ubocznych
   odrzuconych żądań, także bezpośredniego POST z pominięciem widgetu. Mock nie
   jest dowodem działania prawdziwego dostawcy.
2. **Konfiguracja wydania:** produkcja wymaga właściwych kluczy i włączonej
   walidacji; odrzuca znane klucze testowe i niedozwolone obejścia. Bez stałych
   wyjątków dla User-Agent, IP testera lub publicznych nagłówków „test mode”.
3. **Publiczny odbiór:** normalne przejście człowieka, prawdziwy token i backend,
   a także odrzucenie żądania bez tokenu / ze złym tokenem. Zapisać środowisko,
   rewizję i zakres, bez sekretów. W razie challenge automat nie dostaje
   produkcyjnego bypassu; osobno odnotować niewykonaną próbę pozytywną.
4. **Bieżący smoke:** dostępność i katalog sprawdzać bez wyzwań. Chronione media
   NetFilmxa wymagają prawidłowo uzyskanego uprawnienia; nie dodawać produkcyjnego
   bypassu dla automatu. Pozostałe media sprawdzać według ich kontraktu. Testy
   funkcjonalne kont i testy ochrony botowej mają odrębne wyniki. Zielony build,
   healthcheck albo Playwright nie zamykają odbioru antybotowego.

Brak ruchu użytkowników i akceptowane przerwy nie usuwają ochrony kont i kosztów.
Nie wprowadzamy nowego SLA, HA ani programu restore legacy; obowiązuje
[standard utrzymania](operating-standard.md). Ta aktualizacja nie zmienia kodu
aplikacji, kluczy ani reguł Cloudflare i niczego nie wdraża.

## Źródła

- Cloudflare: [weryfikacja po stronie serwera](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
- Cloudflare: [klucze i środowiska testowe](https://developers.cloudflare.com/turnstile/troubleshooting/testing/).
- Cloudflare: [Turnstile i limity żądań](https://developers.cloudflare.com/use-cases/solutions/stop-malicious-bots/).
- [Wspólny standard limitowania](rate-limiting-standard.md) i [checklista wdrożenia](coolify-deployment-checklist.md).
