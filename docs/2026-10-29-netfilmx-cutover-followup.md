# NetFilmx: prywatne media i wydanie weryfikacji w tle

**Cutover: 28 października 2026. Poprawka wydana i Invisible aktywne: 29 października.**
Aktualny web: SDK-corrected main `9f67ed88` / digest `17a0fcea`, wdrożony
29 października 19:25:30 UTC, odczyt runtime healthy. Invisible i prywatny R2
zachowane. Pozytywny test dostawcy/człowieka nadal oczekuje; ochrona nieodebrana.
Ten rekord aktualizuje bieżący stan po [przygotowaniu z 27 października](2026-10-27-netfilmx-protection-preparation.md).
Wcześniejsze wyniki pozostają datowaną historią. Nie podnosi procentów ani estymat.

## Przełączenie z 28 października

- Odłączono publiczną domenę od R2 i przyłączono ją jako Custom Domain Workera
  mediów. R2 nie ma publicznych custom domains, a dostęp r2.dev jest wyłączony.
  Istniejące media zachowano bez ponownego kopiowania, kodowania lub usuwania.
- Wdrożono kwalifikowany obraz main `2e7cd6f8a30ff5044953723c0e98775d038c681f`
  po digescie `sha256:dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055`.
  Najpierw z zamkniętym wydawaniem grantów, potem z `Playback__Enabled=true`.
  Odczyt działającego kontenera potwierdził zdrowie, właściwą rewizję oraz skuteczny
  mount klucza podpisującego tylko do odczytu. Zachowano 7 filmów i 10 napisów.
- Publiczny katalog i grafiki są dostępne. Chronione ścieżki mediów obsługuje
  Worker: autoryzacja poprzedza cache i odczyt prywatnego R2. Nie ma publicznego
  adresu storage jako awaryjnego obejścia.
- 21 przypadków gatewaya oraz odmowa przez alias R2 przeszły: grafiki GET/HEAD,
  CORS i odrzucanie niechronionych ścieżek, złych grantów, query, Origin i metod.
  Testy weba potwierdziły brak publicznej rejestracji oraz odmowy bez CSRF/tokenu.
  Te próby nie używały prawidłowego grantu i nie odbierają odtwarzania ani ochrony
  już rozgrzanego chronionego obiektu w cache.

## Historyczny błąd człowieka i wybrany kierunek poprawki

**Prawdziwa próba operatora w Firefox zakończyła się błędem** po kilku sekundach,
przed odtworzeniem filmu i pojawieniem się widocznego widgetu. Ochrona odtwarzania
nie jest odebrana. Zielone CI z atrapami, zdrowy kontener, poprawna konfiguracja
kluczy i negatywne próby HTTP mają inny zakres niż działający przepływ człowieka.
Ograniczona diagnostyka potwierdziła zgodność konfiguracji oraz odmowę dostawcy dla
celowo błędnego tokenu; nie ustaliła przyczyny nieudanej próby pozytywnej.

Operator wybrał weryfikację w tle, bez osobnego ekranu lub kliknięcia „zweryfikuj”.
Zwykły Play ma zachować intencję użytkownika; odnowienie ma zachować pauzę, czas,
jakość i napisy/Off. Przy błędzie potrzebny jest zrozumiały komunikat i jawny retry,
bez nieskończonych prób ani obejścia autoryzacji. Ochrona nadal wymaga prawidłowego
Siteverify i grantu. Dotychczasowa izolacja starych callbacków pozostaje obowiązująca.

## Wydanie z 29 października

Dwa wcześniejsze wyniki CI pozostają nieudane:
[40803496353](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40803496353)
i [40805787744](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40805787744).
Poprawiono rozbieżność zegara fixture, następnie odtworzono i naprawiono regresję
pauza użytkownika → przerwane oczekujące Play (`AbortError`) → retry.

[PR #3](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/3) odebrano na
`c5f2b6495d6984f2f53d7158cfaa094ea63fe1c0` i scalono 29 października 14:23:10 UTC
jako main `7559e8336661eb8f48bd9f508156d2091ae82522`.
[CI 40874474232](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40874474232)
i [audyt 40874474211](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40874474211)
przeszły: 13 testów JavaScript, 321 .NET, 80 Python, 23 gatewaya, rzeczywiste
fixture playera Chromium/Firefox oraz kwalifikacja i skan obrazu. Sprawdzono brak
autoplay, jedno Play podczas ładowania, SDK readiness, odnowienie pozycji/jakości/
PL/Off/pauzy oraz stare callbacki. To nadal testy z kontrolowanym dostawcą.

[Main CI 40890940247](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40890940247)
przeszło i opublikowało `sha256:7a14bb14dabbeaac2512c01b8d6cca9f82735e4813c468565a658e3142a2611a`.
Zweryfikowano podpisane provenance/SPDX, źródło main/workflow/run i zgodność drzewa
z odebranym headem. Normalny Deploy workflowu pominięto; obie flagi CI nadal false.

- Przed wydaniem utworzono świeżą prywatną kopię nowego PG, kluczy i konfiguracji.
  Sprawdzenie czytelności dump/archive nie jest testem odtworzenia ani odbiorem
  harmonogramu, retencji lub off-host.
- Wdrożenie dokładnego obrazu przez operatora zakończyło się 16:20:59 UTC. Odczyt
  potwierdził jeden zdrowy web, właściwą rewizję, brak OOM/restartów, skuteczny
  mount klucza tylko do odczytu oraz zachowane 7 filmów/10 napisów i brak admina.
- Publiczny smoke 16:33 UTC potwierdził rewizję, nowy JavaScript i odnośnik Privacy
  Addendum. Brak tokenu odrzucono 400, brak CSRF 400, rejestracja zwraca 404.
- O 16:39:47 UTC tryb istniejącego widgetu zmieniono na **Invisible**, zachowując
  sekret, host, sitekey i `no_clearance`. Worker, klucze podpisu, PG i media są
  niezmienione, R2 pozostaje prywatne. Tymczasowe tokeny operatora wycofano.

**Ponowny prawdziwy test człowieka w Firefox po wydaniu oczekuje.** Zdrowie weba,
CI i odmowy HTTP nie zamykają tego testu; wcześniejszy nieudany odbiór pozostaje
w historii. Nie ponawiać wykonanego wydania ani przełączania trybu widgetu.

## Błąd prawdziwego SDK po wydaniu

Diagnostyka Chromium z prawdziwym dostawcą o 16:42:28 UTC **nie przeszła**:
`sdk_unavailable` w etapie weryfikacji. Skrypt odpowiadał 302/200, a funkcje SDK
istniały, ale nie potwierdzało to poprawnego wywołania. Koordynator ustalił
przyczynę: produkcyjny SDK rzuca kod **3857** przy `turnstile.ready()`, gdy skrypt
załadowano z `async=true`. Fixture nie odwzorowywał tego ograniczenia kontraktu.

Kolejna poprawka używa oficjalnego callbacku onload URL i realistycznych testów.
Jest w przygotowaniu; nie podajemy jeszcze nowego odebranego SHA lub wydania.
Main 7559e833/7a14bb14 oraz Invisible są aktywne, R2 pozostaje prywatne, lecz
pozytywny odbiór prawdziwego dostawcy/człowieka nadal oczekuje. Diagnostyka headless
nie zastępuje testu człowieka; zapisujemy jej nieudany wynik osobno.

## Historyczny checkpoint PR #4 przed wydaniem

[PR #4](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/4), head
`f0a5579547377a2d12329f26da4504b17e5c7bd8`, używa oficjalnego callbacku onload URL. Powolne
ładowanie SDK pozostaje pojedyncze przez jawne retry, spóźniony callback nie
wznawia wycofanej próby, a nieudane pobranie pozwala na nowe dopiero po retry.
Regresja najpierw odtworzyła 3857 na poprzednim kodzie; 16 testów JavaScript oraz
[CI 40923663597](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40923663597)
i [audyt 40923663525](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40923663525)
przeszły, w tym Chromium/Firefox i kwalifikacja/skan obrazu.

Lokalna podmiana wyłącznie kandydującego skryptu w diagnostycznej przeglądarce
poprawnie inicjalizuje rzeczywisty SDK; dostawca następnie odrzuca headless kodem
`600010`. To dowód usunięcia błędu inicjalizacji, bez pozytywnego odtwarzania,
zmiany produkcji lub obejścia dostawcy.

PR #4 scalono o 18:34:25 UTC jako main `9f67ed880a37837808f01907c779af9611dd6e6b`.
[Main CI 40932096823](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40932096823)
w tym historycznym checkpointcie jeszcze trwało; publikacja/wydanie oczekiwały.
Produkcja działała wtedy na 7559e833/7a14bb14 z Invisible. Aktualny wynik wydania
i nadal otwarty test człowieka opisuje następna sekcja.

## Aktualne wydanie SDK

[Main CI 40932096823](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40932096823)
przeszło i opublikowało main `9f67ed880a37837808f01907c779af9611dd6e6b` po digescie `sha256:17a0fcea0300cde8693ccdfe9003523172cca4d2585a80b88e130ad0e278ebfd`.
Podpisane provenance/SPDX, main/workflow/run oraz zgodność drzewa z odebranym
f0a5579 zweryfikowano. Normalny Deploy pominięty, obie flagi CI false.

Po świeżej prywatnej kopii PG/kluczy/konfiguracji wdrożenie operatora zakończyło
się 29 października 19:25:30 UTC. Odczyt 22:04:33 UTC potwierdza jeden zdrowy
web, właściwy obraz, brak OOM/restartów, mount klucza RO/czytelny przez aplikację,
keyring RW oraz zachowane 7 filmów/10 napisów i brak administratora. Playback
aktywny, uploads/transkodowanie wyłączone. Invisible, Worker, klucze i PG
niezmienione; R2 pozostaje prywatne. Tokeny odczytu i wydania wycofano.

Czytelność świeżego dump/archive nie jest testem restore ani odbiorem harmonogramu
lub off-host. Publiczny smoke o 22:05 UTC potwierdził rewizję, dokładny nowy skrypt, odnośnik
Privacy Addendum i odmowy: brak tokenu400, brak CSRF400, rejestracja404.
Diagnostyka niezmienionej produkcji poprawnie inicjalizuje rzeczywisty SDK;
nie ma wcześniejszego 3857/sdk_unavailable. Dostawca odrzuca headless kodem600010,
bez żądania grantu. To potwierdza naprawę inicjalizacji, bez pozytywnego odtwarzania
ani obejścia ochrony. **Pozytywny test człowieka/dostawcy nadal oczekuje**. Wcześniejsze błędy
pozostają w datowanej historii, bez powtarzania już wykonanego wdrożenia.

## Pozostały zakres

Poprawka SDK jest wdrożona. Następnie zlecony pozytywny test człowieka/dostawcy
w Firefox,
seek/napisy, ważny grant i odmowy na
rozgrzanym cache oraz rzeczywiste limity Workers Free/CPU. Bez publicznego fallbacku
R2. Konto administratora i test panelu pozostają świadomie odłożone.

Automatyczna promocja CI nadal jest wyłączona. Dostęp/kontrakt rzeczywistego
callera CI, zgodny rolling/rollback oraz backupy nowego PostgreSQL, kluczy i
konfiguracji nadal oczekują odbioru. Jednorazowa lokalna kopia i sprawdzenie
czytelności nie są testem restore ani odbiorem harmonogramu/off-host.
Uploads/transkodowanie pozostają wyłączone. Safari/iOS i nierozstrzygnięta
synchronizacja Sintela zachowują status; nie ponawiano kwalifikacji siedmiu filmów.

Stosować [standard komponentów](release-components-standard.md) i
[standard ochrony](anti-bot-standard.md). Dokładne prywatne zasoby, poświadczenia
metadanych i receipts znajdują się w dokumentacji infrastruktury; nie są publikowane.
