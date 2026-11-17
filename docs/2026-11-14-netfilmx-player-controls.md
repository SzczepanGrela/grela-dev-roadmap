# NetFilmx: ładowanie, Play i Wznów

Stan zaobserwowany 2026-11-14: `872ef4c8/fc168de8` wdrożony healthy.
[PR #7](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/7) rozdziela
ładowanie, gotowość i pauzę: samo ładowanie, następnie „Odtwórz film”, na pauzie
„Wznów”, po zakończeniu „Odtwórz ponownie”. Działa też na telefonie i pełnym
ekranie. Zwykłe wznowienie korzysta z istniejącego grantu, bez kolejnego Turnstile.

18 testów JS i Chromium/Firefox z syntetycznym HLS potwierdzają klawiaturę,
pauzę/wznowienie, pełny ekran i zachowanie jakości/napisów przy odnowieniu.
Lokalny Firefox nie miał kodeka H264; Firefox w CI z kodekami przeszedł.
Po przerwie świeży skan poprzedniego kandydata wykrył nowe podatności ASP.NET.
[PR #8](https://github.com/SzczepanGrela/netfilmx-movie-catalog/pull/8) podniósł runtime
z 10.0.14 do 10.0.15. [Końcowe CI](https://github.com/SzczepanGrela/netfilmx-movie-catalog/actions/runs/43615805647) przeszło, w tym kwalifikacja
obrazu i skan. Wdrożono `872ef4c8b818c95e2946df279e1e9c6c4ca7e854`, obraz `sha256:fc168de81abe0019a9cf6201eff644c6bec4bc9f4713931272c76a5fdced20a3`; podpisy i SBOM potwierdzone.

Publiczna wersja, JS/CSS, widok ładowania i odmowy bez tokena/CSRF potwierdzone.
Zrzut z czasem 0:00/14:48 nie jest odbiorem ruchomego filmu. Pozytywny test człowieka
z prawdziwym dostawcą nadal oczekuje. Gateway/prywatne R2 i dane zachowane;
provider bez zmian, uploads/transkodowanie i obie flagi zwykłego CD false.
Kopia czytelna, bez nowego restore. Admin, końcowy caller/rolling/backupy i wcześniejsze
odroczenia pozostają otwarte; statusy i estymaty bez zmian.

Wcześniejszy [rekord panelu/runtime](2026-11-05-netfilmx-loading-overlay.md) pozostaje historią.
