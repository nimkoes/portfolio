"use client";

import { useEffect, useState } from "react";
import careerList from "@resources/careers.json";
import styles from "./ExperienceTimeline.module.scss";
import { formatYearMonthRange, toYearMonth, toYearMonthSortValue } from "~/utils/date";

type TroubleshootingItem = {
  title: string;
  problem: string;
  solution: string;
};

type CareerContentGroup = {
  title: string;
  items: string[];
};

type CareerItem = {
  id: number;
  company: string;
  role?: string;
  from: string;
  to: string;
  contents?: string[];
  contentGroups?: CareerContentGroup[];
  techDecisions?: string[];
  troubleshooting?: TroubleshootingItem[];
  infra?: string[];
};

const sortedCareers = [...(careerList as CareerItem[])].sort((a, b) => {
  // to가 빈 문자열이면 현재 재직중이므로 가장 위로
  if (!a.to && b.to) return -1;
  if (a.to && !b.to) return 1;
  // 둘 다 있거나 둘 다 없으면 from 기준 내림차순
  return toYearMonthSortValue(toYearMonth(b.from)) - toYearMonthSortValue(toYearMonth(a.from));
});

const ExperienceTimeline = () => {
  const [openIds, setOpenIds] = useState<Set<number>>(() => new Set());
  // 정적 export 시 빌드 시점 날짜가 박제되지 않도록 클라이언트에서 현재 연월을 계산
  const [currentYearMonth, setCurrentYearMonth] = useState("");
  useEffect(() => {
    const now = new Date();
    setCurrentYearMonth(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`);
  }, []);
  const careerIds = sortedCareers.map(({ id }) => id);
  const isAllCareerOpen = sortedCareers.length > 0 && sortedCareers.every(({ id }) => openIds.has(id));
  const bulkActionLabel = isAllCareerOpen ? "접기" : "열기";

  const toggleCareer = (id: number) => {
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
  const openAllCareers = () => setOpenIds(new Set(careerIds));
  const closeAllCareers = () => setOpenIds(new Set());
  const toggleAllCareers = () => {
    if (isAllCareerOpen) {
      closeAllCareers();
      return;
    }

    openAllCareers();
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.experienceHeading}>
        <h2 className={styles.experienceTitle}>CAREER</h2>
        <div className={styles.bulkActions} role="group" aria-label="CAREER 일괄 열기 제어">
          <button
            type="button"
            className={styles.bulkActionButton}
            onClick={toggleAllCareers}
            aria-label={`CAREER 전체 ${isAllCareerOpen ? "접기" : "펼치기"}`}
            title={`전체 ${isAllCareerOpen ? "접기" : "펼치기"}`}
          >
            <svg viewBox="0 0 20 20" className={styles.bulkActionIcon} aria-hidden>
              {isAllCareerOpen ? (
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
      <div className={styles.timelineContainer}>
        <span className={styles.careerCurrentBadge} aria-hidden>
          {currentYearMonth}
        </span>
        <div className={styles.timelineLine} aria-hidden="true" />

        <div className={styles.timelineContent}>
          {sortedCareers.map((career) => {
            const isOpen = openIds.has(career.id);
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
                    onClick={() => toggleCareer(career.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    id={`career-header-${career.id}`}
                  >
                    <div className={styles.careerHeaderLeft}>
                      <h3 className={styles.companyName}>{career.company}</h3>
                      {career.role && <p className={styles.role}>{career.role}</p>}
                    </div>
                    <div className={styles.careerHeaderRight}>
                      <span className={styles.period}>{formatYearMonthRange(normalizedFrom, normalizedTo)}</span>
                      <span className={styles.careerAction} aria-hidden>
                        <span className={styles.careerActionText}>{isOpen ? "접기" : "상세"}</span>
                        <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
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
                    <div className={styles.careerDetailsInner}>
                      {career.contentGroups && career.contentGroups.length > 0
                        ? career.contentGroups.map((group) => (
                            <div key={group.title} className={styles.detailBlock}>
                              <h4 className={styles.detailTitle}>{group.title}</h4>
                              <ul>
                                {group.items.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))
                        : career.contents &&
                          career.contents.length > 0 && (
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
