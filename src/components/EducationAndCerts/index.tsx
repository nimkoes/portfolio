"use client";

import educationData from "@resources/education.json";
import certificationsData from "@resources/certifications.json";
import styles from "./EducationAndCerts.module.scss";

type EducationItem = {
  id: number;
  school: string;
  degree: string;
  major?: string;
  period: string;
  notes?: string;
};

type CertificationItem = {
  id: number;
  name: string;
  description?: string;
  issuer: string;
  date: string;
};

const EducationAndCerts = () => {
  const education = educationData as EducationItem[];
  const certifications = certificationsData as CertificationItem[];

  return (
    <section id="education-certs" className={styles.educationCerts}>
      <h2 className={styles.sectionTitle}>학력 및 자격증</h2>
      
      {education.length > 0 && (
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
            </svg>
            학력
          </h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>세부</th>
                  <th>기간</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody>
                {education.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.nameCell}>{item.school}</td>
                    <td className={styles.detailCell}>
                      {item.degree}
                      {item.major && ` (${item.major})`}
                    </td>
                    <td className={styles.periodCell}>{item.period}</td>
                    <td className={styles.notesCell}>{item.notes || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {certifications.length > 0 && (
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            자격증
          </h3>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>이름</th>
                  <th>내용</th>
                  <th>주관</th>
                  <th>일시</th>
                </tr>
              </thead>
              <tbody>
                {certifications.map((item) => (
                  <tr key={item.id}>
                    <td className={styles.nameCell}>{item.name}</td>
                    <td className={styles.contentCell}>{item.description || "-"}</td>
                    <td className={styles.issuerCell}>{item.issuer}</td>
                    <td className={styles.dateCell}>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default EducationAndCerts;
