# Flatfinder — status report / raport stanu

Audit date / data audytu: **2026-08-25**<br>
Estimated completion / szacowane ukończenie: **26%**<br>
Forecast / prognoza: **2026-11-24–2027-01-21**, 119–192 h, low confidence / pewność: low

> This report is synchronized from `project.json` and the versioned delivery-control catalog. / Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.

## English

### Purpose and current state

Multi-portal property search, scraping and multimodal classification platform under reconstruction.

The report separates the impressive code volume from milestone completion and deploy readiness.

### Audit evidence

- **Repozytorium:** `SzczepanGrela/OlxScrapper` @ `28885c20643b6cf68fbd55d2b9dc0df90383c77f`
- **Source state:** clean public main shallow clone with failing CI
- **Tests and CI:** The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists.
- **Production:** flatfinder.grela.dev did not resolve in public DNS on 2026-08-25.

### v2 standard compliance

Profile: **VPS web application**. Statuses reflect only evidence available on the audit date.

| Control | Status | Evidence |
| --- | --- | --- |
| Repository governance | Partial | GitHub returned no active ruleset or environment; remaining elements were assessed from the repository. |
| Quality CI | Blocked | The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists. |
| Immutable release | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Deployment access | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Network, TLS and client identity | Missing | flatfinder.grela.dev did not resolve in public DNS on 2026-08-25. |
| Abuse protection | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Runtime safety | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Readiness and preflight | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Atomic promotion and rollback | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Coordination and retention | Missing | The required complete implementation was not found in the audited flatfinder source. |
| Observability | Missing | The required complete implementation was not found in the audited flatfinder source. |
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

#### Add digests, migrations, preflight and blue-green

**Delivery · Planned · 0% · difficulty 5/5 · 8–12 h**

The stateful application requires schema-compatible promotion and exact release artifacts.

#### Add job quotas, export limits and monitoring

**Delivery · Planned · 0% · difficulty 4/5 · 5–8 h**

Scraping, export and VLM costs require dedicated quotas and central observability.

#### Finish favicon, metadata and representative preview

**Documentation · In progress · 35% · difficulty 2/5 · 2–3 h**

Design assets exist, but no deployed public UI verifies the final identity.

### Architecture decisions

- Public anonymous scraping is forbidden; use authenticated jobs and per-portal concurrency.
- Training and teacher VLM stay offline/private.
- The project follows the v2 standard profile: vps-web.

## Polski

### Cel i aktualny stan

Wielportalowa wyszukiwarka, scraper i platforma multimodalnej klasyfikacji nieruchomości w przebudowie.

Raport oddziela dużą ilość kodu od ukończenia milestone'ów i gotowości do deployu.

### Dowody audytu

- **Repozytorium:** `SzczepanGrela/OlxScrapper` @ `28885c20643b6cf68fbd55d2b9dc0df90383c77f`
- **Stan źródła:** clean public main shallow clone with failing CI
- **Testy i CI:** The latest two CI runs failed at 28885c2 and a752d73; no ruleset or environment exists.
- **Produkcja:** flatfinder.grela.dev did not resolve in public DNS on 2026-08-25.

### Zgodność ze standardem v2

Profil: **Aplikacja webowa na VPS**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu.

| Kontrola | Status | Dowód |
| --- | --- | --- |
| Zarządzanie repozytorium | Częściowe | GitHub nie zwrócił aktywnego rulesetu ani środowiska; pozostałe elementy oceniono z repozytorium. |
| Quality CI | Zablokowane | Najnowszy workflow Quality jest czerwony i blokuje uznanie tej kontroli za spełnioną. |
| Niezmienne wydanie | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Dostęp wdrożeniowy | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Sieć, TLS i tożsamość klienta | Brak | Docelowa domena lub kompletna konfiguracja routingu/TLS nie jest obecnie dostępna. |
| Ochrona przed nadużyciami | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Bezpieczeństwo runtime | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Readiness i preflight | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Atomowa promocja i rollback | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Koordynacja i retencja | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
| Obserwowalność | Brak | W audytowanym źródle projektu flatfinder nie znaleziono wymaganej kompletnej implementacji. |
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

#### Dodać digests, migracje, preflight i blue-green

**Wdrożenie · Planowane · 0% · trudność 5/5 · 8–12 h**

The stateful application requires schema-compatible promotion and exact release artifacts.

#### Dodać quota jobów, limity eksportu i monitoring

**Wdrożenie · Planowane · 0% · trudność 4/5 · 5–8 h**

Scraping, export and VLM costs require dedicated quotas and central observability.

#### Dokończyć favicon, metadane i reprezentatywny podgląd

**Dokumentacja · W toku · 35% · trudność 2/5 · 2–3 h**

Design assets exist, but no deployed public UI verifies the final identity.

### Decyzje architektoniczne

- Publiczny anonimowy scraping jest zabroniony; używać uwierzytelnionych jobów i concurrency per portal.
- Trening i teacher VLM pozostają offline/prywatne.
- Projekt podlega profilowi standardu v2: vps-web.
