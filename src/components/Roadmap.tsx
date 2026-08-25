import { useEffect, useMemo, useState } from "react";
import type { ComplianceProfile, ComplianceStatus, DeliveryStandard, Language, RoadmapProject, RoadmapTask } from "../lib/projects";

interface Props { projects: RoadmapProject[]; standard: DeliveryStandard }
type Theme = "light" | "dark";
type Filter = "all" | "active" | "maintenance" | "paused";
type ProfileFilter = "all" | ComplianceProfile;

const copy = {
  pl: {
    eyebrow: "PUBLICZNA MAPA REALIZACJI", heading: "Od pomysłu do produkcji.",
    intro: "Jedna mapa pokazująca, które projekty działają, nad czym obecnie pracuję i co pojedzie dalej.",
    audited: "Ostatni audyt", average: "Średnie ukończenie", deployed: "Publicznie dostępne", projects: "Projektów na mapie",
    map: "Mapa projektów", mapHint: "Wybierz stację, aby zobaczyć szczegóły", filters: "Filtry",
    all: "Wszystkie", active: "Aktywne", maintenance: "Utrzymywane", paused: "Wstrzymane",
    technology: "Technologia", anyTechnology: "Dowolna technologia", now: "Teraz", next: "Następnie",
    progress: "Ukończenie", complexity: "Złożoność", forecast: "Prognoza", remaining: "Pozostało", hours: "godz.", days: "dni rob.",
    live: "Otwórz stronę", repository: "Repozytorium", details: "Pełny raport", taskLine: "Linia zadań",
    implementation: "Implementacja", quality: "Jakość", documentation: "Dokumentacja", delivery: "Wdrożenie",
    planned: "Planowany", inProgress: "W toku", blocked: "Zablokowany", done: "Gotowy",
    confidence: "Pewność prognozy", source: "Dane pochodzą z audytowanych plików projektu", estimate: "Estymacja Codex + audyt kodu · 8 h/dzień",
    noResults: "Żaden projekt nie pasuje do filtrów.", reset: "Wyczyść filtry", list: "Pełna lista projektów", selectProject: "Wybierz projekt",
    compliance: "Zgodność ze standardem", complianceHint: "Audytowalne kontrole v2 dla każdego profilu projektu", allProfiles: "Wszystkie profile",
    gapsOnly: "Tylko braki", showAllControls: "Pokaż wszystkie", complianceReady: "gotowych kontroli", profile: "Profil",
  },
  en: {
    eyebrow: "PUBLIC DELIVERY MAP", heading: "From idea to production.",
    intro: "One map showing what is live, what I am working on now and what is moving next.",
    audited: "Last audit", average: "Average completion", deployed: "Publicly available", projects: "Projects on the map",
    map: "Project map", mapHint: "Select a station to inspect it", filters: "Filters",
    all: "All", active: "Active", maintenance: "Maintained", paused: "Paused",
    technology: "Technology", anyTechnology: "Any technology", now: "Now", next: "Next",
    progress: "Completion", complexity: "Complexity", forecast: "Forecast", remaining: "Remaining", hours: "hrs", days: "work days",
    live: "Open live site", repository: "Repository", details: "Full report", taskLine: "Task line",
    implementation: "Implementation", quality: "Quality", documentation: "Documentation", delivery: "Delivery",
    planned: "Planned", inProgress: "In progress", blocked: "Blocked", done: "Done",
    confidence: "Forecast confidence", source: "Data comes from audited project records", estimate: "Codex-assisted, source-audited · 8 hrs/day",
    noResults: "No projects match these filters.", reset: "Reset filters", list: "Complete project list", selectProject: "Select project",
    compliance: "Standard compliance", complianceHint: "Auditable v2 controls for every project profile", allProfiles: "All profiles",
    gapsOnly: "Gaps only", showAllControls: "Show all", complianceReady: "controls complete", profile: "Profile",
  },
};

const gapStatuses = new Set<ComplianceStatus>(["partial", "missing", "unverified", "blocked"]);

const statusLabels: Record<RoadmapProject["status"], Record<Language, string>> = {
  planned: { pl: "Planowany", en: "Planned" }, active: { pl: "Aktywny", en: "Active" },
  paused: { pl: "Wstrzymany", en: "Paused" }, blocked: { pl: "Zablokowany", en: "Blocked" },
  complete: { pl: "Ukończony", en: "Complete" }, maintenance: { pl: "Utrzymywany", en: "Maintained" },
};

const formatDate = (language: Language, value: string) => new Intl.DateTimeFormat(language === "pl" ? "pl-PL" : "en-GB", {
  day: "2-digit", month: "short", year: "numeric",
}).format(new Date(`${value}T12:00:00Z`));

const MAP_WIDTH = 1000;
const MAP_COLUMNS = 7;

const positions = (count: number) => {
  const firstRowCount = Math.min(count, MAP_COLUMNS);
  const secondRowCount = Math.max(0, count - MAP_COLUMNS);
  const spread = (index: number, total: number) => total === 1 ? MAP_WIDTH / 2 : 70 + index * (860 / (total - 1));

  return Array.from({ length: count }, (_, index) => {
    if (index < MAP_COLUMNS) return { x: spread(index, firstRowCount), y: secondRowCount ? 112 : 155 };
    const secondRowIndex = index - MAP_COLUMNS;
    return { x: spread(secondRowCount - secondRowIndex - 1, secondRowCount), y: 315 };
  });
};

const routePath = (count: number) => {
  const points = positions(count);
  if (!points.length) return "";
  return points.slice(1).reduce((path, point, index) => {
    const previous = points[index];
    const middle = Math.round((previous.x + point.x) / 2);
    return `${path} H ${middle} V ${point.y} H ${point.x}`;
  }, `M ${points[0].x} ${points[0].y}`);
};

function Difficulty({ value }: { value: number }) {
  return <span className="difficulty" aria-label={`${value} / 5`}>{Array.from({ length: 5 }, (_, index) => <i key={index} className={index < value ? "filled" : ""} />)}</span>;
}

function TaskRail({ tasks, language }: { tasks: RoadmapTask[]; language: Language }) {
  const t = copy[language];
  const labels = { planned: t.planned, "in-progress": t.inProgress, blocked: t.blocked, done: t.done };
  return <div className="task-rail">{tasks.map((task) => (
    <article className="task" data-task-status={task.status} key={task.id}>
      <span className="task-node" />
      <div className="task-copy">
        <div className="task-meta"><span>{t[task.dimension]}</span><span>{labels[task.status]}</span></div>
        <h4>{task.title[language]}</h4>
        <div className="task-progress"><span style={{ width: `${task.completion}%` }} /></div>
        <div className="task-footer"><strong>{task.completion}%</strong><span>{task.hoursMin}–{task.hoursMax} {t.hours} · {task.daysMin}–{task.daysMax} {t.days}</span><Difficulty value={task.difficulty} /></div>
      </div>
    </article>
  ))}</div>;
}

export default function Roadmap({ projects, standard }: Props) {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const [language, setLanguage] = useState<Language>("pl");
  const [theme, setTheme] = useState<Theme>("dark");
  const [filter, setFilter] = useState<Filter>("all");
  const [technology, setTechnology] = useState("all");
  const [profileFilter, setProfileFilter] = useState<ProfileFilter>("all");
  const [gapsOnly, setGapsOnly] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(projects.find((project) => project.status === "active")?.slug ?? projects[0]?.slug);
  const t = copy[language];

  useEffect(() => {
    const savedLanguage = localStorage.getItem("roadmap-language") as Language | null;
    const currentTheme = document.documentElement.dataset.theme as Theme | undefined;
    const slug = new URLSearchParams(window.location.search).get("project");
    if (savedLanguage === "pl" || savedLanguage === "en") setLanguage(savedLanguage);
    if (currentTheme === "light" || currentTheme === "dark") setTheme(currentTheme);
    if (slug && projects.some((project) => project.slug === slug)) setSelectedSlug(slug);
  }, [projects]);

  const technologies = useMemo(() => [...new Set(projects.flatMap((project) => project.classification.technologies))].sort(), [projects]);
  const filtered = useMemo(() => projects.filter((project) =>
    (filter === "all" || project.status === filter) && (technology === "all" || project.classification.technologies.includes(technology)),
  ), [projects, filter, technology]);
  const selected = filtered.find((project) => project.slug === selectedSlug) ?? filtered[0] ?? projects.find((project) => project.slug === selectedSlug) ?? projects[0];
  const matrixProjects = projects.filter((project) =>
    (profileFilter === "all" || project.compliance.profile === profileFilter) &&
    (!gapsOnly || project.compliance.controls.some((control) => gapStatuses.has(control.status))),
  );
  const average = Math.round(projects.reduce((total, project) => total + project.progress.overall, 0) / projects.length);
  const deployed = projects.filter((project) => project.hosting.deploymentState === "deployed").length;
  const auditDate = [...projects].sort((a, b) => b.audit.date.localeCompare(a.audit.date))[0].audit.date;
  const points = positions(filtered.length);
  const mapHeight = filtered.length > MAP_COLUMNS ? 430 : 305;

  useEffect(() => {
    if (!filtered.length || filtered.some((project) => project.slug === selectedSlug)) return;
    const slug = filtered[0].slug;
    setSelectedSlug(slug);
    const url = new URL(window.location.href);
    url.searchParams.set("project", slug);
    window.history.replaceState({}, "", url);
  }, [filtered, selectedSlug]);

  const selectProject = (slug: string) => {
    setSelectedSlug(slug);
    const url = new URL(window.location.href); url.searchParams.set("project", slug); window.history.replaceState({}, "", url);
  };
  const changeTheme = () => {
    const next = theme === "dark" ? "light" : "dark"; setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("roadmap-theme", next);
  };
  const changeLanguage = (next: Language) => {
    setLanguage(next); document.documentElement.lang = next; localStorage.setItem("roadmap-language", next);
  };

  return <main>
    <header className="site-header">
      <a className="brand" href={baseUrl} aria-label="grela.dev roadmap"><span className="brand-mark"><i /><i /><i /></span><span>grela.dev</span><em>roadmap</em></a>
      <div className="header-actions">
        <div className="language-switch">{(["pl", "en"] as Language[]).map((item) => <button key={item} className={language === item ? "active" : ""} onClick={() => changeLanguage(item)}>{item.toUpperCase()}</button>)}</div>
        <button className="icon-button" onClick={changeTheme} aria-label="Change theme">{theme === "dark" ? "☼" : "◐"}</button>
        <a className="github-link" href="https://github.com/SzczepanGrela" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </header>

    <section className="hero">
      <div className="hero-copy"><span className="eyebrow"><i />{t.eyebrow}</span><h1>{t.heading}</h1><p>{t.intro}</p></div>
      <div className="hero-stats"><article><strong>{average}%</strong><span>{t.average}</span></article><article><strong>{deployed}</strong><span>{t.deployed}</span></article><article><strong>{projects.length}</strong><span>{t.projects}</span></article><article><strong>{formatDate(language, auditDate)}</strong><span>{t.audited}</span></article></div>
    </section>

    <section className="roadmap-section" aria-labelledby="map-title">
      <div className="section-heading"><div><span className="section-number">01</span><h2 id="map-title">{t.map}</h2><p>{t.mapHint}</p></div><div className="legend">{(["active", "maintenance", "paused", "blocked"] as RoadmapProject["status"][]).map((status) => <span key={status}><i data-status={status} />{statusLabels[status][language]}</span>)}</div></div>
      <div className="filter-bar"><span className="filter-label">{t.filters}</span><div className="filter-pills">{(["all", "active", "maintenance", "paused"] as Filter[]).map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{t[item]}</button>)}</div><label className="technology-filter"><span>{t.technology}</span><select value={technology} onChange={(event) => setTechnology(event.target.value)}><option value="all">{t.anyTechnology}</option>{technologies.map((item) => <option key={item}>{item}</option>)}</select></label></div>

      {filtered.length ? <div className="metro-viewport">
        <div className="metro-map" style={{ height: mapHeight }}>
        <svg viewBox={`0 0 ${MAP_WIDTH} ${mapHeight}`} preserveAspectRatio="none"><path className="route-shadow" d={routePath(filtered.length)} /><path className="route" d={routePath(filtered.length)} /></svg>
        {filtered.map((project, index) => {
          const position = points[index]; const isSelected = selected.slug === project.slug;
          return <button className={`station ${isSelected ? "selected" : ""}`} style={{ left: `${position.x / MAP_WIDTH * 100}%`, top: position.y }} data-status={project.status} key={project.slug} onClick={() => selectProject(project.slug)} aria-pressed={isSelected} aria-label={`${t.selectProject}: ${project.name[language]}`}>
            <span className="station-index">{String(project.order).padStart(2, "0")}</span><span className="station-node"><i style={{ "--station-progress": `${project.progress.overall * 3.6}deg` } as React.CSSProperties} /></span><span className={`station-label ${position.y > 200 ? "above" : "below"}`}><strong>{project.name[language]}</strong><small>{project.progress.overall}% · {statusLabels[project.status][language]}</small></span>
          </button>;
        })}
        </div>
        <div className="mobile-route">{filtered.map((project) => {
          const isSelected = selected.slug === project.slug;
          return <button className={isSelected ? "selected" : ""} data-status={project.status} key={project.slug} onClick={() => selectProject(project.slug)} aria-pressed={isSelected}>
            <span className="mobile-node"><i /></span><span className="mobile-order">{String(project.order).padStart(2, "0")}</span><span className="mobile-project"><strong>{project.name[language]}</strong><small>{statusLabels[project.status][language]}</small></span><b>{project.progress.overall}%</b><span className="mobile-arrow">→</span>
          </button>;
        })}</div>
      </div> : <div className="empty-state"><p>{t.noResults}</p><button onClick={() => { setFilter("all"); setTechnology("all"); }}>{t.reset}</button></div>}
    </section>

    {selected && <section className="project-detail" data-status={selected.status}>
      <div className="project-media"><img src={selected.mediaUrl} alt={`${selected.name[language]} — preview`} /><div className="media-overlay"><span>{String(selected.order).padStart(2, "0")} / {projects.length}</span><span>{selected.classification.kind}</span></div></div>
      <div className="project-content">
        <div className="project-title-row"><div><span className="status-badge"><i />{statusLabels[selected.status][language]}</span><h2>{selected.name[language]}</h2></div><div className="score"><strong>{selected.progress.overall}%</strong><span>{t.progress}</span></div></div>
        <p className="project-summary">{selected.summary[language]}</p><div className="technology-list">{selected.classification.technologies.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="focus-grid"><article><span><i className="pulse" />{t.now}</span><p>{selected.focus.current[language]}</p></article><article><span><i className="arrow">→</i>{t.next}</span><p>{selected.focus.next[language]}</p></article></div>
        <div className="project-facts"><article><span>{t.complexity}</span><Difficulty value={selected.complexity} /></article><article><span>{t.forecast}</span><strong>{formatDate(language, selected.forecast.earliest)} – {formatDate(language, selected.forecast.latest)}</strong></article><article><span>{t.remaining}</span><strong>{selected.forecast.remainingHoursMin}–{selected.forecast.remainingHoursMax} {t.hours}<br />{selected.forecast.remainingDaysMin}–{selected.forecast.remainingDaysMax} {t.days}</strong></article><article><span>{t.confidence}</span><strong>{selected.forecast.confidence.toUpperCase()}</strong></article><article><span>{t.profile}</span><strong>{standard.profiles[selected.compliance.profile][language]}</strong></article><article><span>{t.compliance}</span><strong>{selected.compliance.controls.filter((control) => control.status === "complete").length}/{selected.compliance.controls.filter((control) => control.status !== "not-applicable").length} {t.complianceReady}</strong></article></div>
        <div className="project-links">{selected.hosting.url && <a className="primary-link" href={selected.hosting.url} target="_blank" rel="noreferrer">{t.live} ↗</a>}<a href={selected.repository.url} target="_blank" rel="noreferrer">{t.repository} ↗</a><a href={`${baseUrl}projects/${selected.slug}/`}>{t.details} →</a></div>
      </div>
      <div className="project-tasks"><div className="tasks-heading"><span className="section-number">02</span><div><h3>{t.taskLine}</h3><small title={selected.estimation.sourceRevision}>{t.estimate}</small></div><b>{selected.tasks.length}</b></div><TaskRail tasks={selected.tasks} language={language} /></div>
    </section>}

    <section className="compliance-section" aria-labelledby="compliance-title">
      <div className="section-heading"><div><span className="section-number">03</span><h2 id="compliance-title">{t.compliance}</h2><p>{t.complianceHint}</p></div><div className="compliance-legend">{(["complete", "partial", "missing", "unverified", "blocked"] as ComplianceStatus[]).map((status) => <span key={status}><i data-compliance-status={status} />{standard.statuses[status][language]}</span>)}</div></div>
      <div className="compliance-toolbar"><label><span>{t.profile}</span><select value={profileFilter} onChange={(event) => setProfileFilter(event.target.value as ProfileFilter)}><option value="all">{t.allProfiles}</option>{Object.entries(standard.profiles).map(([value, label]) => <option value={value} key={value}>{label[language]}</option>)}</select></label><button className={gapsOnly ? "active" : ""} onClick={() => setGapsOnly((value) => !value)}>{gapsOnly ? t.showAllControls : t.gapsOnly}</button></div>
      <div className="compliance-matrix">
        <div className="compliance-header"><span>{t.projects}</span>{standard.controls.map((control, index) => <abbr title={control.title[language]} key={control.id}>{String(index + 1).padStart(2, "0")}</abbr>)}</div>
        {matrixProjects.map((project) => <div className="compliance-row" key={project.slug}><button className="matrix-project" onClick={() => { selectProject(project.slug); document.querySelector(".project-detail")?.scrollIntoView({ behavior: "smooth" }); }}><strong>{project.name[language]}</strong><small>{standard.profiles[project.compliance.profile][language]}</small></button>{project.compliance.controls.map((control) => { const definition = standard.controls.find((item) => item.id === control.id)!; return <span className="compliance-cell" data-compliance-status={control.status} data-control={definition.title[language]} title={`${definition.title[language]} — ${standard.statuses[control.status][language]}: ${control.evidence[language]}`} aria-label={`${definition.title[language]}: ${standard.statuses[control.status][language]}`} key={control.id}><i /><b>{standard.statuses[control.status][language]}</b></span>; })}</div>)}
      </div>
    </section>

    <section className="project-index"><div className="section-heading compact"><div><span className="section-number">04</span><h2>{t.list}</h2></div><span className="data-note">● {t.source}</span></div><div className="index-table">{projects.map((project) => <button key={project.slug} onClick={() => { selectProject(project.slug); window.scrollTo({ top: 500, behavior: "smooth" }); }}><span className="index-order">{String(project.order).padStart(2, "0")}</span><span className="index-status" data-status={project.status} /><strong>{project.name[language]}</strong><span>{project.classification.technologies.slice(0, 3).join(" · ")}</span><b>{project.progress.overall}%</b><i>→</i></button>)}</div></section>
    <footer><span>grela.dev / roadmap</span><span>Static data · Astro + React</span><span>© {new Date().getFullYear()} Szczepan Grela</span></footer>
  </main>;
}
