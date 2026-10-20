# Roadmap editing instructions

Read [the operating standard](docs/operating-standard.md) before planning tasks.
October 20 clarification applies to all current and future repositories: downtime
is accepted during preparation, bootstrap and migration. Final Coolify closeout
still requires health-gated rolling and backups of necessary durable data/keys/
configuration with proportionate recovery verification. Do not confuse first
routing with final completion. No numeric uptime SLA, permanent replicas or HA.
Further NetFilmx legacy backup/off-host/restore work is withdrawn; new-deployment
backup coverage remains planned. Keep existing release and uncertainty safeguards.
This planning correction does not authorize data deletion, timer changes or deployment.

Edit project tasks/decisions in `projects/*/project.json`, then regenerate reports
with `python3 scripts/sync_reports.py --write`. Preserve stable IDs and dated
results. Do not mark unchecked tasks passed or invent progress/effort estimates.
Update shared instructions for future projects as well as individual records.

Keep private topology, credentials and operator evidence in private infrastructure
docs. Repository hygiene stays planned under [its standard](docs/repository-hygiene-standard.md);
no implicit branch renaming, history rewrite or cleanup. Use neutral new branch names.
Validate JSON/schema/report consistency and the existing site checks.
