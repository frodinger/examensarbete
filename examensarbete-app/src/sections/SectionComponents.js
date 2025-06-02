import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Samlade sektionskomponenter för examensarbetet

/**
 * Introduction Section Component
 * En introduktionssektion med beskrivning av examensarbetet
 */
export const IntroductionSection = ({ description }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="introduktion" className={`introduction-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Introduktion</h2>
          <p className="section-subtitle">Om examensarbetet</p>
        </div>
        
        <div className="introduction-content">
          <div className="introduction-description">
            <div className="description-content">
              <p dangerouslySetInnerHTML={{ __html: description || "Det här examensarbetet undersöker hur tabeller i en digital pensions- och försäkringsportal kan optimeras för mobila enheter för att förbättra <strong>tillgänglighet, tydlighet och användarupplevelse</strong>. I takt med att mobilanvändandet ökar blir det allt tydligare att traditionella, desktop-anpassade tabellösningar inte fungerar optimalt på små skärmar—särskilt när det gäller att presentera tät och strukturerad information." }}></p>
            </div>
            <div className="introduction-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <div className="highlight-content">
                  <h4>Mobilanpassning</h4>
                  <p>Optimerade lösningar för små skärmar</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-table"></i>
                </div>
                <div className="highlight-content">
                  <h4>Tabellstruktur</h4>
                  <p>Tydliga och tillgängliga datapresentationer</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <div className="highlight-content">
                  <h4>Pensioner & Försäkringar</h4>
                  <p>Komplexa data på ett begripligt sätt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Background Section Component
 * En bakgrundssektion med information om tidigare forskning och kontext
 */
export const BackgroundSection = ({ timelineEvents = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="bakgrund" className={`background-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Bakgrund</h2>
          <p className="section-subtitle">Kontext och tidigare forskning</p>
        </div>
        
        <div className="background-content">
          <div className="background-text">
            <h3>Forskningsöversikt</h3>
            <p>
              Mobilanvändningen inom finansiella tjänster har ökat markant de senaste åren. Enligt data 
              från 2022 sker nu 68% av alla besök på pensions- och försäkringsportaler via mobila enheter. 
              Trots detta är många av dessa portaler fortfarande optimerade främst för desktop-användning, 
              särskilt när det gäller presentationen av tabeller och komplex finansiell information.
            </p>
            <p>
              Tidigare forskning inom responsiv design (Andersson & Nilsson, 2021) har visat att användare 
              förväntar sig samma funktionalitet på mobila enheter som på desktop. Samtidigt visar studier 
              från Finansinspektionen att tydlig presentation av finansiell information är avgörande för 
              användarnas förtroende och beslutsfattande. Detta examensarbete utforskar korsningen mellan 
              dessa behov med fokus på tabellpresentation i mobila gränssnitt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Method Section Component
 * En metodsektion som beskriver tillvägagångssätt
 */
export const MethodSection = ({ steps = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');
  const [filteredSteps, setFilteredSteps] = useState(steps);
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  // Uppdatera filteredSteps när steps-prop ändras
  useEffect(() => {
    setFilteredSteps(steps);
  }, [steps]);

  // Hantera sökning med validering
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Validera söktermen (minst 2 tecken för sökning)
    if (value.length > 0 && value.length < 2) {
      setSearchError('Ange minst 2 tecken för sökning');
    } else {
      setSearchError('');
      
      // Filtrera steg baserat på söktermen
      if (value.length >= 2) {
        const filtered = steps.filter(item => 
          item.title.toLowerCase().includes(value.toLowerCase()) || 
          item.description.toLowerCase().includes(value.toLowerCase()) ||
          (item.tools && item.tools.some(tool => 
            tool.toLowerCase().includes(value.toLowerCase())
          ))
        );
        setFilteredSteps(filtered);
      } else {
        // Återställ till alla steg om söktermen är tom
        setFilteredSteps(steps);
      }
    }
  };

  // Rensa sökningen
  const clearSearch = () => {
    setSearchTerm('');
    setSearchError('');
    setFilteredSteps(steps);
  };

  return (
    <section id="metod" className={`method-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Metod</h2>
          <p className="section-subtitle">Hur undersökningen genomfördes</p>
        </div>
        
        <div className="method-content">
          <div className="method-intro">
            <p>
              För att undersöka hur tabeller i en pensions- och försäkringsportal kan optimeras för 
              mobila enheter användes en kombination av olika metoder. Arbetet genomfördes under en 
              praktikperiod på techbyrån Meepo, med fokus på en faktisk pensions- och försäkringsportal. 
              Genom ett användarcentrerat tillvägagångssätt identifierades problem och utvecklades 
              förbättrade designlösningar.
            </p>
          </div>
          
          {/* Sökfunktion för metoder */}
          <div className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Sök metoder..."
                value={searchTerm}
                onChange={handleSearch}
                className={`form-control ${searchError ? 'error' : ''}`}
                aria-label="Sök metoder"
              />
              {searchTerm && (
                <button 
                  type="button" 
                  className="search-clear" 
                  onClick={clearSearch}
                  aria-label="Rensa sökning"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
              <span className="search-btn">
                <i className="fas fa-search"></i>
              </span>
            </div>
            
            {searchError && <span className="error-message">{searchError}</span>}
            
            {searchTerm.length >= 2 && (
              <div className="search-info">
                {filteredSteps.length > 0 
                  ? `Visar ${filteredSteps.length} av ${steps.length} metoder`
                  : 'Inga metoder matchade din sökning'
                }
              </div>
            )}
          </div>
          
          {/* Grid för metodsteg */}
          {filteredSteps.length === 0 && searchTerm.length >= 2 ? (
            <div className="no-results">
              <p>Inga metoder matchade söktermen "{searchTerm}"</p>
              <button className="btn btn-outline-primary mt-3" onClick={clearSearch}>
                Visa alla metoder
              </button>
            </div>
          ) : (
            <div className="method-grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3 gap-6">
              {filteredSteps.map((step, index) => (
                <div key={index} className="method-card">
                  <div className="method-card-header">
                    <div className="step-number">{index + 1}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <div className="method-card-body">
                    <p className="step-description">{step.description}</p>
                    
                    {step.tools && step.tools.length > 0 && (
                      <div className="step-tools">
                        <h4>Verktyg & Tekniker</h4>
                        <ul>
                          {step.tools.map((tool, toolIndex) => (
                            <li key={toolIndex}>{tool}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/**
 * Results Section Component
 * En resultatsektion som visar på utfallet av examensarbetet
 */
export const ResultsSection = ({ results = [], chartData = null }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="resultat" className={`results-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultat</h2>
          <p className="section-subtitle">Vad studien visade</p>
        </div>
        
        <div className="results-summary">
          <p>
            Resultaten från detta examensarbete visade att tydligare struktur, bättre gruppering av information och förbättrad visuell återkoppling avsevärt ökade användarvänligheten för mobila tabeller. 
            Genom att dela in tabeller i funktionella typer kunde designlösningarna anpassas mer specifikt efter syfte och användarbehov.
          </p>
        </div>
        
        <div className="results-grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-icon">
                <i className={result.icon || "fas fa-check"}></i>
              </div>
              <h3 className="result-title">{result.title}</h3>
              <p className="result-description">{result.description}</p>
              
              {result.stats && (
                <div className="result-stat">
                  <div className="stat-value">{result.stats.value}</div>
                  <div className="stat-label">{result.stats.label}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="conclusion-content">
            <h3>Slutsatser</h3>
            <p>
              Studien visar att mobilanpassad tabellösning kräver mer än bara visuell skalning—det handlar om att omstrukturera innehållet med hänsyn till användarens kontext och uppgift. Genom att prioritera tydlighet, interaktivitet och enkelhet kunde de slutliga koncepten bidra till en mer inkluderande och intuitiv mobilupplevelse.
            </p>
            <p>
              De mest framgångsrika lösningarna kombinerade: 1) tydlig visuell hierarki, 2) kontextuell filtrering och sortering, 3) progressiv exponering av information, och 4) anpassningsbar visning för olika användarscenarier.
            </p>
          </div>
      </div>
    </section>
  );
};

/**
 * Reflection Section Component
 * En reflektionssektion med lärdomar och reflektioner
 */
export const ReflectionSection = ({ quote, reflectionPoints = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="reflektion" className={`reflection-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Reflektion</h2>
          <p className="section-subtitle">Lärdomar och insikter</p>
        </div>
        
        <div className="reflection-content">
          {quote && (
            <blockquote className="reflection-blockquote">
              {quote.text}
              <footer>
                <cite>{quote.author}</cite>
              </footer>
            </blockquote>
          )}
          
          <div className="reflection-points">
            {reflectionPoints.map((point, index) => (
              <div key={index} className="reflection-point">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
            
            <div className="reflection-point">
              <h3>Mobilanpassningens komplexitet</h3>
              <p>
                En central insikt från detta examensarbete är att effektiv mobilanpassning av tabeller innebär en 
                balans mellan informationsdensitet och användbarhet. Att bara göra en tabell responsiv 
                är inte tillräckligt för en bra användarupplevelse - innehållet måste omorganiseras och 
                presenteras på ett sätt som är optimerat för mobila gränssnitt, samtidigt som 
                informationens integritet och förståelighet bevaras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Target Group Section Component
 * En målgruppssektion som beskriver användarna
 */
export const TargetGroupSection = ({ personas = [], stats = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="malgrupp" className={`target-group-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Målgrupp</h2>
          <p className="section-subtitle">Användare och deras behov</p>
        </div>
        
        <h3>Användarprofiler</h3>
        <div className="personas-container">
          {personas.map((persona, index) => (
            <div key={index} className="persona-card">
              <div className="persona-avatar">
                <div className="avatar-placeholder">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="persona-content">
                <h4 className="persona-name">{persona.name}</h4>
                <p className="persona-description">{persona.description}</p>
                
                {persona.needs && persona.needs.length > 0 && (
                  <div className="persona-needs">
                    <h4>Behov och förväntningar:</h4>
                    <ul>
                      {persona.needs.map((need, needIndex) => (
                        <li key={needIndex}>{need}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="accessibility-stats">
          <h3>Statistik om mobilanvändning och tabeller</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <i className={stat.icon || "fas fa-percentage"}></i>
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Goal Section Component
 * En målsektion som beskriver examensarbetets mål
 */
export const GoalSection = ({ mainGoal, secondaryGoals = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="mal" className={`goals-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mål</h2>
          <p className="section-subtitle">Examensarbetets syfte och målsättningar</p>
        </div>
        
        <div className="goals-wrapper">
          <div className="goal-group">
            <h3>Huvudmål</h3>
            <div className="main-goal">
              <p>{mainGoal}</p>
            </div>
          </div>
          
          <div className="goal-group">
            <h3>Delmål</h3>
            {secondaryGoals.map((goal, index) => (
              <div key={index} className="goal-item">
                <div className="goal-title">Mål {index + 1}</div>
                <div className="goal-description">{goal}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Summary Section Component (tidigare CtaSection)
 * En sammanfattande sektion för examensarbetet
 */
export const CtaSection = ({ title, subtitle }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="sammanfattning" className={`summary-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <h2 className="summary-title">{title}</h2>
        <p className="summary-subtitle">{subtitle}</p>
        
        <div className="summary-points">
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="point-content">
              <h3>Mobilanpassning är nödvändig</h3>
              <p>I takt med att mobilt användande ökar blir en genomtänkt mobilanpassning av tabeller allt viktigare, särskilt inom pensions- och försäkringssektorn där komplex information behöver presenteras på ett tydligt sätt.</p>
            </div>
          </div>
          
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-th-list"></i>
            </div>
            <div className="point-content">
              <h3>Tabelltyper kräver olika lösningar</h3>
              <p>Studien identifierade att olika tabelltyper (jämförelsetabeller och innehållstabeller) kräver anpassade designlösningar för att fungera optimalt på mobila enheter.</p>
            </div>
          </div>
          
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <div className="point-content">
              <h3>Användarbehov i fokus</h3>
              <p>Genom att utgå från specifika användarbehov och uppgifter kunde designkoncept utvecklas som hjälper användare att snabbt och säkert hitta och förstå pensionsinformation på mobila enheter.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Hero Section Component
 * En hero-sektion som introducerar examensarbetet
 */
export const HeroSection = ({ title, subtitle, buttons = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="hero" className={`hero-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">{title || "Mobilanpassning av tabeller"}</h1>
            <p className="hero-subtitle">{subtitle || "Ett examensarbete om hur tabeller i en pensions- och försäkringsportal kan optimeras för mobila enheter"}</p>
            
            {buttons && buttons.length > 0 && (
              <div className="hero-actions">
                {buttons.map((button, index) => (
                  <a 
                    key={index} 
                    href={button.url} 
                    className={`btn ${button.primary ? 'btn-primary' : 'btn-outline-primary'}`}
                  >
                    {button.text}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <div className="hero-graphic">
            <div className="hero-graphic-bg"></div>
            <div className="hero-graphic-element">
              <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" stroke="var(--primary-color)" strokeWidth="2">
                  <rect x="40" y="50" width="400" height="60" rx="4" />
                  <line x1="40" y1="80" x2="440" y2="80" />
                  <rect x="40" y="110" width="400" height="40" rx="0" />
                  <rect x="40" y="150" width="400" height="40" rx="0" />
                  <rect x="40" y="190" width="400" height="40" rx="0" />
                  <rect x="40" y="230" width="400" height="40" rx="0" />
                  
                  <line x1="140" y1="50" x2="140" y2="270" />
                  <line x1="240" y1="50" x2="240" y2="270" />
                  <line x1="340" y1="50" x2="340" y2="270" />
                  
                  <rect x="80" y="130" width="80" height="150" rx="4" fill="var(--primary-color-light)" fillOpacity="0.2" />
                  <rect x="180" y="290" width="160" height="40" rx="4" />
                  
                  <circle cx="410" cy="100" r="15" fill="var(--accent-color-light)" fillOpacity="0.3" />
                  <path d="M400,100 L420,100 M410,90 L410,110" strokeLinecap="round" />
                </g>
              </svg>
            </div>
            <div className="hero-graphic-dots"></div>
          </div>
        </div>
      </div>
    </section>
  );
}; 