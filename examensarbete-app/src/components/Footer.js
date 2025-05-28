import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Examensarbete</h3>
            <p>En interaktiv visualisering av forskningsdata</p>
          </div>
          
          <div className="footer-links">
            <h4>Snabblänkar</h4>
            <ul>
              <li><a href="#hero" aria-label="Gå till startsidan">Hem</a></li>
              <li><a href="#about" aria-label="Gå till om sektionen">Om projektet</a></li>
              <li><a href="#data" aria-label="Gå till data sektionen">Datavisualisering</a></li>
              <li><a href="#contact" aria-label="Gå till kontakt sektionen">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Frej Listén Hedlin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 