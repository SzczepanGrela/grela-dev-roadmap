# Inventory Generator — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **76%**  
Forecast / prognoza: **2026-09-07–2026-09-10**, 16–24 h, high confidence / wysoka pewność

## English

### Purpose and current state

Inventory Generator creates structured inventory data through a hosted .NET application. The repository already contains the core implementation, Docker packaging and VPS delivery path. The production application is intended for `inventory.grela.dev`, but public DNS/HTTPS was not confirmed during this audit.

### Completed and verified

- Core application and generator behavior are implemented.
- Docker and deployment assets are present.
- Two local tests passed during the audit.
- The latest remote CI run was green.
- The local checkout contains an uncommitted change in `wwwroot/css/style.css`; it was treated as user work and not modified.

### Remaining work and known issues

- Review, test and either commit or intentionally discard the existing CSS change.
- Complete the public DNS, Nginx Proxy Manager and HTTPS route, then verify it from outside the VPS.
- Add the shared Cloudflare/NPM protection profile and confirm forwarded-client-IP handling.
- Add deployment preflight that starts and health-checks the candidate before replacing production; retain rollback, then plan blue-green as the target state.
- Capture the first production screenshot after the public endpoint is available.
- Re-run application, browser and container checks after the delivery changes.

### Decisions

The application uses the shared low-cost VPS standard: Cloudflare edge controls, NPM route limits, narrow application-level limits only for expensive operations, Fail2ban for host abuse, and no in-memory limiter state that would prevent future multi-instance deployment. Completion is weighted across implementation (40%), quality (20%), documentation (15%) and delivery (25%).

## Polski

### Cel i stan bieżący

Inventory Generator tworzy ustrukturyzowane dane magazynowe w hostowanej aplikacji .NET. Rdzeń, obraz Dockera i ścieżka wdrożenia na VPS już istnieją. Docelowy adres to `inventory.grela.dev`, ale podczas audytu nie potwierdzono jeszcze publicznego DNS i HTTPS.

### Wykonane i zweryfikowane

- Zaimplementowano podstawową funkcjonalność generatora.
- Repozytorium zawiera pliki Dockera i wdrożenia.
- Dwa lokalne testy zakończyły się powodzeniem.
- Najnowszy zdalny przebieg CI był zielony.
- Lokalny checkout ma zmianę użytkownika w `wwwroot/css/style.css`; nie została zmodyfikowana.

### Do zrobienia i znane problemy

- Przejrzeć i przetestować istniejącą zmianę CSS, a następnie świadomie ją zatwierdzić albo odrzucić.
- Dokończyć DNS, NPM i HTTPS oraz sprawdzić adres spoza VPS.
- Wdrożyć wspólny profil ochrony Cloudflare/NPM i poprawną obsługę adresu klienta.
- Dodać preflight uruchamiający i sprawdzający nowy kontener przed podmianą produkcji, z rollbackiem; docelowo blue-green.
- Po uruchomieniu endpointu wykonać pierwszy automatyczny screenshot.
- Powtórzyć testy aplikacji, przeglądarki i obrazu po zmianach wdrożeniowych.

### Decyzje

Projekt stosuje wspólny standard VPS: Cloudflare, limity tras w NPM, limitowanie w aplikacji wyłącznie drogich operacji oraz Fail2ban na poziomie hosta. Postęp jest średnią ważoną: implementacja 40%, jakość 20%, dokumentacja 15%, delivery 25%.

