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

## NetFilmx

Nie wracamy do kolejnego backupu, off-host ani prób restore starej wersji.
Zakończone lokalne próby pozostają historią; nie oznaczają naprawy starego katalogu.
Następny krok to ochrona/dostęp, sprawdzony obraz, jeden web, świeży PostgreSQL,
trwałe klucze, jawna migracja/import, limity oraz publiczny HTTPS/login/player smoke.
Przełączenie może mieć przerwę. Wykonanie wydania jest osobno zlecane.

Następnie domykamy rolling i backupy **nowego PostgreSQL, kluczy i potrzebnej
konfiguracji** ze sprawdzeniem odzyskiwania. Nowe konta/pusta historia, odebrany HLS
oraz uploads/worker false pozostają bez zmian. Nie ponawiamy etapu mediów.

## Zadania i estymaty

Stabilne ID (także zawierające historyczne `blue-green`) zostają. Niewykonane
zadania docelowe są otwarte; wycofana praca legacy nie jest zaliczonym testem.
Dotychczasowe godziny/procenty/datowania pozostają historycznymi estymatami, bez
nowej wyceny lub wzrostu postępu samym doprecyzowaniem planu.
