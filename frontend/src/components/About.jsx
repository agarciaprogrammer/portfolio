import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, Zap, Shield, Code2, Code2Icon } from 'lucide-react';
import styles from '../style/about.module.css';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { t } = useTranslation();

  const skills = [
    {
      name: t('skillNodejs'),
      level: 90,
      color: 'primary',
    },
    {
      name: t('skillJavascript'),
      level: 90,
      color: 'secondary',
    },
    {
      name: t('skillReact'),
      level: 85,
      color: 'primary',
    },
    {
      name: t('skillPython'),
      level: 85,
      color: 'secondary',
    },
    {
      name: t('skillGit'),
      level: 80,
      color: 'primary',
    },
    {
      name: t('skillDatabase'),
      level: 80,
      color: 'secondary',
    },
    {
      name: t('skillDevOps'),
      level: 70,
      color: 'primary',
    },
  ];
  

  const features = [
    {
      icon: <Code size={24} />,
      title: t('featureFullStack'),
      description: t('featureFullStackDesc'),
      color: 'primary'
    },
    {
      icon: <Database size={24} />,
      title: t('featureArchitecture'),
      description: t('featureArchitectureDesc'),
      color: 'primary'
    },
    {
      icon: <Code2Icon size={24} />,
      title: t('featureCleanCode'),
      description: t('featureCleanCodeDesc'),
      color: 'primary'
    },
    {
      icon: <Globe size={24} />,
      title: t('featureDevOps'),
      description: t('featureDevOpsDesc'),
      color: 'primary'
    },
    {
      icon: <Zap size={24} />,
      title: t('featurePerformance'),
      description: t('featurePerformanceDesc'),
      color: 'primary'
    },
    {
      icon: <Shield size={24} />,
      title: t('featureSecurity'),
      description: t('featureSecurityDesc'),
      color: 'primary'
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* About Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={styles.aboutText}
          >
            <motion.h2
              className={`${styles.aboutTitle} cyber-text`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('aboutTitle')}
            </motion.h2>
            
            <motion.p
              className={styles.aboutDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('aboutDescription')}
              <br/><br/>
              {t('aboutDescription2')}
              <br/><br/>
              {t('aboutDescription3')}
            </motion.p>

            <motion.p
              className={styles.aboutDescription}
              style={{ fontWeight: 800}}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('aboutCallToAction')}
            </motion.p>

            {/* Skills Section */}
            <motion.div
              className={styles.skillsSection}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className={styles.skillsTitle}>
                {t('skillsTitle')}
              </h3>
              
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillBar}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  >
                    <div className={styles.skillBarHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={`${styles.skillLevel} ${styles[skill.color]}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={styles.skillBarBg}>
                      <motion.div
                        className={`${styles.skillBarFill} ${styles[skill.color]}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      />
                    </div>
                    {/* NUEVO BLOQUE: descripción de la experiencia */}
                    <p className={styles.skillDesc}>{skill.experience}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className={styles.featuresGrid}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className={`${styles.featureIcon} ${styles[feature.color]}`}>
                  {feature.icon}
                </div>
                <h4 className={styles.featureTitle}>
                  {feature.title}
                </h4>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="bg-element primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className="bg-element secondary"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        [ ]
      </motion.div>
    </section>
  );
};

export default About; 