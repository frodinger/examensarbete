import React from 'react';
import { motion } from 'framer-motion';

const MethodSection = () => {
  return (
    <section id="method" className="section method-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Metod</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="method-intro">
          <motion.p 
            className="method-lead"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I detta projekt har jag använt en kombination av [beskrivning av forskningsmetoder], 
            vilket har gjort det möjligt att [fördel med vald metod].
          </motion.p>
        </div>
        
        <div className="method-process">
          <div className="process-steps">
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Datainsamling</h3>
                <p>
                  I det första steget samlade jag in data genom [beskrivning av datainsamlingsmetoder]. 
                  Detta inkluderade:
                </p>
                <ul className="collection-methods">
                  <li>
                    <span className="method-icon">📝</span>
                    <span>[Datainsamlingsmetod 1] - [kort beskrivning]</span>
                  </li>
                  <li>
                    <span className="method-icon">🔍</span>
                    <span>[Datainsamlingsmetod 2] - [kort beskrivning]</span>
                  </li>
                  <li>
                    <span className="method-icon">📊</span>
                    <span>[Datainsamlingsmetod 3] - [kort beskrivning]</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <div className="step-connector"></div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Analys</h3>
                <p>
                  Den insamlade datan analyserades genom [beskrivning av analysmetoder], 
                  vilket gav insikter om [beskrivning av resulterande insikter].
                </p>
                <div className="analysis-diagram">
                  <div className="diagram-item">
                    <div className="diagram-icon">📥</div>
                    <div className="diagram-label">Rådata</div>
                  </div>
                  <div className="diagram-arrow">→</div>
                  <div className="diagram-item">
                    <div className="diagram-icon">🔍</div>
                    <div className="diagram-label">Bearbetning</div>
                  </div>
                  <div className="diagram-arrow">→</div>
                  <div className="diagram-item">
                    <div className="diagram-icon">📊</div>
                    <div className="diagram-label">Visualisering</div>
                  </div>
                  <div className="diagram-arrow">→</div>
                  <div className="diagram-item">
                    <div className="diagram-icon">💡</div>
                    <div className="diagram-label">Insikter</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="step-connector"></div>
            
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Utvecklingsprocess</h3>
                <p>
                  Baserat på analysresultaten följde jag en [typ av utvecklingsprocess, t.ex. iterativ, agil] process 
                  där jag [beskrivning av viktiga steg i processen].
                </p>
                <div className="dev-process-cycle">
                  <div className="cycle-step">
                    <div className="cycle-icon">🔄</div>
                    <div className="cycle-label">Planering</div>
                  </div>
                  <div className="cycle-arrow">→</div>
                  <div className="cycle-step">
                    <div className="cycle-icon">🛠️</div>
                    <div className="cycle-label">Utveckling</div>
                  </div>
                  <div className="cycle-arrow">→</div>
                  <div className="cycle-step">
                    <div className="cycle-icon">🔍</div>
                    <div className="cycle-label">Testning</div>
                  </div>
                  <div className="cycle-arrow">→</div>
                  <div className="cycle-step">
                    <div className="cycle-icon">📝</div>
                    <div className="cycle-label">Utvärdering</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="method-tools"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h3 className="tools-title">Verktyg & Tekniker</h3>
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">[Icon]</div>
              <h4>[Verktyg 1]</h4>
              <p>[Användningsområde]</p>
            </div>
            <div className="tool-item">
              <div className="tool-icon">[Icon]</div>
              <h4>[Verktyg 2]</h4>
              <p>[Användningsområde]</p>
            </div>
            <div className="tool-item">
              <div className="tool-icon">[Icon]</div>
              <h4>[Verktyg 3]</h4>
              <p>[Användningsområde]</p>
            </div>
            <div className="tool-item">
              <div className="tool-icon">[Icon]</div>
              <h4>[Verktyg 4]</h4>
              <p>[Användningsområde]</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection; 