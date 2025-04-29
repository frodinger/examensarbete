import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Om Projektet</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Bakgrund & Syfte</h3>
            <p>
              Detta examensarbete syftar till att undersöka [ditt forskningsområde] 
              och hur det påverkar [relevant område]. Genom att visualisera data på ett 
              interaktivt sätt kan vi göra forskningsresultat mer tillgängliga och begripliga.
            </p>
            <p>
              Projektet kombinerar datainsamling, analys och visualisering för att skapa 
              en helhetsbild av [forskningsområde] som kan användas av både forskare och 
              allmänheten.
            </p>
            
            <h3>Metod</h3>
            <p>
              Vi har använt en kombination av kvantitativa och kvalitativa metoder 
              för att samla in data. Genom [beskrivning av datainsamlingsmetod] har vi 
              kunnat få en djupare förståelse för [forskningsområde].
            </p>
            
            <div className="features">
              <div className="feature">
                <div className="feature-icon">📊</div>
                <h4>Dataanalys</h4>
                <p>Avancerad analys av [typ av data] för att identifiera mönster och trender.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">🔍</div>
                <h4>Forskningsmetodik</h4>
                <p>Användning av [forskningsmetoder] för att säkerställa tillförlitliga resultat.</p>
              </div>
              
              <div className="feature">
                <div className="feature-icon">📱</div>
                <h4>Tillgänglighet</h4>
                <p>Fokus på att göra forskningsresultat tillgängliga genom responsiv design.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="https://source.unsplash.com/random/600x800/?research,data" 
              alt="Visualisering av forskningsprojekt" 
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 