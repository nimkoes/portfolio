"use client";

import styles from "./OnelineToggle.module.scss";

type OnelineToggleProps = {
  enabled: boolean;
  onToggle: () => void;
};

const OnelineToggle = ({ enabled, onToggle }: OnelineToggleProps) => {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      role="switch"
      aria-checked={enabled}
      aria-label={enabled ? "기본 모드로 전환" : "oneline 모드로 전환"}
      title={enabled ? "기본 모드로 전환" : "oneline 모드로 전환"}
    >
      <span className={styles.toggleTrack}>
        <span className={styles.toggleThumb} aria-hidden>
          {enabled ? (
            <svg viewBox="0 0 24 24" className={styles.toggleIcon}>
              <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="6" y1="12" x2="18" y2="12" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </g>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className={styles.toggleIcon}>
              <g fill="currentColor">
                <rect x="4" y="4" width="7" height="7" rx="1.5" />
                <rect x="13" y="4" width="7" height="7" rx="1.5" />
                <rect x="4" y="13" width="7" height="7" rx="1.5" />
                <rect x="13" y="13" width="7" height="7" rx="1.5" />
              </g>
            </svg>
          )}
        </span>
      </span>
    </button>
  );
};

export default OnelineToggle;
