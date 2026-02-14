"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Aside.module.scss";
import keywordList from "@resources/keywords.json";
import ThemeToggle from "~/components/ThemeToggle";
import OnelineToggle from "~/components/OnelineToggle";

type AsideProps = {
  isOneline: boolean;
  onToggleOneline: () => void;
};

const contactLinks = [
  {
    href: "https://nimkoes.github.io/tech-blog/",
    label: "Tech Blog",
    style: styles.asideLinkGithubtech,
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo} aria-hidden>
        <path d="m12.097.227-1.913 1.341L7.93.914 6.6 2.816l-2.346.142-.586 2.234-2.157.92.23 2.295L.032 9.995l1.015 2.083L0 14.14l1.679 1.616-.267 2.291 2.141.955.549 2.243 2.344.178 1.3 1.925 2.965-.836-6.421-6.298a4.548 4.548 0 0 1-1.491-3.364c0-2.542 2.1-4.601 4.692-4.601 1.406 0 2.668.607 3.527 1.57l.978.959 1.195-1.173a4.725 4.725 0 0 1 3.3-1.332c2.591 0 4.692 2.061 4.692 4.603 0 1.4-.702 2.628-1.644 3.497l-6.291 6.178a1.78 1.78 0 0 0-1.25-.509c-.489 0-.933.195-1.252.51.006.675.563 1.22 1.252 1.22.66 0 1.2-.502 1.248-1.139l2.822.78 1.33-1.901 2.348-.142.585-2.234 2.156-.921-.227-2.297 1.705-1.587-1.015-2.081L24 10.186l-1.68-1.614.266-2.293-2.14-.955-.55-2.243-2.344-.18L16.253.98l-2.265.619ZM9.292 13.58c-.614 0-1.111.489-1.111 1.091a1.1 1.1 0 0 0 1.111 1.09 1.1 1.1 0 0 0 1.112-1.09 1.1 1.1 0 0 0-1.112-1.09zm5.423 0a1.1 1.1 0 0 0-1.11 1.091 1.1 1.1 0 0 0 1.11 1.09c.616 0 1.112-.488 1.112-1.09 0-.602-.496-1.09-1.112-1.09z" />
      </svg>
    ),
  },
  {
    href: "https://xxxelppa.tistory.com/",
    label: "Tistory",
    style: styles.asideLinkTistory,
    icon: (
      <svg viewBox="0 0 459 459" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo} aria-hidden>
        <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/nimkoes",
    label: "GitHub",
    style: styles.asideLinkGithub,
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo} aria-hidden>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/wxpjegiysxlovzvhvjncev",
    label: "LinkedIn",
    style: styles.asideLinkLinkedin,
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" className={styles.asideLinkLogo} aria-hidden>
        <path d="M0 3.02695V20.973C0 22.667 1.33301 24 3.02695 24H20.973C21.8021 24 22.5943 23.6033 23.0994 23.0994C23.6402 22.5586 24 21.8736 24 20.973V3.02695C24 1.33301 22.667 0 20.973 0H3.02695C2.12636 0 1.44141 0.360928 0.900591 0.900591C0.395522 1.40566 0 2.19786 0 3.02695ZM3.24374 5.4047C3.24374 4.25157 4.18123 3.24259 5.33436 3.24259C6.52323 3.24259 7.49647 4.25157 7.49647 5.4047C7.49647 6.59357 6.52323 7.53106 5.33436 7.53106C4.18123 7.53106 3.24374 6.59357 3.24374 5.4047ZM9.04512 20.2154V9.225C9.04512 8.97247 9.29765 8.75684 9.47754 8.75684H12.5402C12.9727 8.75684 12.9727 9.2619 12.9727 9.58593C13.8375 8.72109 14.9549 8.5043 16.108 8.5043C18.9193 8.5043 20.7205 9.83731 20.7205 12.7928V20.2166C20.7205 20.4691 20.5037 20.6848 20.2881 20.6848H17.117C16.8645 20.6848 16.6846 20.4322 16.6846 20.2166V13.5135C16.6846 12.3961 16.3605 11.7838 15.099 11.7838C13.5135 11.7838 13.1168 12.8285 13.1168 14.2342V20.2166C13.1168 20.4691 12.8643 20.6848 12.6117 20.6848H9.47639C9.2965 20.6848 9.04396 20.4322 9.04396 20.2166L9.04512 20.2154ZM3.31524 20.2154V9.225C3.31524 8.97247 3.56777 8.75684 3.74766 8.75684H6.88301C7.17129 8.75684 7.35118 8.93672 7.35118 9.225V20.2154C7.35118 20.468 7.13439 20.6836 6.88301 20.6836H3.74766C3.53087 20.6836 3.31524 20.4311 3.31524 20.2154Z" />
      </svg>
    ),
  },
];

const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const Aside = ({ isOneline, onToggleOneline }: AsideProps) => {
  const titleSentinelRef = useRef<HTMLDivElement | null>(null);
  const titleRowRef = useRef<HTMLDivElement | null>(null);
  const [isTitleRowFixed, setIsTitleRowFixed] = useState(false);
  const [titleRowHeight, setTitleRowHeight] = useState(0);

  useEffect(() => {
    const updateMobileTitleRow = () => {
      if (typeof window === "undefined") return;

      if (window.innerWidth >= 768) {
        setIsTitleRowFixed(false);
        setTitleRowHeight(0);
        return;
      }

      const titleRowRect = titleRowRef.current?.getBoundingClientRect();
      if (titleRowRect && titleRowRect.height > 0) {
        setTitleRowHeight(titleRowRect.height);
      }

      const sentinelTop = titleSentinelRef.current?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      setIsTitleRowFixed(sentinelTop <= 4);
    };

    updateMobileTitleRow();
    window.addEventListener("scroll", updateMobileTitleRow, { passive: true });
    window.addEventListener("resize", updateMobileTitleRow);

    return () => {
      window.removeEventListener("scroll", updateMobileTitleRow);
      window.removeEventListener("resize", updateMobileTitleRow);
    };
  }, []);

  return (
    <aside className={styles.aside} aria-label="프로필">
      <div className={styles.asideProfile}>
        <Image
          src={`${assetBasePath}/images/thumbnail.jpg`}
          className={styles.asideThumb}
          alt="nimkoes thumbnail"
          width={130}
          height={130}
          priority
        />
      </div>
      <div ref={titleSentinelRef} className={styles.asideTitleRowSentinel} aria-hidden />
      <div ref={titleRowRef} className={`${styles.asideTitleRow} ${isTitleRowFixed ? styles.asideTitleRowFixed : ""}`}>
        <h1 className={styles.asideTitle}>nimkoes</h1>
        <div className={styles.asideControls}>
          <ThemeToggle />
          <OnelineToggle enabled={isOneline} onToggle={onToggleOneline} />
        </div>
      </div>
      {isTitleRowFixed ? <div className={styles.asideTitleRowSpacer} style={{ height: `${titleRowHeight}px` }} aria-hidden /> : null}
      <p className={styles.asideRole}>Backend Engineer | 2015 – Present</p>
      <div className={styles.asideComment}>I work diligently to become lazy ☕</div>

      <ul className={styles.asideKeyword}>
        {keywordList.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>

      <nav className={styles.asideLink} aria-label="연락처 및 링크">
        {contactLinks.map(({ href, label, style, icon }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={style} aria-label={label}>
            {icon}
            <span>{label}</span>
            <svg viewBox="0 0 24 24" className={styles.asideLinkArrow} aria-hidden>
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Aside;
