import React, { useState, useEffect, useRef, useCallback } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const navLinksRef = useRef(null);
  const indicatorRef = useRef(null);
  const navLinksId = "nav-links";

  // Handle navigation click
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);
    
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Handle keyboard navigation for Space key
  const handleKeyDown = (e, sectionId) => {
    // Check if Space key or Enter key is pressed
    if (e.keyCode === 32 || e.key === ' ' || e.key === 'Enter') {
      e.preventDefault(); // Prevent default scrolling behavior of space
      handleNavClick(e, sectionId);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Update indicator position
  const updateIndicator = useCallback(() => {
    if (indicatorRef.current && navLinksRef.current) {
      const activeLink = navLinksRef.current.querySelector(`a[data-section="${activeSection}"]`);
      
      if (activeLink) {
        const activeLinkRect = activeLink.getBoundingClientRect();
        const navLinksRect = navLinksRef.current.getBoundingClientRect();
        
        indicatorRef.current.style.width = `${activeLinkRect.width}px`;
        indicatorRef.current.style.left = `${activeLinkRect.left - navLinksRect.left}px`;
      }
    }
  }, [activeSection]);

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = ['introduction', 'background', 'goals', 'target-group', 'method', 'results', 'reflection'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offset = 100;
          
          if (rect.top <= offset) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Update indicator on activeSection change and window resize
  useEffect(() => {
    updateIndicator();
    
    const handleResize = () => {
      updateIndicator();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeSection, updateIndicator]);

  // Handle search link click
  const handleSearchClick = (e) => {
    e.preventDefault();
    
    // Scrolla till hero-sektionen i introduktionen
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      const yOffset = -80;
      const y = heroSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Fokusera på sökfältet
      const searchInput = document.querySelector('.hero-search input');
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 600);
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Huvudmeny">
      <div className="container navbar-container">
        <div className="logo">
          <a href="#introduction" 
            onClick={(e) => handleNavClick(e, 'introduction')} 
            onKeyDown={(e) => handleKeyDown(e, 'introduction')}
            aria-label="Examensarbete - Startsida">
            Examensarbete
          </a>
        </div>
        
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-expanded={isOpen} 
          aria-controls={navLinksId}
          aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`} id={navLinksId}>
          <ul ref={navLinksRef}>
            <li>
              <a 
                href="#introduction" 
                className={activeSection === 'introduction' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'introduction')}
                onKeyDown={(e) => handleKeyDown(e, 'introduction')}
                data-section="introduction"
                aria-label="Introduktion"
                aria-current={activeSection === 'introduction' ? 'page' : undefined}
              >
                Introduktion
              </a>
            </li>
            <li>
              <a 
                href="#background" 
                className={activeSection === 'background' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'background')}
                onKeyDown={(e) => handleKeyDown(e, 'background')}
                data-section="background"
                aria-label="Bakgrund"
                aria-current={activeSection === 'background' ? 'page' : undefined}
              >
                Bakgrund
              </a>
            </li>
            <li>
              <a 
                href="#goals" 
                className={activeSection === 'goals' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'goals')}
                onKeyDown={(e) => handleKeyDown(e, 'goals')}
                data-section="goals"
                aria-label="Mål"
                aria-current={activeSection === 'goals' ? 'page' : undefined}
              >
                Mål
              </a>
            </li>
            <li>
              <a 
                href="#target-group" 
                className={activeSection === 'target-group' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'target-group')}
                onKeyDown={(e) => handleKeyDown(e, 'target-group')}
                data-section="target-group"
                aria-label="Målgrupp"
                aria-current={activeSection === 'target-group' ? 'page' : undefined}
              >
                Målgrupp
              </a>
            </li>
            <li>
              <a 
                href="#method" 
                className={activeSection === 'method' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'method')}
                onKeyDown={(e) => handleKeyDown(e, 'method')}
                data-section="method"
                aria-label="Metod"
                aria-current={activeSection === 'method' ? 'page' : undefined}
              >
                Metod
              </a>
            </li>
            <li>
              <a 
                href="#results" 
                className={activeSection === 'results' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'results')}
                onKeyDown={(e) => handleKeyDown(e, 'results')}
                data-section="results"
                aria-label="Resultat"
                aria-current={activeSection === 'results' ? 'page' : undefined}
              >
                Resultat
              </a>
            </li>
            <li>
              <a 
                href="#reflection" 
                className={activeSection === 'reflection' ? 'active' : ''} 
                onClick={(e) => handleNavClick(e, 'reflection')}
                onKeyDown={(e) => handleKeyDown(e, 'reflection')}
                data-section="reflection"
                aria-label="Reflektion"
                aria-current={activeSection === 'reflection' ? 'page' : undefined}
              >
                Reflektion
              </a>
            </li>
            <li>
              <a 
                href="#search" 
                onClick={handleSearchClick}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleSearchClick(e);
                  }
                }}
                aria-label="Sök i examensarbetet"
                className="nav-search-link"
              >
                <i className="fas fa-search" aria-hidden="true"></i> <span>Sök</span>
              </a>
            </li>
            <div className="nav-indicator" ref={indicatorRef} aria-hidden="true"></div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 