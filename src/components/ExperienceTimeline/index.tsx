"use client";

import { useState } from "react";
import careerList from "@resources/careers.json";
import styles from "./ExperienceTimeline.module.scss";
import { formatYearMonthRange, toYearMonth, toYearMonthSortValue } from "~/utils/date";

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

const sortedCareers = (careerList as CareerItem[]).sort((a, b) => {
  // to가 빈 문자열이면 현재 재직중이므로 가장 위로
  if (!a.to && b.to) return -1;
  if (a.to && !b.to) return 1;
  // 둘 다 있거나 둘 다 없으면 from 기준 내림차순
  return toYearMonthSortValue(toYearMonth(b.from)) - toYearMonthSortValue(toYearMonth(a.from));
});

const ExperienceTimeline = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const now = new Date();
  const currentYearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.experienceTitle}>CAREER</h2>
      <div className={styles.timelineContainer}>
        <span className={styles.careerCurrentBadge} aria-hidden>
          {currentYearMonth}
        </span>
        <div className={styles.timelineLine} aria-hidden="true" />

        <div className={styles.timelineContent}>
          {sortedCareers.map((career) => {
            const isOpen = openId === career.id;
            const contentId = `career-content-${career.id}`;
            const normalizedFrom = toYearMonth(career.from);
            const normalizedTo = toYearMonth(career.to);

            return (
              <div key={career.id} className={styles.timelineItem}>
                <div className={styles.timelineNode}>
                  <div className={styles.nodeCircle}>{normalizedFrom || "-"}</div>
                </div>

                <div className={styles.careerCard}>
                  <button
                    type="button"
                    className={styles.careerHeader}
                    onClick={() => setOpenId(isOpen ? null : career.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    id={`career-header-${career.id}`}
                  >
                    <div className={styles.careerHeaderLeft}>
                      <h3 className={styles.companyName}>{career.company}</h3>
                      {career.role && <p className={styles.role}>{career.role}</p>}
                    </div>
                    <div className={styles.careerHeaderRight}>
                      <span className={styles.period}>
                        {formatYearMonthRange(normalizedFrom, normalizedTo)}
                      </span>
                      <span className={styles.chevron} aria-hidden>
                        {isOpen ? "▲" : "▼"}
                      </span>
                    </div>
                  </button>

                  <div
                    id={contentId}
                    className={`${styles.careerDetails} ${isOpen ? styles.careerDetailsOpen : ""}`}
                    role="region"
                    aria-labelledby={`career-header-${career.id}`}
                    aria-hidden={!isOpen}
                  >
                    {career.contents && career.contents.length > 0 && (
                      <div className={styles.detailBlock}>
                        <ul>
                          {career.contents.map((content, idx) => (
                            <li key={idx}>{content}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {career.techDecisions && career.techDecisions.length > 0 && (
                      <div className={styles.detailBlock}>
                        <h4 className={styles.detailTitle}>기술 의사결정</h4>
                        <ul>
                          {career.techDecisions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {career.troubleshooting && career.troubleshooting.length > 0 && (
                      <div className={styles.detailBlock}>
                        <h4 className={styles.detailTitle}>트러블슈팅</h4>
                        <ul className={styles.troubleshootingList}>
                          {career.troubleshooting.map(({ title, problem, solution }) => (
                            <li key={title} className={styles.troubleshootingItem}>
                              <strong>{title}</strong>
                              <p>
                                <em>문제:</em> {problem}
                              </p>
                              <p>
                                <em>해결:</em> {solution}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {career.infra && career.infra.length > 0 && (
                      <div className={styles.detailBlock}>
                        <h4 className={styles.detailTitle}>인프라·협업</h4>
                        <ul>
                          {career.infra.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

