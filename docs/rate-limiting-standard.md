# grela.dev rate-limiting and resource-protection standard

## Purpose

Every public service uses layered protection. The layers are complementary: Cloudflare absorbs edge abuse, Nginx Proxy Manager protects an individual origin, application policies understand identity and operation cost, concurrency controls protect scarce workers, Docker limits noisy neighbours, and Fail2ban handles persistent offenders.

There is no single low HTTP limit shared by every `grela.dev` application.

## Required layers

1. **Cloudflare:** DDoS/WAF protection and rules per hostname. Expensive paths receive stricter rules. Static content is cached where safe.
2. **Nginx Proxy Manager:** a per-application baseline, stricter location-specific limits, request-body limits, connection caps and timeouts. A rejected request returns `429` and a meaningful `Retry-After` where possible.
3. **Application:** token bucket or sliding-window policies keyed by the best available identity. Anonymous traffic uses IP and optionally session; authenticated traffic uses user ID plus an IP safety floor; API clients use their API key or account.
4. **Concurrency and quota:** AI, LLM, FFmpeg, export, scraping and background-job entrypoints have a concurrency cap. Paid or externally constrained operations also have daily/monthly quota and a circuit breaker.
5. **Docker/system:** every service has CPU, memory and PID limits. One application must not exhaust the shared VPS.
6. **Fail2ban:** protects SSH and repeated authentication failures. It can ban clients that persistently generate `401`, `403` or `429`, but a single rate-limit response never creates a ban.

## Client identity and proxies

- Cloudflare and NPM must preserve the real client IP.
- Nginx trusts client-IP headers only from current Cloudflare networks.
- Applications trust forwarded headers only from NPM or their isolated Docker network.
- Direct public access to application containers is forbidden.
- Before enabling an HTTP Fail2ban jail, verify the IP recorded in NPM logs. Never risk banning a Cloudflare or NPM address shared by legitimate users.
- `--forwarded-allow-ips "*"` and direct parsing of arbitrary `X-Forwarded-For` are not acceptable production defaults.

## Algorithms

- **Token bucket:** preferred general API policy because it permits a controlled burst.
- **Sliding window:** preferred where an exact recent request count matters.
- **Concurrency semaphore/queue:** mandatory for scarce CPU/GPU/external operations; it supplements rather than replaces a time-based limit.
- **Quota:** required where aggregate daily/monthly cost matters.
- In-memory state is acceptable only for one process and one production instance. Multiple workers and blue-green/multi-instance deployments use Redis or another shared atomic store.

## Per-project profiles

| Application | Baseline and special policies |
| --- | --- |
| Inventory Generator | Reads approximately 120/min/IP; CSV/HTML export approximately 10/min/IP; DOCX approximately 5/min/IP with burst 2; 2–4 concurrent exports; cap request body and row count. |
| NetFilmx | Login approximately 5/15 min per IP+login; registration approximately 3/hour/IP; search 30–60/min; admin upload 2–5/hour/user; one FFmpeg transcode on the current VPS. HLS segments use CDN, connection and bandwidth controls instead of a small request limit. |
| Air Quality | Cached metadata high limit; stations/history 60–120/min; search 30–60/min; estimation 20–30/min; map tiles 300–600/min with edge cache. Workers/training remain private. |
| Tic-Tac-Toe AI | Move token bucket refills at 30/min/IP with burst 10; match requests consume a separate 30-game/min/IP budget according to requested games; two concurrent AI operations. Move state to Redis before multiple workers or true blue-green traffic. |
| Smakosz | Separate login/register/reset/resend/refresh policies; authenticated write/upload/review limits per user; upload size and daily quota; search 30/min and suggest 60/min with burst; cache/concurrency for recommendations. Internal workers and Hangfire stay private. |
| URL Shortener | Redirects receive a high adaptive edge limit; link creation 5–10/min/IP plus daily quota; management per authenticated user. Add SSRF/private-address protection, anti-phishing controls and a bounded analytics queue. |
| Flatfinder | Scraping is authenticated/private and job-based, with one global job per portal and a low daily quota; export 1–3/min/user; listing reads moderate. Training and teacher VLM are never public endpoints. Respect portal backoff and terms. |
| MovieRAG | Search 20–30/min/IP with embedding cache/concurrency; Ask AI 2–5/10 min/IP, Turnstile, daily quota, 1–2 global LLM operations, SSE connection/time limits and a Groq circuit breaker. |
| grela.dev portfolio | Cloudflare Pages static edge caching and WAF; no NPM or application limiter until a dynamic endpoint exists. A future contact form uses Turnstile and 3–5 submissions/hour/IP. |

POS Order System, AudioMaster, clean-commits-skill, LeetCode solutions and SpotifyAdBlocker are not public web services and do not receive HTTP rate limiting.

## Operations and acceptance

- Log limit decisions without credentials, tokens or request bodies.
- Monitor `429` share, latency, concurrent work, queue size, CPU and memory.
- Establish a normal-traffic baseline before tightening limits.
- Test real-IP handling through Cloudflare → NPM → application.
- Test a normal burst, a sustained violation, recovery after the window and multi-user isolation.
- Document exact production values in the owning repository; the figures above are safe starting estimates, not immutable constants.
