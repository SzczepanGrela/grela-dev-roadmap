# NetFilmx: anonimowe oglądanie i ochrona mediów

Target, decyzja operatora z 25–26 października 2026. To plan następnego etapu,
bez wdrożenia aplikacji ani zmian Cloudflare. Zastępuje poprzedni plan ochrony
publicznej rejestracji i logowania widzów. ID route-protection pozostaje bez zmian;
dotychczasowe estymaty godzin i postępu nie są ponownie wycenione.

## Produkt

- Katalog, opisy, plakaty i oglądanie pozostają dostępne bez konta widza.
- Wycofujemy publiczną rejestrację oraz pozorne zakupy i portfel. Usunięcie
  odnośnika w UI nie wystarczy: endpoint tworzenia kont również ma być wyłączony.
- Zachowujemy chronioną administrację, autoryzację ról, sesje, CSRF i ograniczenia
  logowania. Przed wycofaniem rejestracji trzeba zapewnić operatorowi bezpieczny
  sposób utworzenia administratora i potwierdzić jego dostęp.
- Nie usuwamy istniejących danych użytkowników, historii ani mediów. Schemat bazy
  i szersze porządki pozostają poza zakresem tej zmiany.

## Przepływ ochrony

1. Po wybraniu odtwarzania Managed Turnstile dostarcza token do backendu.
2. Backend sprawdza Siteverify, hostname i action oraz wydaje osobne podpisane,
   czasowe uprawnienie do konkretnego filmu. Niepoprawna walidacja nie daje dostępu.
3. Media Worker sprawdza uprawnienie przed cache i odczytem prywatnego R2.
   Segmenty HLS i napisy korzystają z tego uprawnienia bez wyzwania przy każdym
   żądaniu. Obsługa wygaśnięcia ma zachować pozycję odtwarzania i umożliwiać retry.
4. Wspólny cache przechowuje wersjonowane obiekty, bez kluczy zależnych od widza.
   Publiczne grafiki katalogu mają jawną listę dopuszczonych obiektów. Bezpośredni
   publiczny adres bucketu nie może omijać ochrony filmów.

Managed Turnstile obejmie też zachowany formularz administratora, zgodnie ze
[standardem kont](anti-bot-standard.md). Sam widget, CORS albo ukrycie URL-a nie
wystarczają. Ochrona nie jest DRM i nie uniemożliwia kopiowania pobranych mediów.

## Limity i koszty

Operator potwierdził Workers Free zrzutem panelu 26 października. Plan uwzględnia
100 000 żądań dziennie na całe konto i 10 ms CPU na żądanie. Przy sprawdzaniu
każdego żądania przez Worker także trafienia cache i odmowy wykorzystują jego
limit. Po wyczerpaniu kwoty dostęp ma być zamknięty, bez publicznego fallbacku.
To może czasowo zatrzymać odtwarzanie i dotyczy wspólnego limitu konta.

Limity nadużyć muszą pozwalać na buforowanie, seek, zmianę jakości i widzów za
wspólnym IP. Lokalny licznik nie jest dokładnym globalnym limitem kosztów.
**Alerty kosztowe i odcięcie budżetowe są wyłączone z tego zadania decyzją
operatora.** Nie zmienia to istniejących budżetów innych projektów ani przyszłej
sygnalizacji błędów backupów. Nie obiecujemy nieprzekraczalności free tier R2.

## Kolejność i odbiór

Najpierw powstanie draft PR aplikacji z backendem, Workerem, testami i kontraktem
konfiguracji. Następnie przegląd kodu/CI oraz przygotowanie widgetu, kluczy,
administratorów i ustawień wydania. Dopiero gotowy zestaw umożliwia skoordynowane
przełączenie aplikacji i domeny mediów na prywatny R2. Rollback ma zachować ochronę
lub zamknąć odtwarzanie na czas naprawy.

Wymagamy testów braku/fałszywego/wygasłego/replayed tokenu, złego hosta/action,
awarii walidacji, uprawnienia do innego filmu, omijania bramki oraz ciepłego cache
bez autoryzacji. Odrzucone żądania i poprawne cache hits mają nie czytać R2.
Testy obejmą również admina, brak publicznego signup, publiczne grafiki,
GET/HEAD/Range, prawdziwy odtwarzacz i napisy. Testy z mockiem/kluczami testowymi
są osobne od późniejszego odbioru prawdziwego Turnstile w produkcji.

[Pierwszy start z 24 października](2026-10-24-netfilmx-first-launch.md) pozostaje
odebrany w swoim zakresie. Nie powtarzamy kodowania, publikacji ani pełnego
odbioru biblioteki. Uploads/worker false, docelowy rolling i backupy nowego stanu,
niepewność synchronizacji Sintela oraz odłożone próby urządzeń pozostają osobnymi
punktami. Nowa ochrona nie jest jeszcze zaimplementowana ani odebrana.

## Źródła

- [Walidacja Turnstile](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Cache API](https://developers.cloudflare.com/workers/runtime-apis/cache/)
- [Limity Workers](https://developers.cloudflare.com/workers/platform/limits/)
- [Semantyka rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/)
