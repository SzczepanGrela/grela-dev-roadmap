# grela.dev Roadmap

Public, machine-readable roadmap and audited status reports for Szczepan Grela's portfolio projects.

Live site: <https://roadmap.grela.dev/>

The repository now includes a local-first Astro/React prototype of the static roadmap. It reads the validated project records at build time and generates an interactive overview plus one detail page per project. Publishing remains intentionally disabled while the design is reviewed on localhost.

The repository is the source of truth for the future interactive roadmap website. It contains:

- the canonical portfolio implementation plan;
- bilingual project reports;
- normalized JSON data validated against JSON Schema;
- a shared production and rate-limiting standard;
- source-audited, Codex-assisted estimates in hours and eight-hour work days;
- a responsive, Mini Metro-inspired Astro/React roadmap frontend;
- screenshot automation for deployed applications.

## Repository layout

```text
docs/                    Canonical plan, operational standards and site design
projects/<slug>/         One detailed report.md and one normalized project.json
schema/                  Public JSON Schema consumed by validation and the future site
assets/screenshots/      Automatically refreshed application screenshots
assets/placeholders/     Original SVG fallbacks for unavailable or desktop projects
scripts/                 Cross-file validation and screenshot automation
src/                     Astro pages, shared styles and interactive React roadmap
public/                  Static site assets such as the original favicon
```

## Validate the data

```bash
python scripts/validate.py
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

Repozytorium zawiera lokalny prototyp statycznego frontendu Astro/React: interaktywną mapę, filtrowanie, PL/EN, jasny i ciemny motyw oraz generowane podstrony projektów. Publikacja pozostaje wyłączona do czasu zaakceptowania projektu na localhost.

Szczegółowy plan znajduje się w [`docs/implementation-plan.md`](docs/implementation-plan.md).

## License

Code and original documentation are licensed under the MIT License. Screenshots and third-party visual content are governed by [`NOTICE.md`](NOTICE.md).
