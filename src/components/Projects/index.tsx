"use client";

import { Fragment, useState } from "react";
import projectList from "@resources/projects.json";
import styles from "./Projects.module.scss";
import { formatYearMonthRange, parseYearMonthRange, toYearMonthSortValue } from "~/utils/date";

type TroubleshootingItem = {
  title: string;
  problem: string;
  solution: string;
};

type EnvironmentItem = {
  name: string;
  layer?: string;
};

type RawEnvironmentItem =
  | string
  | {
      name: string;
      layer?: string;
      reason?: string;
    };

type ArchitectureItem =
  | string
  | {
      name: string;
      detail?: string;
    };

type ArchitectureGroup = {
  id: string;
  label: string;
  items: ArchitectureItem[];
  flow?: boolean;
};

type ArchitectureRelation = {
  from: string;
  to: string;
  label: string;
};

type ProjectArchitecture = {
  trigger?: string;
  groups: ArchitectureGroup[];
  relations: ArchitectureRelation[];
  support?: {
    label: string;
    items: ArchitectureItem[];
  };
};

type Project = {
  id: number;
  title: string;
  period: string;
  summary: string;
  details: string[];
  goals?: string[];
  techStack?: RawEnvironmentItem[];
  architecture?: ProjectArchitecture;
  troubleshooting?: TroubleshootingItem[];
  infra?: RawEnvironmentItem[];
  achievements?: string[];
  links: { label: string; url: string }[];
};

const normalizeEnvironmentItems = (items?: RawEnvironmentItem[]): EnvironmentItem[] =>
  (items ?? [])
    .map((item) => {
      if (typeof item === "string") {
        const name = item.trim();
        return name ? { name } : null;
      }

      const name = item.name?.trim();
      if (!name) return null;

      const layer = item.layer?.trim() || item.reason?.trim();
      return layer ? { name, layer } : { name };
    })
    .filter((item): item is EnvironmentItem => item !== null);

type AutomaticGroupDefinition = {
  id: string;
  label: string;
  layers: readonly string[];
};

const automaticGroupDefinitions: AutomaticGroupDefinition[] = [
  {
    id: "interface",
    label: "UI·접점",
    layers: ["Frontend", "View Template", "CSS Framework", "API Platform"],
  },
  {
    id: "application",
    label: "애플리케이션",
    layers: ["Language", "Framework", "Document Processing", "AI Agent"],
  },
  {
    id: "data-integration",
    label: "데이터·연동",
    layers: ["ORM", "Database", "Database Migration", "CRM", "External Service", "Message Queue", "Collaboration"],
  },
];

const platformLayers = ["Application Server", "Cloud", "Container Orchestration", "Container Registry"];
const operationLayers = ["Monitoring", "Operation Tool", "Scheduler", "Incident Report", "Automation"];

const isAzureKubernetesService = (name: string) => name.toLowerCase() === "azure kubernetes service";

const describePlatformItems = (names: string[]): ArchitectureItem[] => {
  const hasAzureKubernetesService = names.some(isAzureKubernetesService);
  const seen = new Set<string>();

  return names.flatMap((name) => {
    const normalizedName = name.toLowerCase();

    if (hasAzureKubernetesService && (normalizedName === "azure" || normalizedName === "kubernetes")) {
      return [];
    }

    const item: ArchitectureItem = isAzureKubernetesService(name)
      ? { name: "Azure Kubernetes Service", detail: "Azure · Kubernetes 기반" }
      : normalizedName === "azure container registry"
        ? { name, detail: "Azure · 컨테이너 이미지 저장소" }
        : name;
    const itemName = typeof item === "string" ? item : item.name;
    const itemKey = itemName.toLowerCase();

    if (seen.has(itemKey)) return [];
    seen.add(itemKey);
    return [item];
  });
};

const getArchitectureItemName = (item: ArchitectureItem) => (typeof item === "string" ? item : item.name);
const getArchitectureItemDetail = (item: ArchitectureItem) => (typeof item === "string" ? undefined : item.detail);

const buildAutomaticArchitecture = (items: EnvironmentItem[]): ProjectArchitecture | undefined => {
  if (items.length === 0) return undefined;

  const namesForLayers = (layers: readonly string[]) =>
    items.filter(({ layer }) => layer && layers.includes(layer)).map(({ name }) => name);
  const mainGroups: ArchitectureGroup[] = automaticGroupDefinitions
    .map(({ id, label, layers }) => ({ id, label, items: namesForLayers(layers) }))
    .filter(({ items: groupItems }) => groupItems.length > 0);
  const platformItems = describePlatformItems(namesForLayers(platformLayers));
  const operationItems = namesForLayers(operationLayers);
  const knownLayers = new Set([
    ...automaticGroupDefinitions.flatMap(({ layers }) => layers),
    ...platformLayers,
    ...operationLayers,
  ]);
  const ungroupedItems = items.filter(({ layer }) => !layer || !knownLayers.has(layer)).map(({ name }) => name);

  if (ungroupedItems.length > 0) {
    mainGroups.push({ id: "other", label: "기타 기술", items: ungroupedItems });
  }

  if (mainGroups.length === 0) {
    if (platformItems.length > 0) {
      mainGroups.push({ id: "platform", label: "실행 환경", items: platformItems });
    }
    if (operationItems.length > 0) {
      mainGroups.push({ id: "operations", label: "운영·관측", items: operationItems });
    }
  }

  if (mainGroups.length === 0) return undefined;

  const relations: ArchitectureRelation[] = mainGroups.slice(0, -1).map((group, index) => ({
    from: group.id,
    to: mainGroups[index + 1].id,
    label: "",
  }));
  const supportItems = mainGroups.some(({ id }) => id === "platform" || id === "operations")
    ? []
    : [...platformItems, ...operationItems];

  return {
    groups: mainGroups,
    relations,
    support: supportItems.length > 0 ? { label: "실행·운영", items: supportItems } : undefined,
  };
};

const projects = projectList as Project[];
const normalizedProjects = projects
  .map((project) => {
    const { start, end } = parseYearMonthRange(project.period);
    return {
      ...project,
      startYearMonth: start,
      periodLabel: formatYearMonthRange(start, end),
    };
  })
  .sort((a, b) => toYearMonthSortValue(b.startYearMonth) - toYearMonthSortValue(a.startYearMonth));

const Projects = () => {
  const [openIds, setOpenIds] = useState<Set<number>>(() => new Set());
  const projectIds = normalizedProjects.map(({ id }) => id);
  const isAllProjectOpen = normalizedProjects.length > 0 && normalizedProjects.every(({ id }) => openIds.has(id));
  const bulkActionLabel = isAllProjectOpen ? "접기" : "열기";

  const toggleProject = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  const openAllProjects = () => setOpenIds(new Set(projectIds));
  const closeAllProjects = () => setOpenIds(new Set());
  const toggleAllProjects = () => {
    if (isAllProjectOpen) {
      closeAllProjects();
      return;
    }

    openAllProjects();
  };

  if (normalizedProjects.length === 0) {
    return (
      <section id="projects" aria-labelledby="projects-heading" className={styles.projectsSection}>
        <div className={styles.projectsHeading}>
          <h2 id="projects-heading" className="section-title">
            PROJECTS
          </h2>
        </div>
        <div className="section-card">
          <p className={styles.empty}>등록된 프로젝트가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" aria-labelledby="projects-heading" className={styles.projectsSection}>
      <div className={styles.projectsHeading}>
        <h2 id="projects-heading" className="section-title">
          PROJECTS
        </h2>
        <div className={styles.bulkActions} role="group" aria-label="PROJECTS 일괄 열기 제어">
          <button
            type="button"
            className={styles.bulkActionButton}
            onClick={toggleAllProjects}
            aria-label={`PROJECTS 전체 ${isAllProjectOpen ? "접기" : "펼치기"}`}
            title={`전체 ${isAllProjectOpen ? "접기" : "펼치기"}`}
          >
            <svg viewBox="0 0 20 20" className={styles.bulkActionIcon} aria-hidden>
              {isAllProjectOpen ? (
                <>
                  <path d="M5 12.5L10 7.5L15 12.5" />
                  <path d="M5 16.5L10 11.5L15 16.5" />
                </>
              ) : (
                <>
                  <path d="M5 7.5L10 12.5L15 7.5" />
                  <path d="M5 3.5L10 8.5L15 3.5" />
                </>
              )}
            </svg>
            <span className={styles.bulkActionLabel}>{bulkActionLabel}</span>
          </button>
        </div>
      </div>
      <div className={styles.projectTimelineContainer}>
        <span className={styles.projectMergeNode} aria-hidden="true" />
        <svg className={styles.projectMergeSvg} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <line className={styles.projectMergePath} x1="0" y1="0" x2="100" y2="100" />
        </svg>
        <div className={styles.projectTimelineLine} aria-hidden="true" />
        <ol className={styles.projectTimelineContent}>
          {normalizedProjects.map(
            ({
              id,
              title,
              periodLabel,
              startYearMonth,
              summary,
              details,
              goals,
              techStack,
              architecture,
              troubleshooting,
              infra,
              achievements,
              links,
            }) => {
              const isOpen = openIds.has(id);
              const contentId = `project-content-${id}`;
              const normalizedTechStack = normalizeEnvironmentItems(techStack);
              const normalizedInfra = normalizeEnvironmentItems(infra);
              const techPreviewItems = normalizedTechStack.slice(0, 4).map((item) => item.name);
              const developmentEnvironmentItems = [...normalizedTechStack, ...normalizedInfra];
              const displayedArchitecture = architecture ?? buildAutomaticArchitecture(developmentEnvironmentItems);
              return (
                <li key={id} className={styles.projectTimelineItem}>
                  <div className={styles.projectTimelineNode}>
                    <span className={styles.projectDateBadge}>{startYearMonth || "-"}</span>
                  </div>
                  <div className={styles.projectCardColumn}>
                    <button
                      type="button"
                      className={styles.projectCard}
                      onClick={() => toggleProject(id)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      id={`project-trigger-${id}`}
                    >
                      <div className={styles.projectCardRow1}>
                        <span className={styles.projectTitle}>{title}</span>
                        <span className={styles.projectCardRight}>
                          <span className={styles.projectPeriod}>{periodLabel}</span>
                          <span className={styles.projectAction} aria-hidden>
                            <span className={styles.projectActionText}>{isOpen ? "접기" : "상세"}</span>
                            <span className={styles.projectChevron}>{isOpen ? "▲" : "▼"}</span>
                          </span>
                        </span>
                      </div>
                      <p className={styles.projectSummary}>{summary}</p>
                      {!isOpen && techPreviewItems.length > 0 && (
                        <span className={styles.projectTechPreview} aria-hidden>
                          {techPreviewItems.map((name) => (
                            <span key={name} className={styles.projectTechChip}>
                              {name}
                            </span>
                          ))}
                          {developmentEnvironmentItems.length > techPreviewItems.length && (
                            <span className={styles.projectTechChip}>
                              +{developmentEnvironmentItems.length - techPreviewItems.length}
                            </span>
                          )}
                        </span>
                      )}
                    </button>
                    <div
                      id={contentId}
                      className={`${styles.projectDetails} ${isOpen ? styles.projectDetailsOpen : ""}`}
                      role="region"
                      aria-labelledby={`project-trigger-${id}`}
                      aria-hidden={!isOpen}
                    >
                      <div className={styles.projectDetailsInner}>
                        {details && details.length > 0 && (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>개요</h3>
                            <ul>
                              {details.map((d) => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {goals && goals.length > 0 && (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>목표</h3>
                            <ul>
                              {goals.map((g) => (
                                <li key={g}>{g}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {displayedArchitecture && displayedArchitecture.groups.length > 0 ? (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>기술 구성</h3>
                            <div className={styles.architectureMap}>
                              {displayedArchitecture.trigger && (
                                <div className={styles.architectureTrigger}>
                                  <span>{displayedArchitecture.trigger}</span>
                                  <span aria-hidden>↓</span>
                                </div>
                              )}
                              <div className={styles.architectureFlow}>
                                {displayedArchitecture.groups.map((group, index) => {
                                  const nextGroup = displayedArchitecture.groups[index + 1];
                                  const relation = nextGroup
                                    ? displayedArchitecture.relations.find(
                                        ({ from, to }) => from === group.id && to === nextGroup.id,
                                      )
                                    : undefined;

                                  return (
                                    <Fragment key={group.id}>
                                      <section
                                        className={`${styles.architectureGroup} ${group.flow ? styles.architectureGroupFlow : ""}`}
                                        aria-labelledby={`project-${id}-architecture-${group.id}`}
                                      >
                                        <h4
                                          id={`project-${id}-architecture-${group.id}`}
                                          className={styles.architectureGroupTitle}
                                        >
                                          {group.label}
                                        </h4>
                                        <ul
                                          className={`${styles.architectureItems} ${group.flow ? styles.architectureItemsFlow : ""}`}
                                        >
                                          {group.items.map((item) => {
                                            const itemName = getArchitectureItemName(item);
                                            const itemDetail = getArchitectureItemDetail(item);

                                            return (
                                              <li key={itemName} className={styles.architectureItem}>
                                                <span>{itemName}</span>
                                                {itemDetail && (
                                                  <span className={styles.architectureItemDetail}>{itemDetail}</span>
                                                )}
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </section>
                                      {relation && (
                                        <div
                                          className={styles.architectureConnector}
                                          aria-label={
                                            relation.label
                                              ? `${group.label}에서 ${nextGroup.label}(으)로 ${relation.label}`
                                              : `${group.label}과 ${nextGroup.label}의 구성 관계`
                                          }
                                        >
                                          <span className={styles.architectureArrow} aria-hidden>
                                            →
                                          </span>
                                          {relation.label && <span>{relation.label}</span>}
                                        </div>
                                      )}
                                    </Fragment>
                                  );
                                })}
                              </div>
                              {displayedArchitecture.support && displayedArchitecture.support.items.length > 0 && (
                                <div className={styles.architectureSupport}>
                                  <span className={styles.architectureSupportLabel}>{displayedArchitecture.support.label}</span>
                                  <ul>
                                    {displayedArchitecture.support.items.map((item) => {
                                      const itemName = getArchitectureItemName(item);
                                      const itemDetail = getArchitectureItemDetail(item);

                                      return (
                                        <li key={itemName}>
                                          <span>{itemName}</span>
                                          {itemDetail && (
                                            <span className={styles.architectureSupportItemDetail}>{itemDetail}</span>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ) : null}
                        {troubleshooting && troubleshooting.length > 0 && (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>트러블 슈팅</h3>
                            <ul className={styles.troubleshootingList}>
                              {troubleshooting.map(({ title, problem, solution }) => (
                                <li key={title} className={styles.troubleshootingItem}>
                                  <strong>{title}</strong>
                                  <p>
                                    <span className={`${styles.troubleshootingLabel} ${styles.issueLabel}`}>이슈</span>
                                    {problem}
                                  </p>
                                  <p>
                                    <span className={`${styles.troubleshootingLabel} ${styles.solutionLabel}`}>해결</span>
                                    {solution}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {achievements && achievements.length > 0 && (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>성과</h3>
                            <ul>
                              {achievements.map((a) => (
                                <li key={a}>{a}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {links && links.length > 0 && (
                          <div className={styles.projectLinks}>
                            {links.map(({ label, url }) => (
                              <a
                                key={url}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                                tabIndex={isOpen ? undefined : -1}
                                aria-hidden={!isOpen}
                              >
                                {label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            },
          )}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
