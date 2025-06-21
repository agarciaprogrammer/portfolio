import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import styles from '../style/navbar.module.css';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <motion.div
          className={styles.navbarLogo}
          onClick={() => scrollToSection('hero')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          AGUSTIN GARCIA
        </motion.div>

        <ul className={styles.navbarMenu}>
          <li>
            <motion.button
              className={styles.navLink}
              onClick={() => scrollToSection('about')}
              whileHover={{ y: -2 }}
            >
              {t('about')}
            </motion.button>
          </li>
          <li>
            <motion.button
              className={styles.navLink}
              onClick={() => scrollToSection('projects')}
              whileHover={{ y: -2 }}
            >
              {t('projects')}
            </motion.button>
          </li>
          <li>
            <motion.button
              className={styles.navLink}
              onClick={() => scrollToSection('contact')}
              whileHover={{ y: -2 }}
            >
              {t('contact')}
            </motion.button>
          </li>
          <li>
            <motion.button
              className={styles.languageBtn}
              onClick={toggleLanguage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={t('language') === 'EN' ? 'Cambiar a Inglés' : 'Change to Spanish'}
            >
              <Globe size={16} />
              <span>{t('language')}</span>
            </motion.button>
          </li>
        </ul>

        <motion.button
          className={styles.mobileMenuBtn}
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <motion.div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.mobileMenuContent}>
          <motion.button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('about')}
            whileHover={{ x: 10 }}
          >
            {t('about')}
          </motion.button>
          <motion.button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('projects')}
            whileHover={{ x: 10 }}
          >
            {t('projects')}
          </motion.button>
          <motion.button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('contact')}
            whileHover={{ x: 10 }}
          >
            {t('contact')}
          </motion.button>
          <motion.button
            className={styles.mobileLanguageBtn}
            onClick={toggleLanguage}
            whileHover={{ x: 10 }}
          >
            <Globe size={16} />
            <span>{t('language')}</span>
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 