# Standard wydania aplikacji z usługami zewnętrznymi

Uzupełnienie standardu z 27 października 2026, na podstawie przygotowania NetFilmx.
Stosować do rzeczywistych komponentów projektu; nie nakłada obowiązku Workera,
Turnstile, bazy ani nowego płatnego planu na aplikację, która ich nie potrzebuje.

## Osobne komponenty i stany

Dla weba, bazy, edge Workera, domen, konfiguracji i kluczy zapisać właściciela,
rewizję/wersję, sposób zmiany, konsumentów oraz zgodność z pozostałymi elementami.
Kod testowany w jednym CI nie oznacza wspólnego wdrożenia. Podać wprost, które
komponenty aktualizuje workflow, a które wymagają odrębnej procedury.

Rozróżniać: **zaimplementowane → zakwalifikowane → opublikowane → skonfigurowane
→ uruchomione → odebrane**. Każdy stan ma datę i dowód. Obraz na registry,
utworzony widget, zapisany mount lub Worker bez trasy nie dowodzą aktywnej ochrony.
Odczyt ustawień nie jest testem zachowania, a test z atrapą nie testuje dostawcy.

## Dostęp, klucze i konfiguracja

- Sekrety mają określony magazyn, uprawnienia, konsumentów i odzyskiwanie.
  Do publicznej dokumentacji nie trafiają prywatne ID, ścieżki, wartości ani hashe
  sekretów. Klucz weryfikujący może być publiczny; podpisujący pozostaje prywatny.
- Produkcja i preview muszą mieć oddzielne uprawnienia. Preview nie dziedziczy
  produkcyjnych sekretów; nieużywane wpisy są puste/wyłączone.
- Montowanie kluczy sprawdzić w działającym kontenerze, również RW/RO i UID/mode.
  Etykieta pola w panelu lub poprawny JSON nie dowodzą skutecznych uprawnień.
- Dostęp administratora serwera i token CI to różne uprawnienia. Krótkotrwały token
  nie ogranicza istniejącego dostępu root. Opisać zakres i wycofanie tokenu;
  prywatny runner musi przejść własny test, nie dziedziczy odbioru sesji operatora.
- Pin obrazu/wersji zapewnia odtwarzalny wybór, ale nie zapewnia automatycznych
  aktualizacji. Bot PR, build i wdrożenie to osobne mechanizmy.

## Chroniona ścieżka i odbiór

- Jednorazowa weryfikacja człowieka i dłuższy grant mają oddzielny cykl życia.
  Callback zakończonej próby nie może unieważnić aktywnej sesji/odtwarzania ani
  zmienić nowszej próby. Sprawdzić opóźnione success/error/expiry/timeout i retry.
- Autoryzacja chronionego obiektu musi nastąpić przed każdym cache hit/odczytem.
  Sprawdzić także zewnętrzny cache, publiczne aliasy storage, preview i domeny
  dostawcy. CORS nie zastępuje kontroli dostępu. Publiczne wyjątki mają jawną listę.
- Podpisany URL jest poświadczeniem. Logi request URL, tail i śledzenie nie mogą
  zapisywać tokenów; wyłączyć takie logowanie lub wdrożyć sprawdzoną redakcję.
  Zachować niesekretną diagnostykę potrzebną do wykrywania błędów.
- Limity uwzględniają buforowanie/Range/seek i wspólne IP. Lokalny licznik nie
  gwarantuje globalnego budżetu, a cache hit/odmowa mogą zużywać limit platformy.
  Zapisać uzgodnione zachowanie przy wyczerpaniu limitu i awarii.
- Healthcheck, zwykły smoke, pozytywna próba człowieka i negatywny test ochrony
  mają osobne wyniki. Nie dodawać produkcyjnego obejścia wyzwania dla testów.
  Wyraźnie zapisać odłożony test lub opcjonalną funkcję; nie nazywać ich odebranymi.

## Wycofanie zmiany i odzyskiwanie

Rollback wymaga zgodnej pary web/Worker, ustawień/kluczy i schematu bazy.
Zachować ostatnią zaakceptowaną kombinację. Jeśli jej nie ma, uzgodniona zamknięta
przerwa chroni dane do naprawy; nie otwierać storage jako fallback.
Wyłączenie wydawania grantów nie unieważnia już wydanych: potrzebna jest jawna
procedura rotacji/odwołania i test także na rozgrzanym cache.

Backupy obejmują potrzebne dane, klucze i konfigurację niezależnie od miejsca
uruchomienia komponentu. Jednorazowa lokalna kopia i czytelny dump to inne wyniki
niż harmonogram/retencja oraz izolowane odtworzenie. Zachować przyjęty podział
[bootstrap i docelowe utrzymanie](operating-standard.md), bez dodatkowego SLA/HA.

Prywatny rekord zasobów jest źródłem konkretnych wartości; publiczna roadmapa
publikuje zakres i status. Po zmianie komponentu aktualizować oba, z datą dowodu.
