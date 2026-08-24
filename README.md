# grela.dev Roadmap

Public, machine-readable roadmap and audited status reports for Szczepan Grela's portfolio projects.

The repository is the source of truth for the future interactive roadmap website. It contains:

- the canonical portfolio implementation plan;
- bilingual project reports;
- normalized JSON data validated against JSON Schema;
- a shared production and rate-limiting standard;
- a design specification for a static, Mini Metro-inspired roadmap;
- screenshot automation for deployed applications.

## Repository layout

```text
docs/                    Canonical plan, operational standards and site design
projects/<slug>/         One detailed report.md and one normalized project.json
schema/                  Public JSON Schema consumed by validation and the future site
assets/screenshots/      Automatically refreshed application screenshots
assets/placeholders/     Original SVG fallbacks for unavailable or desktop projects
scripts/                 Validation, forecast generation and screenshot automation
```

## Validate the data

```bash
python scripts/validate.py
```

The future site will be generated statically. No production credentials, private infrastructure details, or user data belong in this repository.

---

# Roadmapa grela.dev

Publiczna, maszynowo czytelna roadmapa i raporty stanu projektów portfolio Szczepana Greli. Repozytorium stanowi źródło prawdy dla przyszłej interaktywnej strony, przechowuje dwujęzyczne raporty, dane JSON, standard DevOps, prognozy oraz automatyczne screenshoty.

Szczegółowy plan znajduje się w [`docs/implementation-plan.md`](docs/implementation-plan.md).

## License

Code and original documentation are licensed under the MIT License. Screenshots and third-party visual content are governed by [`NOTICE.md`](NOTICE.md).
