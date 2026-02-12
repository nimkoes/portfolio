"use client";

import { useState, useEffect } from "react";
import styles from "./About.module.scss";

const SECTION_BODY_ID = "about-section-body";

const About = () => {
  // SSR 안전성을 위해 초기값은 항상 false로 설정
  // useEffect에서 화면 크기에 따라 상태를 업데이트
  const [isSectionOpen, setIsSectionOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // 컴포넌트 마운트 시 화면 크기에 따라 초기 상태 설정
    // PC는 기본 열림, 모바일은 기본 닫힘
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsSectionOpen(mediaQuery.matches);
  }, []);

  return (
    <div id="about" className={styles.about}>
      <h2 className={styles.aboutTitle}>ABOUT</h2>
      <button
        type="button"
        className={styles.aboutHeader}
        onClick={() => setIsSectionOpen((prev) => !prev)}
        aria-expanded={isSectionOpen}
        aria-controls={SECTION_BODY_ID}
        id="about-section-trigger"
      >
        <span className={styles.aboutHeaderTitle}>I work diligently to become lazy ☕</span>
        {isMounted && (
          <span className={styles.aboutHeaderChevron} aria-hidden>
            {isSectionOpen ? "▲" : "▼"}
          </span>
        )}
      </button>
      <div
        id={SECTION_BODY_ID}
        className={`${styles.aboutBody} ${isSectionOpen ? styles.aboutBodyOpen : ""}`}
        role="region"
        aria-labelledby="about-section-trigger"
        aria-hidden={!isSectionOpen}
      >
        <div className={styles.aboutContent}>
          <p>
            게을러지기 위해 부지런히 고민하는 백엔드 개발자 홍석민입니다.
            4시간 이상 소요되던 배포 프로세스를 30분 이내로 단축할 수 있는 유틸리티를 개발하여 팀 동료들에게 공유하고, 3일 예상 작업을 정규식 기반 자동화 도구를 개발하여 수분 내 완료하는 등 구체적인 성과를 통해 개발 생산성을 향상시키기 위해 고민하고 기여해왔습니다.
          </p>
          <p>
            Spring Boot 기반 웹 애플리케이션 개발을 주로 해왔으며, 항공 및 물류 산업의 다양한 프로젝트 경험을 보유하고 있습니다. Azure Cloud와 Kubernetes 환경에서의 MSA 아키텍처 기반 SaaS 솔루션 설계 및 개발부터 운영까지 전 과정을 경험했으며, SQLD 자격을 보유하여 데이터베이스 설계 및 성능 최적화에도 기여하고 있습니다.
          </p>
          <p>
            현재 (주)트레드링스에서 매니저로 재직중이며, 수출입 물류 지원 솔루션 'ZimGo' 서비스의 개발 초기부터 출시까지 전 과정에 참여하고, E2E 공급망 관리 솔루션 'Ocean Visibility' 서비스 개발을 지원하고 있습니다. 또한 사내 스터디 모임을 주도하는 등 기술적 업무 역량 강화에도 꾸준히 기여하고 있습니다.
          </p>
          <p>
            문제 해결과 프로세스 개선에 대한 열정으로 반복적인 작업의 자동화 방안을 고민하고, 개인적으로도 학습을 멈추지 않고 지속적인 성장을 추구하고 있습니다. 또한 사내 협업 우수상 수상으로 협업 능력을 인정받았습니다. 경험을 바탕으로 복잡한 비즈니스 로직을 효율적으로 구현하고, 서비스를 이용하는 모든 고객에게 가치있는 서비스를 제공하는 개발자가 되고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
