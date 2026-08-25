# Spotify Ad Blocker — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **27%**<br>
Forecast / prognoza: **2026-12-07–2027-02-11**, 11–20 h, medium confidence / pewność: medium

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Windows tray utility that detects and skips Spotify advertisements.

The roadmap must not imply affiliation with Spotify or legal certainty.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/SpotifyAdBlocker` @ `11c7a3c07a848cf48ccae709f997f99dbaea21be`
- **Source state:** clean public main shallow clone
- **Tests and CI:** No GitHub Actions runs, ruleset or environment were found.
- **Production:** Not applicable: the project is a Windows desktop utility.

### v2 standard compliance

Profile: **Desktop application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Missing | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
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

### Architecture decisions

- No web hosting or HTTP rate limiting.
- Document compatibility and service-policy risk without claiming endorsement by Spotify.
- The project follows the v2 standard profile: desktop.

## Polski

### Cel i aktualny stan

Narzędzie Windows w trayu wykrywające i pomijające reklamy Spotify.

Roadmapa nie może sugerować powiązania ze Spotify ani pewności prawnej.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/SpotifyAdBlocker` @ `11c7a3c07a848cf48ccae709f997f99dbaea21be`
- **Stan źródła:** clean public main shallow clone
- **Testy i CI:** No GitHub Actions runs, ruleset or environment were found.
- **Produkcja:** Not applicable: the project is a Windows desktop utility.

### Zgodność ze standardem v2

Profil: **Aplikacja desktopowa**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Brak | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
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

### Decyzje architektoniczne

- Bez hostingu webowego i HTTP rate limitingu.
- Udokumentować ryzyko zgodności bez sugerowania poparcia Spotify.
- Projekt podlega profilowi standardu v2: desktop.
