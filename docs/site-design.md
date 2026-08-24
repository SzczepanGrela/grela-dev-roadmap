# Interactive roadmap site specification

## Product intent

The site is a temporary public status surface for portfolio projects. It answers four questions quickly: what exists, what works today, what is being worked on, and what comes next. Detailed project reports remain accessible without making the overview dense.

## Proposed stack

Use Astro for static generation and Markdown content, with one React/TypeScript island for the interactive route map. The build imports validated `project.json` files and project reports. There is no runtime API or database. The output must support both a GitHub Pages base path and a Cloudflare Pages root deployment.

## Mini Metro-inspired overview

- Desktop presents a horizontally scrollable SVG route. Mobile switches to a vertical route.
- The main line follows project `order`; branches reveal significant tasks for the selected project.
- A station is a project. Its progress ring and printed percentage communicate completion.
- Status palette: grey planned, blue active, violet paused, red blocked/at risk, green complete/maintenance.
- Status is never communicated by colour alone: every state has text, an icon and a distinct station treatment.
- Complexity uses one to five diamonds and remains visually independent from status.
- The active segment draws in on load and a small train marker moves subtly toward the current station.
- Hover, keyboard focus or tap opens a preview card with screenshot, localized summary, four progress dimensions, current/next task, difficulty, forecast range and repository/live links.
- Selecting a station opens a statically generated detail page based on `report.md`.

## Interaction and accessibility

- Filters: status, technology, hosting and difficulty.
- PL/EN language switch and light/dark theme.
- Roving keyboard focus for stations, visible focus rings and semantic fallback list.
- `prefers-reduced-motion` disables route drawing, train movement and hover parallax.
- Touch devices use tap/close rather than hover-only content.
- Deep links retain the selected project and filters in the URL.

## Media strategy

A browser client cannot capture arbitrary cross-origin sites because of the same-origin policy, canvas tainting, CSP and frame restrictions. Live iframes are not screenshots and are frequently blocked.

The repository therefore uses Playwright in GitHub Actions. A weekly/manual workflow captures only allowlisted `grela.dev` URLs at 1440×900 and opens a reviewable PR. Failed captures preserve the previous good image. Desktop and unavailable projects use original screenshots or generated SVG placeholders. Media attribution is displayed on detail pages and governed by `NOTICE.md`.

## Page composition

1. Compact hero: roadmap purpose, aggregate completion and last audit date.
2. Metro overview with filters and legend.
3. Accessible project-card/list fallback.
4. Current focus and next three tasks.
5. Methodology: progress weights, forecast basis and confidence.
6. Footer linking the canonical plan, GitHub profile and data schema.

## Non-goals for the first site release

- No account system, comments or editing UI.
- No browser-side calls to private infrastructure.
- No claim that forecast dates are commitments.
- No automatic modification of human-authored task status from GitHub activity alone.
