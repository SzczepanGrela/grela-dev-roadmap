# Standard utrzymania projektów portfolio

**Doprecyzowanie właściciela, 20 października 2026:** przerwy są akceptowalne
podczas przygotowania, pierwszego wdrożenia i migracji projektów. **Docelowy stan
w Coolify nadal obejmuje rolling update i backupy.** Poprzedni zapis o trwałej
rezygnacji z backupów był zbyt szeroką interpretacją koordynatora i zostaje zastąpiony.

## Dwa etapy

1. **Pierwsze uruchomienie / migracja:** można zaplanować przerwę i stop/start.
   Nie trzeba przed nim kończyć programu odzyskiwania starej aplikacji ani
   powtarzać wszystkich historycznych prób canary. Nadal chronimy dane, dostęp,
   sekrety, poprawność funkcji i koszty.
2. **Domknięcie docelowego utrzymania:** kwalifikowany obraz CI wdrażany po digescie,
   chroniony dostęp, readiness, rolling update Coolify, publiczny smoke,
   limity zasobów i sprawdzona obsługa rollbacku/niepewnego wdrożenia. Potrzebne
   trwałe dane, klucze i konfiguracja mają backupy: określony zakres, miejsce,
   harmonogram, dostęp, retencję/pojemność, informację o błędzie oraz proporcjonalne
   sprawdzenie odtworzenia. Pierwsze działające wdrożenie nie zamyka tych zadań.

Jedna zwykle działająca instancja web może podczas rolling chwilowo działać obok
następnej. Trzeba uwzględnić zasoby, zgodność schematu, wspólne klucze i procesy
zapisujące dane. Bazy i pojedynczego workera nie duplikujemy automatycznie.
Migracja łamiąca zgodność może nadal wymagać zaplanowanej przerwy.

Nie narzucamy 99%/99,9% SLA, HA na wielu serwerach, stałych replik ani rozbudowanych
prób awarii dla każdego repozytorium. Rolling ogranicza przerwę przy wymianie weba,
ale nie gwarantuje dostępności całego VPS. Wykorzystujemy aktualne, już odebrane
dowody i badamy zmieniony zakres.

Backup dobieramy do rzeczywistych danych. Aplikacji stateless nie dopisujemy
fikcyjnej bazy; zachowujemy właściwe artefakty i konfigurację do odtworzenia.
Hosting statyczny i projekty bez serwera stosują własny profil. Trwały wolumen
nie jest backupem, a kopia bazy panelu Coolify nie zabezpiecza danych wszystkich
aplikacji. Miejsce/off-host i retencję ustalamy dla konkretnego zbioru danych.

Ta zmiana dotyczy planowania wszystkich obecnych i przyszłych repozytoriów.
Nie zmienia kodu ani harmonogramów, nie usuwa danych/kopii/mediów, nie uruchamia
wdrożenia, sprzątania repozytorium ani rewrite historii. Zachowujemy zabezpieczenia
wdrożeń, w tym zatrzymanie mutacji przy nierozstrzygniętym stanie.

## Ochrona publicznych operacji

**Uzgodnienie operatora, 25 października 2026:** stosujemy
[standard ochrony przed botami](anti-bot-standard.md) do publicznych formularzy
kont, anonimowych zapisów i kosztownych operacji przeglądarkowych. Zakres zależy
od funkcji aplikacji; limity i autoryzacja pozostają. Wymagamy walidacji tokenu
w backendzie i osobnego odbioru ochrony. Gotowość strony lub pozytywny test
logowania nie dowodzą ochrony antybotowej. Standard dotyczy również przyszłych
projektów, bez obowiązkowego wyzwania dla statycznych stron, odczytów i mediów.

## NetFilmx

Nie wracamy do kolejnego backupu, off-host ani prób restore starej wersji.
Zakończone lokalne próby pozostają historią; nie oznaczają naprawy starego katalogu.
Zakres pierwszego uruchomienia obejmuje ochronę/dostęp, sprawdzony obraz, jeden
web, świeży PostgreSQL, trwałe klucze, jawną migrację/import, limity oraz publiczny
HTTPS/login/player smoke. [Odbiór z 24 października](2026-10-24-netfilmx-first-launch.md)
potwierdza uruchomienie w tym zakresie. [Decyzja z 25–26 października](2026-10-26-netfilmx-playback-protection.md)
zmienia otwarty `route-protection`: anonimowi widzowie bez rejestracji/walleta,
chroniony admin, Turnstile wydawania dostępu do filmu i prywatny R2 za Workerem.
Nie stosujemy wyzwania na każdy segment HLS. Alerty kosztowe i odcięcie budżetowe
są poza tym zakresem. [Przełączenie z 28 października](2026-10-29-netfilmx-cutover-followup.md)
uruchomiło kwalifikowany web i prywatne media za Workerem. Próby negatywne przeszły,
lecz rzeczywiste odtwarzanie w Firefox zawiodło. Odbiór ochrony pozostaje otwarty;
29 października poprawka main 7559e833 i zgodny tryb Invisible są aktywne.
Późniejsza diagnostyka prawdziwego SDK zawiodła (ready()/async 3857); poprawkę
PR #4/main 9f67ed88 wdrożono i potwierdzono healthy. Pozytywny test człowieka
na nowym wydaniu nadal oczekuje, bez zamknięcia odbioru ochrony.

Następnie domykamy rolling i backupy **nowego PostgreSQL, kluczy i potrzebnej
konfiguracji** ze sprawdzeniem odzyskiwania. Historyczna decyzja o nowych kontach
nie oznacza teraz obowiązku kont widzów; zachowujemy istniejące dane, odebrany HLS
oraz uploads/worker false. Nie ponawiamy etapu mediów.

## Zadania i estymaty

Uzupełnienie z 27 października: stosujemy [standard komponentów wydania](release-components-standard.md)
do rzeczywistych zależności projektu. Web, baza, edge Worker, domeny i klucze mają
odrębne wersje, sposoby zmiany i dowody aktywacji. Wspólny CI nie oznacza wspólnego
deployu. [Aktualny stan NetFilmx](2026-10-29-netfilmx-cutover-followup.md) potwierdza
prywatność R2, aktywację Workera i kwalifikowanego weba z weryfikacją w tle.
Po wcześniejszym błędzie test człowieka na nowej wersji oczekuje; odbiór ochrony
pozostaje otwarty. Normalny CD nadal jest wyłączony. Datowane
[przygotowanie z 27 października](2026-10-27-netfilmx-protection-preparation.md)
nie jest bieżącym odczytem produkcji.

Stabilne ID (także zawierające historyczne `blue-green`) zostają. Niewykonane
zadania docelowe są otwarte; wycofana praca legacy nie jest zaliczonym testem.
Dotychczasowe godziny/procenty/datowania pozostają historycznymi estymatami, bez
nowej wyceny lub wzrostu postępu samym doprecyzowaniem planu.
