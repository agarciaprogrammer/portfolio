import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { Mail, MessageCircle, ExternalLink, Send, CheckCircle, XCircle } from 'lucide-react';
import styles from '../style/contact.module.css';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const form = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          // Reset form after 3 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
      }, (error) => {
          console.log(error.text);
          setError(t('formErrorMessage'));
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      title: t('contactEmail'),
      value: 'agustingarcia.it@gmail.com',
      link: 'mailto:agustingarcia.it@gmail.com',
      color: 'primary'
    },
    {
      icon: <MessageCircle size={28} />,
      title: t('contactFiverr'),
      value: '@fullstackgarcia',
      link: 'https://www.fiverr.com/fullstackgarcia',
      color: 'secondary',
      external: true
    },
    {
      icon: <MessageCircle size={28} />,
      title: t('contactLinkedin'),
      value: 'linkedin.com/in/agustingarcia-it',
      link: 'https://www.linkedin.com/in/agustingarcia-it/',
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
            {t('contactTitle')}
          </motion.h2>
          
          <motion.p
            className={styles.contactDescription}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contactSubtitle')}
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
              {t('contactMethodsTitle')}
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
                {t('fiverrTitle')}
              </h4>
              <p className={styles.fiverrDescription}>
                {t('fiverrDescription')}
              </p>
              <motion.a
                href="https://www.fiverr.com/fullstackgarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button fiverr-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('fiverrButton')}
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
              {t('contactFormTitle')}
            </h3>
            
            <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <label className={styles.formLabel}>{t('formName')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder={t('formNamePlaceholder')}
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <label className={styles.formLabel}>{t('formEmail')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  placeholder={t('formEmailPlaceholder')}
                />
              </motion.div>

              <motion.div
                className={styles.formGroup}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className={styles.formLabel}>{t('formMessage')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={styles.formTextarea}
                  placeholder={t('formMessagePlaceholder')}
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
                    {t('formSending')}
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    {t('formSent')}
                  </>
                ) : error ? (
                  <>
                    <XCircle size={18} />
                    {t('formError')}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t('formSubmit')}
                  </>
                )}
              </motion.button>
              {error && <p className={styles.errorMessage}>{error}</p>}
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