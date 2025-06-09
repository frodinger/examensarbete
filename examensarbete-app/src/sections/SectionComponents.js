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
              <p dangerouslySetInnerHTML={{ __html: description || "Under praktikperioden hos Meepo identifierades ett konkret förbättringsområde i deras pensions- och försäkringsportal: <strong>mobilanpassningen av tabeller</strong>. Detta examensarbete undersöker hur tabellerna kan förbättras för att ge en mer tillgänglig och visuellt tydlig användarupplevelse på mobil." }}></p>
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
          <p className="section-subtitle">Kontext och problemställning</p>
        </div>
        
        <div className="background-content">
          <div className="background-text">
            <p>
              Allt fler hanterar viktiga ärenden via mobilen, vilket ställer höga krav på att digitala 
              gränssnitt fungerar bra på små skärmar. Många existerande lösningar är fortfarande utformade 
              för datoranvändning, vilket försämrar användbarheten i mobilvy – särskilt i komplexa 
              komponenter som tabeller.
            </p>
            <p>
              Tabeller används i portalen för att visa exempelvis försäkringar, dokument, fondinformation 
              och ärenden, men brister i layout och vägledning försvårar förståelsen när de visas på 
              mobila enheter.
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
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  const defaultSteps = [
    {
      title: "Heuristisk utvärdering",
      description: "Analys enligt Nielsens tio principer för att identifiera brister i den befintliga designen.",
      tools: ["Användbarhetsriktlinjer", "Expertanalys"]
    },
    {
      title: "Preferenstester",
      description: "Användarutvärdering med fem personer i åldern 59-70 år som fick testa olika designförslag.",
      tools: ["Intervjuer", "Prototyper", "Observationer"]
    },
    {
      title: "Tematisk analys",
      description: "Strukturerad analys av användarfeedback för att identifiera mönster i preferenser, förståelse och upplevelse.",
      tools: ["Kodning av data", "Mönsteridentifiering"]
    }
  ];

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
              Tre kvalitativa metoder användes för att undersöka hur tabeller i pensions- och försäkringsportalen 
              kan optimeras för mobila enheter. Användarna utvärderade 2-4 designförslag per tabelltyp.
            </p>
          </div>
          
          {/* Grid för metodsteg */}
          <div className="method-grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3 gap-6">
            {steps.length > 0 ? steps.map((step, index) => (
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
            )) : defaultSteps.map((step, index) => (
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
  
  const defaultResults = [
    {
      icon: "fas fa-th",
      title: "Jämförelsetabeller",
      description: "För tabeller som används för jämförelse (t.ex. fondbyte) föredrogs en komprimerad horisontell layout med fixerade rubriker.",
      stats: { value: "60%", label: "föredrog kompakt layout" }
    },
    {
      icon: "fas fa-list",
      title: "Innehållstabeller",
      description: "För tabeller som visar innehåll (t.ex. dokument, transaktioner) föredrogs en vertikal och luftig struktur med tydliga rubriker.",
      stats: { value: "80%", label: "uppskattade tydliga rubriker" }
    },
    {
      icon: "fas fa-heading",
      title: "Tydliga rubriker",
      description: "Tydliga rubriker och etiketter visade sig vara avgörande för användarnas förståelse av tabellinnehållet.",
      stats: { value: "100%", label: "bättre orientering" }
    },
    {
      icon: "fas fa-compress-arrows-alt",
      title: "Luftighet vs sammanhang",
      description: "Luftiga gränssnitt minskade kognitiv belastning men kunde skapa osäkerhet om sammanhang saknades.",
      stats: { value: "70%", label: "enklare navigering" }
    }
  ];
  
  return (
    <section id="resultat" className={`results-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultat</h2>
          <p className="section-subtitle">Vad studien visade</p>
        </div>
        
        <div className="results-summary">
          <p>
            Två huvudtyper av tabeller identifierades i undersökningen: jämförelsetabeller och innehållstabeller. 
            För varje typ föredrogs olika designlösningar beroende på användningssätt och kontext.
          </p>
        </div>
        
        <div className="results-grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4">
          {results.length > 0 ? results.map((result, index) => (
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
          )) : defaultResults.map((result, index) => (
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
            <h3>Specifika designlösningar</h3>
            <p>
              Studiedeltagarna visade varierande preferenser för olika tabelltyper:
            </p>
            <ul>
              <li><strong>Pensionsöversikt:</strong> Förslag C (luftig layout med rubriker) föredrogs.</li>
              <li><strong>Fondbyte:</strong> Förslag B (kompakt tabell med fixerade rubriker) var mest effektiv.</li>
              <li><strong>Transaktioner:</strong> Delade åsikter – rubriker ökade tydlighet men luftighet ökade läsbarhet.</li>
              <li><strong>Mina dokument:</strong> Enkel layout (A) fungerade bra vid få poster, rubriker (B) passade större informationsmängder.</li>
              <li><strong>Händelser och uppdrag:</strong> Två deltagare föredrog A (utan rubriker), tre föredrog B (med rubriker).</li>
            </ul>
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
            {reflectionPoints.length > 0 ? reflectionPoints.map((point, index) => (
              <div key={index} className="reflection-point">
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            )) : (
              <div className="reflection-point">
                <h3>Mer än bara mindre gränssnitt</h3>
                <p>
                  Att skapa mobilanpassade tabeller kräver mer än att göra innehållet mindre – det handlar om att 
                  utforma strukturer som stödjer förståelse, kontext och interaktion. Användartesterna visade att 
                  olika typer av tabeller kräver olika lösningar, och att vissa användare föredrar förenklade 
                  versioner medan andra efterfrågar mer vägledning. Designen behöver därför vara flexibel men konsekvent.
                </p>
              </div>
            )}
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
  
  const defaultPersonas = [
    {
      name: "Primär målgrupp",
      description: "Portalanvändare som använder mobil, ofta äldre eller låg-digitala personer i pensionsåldern.",
      needs: [
        "Tydlighet och enkelhet i gränssnittet",
        "Tillgänglighetsanpassad design",
        "Stöd för att förstå komplex information"
      ]
    },
    {
      name: "Sekundär målgrupp",
      description: "Utvecklingsteamet bakom portalen, som kan använda resultaten som vägledning i framtida förbättringsarbete.",
      needs: [
        "Konkreta designriktlinjer",
        "Användbarhetstestade lösningar",
        "Flexibla komponenter för olika användningsområden"
      ]
    }
  ];
  
  return (
    <section id="malgrupp" className={`target-group-section section-padding ${isVisible ? 'animate-in' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Målgrupp</h2>
          <p className="section-subtitle">Användare och deras behov</p>
        </div>
        
        <h3>Användarprofiler</h3>
        <div className="personas-container">
          {personas.length > 0 ? personas.map((persona, index) => (
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
          )) : defaultPersonas.map((persona, index) => (
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
  
  const defaultMainGoal = "Syftet var att undersöka hur befintliga tabeller i portalen kan omformas för att fungera bättre på mobil. Fokus låg på tillgänglighet, tydlighet och kontextuell förståelse, med målet att ta fram konkreta designlösningar grundade i användarnas behov.";
  
  const defaultSecondaryGoals = [
    "Identifiera och kategorisera de olika tabelltyper som används i portalen",
    "Utvärdera befintliga tabellkomponenter genom användartester",
    "Utveckla förbättrade designkoncept baserade på användarnas preferenser och behov",
    "Ta fram riktlinjer för mobilanpassning av olika tabelltyper"
  ];
  
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
              <p>{mainGoal || defaultMainGoal}</p>
            </div>
          </div>
          
          <div className="goal-group">
            <h3>Delmål</h3>
            {secondaryGoals.length > 0 ? secondaryGoals.map((goal, index) => (
              <div key={index} className="goal-item">
                <div className="goal-title">Mål {index + 1}</div>
                <div className="goal-description">{goal}</div>
              </div>
            )) : defaultSecondaryGoals.map((goal, index) => (
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
        <h2 className="summary-title">{title || "Sammanfattning av resultaten"}</h2>
        <p className="summary-subtitle">{subtitle || "De viktigaste slutsatserna från examensarbetet"}</p>
        
        <div className="summary-points">
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-th"></i>
            </div>
            <div className="point-content">
              <h3>Två typer av tabeller</h3>
              <p>Examensarbetet resulterade i två huvudsakliga designförslag: en jämförelsetabell med fixerade rubriker och komprimerad layout, samt en innehållstabell i två varianter – en med rubriker och en utan – beroende på kontext.</p>
            </div>
          </div>
          
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-user-check"></i>
            </div>
            <div className="point-content">
              <h3>Användarcentrerad design</h3>
              <p>Arbetet visar att förbättrad mobilanpassning är möjlig genom syftesdriven design och användarcentrerade tester. Resultaten bör dock valideras vidare i interaktiv kontext innan implementation.</p>
            </div>
          </div>
          
          <div className="summary-point">
            <div className="point-icon">
              <i className="fas fa-universal-access"></i>
            </div>
            <div className="point-content">
              <h3>Tillgänglighet i fokus</h3>
              <p>De utvecklade designlösningarna prioriterar tillgänglighet och användbarhet, vilket är särskilt viktigt för den primära målgruppen som ofta består av äldre eller låg-digitala användare.</p>
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
                  
                  <circle cx="410" cy="100" r="15" fill="var(--secondary-color-light)" fillOpacity="0.3" />
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