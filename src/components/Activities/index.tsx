import activityData from "@resources/activities.json";
import styles from "./Activities.module.scss";
import { toYearMonth, toYearMonthSortValue } from "~/utils/date";

type ArticleItem = {
  id: number;
  title: string;
  summary?: string;
  affiliation?: string;
  organizer?: string;
  date?: string;
  image?: string;
};

type ActivitiesData =
  | { activities?: ArticleItem[]; awards?: ArticleItem[]; articles?: ArticleItem[] };

const normalizeData = (data: ActivitiesData): { entries: ArticleItem[] } => {
  const activities = data.activities ?? [];
  // Backward compatible: if awards is missing, use legacy articles payload.
  const awards = data.awards ?? data.articles ?? [];

  return {
    entries: [...activities, ...awards],
  };
};

const { entries } = normalizeData(activityData as ActivitiesData);
const timelineArticles = entries
  .map(({ id, title, affiliation, organizer, date }) => {
    const formattedDate = toYearMonth(date);
    return {
      id,
      title: title?.trim() ?? "",
      organizer: affiliation?.trim() || organizer?.trim() || "",
      date: formattedDate,
    };
  })
  .filter(({ title, organizer, date }) => Boolean(title || organizer || date))
  .sort((a, b) => toYearMonthSortValue(b.date) - toYearMonthSortValue(a.date));

const Activities = () => {
  return (
    <section id="activities" className={styles.activity} aria-labelledby="activities-heading">
      <h2 id="activities-heading" className={styles.activityTitle}>
        ACTIVITIES & AWARD
      </h2>

      <div className={styles.activityTimelineContainer}>
        <span className={styles.activityMergeNode} aria-hidden="true" />
        <svg
          className={styles.activityMergeSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <line className={styles.activityMergePath} x1="0" y1="0" x2="100" y2="100" />
        </svg>
        <div className={styles.activityTimelineLine} aria-hidden="true" />
        <ol className={styles.activityTimelineContent}>
          {timelineArticles.map(({ id, title, organizer, date }) => (
            <li className={styles.activityTimelineItem} key={id}>
              <div className={styles.activityTimelineNode}>
                <span className={styles.activityDateBadge}>{date || "-"}</span>
              </div>
              <article className={styles.activityCard}>
                {(title || organizer) && (
                  <h3 className={styles.activityItemTitle}>
                    {title && <span className={styles.activityItemTitleText}>{title}</span>}
                    {organizer && <span className={styles.activityItemOrganizerInline}>{organizer}</span>}
                  </h3>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Activities;
