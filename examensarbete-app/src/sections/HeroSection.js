import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Examensarbete
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            En interaktiv visualisering av data från mitt forskningsprojekt
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="cta-container"
          >
            <a 
              href="#about" 
              className="btn primary-btn"
              aria-label="Läs mer om projektet"
            >
              Läs mer
            </a>
            <a 
              href="#data" 
              className="btn secondary-btn"
              aria-label="Utforska data"
            >
              Utforska Data
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 