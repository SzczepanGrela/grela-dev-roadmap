# MovieRAG — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **88%**  
Forecast / prognoza: **2027-03-18–2027-07-01**, 24–40 h, medium confidence / średnia pewność

## English

### Purpose and current state

MovieRAG is a deployed retrieval-augmented movie application with separate API, frontend and vector database services. It is publicly reachable at `movierag.grela.dev`, returned HTTP 200 and has green CI. The repository already contains a detailed README and roadmap, but no explicit license was found.

### Completed and verified

- API, frontend and pgvector-backed retrieval stack are deployed.
- The public HTTPS endpoint responded successfully.
- The latest CI passed.
- Documentation and an internal project roadmap are substantial.
- Containerized services have been running stably on the shared VPS.

### Remaining work and known issues

- Decide and add a license after checking model, dataset and poster/artwork rights.
- Complete documented backup and restore procedures and perform a restore drill.
- Finish the planned v1 scope and reconcile this public roadmap with the project roadmap.
- Run Lighthouse/accessibility checks and address material regressions.
- Add separate limits for browsing/search, model inference and any ingestion/admin endpoints.
- Use concurrency caps and queues for expensive inference/embedding work; return clear overload responses.
- Verify Cloudflare/NPM limits and trusted proxy ranges.
- Add candidate preflight/rollback, then blue-green for stateless API/frontend while keeping database migrations backward-compatible.
- Add production screenshot refresh and basic service-level monitoring.

### Decisions

MovieRAG needs cost-aware rather than purely request-count limits. Ordinary browsing can tolerate bursts, but inference, embedding and ingestion need low concurrency, queue bounds and possibly per-user quotas. The database remains a shared stateful dependency during blue-green.

## Polski

### Cel i stan bieżący

MovieRAG to wdrożona aplikacja RAG dla filmów z osobnymi usługami API, frontendu i bazy wektorowej. `movierag.grela.dev` zwrócił HTTP 200, a CI jest zielone. Repozytorium ma szczegółowe README i roadmapę, lecz nie znaleziono jawnej licencji.

### Wykonane i zweryfikowane

- API, frontend i pgvector działają na VPS.
- Publiczny HTTPS odpowiedział poprawnie.
- Najświeższe CI przeszło.
- Dokumentacja i roadmapa projektu są rozbudowane.
- Kontenery stabilnie działają na współdzielonym serwerze.

### Do zrobienia i znane problemy

- Ustalić i dodać licencję po sprawdzeniu praw do modeli, danych i grafik.
- Dokończyć backup/restore i wykonać próbne odtworzenie.
- Zamknąć zakres v1 i zsynchronizować obie roadmapy.
- Wykonać Lighthouse/accessibility i poprawić istotne regresje.
- Rozdzielić limity przeglądania, inferencji i ingestion/admin.
- Ograniczyć współbieżność kosztownych operacji i zastosować kolejki.
- Zweryfikować Cloudflare/NPM i trusted proxies.
- Dodać preflight/rollback i blue-green dla stateless usług z kompatybilnymi migracjami.
- Automatyzować screenshot i monitoring.

### Decyzje

Limity muszą uwzględniać koszt. Przeglądanie może mieć burst, natomiast inferencja, embedding i ingestion wymagają małej współbieżności, kolejek i ewentualnie quota użytkownika. Baza pozostaje wspólną usługą stanową.

