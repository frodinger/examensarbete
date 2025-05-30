import React from 'react';
import { motion } from 'framer-motion';
import SearchComponent from '../components/SearchComponent';

const IntroductionSection = () => {
  return (
    <section id="introduction" className="section introduction-section">
      <div className="intro-hero hero-section">
        <div className="overlay" aria-hidden="true"></div>
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>Examensarbete</h1>
          <div className="underline-center" aria-hidden="true"></div>
          <p className="lead-text">
            En presentation av mitt forskningsprojekt
          </p>
          
          <motion.div 
            className="hero-search"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SearchComponent />
          </motion.div>
        </motion.div>
      </div>

      <div className="container">
        <div className="personal-intro">
          <motion.div 
            className="intro-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="profile-image-container">
              <img 
                src="https://source.unsplash.com/random/300x300/?portrait" 
                alt="Profilbild av forskaren" 
                className="profile-image"
                loading="lazy"
                width="300"
                height="300"
              />
            </div>
            <div className="intro-text">
              <h2>Hej!</h2>
              <p>
                Jag heter [Ditt Namn] och är student vid [Ditt Universitet/Din Skola]. 
                Detta är mitt examensarbete inom [Ditt Ämne/Program], där jag undersöker [Kort beskrivning av projektet].
              </p>
              <p>
                På denna webbplats presenterar jag mitt arbete, från den ursprungliga idén till slutresultatet, 
                och delar med mig av mina insikter och reflektioner från processen.
              </p>
              <ul className="social-links" aria-label="Sociala medier">
                <li>
                  <a 
                    href="https://linkedin.com" 
                    className="social-icon" 
                    aria-label="LinkedIn profil"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com" 
                    className="social-icon" 
                    aria-label="GitHub profil"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <span className="sr-only">GitHub</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:example@example.com" 
                    className="social-icon" 
                    aria-label="Email kontakt"
                  >
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <span className="sr-only">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection; 