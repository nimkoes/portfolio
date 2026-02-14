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

type TechStackItem = {
  name: string;
  reason?: string;
};

type Project = {
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
  const hasOpenProject = openIds.size > 0;
  const isAllProjectOpen = normalizedProjects.length > 0 && normalizedProjects.every(({ id }) => openIds.has(id));

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
            onClick={openAllProjects}
            disabled={isAllProjectOpen}
            aria-label="PROJECTS 전체 펼치기"
            title="전체 펼치기"
          >
            <span className={styles.bulkActionIcon} aria-hidden>
              📂
            </span>
          </button>
          <button
            type="button"
            className={styles.bulkActionButton}
            onClick={closeAllProjects}
            disabled={!hasOpenProject}
            aria-label="PROJECTS 전체 접기"
            title="전체 접기"
          >
            <span className={styles.bulkActionIcon} aria-hidden>
              📁
            </span>
          </button>
        </div>
      </div>
      <div className={styles.projectTimelineContainer}>
        <span className={styles.projectMergeNode} aria-hidden="true" />
        <svg
          className={styles.projectMergeSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line className={styles.projectMergePath} x1="0" y1="0" x2="100" y2="100" />
        </svg>
        <div className={styles.projectTimelineLine} aria-hidden="true" />
        <ol className={styles.projectTimelineContent}>
          {normalizedProjects.map(({ id, title, periodLabel, startYearMonth, summary, details, goals, techStack, troubleshooting, infra, achievements, links }) => {
          const isOpen = openIds.has(id);
          const contentId = `project-content-${id}`;
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
                      <span className={styles.projectChevron} aria-hidden>
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </span>
                  </div>
                  <p className={styles.projectSummary}>{summary}</p>
                </button>
                <div
                  id={contentId}
                  className={`${styles.projectDetails} ${isOpen ? styles.projectDetailsOpen : ""}`}
                  role="region"
                  aria-labelledby={`project-trigger-${id}`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.projectDetailsInner}>
                    {(summary || (details && details.length > 0)) && (
                      <div className={styles.projectBlock}>
                        <h3 className={styles.projectSubtitle}>개요</h3>
                        {summary && <p>{summary}</p>}
                        {details && details.length > 0 && (
                          <ul>
                            {details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        )}
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
                    {techStack && techStack.length > 0 && (
                      <div className={styles.projectBlock}>
                        <h3 className={styles.projectSubtitle}>주요 기술</h3>
                        <ul>
                          {techStack.map((item) => (
                            <li key={item.name}>
                              {item.reason ? `${item.name} (${item.reason})` : item.name}
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
                              <p><em>이슈:</em> {problem}</p>
                              <p><em>해결:</em> {solution}</p>
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
                    {infra && infra.length > 0 && (
                      <div className={styles.projectBlock}>
                        <h3 className={styles.projectSubtitle}>인프라·협업</h3>
                        <ul>
                          {infra.map((item) => (
                            <li key={item}>{item}</li>
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
        })}
        </ol>
      </div>
    </section>
  );
};

export default Projects;
