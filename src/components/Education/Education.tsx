import styles from './Education.module.css';

const education = [
  {
    degree: 'Bachelor of Technology',
    school: 'MG University',
    period: '2012 - 2016'
  }
];

const certificates = [
  'Google Analytics Certification',
  'AI Strategies for Marketing and Sales',
  'n8n Certificate Level 2',
  'Excel Fundamentals'
];

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <h2 className={styles.sectionTitle}>Education & Certificates</h2>
      <div className={styles.grid}>
        <div className={styles.eduSection}>
          <h3 className={styles.subTitle}>Education</h3>
          {education.map((item, index) => (
            <div key={index} className={styles.item}>
              <h4 className={styles.degree}>{item.degree}</h4>
              <p className={styles.school}>{item.school}</p>
              <p className={styles.period}>{item.period}</p>
            </div>
          ))}
        </div>
        <div className={styles.certSection}>
          <h3 className={styles.subTitle}>Certificates</h3>
          <ul className={styles.certList}>
            {certificates.map((cert, index) => (
              <li key={index} className={styles.certItem}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
