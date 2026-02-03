"use client";

import { useState } from "react";
import styles from "./Career.module.scss";
import careerList from "@resources/careers.json";

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

const sortedCareers = (careerList as CareerItem[]).sort((a, b) => b.id - a.id);

const Careers = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className={styles.career}>
      <h2>CAREER</h2>
      <ol className={styles.careerList}>
        {sortedCareers.map(({ id, company, role, from, to, contents, techDecisions, troubleshooting, infra }) => {
          const isOpen = openId === id;
          const contentId = `career-content-${id}`;
          return (
            <li className={styles.careerItem} key={id}>
              <button
                type="button"
                className={styles.careerCard}
                onClick={() => setOpenId(isOpen ? null : id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                id={`career-trigger-${id}`}
              >
                <div className={styles.careerCardRow1}>
                  <span className={styles.careerCompany}>{company}</span>
                  <span className={styles.careerCardRight}>
                    <span className={styles.careerPeriod}>
                      {from && <span className={styles.careerPeriodFrom}>{from}</span>}
                      {" ~ "}
                      {to ? <span className={styles.careerPeriodTo}>{to}</span> : <span className={styles.careerPeriodTo}>현재</span>}
                    </span>
                    <span className={styles.careerChevron} aria-hidden>
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </span>
                </div>
                {role && <span className={styles.careerRole}>{role}</span>}
              </button>
              <div
                id={contentId}
                className={`${styles.careerContents} ${isOpen ? styles.careerContentsOpen : ""}`}
                role="region"
                aria-labelledby={`career-trigger-${id}`}
                aria-hidden={!isOpen}
              >
                {contents && contents.length > 0 && (
                  <ul>
                    {contents.map((content) => (
                      <li key={content}>{content}</li>
                    ))}
                  </ul>
                )}
                {techDecisions && techDecisions.length > 0 && (
                  <div className={styles.careerBlock}>
                    <h3 className={styles.careerSubtitle}>기술 의사결정</h3>
                    <ul>
                      {techDecisions.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {troubleshooting && troubleshooting.length > 0 && (
                  <div className={styles.careerBlock}>
                    <h3 className={styles.careerSubtitle}>트러블슈팅</h3>
                    <ul className={styles.troubleshootingList}>
                      {troubleshooting.map(({ title, problem, solution }) => (
                        <li key={title} className={styles.troubleshootingItem}>
                          <strong>{title}</strong>
                          <p><em>문제:</em> {problem}</p>
                          <p><em>해결:</em> {solution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {infra && infra.length > 0 && (
                  <div className={styles.careerBlock}>
                    <h3 className={styles.careerSubtitle}>인프라·협업</h3>
                    <ul>
                      {infra.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Careers;
