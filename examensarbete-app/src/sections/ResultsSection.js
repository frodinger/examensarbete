import React from 'react';
import { motion } from 'framer-motion';

const ResultsSection = () => {
  return (
    <section id="results" className="section results-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Resultat</h2>
          <div className="underline"></div>
        </motion.div>
        
        <motion.div 
          className="results-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="results-lead">
            Undersökningen resulterade i [sammanfattning av huvudresultat]. 
            Detta bekräftar/utmanar [relevant teori eller hypotes].
          </p>
        </motion.div>
        
        <div className="results-dashboard">
          <div className="dashboard-row">
            <motion.div 
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="stat-header">
                <h3>[Statistik 1]</h3>
                <div className="stat-icon">📈</div>
              </div>
              <div className="stat-value">[Värde]</div>
              <div className="stat-description">[Kort beskrivning av statistiken]</div>
            </motion.div>
            
            <motion.div 
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="stat-header">
                <h3>[Statistik 2]</h3>
                <div className="stat-icon">🔍</div>
              </div>
              <div className="stat-value">[Värde]</div>
              <div className="stat-description">[Kort beskrivning av statistiken]</div>
            </motion.div>
            
            <motion.div 
              className="stats-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="stat-header">
                <h3>[Statistik 3]</h3>
                <div className="stat-icon">💡</div>
              </div>
              <div className="stat-value">[Värde]</div>
              <div className="stat-description">[Kort beskrivning av statistiken]</div>
            </motion.div>
          </div>
          
          <motion.div 
            className="chart-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="chart-title">Viktiga upptäckter</h3>
            <div className="chart-placeholder">
              <div className="chart-info">
                <p>[Här skulle en visualisering av resultaten visas, t.ex. ett diagram eller en graf]</p>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color category-1"></span>
                    <span className="legend-label">[Kategori 1]</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color category-2"></span>
                    <span className="legend-label">[Kategori 2]</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color category-3"></span>
                    <span className="legend-label">[Kategori 3]</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="discoveries-container">
          <h3 className="discoveries-title">Detaljerade resultat</h3>
          
          <div className="discoveries-tabs">
            <button className="tab-button active">[Resultatområde 1]</button>
            <button className="tab-button">[Resultatområde 2]</button>
            <button className="tab-button">[Resultatområde 3]</button>
          </div>
          
          <motion.div 
            className="discovery-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="discovery-text">
              <h4>Upptäckt 1</h4>
              <p>[Beskrivning av upptäckt 1 och dess betydelse]</p>
              <ul className="discovery-points">
                <li>[Specifik detalj 1]</li>
                <li>[Specifik detalj 2]</li>
                <li>[Specifik detalj 3]</li>
              </ul>
            </div>
            <div className="discovery-image">
              <img 
                src="https://source.unsplash.com/random/500x300/?data,chart" 
                alt="Visualisering av upptäckt 1" 
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="deliverables-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="deliverables-title">Leverabler</h3>
          <p>Projektet har resulterat i följande leverabler:</p>
          
          <div className="deliverables-grid">
            <div className="deliverable-item">
              <div className="deliverable-icon">📄</div>
              <div className="deliverable-content">
                <h4>[Leverabel 1]</h4>
                <p>[Kort beskrivning]</p>
              </div>
              <a href="/dokument/leverabel1.pdf" className="deliverable-link">Visa</a>
            </div>
            
            <div className="deliverable-item">
              <div className="deliverable-icon">💻</div>
              <div className="deliverable-content">
                <h4>[Leverabel 2]</h4>
                <p>[Kort beskrivning]</p>
              </div>
              <a href="/dokument/leverabel2.pdf" className="deliverable-link">Visa</a>
            </div>
            
            <div className="deliverable-item">
              <div className="deliverable-icon">📱</div>
              <div className="deliverable-content">
                <h4>[Leverabel 3]</h4>
                <p>[Kort beskrivning]</p>
              </div>
              <a href="/dokument/leverabel3.pdf" className="deliverable-link">Visa</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection; 