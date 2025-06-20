import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye, Code } from 'lucide-react';
import styles from '../style/projects.module.css';

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
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con React, Node.js y MongoDB. Incluye sistema de pagos, gestión de inventario y panel de administración.',
      image: 'https://via.placeholder.com/400x250/00d4ff/0a0a0a?text=E-Commerce',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con interfaz intuitiva y funcionalidades avanzadas como colaboración en tiempo real.',
      image: 'https://via.placeholder.com/400x250/ff6b9d/0a0a0a?text=Task+App',
      category: 'web',
      technologies: ['React', 'Firebase', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 3,
      title: 'Weather API',
      description: 'API RESTful para pronósticos del tiempo con integración de múltiples servicios meteorológicos y caché inteligente.',
      image: 'https://via.placeholder.com/400x250/ffd93d/0a0a0a?text=Weather+API',
      category: 'api',
      technologies: ['Node.js', 'Express', 'Redis', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
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
            Una colección de proyectos que demuestran mi pasión por la innovación 
            y la excelencia en el desarrollo de software
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className={styles.categoryFilter}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
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
            ¿Tienes un proyecto en mente?
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