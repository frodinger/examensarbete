import React from 'react';
import { motion } from 'framer-motion';

const TargetGroupSection = () => {
  return (
    <section id="target-group" className="section target-group-section">
      <div className="target-group-bg">
        <div className="container">
          <motion.div 
            className="section-title light-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Målgrupp</h2>
            <div className="underline"></div>
          </motion.div>
          
          <motion.div 
            className="audience-summary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="audience-intro">
              Detta projekt är utformat för att tillgodose behoven hos specifika användargrupper:
            </p>
          </motion.div>
          
          <div className="personas-container">
            <motion.div 
              className="persona-card primary"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="persona-header">
                <div className="persona-avatar">
                  <img 
                    src="https://source.unsplash.com/random/150x150/?portrait,person" 
                    alt="Primär användarpersona" 
                    loading="lazy" 
                  />
                </div>
                <div className="persona-intro">
                  <h3>Primär målgrupp</h3>
                  <h4>[Persona namn]</h4>
                  <p className="persona-tagline">[Kort beskrivning av persona]</p>
                </div>
              </div>
              
              <div className="persona-details">
                <div className="persona-stats">
                  <div className="stat">
                    <span className="stat-label">Ålder:</span>
                    <span className="stat-value">[Åldersgrupp]</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Yrke:</span>
                    <span className="stat-value">[Typiskt yrke]</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Tech-vana:</span>
                    <span className="stat-value">[Nivå av teknisk vana]</span>
                  </div>
                </div>
                
                <div className="persona-description">
                  <p>
                    Den primära målgruppen för detta projekt är [beskrivning av primär målgrupp]. 
                    Dessa personer kännetecknas av [relevanta egenskaper] och har ett intresse för [relevanta intressen].
                  </p>
                </div>
                
                <div className="persona-quote">
                  <blockquote>"[Citat som representerar målgruppens behov eller utmaningar]"</blockquote>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="persona-card secondary"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="persona-header">
                <div className="persona-avatar">
                  <img 
                    src="https://source.unsplash.com/random/150x150/?portrait,professional" 
                    alt="Sekundär användarpersona" 
                    loading="lazy" 
                  />
                </div>
                <div className="persona-intro">
                  <h3>Sekundär målgrupp</h3>
                  <h4>[Persona namn]</h4>
                  <p className="persona-tagline">[Kort beskrivning av persona]</p>
                </div>
              </div>
              
              <div className="persona-details">
                <div className="persona-stats">
                  <div className="stat">
                    <span className="stat-label">Ålder:</span>
                    <span className="stat-value">[Åldersgrupp]</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Yrke:</span>
                    <span className="stat-value">[Typiskt yrke]</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Behov:</span>
                    <span className="stat-value">[Huvudsakligt behov]</span>
                  </div>
                </div>
                
                <div className="persona-description">
                  <p>
                    Utöver den primära målgruppen riktar sig projektet även till [beskrivning av sekundär målgrupp], 
                    som kan dra nytta av [fördelar för sekundär målgrupp].
                  </p>
                </div>
                
                <div className="persona-quote">
                  <blockquote>"[Citat som representerar den sekundära målgruppens perspektiv]"</blockquote>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="needs-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3>Identifierade behov</h3>
            <p>Genom intervjuer och undersökningar har jag identifierat följande centrala behov hos målgruppen:</p>
            
            <div className="needs-grid">
              <div className="need-item">
                <div className="need-icon">🔍</div>
                <div className="need-content">
                  <h4>Behov 1</h4>
                  <p>[Beskrivning av behov 1]</p>
                </div>
              </div>
              
              <div className="need-item">
                <div className="need-icon">📊</div>
                <div className="need-content">
                  <h4>Behov 2</h4>
                  <p>[Beskrivning av behov 2]</p>
                </div>
              </div>
              
              <div className="need-item">
                <div className="need-icon">🔄</div>
                <div className="need-content">
                  <h4>Behov 3</h4>
                  <p>[Beskrivning av behov 3]</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetGroupSection; 