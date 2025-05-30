import React from 'react';
import { motion } from 'framer-motion';

const ReflectionSection = () => {
  return (
    <section id="reflection" className="section reflection-section">
      <div className="reflection-bg">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Reflektion</h2>
            <div className="underline"></div>
          </motion.div>
          
          <div className="reflection-content">
            <div className="essay-layout">
              <motion.div 
                className="essay-intro"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="essay-image">
                  <img 
                    src="https://source.unsplash.com/random/400x600/?thinking,reflection" 
                    alt="Reflektion" 
                    loading="lazy"
                  />
                </div>
                
                <div className="essay-beginning">
                  <p className="first-letter-large">
                    När jag reflekterar över projektets resultat ser jag att [reflektion kring resultat]. 
                    I jämförelse med mina ursprungliga mål har jag [utvärdering av måluppfyllelse].
                  </p>
                  
                  <p>
                    Under projektets gång stötte jag på flera utmaningar, bland annat [beskrivning av utmaningar]. 
                    Detta lärde mig [viktiga lärdomar].
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="essay-body"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="essay-section">
                  <h3>De viktigaste insikterna</h3>
                  <div className="pull-quote-container">
                    <div className="pull-quote">
                      "[Ett betydelsefullt citat eller insikt från ditt arbete]"
                    </div>
                  </div>
                  
                  <div className="insights-columns">
                    <div className="insight-column">
                      <div className="insight-item">
                        <div className="insight-icon">🧠</div>
                        <h4>Insikt 1</h4>
                        <p>[Beskrivning av insikt 1]</p>
                      </div>
                    </div>
                    
                    <div className="insight-column">
                      <div className="insight-item">
                        <div className="insight-icon">🔄</div>
                        <h4>Insikt 2</h4>
                        <p>[Beskrivning av insikt 2]</p>
                      </div>
                    </div>
                    
                    <div className="insight-column">
                      <div className="insight-item">
                        <div className="insight-icon">⚡</div>
                        <h4>Insikt 3</h4>
                        <p>[Beskrivning av insikt 3]</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="essay-section">
                  <h3>Projektets begränsningar</h3>
                  <p>
                    Projektet har vissa begränsningar som är viktiga att lyfta fram. För det första, [beskrivning av begränsning 1]. 
                    Dessutom [beskrivning av begränsning 2]. Dessa påverkar hur resultaten kan tolkas och användas.
                  </p>
                  
                  <div className="limitations-comparison">
                    <div className="limitation-column">
                      <h4>Vad detta arbete täcker</h4>
                      <ul className="check-list">
                        <li>[Aspekt 1]</li>
                        <li>[Aspekt 2]</li>
                        <li>[Aspekt 3]</li>
                      </ul>
                    </div>
                    
                    <div className="limitation-column">
                      <h4>Vad detta arbete inte täcker</h4>
                      <ul className="cross-list">
                        <li>[Begränsning 1]</li>
                        <li>[Begränsning 2]</li>
                        <li>[Begränsning 3]</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="essay-section">
                  <h3>Framtida utveckling</h3>
                  <p>
                    Om jag skulle fortsätta utveckla detta projekt skulle jag [beskrivning av potentiell framtida utveckling]. 
                    Det finns möjligheter att [beskrivning av möjligheter].
                  </p>
                  
                  <div className="future-roadmap">
                    <div className="roadmap-item">
                      <div className="roadmap-marker">Kort sikt</div>
                      <div className="roadmap-content">
                        <p>[Nästa steg i projektet]</p>
                      </div>
                    </div>
                    
                    <div className="roadmap-item">
                      <div className="roadmap-marker">Medellång sikt</div>
                      <div className="roadmap-content">
                        <p>[Utveckling på medellång sikt]</p>
                      </div>
                    </div>
                    
                    <div className="roadmap-item">
                      <div className="roadmap-marker">Lång sikt</div>
                      <div className="roadmap-content">
                        <p>[Vision för långsiktig utveckling]</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="essay-conclusion"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3>Slutsatser</h3>
                <p>
                  Sammanfattningsvis har detta examensarbete [övergripande värdering av projektet]. 
                  Det har bidragit till [beskrivning av projektets bidrag] och visat på vikten av [viktiga insikter].
                </p>
                
                <p>
                  Jag ser detta arbete som [personlig reflektion om arbetets betydelse för dig]. 
                  Den kunskap och erfarenhet jag har fått genom detta projekt kommer jag att ta med mig in i [framtida planer eller nästa steg].
                </p>
                
                <div className="final-quote">
                  <blockquote>
                    "[Ett avslutande citat som sammanfattar dina tankar]"
                  </blockquote>
                  <cite>— [Ditt namn]</cite>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionSection; 