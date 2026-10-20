# Roadmap editing instructions

Read [the operating standard](docs/operating-standard.md) before planning tasks.
The October 20, 2026 owner decision applies to all current and future repositories:
downtime is accepted; no uptime SLA, mandatory backups, off-host copies, restore
drills or availability exercises. Do not recreate these as default release gates.
Keep correctness/security/resource/cost checks and existing release safeguards.
This policy does not authorize deleting data, disabling backup timers or deploying apps.

Edit project tasks and decisions in `projects/*/project.json`, then regenerate
reports with `python3 scripts/sync_reports.py --write`. Preserve stable task IDs
and evidence dates. A requirement withdrawn by the owner is not a test passed;
do not invent progress or treat historical effort estimates as a fresh forecast.
Update shared instructions for future projects as well as individual records.

Keep private topology, credentials and operator evidence in the private
infrastructure repository. Repository hygiene remains planned under
[its standard](docs/repository-hygiene-standard.md); no implicit branch renaming,
history rewrite or cleanup. New branch names describe the task without agent names.

Validate JSON/schema/report consistency and the relevant existing site checks.
