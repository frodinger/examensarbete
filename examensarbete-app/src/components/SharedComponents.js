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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  // Hantera tangentbordshändelser (space och enter)
  const handleKeyDown = (e, sectionId) => {
    // Hantera både Enter (13) och Space (32) tangenterna
    if (e.keyCode === 32 || e.key === ' ' || e.keyCode === 13 || e.key === 'Enter') {
      e.preventDefault();
      scrollToSection(e, sectionId);
    }
  };

  // Öppna sökmodalen
  const openSearch = () => {
    setIsSearchOpen(true);
  };

  // Stäng sökmodalen
  const closeSearch = () => {
    setIsSearchOpen(false);
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
        
        <div className="navbar-actions">
          <button 
            className="navbar-search-btn"
            aria-label="Sök i examensarbetet"
            onClick={openSearch}
          >
            <i className="fas fa-search"></i>
          </button>
          
          <button 
            className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a 
                  href={`#${link.id}`} 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  onKeyDown={(e) => handleKeyDown(e, link.id)}
                  role="button"
                  tabIndex="0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <ScrollIndicator />
      
      {/* Sökmodal */}
      <SearchModal isOpen={isSearchOpen} onClose={closeSearch} />
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
        if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Stäng sökmodal"
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

// SearchModal-komponent
export const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');
  const inputRef = React.useRef(null);
  const modalRef = React.useRef(null);
  
  // Data för sökbara sektioner (används som fallback/komplement till DOM-sökning)
  const sections = [
    { id: 1, title: "Introduktion till examensarbetet", section: "introduktion", content: "Information om examensarbetets syfte och bakgrund." },
    { id: 2, title: "Bakgrund och tidigare forskning", section: "bakgrund", content: "Forskningsbakgrund och tidigare studier inom området." },
    { id: 3, title: "Metod och genomförande", section: "metod", content: "Beskrivning av metodik och tillvägagångssätt." },
    { id: 4, title: "Resultat och analys", section: "resultat", content: "Presentation av resultat och analys av data." },
    { id: 5, title: "Diskussion och reflektion", section: "reflektion", content: "Diskussion kring resultat och metodval." },
    { id: 6, title: "Målgrupp och användare", section: "malgrupp", content: "Information om målgrupp och användarperspektiv." },
    { id: 7, title: "Mål och syfte", section: "mal", content: "Beskrivning av arbetets mål och syfte." },
    { id: 8, title: "Sammanfattning", section: "sammanfattning", content: "Sammanfattning av examensarbetet." },
  ];
  
  // Sätt focus på sökfältet när modalen öppnas
  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);
  
  // Rensa sökning när modalen stängs
  React.useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setSearchResults([]);
      setSearchError('');
      // Ta bort eventuella markeringar på sidan
      removeHighlightsFromPage();
    }
  }, [isOpen]);

  // Hantera escape-tangenten för att stänga modalen
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
  
  // Hantera klick utanför modalen för att stänga den
  React.useEffect(() => {
    const handleBackdropClick = (event) => {
      // Kontrollera om klicket är på bakgrunden (inte på själva modalen)
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleBackdropClick);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [isOpen, onClose]);

  // Ta bort tidigare markeringar från sidan
  const removeHighlightsFromPage = () => {
    // Ta bort alla markeringar som kan ha lagts till tidigare
    const highlightedElements = document.querySelectorAll('.search-text-highlight');
    highlightedElements.forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        // Normalisera för att kombinera närliggande textNodes
        parent.normalize();
      }
    });
  };
  
  // Markera sökordet i innehållet
  const highlightText = (text, term) => {
    if (!term || !text) return text;
    
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark class="search-text-highlight">$1</mark>');
  };
  
  // Rekursivt markera text i DOM-element
  const highlightTextInElement = (element, term) => {
    if (!element || !term) return;
    
    // Hoppa över vissa element
    if (
      element.tagName === 'SCRIPT' || 
      element.tagName === 'STYLE' || 
      element.classList.contains('search-modal') || 
      element.nodeName === 'MARK'
    ) {
      return;
    }
    
    // Gå igenom alla barn-noder
    Array.from(element.childNodes).forEach(node => {
      if (node.nodeType === 3) { // Text node
        const text = node.nodeValue;
        if (text && text.toLowerCase().includes(term.toLowerCase())) {
          // Skapa en temporär div för att konvertera HTML-strängen till element
          const temp = document.createElement('div');
          temp.innerHTML = highlightText(text, term);
          
          // Ersätt textnoden med de nya markerade elementen
          const fragment = document.createDocumentFragment();
          while (temp.firstChild) {
            fragment.appendChild(temp.firstChild);
          }
          
          if (node.parentNode) {
            node.parentNode.replaceChild(fragment, node);
          }
        }
      } else if (node.nodeType === 1) { // Element node
        highlightTextInElement(node, term);
      }
    });
  };
  
  // Extraktion av text från ett element och dess underliggande noder
  const extractTextFromElement = (element) => {
    if (!element) return '';
    
    // Ignorera script, style och hidden element
    if (
      element.tagName === 'SCRIPT' || 
      element.tagName === 'STYLE' || 
      element.style.display === 'none' || 
      element.style.visibility === 'hidden'
    ) {
      return '';
    }
    
    // Om elementet har text, extrahera den
    let text = element.innerText || element.textContent || '';
    
    return text.trim();
  };
  
  // Söker genom faktiskt DOM-innehåll
  const searchInDOM = (term) => {
    if (!term || term.length < 2) return [];
    
    const lowercaseTerm = term.toLowerCase();
    const results = [];
    const processedSectionIds = new Set();
    
    // Hämta alla sektioner på sidan
    const allSections = document.querySelectorAll('section[id], div[id]');
    
    allSections.forEach(section => {
      const sectionId = section.id;
      if (!sectionId) return; // Hoppa över om ingen id
      
      // Sektionsnamn/titel (från rubriken eller id)
      let sectionTitle = '';
      const headingElement = section.querySelector('h1, h2, h3, h4, h5, h6');
      if (headingElement) {
        sectionTitle = headingElement.innerText || headingElement.textContent;
      } else {
        // Använd id som fallback och formatera den
        sectionTitle = sectionId
          .replace(/-/g, ' ')
          .replace(/\b\w/g, char => char.toUpperCase());
      }
      
      // Extrahera all text från sektionen
      const sectionContent = extractTextFromElement(section);
      
      // Kontrollera om söktermen finns i titeln eller innehållet
      const matchesTitle = sectionTitle.toLowerCase().includes(lowercaseTerm);
      const matchesContent = sectionContent.toLowerCase().includes(lowercaseTerm);
      
      if (matchesTitle || matchesContent) {
        // Hitta excerpt med söktermen i kontext
        let excerpt = '';
        
        if (matchesContent) {
          const contentLower = sectionContent.toLowerCase();
          const termIndex = contentLower.indexOf(lowercaseTerm);
          
          if (termIndex !== -1) {
            // Skapa excerpt runt träffen (ca 100 tecken före och efter)
            const start = Math.max(0, termIndex - 100);
            const end = Math.min(sectionContent.length, termIndex + lowercaseTerm.length + 100);
            excerpt = sectionContent.slice(start, end);
            
            // Lägg till ellipser om vi klippte innehållet
            if (start > 0) excerpt = '...' + excerpt;
            if (end < sectionContent.length) excerpt = excerpt + '...';
          } else {
            // Använd början av innehållet om vi inte hittar termen (ovanligt men kan hända)
            excerpt = sectionContent.slice(0, 200) + '...';
          }
        } else {
          // Om vi bara matchar i titeln, visa en del av innehållet
          excerpt = sectionContent.slice(0, 200) + '...';
        }
        
        // Lägg bara till om vi inte redan lagt till denna sektion
        if (!processedSectionIds.has(sectionId)) {
          processedSectionIds.add(sectionId);
          
          // Kontrollera om sektionen finns i våra predefinerade sektioner
          const predefinedSection = sections.find(s => s.section === sectionId);
          
          results.push({
            id: predefinedSection ? predefinedSection.id : sectionId,
            title: sectionTitle,
            section: sectionId,
            content: excerpt,
            relevance: matchesTitle ? 2 : 1 // Högre relevans om termen finns i titeln
          });
        }
      }
    });
    
    // Sök även i de fördefinierade sektionerna (fallback)
    sections.forEach(section => {
      const matchesTitle = section.title.toLowerCase().includes(lowercaseTerm);
      const matchesContent = section.content.toLowerCase().includes(lowercaseTerm);
      
      if ((matchesTitle || matchesContent) && !processedSectionIds.has(section.section)) {
        processedSectionIds.add(section.section);
        results.push({
          ...section,
          relevance: matchesTitle ? 2 : 1
        });
      }
    });
    
    // Sortera efter relevans (titel-träffar först, sedan innehålls-träffar)
    return results.sort((a, b) => b.relevance - a.relevance);
  };
  
  // Hantera sökning
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Validera söktermen (minst 2 tecken för sökning)
    if (term.length > 0 && term.length < 2) {
      setSearchError('Ange minst 2 tecken för sökning');
      setSearchResults([]);
    } else {
      setSearchError('');
      
      if (term.length >= 2) {
        setIsSearching(true);
        
        // Sökning med kort fördröjning för bättre UX
        setTimeout(() => {
          // Använd den nya DOM-baserade sökfunktionen
          const results = searchInDOM(term);
          setSearchResults(results);
          setIsSearching(false);
        }, 300);
      } else {
        setSearchResults([]);
      }
    }
  };
  
  // Rensa sökningen
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setSearchError('');
    removeHighlightsFromPage();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  // Navigera till sektion och stäng modal
  const goToSection = (e, section) => {
    e.preventDefault();
    onClose();
    
    // Spara söktermen för att markera den på sidan
    const termToHighlight = searchTerm;
    
    setTimeout(() => {
      // Ta bort eventuella tidigare markeringar först
      removeHighlightsFromPage();
      
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        // Scrolla till sektionen
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        
        // Markera visuellt sektionen för att hjälpa användaren
        sectionElement.classList.add('search-highlight');
        setTimeout(() => {
          sectionElement.classList.remove('search-highlight');
        }, 2000);
        
        // Markera alla förekomster av söktermen i sektionen
        if (termToHighlight && termToHighlight.length >= 2) {
          setTimeout(() => {
            highlightTextInElement(sectionElement, termToHighlight);
          }, 300);
        }
      }
    }, 100);
  };
  
  // Renderar söktermen markerad i texten
  const renderHighlightedText = (text, term) => {
    if (!text || !term) return text;
    
    // Skapa HTML-säker version av texten med markerade sökord
    const safeHtml = highlightText(text, term);
    return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="modal-backdrop show" aria-hidden="true">
      <div 
        ref={modalRef}
        className="modal search-modal show"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-modal-title"
      >
        <div className="modal-header">
          <h2 className="modal-title" id="search-modal-title">Sök i examensarbetet</h2>
        </div>
        <div className="modal-body">
          <div className="search-container">
            <div className="search-wrapper">
              <input
                ref={inputRef}
                type="text"
                placeholder="Skriv för att söka..."
                value={searchTerm}
                onChange={handleSearch}
                className={`form-control ${searchError ? 'error' : ''}`}
                aria-label="Sök i examensarbetet"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  className="search-clear" 
                  onClick={clearSearch}
                  aria-label="Rensa sökning"
                >
                  <i className="fas fa-times"></i>
                  <span>Rensa</span>
                </button>
              )}
              <span 
                className="search-icon" 
                aria-hidden="true"
              >
                <i className="fas fa-search"></i>
              </span>
            </div>
            
            {searchError && <span className="error-message">{searchError}</span>}
            
            {searchTerm.length >= 2 && !isSearching && (
              <div className="search-info">
                {searchResults.length > 0 
                  ? `Hittade ${searchResults.length} resultat för "${searchTerm}"`
                  : `Inga resultat för "${searchTerm}"`
                }
              </div>
            )}
            
            <div className="search-results-container">
              {isSearching ? (
                <div className="search-loading">Söker...</div>
              ) : (
                <>
                  {searchResults.length > 0 ? (
                    <ul className="search-results-list">
                      {searchResults.map((result) => (
                        <li key={result.id} className="search-result-item">
                          <a 
                            href={`#${result.section}`}
                            onClick={(e) => goToSection(e, result.section)}
                          >
                            <h4 className="result-title">
                              {renderHighlightedText(result.title, searchTerm)}
                            </h4>
                            <div className="result-excerpt">
                              {renderHighlightedText(result.content, searchTerm)}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    searchTerm.length >= 2 && (
                      <div className="no-results">
                        <p>Inga resultat hittades för "{searchTerm}"</p>
                        <p>Försök med andra sökord eller kontrollera stavningen.</p>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary btn-rounded" onClick={onClose}>
            Stäng
          </button>
        </div>
      </div>
    </div>
  );
}; 