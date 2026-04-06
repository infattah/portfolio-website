import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/profile.png"
            alt="Abdul Fathah"
            width={500}
            height={600}
            priority
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>Abdul Fathah</h1>
          <h2 className={styles.title}>Full Stack Growth Marketer</h2>
          <p className={styles.summary}>
            Digital Marketer with 6+ years of experience and scaling revenue across real estate, automotive, education, healthcare, e-commerce, and SaaS industries through AI-powered automation and full-stack marketing execution.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.primaryBtn}>Get in Touch</a>
            <a href="#experience" className={styles.secondaryBtn}>View Experience</a>
          </div>
        </div>
      </div>
    </section>
  );
}
