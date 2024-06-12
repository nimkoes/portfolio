import Image from "next/image";
import styles from "./Aside.module.scss";
import keywordList from "@resources/keywords.json";

const Aside = () => (
  <aside className={styles.aside}>
    <div className={styles.asideProfile}>
      <Image src="/images/thumbnail.jpg" className={styles.asideThumb} alt="nimkoes thumbnail" width={130} height={130} priority />
      <h1 className={styles.asideTitle}>nimkoes</h1>
    </div>

    {/* <div className={styles.asideSubtitle}>그럼에도불구하고</div> */}
    <div className={styles.asideComment}>I work diligently to become lazy ☕</div>

    <ul className={styles.asideKeyword}>
      {keywordList.map((keyword) => (
        <li key={keyword}>{keyword}</li>
      ))}
    </ul>

    <div className={styles.asideLink}>
      <a href="https://xxxelppa.tistory.com" target="_blank" className={styles.asideLinkTistory}>
        <svg viewBox="0 0 459 459" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo}>
          <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
        </svg>
        <span>DEV Blog</span>

        <svg viewBox="0 0 24 24" className={styles.asideLinkArrow}>
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>

      <a href="https://github.com/nimkoes" target="_blank" className={styles.asideLinkGithub}>
        <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo}>
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <span>GitHub</span>

        <svg viewBox="0 0 24 24" className={styles.asideLinkArrow}>
          <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </aside>
);

export default Aside;
