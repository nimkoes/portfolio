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
      aria-label="oneline 모드 전환"
      title="oneline 모드 전환"
    >
      <span className={styles.toggleLabel}>--oneline</span>
      <span className={styles.toggleTrack}>
        <span className={styles.toggleThumb} />
      </span>
    </button>
  );
};

export default OnelineToggle;
