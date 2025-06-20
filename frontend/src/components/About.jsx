import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, Zap, Shield } from 'lucide-react';
import styles from '../style/about.module.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React/Next.js', level: 90, color: 'primary' },
    { name: 'Node.js/Express', level: 85, color: 'secondary' },
    { name: 'TypeScript', level: 80, color: 'primary' },
    { name: 'PostgreSQL/MongoDB', level: 75, color: 'tertiary' },
    { name: 'Docker/AWS', level: 70, color: 'secondary' },
  ];

  const features = [
    {
      icon: <Code size={24} />,
      title: 'Desarrollo Full-Stack',
      description: 'Experiencia completa en frontend y backend con tecnologías modernas.',
      color: 'primary'
    },
    {
      icon: <Database size={24} />,
      title: 'Arquitectura de Datos',
      description: 'Diseño de bases de datos escalables y APIs RESTful optimizadas.',
      color: 'primary'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Aplicaciones Móviles',
      description: 'Desarrollo de apps nativas y híbridas con React Native.',
      color: 'primary'
    },
    {
      icon: <Globe size={24} />,
      title: 'Despliegue & DevOps',
      description: 'Configuración de CI/CD y despliegue en la nube.',
      color: 'primary'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Optimización de rendimiento y experiencia de usuario.',
      color: 'primary'
    },
    {
      icon: <Shield size={24} />,
      title: 'Seguridad',
      description: 'Implementación de mejores prácticas de seguridad web.',
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
              Sobre Mí
            </motion.h2>
            
            <motion.p
              className={styles.aboutDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soy un desarrollador full-stack apasionado por crear soluciones digitales 
              innovadoras. Con más de 5 años de experiencia, me especializo en el desarrollo 
              de aplicaciones web modernas, APIs escalables y experiencias de usuario excepcionales.
            </motion.p>
            
            <motion.p
              className={styles.aboutDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
              utilizando las mejores prácticas y tecnologías emergentes para entregar 
              productos de alta calidad.
            </motion.p>

            {/* Skills Section */}
            <motion.div
              className={styles.skillsSection}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className={styles.skillsTitle}>
                Habilidades Técnicas
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