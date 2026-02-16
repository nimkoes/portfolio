"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import careerList from "@resources/careers.json";
import activityData from "@resources/activities.json";
import projectList from "@resources/projects.json";
import styles from "./SummarizeTimeline.module.scss";
import { parseYearMonthRange, toYearMonth, toYearMonthSortValue } from "~/utils/date";
import type { BranchId, BranchMeta, SummarizeEntry, SummarizeEntryType } from "~/types/summarize";

type CareerItem = {
  id: number;
  company: string;
  role?: string;
  from: string;
};

type ActivityItem = {
  id: number;
  title: string;
  affiliation?: string;
  organizer?: string;
  date?: string;
};

type ActivitiesData = {
  activities?: ActivityItem[];
  awards?: ActivityItem[];
  articles?: ActivityItem[];
};

type ProjectItem = {
  id: number;
  title: string;
  period: string;
};

type LayoutPosition = {
  centerY: number;
  topY: number;
};

type BranchRenderMeta = BranchMeta & {
  splitEntryId: string;
  oldestEntryId: string;
  mostRecentEntryId: string;
};

type ChildSegment = {
  id: string;
  parentBranchId: BranchId;
  type: "ACTIVITIES" | "PROJECT";
  mostRecentEntryId: string;
  oldestEntryId: string;
  splitAnchorEntryId: string | null;
  mergeAnchorEntryId: string | null;
};

const typePriority: Record<SummarizeEntryType, number> = {
  ACTIVITIES: 0,
  PROJECT: 1,
  CAREER: 2,
};

const careers = (careerList as CareerItem[])
  .map((item, index) => ({
    id: item.id,
    company: item.company?.trim() || "-",
    role: item.role?.trim() || "-",
    from: toYearMonth(item.from),
    fromSort: toYearMonthSortValue(toYearMonth(item.from)),
    originalIndex: index,
  }))
  .filter((item) => Boolean(item.from))
  .sort((a, b) => a.fromSort - b.fromSort);

const normalizeActivities = (data: ActivitiesData): ActivityItem[] => {
  const activities = data.activities ?? [];
  // Backward compatible: if awards is missing, use legacy articles payload.
  const awards = data.awards ?? data.articles ?? [];
  return [...activities, ...awards];
};

const activities = normalizeActivities(activityData as ActivitiesData)
  .map((item, index) => ({
    id: item.id,
    title: item.title?.trim() || "-",
    organizer: item.affiliation?.trim() || item.organizer?.trim() || "-",
    date: toYearMonth(item.date),
    originalIndex: index,
  }))
  .filter((item) => Boolean(item.date));

const projects = (projectList as ProjectItem[])
  .map((item, index) => {
    const { start } = parseYearMonthRange(item.period);
    return {
      id: item.id,
      title: item.title?.trim() || "-",
      date: start,
      originalIndex: index,
    };
  })
  .filter((item) => Boolean(item.date));

const oldestCareerSort = careers.length > 0 ? careers[0].fromSort : 0;

const resolveCareerBranchByDate = (dateSort: number): BranchId => {
  if (!careers.length || dateSort < oldestCareerSort) return "student";

  let assigned = careers[0];
  for (const career of careers) {
    if (career.fromSort <= dateSort) {
      assigned = career;
      continue;
    }
    break;
  }

  return `career-${assigned.id}`;
};

const summarizeEntries: SummarizeEntry[] = [
  ...careers.map((career) => ({
    id: `career-${career.id}`,
    sourceId: career.id,
    type: "CAREER" as const,
    date: career.from,
    title: career.company,
    org: career.role,
    branchId: `career-${career.id}` as BranchId,
    originalIndex: career.originalIndex,
  })),
  ...activities.map((activity) => {
    const sortValue = toYearMonthSortValue(activity.date);
    return {
      id: `activity-${activity.id}`,
      sourceId: activity.id,
      type: "ACTIVITIES" as const,
      date: activity.date,
      title: activity.title,
      org: activity.organizer,
      branchId: resolveCareerBranchByDate(sortValue),
      originalIndex: activity.originalIndex,
    };
  }),
  ...projects.map((project) => {
    const sortValue = toYearMonthSortValue(project.date);
    return {
      id: `project-${project.id}`,
      sourceId: project.id,
      type: "PROJECT" as const,
      date: project.date,
      title: project.title,
      org: "-",
      branchId: resolveCareerBranchByDate(sortValue),
      originalIndex: project.originalIndex,
    };
  }),
].sort((a, b) => {
  const dateDiff = toYearMonthSortValue(b.date) - toYearMonthSortValue(a.date);
  if (dateDiff !== 0) return dateDiff;

  const typeDiff = typePriority[a.type] - typePriority[b.type];
  if (typeDiff !== 0) return typeDiff;

  return a.originalIndex - b.originalIndex;
});

const careerBranchesByLatest = [...careers].sort((a, b) => b.fromSort - a.fromSort);

const careerBranchMetas: BranchMeta[] = careerBranchesByLatest.map(
  (career): BranchMeta => ({
    id: `career-${career.id}` as BranchId,
    label: career.company,
    // Every branch is created from main, so all branch commits stay on the same depth lane.
    laneIndex: 1,
    isMerge: true,
  }),
);

const studentBranchMeta: BranchMeta = {
  id: "student",
  label: "STUDENT",
  laneIndex: 1,
  isMerge: summarizeEntries.some((entry) => entry.branchId === "student"),
};

const branchMetas: BranchMeta[] = [studentBranchMeta, ...careerBranchMetas].filter((branch): branch is BranchMeta =>
  summarizeEntries.some((entry) => entry.branchId === branch.id),
);

const lineText = (entry: SummarizeEntry) => {
  if (entry.type === "CAREER") {
    return `${entry.title} - ${entry.org || "-"}`;
  }
  if (entry.type === "PROJECT") {
    return entry.title;
  }
  return `${entry.title} - ${entry.org || "-"}`;
};

const getChildLaneIndex = () => 3;

const getEntryLaneIndex = (entry: SummarizeEntry, fallbackLane = 1) => {
  if (entry.branchId === "student") return 1;
  if (entry.type === "ACTIVITIES" || entry.type === "PROJECT") return getChildLaneIndex();
  return fallbackLane;
};

const SummarizeTimeline = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mainProbeRef = useRef<HTMLSpanElement | null>(null);
  const badgeRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const [layout, setLayout] = useState<{
    width: number;
    height: number;
    mainX: number;
    laneGap: number;
    branchIndent: number;
    mergeRise: number;
    mergeStemHeight: number;
    transitionGap: number;
    nodeRadius: number;
    lineWidth: number;
    positions: Record<string, LayoutPosition>;
  }>({
    width: 0,
    height: 0,
    mainX: 0,
    laneGap: 0,
    branchIndent: 0,
    mergeRise: 0,
    mergeStemHeight: 6,
    transitionGap: 12,
    nodeRadius: 8,
    lineWidth: 2,
    positions: {},
  });

  const entryMap = useMemo(() => new Map(summarizeEntries.map((entry, index) => [entry.id, { entry, index }])), []);

  const branchRenderMeta = useMemo<BranchRenderMeta[]>(() => {
    return branchMetas
      .map((meta) => {
        const members = summarizeEntries
          .filter((entry) => entry.branchId === meta.id)
          .map((entry) => ({
            id: entry.id,
            index: entryMap.get(entry.id)?.index ?? -1,
            type: entry.type,
          }))
          .filter((item) => item.index >= 0)
          .sort((a, b) => a.index - b.index);

        if (members.length === 0) return null;

        const mostRecentEntryId = members[0].id;
        const oldestEntryId = members[members.length - 1].id;

        let splitEntryId = oldestEntryId;
        if (meta.id.startsWith("career-")) {
          const careerCommit = members.find((item) => item.type === "CAREER");
          if (careerCommit) splitEntryId = careerCommit.id;
        }

        return {
          ...meta,
          splitEntryId,
          oldestEntryId,
          mostRecentEntryId,
        };
      })
      .filter((meta): meta is BranchRenderMeta => Boolean(meta));
  }, [entryMap]);

  const childSegments = useMemo<ChildSegment[]>(() => {
    const segments: ChildSegment[] = [];

    branchMetas.forEach((parentBranch) => {
      if (!parentBranch.id.startsWith("career-")) {
        return;
      }

      const parentEntries = summarizeEntries
        .filter((entry) => entry.branchId === parentBranch.id)
        .map((entry) => ({ entry, index: entryMap.get(entry.id)?.index ?? -1 }))
        .filter((item) => item.index >= 0)
        .sort((a, b) => a.index - b.index);

      let cursor = 0;
      while (cursor < parentEntries.length) {
        const item = parentEntries[cursor];
        if (!item || (item.entry.type !== "ACTIVITIES" && item.entry.type !== "PROJECT")) {
          cursor += 1;
          continue;
        }

        const segmentType = item.entry.type;
        const segmentStart = cursor;
        let segmentEnd = cursor;

        while (segmentEnd + 1 < parentEntries.length) {
          const next = parentEntries[segmentEnd + 1];
          if (!next || next.entry.type !== segmentType) break;
          segmentEnd += 1;
        }

        const mostRecent = parentEntries[segmentStart];
        const oldest = parentEntries[segmentEnd];
        const newerNeighbor = segmentStart > 0 ? parentEntries[segmentStart - 1] : null;
        const olderNeighbor = segmentEnd + 1 < parentEntries.length ? parentEntries[segmentEnd + 1] : null;

        if (mostRecent && oldest) {
          segments.push({
            id: `${parentBranch.id}-${segmentType}-${mostRecent.entry.id}`,
            parentBranchId: parentBranch.id,
            type: segmentType,
            mostRecentEntryId: mostRecent.entry.id,
            oldestEntryId: oldest.entry.id,
            splitAnchorEntryId: olderNeighbor?.entry.id ?? null,
            mergeAnchorEntryId: newerNeighbor?.entry.id ?? null,
          });
        }

        cursor = segmentEnd + 1;
      }
    });

    return segments;
  }, [entryMap]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const recalc = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const css = getComputedStyle(container);
      const probeRect = mainProbeRef.current?.getBoundingClientRect();
      const mainX = probeRect ? probeRect.left - rect.left : 16;
      const laneGap = Number.parseFloat(css.getPropertyValue("--summary-lane-gap")) || 36;
      const branchIndent = Number.parseFloat(css.getPropertyValue("--summary-branch-indent")) || 28;
      const mergeRise = Number.parseFloat(css.getPropertyValue("--summary-merge-rise")) || 18;
      const mergeStemHeight = Number.parseFloat(css.getPropertyValue("--summary-merge-stem-height")) || 6;
      const transitionGap = Number.parseFloat(css.getPropertyValue("--summary-transition-gap")) || 12;
      const nodeRadius = Number.parseFloat(css.getPropertyValue("--summary-node-size")) / 2 || 8;
      const lineWidth = Number.parseFloat(css.getPropertyValue("--summary-line-width")) || 2;

      const nextPositions: Record<string, LayoutPosition> = {};
      summarizeEntries.forEach((entry) => {
        const badge = badgeRefs.current[entry.id];
        if (!badge) return;
        const badgeRect = badge.getBoundingClientRect();
        nextPositions[entry.id] = {
          centerY: badgeRect.top - rect.top + badgeRect.height / 2,
          topY: badgeRect.top - rect.top,
        };
      });

      setLayout({
        width: rect.width,
        height: rect.height,
        mainX,
        laneGap,
        branchIndent,
        mergeRise,
        mergeStemHeight,
        transitionGap,
        nodeRadius,
        lineWidth,
        positions: nextPositions,
      });
    };

    recalc();

    const resizeObserver = new ResizeObserver(recalc);
    resizeObserver.observe(container);
    window.addEventListener("resize", recalc);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const container = containerRef.current;
      if (!container) return;
      const event = new Event("resize");
      window.dispatchEvent(event);
    });

    return () => cancelAnimationFrame(rafId);
  }, []);

  const graphElements = useMemo(() => {
    if (!layout.width || !layout.height) return null;

    const lineShapes: JSX.Element[] = [];
    const nodeShapes: JSX.Element[] = [];
    const mainNodeYKeys = new Set<string>();
    const nodeKeyForY = (value: number) => `${Math.round(value * 10) / 10}`;
    const branchMergeYById = new Map<BranchId, number>();
    const latestEntryId = summarizeEntries[0]?.id ?? null;

    branchRenderMeta.forEach((branch) => {
      const laneX = layout.mainX + layout.branchIndent + branch.laneIndex * layout.laneGap;
      const split = layout.positions[branch.splitEntryId];
      const oldest = layout.positions[branch.oldestEntryId];
      const mostRecent = layout.positions[branch.mostRecentEntryId];
      if (!split || !oldest || !mostRecent) return;

      const splitY = split.centerY;
      const oldestY = oldest.centerY;
      const isLatestEntry = latestEntryId !== null && branch.mostRecentEntryId === latestEntryId;

      if (branch.isMerge && !isLatestEntry) {
        const stemTopY = mostRecent.topY - layout.mergeStemHeight;
        const mergeMainY = stemTopY - layout.mergeRise;
        branchMergeYById.set(branch.id, mergeMainY);

        lineShapes.push(
          <line
            key={`${branch.id}-vertical`}
            className={styles.summaryGraphStroke}
            x1={laneX}
            y1={stemTopY}
            x2={laneX}
            y2={oldestY}
          />,
        );

        lineShapes.push(
          <line
            key={`${branch.id}-merge`}
            className={styles.summaryGraphStroke}
            x1={laneX}
            y1={stemTopY}
            x2={layout.mainX}
            y2={mergeMainY}
          />,
        );

        const branchMergeKey = nodeKeyForY(mergeMainY);
        if (!mainNodeYKeys.has(branchMergeKey)) {
          mainNodeYKeys.add(branchMergeKey);
          nodeShapes.push(
            <circle
              key={`${branch.id}-merge-node`}
              className={styles.summaryGraphNode}
              cx={layout.mainX}
              cy={mergeMainY}
              r={layout.nodeRadius}
            />,
          );
        }
      } else {
        const openTopY = isLatestEntry
          ? mostRecent.topY - layout.transitionGap
          : mostRecent.centerY;
        lineShapes.push(
          <line
            key={`${branch.id}-vertical-open`}
            className={styles.summaryGraphStroke}
            x1={laneX}
            y1={openTopY}
            x2={laneX}
            y2={oldestY}
          />,
        );
      }

      lineShapes.push(
        <line
          key={`${branch.id}-split`}
          className={styles.summaryGraphStroke}
          x1={layout.mainX}
          y1={splitY}
          x2={laneX}
          y2={splitY}
        />,
      );

      const branchSplitKey = nodeKeyForY(splitY);
      if (!mainNodeYKeys.has(branchSplitKey)) {
        mainNodeYKeys.add(branchSplitKey);
        nodeShapes.push(
          <circle
            key={`${branch.id}-split-node`}
            className={styles.summaryGraphNode}
            cx={layout.mainX}
            cy={splitY}
            r={layout.nodeRadius}
          />,
        );
      }
    });

    childSegments.forEach((segment) => {
      const parentMeta = branchRenderMeta.find((meta) => meta.id === segment.parentBranchId);
      if (!parentMeta) return;

      const parentX = layout.mainX + layout.branchIndent + parentMeta.laneIndex * layout.laneGap;
      const childX = layout.mainX + layout.branchIndent + getChildLaneIndex() * layout.laneGap;
      const mostRecent = layout.positions[segment.mostRecentEntryId];
      const oldest = layout.positions[segment.oldestEntryId];
      if (!mostRecent || !oldest) return;

      const splitAnchor = segment.splitAnchorEntryId ? layout.positions[segment.splitAnchorEntryId] : null;
      const mergeAnchor = segment.mergeAnchorEntryId ? layout.positions[segment.mergeAnchorEntryId] : null;
      const splitAnchorType = segment.splitAnchorEntryId ? entryMap.get(segment.splitAnchorEntryId)?.entry.type : null;
      const mergeAnchorType = segment.mergeAnchorEntryId ? entryMap.get(segment.mergeAnchorEntryId)?.entry.type : null;
      const splitIsTypeTransition = splitAnchorType === "ACTIVITIES" || splitAnchorType === "PROJECT";
      const mergeIsTypeTransition = mergeAnchorType === "ACTIVITIES" || mergeAnchorType === "PROJECT";

      const splitBaseY = splitAnchor ? (oldest.centerY + splitAnchor.centerY) / 2 : oldest.centerY;
      const mergeBaseY = mergeAnchor
        ? (mostRecent.centerY + mergeAnchor.centerY) / 2
        : mostRecent.centerY - layout.transitionGap;
      const splitY = splitIsTypeTransition ? splitBaseY - layout.transitionGap / 2 : splitBaseY;
      const mergeChildY = mergeIsTypeTransition ? mergeBaseY + layout.transitionGap / 2 : mergeBaseY;
      const mergeToMain = !segment.mergeAnchorEntryId;
      const mergeCareerY = mergeChildY - layout.mergeRise;
      const mergeMainY = branchMergeYById.get(segment.parentBranchId) ?? mergeCareerY;
      const isLatestEntry = latestEntryId !== null && segment.mostRecentEntryId === latestEntryId;

      const openTopY = mostRecent.topY - layout.transitionGap;
      const topY = Math.min(mergeToMain && isLatestEntry ? openTopY : mergeChildY, splitY);
      const bottomY = Math.max(mergeChildY, splitY);

      lineShapes.push(
        <line
          key={`${segment.id}-vertical`}
          className={styles.summaryGraphChildLane}
          x1={childX}
          y1={topY}
          x2={childX}
          y2={bottomY}
        />,
      );

      lineShapes.push(
        <line
          key={`${segment.id}-split`}
          className={styles.summaryGraphStroke}
          x1={parentX}
          y1={splitY}
          x2={childX}
          y2={splitY}
        />,
      );

      nodeShapes.push(
        <circle
          key={`${segment.id}-split-node-parent`}
          className={styles.summaryGraphNode}
          cx={parentX}
          cy={splitY}
          r={layout.nodeRadius}
        />,
      );

      if (!(mergeToMain && isLatestEntry)) {
        lineShapes.push(
          <line
            key={`${segment.id}-merge`}
            className={styles.summaryGraphStroke}
            x1={childX}
            y1={mergeChildY}
            x2={mergeToMain ? layout.mainX : parentX}
            y2={mergeToMain ? mergeMainY : mergeCareerY}
          />,
        );

        if (mergeToMain) {
          const segmentMergeKey = nodeKeyForY(mergeMainY);
          if (!mainNodeYKeys.has(segmentMergeKey)) {
            mainNodeYKeys.add(segmentMergeKey);
            nodeShapes.push(
              <circle
                key={`${segment.id}-merge-node-main`}
                className={styles.summaryGraphNode}
                cx={layout.mainX}
                cy={mergeMainY}
                r={layout.nodeRadius}
              />,
            );
          }
        } else {
          nodeShapes.push(
            <circle
              key={`${segment.id}-merge-node-career`}
              className={styles.summaryGraphNode}
              cx={parentX}
              cy={mergeCareerY}
              r={layout.nodeRadius}
            />,
          );
        }
      }
    });

    return [...lineShapes, ...nodeShapes];
  }, [branchRenderMeta, childSegments, entryMap, layout]);

  return (
    <section id="summarize" className={styles.summarizeSection} aria-labelledby="summarize-heading">
      <div className={styles.summarizeHeaderRow}>
        <h2 id="summarize-heading" className={styles.summarizeTitle}>
          SUMMARIZE
        </h2>
        <div className={styles.summarizeLegend} aria-hidden>
          <span className={styles.summarizeLegendItem} data-entry-type="CAREER">
            CAREER
          </span>
          <span className={styles.summarizeLegendItem} data-entry-type="PROJECT">
            PROJECT
          </span>
          <span className={styles.summarizeLegendItem} data-entry-type="ACTIVITIES">
            ACTIVITIES
          </span>
        </div>
      </div>
      <div
        ref={containerRef}
        className={styles.summarizeContainer}
        style={
          {
            "--summary-max-lane-index": childSegments.length > 0
              ? Math.max(getChildLaneIndex(), ...branchMetas.map((branch) => branch.laneIndex))
              : Math.max(0, ...branchMetas.map((branch) => branch.laneIndex)),
          } as React.CSSProperties
        }
      >
        <span ref={mainProbeRef} className={styles.summaryMainProbe} aria-hidden />
        <svg
          className={styles.summaryGraph}
          width={layout.width}
          height={layout.height}
          viewBox={`0 0 ${Math.max(layout.width, 1)} ${Math.max(layout.height, 1)}`}
          aria-hidden="true"
          focusable="false"
        >
          {graphElements}
        </svg>

        <ol className={styles.summarizeList}>
          {summarizeEntries.map((entry) => {
            const branch = branchMetas.find((meta) => meta.id === entry.branchId);
            const laneIndex = getEntryLaneIndex(entry, branch?.laneIndex ?? 1);

            return (
              <li
                key={entry.id}
                className={styles.summarizeItem}
                style={{ "--entry-lane-index": laneIndex } as React.CSSProperties}
              >
                <span
                  ref={(node) => {
                    badgeRefs.current[entry.id] = node;
                  }}
                  className={styles.summarizeDateBadge}
                  data-entry-type={entry.type}
                >
                  {entry.date}
                </span>
                <p className={styles.summarizeLine} data-entry-type={entry.type}>
                  <span className={styles.summarizeTypeBadge} data-entry-type={entry.type}>
                    {entry.type}
                  </span>
                  <span className={styles.summarizeMessage}>{lineText(entry)}</span>
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default SummarizeTimeline;
