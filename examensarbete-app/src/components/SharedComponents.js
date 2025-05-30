import React, { useState, useEffect, useRef } from 'react';

// Komponentbibliotek för mindre, återanvändbara komponenter

// Footer-komponent
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            &copy; {currentYear} Frej
          </div>
        </div>
      </div>
    </footer>
  );
};

/**
 * Navigation Bar Component
 * En responsiv navbar med hamburger-meny för mobila enheter
 */
export const Navbar = ({ transparent = false, activeSection = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  // Stäng menyn när användaren klickar utanför
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lyssna på scroll för att ändra navbar-stil
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Smidigt scrollande till sektion
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // Stäng mobilmenyn
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navbar-klass baserad på props och scroll-tillstånd
  const navbarClass = `navbar ${isScrolled ? 'navbar-scrolled' : ''} ${transparent && !isScrolled ? 'navbar-transparent' : ''}`;

  // Navigationslänkar
  const navLinks = [
    { id: 'introduktion', label: 'Introduktion' },
    { id: 'bakgrund', label: 'Bakgrund' },
    { id: 'metod', label: 'Metod' },
    { id: 'resultat', label: 'Resultat' },
    { id: 'reflektion', label: 'Reflektion' },
    { id: 'malgrupp', label: 'Målgrupp' },
    { id: 'mal', label: 'Mål' },
    { id: 'sammanfattning', label: 'Sammanfattning' }
  ];

  return (
    <nav className={navbarClass} ref={navbarRef}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="logo">Examensarbete</a>
        </div>
        
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          aria-label="Öppna meny"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a 
                  href={`#${link.id}`} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <ScrollIndicator />
    </nav>
  );
};

// Sökkomponent
export const SearchComponent = ({ placeholder = "Sök..." }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  
  // Exempel på sökresultat
  const exampleResults = [
    { id: 1, title: "Introduktion till examensarbetet", section: "Introduktion" },
    { id: 2, title: "Bakgrund och tidigare forskning", section: "Bakgrund" },
    { id: 3, title: "Metod och genomförande", section: "Metod" },
    { id: 4, title: "Resultat och analys", section: "Resultat" },
    { id: 5, title: "Diskussion och reflektion", section: "Reflektion" },
  ];
  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.length > 2) {
      setIsSearching(true);
      
      // Simulera sökfunktionalitet (ersätt med faktisk sökning i en riktig app)
      setTimeout(() => {
        const filtered = exampleResults.filter(item => 
          item.title.toLowerCase().includes(term.toLowerCase()) || 
          item.section.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filtered);
        setIsSearching(false);
      }, 500);
    } else {
      setSearchResults([]);
    }
  };
  
  return (
    <div className="search-component">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearch}
          aria-label="Sök i examensarbetet"
        />
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      
      {searchTerm.length > 2 && (
        <div className="search-results">
          {isSearching ? (
            <div className="search-loading">Söker...</div>
          ) : (
            <>
              {searchResults.length > 0 ? (
                <ul className="results-list">
                  {searchResults.map((result) => (
                    <li key={result.id} className="result-item">
                      <a href={`#${result.section.toLowerCase()}`}>
                        <h4 className="result-title">{result.title}</h4>
                        <span className="result-section">{result.section}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="no-results">Inga resultat hittades för "{searchTerm}"</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Kort-komponent
export const Card = ({ title, content, image, link, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      {image && (
        <img src={image} alt={title} className="card-img" />
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        {link && (
          <a href={link.url} className="btn btn-primary">
            {link.text || "Läs mer"}
          </a>
        )}
      </div>
    </div>
  );
};

// Alert-komponent
export const Alert = ({ type = "primary", title, children, onClose }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {title && <h4 className="alert-title">{title}</h4>}
      <div className="alert-content">{children}</div>
      {onClose && (
        <button 
          type="button" 
          className="alert-close"
          onClick={onClose}
          aria-label="Stäng"
        >
          &times;
        </button>
      )}
    </div>
  );
};

// Badge-komponent
export const Badge = ({ children, type = "primary", className = "" }) => {
  return (
    <span className={`badge badge-${type} ${className}`}>
      {children}
    </span>
  );
};

// Tab-komponent
export const Tabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = React.useState(defaultTab);
  
  return (
    <div className="tabs-component">
      <div className="nav-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`nav-link ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

// ScrollToTop-komponent
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Visa knappen när användaren scrollar ner en bit
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smidigt scrollande till toppen med animation
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      aria-label="Scrolla till toppen"
      title="Scrolla till toppen"
    >
      <i className="fas fa-arrow-up" aria-hidden="true"></i>
      <span className="sr-only">Scrolla till toppen</span>
    </button>
  );
};

// ScrollIndicator-komponent
export const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);
  
  React.useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(scrolled);
    };
    
    window.addEventListener('scroll', calculateScrollPercentage);
    
    return () => window.removeEventListener('scroll', calculateScrollPercentage);
  }, []);
  
  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${scrollPercentage}%` }}
      aria-hidden="true"
    ></div>
  );
};

// Modal-komponent
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`modal-backdrop ${isOpen ? 'show' : ''}`} 
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="modal-wrapper">
        <div 
          className={`modal ${isOpen ? 'show' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-header">
            <h2 className="modal-title" id="modal-title">{title}</h2>
            <button 
              className="close" 
              onClick={onClose}
              aria-label="Stäng"
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          {footer && (
            <div className="modal-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Hero-komponent
export const Hero = ({ title, subtitle, buttons, backgroundImage, overlay = false }) => {
  return (
    <section 
      className={`hero-section ${overlay ? 'hero-overlay' : ''}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          
          {buttons && buttons.length > 0 && (
            <div className="hero-buttons">
              {buttons.map((button, index) => (
                <a 
                  key={index} 
                  href={button.url} 
                  className={`btn ${button.type || 'btn-primary'}`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default {
  Footer,
  Navbar,
  SearchComponent,
  Card,
  Alert,
  Badge,
  Tabs,
  ScrollToTop,
  ScrollIndicator,
  Modal,
  Hero
}; 