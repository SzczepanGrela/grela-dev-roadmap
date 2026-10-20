# Effort estimation methodology

**Doprecyzowanie właściciela, 2026-10-20:** [standard utrzymania](operating-standard.md): przerwy są akceptowalne podczas przygotowania i migracji. Docelowy Coolify obejmuje rolling update i backupy potrzebnych danych/kluczy/konfiguracji z proporcjonalnym odbiorem. Pierwsze uruchomienie nie oznacza pełnego domknięcia. Bez liczbowego SLA i HA; dalsze backupy/restore legacy NetFilmxa nie wracają do planu. Starsze datowane wyniki zachowują swój zakres.

## Scope

Task ranges describe the remaining active engineering effort, not elapsed calendar time. They include implementation, review, tests, local verification and the task-specific documentation needed to finish safely. Waiting for DNS propagation, external approvals or unattended CI does not count as active effort.

## Source-audited baseline

All estimates use the `source-audited` mode. Estimates account for repository inspection, bounded implementation, tests, documentation and diagnosis. Uncertainty is assessed per task rather than applying one global productivity factor:

- established tests, typed code and narrow changes receive a larger productivity benefit;
- unfamiliar legacy code, dirty worktrees and weak test coverage retain a wider uncertainty range;
- DNS, external services, legal review, production observation, migrations and rollback exercises retain substantial human effort;
- high-risk infrastructure work is not shortened merely because configuration can be generated quickly.

Each `project.json` records the exact source revision and worktree/source state used for the estimate. Estimates must be reviewed after significant code changes or newly discovered constraints.

## Hours, work days and calendar forecast

- One work day equals eight hours of focused engineering work.
- Task day ranges are derived from task hours and conservatively rounded up to the nearest quarter day.
- Project totals equal the sum of normalized task ranges.
- Calendar forecasts assume 30 focused hours per week, distributed as six focused hours on each weekday, and follow the explicit project `order`; they are planning ranges, not delivery commitments.
- Confidence communicates uncertainty in the known scope and environment, independently from task difficulty.

---

# Metodyka estymacji nakładu pracy

Zakresy opisują pozostały aktywny nakład inżynierski, a nie czas kalendarzowy. Obejmują implementację, review, testy, lokalną weryfikację i dokumentację potrzebną do bezpiecznego zakończenia zadania. Oczekiwanie na propagację DNS, zewnętrzną akceptację lub samoczynnie działające CI nie jest liczone jako aktywna praca.

Wszystkie estymacje zakładają audyt kodu, implementację i weryfikację konkretnego projektu. Korzyść nie jest jednym rabatem procentowym: jest większa dla wąskich zmian w typowanym i przetestowanym kodzie, a mniejsza dla legacy, brudnych worktree, infrastruktury produkcyjnej, migracji, kwestii prawnych i ręcznych prób rollbacku.

Jeden dzień roboczy oznacza osiem godzin skupionej pracy. Dni są wyliczane z godzin i zaokrąglane w górę do ćwierci dnia. Suma projektu jest sumą zadań, a prognoza kalendarzowa zakłada 30 godzin pracy tygodniowo, po sześć godzin w każdy dzień roboczy, oraz kolejność projektów zapisaną w danych. Prognoza nie jest zobowiązaniem terminowym.

## Calendar reconciliation — 2026-09-06

Calendar ranges were rebased from Monday 2026-09-07 using the existing project order and 6 focused hours each weekday (30/week). Only Tic-Tac-Toe and Inventory effort/status were reassessed in this delivery review; other projects retain their previous audited effort and audit dates. Calendar shifts are derived planning projections, not new code or production evidence. Remaining operator verification and automation work is included in the revised ranges.

## Session allocation override — 2026-10-03

Inventory, NetFilmx and grela-dev effort/status were re-audited against their
named revisions. Their calendar ranges now reflect independent worker lanes:
Inventory corrections first, a parallel dedicated Codex NetFilmx session and
Gemini portfolio after Inventory corrective review. This overrides catalog order
for these three forecasts only; other project forecasts retain their older
dates. Per-lane 30-hour weeks remain an estimate, not guaranteed agent throughput.
Live acceptance, operator availability and content/license decisions widen ranges.
Weighted percentages measure task progress, not production/security acceptance.

3 października ponownie oszacowano Inventory, NetFilmx i grela-dev względem
wskazanych rewizji. Ich daty uwzględniają osobne sesje i zależność portfolio od
review Inventory; nie oznaczają sekwencyjnej kolejki całego katalogu ani nowego
audytu pozostałych projektów. Dostępność operatora, odbiór produkcji i decyzje
treści/licencji nadal są niepewne. Procenty nie są certyfikatem odbioru.

### Inventory corrective follow-up — October 3

Main 1410c48 replaces the earlier 005dc25 source checkpoint for Inventory.
Accepted HTML/null fixes and test additions reduce some work; reproduced cache
overwrite, unqualified admission and incorrect runbook add corrective work.
Task totals are now 21–40 hours, low confidence, October 5–20 planning range.
Other project estimates and dates are unchanged. Portfolio still follows reviewed
Inventory corrections; no deployment/failure window is promised by these dates.

## Inventory closeout — October 11

Inventory operations documentation and bounded rolling acceptance are complete,
including scoped resource cleanup and merged source retirement. Only those two
tasks are removed from remaining effort: 13–25 hours becomes 8–16 hours, and
weighted overall progress becomes 94%. Remaining shared platform/presentation
estimates retain their earlier scope; this is not 100% platform compliance.
The low-confidence planning range is October 13–20, without a reserved operator
window. Other project estimates and dates are unchanged.

## NetFilmx explicit UI scope — October 16

The candidate remains `f4aca03`; no application changes or production acceptance
are inferred from the manual-media update. A separate planned
[`ui-mobile-credits`](netfilmx-ui-modernization.md) task adds 16–32 active hours
with implementation weight 2 and 0% completion. Existing task completion and
October 4 effort ranges are retained without remeasurement. Consequently the
implementation dimension changes from 85% to 51%, weighted overall progress
from 70% to 57%, and remaining effort from 35–66 to 51–98 hours. This is newly
explicit scope, not lost work or a regression in the accepted candidate.

At six focused hours per weekday in the dedicated worker lane, rebasing from
October 16 gives October 28–November 9 as a **low-confidence planning range**.
It books no operator time or UI start. Re-estimate after the visual brief and
remaining media findings; other projects retain their own dates.

Osobne zadanie UI/mobile/credits dodaje jawny zakres, a nie cofa odebranych prac.
16–32 godziny to wstępny nakład do ponownego oszacowania po briefie. Pozostałe
estymaty nie zostały ponownie zmierzone; daty są prognozą, nie obietnicą.

## Cross-repository hygiene planning — October 17

The owner requested a future hygiene task for every repository, without execution.
Each of the 14 catalogue records gains a planned quality task at 0%, weight 1,
with a provisional 2–4 active-hour allowance for discovery/routine cleanup and
branch planning. This is an allocation placeholder, not a new source audit or a
flat estimate for history rewriting. Rewrite and larger remediation must be
scoped and estimated after reviewing each repository.

Existing task completion, audited source revisions and audit dates are retained.
Aggregate percentages, hours and work days are recalculated mechanically for the
added task; lower percentages do not undo accepted implementation or deployment.
All forecast confidence is now low while this new scope is unassessed. Historical
calendar bounds are preserved for provenance and do **not** include a newly
reserved hygiene window; reschedule when the work is assigned. Other repositories,
including the roadmap and private documentation, are covered by coordinator R02.

Dodanie planowanych porządków nie jest deklaracją znalezienia problemów w każdym
repo. Spadek procentów wynika z większego zakresu; dotychczasowe odbiory i daty
audytów zachowują ważność. Nie wyznaczono nowych terminów wykonania.
