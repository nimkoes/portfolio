"use client";

import { useState, useEffect } from "react";
import styles from "./MobileNav.module.scss";

const navItems = [
  { label: "CAREER", href: "#careers" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ACTIVITIES", href: "#activities" },
];

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 다운 시 숨김, 스크롤 업 시 표시
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`${styles.mobileNav} ${isVisible ? styles.visible : ""}`}
      aria-label="모바일 네비게이션"
    >
      <ul className={styles.navList}>
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={styles.navLink}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
