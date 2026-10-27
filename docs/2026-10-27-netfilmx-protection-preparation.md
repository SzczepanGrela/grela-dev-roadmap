# NetFilmx — wdrożony katalog i przygotowana ochrona

Stan sprawdzony 27 października 2026. To odbiór implementacji, publikacji obrazu
i przygotowań konfiguracji; **nowa ochrona nie została jeszcze włączona produkcyjnie**.
Szczegółowe identyfikatory zasobów, ścieżki i poświadczenia należą do prywatnej
dokumentacji VPS. Ten zapis uzupełnia [plan ochrony](2026-10-26-netfilmx-playback-protection.md)
i zachowuje [odbiór pierwszego startu](2026-10-24-netfilmx-first-launch.md).

## Co wykonano

- [PR #2](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/2) scalono
  na main `2e7cd6f8a30ff5044953723c0e98775d038c681f`. Drzewo odpowiada odebranemu
  `c9cdd5b7466a114772e622693b6615abddda5876`, w tym poprawce P1.
- Kod zapewnia anonimowe oglądanie, wycofuje publiczną rejestrację i pozorne
  zakupy, zachowuje admina oraz wydaje podpisane uprawnienia do filmu po Turnstile.
  Gateway sprawdza dostęp przed cache/R2; obejmuje HLS, napisy, Range i CORS.
- P1 oddziela życie widgetu od grantu. Spóźnione callbacki poprzedniej próby nie
  zatrzymują odtwarzania ani nie zmieniają kolejnej próby. Regresję odtworzono
  przed poprawką, a po niej sprawdzono Chromium/Firefox i odnowienie grantu.
- [CI main 40460430114](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/40460430114)
  zaliczyło testy/audyty, kwalifikację i skan obrazu, Quality oraz publikację.
  Zakres: 321 testów .NET, 80 Python, 23 gatewaya i testy przeglądarek.
- Opublikowano ten sam kwalifikowany obraz bez przebudowy:
  `ghcr.io/szczepangrela/netfilmx-movie-catalog@sha256:dc5211afde0f6e104e67125ce746032d772951d5f1a02d330d26983541c2d055`.
  Rewizję/platformę i podpisane provenance/SBOM zweryfikowano; obraz pobrano na VPS.
- Utworzono Managed Turnstile, oddzielne klucze RSA/JWKS i media Workera z R2
  bindingiem, limitami oraz kontrolą cache/telemetrii. Worker nie ma jeszcze
  publicznej domeny/trasy; workers.dev i preview są wyłączone.
- W Coolify zapisano nowe zmienne runtime i montowanie klucza tylko do odczytu;
  preview pozostało puste/wyłączone, odtwarzanie nowego mechanizmu wyłączone.
  Skuteczne montowanie trzeba potwierdzić po uruchomieniu nowego kontenera.
- Zachowano jednorazową prywatną kopię nowej bazy, kluczy i konfiguracji na VPS.
  Sprawdzono czytelność; to nie odbiór regularnych backupów ani nowego restore.

## Co działa teraz, a czego jeszcze nie odebrano

Publiczna readiness nadal wskazuje `a5a0d90a332cc47931b5aff924f817ab6366918c`,
czyli poprzedni obraz z pierwszego startu. Odczyt VPS potwierdził zdrowy web i PG,
zachowane 7 filmów/10 napisów, zero użytkowników/adminów i brak restartów/OOM.
Domena mediów nadal prowadzi do publicznego R2; nowy Worker nie chroni tego ruchu.
Powyższe przygotowania nie stanowią dowodu realnego Turnstile ani prywatności mediów.

Obie flagi wdrożeń pozostają false. `production` wymaga zatwierdzenia operatora,
jest ograniczone do main i nie pozwala administratorowi ominąć bramki. Main ma
wymagany PR/Quality i ochronę przed force-push/usuwaniem. Rzeczywiste CD nadal
wymaga konfiguracji dostępu, kontraktu i wywołania z runnera. Nie wystarczy samo
włączenie flagi. W tym stanie Deploy w CI jest celowo pomijany.

Workflowy budują/testują gateway, ale **wdrażają tylko web przez Coolify**.
Aktualizacje Workera i PostgreSQL mają oddzielny cykl; nie wykonuje ich aktualizacja
obrazu aplikacji. Bieżący smoke katalogu/readiness/CSRF nie potwierdza odtwarzania
za gatewayem. Odbiór chronionej ścieżki musi pozostać jawny, bez produkcyjnego bypassu.

Konto administratora nie jest technicznym warunkiem anonimowego oglądania.
Można odłożyć jego utworzenie przez CLI i test panelu; oznacza to nieodebrany dostęp
administracyjny, nie zatrzymanie całej aplikacji. Nie utworzono konta tymczasowego.
Logowanie wymaga loginu i hasła; e-mail jest polem modelu wymaganym przy utworzeniu,
nie drugim identyfikatorem wpisywanym do formularza logowania.

## Kolejność pozostałych etapów

1. `route-protection`: przełączyć media na prywatny R2/gateway, wdrożyć nowy web,
   sprawdzić prawdziwy Turnstile, anonimowe odtwarzanie i odmowy/bypass/ciepły cache.
   Publiczne grafiki pozostają dostępne. Zapisać ewentualne odłożenie testu admina.
2. `immutable-deploy` / `blue-green`: uzupełnić prywatny kontrakt i dostęp CI,
   odebrać rzeczywisty rolling, zgodny rollback, wspólne klucze/schemat i zasoby
   podczas wymiany. Do czasu chronionego baseline nie cofać do publicznego R2.
3. Nowe backupy PG/kluczy/konfiguracji: harmonogram, miejsce, retencja/pojemność,
   widoczność błędu i izolowane odtworzenie. Później kontrolowane normalne
   wywołanie Quality → protected Deploy i dopiero odebrana automatyczna promocja.
4. Osobno UI/mobile/credits/i18n, upload/transkodowanie i porządki repozytorium.

Uploads/transcoding pozostają false; nazwa tej flagi nie dotyczy Cloudflare Workera.
Workers Free, bez alertów kosztowych/spending cutoff zgodnie z decyzją operatora.
Safari/iOS pozostają odłożone, synchronizacja Sintela nierozstrzygnięta. Nie wraca
pełna runda mediów, legacy restore, wymaganie HA ani liczbowego SLA.

Zobacz [standard utrzymania](operating-standard.md),
[standard komponentów wydania](release-components-standard.md) i
[raport projektu](../projects/netfilmx-movie-catalog/report.md).
