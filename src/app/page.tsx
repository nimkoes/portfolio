import styles from "./page.module.scss";
import Careers from "~/components/Careers";
import Aside from "~/components/Aside";
import Activities from "~/components/Activities";

const HomePage = () => (
  <main className={styles.home}>
    <Aside />

    <div className={styles.homeContainer}>
      {/* <Activities /> */}

      <Careers />
    </div>
  </main>
);

export default HomePage;
