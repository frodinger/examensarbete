import React from 'react';
import { motion } from 'framer-motion';

const BackgroundSection = () => {
  return (
    <section id="background" className="section background-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Idé / Bakgrund / Motivation</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="background-content">
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Startpunkt</span>
                <h3>Upptäckten</h3>
                <p>
                  Idén till detta projekt uppstod när jag [beskrivning av hur idén uppkom]. 
                  Jag blev intresserad av [ämnet] efter att ha observerat [relevant observation eller erfarenhet].
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Utveckling</span>
                <h3>Motivationen</h3>
                <p>
                  Det som främst motiverade mig att utforska detta område var [beskrivning av din motivation]. 
                  Jag såg ett behov av [identifierat behov eller problem] och ville bidra till [önskad förändring eller lösning].
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Inspiration</span>
                <h3>Influenser</h3>
                <p>
                  Min inspiration kommer från [källor till inspiration, t.ex. tidigare forskning, personliga erfarenheter, etc.]. 
                  Dessa influenser har format min approach och gett mig viktiga insikter under projektets gång.
                </p>
                <div className="inspiration-tags">
                  <span className="tag">[Inspiration 1]</span>
                  <span className="tag">[Inspiration 2]</span>
                  <span className="tag">[Inspiration 3]</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">Nästa steg</span>
                <h3>Mot examensarbetet</h3>
                <p>
                  Baserat på dessa upptäckter och motivationer bestämde jag mig för att utforma ett examensarbete 
                  som skulle [beskrivning av koppling mellan bakgrund och examensarbete].
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection; 