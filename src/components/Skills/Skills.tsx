import styles from './Skills.module.css';

const skillGroups = [
  {
    category: 'Marketing Platforms & Integration',
    skills: ['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Snapchat Ads', 'CRM Systems', 'GTM', 'GA4', 'Conversion API (CAPI)']
  },
  {
    category: 'AI Integration & Automation',
    skills: ['OpenAI API', 'Claude', 'n8n', 'Make.com', 'Zapier', 'WhatsApp API Integration', 'Workflow Automation', 'Lead Scoring Systems']
  },
  {
    category: 'Development & Design',
    skills: ['WordPress', 'Webflow', 'Shopify', 'Figma', 'Adobe Creative Cloud', 'HTML', 'CSS', 'JavaScript', 'Next.js', 'React']
  },
  {
    category: 'Data & Analytics',
    skills: ['Google Search Console', 'UTM Parameters', 'Performance Reporting', 'Dashboard Creation', 'ROI Optimization', 'Budget Allocation']
  }
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>Technical Skills</h2>
      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.skillList}>
              {group.skills.map((skill, i) => (
                <li key={i} className={styles.skillTag}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
