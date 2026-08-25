# grela.dev Roadmap

Public, machine-readable roadmap and audited status reports for Szczepan Grela's portfolio projects.

Live site: <https://roadmap.grela.dev/>

The repository includes the production Astro/React static roadmap published at `roadmap.grela.dev`. It reads validated project records and the versioned delivery-control catalog at build time, then generates an interactive overview, a cross-project compliance matrix and one detail page per project.

The repository is the source of truth for the future interactive roadmap website. It contains:

- the canonical portfolio implementation plan;
- bilingual project reports;
- normalized JSON data validated against JSON Schema;
- a shared production and rate-limiting standard;
- a versioned compliance profile and evidence matrix for every project;
- source-audited, Codex-assisted estimates in hours and eight-hour work days;
- a responsive, Mini Metro-inspired Astro/React roadmap frontend;
- screenshot automation for deployed applications.

## Repository layout

```text
docs/                    Canonical plan, operational standards and site design
projects/<slug>/         One detailed report.md and one normalized project.json
schema/                  Public JSON Schema consumed by validation and the future site
standards/               Versioned delivery-control catalog and applicability profiles
assets/screenshots/      Automatically refreshed application screenshots
assets/placeholders/     Original SVG fallbacks for unavailable or desktop projects
scripts/                 Cross-file validation and screenshot automation
src/                     Astro pages, shared styles and interactive React roadmap
public/                  Static site assets such as the original favicon
```

## Validate the data

```bash
python scripts/validate.py
python scripts/sync_reports.py --check
```

## Run the site locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally `http://127.0.0.1:4321`). A production-equivalent static build is created with `npm run build`. Estimation assumptions are documented in [`docs/estimation-methodology.md`](docs/estimation-methodology.md). No production credentials, private infrastructure details, or user data belong in this repository.

---

# Roadmapa grela.dev

Publiczna, maszynowo czytelna roadmapa i raporty stanu projektów portfolio Szczepana Greli. Repozytorium stanowi źródło prawdy dla przyszłej interaktywnej strony, przechowuje dwujęzyczne raporty, dane JSON, standard DevOps, prognozy oraz automatyczne screenshoty.

Repozytorium zawiera opublikowany statyczny frontend Astro/React: interaktywną mapę, macierz zgodności ze standardem v2, filtrowanie, PL/EN, jasny i ciemny motyw oraz generowane podstrony projektów.

Szczegółowy plan znajduje się w [`docs/implementation-plan.md`](docs/implementation-plan.md).

## License

Code and original documentation are licensed under the MIT License. Screenshots and third-party visual content are governed by [`NOTICE.md`](NOTICE.md).
