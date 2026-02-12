"use client";

import styles from "./ProfileSummary.module.scss";

const ProfileSummary = () => {
  return (
    <section id="profile-summary" className={styles.profileSummary}>
      <div className={styles.profileCard}>
        <div className={styles.profileTop}>
          <div className={styles.profileInfo}>
            <div className={styles.nameRow}>
              <h1 className={styles.name}>홍석민</h1>
              <span className={styles.nameEn}>(nimkoes)</span>
            </div>
            <p className={styles.role}>백엔드 개발자</p>
            <div className={styles.contactRow}>
              <span className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>연락처 정보</span>
              </span>
              <span className={styles.contactDivider}>|</span>
              <span className={styles.contactItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>이메일 정보</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.profileDetails}>
          <div className={styles.detailColumn}>
            <h3 className={styles.detailTitle}>기본 정보</h3>
            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>생년월일</span>
                <span className={styles.detailValue}>정보 입력 필요</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>거주지</span>
                <span className={styles.detailValue}>정보 입력 필요</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>취미</span>
                <span className={styles.detailValue}>정보 입력 필요</span>
              </div>
            </div>
          </div>
          
          <div className={styles.detailColumn}>
            <h3 className={styles.detailTitle}>학력 및 병역</h3>
            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>학위</span>
                <span className={styles.detailValue}>정보 입력 필요</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>병역</span>
                <span className={styles.detailValue}>정보 입력 필요</span>
              </div>
            </div>
          </div>
          
          <div className={styles.detailColumn}>
            <h3 className={styles.detailTitle}>기타</h3>
            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <a href="https://github.com/nimkoes" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  github.com/nimkoes
                </a>
              </div>
              <div className={styles.detailItem}>
                <a href="https://nimkoes.github.io/tech-blog/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Tech Blog
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.profileIntro}>
          <p>
            게을러지기 위해 부지런히 고민하는 백엔드 개발자 홍석민입니다.
            4시간 이상 소요되던 배포 프로세스를 30분 이내로 단축할 수 있는 유틸리티를 개발하여 팀 동료들에게 공유하고, 
            3일 예상 작업을 정규식 기반 자동화 도구를 개발하여 수분 내 완료하는 등 구체적인 성과를 통해 개발 생산성을 향상시키기 위해 고민하고 기여해왔습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;
