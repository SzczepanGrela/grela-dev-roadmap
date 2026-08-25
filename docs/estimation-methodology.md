# Effort estimation methodology

## Scope

Task ranges describe the remaining active engineering effort, not elapsed calendar time. They include implementation, review, tests, local verification and the task-specific documentation needed to finish safely. Waiting for DNS propagation, external approvals or unattended CI does not count as active effort.

## Codex-assisted baseline

All estimates use the `codex-assisted-source-audited` mode. Codex is assumed to help inspect the repository, implement bounded changes, update tests and documentation, and diagnose failures. The reduction is assessed per task rather than applied as one percentage:

- established tests, typed code and narrow changes receive a larger productivity benefit;
- unfamiliar legacy code, dirty worktrees and weak test coverage retain a wider uncertainty range;
- DNS, external services, legal review, production observation, migrations and rollback exercises retain substantial human effort;
- high-risk infrastructure work is not shortened merely because configuration can be generated quickly.

Each `project.json` records the exact source revision and worktree/source state used for the estimate. Estimates must be reviewed after significant code changes or newly discovered constraints.

## Hours, work days and calendar forecast

- One work day equals eight hours of focused engineering work.
- Task day ranges are derived from task hours and conservatively rounded up to the nearest quarter day.
- Project totals equal the sum of normalized task ranges.
- Calendar forecasts assume 30 focused hours per week and follow the explicit project `order`; they are planning ranges, not delivery commitments.
- Confidence communicates uncertainty in the known scope and environment, independently from task difficulty.

---

# Metodyka estymacji nakładu pracy

Zakresy opisują pozostały aktywny nakład inżynierski, a nie czas kalendarzowy. Obejmują implementację, review, testy, lokalną weryfikację i dokumentację potrzebną do bezpiecznego zakończenia zadania. Oczekiwanie na propagację DNS, zewnętrzną akceptację lub samoczynnie działające CI nie jest liczone jako aktywna praca.

Wszystkie estymacje zakładają pracę wspomaganą Codexem i audyt kodu konkretnego projektu. Korzyść nie jest jednym rabatem procentowym: jest większa dla wąskich zmian w typowanym i przetestowanym kodzie, a mniejsza dla legacy, brudnych worktree, infrastruktury produkcyjnej, migracji, kwestii prawnych i ręcznych prób rollbacku.

Jeden dzień roboczy oznacza osiem godzin skupionej pracy. Dni są wyliczane z godzin i zaokrąglane w górę do ćwierci dnia. Suma projektu jest sumą zadań, a prognoza kalendarzowa zakłada 30 godzin pracy tygodniowo i kolejność projektów zapisaną w danych. Prognoza nie jest zobowiązaniem terminowym.
