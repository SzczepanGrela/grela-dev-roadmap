# Checklista wdrożenia przez Coolify

Wersja odniesienia: 4.3.14; przegląd 2026-09-28. To wymagania i wskazówki,
nie deklaracja, że każdy projekt już je spełnia. Konkretne dane VPS, UUID,
adresy zarządzania i sekrety pozostają w prywatnej dokumentacji infrastruktury.
Wyniki pochodzą z dostarczonych przez operatora logów/inspect i selektywnych
odczytów API/GitHub i testów z 11–27 września; nie stanowią ponownego audytu całego
serwera. Dla statusów, zależności i podzadań użyć prywatnej checklisty
`grela-dev-infrastructure/docs/current-priorities.md`; publiczny
[plan portfolio](implementation-plan.md#stan-wdrożeń-i-najbliższa-kolejka)
pokazuje jedynie pakiety prac.
Pola `[ ]` poniżej są wielokrotnego użytku kontrolami odbioru nowego zasobu,
nie listą wszystkich braków w obu obecnych aplikacjach.

| Przykład | Potwierdzone | Nadal do odbioru |
| --- | --- | --- |
| Tic-Tac-Toe | Chroniona automatyczna promocja digestu, bramka zdrowia Coolify, odrzucenie niezdrowego kandydata, failed-smoke rollback, serializacja i pomiar overlap; później trwały licznik Jev, kopia i izolowana próba restore. | Szersze limity i stan współdzielony, monitoring, wyjątki runtime oraz K=9 i decyzja publicznej aktywacji Jev. |
| Inventory | Ręczny digest, zdrowy obraz, ograniczony runtime, trasa i testy zaufania proxy w źródle/CI. | Własny kontrakt wydania, live IP echo, niezdrowy kandydat/rollback, overlap/limity i automatyczna promocja. |

Potwierdzona konfiguracja nie zastępuje testu zachowania: pierwszy celowo
niezdrowy canary osiągnął w Coolify `finished`, gdy kontrola zdrowia platformy
była wyłączona. Po włączeniu zarządzanej kontroli TTT poprawiony test przeszedł
16 września. To zakończona lekcja dla kolejnych aplikacji; stałe canary nie jest wymagane.

## Obraz i dostęp

- [ ] Testy i build wykonane w CI dla pełnego SHA; skan finalnego obrazu oraz
  zapis digestu i pochodzenia. Wdrożenie wymaga zielonego Quality.
- [ ] Zasób Docker Image używa prebuilt GHCR. Końcowa referencja to
  `ghcr.io/<owner>/<repo>@sha256:<digest>`, bez zdublowanego `@sha256`.
  Sprawdzić log deploymentu i `Config.Image`, nie tylko wygląd pola Tag.
- [ ] Udokumentować, czy deploy jest ręczny czy automatyczny. `HEAD` w historii
  ręcznego zasobu Docker Image nie potwierdza commitu. Porównać pełną rewizję
  z endpointu/etykiety OCI z wydaniem CI.
- [ ] Automatyzacja przekazuje konkretny przetestowany digest przez
  uwierzytelniony prywatny interfejs Coolify. TTT ma działający klient i
  zaakceptowane automatyczne wywołanie po Quality z zatwierdzeniem joba produkcyjnego. Inventory i kolejne aplikacje potrzebują własnego kontraktu.
  Sam webhook ponawiający stary digest nie wdraża nowego commitu.

## Sieć i domena

- [ ] Wybrać server/destination i odrębną sieć aplikacji w Coolify. Nie tworzyć
  nowego konta Linux w grupie docker ani legacy launchera dla aplikacji Coolify.
- [ ] Ports exposes odpowiada portowi procesu; dla Tic-Tac-Toe i Inventory
  jest to 8080. Port mappings puste; brak publicznego mapowania portu aplikacji.
- [ ] Zastąpić domyślną domenę właściwą. Port wpisany w domenie Coolify wybiera
  backend, nie publiczny port URL odwiedzającego.
- [ ] Rozdzielić odcinki: przeglądarka HTTPS → Cloudflare → szyfrowany tunel →
  cloudflared → lokalny HTTP do Traefika → HTTP do aplikacji. Schemat domeny
  w Coolify steruje routerem; nie oznacza TLS do procesu aplikacji.
- [ ] Dla tunelu kierowanego do HTTP zastosować HTTP domain wg
  [instrukcji Coolify](https://coolify.io/docs/integrations/cloudflare/tunnels/all-resource)
  i wyłączyć origin redirect do HTTPS. Jeśli świadomie użyto HTTPS domain
  z redirect disabled, zapisać to jako wariant i zweryfikować routery; nie
  przenosić ustawienia automatycznie na każdy projekt. Wymaganie TLS na
  odcinku connector–proxy wymaga osobnej konfiguracji i testów.
- [ ] Publiczna trasa w Cloudflare to Published application route, zwykle z
  pustym path i usługą HTTP do stabilnego aliasu proxy. Konektor i proxy powinny
  współdzielić dedykowaną zewnętrzną sieć Docker bez kontenerów aplikacji.
  Localhost jest adresem w przestrzeni sieciowej konektora; w bridge nie
  wskazuje automatycznie hosta ani innego kontenera.
- [ ] Przy ingress wyłącznie przez Tunnel nie publikować portów HTTP/HTTPS proxy
  na hoście. `expose`/port procesu pozostaje dostępny dla kontenerów we wspólnej
  sieci; `ports` tworzy mapowanie na hosta i nie jest do tego potrzebne.
- [ ] Plik Compose może uruchamiać i łączyć gotowy obraz; sekcja `build` nie jest
  obowiązkowa. Użycie Compose nie oznacza automatycznie budowania obrazu.
- [ ] Dla usługi Compose wybierać `Use the stack network only`, jeśli nie musi
  ona komunikować się przez współdzieloną sieć destination. Ta opcja wyłącza
  dodatkowe podłączenie do predefined network, ale nie usuwa sieci zdefiniowanej
  jawnie w Compose. Dedykowana zewnętrzna sieć connector–proxy może więc istnieć
  równolegle z izolowaną siecią stosu. Nie włączać wspólnej sieci platformy
  wyłącznie dlatego, że zasoby są w tym samym projekcie lub destination.
- [ ] Zweryfikować DNS dla trasy; nie zakładać, że stary A/CNAME został
  zastąpiony. Nie tworzyć prywatnych CIDR/Hostname routes zamiast trasy publicznej.
- [ ] Dla aplikacji pod `/` wyłączyć strip prefixes. Dla custom locations
  osobno ustalić match, priorytet, przepisywanie ścieżki, timeouty i streaming.
  Nie kopiować dyrektyw Nginx jako opcji Traefika.
- [ ] Politykę www dobrać do istniejących DNS/tras; ustawienie redirectu w UI
  nie jest dowodem, że www działa. Sprawdzić brak pętli przekierowań.
- [ ] Przed wyłączeniem starego proxy porównać pełny rekord hosta i generowaną
  konfigurację: custom locations, redirect, HSTS, cache, websocket, timeouty,
  access list oraz rate limiting. Flaga w NPM nie dowodzi równoważnej reguły w
  Traefiku lub Cloudflare.
- [ ] HSTS umieszczać na warstwie publicznego TLS. Dla obecnego tunnel-only
  ingress jest to dokładnie ograniczona reguła odpowiedzi Cloudflare, nie
  wewnętrzny HTTP do aplikacji. Nie włączać `includeSubDomains`/`preload` bez
  potwierdzenia trwałego HTTPS dla całego obejmowanego drzewa nazw.
- [ ] Sprawdzić cache na istniejącym zasobie co najmniej dwoma żądaniami
  (`MISS`/`HIT`, `Cache-Control`, `Age`). Zmiana TTL względem starego proxy ma
  być świadomą decyzją; przy niewersjonowanych CSS/JS uwzględnić purge lub
  wersjonowanie URL.
- [ ] Nie tłumaczyć mechanicznie generycznych regexów „Block Exploits” ze
  starego proxy. Udokumentować ich usunięcie i oprzeć ochronę na walidacji
  aplikacji oraz jawnie skonfigurowanych kontrolach edge/WAF.
- [ ] Zweryfikować zaufanie connector → proxy → aplikacja oraz odrzucanie
  sfałszowanych nagłówków. Proxy ufa tylko dokładnemu adresowi konektora.
  Aplikacja ufa dokładnemu peerowi proxy oraz dokładnemu konektorowi, jeśli oba
  występują w przetwarzanym łańcuchu. Nie używać `*` ani całych podsieci Docker.
  HTTP 200 nie dowodzi poprawnego IP klienta.

## Runtime i zdrowie

- [ ] Non-root USER w obrazie, brak Docker socketa i zbędnych uprawnień.
  Zachować generowane nazwy kontenerów dla rolling updates; rozpoznawać zasób
  po etykietach i panelu, nie po stałym sufiksie nazwy.
- [ ] Jawne limity CPU/RAM/PID, rotacja logów i zapas na kandydata.
  Odczyt 11 września potwierdza u obu małych aplikacji 1 CPU, 512 MiB hard,
  128 MiB reservation, 512 MiB łącznego memory/swap i lokalne logi 10m/3;
  `PidsLimit` pozostał pusty. Inne obciążenia wymagają pomiaru i osobnego budżetu.
- [ ] Minimalne działające Custom Docker options w naszych wdrożeniach:
  `--cap-drop=ALL --init`. Pozostałe zabezpieczenia sprawdzić oddzielnie.
- [ ] Hooki pre/post-deployment puste, jeśli aplikacja ich nie potrzebuje;
  placeholder `php artisan migrate` nie jest uniwersalnym poleceniem.
  Wolumeny, migracje i GPU konfigurować tylko według potrzeb aplikacji.
- [ ] Każdy własny produkcyjny Dockerfile zawiera HEALTHCHECK i działający probe.
  W Coolify sprawdzić efektywną kontrolę; może nadpisać tę z obrazu.
- [ ] Dla tych dwóch aplikacji: kontrola na localhost:8080, `/api/health`,
  kod 200 i odpowiedni status aplikacji. Odpowiedź jest JSON-em; nie wymagać
  literalnego `OK`. Timingi dobrać do startu aplikacji, nie przepisywać
  domyślnych 80 i `/`.
- [ ] Finalny obraz TTT używa `HEALTHCHECK CMD ["python","-m","web.healthcheck"]`
  z interval 30s, timeout 5s, start 10s i retries 3; moduł sprawdza także
  rewizję i gotowość agentów. Inventory używa własnego `curl`-probe z 5s
  interval/timeout/start i 10 retries. To kontrola **wewnątrz obrazu**;
  historyczny odczyt 15 września poprzedza włączenie zarządzanej kontroli TTT.
  Sam status Docker `healthy` nie dowodzi bramki promocji Coolify.
- [ ] Dla TTT zaakceptowano Coolify CMD `python -m web.healthcheck`, interval 5s,
  timeout 5s, retries 10 i start period 10s. Docker uruchamia probe wewnątrz
  kontenera, Coolify czeka na zdrowie przed usunięciem starej wersji. Dla nowej
  aplikacji dobrać własną komendę i przetestować wadliwego kandydata oraz rollback.
- [ ] Przed wdrożeniem sprawdzać stabilny kontrakt aktualnej wersji; po promocji
  pełny kontrakt wydania docelowego. Nie blokować wdrożenia przez wymaganie
  nowego endpointu od starej produkcji. Przy rollbacku używać kompatybilnego probe.
- [ ] Zmienne zaufanych proxy są runtime-only, bez buildtime. Nazwa jest
  zależna od frameworka, np. `FORWARDED_ALLOW_IPS` dla Uvicorn albo własna
  `TRUSTED_PROXY_IPS` dla jawnie skonfigurowanego ASP.NET. Oddzielne rekordy
  Production/Preview w panelu są zakresami środowisk, nie dwiema kopiami w
  pojedynczym kontenerze.
- [ ] Zewnętrzny connector/proxy także wymaga limitów CPU, RAM i PID dobranych
  do pomiarów oraz healthchecka sprawdzającego gotowość, nie tylko uruchomienie
  binarki. Jeśli obraz udostępnia natywny probe, użyć go zamiast doinstalowywać
  `curl` do minimalistycznego obrazu.
- [ ] Dla cloudflared przypiąć port metryk do loopback kontenera i sprawdzać
  `/ready` przez `cloudflared tunnel --metrics <loopback:port> ready`. Ten probe
  potwierdza przynajmniej jedno połączenie z Cloudflare Edge, ale nie trasę do
  aplikacji; po zmianie nadal wykonać publiczne smoke testy wszystkich originów
  i przejrzeć logi błędów połączenia.
- [ ] Ostrzeżenia transportu, np. o buforze UDP QUIC, oceniać na podstawie
  aktywnych połączeń i pomiarów. Nie zmieniać globalnych sysctl tylko po to, aby
  ukryć komunikat w logu.

## Znany błąd parsera — Coolify 4.3.14

Logi wdrożeń obu aplikacji wykazały `invalid security-opt: "no"`.
Potwierdzony w [źródle v4.3.14](https://github.com/coollabsio/coolify/blob/v4.3.14/bootstrap/helpers/docker.php)
parser `convertDockerRunToCompose` ucina wartość przy myślniku:
`no-new-privileges:true` staje się `no`. Zapis przez `=` nie naprawia problemu.
Ten konwerter nie mapuje również `--read-only` i `--tmpfs`, więc pomija je.
To ograniczenie pola Coolify, a nie Dockera ani natywnego Compose.

[Issue 8173](https://github.com/coollabsio/coolify/issues/8173) i
[PR 9497](https://github.com/coollabsio/coolify/pull/9497) były otwarte 6 września;
PR nie był scalony. Przed późniejszą aktualizacją sprawdzić status ponownie.
Operator zaakceptował czasowe pominięcie opcji. Non-root i cap-drop nie są
równoważne no-new-privileges. Docelowo użyć sprawdzonej poprawki/platformy lub
jawnych pól Compose, po testach kompatybilności. Nie wpisywać privileged ani
SYS_ADMIN jako obejścia i nie hot-patchować efemerycznego kontenera.

Odczyt 11 września wykazał również `PidsLimit=null`, `SecurityOpt=null` i
zapisywalny rootfs obu aplikacji; nie oznaczać tych zabezpieczeń jako aktywnych.
Traefik ma read-only rootfs, lecz zapisuje do mountu `/traefik`; jego odrębny
wyjątek procesu i uprawnień hosta jest opisany tylko w prywatnym runbooku.

## Dane, współbieżność i rollback

- [ ] Ustalić trwałe dane aplikacji: volumes, bind mounts, zapisywalny layer,
  zewnętrzne DB/obiekty, uploady, writerów i spójność kopii. Brak mountów nie
  dowodzi bezstanowości.
- [ ] Przed migracją stanowej aplikacji potwierdzić świeży backup jej danych,
  działający stary obraz i sposób przywrócenia; `Success` ani czytelny katalog
  dumpu nie są testem restore.
- [ ] Przy overlap stary/nowy kod musi być zgodny ze schematem, zadania
  singletonem albo pod blokadą, a liczniki limitera współdzielone tam, gdzie
  wymaga tego polityka. Przetestować rzeczywistą współbieżność i pojemność VPS.
- [ ] Kontrola originu i backup providerowy są odrębnymi bramkami przed zmianą
  sieci/proxy; zachować zatwierdzone wyjątki administracyjne.

## Dostęp i kontrola wydania

- [ ] Używać sekretów w środowisku GitHub `production`, a nie jawnych
  zmiennych repozytorium; adresy/UUID/URL bez wartości sekretnej mogą być
  zmiennymi środowiska. Weryfikować zakres tokenu: Coolify dopuszcza token
  na poziomie zespołu, nie wiąże go automatycznie z jednym zasobem.
- [ ] Sprawdzić zatwierdzającego, dozwolone gałęzie, wymagane kontrole
  `main`, zasady self-review/admin bypass i `concurrency: cancel-in-progress:
  false`. Chronione środowisko nie zastępuje ochrony gałęzi.
- [ ] Po niezdrowym kandydacie i failed-smoke rollbacku uruchomić tylko
  testowany/atestowany digest; stare workflow, canary i klucze usuwać osobno,
  po sprawdzeniu wszystkich konsumentów.

## Odbiór i stan faktyczny

- [ ] Sprawdzić inspect: image/revision, USER, Healthcheck i health, PortBindings,
  sieci, CapDrop, Init, SecurityOpt, ReadonlyRootfs, Tmpfs, limity i logowanie.
  Nie eksportować całych envów/tokenów do dokumentacji.
- [ ] Sprawdzić publiczny HTTPS, health revision, favicon, krytyczną akcję i
  normalny ruch użytkownika. Zbadać real-IP, izolację użytkowników i limity.
- [ ] Oddzielnie przetestować niezdrowego kandydata i rollback po błędzie smoke.
  Sukces rolling update nie jest dowodem blue-green ani automatycznego rollbacku.
- [ ] Po migracji usuwać tylko zweryfikowane legacy elementy danej aplikacji;
  potwierdzić dane/wolumeny i wycofać nieużywane zewnętrzne uprawnienia.

Przegląd 28 września: TTT ma zaakceptowany proces chronionych wydań i recovery
(dowody 16–18 września oraz późniejsze udane wydania). Inventory ma odrębne
braki odbioru. Odczyty runtime z 11 września potwierdziły limity CPU/RAM/logów,
lecz nie PID/no-new-privileges/read-only/tmpfs aplikacji; nie są nowym odczytem.
TLS minimum 1.2 i ograniczone testy edge/streamu potwierdzono 27 września.
28 września potwierdzono przyrostowe dostarczanie gier, rozdzielenie budżetów
dwóch publicznych klientów aplikacji i zatrzymanie obliczeń po rozłączeniu
przez publiczne proxy. Pozostają testy wielu klientów/liczników między
aplikacjami na edge oraz wspólnego stanu i wygaszania pracy podczas rolling update.

Opcjonalny Jev wymaga trwałego licznika wydatków także podczas rolling update.
Backup SQLite wykonywać spójnie, odtwarzać w stanie wstrzymanym i uzgodnić
wydatki z dostawcą. Cofnięcie obrazu zachowuje aktualny licznik. Sekret dostawcy
jest wyłącznie runtime; nie dodawać go automatycznie do preview ani testów CI.
Jev pozostaje publicznie wyłączony. Awaria opcjonalnego dostawcy nie wyłącza
gotowości lokalnej gry. Odbiór tego licznika nie dowodzi pełnego restore VPS.

Przy regułach edge opartych na dokładnych ścieżkach każda nowa kosztowna operacja
wymaga przeglądu reguły; dotyczy to także `/api/matches/stream`. Konfiguracja
limitu nie zastępuje testu 429 i odzyskania dostępu. Kopia oznaczona Success,
czytelny katalog dumpu i działający timer są odrębnymi dowodami od restore.

Odbiór strumieni wymaga klienta czytającego kolejne zdarzenia przed końcem
serii; sam HTTP 200 ani test transportu ASGI nie wystarczą. Po rozpoczęciu
strumienia błąd może być zdarzeniem NDJSON bez końcowego `complete`. Oddzielnie
sprawdzić zwolnienie kolejki i zatrzymanie pracy po rozłączeniu przez publiczne
proxy. [Przykład TTT](https://github.com/SzczepanGrela/tic-tac-toe-ai/blob/main/docs/delivery-verification.md)
opisuje testy i ograniczenia. PR #39 dodał losowy `X-Stream-ID` oraz osobne
logi zamknięcia strumienia i rzeczywistego zakończenia obliczeń. Do potwierdzenia
anulowania wymagany jest ten drugi zapis; logi nie powinny zawierać IP,
nagłówków ani treści gry. Stare źródła wdrażania SSH usunięto w PR #36.
