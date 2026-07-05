"use client";

import { useState } from "react";
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

type Project = {
  id: number;
  title: string;
  period: string;
  summary: string;
  details: string[];
  goals?: string[];
  techStack?: RawEnvironmentItem[];
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
              const developmentEnvironmentItems = [
                ...normalizedTechStack.map((item, index) => ({
                  key: `tech-${item.name}-${item.layer ?? ""}-${index}`,
                  name: item.name,
                  layer: item.layer,
                })),
                ...normalizedInfra.map((item, index) => ({
                  key: `infra-${item.name}-${item.layer ?? ""}-${index}`,
                  name: item.name,
                  layer: item.layer,
                })),
              ];
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
                        {developmentEnvironmentItems.length > 0 && (
                          <div className={styles.projectBlock}>
                            <h3 className={styles.projectSubtitle}>개발 환경</h3>
                            <ul className={styles.environmentList}>
                              {developmentEnvironmentItems.map((item) => (
                                <li key={item.key} className={styles.environmentItem}>
                                  <span className={styles.environmentName}>{item.name}</span>
                                  {item.layer && <span className={styles.environmentLayer}>{item.layer}</span>}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
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
