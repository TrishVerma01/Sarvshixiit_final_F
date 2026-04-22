"use client";

// Removed heavy animation library for performance
import styles from "./Contact.module.css";

export default function Contact() {
  const email = "srvshixiit@iitk.ac.in";

  return (
    <footer className={styles.footer} id="contact-section">
      <div className={styles.container}>
        <div className={styles.grid}>

          <div className={styles.infoCol}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>We are continually expanding our reach to build stronger, more resilient STEM ecosystems in schools. Reach out to us for collaborations, support, or general inquiries.</p>
          </div>

          <div className={styles.contactCol}>
            <div className={styles.contactCard}>
              <h3 className={styles.cardLabel}>Contact Us</h3>
              <a href={`mailto:${email}`} className={styles.emailLink}>
                {email}
              </a>
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Sarvshixiit. All rights reserved.</p>
          <p>SARVSHIXIIT</p>
        </div>
      </div>
    </footer>
  );
}
