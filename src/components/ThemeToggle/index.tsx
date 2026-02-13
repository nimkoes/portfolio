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
      <span className={styles.toggleTrack}>
        <span className={styles.toggleThumb} aria-hidden>
          {mounted && isDark ? (
            <svg viewBox="0 0 24 24" className={styles.toggleIcon}>
              <path
                fill="currentColor"
                d="M21.752 15.002a1 1 0 0 0-1.219-.666 8 8 0 0 1-10.201-8.869 1 1 0 0 0-1.786-.79 10 10 0 1 0 13.872 11.107 1 1 0 0 0-.666-.782z"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className={styles.toggleIcon}>
              <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="2.5" x2="12" y2="5.2" />
                <line x1="12" y1="18.8" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5.2" y2="12" />
                <line x1="18.8" y1="12" x2="21.5" y2="12" />
                <line x1="5.1" y1="5.1" x2="7" y2="7" />
                <line x1="17" y1="17" x2="18.9" y2="18.9" />
                <line x1="5.1" y1="18.9" x2="7" y2="17" />
                <line x1="17" y1="7" x2="18.9" y2="5.1" />
              </g>
            </svg>
          )}
        </span>
      </span>
    </button>
  );
}
