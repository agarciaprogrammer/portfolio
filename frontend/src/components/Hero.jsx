import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Zap } from 'lucide-react';
import styles from '../style/hero.module.css';


const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Background Effects */}
      <div className={styles.heroBg}></div>
      <div className={styles.heroRadial}></div>
      
      {/* Animated Grid */}
      <div className={styles.heroGrid}>
        {Array.from({ length: 400 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.gridCell}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroText}
        >
          <motion.h1
            className={`${styles.heroTitle} cyber-text`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            AGUSTIN GARCIA
          </motion.h1>
          
          <motion.div
            className={styles.heroSubtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Code className={`${styles.heroIcon} ${styles.primary}`} size={28} />
            <motion.h2
              className={styles.heroRole}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SOFTWARE ENGINEER | FULL-STACK DEVELOPER
            </motion.h2>
            <Zap className={`${styles.heroIcon} ${styles.secondary}`} size={28} />
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="cyber-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
          >
            Conoce Mi Trabajo
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          onClick={scrollToAbout}
          className={styles.scrollBtn}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className={`${styles.floatingElement} ${styles.primary}`}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className={`${styles.floatingElement} ${styles.secondary}`}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        { }
      </motion.div>
      
      <motion.div
        className={`${styles.floatingElement} ${styles.tertiary}`}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      >
        [ ]
      </motion.div>
    </section>
  );
};

export default Hero; 