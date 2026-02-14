"use client";

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
import Aside from "~/components/Aside";
import ExperienceTimeline from "~/components/ExperienceTimeline";
import Activities from "~/components/Activities";
import Projects from "~/components/Projects";

const SummarizeTimeline = dynamic(() => import("~/components/SummarizeTimeline"), {
  loading: () => (
    <section className={styles.graphSummarizeLoading} aria-live="polite">
      Loading summarize timeline...
    </section>
  ),
});

type BranchState = "open" | "merge";

const GraphBranchSection = ({ branchState, children }: { branchState: BranchState; children: ReactNode }) => (
  <div className={styles.graphBranchSection} data-branch-state={branchState}>
    <span className={styles.graphNode} aria-hidden />
    <span className={styles.graphBranchLine} aria-hidden />
    {children}
  </div>
);

const HomePage = () => {
  const [isOneline, setIsOneline] = useState(false);

  return (
    <main className={styles.home}>
      <div className={styles.homeLeft}>
        <Aside isOneline={isOneline} onToggleOneline={() => setIsOneline((prev) => !prev)} />
      </div>
      <div className={styles.homeContainer} data-mode={isOneline ? "summarize" : "default"}>
        <div className={styles.graphLayout} aria-hidden />
        {isOneline ? (
          <div className={styles.graphSummarizeSection}>
            <SummarizeTimeline />
          </div>
        ) : (
          <>
            <GraphBranchSection branchState="open">
              <ExperienceTimeline />
            </GraphBranchSection>
            <GraphBranchSection branchState="merge">
              <Activities />
            </GraphBranchSection>
            <GraphBranchSection branchState="merge">
              <Projects />
            </GraphBranchSection>
          </>
        )}
      </div>
    </main>
  );
};

export default HomePage;
