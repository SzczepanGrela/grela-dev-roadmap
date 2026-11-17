# NetFilmx: krótsza atrybucja pod filmem

`operator-declared`, 2026-11-16: zaakceptowano układ tytuł/rok/opis, krótka
atrybucja i link do sekcji filmu na istniejącej stronie „Twórcy i licencje”.
`observed`, 2026-11-16: [PR #9](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/9)
wdrożony healthy jako `eb9f6ca8235b00080e031de2b0f5bae32ee70aa2`, obraz `sha256:07477009b04960516e2c4e414ab20a75f2c93eff07f50c4d9b0f3ed5bec67974`.
[Końcowe CI](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/43956130670) i weryfikacja podpisów/SBOM przeszły.

Dużą ramkę zastąpił dyskretny separator, autorzy, licencja i odnośnik.
Pełne informacje mają grupy Film, Grafiki i Przygotowanie materiału.
Zachowano siedem atrybucji filmów, trzynaście grafik, źródła i odrębne licencje.
Dodano polskie opisy oraz wersjonowanie pamięci słowników.

Osiem istniejących testów .NET i 18 JS przeszło. Lokalny Chromium/Firefox:
1440/375/320 px, PL/EN, klawiatura, link do filmu, brak poziomego przepełnienia,
pełne informacje także bez JavaScriptu. Publiczny Firefox potwierdził układ,
linki i PL/EN; publiczne wersje/zasoby i odmowy bez tokena/CSRF przeszły.
To kontrola prezentacji, bez nowego odbioru prawdziwego Turnstile/odtwarzania.

`ui-mobile-credits` jest rozpoczęty w tym zakresie; szerszy redesign i odbiór
na urządzeniach pozostają otwarte. Bez nowej estymaty procentowej i bez zmian
mediów, schematu, kluczy czy konfiguracji dostawców. Flagi zwykłego CD nadal false;
końcowy caller/rolling/backupy, admin i wcześniejsze odroczenia pozostają otwarte.
Poprzedni [rekord odtwarzacza/runtime](2026-11-14-netfilmx-player-controls.md) zachowano.
