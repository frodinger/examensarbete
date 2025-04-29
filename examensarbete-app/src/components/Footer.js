import React from 'react';
import '../styles/footer.css';

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
          
          <div className="footer-contact">
            <h4>Kontakt</h4>
            <p>exempel@university.se</p>
            <p>+46 70 123 45 67</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Examensarbete. Alla rättigheter förbehållna.</p>
          <p>
            <a href="#" aria-label="Läs vår integritetspolicy">Integritetspolicy</a> | 
            <a href="#" aria-label="Läs våra användarvillkor">Användarvillkor</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 