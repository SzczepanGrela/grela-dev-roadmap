# Clean Commits Skill — status report / raport stanu

Audit date / data audytu: **2026-08-24**  
Estimated completion / szacowane ukończenie: **81%**  
Forecast / prognoza: **2027-03-07–2027-06-13**, 6–10 h, high confidence / wysoka pewność

## English

### Purpose and current state

Clean Commits Skill is documentation/instruction tooling for producing focused Git commits. It already has a useful skill definition, README and MIT license. The remaining work is small and mostly concerns portability and automated validation.

### Completed and verified

- The skill and supporting documentation are present.
- MIT licensing is explicit.
- The repository is compact enough to audit manually.
- No hosting or production service is required.

### Remaining work and known issues

- Replace the literal `<your-username>` placeholder with a portable example or setup variable.
- Add a minimal CI check for required files, metadata format, links and example consistency.
- Add a small fixture repository or scripted acceptance scenario.
- Clarify behavior around dirty worktrees, generated files and user-owned changes.
- Tag a versioned release after validation.

### Decisions

No rate limiting, Fail2ban, NPM or deployment topology applies. Quality is measured through instruction validation and representative Git fixtures. The project can finish independently when convenient even though its displayed order follows the portfolio roadmap.

## Polski

### Cel i stan bieżący

Clean Commits Skill to zestaw instrukcji pomagający tworzyć małe, logiczne commity Git. Ma już definicję skilla, README i licencję MIT. Pozostały zakres jest niewielki i dotyczy przenośności oraz automatycznej walidacji.

### Wykonane i zweryfikowane

- Skill i dokumentacja istnieją.
- Licencja MIT jest jawna.
- Repozytorium jest małe i łatwe do ręcznego audytu.
- Projekt nie wymaga hostingu.

### Do zrobienia i znane problemy

- Zastąpić dosłowny placeholder `<your-username>` przenośnym przykładem lub zmienną.
- Dodać CI sprawdzające wymagane pliki, metadane, linki i przykłady.
- Dodać fixture repozytorium lub skryptowany scenariusz akceptacyjny.
- Doprecyzować brudny worktree, pliki generowane i zmiany należące do użytkownika.
- Po walidacji utworzyć wersjonowany release.

### Decyzje

Rate limiting, Fail2ban, NPM i deployment nie mają zastosowania. Jakość będzie sprawdzana przez walidację instrukcji i reprezentatywne fixture'y Git.

