"use client";

import { motion } from "framer-motion";
import styles from "./Partners.module.css";

// Add more partners here later; the strip lays them out side by side.
const partners = [
  {
    name: "Mizoram University Incubation Centre",
    logo: "/partners/mzu-incubation-centre.png",
    alt: "Mizoram University Incubation Centre logo",
  },
];

export default function Partners() {
  return (
    <motion.section
      className={styles.strip}
      id="partners-section"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <span className={styles.label}>Incubated at</span>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.logos}>
          {partners.map((p) => (
            <div key={p.name} className={styles.logoPill} title={p.name}>
              <img src={p.logo} alt={p.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
