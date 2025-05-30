import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="footer-heading">Examensarbete</h2>
            <p>En interaktiv visualisering av forskningsdata</p>
          </div>
          
          <nav className="footer-navigation" aria-label="Sidfot navigation">
            <h3 className="footer-heading">Snabblänkar</h3>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#introduction" 
                  aria-label="Gå till startsidan"
                  className="footer-link"
                >
                  Hem
                </a>
              </li>
              <li>
                <a 
                  href="#background" 
                  aria-label="Gå till bakgrundssektionen"
                  className="footer-link"
                >
                  Bakgrund
                </a>
              </li>
              <li>
                <a 
                  href="#goals" 
                  aria-label="Gå till målsektionen"
                  className="footer-link"
                >
                  Mål
                </a>
              </li>
              <li>
                <a 
                  href="#target-group" 
                  aria-label="Gå till målgruppssektionen"
                  className="footer-link"
                >
                  Målgrupp
                </a>
              </li>
            </ul>
          </nav>
          
          <nav className="footer-navigation" aria-label="Ytterligare sidfot navigation">
            <h3 className="footer-heading">Fler länkar</h3>
            <ul className="footer-links-list">
              <li>
                <a 
                  href="#method" 
                  aria-label="Gå till metodsektionen"
                  className="footer-link"
                >
                  Metod
                </a>
              </li>
              <li>
                <a 
                  href="#results" 
                  aria-label="Gå till resultatsektionen"
                  className="footer-link"
                >
                  Resultat
                </a>
              </li>
              <li>
                <a 
                  href="#reflection" 
                  aria-label="Gå till reflektionssektionen"
                  className="footer-link"
                >
                  Reflektion
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Frej Listén Hedlin <span className="sr-only">Copyright</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 