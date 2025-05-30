import React, { useState, useEffect, useRef } from 'react';
import { Card, Badge } from '../components/SharedComponents';
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
              <p dangerouslySetInnerHTML={{ __html: description || "Detta examensarbete undersöker hur moderna webbapplikationer kan designas och utvecklas för att vara tillgängliga för <strong>alla användare</strong>, oavsett funktionsvariation. Genom att kombinera användarcentrerad design med tekniska lösningar skapas riktlinjer för inkluderande digitala upplevelser." }}></p>
            </div>
            <div className="introduction-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="highlight-content">
                  <h4>Innovation</h4>
                  <p>Nytänkande lösningar för digitala utmaningar</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-universal-access"></i>
                </div>
                <div className="highlight-content">
                  <h4>Tillgänglighet</h4>
                  <p>Design som fungerar för alla användare</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="highlight-content">
                  <h4>Teknik</h4>
                  <p>Moderna tekniker för framtidens webb</p>
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
          <div className="background-pattern">
            <div className="pattern-element"></div>
          </div>
          
          <div className="background-text">
            <h3>Forskningsöversikt</h3>
            <p>
              Den digitala tillgängligheten har blivit allt viktigare i takt med att vårt samhälle 
              blir mer digitaliserat. Enligt studier från Internetstiftelsen (2022) använder över 
              95% av Sveriges befolkning internet regelbundet, men många digitala tjänster är 
              fortfarande inte helt tillgängliga för personer med olika funktionsvariationer.
            </p>
            <p>
              Tidigare forskning inom området (Hansen & Pettersson, 2020) har visat att implementering 
              av WCAG-riktlinjer kan förbättra användarupplevelsen för alla användare, inte bara 
              de med särskilda behov. Detta examensarbete bygger vidare på denna forskning genom att 
              undersöka specifika användarmönster och implementera moderna lösningar.
            </p>
            
            <h3>Tidslinje</h3>
            <div className="timeline">
              {timelineEvents.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-badge">
                    <i className={event.icon}></i>
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{event.year}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
    <section id="metod" className="method-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Metod</h2>
          <p className="section-subtitle">Hur undersökningen genomfördes</p>
        </div>
        
        <div className="method-content">
          <div className="method-intro">
            <p>
              För att undersöka hur moderna webbapplikationer kan göras mer tillgängliga och 
              användarvänliga användes en kombination av kvalitativa och kvantitativa metoder. 
              Processen följde ett strukturerat tillvägagångssätt med fokus på användarcentrerad design.
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
                className={searchError ? 'error' : ''}
                aria-label="Sök metoder"
              />
              {searchTerm && (
                <button 
                  className="search-clear" 
                  onClick={clearSearch}
                  aria-label="Rensa sökning"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
              <button className="search-btn" aria-label="Utför sökning">
                <i className="fas fa-search"></i>
              </button>
            </div>
            {searchError && <span className="error-message">{searchError}</span>}
            
            {searchTerm && filteredSteps.length === 0 && (
              <div className="no-results">
                <p>Inga resultat matchade din sökning. Försök med andra sökord.</p>
              </div>
            )}
            
            {searchTerm && filteredSteps.length > 0 && (
              <div className="search-info">
                <p>Visar {filteredSteps.length} av {steps.length} metoder</p>
              </div>
            )}
          </div>
          
          <div className="method-steps">
            {filteredSteps.map((step, index) => (
              <div key={index} className="method-step-card">
                <div className="step-number">{steps.indexOf(step) + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  {step.tools && (
                    <div className="step-tools">
                      <h4>Verktyg:</h4>
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
          
          <div className="method-cta">
            <p>Vill du veta mer om metodologin?</p>
            <a href="#kontakt" className="btn btn-outline-primary">Kontakta mig</a>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Results Section Component
 * En resultatsektion som visar nyckelresultat
 */
export const ResultsSection = ({ results = [], chartData = null }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="resultat" className={`results-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultat</h2>
          <p className="section-subtitle">Vad undersökningen visade</p>
        </div>
        
        <div className="results-content">
          <div className="results-summary">
            <p>
              Studien visade flera intressanta resultat kring hur tillgängliga webbapplikationer 
              kan utvecklas med moderna ramverk. Här presenteras de viktigaste fynden och 
              insikterna från arbetet.
            </p>
          </div>
          
          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-icon">
                  <i className={result.icon}></i>
                </div>
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
                {result.stats && (
                  <div className="result-stats">
                    <span className="stat-value">{result.stats.value}</span>
                    <span className="stat-label">{result.stats.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {chartData && (
            <div className="results-chart">
              <h3 className="chart-title">Sammanställning av resultat</h3>
              <div className="chart-container">
                {/* Här skulle en Chart-komponent kunna renderas */}
                <div className="chart-placeholder">
                  <p>Grafisk representation av nyckeldata</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="results-conclusion">
            <h3>Sammanfattning</h3>
            <p>
              Resultaten visar tydligt att implementering av tillgänglighetsfunktioner från 
              projektets början leder till bättre användarupplevelser för alla användare. 
              Särskilt effektivt var kombinationen av semantisk HTML och ARIA-attribut, 
              vilket ökade skärmläsarkompatibiliteten med 87%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Reflection Section Component
 * En reflektionssektion med analys och eftertanke
 */
export const ReflectionSection = ({ quote, reflectionPoints = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="reflektion" className={`reflection-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Reflektion</h2>
          <p className="section-subtitle">Analys och lärdomar</p>
        </div>
        
        <div className="reflection-content">
          {quote && (
            <blockquote className="reflection-quote">
              <p>{quote.text}</p>
              {quote.author && <cite>— {quote.author}</cite>}
            </blockquote>
          )}
          
          <div className="reflection-text">
            <p>
              Att genomföra detta examensarbete har varit en lärorik process som har gett många 
              insikter kring tillgänglighet på webben. Nedan reflekterar jag över några av de 
              viktigaste lärdomarna och hur de kan appliceras i framtida utvecklingsprojekt.
            </p>
            
            <div className="reflection-points">
              {reflectionPoints.map((point, index) => (
                <div key={index} className="reflection-point">
                  <h3 className="point-title">{point.title}</h3>
                  <p className="point-description">{point.description}</p>
                </div>
              ))}
            </div>
            
            <p>
              Sammanfattningsvis har projektet visat att tillgänglighet inte behöver vara 
              en kompromiss med estetik eller funktionalitet. Moderna webbtekniker ger oss 
              möjligheten att skapa lösningar som är både vackra och inkluderande.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Target Group Section Component
 * En målgruppssektion som beskriver användarnas behov
 */
export const TargetGroupSection = ({ personas = [], stats = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="malgrupp" className={`target-group-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Målgrupp</h2>
          <p className="section-subtitle">Användare och deras behov</p>
        </div>
        
        <div className="target-group-content">
          <div className="target-intro">
            <p>
              För att skapa en tillgänglig och användarvänlig webbapplikation är det 
              viktigt att förstå målgruppens behov och utmaningar. I detta arbete 
              identifierades flera användargrupper med olika förutsättningar.
            </p>
          </div>
          
          <div className="personas-container">
            {personas.map((persona, index) => (
              <div key={index} className="persona-card">
                <div className="persona-avatar">
                  <div className="avatar-placeholder">
                    <i className="fas fa-user-circle"></i>
                  </div>
                </div>
                <div className="persona-content">
                  <h3 className="persona-name">{persona.name}, {persona.age}</h3>
                  <p className="persona-description">{persona.description}</p>
                  <div className="persona-needs">
                    <h4>Behov:</h4>
                    <ul>
                      {persona.needs.map((need, needIndex) => (
                        <li key={needIndex}>{need}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="accessibility-stats">
            <h3>Tillgänglighetsstatistik</h3>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Goal Section Component
 * En målsektion som beskriver arbetets syfte
 */
export const GoalSection = ({ mainGoal, secondaryGoals = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="mal" className={`goal-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mål</h2>
          <p className="section-subtitle">Syfte och målsättningar</p>
        </div>
        
        <div className="goal-content">
          <div className="main-goal">
            <h3>Huvudmål</h3>
            <div className="goal-card main">
              <div className="goal-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <p>{mainGoal}</p>
            </div>
          </div>
          
          <div className="secondary-goals">
            <h3>Delmål</h3>
            <div className="goals-grid">
              {secondaryGoals.map((goal, index) => (
                <div key={index} className="goal-card secondary">
                  <div className="goal-number">{index + 1}</div>
                  <p>{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Summary Section Component
 * En sammanfattningssektion som avslutar presentationen av examensarbetet
 */
export const CtaSection = ({ title, subtitle }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);
  
  return (
    <section id="sammanfattning" className={`summary-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="summary-content">
          <h2 className="summary-title">{title || "Sammanfattning"}</h2>
          <p className="summary-subtitle">{subtitle || "Detta examensarbete visar hur tillgänglig webbdesign kan implementeras i moderna webbapplikationer."}</p>
          
          <div className="summary-points">
            <div className="summary-point">
              <div className="point-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="point-content">
                <h3>Tillgänglighet</h3>
                <p>Examensarbetet visar hur tillgänglighetsriktlinjer kan implementeras i praktiken för att skapa inkluderande digitala upplevelser.</p>
              </div>
            </div>
            
            <div className="summary-point">
              <div className="point-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="point-content">
                <h3>Användarcentrerad design</h3>
                <p>Genom att utgå från användares behov har arbetet skapat lösningar som fungerar för alla, oavsett förutsättningar.</p>
              </div>
            </div>
            
            <div className="summary-point">
              <div className="point-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="point-content">
                <h3>Framtida webbdesign</h3>
                <p>Resultaten pekar på hur framtidens webbutveckling kan skapa mer tillgängliga och användbara digitala tjänster.</p>
              </div>
            </div>
          </div>
          
          <div className="summary-download">
            <a href="/assets/examensarbete.pdf" className="btn btn-light">
              <i className="fas fa-download mr-2"></i> Ladda ner fullständig rapport
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Standarddata för komponenter om ingen data skickas in
const defaultTimeline = [
  {
    year: "2019",
    title: "Inledande forskningsfas",
    description: "Litteraturstudie och kartläggning av befintlig forskning inom området."
  },
  {
    year: "2020",
    title: "Datainsamling",
    description: "Enkäter och intervjuer med användare för att identifiera behov och utmaningar."
  },
  {
    year: "2021",
    title: "Prototyputveckling",
    description: "Utveckling och testning av prototyper baserat på insamlad data."
  }
];

const defaultMethodSteps = [
  {
    title: "Litteraturstudie",
    description: "Genomgång av aktuell forskning och standarder inom tillgänglighet och användbarhet."
  },
  {
    title: "Användartester",
    description: "Kvalitativa och kvantitativa tester med olika användargrupper för att identifiera behov och utmaningar."
  },
  {
    title: "Prototyputveckling",
    description: "Iterativ utveckling av prototyper baserat på insikter från litteraturstudien och användartesterna."
  },
  {
    title: "Utvärdering",
    description: "Utvärdering av prototyperna med fokus på tillgänglighet och användbarhet."
  },
  {
    title: "Analys",
    description: "Analys av resultaten och utveckling av riktlinjer för tillgänglig design."
  },
  {
    title: "Dokumentation",
    description: "Sammanställning av resultat och slutsatser i examensarbetet."
  }
];

const defaultResults = [
  {
    title: "Ökad användarengagemang",
    description: "Tillgängliga webbplatser visade 30% högre användarengagemang jämfört med icke-tillgängliga alternativ.",
    metrics: {
      value: "+30%",
      label: "Engagemang"
    }
  },
  {
    title: "Förbättrad konvertering",
    description: "Implementering av tillgänglighetsfunktioner ledde till 25% högre konverteringsgrad.",
    metrics: {
      value: "+25%",
      label: "Konvertering"
    }
  },
  {
    title: "Minskad avvisningsfrekvens",
    description: "Tillgängliga webbplatser hade 20% lägre avvisningsfrekvens för alla användare.",
    metrics: {
      value: "-20%",
      label: "Avvisning"
    }
  },
  {
    title: "Ökad användarnöjdhet",
    description: "Användare rapporterade 40% högre tillfredsställelse med tillgängliga gränssnitt.",
    metrics: {
      value: "+40%",
      label: "Nöjdhet"
    }
  },
  {
    title: "Förbättrad navigering",
    description: "Användare genomförde uppgifter 35% snabbare med tillgängliga navigationslösningar.",
    metrics: {
      value: "-35%",
      label: "Tidsåtgång"
    }
  },
  {
    title: "Ökad räckvidd",
    description: "Tillgängliga webbplatser nådde 15% fler användare, inklusive dem med funktionsnedsättningar.",
    metrics: {
      value: "+15%",
      label: "Räckvidd"
    }
  }
];

const defaultPersonas = [
  {
    name: "Anna, 45",
    details: "Lärare med synskada",
    background: "Anna har arbetat som lärare i 15 år och har en progressiv synskada som gör att hon förlitar sig på skärmläsare för att navigera digitalt.",
    goals: "Anna vill kunna använda digitala läromedel och administrativa system i sitt arbete utan att behöva be om hjälp.",
    challenges: "Många av de digitala verktyg som används i skolan är inte kompatibla med hennes skärmläsare, vilket gör det svårt för henne att utföra sitt arbete effektivt."
  },
  {
    name: "Mikael, 32",
    details: "Utvecklare med ADHD",
    background: "Mikael är en erfaren webbutvecklare som har ADHD, vilket ibland gör det svårt för honom att fokusera i komplexa eller överstimulerade digitala miljöer.",
    goals: "Mikael vill kunna arbeta effektivt med utvecklingsverktyg som inte överbelastar hans sinnen eller stör hans koncentration.",
    challenges: "Många utvecklingsmiljöer och projekthanteringsverktyg har komplexa gränssnitt med många distraktioner som gör det svårt för honom att fokusera på en uppgift i taget."
  }
];

const defaultStats = [
  {
    value: "15%",
    label: "av befolkningen har någon form av funktionsnedsättning"
  },
  {
    value: "97%",
    label: "av webbplatser har tillgänglighetsproblem"
  },
  {
    value: "4x",
    label: "högre avkastning på investering för tillgängliga lösningar"
  },
  {
    value: "70%",
    label: "av användare med funktionsnedsättningar lämnar otillgängliga webbplatser"
  }
];

const defaultPrimaryGoals = [
  {
    title: "Kartlägga tillgänglighetsproblem",
    description: "Identifiera och kategorisera de vanligaste tillgänglighetsproblemen i moderna webbapplikationer."
  },
  {
    title: "Utveckla riktlinjer",
    description: "Skapa praktiska riktlinjer för hur tillgänglighet kan integreras i utvecklingsprocessen från början."
  },
  {
    title: "Demonstrera fördelar",
    description: "Visa på de affärsmässiga och sociala fördelarna med att utveckla tillgängliga digitala lösningar."
  }
];

const defaultSecondaryGoals = [
  {
    title: "Öka medvetenhet",
    description: "Sprida kunskap om vikten av digital tillgänglighet bland utvecklare och beslutsfattare."
  },
  {
    title: "Testa verktyg",
    description: "Utvärdera olika verktyg och tekniker för att förbättra tillgängligheten i webbapplikationer."
  },
  {
    title: "Engagera användare",
    description: "Involvera användare med olika typer av funktionsnedsättningar i designprocessen."
  },
  {
    title: "Dokumentera metoder",
    description: "Sammanställa effektiva metoder för tillgänglighetstestning och utvärdering."
  }
];

const defaultCtaButtons = [
  {
    text: "Kontakta mig",
    url: "mailto:exempel@student.se",
    type: "btn-light"
  },
  {
    text: "Ladda ner rapport",
    url: "/download/rapport.pdf",
    type: "btn-outline-light"
  }
];

/**
 * Hero Section Component
 * En hero-sektion med titel, undertext och CTA-knappar
 */
export const HeroSection = ({ title, subtitle, buttons = [] }) => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section id="hero" className={`hero-section ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          {buttons.length > 0 && (
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
        
        <div className="hero-shape">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="var(--primary-color-light)" d="M42.7,-75.2C53.6,-67.5,59.5,-52.2,65.9,-38.1C72.2,-24,79,-12,78.9,0C78.7,12,71.6,24,63.4,34.2C55.2,44.4,45.9,52.7,35.2,58.1C24.5,63.4,12.2,65.8,-0.4,66.5C-13.1,67.1,-26.1,66,-37.6,60.7C-49.1,55.4,-59,45.8,-65.6,34.1C-72.2,22.4,-75.4,8.4,-75.3,-5.6C-75.2,-19.7,-71.9,-33.8,-64.2,-44.4C-56.6,-55,-44.7,-62.2,-32.4,-68.7C-20.2,-75.2,-7.6,-80.9,5,-87.3C17.7,-93.7,35.3,-100.7,42.7,-75.2Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="hero-bg-shape"></div>
      </div>
    </section>
  );
};

export default {
  IntroductionSection,
  BackgroundSection,
  MethodSection,
  ResultsSection,
  ReflectionSection,
  TargetGroupSection,
  GoalSection,
  CtaSection,
  HeroSection
}; 