import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import styles from '../style/projects.module.css';
import inventorytechImg from '../assets/inventorytech.png';
import budgetImg from '../assets/budget.png';
import expoImg from '../assets/expo.png';
import llamaImg from '../assets/llama.png';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'api', name: 'APIs' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Budgety',
      description: 'Una aplicación web para la gestión de presupuestos y gastos personales. Los usuarios pueden controlar sus ingresos, gastos fijos y diarios, y calcular presupuestos mensuales y diarios, lo que les ayuda a mantener la disciplina y el control financiero.',
      image: budgetImg,
      category: 'web',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express'],
      liveUrl: 'https://budget-tracker-fs.vercel.app/',
      githubUrl: 'https://github.com/agarciaprogrammer/budget-tracker-fs',
      featured: false
    },
    {
      id: 2,
      title: 'Expo-App',
      description: 'Aplicación web Full Stack pensada para ayudar a organizar y administrar eventos. El sistema permite llevar registro de gastos, ingresos, ventas de entradas (preventa y taquilla), control de asistencia y distribución de ganancias.',
      image: expoImg,
      category: 'web',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Express'],
      liveUrl: 'https://expo-arte-phi.vercel.app/',
      githubUrl: 'https://github.com/agarciaprogrammer/ExpoArte',
      featured: false
    },
    {
      id: 3,
      title: 'InventoryTech',
      description: 'Sistema inteligente de gestión de inventario, diseñado para supermercados de barrio. Automatiza el control de stock, prevé pérdidas y ayuda a tomar decisiones basadas en datos reales.',
      image: inventorytechImg,
      category: 'web',
      technologies: ['React', 'Node.js', 'SQL Server', 'Python'],
      liveUrl: '',
      githubUrl: 'https://github.com/agarciaprogrammer/InventoryTech',
      featured: false
    },
    
    
    {
      id: 4,
      title: 'Llama-Chat',
      description: 'Una aplicación web que permite a los usuarios chatear con un modelo de IA de llama. El modelo de IA es entrenado con un conjunto de datos de conversaciones y puede responder preguntas y tener conversaciones con los usuarios.',
      image: llamaImg,
      category: 'web',
      technologies: ['OpenAI', 'Ollama', 'React', 'TypeScript'],
      liveUrl: '',
      githubUrl: 'https://github.com/agarciaprogrammer/ollama-chat',
      featured: false
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.projectsHeader}
        >
          <motion.h2
            className={`${styles.projectsTitle} cyber-text`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PROYECTOS
          </motion.h2>
          
          <motion.p
            className={styles.projectsDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Una colección de proyectos que demuestran mi pasión por el desarrollo de software.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className={styles.projectImage}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImg}
                />
                <div className={styles.projectOverlay} />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    Destacado
                  </div>
                )}

                {/* Action Buttons */}
                <div className={styles.projectActions}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.live}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.github}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>
                
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={styles.projectTechnologies}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className={styles.projectLinks}>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.live}`}
                    whileHover={{ x: 5 }}
                  >
                    <Eye size={14} />
                    Ver Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectLink} ${styles.github}`}
                    whileHover={{ x: 5 }}
                  >
                    <Code size={14} />
                    Ver Código
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className={styles.projectsCta}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="#contact"
            className="cyber-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ¿Tenés un proyecto en mente?
          </motion.a>
        </motion.div>
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

export default Projects; 