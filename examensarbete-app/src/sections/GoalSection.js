import React from 'react';
import { motion } from 'framer-motion';

const GoalSection = () => {
  return (
    <section id="goals" className="section goal-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Mål & Syfte</h2>
          <div className="underline"></div>
        </motion.div>
        
        <div className="goal-content">
          <motion.div 
            className="goal-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="lead-text">
              Huvudmålet med detta examensarbete är att [beskrivning av huvudmålet].
            </p>
          </motion.div>
          
          <div className="goals-circular-container">
            <div className="central-goal">
              <motion.div 
                className="central-goal-content"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="central-icon">🎯</div>
                <h3>Huvudmål</h3>
                <p>[Kort beskrivning av det övergripande målet]</p>
              </motion.div>
            </div>
            
            <div className="orbital-goals">
              <motion.div 
                className="orbital-goal goal-1"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="goal-icon">📊</div>
                <h4>Mål 1</h4>
                <p>[Specifikt mål 1]</p>
              </motion.div>
              
              <motion.div 
                className="orbital-goal goal-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="goal-icon">🔍</div>
                <h4>Mål 2</h4>
                <p>[Specifikt mål 2]</p>
              </motion.div>
              
              <motion.div 
                className="orbital-goal goal-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="goal-icon">📝</div>
                <h4>Mål 3</h4>
                <p>[Specifikt mål 3]</p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="purpose-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="purpose-content">
              <h3>Syfte</h3>
              <div className="purpose-divider"></div>
              <p>
                Syftet med projektet är att [beskrivning av projektets syfte]. 
                Genom att [beskrivning av tillvägagångssätt] hoppas jag kunna bidra till [förväntad påverkan eller resultat].
              </p>
              
              <p>
                På längre sikt är ambitionen att [beskrivning av långsiktiga ambitioner eller vision].
              </p>
              
              <div className="purpose-quote">
                <blockquote>
                  "[Citat relaterat till projektets syfte]"
                </blockquote>
                <cite>— [Citatkälla]</cite>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection; 