"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

const THEME_KEY = "portfolio-theme";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return THEME_LIGHT;
  const stored = window.localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
  if (stored === THEME_LIGHT || stored === THEME_DARK) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEME_DARK : THEME_LIGHT;
}

function applyTheme(theme: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem(THEME_KEY, theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(THEME_LIGHT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const isDark = theme === THEME_DARK;

  const toggle = () => {
    const next = isDark ? THEME_LIGHT : THEME_DARK;
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      role="switch"
      aria-checked={mounted ? isDark : false}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      title={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
    >
      <span className={styles.toggleLabel}>Theme</span>
      <span className={styles.toggleTrack}>
        <span className={styles.toggleThumb} />
      </span>
    </button>
  );
}
