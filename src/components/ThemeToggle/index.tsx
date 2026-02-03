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

  const toggle = () => {
    const next = theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) {
    return (
      <span className={styles.toggle} aria-hidden>
        <span className={styles.icon} />
      </span>
    );
  }

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === THEME_LIGHT ? "다크 모드로 전환" : "라이트 모드로 전환"}
      title={theme === THEME_LIGHT ? "다크 모드로 전환" : "라이트 모드로 전환"}
    >
      {theme === THEME_LIGHT ? (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      ) : (
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}
    </button>
  );
}
