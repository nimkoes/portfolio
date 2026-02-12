"use client";

import activityData from "@resources/activities.json";
import styles from "./Activities.module.scss";
import { toYearMonth, toYearMonthSortValue } from "~/utils/date";

type ArticleItem = {
  id: number;
  title: string;
  summary?: string;
  organizer?: string;
  date?: string;
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

const Activities = () => {
  const timelineArticles = articles
    .map(({ id, title, organizer, date }) => {
      const formattedDate = toYearMonth(date);
      return {
        id,
        title: title?.trim() ?? "",
        organizer: organizer?.trim() ?? "",
        date: formattedDate,
      };
    })
    .filter(({ title, organizer, date }) => Boolean(title || organizer || date))
    .sort((a, b) => toYearMonthSortValue(b.date) - toYearMonthSortValue(a.date));

  return (
    <section id="activities" className={styles.activity} aria-labelledby="activities-heading">
      <h2 id="activities-heading" className={styles.activityTitle}>
        ACTIVITIES & AWARD
      </h2>

      <div className={styles.activityTimelineContainer}>
        <div className={styles.activityTimelineLine} aria-hidden="true" />
        <ol className={styles.activityTimelineContent}>
          {timelineArticles.map(({ id, title, organizer, date }) => (
            <li className={styles.activityTimelineItem} key={id}>
              <div className={styles.activityTimelineNode}>
                <span className={styles.activityDateBadge}>{date || "-"}</span>
              </div>
              <article className={styles.activityCard}>
                {title && <h3 className={styles.activityItemTitle}>{title}</h3>}
                {organizer && <p className={styles.activityItemOrganizer}>{organizer}</p>}
              </article>
            </li>
          ))}
          {timelineArticles.length === 0 && items.length > 0 && (
            <li className={styles.activityTimelineItem}>
              <article className={styles.activityCard}>
                <ul className={styles.activityFallbackList}>
                  {items.map((activity) => (
                    <li className={styles.activityFallbackItem} key={activity}>
                      {activity}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          )}
        </ol>
      </div>
    </section>
  );
};

export default Activities;
