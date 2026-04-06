import styles from './Experience.module.css';

const experiences = [
  {
    title: 'Performance Marketer',
    company: 'RPI - Royal Palace Investment',
    location: 'Abu Dhabi, UAE',
    period: 'Oct 2024 - Present',
    description: 'Lead digital marketing operations for a startup real estate agency specialising in off-plan and secondary market, targeting GCC, Indian, and European investor markets.',
    highlights: [
      'Scaled property sales from little to no sales to 9-17 per month within 6 months while reducing cost per lead by 57%',
      'Expanded monthly lead volume sixfold (100 -> 600+ leads) through audience segmentation and continuous optimisation',
      'Built an AI-driven lead qualification and scoring system using OpenAI API integrated with WhatsApp',
      'Implemented comprehensive conversion tracking infrastructure from scratch, including Meta Conversion API (CAPI)'
    ]
  },
  {
    title: 'Digital Marketing Manager',
    company: 'Almeka Technologies (Marketing Agency)',
    location: 'India',
    period: 'July 2023 - Oct 2024',
    description: 'Led marketing operations for a marketing agency managing a high-performing portfolio of 14+ active clients across Real Estate, Education, Healthcare, E-commerce, and SaaS.',
    highlights: [
      'Acquired 22+ new clients through outbound sales, webinars, and automation-driven demand generation strategies',
      'Education - Montessori School: Acquired 27 student admissions in the first academic year',
      'Real Estate Agencies: Deployed end-to-end system including CRM implementation, AI lead scoring, and influencer content',
      'Developed proprietary marketing automation frameworks using n8n, Make.com, and APIs'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Yoko Groups',
    location: 'Dubai, UAE',
    period: 'Jan 2021 - May 2023',
    description: 'Managed digital marketing across automotive garage services, car rental operations, and property management.',
    highlights: [
      'Generated over 2,500 qualified leads annually through multi-channel campaign management',
      'Reduced customer acquisition costs by implementing advanced GTM tracking and UTM attribution modelling',
      'Improved rental car booking rates and overall booking conversions via retargeting campaigns',
      'Built in-house creative production capability, including videography and photography'
    ]
  },
  {
    title: 'Founder, Branding & Marketing Lead',
    company: 'BeingHijabee',
    location: 'Kochi, India',
    period: 'July 2019 - Aug 2020',
    description: 'Founded and scaled a modest fashion e-commerce brand with 100% organic marketing strategies.',
    highlights: [
      'Built ₹1.5M revenue brand with zero paid advertising budget through organic social media campaigns',
      'Acquired 1,000+ customers across India, managing customer relationship management and order fulfilment',
      'Developed foundational full-stack marketing expertise across photography, design, and e-commerce operations'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.sectionTitle}>Selected Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.expItem}>
            <div className={styles.expMeta}>
              <span className={styles.period}>{exp.period}</span>
              <span className={styles.location}>{exp.location}</span>
            </div>
            <div className={styles.expContent}>
              <h3 className={styles.jobTitle}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
              <ul className={styles.highlights}>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
