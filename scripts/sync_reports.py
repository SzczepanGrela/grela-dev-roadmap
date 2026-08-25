#!/usr/bin/env python3
"""Render bilingual project reports from normalized roadmap records."""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "projects"
STANDARD = ROOT / "standards" / "delivery-controls.json"

DIMENSIONS = {
    "implementation": {"en": "Implementation", "pl": "Implementacja"},
    "quality": {"en": "Quality", "pl": "Jakość"},
    "documentation": {"en": "Documentation", "pl": "Dokumentacja"},
    "delivery": {"en": "Delivery", "pl": "Wdrożenie"},
}
TASK_STATUSES = {
    "planned": {"en": "Planned", "pl": "Planowane"},
    "in-progress": {"en": "In progress", "pl": "W toku"},
    "blocked": {"en": "Blocked", "pl": "Zablokowane"},
    "done": {"en": "Done", "pl": "Gotowe"},
}


def render_language(project: dict, catalog: dict, language: str) -> list[str]:
    is_pl = language == "pl"
    controls = {item["id"]: item for item in catalog["controls"]}
    statuses = catalog["statuses"]
    profile = catalog["profiles"][project["compliance"]["profile"]][language]
    lines = [
        "## Polski" if is_pl else "## English",
        "",
        "### Cel i aktualny stan" if is_pl else "### Purpose and current state",
        "",
        project["summary"][language],
        "",
        project["audit"]["notes"][language],
        "",
        "### Dowody audytu" if is_pl else "### Audit evidence",
        "",
        f"- **Repozytorium:** `{project['repository']['owner']}/{project['repository']['currentName']}` @ `{project['estimation']['sourceRevision']}`",
        f"- **Stan źródła:** {project['estimation']['sourceState']}" if is_pl else f"- **Source state:** {project['estimation']['sourceState']}",
        f"- **Testy i CI:** {project['verification']['ci']}" if is_pl else f"- **Tests and CI:** {project['verification']['ci']}",
        f"- **Produkcja:** {project['verification']['production']}" if is_pl else f"- **Production:** {project['verification']['production']}",
        "",
        "### Zgodność ze standardem v2" if is_pl else "### v2 standard compliance",
        "",
        (f"Profil: **{profile}**. Statusy odzwierciedlają wyłącznie dowody dostępne w dniu audytu."
         if is_pl else f"Profile: **{profile}**. Statuses reflect only evidence available on the audit date."),
        "",
        "| Kontrola | Status | Dowód |" if is_pl else "| Control | Status | Evidence |",
        "| --- | --- | --- |",
    ]
    for item in project["compliance"]["controls"]:
        lines.append(
            f"| {controls[item['id']]['title'][language]} | "
            f"{statuses[item['status']][language]} | {item['evidence'][language]} |"
        )

    lines.extend([
        "",
        "### Zadania pozostałe i bieżące" if is_pl else "### Remaining and active tasks",
        "",
    ])
    for item in project["tasks"]:
        lines.extend([
            f"#### {item['title'][language]}",
            "",
            (f"**{DIMENSIONS[item['dimension']][language]} · {TASK_STATUSES[item['status']][language]} · "
             f"{item['completion']}% · trudność {item['difficulty']}/5 · {item['hoursMin']}–{item['hoursMax']} h**"
             if is_pl else
             f"**{DIMENSIONS[item['dimension']][language]} · {TASK_STATUSES[item['status']][language]} · "
             f"{item['completion']}% · difficulty {item['difficulty']}/5 · {item['hoursMin']}–{item['hoursMax']} h**"),
            "",
            item["evidence"],
            "",
        ])

    lines.extend([
        "### Decyzje architektoniczne" if is_pl else "### Architecture decisions",
        "",
    ])
    lines.extend(f"- {decision[language]}" for decision in project["decisions"])
    lines.append("")
    return lines


def render(project: dict, catalog: dict) -> str:
    forecast = project["forecast"]
    lines = [
        f"# {project['name']['en']} — status report / raport stanu",
        "",
        f"Audit date / data audytu: **{project['audit']['date']}**<br>",
        f"Estimated completion / szacowane ukończenie: **{project['progress']['overall']}%**<br>",
        (f"Forecast / prognoza: **{forecast['earliest']}–{forecast['latest']}**, "
         f"{forecast['remainingHoursMin']}–{forecast['remainingHoursMax']} h, "
         f"{forecast['confidence']} confidence / pewność: {forecast['confidence']}"),
        "",
        "> This report is synchronized from `project.json` and the versioned delivery-control catalog. / "
        "Raport jest synchronizowany z `project.json` i wersjonowanym katalogiem kontroli wdrożeniowych.",
        "",
    ]
    lines.extend(render_language(project, catalog, "en"))
    lines.extend(render_language(project, catalog, "pl"))
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = parser.parse_args()
    catalog = json.loads(STANDARD.read_text(encoding="utf-8"))
    stale: list[Path] = []
    for path in sorted(PROJECTS.glob("*/project.json")):
        project = json.loads(path.read_text(encoding="utf-8"))
        report = path.with_name("report.md")
        expected = render(project, catalog)
        current = report.read_text(encoding="utf-8") if report.exists() else ""
        if current == expected:
            continue
        stale.append(report)
        if args.write:
            report.write_text(expected, encoding="utf-8")
    if stale and args.check:
        print("Roadmap reports are out of sync:", file=sys.stderr)
        for path in stale:
            print(f"- {path.relative_to(ROOT)}", file=sys.stderr)
        return 1
    action = "Updated" if args.write else "Checked"
    print(f"{action} {len(list(PROJECTS.glob('*/project.json')))} synchronized reports.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
