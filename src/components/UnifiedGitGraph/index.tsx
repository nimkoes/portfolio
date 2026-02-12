"use client";

import { CSSProperties, useMemo, useState } from "react";
import styles from "./UnifiedGitGraph.module.scss";
import { getUnifiedTimelineEvents, UnifiedBranch, UnifiedTimelineEvent } from "~/utils/unifiedTimeline";

type GraphEventRow = {
  kind: "event";
  key: string;
  branch: UnifiedBranch;
  event: UnifiedTimelineEvent;
  isBranchStart: boolean;
};

type GraphMergeRow = {
  kind: "merge";
  key: string;
  branch: "activities" | "projects";
};

type GraphRow = GraphEventRow | GraphMergeRow;

const BRANCH_COLUMNS: Record<UnifiedBranch, number> = {
  career: 1,
  activities: 2,
  projects: 3,
};

const BRANCH_ORDER: UnifiedBranch[] = ["career", "activities", "projects"];

const BRANCH_LABEL: Record<UnifiedBranch, string> = {
  career: "CAREER",
  activities: "ACTIVITIES",
  projects: "PROJECTS",
};

const UnifiedGitGraph = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const events = useMemo(() => getUnifiedTimelineEvents(), []);

  const { rows, startRowByBranch, endRowByBranch } = useMemo(() => {
    const firstEventIndexByBranch: Record<UnifiedBranch, number> = {
      career: -1,
      activities: -1,
      projects: -1,
    };
    const lastEventIndexByBranch: Record<UnifiedBranch, number> = {
      career: -1,
      activities: -1,
      projects: -1,
    };

    events.forEach((event, index) => {
      if (firstEventIndexByBranch[event.branch] < 0) {
        firstEventIndexByBranch[event.branch] = index;
      }
      lastEventIndexByBranch[event.branch] = index;
    });

    const rowList: GraphRow[] = [];
    events.forEach((event, index) => {
      const isBranchStart = firstEventIndexByBranch[event.branch] === index;
      rowList.push({
        kind: "event",
        key: `${event.key}-row`,
        branch: event.branch,
        event,
        isBranchStart,
      });

      if (lastEventIndexByBranch[event.branch] === index && event.branchPolicy === "merge" && event.branch !== "career") {
        rowList.push({
          kind: "merge",
          key: `${event.branch}-merge-row`,
          branch: event.branch,
        });
      }
    });

    const startRows: Record<UnifiedBranch, number> = {
      career: -1,
      activities: -1,
      projects: -1,
    };
    const endRows: Record<UnifiedBranch, number> = {
      career: -1,
      activities: -1,
      projects: -1,
    };

    rowList.forEach((row, rowIndex) => {
      if (row.kind === "event") {
        if (startRows[row.branch] < 0) {
          startRows[row.branch] = rowIndex;
        }
        endRows[row.branch] = rowIndex;
        return;
      }
      endRows[row.branch] = rowIndex;
    });

    if (startRows.career >= 0) {
      endRows.career = rowList.length - 1;
    }

    return {
      rows: rowList,
      startRowByBranch: startRows,
      endRowByBranch: endRows,
    };
  }, [events]);

  const getActiveColumns = (rowIndex: number): number[] => {
    const active = new Set<number>([0]);
    BRANCH_ORDER.forEach((branch) => {
      const start = startRowByBranch[branch];
      const end = endRowByBranch[branch];
      if (start >= 0 && end >= start && rowIndex >= start && rowIndex <= end) {
        active.add(BRANCH_COLUMNS[branch]);
      }
    });
    return Array.from(active);
  };

  const renderCareerDetails = (event: Extract<UnifiedTimelineEvent, { type: "career" }>) => (
    <>
      {event.payload.contents.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>주요 업무</h4>
          <ul>
            {event.payload.contents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.techDecisions.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>기술 의사결정</h4>
          <ul>
            {event.payload.techDecisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.troubleshooting.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>트러블슈팅</h4>
          <ul className={styles.troubleshootingList}>
            {event.payload.troubleshooting.map((item) => (
              <li key={item.title} className={styles.troubleshootingItem}>
                <strong>{item.title}</strong>
                <p>
                  <em>문제:</em> {item.problem}
                </p>
                <p>
                  <em>해결:</em> {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.infra.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>인프라·협업</h4>
          <ul>
            {event.payload.infra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  const renderProjectDetails = (event: Extract<UnifiedTimelineEvent, { type: "project" }>) => (
    <>
      {(event.summary || event.payload.details.length > 0) && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>개요</h4>
          {event.summary && <p className={styles.detailSummary}>{event.summary}</p>}
          {event.payload.details.length > 0 && (
            <ul>
              {event.payload.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {event.payload.goals.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>목표</h4>
          <ul>
            {event.payload.goals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.techStack.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>주요 기술</h4>
          <ul>
            {event.payload.techStack.map((item) => (
              <li key={item.name}>{item.reason ? `${item.name} (${item.reason})` : item.name}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.troubleshooting.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>트러블슈팅</h4>
          <ul className={styles.troubleshootingList}>
            {event.payload.troubleshooting.map((item) => (
              <li key={item.title} className={styles.troubleshootingItem}>
                <strong>{item.title}</strong>
                <p>
                  <em>이슈:</em> {item.problem}
                </p>
                <p>
                  <em>해결:</em> {item.solution}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.achievements.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>성과</h4>
          <ul>
            {event.payload.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.infra.length > 0 && (
        <div className={styles.detailBlock}>
          <h4 className={styles.detailTitle}>인프라·협업</h4>
          <ul>
            {event.payload.infra.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {event.payload.links.length > 0 && (
        <div className={styles.detailLinks}>
          {event.payload.links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.detailLink}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );

  const renderDetails = (event: UnifiedTimelineEvent) => {
    if (event.type === "career") return renderCareerDetails(event);
    if (event.type === "project") return renderProjectDetails(event);
    return null;
  };

  return (
    <section id="timeline" className={styles.timeline} aria-labelledby="timeline-heading">
      <h2 id="timeline-heading" className={styles.timelineTitle}>
        GIT GRAPH
      </h2>

      <ol className={styles.graphStream}>
        {rows.map((row, rowIndex) => {
          const activeColumns = getActiveColumns(rowIndex);
          const nodeColumn = row.kind === "event" ? BRANCH_COLUMNS[row.branch] : 0;
          const branchColumn = BRANCH_COLUMNS[row.branch];
          const laneStyle = {
            "--node-column": String(nodeColumn),
            "--branch-column": String(branchColumn),
          } as CSSProperties;

          if (row.kind === "merge") {
            return (
              <li key={row.key} className={styles.graphRow}>
                <div className={styles.graphLane} style={laneStyle} aria-hidden>
                  <div className={styles.graphColumns}>
                    {[0, 1, 2, 3].map((columnIndex) => (
                      <span
                        key={columnIndex}
                        className={`${styles.graphColumn} ${activeColumns.includes(columnIndex) ? styles.graphColumnActive : ""}`}
                        style={{ "--column-index": String(columnIndex) } as CSSProperties}
                      />
                    ))}
                    <span className={`${styles.graphDiagonal} ${styles.graphDiagonalIn}`} />
                    <span className={styles.graphNode}>*</span>
                  </div>
                </div>
                <div className={styles.graphMessage}>
                  <p className={styles.mergeLogLine}>
                    merge {BRANCH_LABEL[row.branch]} branch into main
                  </p>
                </div>
              </li>
            );
          }

          const event = row.event;
          const detailId = `${event.key}-details`;
          const isOpen = openKey === event.key;

          return (
            <li key={row.key} className={styles.graphRow}>
              <div className={styles.graphLane} style={laneStyle} aria-hidden>
                <div className={styles.graphColumns}>
                  {[0, 1, 2, 3].map((columnIndex) => (
                    <span
                      key={columnIndex}
                      className={`${styles.graphColumn} ${activeColumns.includes(columnIndex) ? styles.graphColumnActive : ""}`}
                      style={{ "--column-index": String(columnIndex) } as CSSProperties}
                    />
                  ))}
                  {row.isBranchStart && <span className={`${styles.graphDiagonal} ${styles.graphDiagonalOut}`} />}
                  <span className={styles.graphNode}>*</span>
                </div>
              </div>

              <div className={styles.graphMessage}>
                {event.isExpandable ? (
                  <>
                    <button
                      type="button"
                      className={styles.logEntryButton}
                      aria-expanded={isOpen}
                      aria-controls={detailId}
                      onClick={() => setOpenKey(isOpen ? null : event.key)}
                    >
                      <span className={styles.logLine}>
                        <span className={styles.logDate}>{event.date || "----"}</span>
                        <span className={styles.logBadge}>[{BRANCH_LABEL[event.branch]}]</span>
                        <span className={styles.logTitle}>{event.title}</span>
                        {event.subtitle && <span className={styles.logSubtitle}>{event.subtitle}</span>}
                      </span>
                      {event.summary && <p className={styles.logSummary}>{event.summary}</p>}
                    </button>
                    <div
                      id={detailId}
                      className={`${styles.graphItemDetails} ${isOpen ? styles.graphItemDetailsOpen : ""}`}
                      role="region"
                      aria-hidden={!isOpen}
                    >
                      {renderDetails(event)}
                    </div>
                  </>
                ) : (
                  <article className={styles.logEntryStatic}>
                    <p className={styles.logLine}>
                      <span className={styles.logDate}>{event.date || "----"}</span>
                      <span className={styles.logBadge}>[{BRANCH_LABEL[event.branch]}]</span>
                      <span className={styles.logTitle}>{event.title}</span>
                      {event.subtitle && <span className={styles.logSubtitle}>{event.subtitle}</span>}
                    </p>
                  </article>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default UnifiedGitGraph;
