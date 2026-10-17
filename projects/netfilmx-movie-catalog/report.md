# NetFilmx Movie Catalog — status report / raport stanu

Audit date / data audytu: **2026-10-17**<br>
Estimated completion / szacowane ukończenie: **54%**<br>
Forecast / prognoza: **2026-10-28–2026-11-09**, 53–102 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

ASP.NET Core VOD catalogue with HLS processing, R2 storage and administration.

Latest October 17 review closes NHP17-1 at draft 82f6a79: fixed honest verifier identity, stopped-result metadata, all controls retained. Coordinator 36 tests and sealed evidence checks pass; worker 3 public samples inspected. CI/audits green with 303 .NET. No further corrective work or repeated transfer. Completed 1398-object publication/full identified-client HTTP and 24 retained old objects keep their earlier scope. Next separate authorization for 17 references and real-media final-image/browser qualification; no activation/deploy in this review. Sintel unresolved, manual trials deferred; uploads/worker false, UI/hygiene planned. Progress 54%, effort 53–102 h and dated estimates unchanged.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Source state:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production.
- **Tests and CI:** CI/CD 39066441683 and dependency audit 39066441637 successful at 82f6a79 in live October 17 readback. Sealed TRX: 303 .NET passed, zero failures/skips; image/scan/Quality pass, Publish/Deploy skipped. Normal PR merge-ref CI does not qualify an activated real-media final image; earlier synthetic recovery remains tied to 986e9aa.
- **Production:** Media publication completed by the authorized worker: 1398 new objects, all 24 old objects retained, no overwrite/delete; operator capacity condition satisfied. Target HTTPS accepted with identified client, not yet browser/final-image acceptance. Coordinator performed read-only samples and no provider mutation. No app merge/deploy/VPS change or manifest activation; uploads/worker false. Seven playback plus ten subtitle references await separate authorization, two playback plus ten subtitle fields still null in shipping catalogue. Production protection/budgets/recovery/cutover remain.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | Main unprotected, zero rulesets/environments at October 12 readback; workflow gate code is not installed protection. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Partial | October 17 82f6a79 CI/audits pass, 303 .NET; NHP17-1 accepted with 36 coordinator publisher tests and inspected worker public samples. Final-image/browser/production acceptance remains; other control dates unchanged. |
| Immutable release | Partial | R1 accepted; one qualified image and digest/attestation workflow prepared. PR publication skipped; effective protection, main digest and bootstrap unaccepted. |
| Deployment access | Partial | Legacy SSH path retired in candidate; scoped private access and protected environment still need effective configuration. |
| Network, TLS and client identity | Partial | Exact proxy source/tests added to candidate; older public routing evidence does not prove new production identity. |
| Abuse protection | Partial | Candidate auth/write/body/concurrency/image bounds implemented; public/aggregate/rolling acceptance remains. |
| Runtime safety | Partial | Local two-web/PG/keyring fixture verifies effective 1 CPU/512 MiB limits, no swap and non-root web; maximum web peak 441.76 MiB. Production/encoder headroom unaccepted. |
| Readiness and preflight | Partial | Explicit migration, runtime-role grants and synthetic empty-catalogue import/refusal pass locally; real accepted manifest and production bootstrap/schema-compatible rollback remain. |
| Atomic promotion and rollback | Partial | R1 accepted October 12: confirmed terminal deployment required before rollback; unknown state stops mutations. Actual protected stateful rolling/rollback still needs acceptance. |
| Coordination and retention | Partial | Preserved source reconciled; local PG/keyring recovery accepted with synthetic media. Real legacy recovery/retention and production rolling remain; upload/worker gates stay separate. |
| Observability | Missing | No accepted central or delivered worker/release/backup alerts. |
| Web identity | Partial | Local desktop/Android credits readability partially confirmed; visual design not approved. Future UI/mobile/credits scope has explicit responsive, accessibility, player and attribution criteria. Other presentation checks remain. |

### Remaining and active tasks

#### Finish i18n, storage and video processing refactor

**Implementation · In progress · 85% · difficulty 5/5 · 10–18 h**

At a357fd4 all seven originals use the shared FFmpegService for H.264/AAC adaptive HLS; 20 variants without upscaling, maximum 1920x1080 box and first audio/stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. Current seven-playback/ten-subtitle proposal is inactive; old two-MP4 proposal is historical. Shipping catalogue unchanged; remaining i18n and later upload/worker gates stay open. Publication tool added at 8c7b8d5; no app runtime or media change in that stage. October 17 later execution: exact HLS objects published; shipping references remain inactive and require a separate activation stage. NHP17-1 accepted at 82f6a79; fixed verifier identity only, no runtime/manifest activation.

#### Modernize UI, mobile interaction and credits presentation

**Implementation · Planned · 0% · difficulty 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Remove warnings, skipped tests and vulnerabilities

**Quality · In progress · 80% · difficulty 4/5 · 5–10 h**

October 17 NHP17-1 closed at 82f6a79: coordinator 36 publisher tests pass, all-method User-Agent and 403 stop/result metadata tested; original content/TLS/CORS/redirect controls unchanged. 17 new/61 prior sealed files verify; worker 3 public samples inspected without adapter. CI/audits green, 303 .NET/image/scan/Quality; Publish/Deploy skipped. Previous publication/full HTTP remains accepted; final-image/browser/production gates and manual deferrals remain.

#### Require green CI on protected main

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Align architecture and operations documentation

**Documentation · In progress · 90% · difficulty 3/5 · 1–3 h**

October 17 NHP17-1 acceptance updates the supported verifier identity and result metadata; historical default HTTP failure and successful adapter retained separately. No corrective assignment or repeat transfer remains. Handoff awaits separate 17-reference activation/final-image stage. Production recovery/cutover separate; UI/mobile/credits and repository hygiene planned; uploads/worker false.

#### Add login, upload and transcoding limits

**Delivery · In progress · 60% · difficulty 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Move build to GHCR and deploy by digest

**Delivery · In progress · 60% · difficulty 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Qualify readiness, stateful rolling updates and rollback

**Delivery · In progress · 35% · difficulty 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain.

#### Add transcoding and deployment metrics

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Do not apply a low request limit to individual HLS segments.
- Keep Hangfire and administrative surfaces private or strongly authorized.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- Fresh PostgreSQL catalogue from existing licensed R2 media, new accounts and empty history; retain legacy database/original objects and exclude old YouTube/demo links.
- Historical October 15 subtitle decision: ten Sintel WebVTTs retained with existing MP4s. The earlier two-MP4/ten-VTT publication proposal is superseded by the October 17 seven-film HLS decision below; preserve its files/evidence, do not apply its patch.
- October 16: preserve scoped manual passes without claiming Sintel synchronization acceptance or inventing an offset. Credits readability is partially confirmed; visual design is not approved. Plan UI/mobile/credits separately after the current release work, retaining all creator/licence/source/change attribution.
- October 17: operator reduced detailed manual testing. Preserve unperformed VLC/Android/Safari checks as deferred, not passed; do not chase exact versions or request another round. Sintel cause and full synchronization acceptance remain unresolved. Reduced scope does not itself authorize media publication.
- October 17: prepare adaptive HLS for all seven originals through the shared pipeline, without upscaling or sync offsets. Technical local review accepted a357fd4; 1398 objects/20 variants with ten byte-identical VTTs. Maximum 1080 bounding box, source-limited quality and first audio/stereo are explicit publication choices. Operator must accept the exact packet/conditions before publication; HTTPS/hash readback precedes separately authorized 17-reference activation and final-image qualification. No current merge/deploy/provider write; uploads/worker false.
- October 17 later execution: accept exact packet publication and identified-client HTTPS result, preserving failed default HTTP evidence and all old objects. Use the fixed honest NetFilmxPublicationVerifier/1.0 User-Agent in the supported CLI; keep all controls and 403 rejection, no browser impersonation or provider-rule changes. No repeat transfer. Manifest activation and final-image/player acceptance remain separate.
- October 17 NHP17-1 accepted at 82f6a79. No further client correction or repeat publication; manifest activation remains separately authorized.

## Polski

### Cel i aktualny stan

Katalog VOD ASP.NET Core z HLS, magazynem R2 i panelem administracyjnym.

Najnowszy odbiór 17 października zamyka NHP17-1 na drafcie 82f6a79: stała jawna identyfikacja weryfikatora, metadane błędów, wszystkie kontrole zachowane. Koordynator: 36 testów i kontrola dowodów zaliczone; sprawdzono trzy publiczne próbki workera. CI/audyty zielone, 303 .NET. Brak dalszej poprawki i potrzeby ponownego transferu. Publikacja 1398 obiektów/pełny HTTP z jawnym klientem oraz zachowane 24 stare obiekty utrzymują wcześniejszy zakres. Następnie osobna zgoda na 17 referencji i kwalifikację finalnego obrazu/playera; bez aktywacji/wdrożenia w tym przeglądzie. Sintel nierozstrzygnięty, próby ręczne odłożone; uploads/worker false, UI/porządki planowane. Postęp 54%, praca 53–102 h i datowane estymaty bez zmian.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/netfilmx-movie-catalog` @ `a357fd455d217cf873d8b3b0b8bdc8d341a737af`
- **Stan źródła:** October 17 bounded review of clean HLS candidate a357fd4 and matching draft PR #1. This source/evidence update does not re-estimate effort: October 16 UI/mobile/credits 16–32 h and earlier task ranges/calendar retain their dates and low confidence. Candidate is not production.
- **Testy i CI:** CI/CD 39066441683 and dependency audit 39066441637 successful at 82f6a79 in live October 17 readback. Sealed TRX: 303 .NET passed, zero failures/skips; image/scan/Quality pass, Publish/Deploy skipped. Normal PR merge-ref CI does not qualify an activated real-media final image; earlier synthetic recovery remains tied to 986e9aa.
- **Produkcja:** Media publication completed by the authorized worker: 1398 new objects, all 24 old objects retained, no overwrite/delete; operator capacity condition satisfied. Target HTTPS accepted with identified client, not yet browser/final-image acceptance. Coordinator performed read-only samples and no provider mutation. No app merge/deploy/VPS change or manifest activation; uploads/worker false. Seven playback plus ten subtitle references await separate authorization, two playback plus ten subtitle fields still null in shipping catalogue. Production protection/budgets/recovery/cutover remain.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | Main bez ochrony, zero rulesets/environments w odczycie 12 października; kod workflow nie stanowi aktywnej ochrony. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Częściowe | CI/audyty 82f6a79 z 17 października zielone, 303 .NET; NHP17-1 odebrane, 36 testów publikatora koordynatora i sprawdzone publiczne próbki workera. Finalny obraz/player/produkcja nadal do odbioru; daty pozostałych kontroli zachowane. |
| Niezmienne wydanie | Częściowe | R1 odebrane; przygotowano kwalifikowany obraz oraz workflow digest/attestation. Publikacja PR pominięta; ochrona, digest main i bootstrap nieodebrane. |
| Dostęp wdrożeniowy | Częściowe | Ścieżka SSH wycofana w kandydacie; prywatny dostęp i chronione środowisko wymagają konfiguracji. |
| Sieć, TLS i tożsamość klienta | Częściowe | Exact-proxy dodano w kodzie/testach; stare dowody routingu nie potwierdzają tożsamości nowej produkcji. |
| Ochrona przed nadużyciami | Częściowe | Limity auth/write/body/współbieżności/obrazów zaimplementowano; odbiór publiczny/aggregate/rolling pozostaje. |
| Bezpieczeństwo runtime | Częściowe | Lokalny test dwóch webów/PG/keyring potwierdza 1 CPU/512 MiB, brak swapu i non-root web; maksymalny pik weba 441.76 MiB. Zapas produkcji/kodowania nieodebrany. |
| Readiness i preflight | Częściowe | Jawna migracja, uprawnienia runtime i syntetyczny import/odmowa importu przechodzą lokalnie; pozostają rzeczywisty manifest i produkcyjny bootstrap/rollback zgodny ze schematem. |
| Atomowa promocja i rollback | Częściowe | R1 odebrane 12 października: rollback wymaga potwierdzonego zakończenia wdrożenia; nieznany stan zatrzymuje mutacje. Pozostaje rzeczywisty chroniony rolling/rollback ze stanem. |
| Koordynacja i retencja | Częściowe | Zachowane źródła uzgodnione; lokalne odzyskiwanie PG/keyring odebrane z syntetycznymi mediami. Pozostają odzyskiwanie/retencja starego wdrożenia i rolling produkcji; upload/worker osobno. |
| Obserwowalność | Brak | Brak odebranych centralnych/dostarczonych alertów workera/wydania/backupów. |
| Tożsamość webowa | Częściowe | Czytelność credits częściowo potwierdzona na komputerze/Androidzie; wygląd niezaakceptowany. Osobne UI/mobile/credits ma kryteria responsywności, dostępności, playera i atrybucji. Pozostały odbiór prezentacji nadal otwarty. |

### Zadania pozostałe i bieżące

#### Dokończyć i18n, storage i przetwarzanie wideo

**Implementacja · W toku · 85% · trudność 5/5 · 10–18 h**

At a357fd4 all seven originals use the shared FFmpegService for H.264/AAC adaptive HLS; 20 variants without upscaling, maximum 1920x1080 box and first audio/stereo. Theora ending/SAR and player readiness/quality switching corrected. Ten Sintel WebVTTs, persistent relations/import and source-retaining upload handling preserved. Current seven-playback/ten-subtitle proposal is inactive; old two-MP4 proposal is historical. Shipping catalogue unchanged; remaining i18n and later upload/worker gates stay open. Publication tool added at 8c7b8d5; no app runtime or media change in that stage. October 17 later execution: exact HLS objects published; shipping references remain inactive and require a separate activation stage. NHP17-1 accepted at 82f6a79; fixed verifier identity only, no runtime/manifest activation.

#### Zmodernizować UI, obsługę mobilną i prezentację credits

**Implementacja · Planowane · 0% · trudność 3/5 · 16–32 h**

Separate future scope after backend/media and first-release acceptance; no redesign started. Operator finds mobile credits readable but dislikes the design. Agree Ania Kubów references and visual preview, then catalogue/watch/credits/auth and shared administration UI. Acceptance: responsive PL/EN, keyboard/touch, actual player/subtitles, complete accessible attribution and physical-device checks. Canonical brief: [UI/mobile/credits](../../docs/netfilmx-ui-modernization.md). Preliminary 16–32 active hours, re-estimate after design brief; not a release date.

#### Usunąć warningi, skipped testy i podatności

**Jakość · W toku · 80% · trudność 4/5 · 5–10 h**

October 17 NHP17-1 closed at 82f6a79: coordinator 36 publisher tests pass, all-method User-Agent and 403 stop/result metadata tested; original content/TLS/CORS/redirect controls unchanged. 17 new/61 prior sealed files verify; worker 3 public samples inspected without adapter. CI/audits green, 303 .NET/image/scan/Quality; Publish/Deploy skipped. Previous publication/full HTTP remains accepted; final-image/browser/production gates and manual deferrals remain.

#### Wymagać zielonego CI na chronionym main

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

October 12 read-only GitHub metadata: main unprotected, zero rulesets/environments, both deployment activation variables absent. Candidate code does not install reviewer/main restrictions. Configure and verify protection before merge/credentials; no governance settings changed in this review.

#### Uzgodnić dokumentację architektury i operacji

**Dokumentacja · W toku · 90% · trudność 3/5 · 1–3 h**

October 17 NHP17-1 acceptance updates the supported verifier identity and result metadata; historical default HTTP failure and successful adapter retained separately. No corrective assignment or repeat transfer remains. Handoff awaits separate 17-reference activation/final-image stage. Production recovery/cutover separate; UI/mobile/credits and repository hygiene planned; uploads/worker false.

#### Dodać limity logowania, uploadu i transkodowania

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–7 h**

Candidate exact trusted proxy handling, auth/write/body/concurrency/image bounds remain implemented. Limits are process-local. Public client/edge behavior and aggregate upload/transcoding costs remain unaccepted; uploads default off.

#### Przenieść build do GHCR i wdrażać digest

**Wdrożenie · W toku · 60% · trudność 4/5 · 4–8 h**

One qualified image, GHCR attestation and serialized Coolify promotion are prepared. R1 is accepted: rollback requires confirmed terminal deployment state; unknown queue/status/cancellation stops mutations. Draft CI publish/deploy skipped. Effective protection, published main digest and separate first healthy bootstrap remain unaccepted.

#### Sprawdzić readiness, rolling update ze stanem i rollback

**Wdrożenie · W toku · 35% · trudność 5/5 · 6–12 h**

Local persistent PostgreSQL/keyring restore and two actual web containers pass on source 986e9aa: cross-instance/recreated/restored sessions and antiforgery, wrong-key rejection and logout/refresh revocation. Synthetic media URLs; 13.487-second DB/key/count restore excludes web startup, not production RTO. Actual protected stateful rolling/rollback, production budgets/recovery and later worker/staging/encoder gates remain.

#### Dodać metryki transkodowania i wdrożeń

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

Worker lifecycle logs and release probes exist in preparation; useful delivered worker/release/backup alerts and central monitoring remain unaccepted.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Nie stosować niskiego limitu requestów do segmentów HLS.
- Hangfire i powierzchnie administracyjne mają być prywatne lub silnie autoryzowane.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Nowy katalog PostgreSQL z istniejących legalnych mediów R2, nowe konta i pusta historia; zachować starą bazę/originals i wykluczyć YouTube/demo.
- Historyczna decyzja o napisach z 15 października: dziesięć WebVTT Sintela zachowanych z istniejącymi MP4. Plan publikacji dwóch MP4 i dziesięciu VTT zastępuje poniższa decyzja o HLS siedmiu filmów z 17 października; zachować pliki/dowody, nie stosować starego patcha.
- 16 października: zachować odebrane próby bez uznawania synchronizacji Sintela ani zgadywania offsetu. Czytelność credits częściowo potwierdzona; wygląd niezaakceptowany. UI/mobile/credits zaplanowane osobno po bieżącym wydaniu, z zachowaniem twórców/licencji/źródeł/zmian.
- 17 października: operator ograniczył szczegółowe próby ręczne. Niewykonane VLC/Android/Safari pozostają odłożone, nie zaliczone; bez ponownej rundy i żądania dokładnych wersji. Przyczyna i pełny odbiór synchronizacji Sintela nierozstrzygnięte. Ograniczenie testów nie jest samo w sobie zgodą na publikację mediów.
- 17 października: HLS wszystkich siedmiu oryginałów przez wspólny pipeline, bez upscalingu i przesuwania synchronizacji. Lokalny odbiór techniczny a357fd4 zaliczony; 1398 obiektów/20 wariantów i dziesięć identycznych bajtowo VTT. Maksymalna ramka 1080, jakość ograniczona źródłem i pierwsze audio/stereo są jawnymi wyborami publikacji. Operator akceptuje konkretny pakiet/warunki przed publikacją; odczyt HTTPS/sum poprzedza osobno autoryzowaną aktywację 17 referencji i kwalifikację finalnego obrazu. Bez bieżącego merge/deploy/zapisu providerów; uploads/worker false.
- Późniejszy odbiór 17 października: przyjąć publikację dokładnego pakietu i HTTPS z jawnym klientem; zachować nieudaną próbę domyślnego HTTP oraz wszystkie stare obiekty. W CLI użyć stałego jawnego User-Agent NetFilmxPublicationVerifier/1.0; wszystkie kontrole i zatrzymanie przy 403 pozostają, bez podszywania się pod przeglądarkę i zmiany reguł providera. Nie ponawiać transferu. Aktywacja manifestu oraz finalny obraz/player pozostają osobnym etapem.
- 17 października NHP17-1 odebrane na 82f6a79. Bez dalszej poprawki klienta i ponownej publikacji; aktywacja manifestu wymaga osobnego upoważnienia.
