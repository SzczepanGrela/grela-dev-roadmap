# Flatfinder — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **25%**<br>
Forecast / prognoza: **2026-12-04–2027-02-02**, 121–196 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Multi-portal property search, scraping and multimodal classification platform under reconstruction.

The report separates the impressive code volume from milestone completion and deploy readiness. Planning-only update October 17: add repository-hygiene at 0% with provisional 2–4 h, excluding unestimated history rewrite. Previous audit/source dates and task completion retained; aggregate progress/effort recalculated for new scope. Calendar bounds are historical and not rescheduled for this unscheduled task; confidence low pending repository review.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/OlxScrapper` @ `28885c20643b6cf68fbd55d2b9dc0df90383c77f`
- **Source state:** clean public main shallow clone with failing CI October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
- **Tests and CI:** The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists.
- **Production:** flatfinder.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. October 17 target addition: repository hygiene and neutral branch naming remain unverified; existing findings retain their original dates. |
| Quality CI | Blocked | The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Deployment access | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Network, TLS and client identity | Missing | flatfinder.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Runtime safety | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Readiness and preflight | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Verified deployment | Missing | The required complete implementation was not found in the audited flatfinder source. October 20 scope: verify the selected deployment and public smoke; downtime allowed. Earlier missing blue-green/automatic rollback evidence is not a release blocker. Existing status records historical evidence, not a fresh acceptance. |
| Coordination and retention | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Observability | Missing | The required complete implementation was not found in the audited flatfinder source. October 20: backup/uptime alert requirements withdrawn; useful resource/cost diagnostics remain separate. |
| Web identity | Partial | flatfinder has some mechanisms but does not yet satisfy the complete v2 control. |

### Remaining and active tasks

#### Finish package rewrite and frontend

**Implementation · In progress · 45% · difficulty 5/5 · 40–64 h**

The package architecture, backend, scrapers, training and frontend remain at different completion levels.

#### Finish private scraping and model jobs

**Implementation · In progress · 30% · difficulty 5/5 · 18–28 h**

Public anonymous scraping is disallowed; authenticated bounded jobs and offline teacher/training flows remain.

#### Repair CI and verify real/mock workflows

**Quality · Blocked · 25% · difficulty 5/5 · 24–40 h**

The latest public CI is red and blocks trustworthy milestone assessment.

#### Enable a ruleset after CI repair

**Quality · Planned · 0% · difficulty 2/5 · 2–3 h**

GitHub returned no active ruleset or environment.

#### Complete architecture and training documentation

**Documentation · In progress · 45% · difficulty 4/5 · 12–20 h**

The rewrite and legacy paths need a single authoritative architecture and operations description.

#### Build containers and a private job platform

**Delivery · Planned · 0% · difficulty 5/5 · 8–14 h**

No production container/deployment topology exists.

#### Add digests, explicit migrations and deployment smoke

**Delivery · Planned · 0% · difficulty 5/5 · 8–12 h**

October 20 planning revision: Use exact artifacts, private deployment and explicit schema handling; single-instance stop/start with downtime is allowed. No blue-green, backup or recovery-drill gate. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Add job quotas, export limits and monitoring

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

Scraping, export and VLM costs require dedicated quotas and central observability.

#### Finish favicon, metadata and representative preview

**Documentation · In progress · 35% · difficulty 2/5 · 2–3 h**

Design assets exist, but no deployed public UI verifies the final identity.

#### Clean tracked files and review history and neutral branch names

**Quality · Planned · 0% · difficulty 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Architecture decisions

- Public anonymous scraping is forbidden; use authenticated jobs and per-portal concurrency.
- Training and teacher VLM stay offline/private.
- The project follows the v2 standard profile: vps-web.
- Migration target updated September 6: prebuilt GHCR digest in Coolify, Traefik/Tunnel routing and the shared deployment checklist; preserve databases and custom routes. This target update is not a new source/production audit.
- October 20 owner policy: portfolio apps have no promoted user traffic requirement, uptime SLA or mandatory backups. Downtime/stop-start is acceptable; off-host copies, restore drills and availability exercises are optional, not release gates. Keep correctness/security/resource/cost controls and existing data/configuration. docs/operating-standard.md applies to this and future repositories. Prior source/audit dates and effort estimates are historical, not a fresh scope estimate.

## Polski

### Cel i aktualny stan

Wielportalowa wyszukiwarka, scraper i platforma multimodalnej klasyfikacji nieruchomości w przebudowie.

Raport oddziela dużą ilość kodu od ukończenia milestone'ów i gotowości do deployu. Aktualizacja wyłącznie planu 17 października: repository-hygiene 0%, wstępnie 2–4 h, bez jeszcze niewycenionego rewrite. Daty audytu/źródła i ukończenie wcześniejszych zadań zachowane; sumy postępu/pracy przeliczone dla nowego zakresu. Daty kalendarzowe pozostają historyczne, bez wyznaczenia terminu nowego zadania; niska pewność do przeglądu repo.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/OlxScrapper` @ `28885c20643b6cf68fbd55d2b9dc0df90383c77f`
- **Stan źródła:** clean public main shallow clone with failing CI October 20 operating-policy change only: no new source audit or effort/calendar re-estimate; mandatory backup/uptime work withdrawn.
- **Testy i CI:** The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists.
- **Produkcja:** flatfinder.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. Cel dopisany 17 października: porządki repo i neutralne nazwy branchy niezweryfikowane; wcześniejsze ustalenia zachowują własne daty. |
| Quality CI | Zablokowane | Najnowszy workflow Quality jest czerwony i blokuje uznanie tej kontroli za spełnioną. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Bezpieczeństwo runtime | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Readiness i preflight | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Sprawdzone wdrożenie | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. Zakres 20 października: sprawdzić wybrane wdrożenie i publiczny smoke; przerwa dozwolona. Wcześniejszy brak blue-green/automatycznego rollbacku nie blokuje wydania. Status zachowuje dowód historyczny, nie jest nowym odbiorem. |
| Koordynacja i retencja | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Obserwowalność | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. 20 października: wycofano wymóg alertów backup/uptime; użyteczna diagnostyka zasobów/kosztów pozostaje osobno. |
| Tożsamość webowa | Częściowe | Projekt flatfinder ma część mechanizmów, ale nie spełnia jeszcze całej kontroli v2. |

### Zadania pozostałe i bieżące

#### Dokończyć rewrite pakietów i frontend

**Implementacja · W toku · 45% · trudność 5/5 · 40–64 h**

The package architecture, backend, scrapers, training and frontend remain at different completion levels.

#### Dokończyć prywatne joby scrapingu i modeli

**Implementacja · W toku · 30% · trudność 5/5 · 18–28 h**

Public anonymous scraping is disallowed; authenticated bounded jobs and offline teacher/training flows remain.

#### Naprawić CI i zweryfikować real/mock workflows

**Jakość · Zablokowane · 25% · trudność 5/5 · 24–40 h**

The latest public CI is red and blocks trustworthy milestone assessment.

#### Włączyć ruleset po naprawie CI

**Jakość · Planowane · 0% · trudność 2/5 · 2–3 h**

GitHub returned no active ruleset or environment.

#### Dokończyć dokumentację architektury i treningu

**Dokumentacja · W toku · 45% · trudność 4/5 · 12–20 h**

The rewrite and legacy paths need a single authoritative architecture and operations description.

#### Zbudować kontenery i prywatną platformę jobową

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–14 h**

No production container/deployment topology exists.

#### Dodać digests, jawne migracje i smoke wdrożenia

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–12 h**

October 20 planning revision: Use exact artifacts, private deployment and explicit schema handling; single-instance stop/start with downtime is allowed. No blue-green, backup or recovery-drill gate. Previous completion/effort values retain their historical estimate; no new implementation or live test is claimed. Stable task ID retained.

#### Dodać quota jobów, limity eksportu i monitoring

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

Scraping, export and VLM costs require dedicated quotas and central observability.

#### Dokończyć favicon, metadane i reprezentatywny podgląd

**Dokumentacja · W toku · 35% · trudność 2/5 · 2–3 h**

Design assets exist, but no deployed public UI verifies the final identity.

#### Uporządkować śledzone pliki, historię i neutralne nazwy branchy

**Jakość · Planowane · 0% · trudność 3/5 · 2–4 h**

Planned by owner on 2026-10-17; no repository hygiene audit or cleanup performed. Inventory tracked/ignored/generated/sensitive files; preserve legitimate assets and work; prepare scoped removal/ignore rules, prevention checks and agent-free branch names. Review historical removal separately, with exact paths/refs, isolated rehearsal, SHA/release impact and explicit rewrite approval. Do not rename active branches or rewrite now. Standard and acceptance: https://github.com/SzczepanGrela/grela-dev-roadmap/blob/main/docs/repository-hygiene-standard.md . Initial 2–4 h covers discovery/routine cleanup planning and implementation only when assigned; rewrite/large remediation requires re-estimation.

### Decyzje architektoniczne

- Publiczny anonimowy scraping jest zabroniony; używać uwierzytelnionych jobów i concurrency per portal.
- Trening i teacher VLM pozostają offline/prywatne.
- Projekt podlega profilowi standardu v2: vps-web.
- Cel migracji uaktualniony 6 września: digest GHCR w Coolify, routing Traefik/Tunnel i wspólna checklista; zachować bazy i custom routes. Zmiana celu nie jest nowym audytem źródła/produkcji.
- Decyzja właściciela 20 października: aplikacje portfolio nie wymagają ciągłości ruchu, SLA uptime ani backupów. Przerwy/stop-start są akceptowalne; off-host, restore i ćwiczenia ciągłości są opcjonalne, nie blokują wydania. Zachować kontrole funkcji/bezpieczeństwa/zasobów/kosztów i istniejące dane/konfigurację. docs/operating-standard.md obejmuje to i przyszłe repozytoria. Starsze daty audytu/źródeł i estymaty pozostają historyczne, bez nowej wyceny zakresu.
