# Spotify Ad Blocker — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **54%**  
Forecast / prognoza: **2027-03-30–2027-07-20**, 16–24 h, medium confidence / średnia pewność

## English

### Purpose and current state

Spotify Ad Blocker is a desktop utility with implementation and README already present. No explicit license, automated tests or CI were found. Built executables and IDE metadata are not currently tracked. Because the project interacts with a third-party service, publication needs a clear compatibility and terms review.

### Completed and verified

- Core desktop code and user-facing README exist.
- The repository does not track `.idea` or built `.exe` artifacts.
- No VPS hosting or public hostname is required.

### Remaining work and known issues

- Review current Spotify terms and platform behavior before presenting the tool as supported.
- Add a clear disclaimer: independent project, no Spotify affiliation, trademarks belong to their owner.
- Decide licensing after verifying every bundled asset and dependency.
- Add unit tests for process/state detection and failure recovery using mocks or fixtures.
- Add CI for build/test/lint on the supported platform.
- Document supported versions, limitations, privacy and safe uninstall.
- Produce versioned release artifacts and checksums only after clean-machine testing.
- Avoid collecting credentials or sensitive listening data.

### Decisions

No server-side rate limiting applies. Any polling or Spotify API interaction should still use bounded frequency, exponential backoff and official quotas. The roadmap will use an original geometric placeholder, not Spotify artwork or logo, unless separately licensed.

## Polski

### Cel i stan bieżący

Spotify Ad Blocker to narzędzie desktopowe z istniejącym kodem i README. Nie znaleziono licencji, testów ani CI. Repozytorium nie śledzi plików `.idea` ani zbudowanych `.exe`. Ze względu na integrację z zewnętrzną usługą publikacja wymaga przeglądu zgodności i warunków.

### Wykonane i zweryfikowane

- Istnieją kod aplikacji i README.
- Artefakty IDE i binaria nie są śledzone.
- Projekt nie wymaga VPS ani domeny.

### Do zrobienia i znane problemy

- Sprawdzić aktualne warunki Spotify i działanie platformy.
- Dodać informację o braku afiliacji i prawach do znaków.
- Ustalić licencję po sprawdzeniu zasobów i zależności.
- Dodać testy detekcji stanu/procesu i odzyskiwania na mockach.
- Dodać CI build/test/lint.
- Opisać wspierane wersje, ograniczenia, prywatność i odinstalowanie.
- Wydać wersjonowane artefakty dopiero po clean-machine test.
- Nie zbierać danych logowania ani wrażliwych danych odsłuchu.

### Decyzje

Limity serwerowe nie dotyczą projektu. Polling lub oficjalne API nadal wymagają ograniczonej częstotliwości, backoff i respektowania quota. Roadmapa nie wykorzysta logo Spotify bez osobnej podstawy prawnej.

