# Standard utrzymania projektów portfolio

**Decyzja właściciela, 20 października 2026.** Obecne aplikacje nie mają ruchu
użytkowników ani promowanych odnośników według właściciela. To kontekst działania,
nie pomiar ruchu botów. Żadna aplikacja nie wymaga obecnie 99% uptime, wysokiej
dostępności ani backupów. Zasada dotyczy wszystkich obecnych i przyszłych
repozytoriów, również roadmapy i dokumentacji infrastruktury.

## Domyślny zakres

- Przerwy podczas rozwoju, wdrożenia, migracji i naprawy są akceptowalne.
  Pojedyncza instancja i zatrzymanie/uruchomienie aplikacji są poprawną strategią.
  Blue-green, HA, zerowy downtime i osobne próby overlap/drain/awarii nie są
  obowiązkowym zadaniem dla każdego projektu.
- Backupy, kopie poza serwerem, snapshoty, retencja, próby odtworzenia i wybór
  RPO/RTO są opcjonalne i obecnie niezlecone. Ich brak nie blokuje wydania.
  Wycofanie wymogu nie oznacza, że niewykonany test został zaliczony.
- Zachowujemy istniejące działające mechanizmy wdrożeń. Nie trzeba usuwać rolling
  update ani rollbacku, ale następny projekt nie musi odtwarzać całego ich odbioru.
  Przy awarii można zatrzymać aplikację, poprawić ją i ponownie wdrożyć.
- Nadal wymagamy właściwych testów funkcji i bezpieczeństwa, chronionych sekretów,
  kontroli dostępu, zależności, limitów zasobów/kosztów oraz sprawdzenia działania
  po wdrożeniu. Brak promowanego ruchu nie usuwa ryzyka nadużyć publicznego API.
- Trwała baza i klucze potrzebne przy zwykłym restarcie pozostają częścią aplikacji.
  Nie są równoznaczne z backupem. Zakres danych sprawdzamy pod konkretną zmianę.
- Ta aktualizacja planu nie usuwa plików, danych, kopii, mediów ani kontenerów
  i nie wyłącza istniejących harmonogramów. Nie uruchamia wdrożenia ani porządków
  repozytorium. Takie wykonanie ma osobno ustalony zakres.

To aktualna zasada nadrzędna wobec starszych opisów obowiązkowego backupu,
bezprzerwowej promocji i prób odzyskiwania. Datowane wyniki pozostają historią.
Wymagania zwiększamy dopiero po nowej decyzji właściciela, np. gdy pojawią się
użytkownicy lub dane wymagające ochrony.

## NetFilmx

Zakończone próby starego wdrożenia zachowujemy w historii. Nie planujemy następnego
backupu legacy, kopii off-host ani dalszych prób jego odzyskiwania. Kolejny etap
to przygotowanie pierwszego wydania zaakceptowanego katalogu: chroniony proces
wydania, jeden web, świeży PostgreSQL, trwałe klucze, jawna migracja/import,
limity zasobów i sprawdzenie publicznego HTTPS/logowania/playera.
Przełączenie może mieć przerwę; nie wymaga produkcyjnego ćwiczenia rolling/rollback.
Nowe konta, pusta historia, istniejący katalog HLS i wyłączone uploady/worker
pozostają zgodne z planem. Wykonanie wydania nadal wymaga osobnego zlecenia.

## Aktualizacja zadań i estymat

Zachowujemy stabilne ID zadań nawet wtedy, gdy ich stary identyfikator zawiera
`blue-green`. Tytuły i bieżące opisy wskazują uproszczony zakres.
Zakończonych prób nie cofamy; wycofanych wymagań nie liczymy jako wykonanej pracy.
Dotychczasowe godziny, procenty i daty są historycznymi estymatami, a nie nową
wyceną po redukcji zakresu. Przeliczymy je przy kolejnym planowaniu konkretnego
repozytorium; nie tworzymy sztucznego wzrostu postępu samą zmianą polityki.
