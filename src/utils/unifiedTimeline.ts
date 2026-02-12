import careersData from "@resources/careers.json";
import activitiesData from "@resources/activities.json";
import projectsData from "@resources/projects.json";
import { formatYearMonthRange, parseYearMonthRange, toYearMonth, toYearMonthSortValue } from "~/utils/date";

type TroubleshootingItem = {
  title: string;
  problem: string;
  solution: string;
};

type CareerItem = {
  id: number;
  company: string;
  role?: string;
  from: string;
  to: string;
  contents: string[];
  techDecisions?: string[];
  troubleshooting?: TroubleshootingItem[];
  infra?: string[];
};

type ActivityArticle = {
  id: number;
  title: string;
  organizer?: string;
  date?: string;
};

type ActivitiesSource = {
  items?: string[];
  articles?: ActivityArticle[];
};

type TechStackItem = {
  name: string;
  reason?: string;
};

type ProjectItem = {
  id: number;
  title: string;
  period: string;
  summary: string;
  details: string[];
  goals?: string[];
  techStack?: TechStackItem[];
  troubleshooting?: TroubleshootingItem[];
  infra?: string[];
  achievements?: string[];
  links: { label: string; url: string }[];
};

export type UnifiedBranch = "career" | "activities" | "projects";
export type UnifiedItemType = "career" | "activity" | "project";
export type UnifiedBranchPolicy = "open" | "merge";

type UnifiedBaseEvent = {
  key: string;
  numericId: number;
  type: UnifiedItemType;
  branch: UnifiedBranch;
  branchPolicy: UnifiedBranchPolicy;
  date: string;
  dateSort: number;
  title: string;
  subtitle?: string;
  summary?: string;
  periodLabel?: string;
  isExpandable: boolean;
};

export type UnifiedCareerEvent = UnifiedBaseEvent & {
  type: "career";
  payload: {
    contents: string[];
    techDecisions: string[];
    troubleshooting: TroubleshootingItem[];
    infra: string[];
  };
};

export type UnifiedActivityEvent = UnifiedBaseEvent & {
  type: "activity";
  payload: {
    organizer?: string;
  };
};

export type UnifiedProjectEvent = UnifiedBaseEvent & {
  type: "project";
  payload: {
    details: string[];
    goals: string[];
    techStack: TechStackItem[];
    troubleshooting: TroubleshootingItem[];
    infra: string[];
    achievements: string[];
    links: { label: string; url: string }[];
  };
};

export type UnifiedTimelineEvent = UnifiedCareerEvent | UnifiedActivityEvent | UnifiedProjectEvent;

const TYPE_PRIORITY: Record<UnifiedItemType, number> = {
  career: 0,
  activity: 1,
  project: 2,
};

const normalizeActivities = (raw: ActivitiesSource | string[]): { items: string[]; articles: ActivityArticle[] } => {
  if (Array.isArray(raw)) {
    return { items: raw, articles: [] };
  }

  return {
    items: raw.items ?? [],
    articles: raw.articles ?? [],
  };
};

const createCareerEvents = (): UnifiedCareerEvent[] => {
  const careers = careersData as CareerItem[];

  return careers.map((career) => {
    const from = toYearMonth(career.from);
    const to = toYearMonth(career.to);
    const isCurrent = !career.to;

    return {
      key: `career-${career.id}`,
      numericId: career.id,
      type: "career",
      branch: "career",
      branchPolicy: "open",
      date: from,
      dateSort: toYearMonthSortValue(from),
      title: career.company,
      subtitle: career.role?.trim() || undefined,
      periodLabel: formatYearMonthRange(from, to),
      summary: isCurrent ? "현재 재직중인 경력" : undefined,
      isExpandable: true,
      payload: {
        contents: career.contents ?? [],
        techDecisions: career.techDecisions ?? [],
        troubleshooting: career.troubleshooting ?? [],
        infra: career.infra ?? [],
      },
    };
  });
};

const createActivityEvents = (): UnifiedActivityEvent[] => {
  const { items, articles } = normalizeActivities(activitiesData as ActivitiesSource | string[]);
  const articleEvents = articles.map((article) => {
    const normalizedDate = toYearMonth(article.date);

    return {
      key: `activity-${article.id}`,
      numericId: article.id,
      type: "activity",
      branch: "activities",
      branchPolicy: "merge",
      date: normalizedDate,
      dateSort: toYearMonthSortValue(normalizedDate),
      title: article.title?.trim() || "Activity",
      subtitle: article.organizer?.trim() || undefined,
      isExpandable: false,
      payload: {
        organizer: article.organizer?.trim() || undefined,
      },
    } satisfies UnifiedActivityEvent;
  });

  const fallbackItemEvents = items.map((item, index) => ({
    key: `activity-item-${index}`,
    numericId: index,
    type: "activity",
    branch: "activities",
    branchPolicy: "merge",
    date: "",
    dateSort: 0,
    title: item.trim() || "Activity",
    isExpandable: false,
    payload: {},
  })) satisfies UnifiedActivityEvent[];

  return [...articleEvents, ...fallbackItemEvents];
};

const createProjectEvents = (): UnifiedProjectEvent[] => {
  const projects = projectsData as ProjectItem[];

  return projects.map((project) => {
    const { start, end } = parseYearMonthRange(project.period);

    return {
      key: `project-${project.id}`,
      numericId: project.id,
      type: "project",
      branch: "projects",
      branchPolicy: "merge",
      date: start,
      dateSort: toYearMonthSortValue(start),
      title: project.title,
      subtitle: formatYearMonthRange(start, end),
      summary: project.summary?.trim() || undefined,
      periodLabel: formatYearMonthRange(start, end),
      isExpandable: true,
      payload: {
        details: project.details ?? [],
        goals: project.goals ?? [],
        techStack: project.techStack ?? [],
        troubleshooting: project.troubleshooting ?? [],
        infra: project.infra ?? [],
        achievements: project.achievements ?? [],
        links: project.links ?? [],
      },
    };
  });
};

export const getUnifiedTimelineEvents = (): UnifiedTimelineEvent[] => {
  const events = [...createCareerEvents(), ...createActivityEvents(), ...createProjectEvents()];

  return events.sort((a, b) => {
    if (b.dateSort !== a.dateSort) {
      return b.dateSort - a.dateSort;
    }

    if (TYPE_PRIORITY[a.type] !== TYPE_PRIORITY[b.type]) {
      return TYPE_PRIORITY[a.type] - TYPE_PRIORITY[b.type];
    }

    return b.numericId - a.numericId;
  });
};
