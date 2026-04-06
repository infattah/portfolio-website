import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>Get In Touch</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.message}>
            I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className={styles.label}>Email:</span>
              <a href="mailto:cafattah@gmail.com" className={styles.value}>cafattah@gmail.com</a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Phone:</span>
              <a href="tel:+971545676559" className={styles.value}>+971 54 567 6559</a>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>Abu Dhabi, United Arab Emirates</span>
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={5} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </section>
  );
}
