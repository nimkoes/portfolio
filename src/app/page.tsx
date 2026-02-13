import type { ReactNode } from "react";
import styles from "./page.module.scss";
import Aside from "~/components/Aside";
import ExperienceTimeline from "~/components/ExperienceTimeline";
import Activities from "~/components/Activities";
import Projects from "~/components/Projects";

type BranchState = "open" | "merge";

const GraphBranchSection = ({ branchState, children }: { branchState: BranchState; children: ReactNode }) => (
  <div className={styles.graphBranchSection} data-branch-state={branchState}>
    <span className={styles.graphNode} aria-hidden />
    <span className={styles.graphBranchLine} aria-hidden />
    {children}
  </div>
);

const HomePage = () => (
  <main className={styles.home}>
    <div className={styles.homeLeft}>
      <Aside />
    </div>
    <div className={styles.homeContainer}>
      <div className={styles.graphLayout} aria-hidden />
      <GraphBranchSection branchState="open">
        <ExperienceTimeline />
      </GraphBranchSection>
      <GraphBranchSection branchState="merge">
        <Activities />
      </GraphBranchSection>
      <GraphBranchSection branchState="merge">
        <Projects />
      </GraphBranchSection>
    </div>
  </main>
);

export default HomePage;
