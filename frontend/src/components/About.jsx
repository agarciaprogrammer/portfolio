import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Smartphone, Globe, Zap, Shield, Code2, Code2Icon } from 'lucide-react';
import styles from '../style/about.module.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      name: 'Node.js / Express – APIs REST y autenticación con JWT',
      level: 90,
      color: 'primary',
    },
    {
      name: 'JavaScript / TypeScript – Tipado fuerte en frontend y backend',
      level: 90,
      color: 'secondary',
    },
    {
      name: 'React.js – Hooks y componentes reutilizables',
      level: 85,
      color: 'primary',
    },
    {
      name: 'Python / ML – Scripts de automatización y prototipos de modelos ML',
      level: 85,
      color: 'secondary',
    },
    {
      name: 'Git – Flujos de trabajo con GitHub y control de versiones diario',
      level: 80,
      color: 'primary',
    },
    {
      name: 'PostgreSQL / MongoDB / ORM – Modelado y consultas eficientes',
      level: 80,
      color: 'secondary',
    },
    {
      name: 'Docker / AWS – Deploy básico con contenedores y cloud',
      level: 70,
      color: 'primary',
    },
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
      icon: <Code2Icon size={24} />,
      title: 'Código Limpio',
      description: 'Desarrollo de código limpio y mantenible.',
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
              Soy Ingeniero en Sistemas y Desarrollador Full Stack de Argentina, especializado en crear aplicaciones web escalables y de alto rendimiento. Mi stack principal incluye <strong>Node.js, Express, React.js y PostgreSQL</strong>.
              <br/><br/>
              Trabajo con herramientas como <strong>Docker, Git y AWS</strong> para construir sistemas modulares y mantenibles.
              <br/><br/>
              Apasionado por el aprendizaje continuo y el código limpio, busco sumarme a proyectos desafiantes donde pueda aportar valor técnico.
            </motion.p>

            <motion.p
              className={styles.aboutDescription}
              style={{ fontWeight: 800}}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Si estás buscando un desarrollador comprometido con la calidad, ¡conversemos!
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