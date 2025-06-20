import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from '../style/navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              Sobre Mí
            </motion.button>
          </li>
          <li>
            <motion.button
              className={styles.navLink}
              onClick={() => scrollToSection('projects')}
              whileHover={{ y: -2 }}
            >
              Proyectos
            </motion.button>
          </li>
          <li>
            <motion.button
              className={styles.navLink}
              onClick={() => scrollToSection('contact')}
              whileHover={{ y: -2 }}
            >
              Contacto
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
            Sobre Mí
          </motion.button>
          <motion.button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('projects')}
            whileHover={{ x: 10 }}
          >
            Proyectos
          </motion.button>
          <motion.button
            className={styles.mobileNavLink}
            onClick={() => scrollToSection('contact')}
            whileHover={{ x: 10 }}
          >
            Contacto
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 