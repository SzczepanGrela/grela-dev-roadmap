# Spotify Ad Blocker — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **27%**<br>
Forecast / prognoza: **2026-12-17–2027-02-23**, 13–24 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Windows tray utility that detects and skips Spotify advertisements.

The roadmap must not imply affiliation with Spotify or legal certainty. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/SpotifyAdBlocker` @ `11c7a3c07a848cf48ccae709f997f99dbaea21be`
- **Source state:** clean public main shallow clone
- **Tests and CI:** No GitHub Actions runs, ruleset or environment were found.
- **Production:** Not applicable: the project is a Windows desktop utility.

### v2 standard compliance

Profile: **Desktop application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Missing | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Missing | No GitHub Actions runs, ruleset or environment were found. |
| Immutable release | Missing | The required complete implementation was not found in the audited spotify ad blocker source. |
| Deployment access | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Network, TLS and client identity | Not applicable | Not applicable: the project is a Windows desktop utility. |
| Abuse protection | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Runtime safety | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Readiness and preflight | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Atomic promotion and rollback | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Coordination and retention | Missing | The required complete implementation was not found in the audited spotify ad blocker source. |
| Observability | Not applicable | The control does not apply to the spotify ad blocker project profile. |
| Web identity | Not applicable | The control does not apply to the spotify ad blocker project profile. |

### Remaining and active tasks

#### Stabilize detection, process and audio boundaries

**Implementation · In progress · 55% · difficulty 3/5 · 2–4 h**

Windows integration is coupled and needs testable boundaries and safe process/audio recovery.

#### Add unit tests and Windows CI

**Quality · Planned · 0% · difficulty 3/5 · 3–5 h**

No automated tests or workflow runs exist.

#### Add a license and protected main

**Quality · Planned · 0% · difficulty 2/5 · 1–2 h**

GitHub reports no recognized license or ruleset.

#### Publish PL/EN and compliance documentation

**Documentation · In progress · 35% · difficulty 3/5 · 2–4 h**

README exists, but legal limitations, troubleshooting and attribution need a bilingual treatment.

#### Create a reproducible Windows release

**Delivery · Planned · 0% · difficulty 3/5 · 3–5 h**

No signed or checksummed versioned release workflow exists.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- No web hosting or HTTP rate limiting.
- Document compatibility and service-policy risk without claiming endorsement by Spotify.
- The project follows the v2 standard profile: desktop.

## Polski

### Cel i aktualny stan

Narzędzie Windows w trayu wykrywające i pomijające reklamy Spotify.

Roadmapa nie może sugerować powiązania ze Spotify ani pewności prawnej. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/SpotifyAdBlocker` @ `11c7a3c07a848cf48ccae709f997f99dbaea21be`
- **Stan źródła:** clean public main shallow clone
- **Testy i CI:** No GitHub Actions runs, ruleset or environment were found.
- **Produkcja:** Not applicable: the project is a Windows desktop utility.

### Zgodność ze standardem v2

Profil: **Aplikacja desktopowa**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Brak | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Brak | GitHub nie zwrócił żadnego wykonanego workflow Quality dla tego repozytorium. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu spotify ad blocker nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Sieć, TLS i tożsamość klienta | Nie dotyczy | Kontrola sieci webowej i TLS nie dotyczy tego profilu projektu. |
| Ochrona przed nadużyciami | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Bezpieczeństwo runtime | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Readiness i preflight | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Atomowa promocja i rollback | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Koordynacja i retencja | Brak | W audytowanym źródle projektu spotify ad blocker nie znaleziono wymaganej kompletnej implementacji. |
| Obserwowalność | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |
| Tożsamość webowa | Nie dotyczy | Kontrola nie dotyczy profilu projektu spotify ad blocker. |

### Zadania pozostałe i bieżące

#### Ustabilizować granice detekcji, procesów i audio

**Implementacja · W toku · 55% · trudność 3/5 · 2–4 h**

Windows integration is coupled and needs testable boundaries and safe process/audio recovery.

#### Dodać testy jednostkowe i CI Windows

**Jakość · Planowane · 0% · trudność 3/5 · 3–5 h**

No automated tests or workflow runs exist.

#### Dodać licencję i chroniony main

**Jakość · Planowane · 0% · trudność 2/5 · 1–2 h**

GitHub reports no recognized license or ruleset.

#### Opublikować dokumentację PL/EN i compliance

**Dokumentacja · W toku · 35% · trudność 3/5 · 2–4 h**

README exists, but legal limitations, troubleshooting and attribution need a bilingual treatment.

#### Utworzyć powtarzalne wydanie Windows

**Wdrożenie · Planowane · 0% · trudność 3/5 · 3–5 h**

No signed or checksummed versioned release workflow exists.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Bez hostingu webowego i HTTP rate limitingu.
- Udokumentować ryzyko zgodności bez sugerowania poparcia Spotify.
- Projekt podlega profilowi standardu v2: desktop.
