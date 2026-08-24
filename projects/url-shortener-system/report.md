# URL Shortener System — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **36%**  
Forecast / prognoza: **2026-12-25–2027-02-24**, 80–120 h, low confidence / niska pewność

## English

### Purpose and current state

URL Shortener System is an early backend for creating short links, redirecting visitors and collecting analytics. It is still on `master` and lacks a README, license, CI, Docker packaging and user interface. No public `s.grela.dev` DNS route was confirmed. Its abuse profile is materially higher than a normal portfolio page.

### Completed and verified

- Core shortening, redirect and analytics concepts are represented in code.
- A generic global limiter exists.
- The repository provides enough foundation to continue rather than restart.

### Remaining work and known issues

- Define ownership, visibility, retention and abuse-reporting rules before public launch.
- Rename the default branch to `main` and add README, license, tests and CI.
- Add Docker packaging, health/readiness checks and deployment automation.
- Replace direct trust of arbitrary `X-Forwarded-For` with framework proxy handling restricted to known Cloudflare/NPM hops.
- Replace unbounded per-click background tasks with a bounded queue/channel and graceful shutdown.
- Introduce distributed, atomic limiter state (Redis) for create, redirect and analytics workloads.
- Apply much stricter limits to anonymous link creation than redirects; use account/IP/device or abuse-signal combinations where appropriate.
- Validate target schemes, block unsafe destinations where policy requires it, and add malware/phishing reporting and administrative takedown.
- Add bounded analytics aggregation, privacy documentation and data expiry.
- Build a minimal accessible UI and browser tests.
- Use candidate preflight/rollback, then blue-green only after shared state and schema compatibility exist.

### Decisions

This project needs a dedicated rate-limit profile, not only the shared defaults. Token bucket is suitable for bounded bursts, fixed/sliding windows are useful for quotas, and concurrency/queue limits protect analytics processing. Fail2ban is not a substitute for application abuse controls because valid HTTP requests can still be malicious.

## Polski

### Cel i stan bieżący

URL Shortener System to wczesny backend skracania linków, przekierowań i analityki. Nadal używa gałęzi `master`, nie ma README, licencji, CI, Dockera ani interfejsu. Nie potwierdzono domeny `s.grela.dev`. Ryzyko nadużyć jest znacznie wyższe niż dla zwykłej strony portfolio.

### Wykonane i zweryfikowane

- Kod reprezentuje podstawy skracania, redirectów i analityki.
- Istnieje ogólny globalny limiter.
- Projekt ma fundament pozwalający go rozwijać bez przepisywania od zera.

### Do zrobienia i znane problemy

- Przed publikacją ustalić własność, widoczność, retencję i obsługę zgłoszeń.
- Przejść na `main`, dodać README, licencję, testy i CI.
- Dodać Docker, health/readiness i automatyczny deploy.
- Nie ufać bezpośrednio dowolnemu `X-Forwarded-For`; akceptować proxy wyłącznie z znanych warstw.
- Zastąpić nieograniczone taski na każde kliknięcie ograniczoną kolejką z poprawnym shutdownem.
- Wdrożyć atomowy, współdzielony limiter w Redis.
- Silnie ograniczyć anonimowe tworzenie linków, ale zachować wysoką przepustowość redirectów.
- Walidować schematy celów, dodać zgłoszenia phishingu/malware i administracyjny takedown.
- Ograniczyć i opisać analitykę oraz retencję danych.
- Dodać dostępny UI, browser tests, preflight/rollback i później blue-green.

### Decyzje

Projekt potrzebuje własnego profilu limitów. Token bucket obsłuży kontrolowane bursty, okna limity okresowe, a ograniczenia kolejki i współbieżności ochronią analitykę. Fail2ban nie zastępuje ochrony semantycznej aplikacji.

