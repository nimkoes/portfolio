"use client";

import { useState, useCallback, useEffect } from "react";
import activityData from "@resources/activities.json";
import styles from "./Activities.module.scss";

type ArticleItem = {
  id: number;
  title: string;
  summary?: string;
  image?: string;
};

type ActivitiesData =
  | string[]
  | { items: string[]; articles?: ArticleItem[] };

const normalizeData = (data: ActivitiesData): { items: string[]; articles: ArticleItem[] } => {
  if (Array.isArray(data)) {
    return { items: data, articles: [] };
  }
  return {
    items: data.items ?? [],
    articles: data.articles ?? [],
  };
};

const { items, articles } = normalizeData(activityData as ActivitiesData);

const SECTION_BODY_ID = "activities-section-body";

const Activities = () => {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [openImageUrl, setOpenImageUrl] = useState<string | null>(null);

  const closePopup = useCallback(() => setOpenImageUrl(null), []);

  // 이미지 팝업이 열려있을 때 배경 스크롤 방지
  useEffect(() => {
    if (openImageUrl === null) {
      // 팝업이 닫히면 스크롤 복원
      document.body.style.overflow = "";
      return;
    }

    // 팝업이 열리면 배경 스크롤 방지
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      // 스크롤 복원
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [openImageUrl, closePopup]);

  return (
    <div id="activities" className={styles.activity}>
      <button
        type="button"
        className={styles.activityHeader}
        onClick={() => setIsSectionOpen((prev) => !prev)}
        aria-expanded={isSectionOpen}
        aria-controls={SECTION_BODY_ID}
        id="activities-section-trigger"
      >
        <span className={styles.activityHeaderTitle}>Activities & Award</span>
        <span className={styles.activityHeaderChevron} aria-hidden>
          {isSectionOpen ? "▲" : "▼"}
        </span>
      </button>
      <div
        id={SECTION_BODY_ID}
        className={`${styles.activityBody} ${isSectionOpen ? styles.activityBodyOpen : ""}`}
        role="region"
        aria-labelledby="activities-section-trigger"
        aria-hidden={!isSectionOpen}
      >
        {items.length > 0 && (
          <ul className={styles.activityList}>
            {items.map((activity) => (
              <li className={styles.activityItem} key={activity}>
                {activity}
              </li>
            ))}
          </ul>
        )}
        {articles.length > 0 && (
          <ul className={styles.activityList}>
            {articles.map(({ id, title, summary, image }) => (
              <li className={styles.activityItem} key={id}>
                {image ? (
                  <button
                    type="button"
                    className={styles.articleLink}
                    onClick={() => setOpenImageUrl(image)}
                  >
                    <span className={styles.articleLinkTitle}>{title}</span>
                    {summary && (
                      <span className={styles.articleLinkSummary}>{summary}</span>
                    )}
                  </button>
                ) : (
                  <>
                    <span className={styles.articleLinkTitle}>{title}</span>
                    {summary && (
                      <span className={styles.articleLinkSummary}>{summary}</span>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {openImageUrl !== null && (
        <div
          className={styles.popupOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 보기"
          onClick={closePopup}
        >
          <div
            className={styles.popupImageWrap}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={openImageUrl}
              alt=""
              className={styles.popupImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
