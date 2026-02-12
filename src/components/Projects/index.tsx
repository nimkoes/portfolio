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

const Projects = () => {
  const [openId, setOpenId] = useState<number | null>(null);
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

  if (normalizedProjects.length === 0) {
    return (
      <section id="projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="section-title">
          PROJECTS
        </h2>
        <div className="section-card">
          <p className={styles.empty}>등록된 프로젝트가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        PROJECTS
      </h2>
      <div className={styles.projectTimelineContainer}>
        <div className={styles.projectTimelineLine} aria-hidden="true" />
        <ol className={styles.projectTimelineContent}>
          {normalizedProjects.map(({ id, title, periodLabel, startYearMonth, summary, details, goals, techStack, troubleshooting, infra, achievements, links }) => {
          const isOpen = openId === id;
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
                  onClick={() => setOpenId(isOpen ? null : id)}
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
                        <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                          {label}
                        </a>
                      ))}
                    </div>
                  )}
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
