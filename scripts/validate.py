#!/usr/bin/env python3
"""Cross-file validation for roadmap content using only the Python standard library."""

from __future__ import annotations

import json
import math
import sys
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "projects"
DIMENSION_WEIGHTS = {
    "implementation": 40,
    "quality": 20,
    "documentation": 15,
    "delivery": 25,
}
VALID_TASK_STATUS = {"planned", "in-progress", "blocked", "done"}


def work_days(hours: int) -> float:
    """Convert effort to eight-hour days, rounded up to a quarter day."""
    return 0 if hours == 0 else math.ceil(hours / 2) / 4


def weighted_progress(tasks: list[dict], dimension: str) -> int:
    selected = [task for task in tasks if task["dimension"] == dimension]
    if not selected:
        raise ValueError(f"dimension {dimension!r} has no tasks")
    denominator = sum(task["weight"] for task in selected)
    return round(sum(task["completion"] * task["weight"] for task in selected) / denominator)


def validate_project(path: Path) -> tuple[dict, list[str]]:
    errors: list[str] = []
    data = json.loads(path.read_text(encoding="utf-8"))
    slug = path.parent.name

    if data.get("slug") != slug:
        errors.append(f"{path}: slug must match directory name")
    if not path.with_name("report.md").is_file():
        errors.append(f"{path}: report.md is missing")

    for field in ("name", "summary"):
        if set(data.get(field, {})) != {"en", "pl"}:
            errors.append(f"{path}: {field} must contain exactly en and pl")

    tasks = data.get("tasks", [])
    task_ids = [task.get("id") for task in tasks]
    if len(task_ids) != len(set(task_ids)):
        errors.append(f"{path}: duplicate task IDs")
    if set(task.get("dimension") for task in tasks) != set(DIMENSION_WEIGHTS):
        errors.append(f"{path}: every progress dimension must have at least one task")

    for task in tasks:
        if task.get("status") not in VALID_TASK_STATUS:
            errors.append(f"{path}: invalid status in task {task.get('id')}")
        if task.get("status") == "done" and task.get("completion") != 100:
            errors.append(f"{path}: done task {task.get('id')} must be 100%")
        if task.get("status") == "planned" and task.get("completion") != 0:
            errors.append(f"{path}: planned task {task.get('id')} must be 0%")
        if task.get("hoursMin", 0) > task.get("hoursMax", 0):
            errors.append(f"{path}: invalid hour range in task {task.get('id')}")
        for suffix in ("Min", "Max"):
            expected_days = work_days(task.get(f"hours{suffix}", 0))
            if task.get(f"days{suffix}") != expected_days:
                errors.append(
                    f"{path}: days{suffix} in task {task.get('id')} must equal {expected_days}"
                )

    calculated: dict[str, int] = {}
    try:
        for dimension in DIMENSION_WEIGHTS:
            calculated[dimension] = weighted_progress(tasks, dimension)
        calculated["overall"] = round(
            sum(calculated[key] * weight for key, weight in DIMENSION_WEIGHTS.items()) / 100
        )
    except (KeyError, TypeError, ValueError) as exc:
        errors.append(f"{path}: cannot calculate progress: {exc}")
    else:
        if data.get("progress") != calculated:
            errors.append(
                f"{path}: progress mismatch; stored={data.get('progress')}, calculated={calculated}"
            )

    forecast = data.get("forecast", {})
    if forecast.get("remainingHoursMin", 0) > forecast.get("remainingHoursMax", 0):
        errors.append(f"{path}: invalid forecast hour range")
    for suffix in ("Min", "Max"):
        task_hours = sum(task.get(f"hours{suffix}", 0) for task in tasks)
        if forecast.get(f"remainingHours{suffix}") != task_hours:
            errors.append(f"{path}: forecast hours{suffix} must equal task total {task_hours}")
        expected_days = work_days(task_hours)
        if forecast.get(f"remainingDays{suffix}") != expected_days:
            errors.append(f"{path}: forecast days{suffix} must equal {expected_days}")
    try:
        if date.fromisoformat(forecast["earliest"]) > date.fromisoformat(forecast["latest"]):
            errors.append(f"{path}: earliest forecast is after latest")
    except (KeyError, TypeError, ValueError):
        errors.append(f"{path}: forecast dates must use YYYY-MM-DD")

    media = data.get("media", {})
    fallback = ROOT / media.get("fallback", "missing")
    if not fallback.is_file():
        errors.append(f"{path}: fallback image does not exist: {fallback}")
    if media.get("captureEnabled"):
        url = data.get("hosting", {}).get("url")
        hostname = urlparse(url or "").hostname or ""
        if hostname != "grela.dev" and not hostname.endswith(".grela.dev"):
            errors.append(f"{path}: screenshot URL must belong to grela.dev")

    return data, errors


def main() -> int:
    paths = sorted(PROJECTS.glob("*/project.json"))
    errors: list[str] = []
    projects: list[dict] = []
    if len(paths) != 14:
        errors.append(f"expected 14 projects, found {len(paths)}")

    for path in paths:
        try:
            project, project_errors = validate_project(path)
            projects.append(project)
            errors.extend(project_errors)
        except (OSError, json.JSONDecodeError) as exc:
            errors.append(f"{path}: {exc}")

    slugs = [project.get("slug") for project in projects]
    orders = [project.get("order") for project in projects]
    if len(slugs) != len(set(slugs)):
        errors.append("project slugs must be unique")
    if sorted(orders) != list(range(1, 15)):
        errors.append(f"project order must be exactly 1..14, got {sorted(orders)}")

    if errors:
        print("Roadmap validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print(f"Validated {len(projects)} project records and reports.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
