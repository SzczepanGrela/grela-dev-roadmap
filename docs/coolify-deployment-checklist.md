# Checklista wdrożenia przez Coolify

Wersja odniesienia: 4.3.14; aktualizacja 2026-09-09. To wymagania i wskazówki,
nie deklaracja, że każdy projekt już je spełnia. Konkretne dane VPS, UUID,
adresy zarządzania i sekrety pozostają w prywatnej dokumentacji infrastruktury.
Wyniki obu migracji pochodzą z dostarczonych przez operatora logów/inspect;
nie stanowią ponownego audytu całego serwera.

## Obraz i dostęp

- [ ] Testy i build wykonane w CI dla pełnego SHA; skan finalnego obrazu oraz
  zapis digestu i pochodzenia. Wdrożenie wymaga zielonego Quality.
- [ ] Zasób Docker Image używa prebuilt GHCR. Końcowa referencja to
  `ghcr.io/<owner>/<repo>@sha256:<digest>`, bez zdublowanego `@sha256`.
  Sprawdzić log deploymentu i `Config.Image`, nie tylko wygląd pola Tag.
- [ ] Udokumentować, czy deploy jest ręczny czy automatyczny. `HEAD` w historii
  ręcznego zasobu Docker Image nie potwierdza commitu. Porównać pełną rewizję
  z endpointu/etykiety OCI z wydaniem CI.
- [ ] Docelowa automatyzacja przekazuje konkretny przetestowany digest przez
  uwierzytelniony prywatny interfejs Coolify. Sam webhook ponawiający deploy
  starego digestu nie wdraża nowego commitu. Zasady dostępu wymagają wdrożenia.

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
- [ ] Zweryfikować DNS dla trasy; nie zakładać, że stary A/CNAME został
  zastąpiony. Nie tworzyć prywatnych CIDR/Hostname routes zamiast trasy publicznej.
- [ ] Dla aplikacji pod `/` wyłączyć strip prefixes. Dla custom locations
  osobno ustalić match, priorytet, przepisywanie ścieżki, timeouty i streaming.
  Nie kopiować dyrektyw Nginx jako opcji Traefika.
- [ ] Politykę www dobrać do istniejących DNS/tras; ustawienie redirectu w UI
  nie jest dowodem, że www działa. Sprawdzić brak pętli przekierowań.
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
  Potwierdzone 1 CPU/512 MiB dla dwóch małych aplikacji są przykładem;
  inne obciążenia wymagają pomiaru i indywidualnego budżetu.
- [ ] Minimalne działające Custom Docker options w naszych wdrożeniach:
  `--cap-drop=ALL --init`. Pozostałe zabezpieczenia sprawdzić oddzielnie.
- [ ] Hooki pre/post-deployment puste, jeśli aplikacja ich nie potrzebuje;
  placeholder `php artisan migrate` nie jest uniwersalnym poleceniem.
  Wolumeny, migracje i GPU konfigurować tylko według potrzeb aplikacji.
- [ ] Każdy własny produkcyjny Dockerfile zawiera HEALTHCHECK i działający probe.
  W Coolify sprawdzić efektywną kontrolę; może nadpisać tę z obrazu.
- [ ] Dla tych dwóch aplikacji: HTTP GET, localhost, 8080, `/api/health`,
  kod 200. Odpowiedź jest JSON-em; nie wymagać literalnego `OK`. Timingi
  dobrać do startu aplikacji, a nie przepisywać domyślne 80 i `/`.
- [ ] Źródło TTT: urllib, interval 30s, timeout 5s, start 10s, retries 3;
  Inventory: curl, interval/timeout/start 5s, retries 10. To parametry obrazów
  potwierdzone w kodzie 6 września, nie odczyt efektywnych nadpisań UI.
- [ ] Zmienne zaufanych proxy są runtime-only, bez buildtime. Nazwa jest
  zależna od frameworka, np. `FORWARDED_ALLOW_IPS` dla Uvicorn albo własna
  `TRUSTED_PROXY_IPS` dla jawnie skonfigurowanego ASP.NET. Oddzielne rekordy
  Production/Preview w panelu są zakresami środowisk, nie dwiema kopiami w
  pojedynczym kontenerze.

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

Stan na podstawie dowodów z 5–9 września: TTT i Inventory mają działające
ręczne wdrożenia po digestach i pozytywne healthchecki. TTT przeszedł test
real-IP i spoofingu; Inventory ma testy dokładnych proxy/niezaufanego peera,
zielone CI i operator-potwierdzony runtime. Automatyczne CD, pełne limity
proxy/edge, wspólny stan limitera i testy rollbacku pozostają zadaniami. Dla
każdego brakującego odczytu zapisujemy „niezweryfikowane”.
