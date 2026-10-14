"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Partners.module.css";

// Add more partners here later; the strip lays them out side by side.
const partners = [
  {
    name: "Mizoram University Incubation Centre",
    logo: "/partners/mzu-incubation-centre.png",
    alt: "Mizoram University Incubation Centre logo",
  },
  {
    name: "Startup Incubation and Innovation Centre, IIT Kanpur",
    logo: "/partners/iitk-siic.png",
    alt: "Startup Incubation and Innovation Centre, IIT Kanpur logo",
    large: true,
  },
];

const GAP = 32; // px of breathing room between the hero and the strip

export default function Partners() {
  const [offset, setOffset] = useState(GAP);

  // The hero is laid out inside a fixed one-screen box, and its text can run
  // past the bottom of that box on narrower windows. Instead of changing the
  // hero's layout, measure how far its content overflows and push this strip
  // down by exactly that much, at every screen size.
  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const measure = () => {
      const overflow = Math.max(0, hero.scrollHeight - hero.offsetHeight);
      setOffset(Math.ceil(overflow) + GAP);
    };

    measure();
    window.addEventListener("resize", measure);

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(hero);
      Array.from(hero.children).forEach((child) => ro.observe(child));
    }
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(measure);
    }
    const t = setTimeout(measure, 800);

    return () => {
      window.removeEventListener("resize", measure);
      if (ro) ro.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <motion.section
      className={styles.strip}
      id="partners-section"
      style={{ marginTop: offset }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.inner}>
        <span className={styles.label}>Incubation and Technology Partners</span>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.logos}>
          {partners.map((p) => (
            <div key={p.name} className={styles.logoPill} title={p.name}>
              <img
                src={p.logo}
                alt={p.alt}
                className={`${styles.logo} ${p.large ? styles.logoLg : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
