import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, ExternalLink, Send, CheckCircle } from 'lucide-react';
import styles from '../style/contact.module.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: 'Email',
      value: 'garcia@example.com',
      link: 'mailto:garcia@example.com',
      color: 'primary'
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'Fiverr',
      value: '@garcia_dev',
      link: 'https://www.fiverr.com/garcia_dev',
      color: 'secondary',
      external: true
    },
    {
      icon: <MessageCircle size={28} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/garcia',
      link: 'https://linkedin.com/in/garcia',
      color: 'tertiary',
      external: true
    }
  ];

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.contactHeader}
        >
          <motion.h2
            className={`${styles.contactTitle} cyber-text`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            CONTACTO
          </motion.h2>
          
          <motion.p
            className={styles.contactDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para 
            colaboraciones, consultorías y desarrollo freelance
          </motion.p>
        </motion.div>

        <div className={styles.contactContent}>
          {/* Contact Methods */}
          <motion.div
            className={styles.contactMethods}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className={styles.methodsTitle}>
              Conectemos
            </h3>
            
            <div className={styles.methodsList}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.external ? "_blank" : "_self"}
                  rel={method.external ? "noopener noreferrer" : ""}
                  className={`${styles.methodItem} ${styles[method.color]}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                >
                  <div className={`${styles.methodIcon} ${styles[method.color]}`}>
                    {method.icon}
                  </div>
                  <div className={styles.methodInfo}>
                    <h4 className={styles.methodTitle}>
                      {method.title}
                    </h4>
                    <p className={styles.methodValue}>
                      {method.value}
                    </p>
                  </div>
                  {method.external && (
                    <ExternalLink 
                      size={18} 
                      className={`${styles.methodExternal} ${styles[method.color]}`} 
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Fiverr CTA */}
            <motion.div
              className={styles.fiverrCta}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h4 className={styles.fiverrTitle}>
                ¿Necesitas un desarrollador freelance?
              </h4>
              <p className={styles.fiverrDescription}>
                Encuéntrame en Fiverr donde ofrezco servicios de desarrollo web, 
                aplicaciones móviles y APIs personalizadas.
              </p>
              <motion.a
                href="https://www.fiverr.com/garcia_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button fiverr-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver mi perfil en Fiverr
                <ExternalLink size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.contactFormContainer}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className={styles.formTitle}>
              Envíame un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <label className={styles.formLabel}>Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="Tu nombre"
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder="tu@email.com"
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className={styles.formLabel}>Mensaje</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={styles.formTextarea}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.loadingSpinner}></div>
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <motion.div
        className="bg-element primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className="bg-element secondary"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        { }
      </motion.div>
    </section>
  );
};

export default Contact; 