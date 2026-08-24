# grela.dev Portfolio — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **26%**  
Forecast / prognoza: **2027-05-04–2027-09-10**, 80–120 h, low confidence / niska pewność

## English

### Purpose and current state

grela.dev is the future public portfolio and interactive project roadmap. The repository currently contains design files but no application scaffold, package manifest, README, license, tests or CI. The public HTTPS check returned Cloudflare 525, so the origin TLS path is not healthy. This roadmap repository is intended to become its content source.

### Completed and verified

- Visual direction and source design material exist.
- Portfolio projects, ordering, normalized status data and shared operational decisions are now defined in the separate `grela-dev-roadmap` repository.
- The intended public domain and Cloudflare front door exist, even though origin TLS is not yet functioning.

### Remaining work and known issues

- Repair the Cloudflare-to-origin TLS configuration and verify strict HTTPS end to end.
- Scaffold the proposed Astro site with a small React/TypeScript island for the interactive line.
- Consume validated `project.json` records at build time and render without client JavaScript as a functional baseline.
- Implement the Mini Metro-inspired horizontal desktop route and vertical mobile route.
- Add bilingual content switching, filters, accessible keyboard/focus behavior and reduced-motion support.
- Render screenshot/fallback media with dimensions and attribution.
- Add sitemap, Open Graph metadata, favicon, robots policy and a helpful 404.
- Add unit, schema, accessibility and Playwright coverage.
- Add CI, static deployment, cache headers and rollback.
- Apply a conservative static-site Cloudflare profile; contact/form endpoints, if added, require separate strict application limits and bot controls.
- Publish a privacy policy before enabling analytics or a contact form.

### Decisions

Astro is the static foundation; React is limited to the interactive roadmap island. Project data remains in the dedicated public roadmap repository and is validated independently. Static pages need edge abuse protection but no broad in-app limiter. Any future form, preview service or dynamic endpoint is reviewed separately.

## Polski

### Cel i stan bieżący

grela.dev ma być publicznym portfolio i interaktywną roadmapą. Repozytorium zawiera obecnie pliki projektowe, ale nie ma scaffoldu aplikacji, manifestu, README, licencji, testów ani CI. Publiczny HTTPS zwrócił Cloudflare 525, więc połączenie TLS do originu nie działa. Niniejsze repo roadmapy ma być źródłem treści.

### Wykonane i zweryfikowane

- Istnieje kierunek wizualny i materiały projektowe.
- Projekty, kolejność, dane stanu i decyzje operacyjne są już zdefiniowane w osobnym `grela-dev-roadmap`.
- Domena i Cloudflare istnieją, mimo że origin TLS wymaga naprawy.

### Do zrobienia i znane problemy

- Naprawić TLS Cloudflare–origin i sprawdzić strict HTTPS.
- Utworzyć Astro z małą wyspą React/TypeScript.
- Czytać zwalidowane `project.json` podczas buildu i zachować działający HTML bez JS.
- Wdrożyć poziomą linię desktopową i pionową mobilną w stylu Mini Metro.
- Dodać PL/EN, filtry, klawiaturę, focus i reduced motion.
- Wyświetlać screenshoty/fallbacki z wymiarami i atrybucją.
- Dodać sitemap, OG, favicon, robots i 404.
- Dodać testy jednostkowe, schema, accessibility i Playwright.
- Dodać CI, statyczny deploy, cache i rollback.
- Dla statycznej strony użyć łagodnego profilu Cloudflare; formularze wymagają osobnych ścisłych limitów i ochrony botowej.
- Przed analityką/formularzem opublikować politykę prywatności.

### Decyzje

Astro jest podstawą statyczną, React tylko interaktywną wyspą roadmapy. Dane pozostają w publicznym repo roadmapy i są walidowane osobno. Każdy przyszły dynamiczny endpoint będzie oceniany oddzielnie.

