import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const indicatorRef = useRef(null);
  const navLinksRef = useRef(null);

  // Uppdatera positionen för understrykningen
  const updateIndicatorPosition = () => {
    const activeButton = navLinksRef.current?.querySelector(`button.active`);
    const indicator = indicatorRef.current;

    if (activeButton && indicator) {
      const buttonRect = activeButton.getBoundingClientRect();
      const navRect = navLinksRef.current.getBoundingClientRect();
      
      indicator.style.width = `${buttonRect.width}px`;
      indicator.style.left = `${buttonRect.left - navRect.left}px`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Kontrollera scroll för transparent/solid navbar
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Kontrollera vilken sektion som är synlig
      const sections = ['hero', 'about', 'data', 'contact'];
      const scrollPosition = window.scrollY + 100; // Lägg till offset för att markera rätt sektion

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateIndicatorPosition);
    
    // Initial position
    updateIndicatorPosition();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateIndicatorPosition);
    };
  }, []);

  // Uppdatera understrykning när aktiv sektion ändras
  useEffect(() => {
    updateIndicatorPosition();
  }, [activeSection]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <a href="#hero" aria-label="Till startsidan">
            Examensarbete
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <motion.div 
          className={`nav-links ${isOpen ? 'active' : ''}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul ref={navLinksRef}>
            <li>
              <button
                onClick={() => scrollToSection('hero')}
                aria-label="Navigera till start sektionen"
                className={activeSection === 'hero' ? 'active' : ''}
              >
                Hem
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                aria-label="Navigera till om sektionen"
                className={activeSection === 'about' ? 'active' : ''}
              >
                Om
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('data')}
                aria-label="Navigera till data sektionen"
                className={activeSection === 'data' ? 'active' : ''}
              >
                Data
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                aria-label="Navigera till kontakt sektionen"
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Kontakt
              </button>
            </li>
            <div ref={indicatorRef} className="nav-indicator"></div>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar; 