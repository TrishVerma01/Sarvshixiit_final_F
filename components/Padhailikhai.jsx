"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Padhailikhai.module.css";

const bulletPoints = [
  {
    title: "Frontier Tech Integration",
    text: "Bringing AI, Robotics, and Drone technology into classrooms to bridge the digital divide."
  },
  {
    title: "Experiential Learning",
    text: "Hands-on projects and innovative learning kits for grades IV to XII."
  },
  {
    title: "Institutional Expertise",
    text: "Training led by experts from premier institutions like IIT Kanpur."
  },
  {
    title: "Intelligent Pedagogy",
    text: "Multimodal AI systems for enhanced teaching and real-time student engagement."
  },
  {
    title: "Future Readiness",
    text: "Strengthening technical skills and critical thinking for careers in an evolving global market."
  }
];

export default function Padhailikhai() {
  return (
    <section className={styles.section} id="padhai-likhai">
      {/* Cinematic background elements */}
      <div className={styles.ambientGlow} />
      
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Visual Side */}
          <motion.div 
            className={styles.visualSide}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className={styles.logoStage}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image 
                src="/padhai_likhai_logo.jpeg" 
                alt="PadhAI LikhAI Branding" 
                width={450} 
                height={450} 
                className={styles.mainLogo}
                priority
              />
              <div className={styles.logoReflection} />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className={styles.contentSide}>
            <motion.div 
              className={styles.header}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className={styles.eyebrow}>Our Latest Initiative</span>
              <h2 className={styles.title}>PadhAI LikhAI</h2>
              <p className={styles.intro}>
                A transformative step towards building inclusive, future-ready education ecosystems. 
                Designed to empower students and educators with cutting-edge technologies and 
                scalable solutions that bridge the gap between traditional learning and a rapidly evolving world.
              </p>
            </motion.div>

            <div className={styles.featureGrid}>
              {bulletPoints.map((point, idx) => (
                <motion.div 
                  key={idx} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  whileHover={{ y: -5, backgroundColor: "rgba(14, 165, 233, 0.08)" }}
                >
                  <div className={styles.featureIcon}>
                    <div className={styles.iconDot} />
                  </div>
                  <div className={styles.featureText}>
                    <h3 className={styles.featureTitle}>{point.title}</h3>
                    <p className={styles.featureDesc}>{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
