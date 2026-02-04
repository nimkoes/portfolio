import styles from "./page.module.scss";
import Aside from "~/components/Aside";
import Careers from "~/components/Careers";
import Activities from "~/components/Activities";
import Projects from "~/components/Projects";

const HomePage = () => (
  <main className={styles.home}>
      <div className={styles.homeLeft}>
        <Aside />
        <div className={styles.activitiesDesktop}>
          <Activities />
        </div>
      </div>
      <div className={styles.homeContainer}>
        <Careers />
        <Projects />
        <div className={styles.activitiesMobile}>
          <Activities />
        </div>
      </div>
    </main>
);

export default HomePage;

