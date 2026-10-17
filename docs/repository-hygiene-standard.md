# Standard porządkowania repozytoriów / Repository hygiene standard

**Planowane, 2026-10-17.** Właściciel zlecił dodanie przyszłych zadań, nie ich
wykonanie. Standard dotyczy wszystkich zarządzanych repozytoriów: aplikacji,
stron statycznych, narzędzi, projektów desktopowych, roadmapy, prywatnej
dokumentacji oraz repozytoriów dodanych później. Nie oznacza to, że każde repo
zawiera niepożądane pliki lub wymaga rewrite historii.

W 14 projektach katalogu zadanie ma stałe ID **`repository-hygiene`**, stan
`planned`, ukończenie 0%. Uzupełnia kontrolę `governance` we wszystkich profilach.
Dla repozytoriów poza katalogiem zadania i odkrycie brakujących repo prowadzi
koordynator w prywatnej checkliście R02. Bieżące prace NetFilmx i portfolio trwają
według swoich handoffów; porządki czekają na osobny przydział.

## 1. Najpierw ustalić, co faktycznie jest śledzone

W przyszłym przeglądzie rozróżnić pliki śledzone w indeksie, nieśledzone/ignorowane,
obiekty w historii oraz artefakty poza Git. Dla każdej propozycji zapisać ścieżkę,
powód, zależnych użytkowników/CI i wybór: **zostawić**, **przenieść**, **przestać
śledzić**, **usunąć z uzgodnionej historii**. Nie publikować treści sekretów.

Kandydatami do przeglądu są m.in. wyniki buildów, cache i zależności odtwarzalne,
logi, coverage, zrzuty i kopie baz, pliki środowiska z wartościami, certyfikaty
prywatne, dane użytkowników, duże media, lokalne ustawienia IDE, tymczasowe
notatki/checkpointy agentów i artefakty prób. Sama nazwa lub rozszerzenie nie
rozstrzyga: źródła, lockfile, migracje, syntetyczne fixtures, potrzebne assety,
licencje/credits, instrukcje agentów i celowo archiwizowane dowody mogą być
prawidłową zawartością repo. Nie stosować bezrefleksyjnych wykluczeń typu
wszystkie JSON/SQLite/obrazy lub cała dokumentacja wykonawcza.

## 2. Bieżące pliki i zapobieganie nawrotom

Po uzgodnieniu listy usunąć niepożądane pozycje z wersjonowanego drzewa,
przenosząc potrzebne lokalne dane/artefakty do właściwego miejsca. Uzupełnić
projektowy `.gitignore` i bezpieczne przykłady konfiguracji. `.gitignore` sam
nie wyłącza śledzenia istniejących plików ani nie usuwa ich z dawnych commitów.
Zachować niezacommitowaną pracę, nieopublikowane commity, potrzebne dane i testy.
[Dokumentacja Git](https://git-scm.com/docs/gitignore).

Sprawdzić build/testy z czystego checkoutu i odtworzenie wymaganych artefaktów.
Zaplanować proporcjonalne kontrole CI/pre-commit dla sekretów oraz konkretnych
zakazanych plików, z uzasadnionymi wyjątkami. Nie dodawać obowiązkowej nowej
usługi ani szerokiego blokowania rozszerzeń bez potrzeby projektu.

## 3. Historia: osobna decyzja dla konkretnego repo i plików

Jeśli plik ma zniknąć również z historii, zwykły commit usuwający nie wystarczy.
Przygotować osobny plan rewrite z listą ścieżek/blobów (także dawnych nazw),
branchy/tagów/refów i mierzalnym kryterium braku tych danych. Uwzględnić życzenie
właściciela usunięcia historycznego śladu niepożądanych plików; decyzję „tylko
bieżące drzewo” uzasadnić, a nie utożsamiać jej z wyczyszczeniem historii.

Plan ma objąć:

- zachowanie potrzebnej pracy i ograniczoną dostępem kopię przed operacją;
  dla danych wrażliwych ustalić bezpieczną retencję kopii;
- koordynację aktywnych sesji, otwartych PR-ów i aktualizacji refów;
- próbę w izolowanym klonie, mapę starych/nowych SHA i przegląd diffów;
- wpływ na tagi/podpisy, odwołania do SHA, CI, attestacje i kontrakty wydania;
  stare wyniki/digests pozostają dowodem starego SHA, nie nowego;
- konkretny zakres publikacji przepisanych refów, uprawnienia i plan powrotu;
  ochrona branchy ma być zachowana lub odtworzona po uzgodnionym oknie;
- sprawdzenie świeżego klonu i wszystkich uzgodnionych refów oraz instrukcję
  synchronizacji innych checkoutów, żeby nie przywróciły starej historii;
- osobny przegląd LFS, release assets, CI artefaktów, PR refs/cache i forków,
  jeżeli zawierają te same dane; nie zakładać, że rewrite Git obejmuje je wszystkie.

Rewrite wymaga osobnego zatwierdzenia konkretnego repo i zakresu. Bieżące
zlecenie planowania nie jest zgodą na force-push ani zmianę ochrony branchy.
Jeżeli znalezione zostaną aktywne sekrety, zgłosić je prywatnie i zaplanować
unieważnienie/rotację — samo usunięcie pliku nie unieważnia poświadczenia.

Kryterium brzmi „brak danych w zweryfikowanych, kontrolowanych refach i kopiach”,
nie „plik nigdy nigdzie nie istniał”. Nie można zagwarantować wymazania cudzych
klonów/forków; GitHub może też przechowywać osobne referencje i cache. Ograniczenia
oraz ewentualną potrzebę kontaktu z hostingiem zapisać jawnie.
[GitHub: usuwanie danych z historii](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository).

## 4. Neutralne nazwy branchy

Nazwy mają opisywać zmianę, np. `feat/subtitle-selection`, `fix/session-refresh`,
`chore/repository-hygiene`, `docs/release-plan`. Nie używać nazw agentów lub
narzędzi AI, np. `codex/`, `gemini/`, `claude/`, `chatgpt/`, `antigravity/`,
ani takich tokenów w pozostałej części nazwy. To konwencja pracy, nie zmiana
prawdziwego autorstwa, licencji czy istniejących dowodów historycznych.

Dla istniejących branchy przygotować mapę stara → neutralna nazwa, właściciela,
otwarte PR-y oraz zależności workflow/OIDC/środowisk/skryptów/odnośników. Zmiana
nazwy brancha nie wymaga przepisywania commitów. Aktywne sesje uzgodnią moment
przejścia; zakończone branche można zaplanować do wycofania po potwierdzeniu
scalenia i braku nieopublikowanej pracy. Nie zmieniać domyślnego brancha ani
nie usuwać wszystkich branchy według samego prefiksu. Zachować mapę/historyczne
odnośniki, zamiast fałszować stare raporty.
[GitHub: zmiana nazwy brancha](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/renaming-a-branch).

## 5. Odbiór i raport wykonawcy — późniejszy etap

Zadanie danego repo kończy się dopiero po przeglądzie wykonanych porządków,
sprawdzeniu `.gitignore`/czystego checkoutu i neutralnych aktywnych branchy.
Raport zawiera datę, repo/SHA, listę decyzji o plikach, wynik kontroli historii,
mapę branchy, testy i pozostające wyjątki. Jeżeli rewrite jest potrzebny, lecz
odłożony, pozostawić wyraźne otwarte podzadanie i nie ogłaszać pełnego odbioru.
Nie zamieniać nowego zadania w ponowne testowanie już zaakceptowanego wdrożenia.

Pierwszy budżet **2–4 aktywne godziny na repo** jest wyłącznie rezerwą na
inwentaryzację i rutynowe porządki/plan nazw. Nie jest audytem tego repo ani
wyceną rewrite. Po przeglądzie doprecyzować zakres i estymatę; większe przenoszenie
danych oraz rewrite wymagają osobnego oszacowania. Zadania pozostają planowane,
bez zarezerwowanego okna i bez obecnego wykonania.

## English summary

This is a future cross-repository standard, requested October 17, 2026, not an
execution instruction. Each catalogue project receives a planned
`repository-hygiene` task; coordinator backlog R02 covers the roadmap, private
documentation and repositories outside the catalogue. Review tracked files,
ignore rules, historical content and neutral task-based branch names. Preserve
legitimate source/assets/fixtures/licences/evidence and other sessions' work.
History rewriting is a separately scoped and approved operation, not a side
effect of deleting a file or renaming a branch. Verify the refs/copies under our
control and document external retention limits. No cleanup, branch rename,
force-push, deployment or data removal is performed by this planning update.
