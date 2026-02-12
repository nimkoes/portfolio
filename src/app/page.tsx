import styles from "./page.module.scss";
import Aside from "~/components/Aside";
import ExperienceTimeline from "~/components/ExperienceTimeline";
import Activities from "~/components/Activities";
import Projects from "~/components/Projects";

const HomePage = () => (
  <main className={styles.home}>
      <div className={styles.homeLeft}>
        <Aside />
      </div>
      <div className={styles.homeContainer}>
        <div className={styles.graphLayout} aria-hidden />
        <div className={styles.graphBranchSection} data-branch-state="open">
          <span className={styles.graphNode} aria-hidden />
          <span className={styles.graphBranchLine} aria-hidden />
          <span className={styles.graphBranchDrop} aria-hidden />
          <span className={styles.graphBranchElbow} aria-hidden />
          <span className={styles.graphMergeLine} aria-hidden />
          <ExperienceTimeline />
        </div>
        <div className={styles.graphBranchSection} data-branch-state="merge">
          <span className={styles.graphNode} aria-hidden />
          <span className={styles.graphBranchLine} aria-hidden />
          <span className={styles.graphBranchDrop} aria-hidden />
          <span className={styles.graphBranchElbow} aria-hidden />
          <span className={styles.graphMergeLine} aria-hidden />
          <Activities />
        </div>
        <div className={styles.graphBranchSection} data-branch-state="merge">
          <span className={styles.graphNode} aria-hidden />
          <span className={styles.graphBranchLine} aria-hidden />
          <span className={styles.graphBranchDrop} aria-hidden />
          <span className={styles.graphBranchElbow} aria-hidden />
          <span className={styles.graphMergeLine} aria-hidden />
          <Projects />
        </div>
      </div>
    </main>
);

export default HomePage;

