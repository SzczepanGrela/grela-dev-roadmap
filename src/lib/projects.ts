export type Language = "pl" | "en";

export type Localized = Record<Language, string>;
export type ComplianceProfile = "vps-web" | "static-web" | "desktop" | "repository" | "developer-tool";
export type ComplianceStatus = "complete" | "partial" | "missing" | "unverified" | "blocked" | "not-applicable";

export interface DeliveryControl {
  id: string;
  title: Localized;
  description: Localized;
  profiles: ComplianceProfile[];
}

export interface DeliveryStandard {
  standardVersion: number;
  profiles: Record<ComplianceProfile, Localized>;
  statuses: Record<ComplianceStatus, Localized>;
  controls: DeliveryControl[];
}

export interface RoadmapTask {
  id: string;
  title: Localized;
  dimension: "implementation" | "quality" | "documentation" | "delivery";
  status: "planned" | "in-progress" | "blocked" | "done";
  completion: number;
  weight: number;
  difficulty: number;
  hoursMin: number;
  hoursMax: number;
  daysMin: number;
  daysMax: number;
  evidence: string;
}

export interface RoadmapProject {
  schemaVersion: number;
  slug: string;
  order: number;
  name: Localized;
  summary: Localized;
  repository: {
    owner: string;
    currentName: string;
    targetName: string;
    url: string;
    ownerId: number;
    repositoryId: number;
    defaultBranch: string;
    visibility: string;
  };
  classification: {
    kind: string;
    technologies: string[];
    hosted: boolean;
  };
  hosting: {
    target: string;
    url: string | null;
    deploymentState: string;
  };
  status: "planned" | "active" | "paused" | "blocked" | "complete" | "maintenance";
  progress: {
    overall: number;
    implementation: number;
    quality: number;
    documentation: number;
    delivery: number;
  };
  complexity: number;
  forecast: {
    remainingHoursMin: number;
    remainingHoursMax: number;
    remainingDaysMin: number;
    remainingDaysMax: number;
    hoursPerDay: 8;
    hoursPerWeek: number;
    earliest: string;
    latest: string;
    confidence: "low" | "medium" | "high";
  };
  estimation: {
    date: string;
    mode: "codex-assisted-source-audited";
    sourceRevision: string;
    sourceState: string;
  };
  focus: {
    current: Localized;
    next: Localized;
  };
  tasks: RoadmapTask[];
  compliance: {
    standardVersion: number;
    profile: ComplianceProfile;
    assessmentDate: string;
    controls: Array<{
      id: string;
      status: ComplianceStatus;
      evidence: Localized;
      taskIds: string[];
    }>;
  };
  verification: Record<string, string>;
  media: {
    screenshot: string;
    fallback: string;
    captureEnabled: boolean;
    attribution: string;
  };
  decisions: Localized[];
  audit: {
    date: string;
    sources: string[];
    notes: Localized;
  };
  mediaUrl: string;
}

const projectModules = import.meta.glob("../../projects/*/project.json", {
  eager: true,
  import: "default",
}) as Record<string, Omit<RoadmapProject, "mediaUrl">>;

const standardModules = import.meta.glob("../../standards/delivery-controls.json", {
  eager: true,
  import: "default",
}) as Record<string, DeliveryStandard>;

export const deliveryStandard = Object.values(standardModules)[0];

const mediaModules = import.meta.glob("../../assets/{screenshots,placeholders}/*.{png,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const mediaByRepositoryPath = new Map(
  Object.entries(mediaModules).map(([path, url]) => [path.replace("../../", ""), url]),
);

export const projects: RoadmapProject[] = Object.values(projectModules)
  .map((project) => ({
    ...project,
    mediaUrl:
      mediaByRepositoryPath.get(project.media.screenshot) ??
      mediaByRepositoryPath.get(project.media.fallback) ??
      "",
  }))
  .sort((a, b) => a.order - b.order);
