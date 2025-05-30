import React, { useState, useEffect } from 'react';
import './App.scss';

// Importera delade komponenter
import { 
  Navbar, 
  Footer,
  ScrollToTop,
  ScrollIndicator
} from './components/SharedComponents';

// Importera sektionskomponenter
import { 
  HeroSection,
  IntroductionSection,
  BackgroundSection,
  MethodSection,
  ResultsSection,
  ReflectionSection,
  TargetGroupSection,
  GoalSection,
  CtaSection
} from './sections/SectionComponents';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Hantera scroll-event för navbar och aktiv sektion
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Uppdatera om navbar är scrollad
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Uppdatera aktiv sektion baserat på scroll-position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Lite offset för att göra detektion bättre
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Exempel-data för komponenter
  const heroData = {
    title: "Mobilanpassning av tabeller",
    subtitle: "Ett examensarbete om hur tabeller i en pensions- och försäkringsportal kan optimeras för mobila enheter",
    buttons: [
      { text: "Läs mer", url: "#introduktion", primary: true },
      { text: "Ladda ner rapport", url: "/assets/examensarbete.pdf", primary: false }
    ]
  };

  const introData = {
    description: "Det här examensarbetet undersöker hur tabeller i en digital pensions- och försäkringsportal kan optimeras för mobila enheter för att förbättra <strong>tillgänglighet, tydlighet och användarupplevelse</strong>. I takt med att mobilanvändandet ökar blir det allt tydligare att traditionella, desktop-anpassade tabellösningar inte fungerar optimalt på små skärmar—särskilt när det gäller att presentera tät och strukturerad information."
  };

  const timelineEvents = [
    { year: "2020", description: "Förstudie kring mobilanvändning inom finansiella tjänster", icon: "fas fa-mobile-alt" },
    { year: "2021", description: "Ökning av mobilanvändare inom pensions- och försäkringstjänster", icon: "fas fa-chart-line" },
    { year: "2022", description: "Identifiering av problem med tabellpresentation på mobila enheter", icon: "fas fa-table" },
    { year: "2023", description: "Praktikperiod på techbyrån Meepo med fokus på mobilanpassning", icon: "fas fa-laptop-code" }
  ];

  const methodSteps = [
    {
      title: "Heuristisk utvärdering",
      description: "Granskning av befintliga tabellösningar i portalen enligt etablerade användbarhetsprinciper.",
      tools: ["Nielsenss heuristiker", "Expertutvärdering", "Problemidentifiering"]
    },
    {
      title: "Preferenstester",
      description: "Användartester för att kartlägga användarnas preferenser kring olika tabellpresentationer på mobila enheter.",
      tools: ["A/B-testning", "Användarintervjuer", "Preferensanalys"]
    },
    {
      title: "Tematisk analys",
      description: "Analys av insamlade data för att identifiera återkommande teman och användarbehov.",
      tools: ["Kodning", "Mönsterigenkänning", "Tematisering"]
    },
    {
      title: "Prototypframtagning",
      description: "Iterativ design av förbättrade tabellösningar baserade på analysresultaten.",
      tools: ["Designskisser", "Interaktiva prototyper", "Användartestning"]
    },
    {
      title: "Konceptutveckling",
      description: "Utveckling av slutgiltiga designkoncept anpassade efter olika typer av tabeller och användningsområden.",
      tools: ["Design systems", "Responsiv design", "Tillgänglighetsprinciper"]
    }
  ];

  const resultsData = [
    {
      title: "Tydligare struktur",
      description: "Omstrukturering av tabellinnehåll med förbättrad gruppering och visuell hierarki för små skärmar.",
      icon: "fas fa-sitemap",
      stats: { value: "87%", label: "förbättrad förståelse" }
    },
    {
      title: "Funktionella tabelltyper",
      description: "Kategorisering av tabeller i funktionella typer: jämförelsetabeller och innehållstabeller.",
      icon: "fas fa-th-list",
      stats: { value: "92%", label: "ökad effektivitet" }
    },
    {
      title: "Interaktivitet",
      description: "Implementering av interaktiva element som fällbara sektioner och kontextuella detaljvyer.",
      icon: "fas fa-hand-pointer",
      stats: { value: "78%", label: "bättre användbarhet" }
    },
    {
      title: "Visuell återkoppling",
      description: "Förbättrad visuell feedback som tydligt visar systemstatus och interaktionsmöjligheter.",
      icon: "fas fa-eye",
      stats: { value: "65%", label: "minskad kognitiv belastning" }
    }
  ];

  const reflectionData = {
    quote: {
      text: "Mobilanpassad tabellösning kräver mer än bara visuell skalning—det handlar om att omstrukturera innehållet med hänsyn till användarens kontext och uppgift.",
      author: "Examensarbete 2023"
    },
    reflectionPoints: [
      {
        title: "Balans mellan överblick och detaljer",
        description: "En central utmaning var att hitta rätt balans mellan att ge användaren överblick över tabelldata och samtidigt visa tillräckligt med detaljer på den begränsade skärmytan."
      },
      {
        title: "Kontextuell relevans",
        description: "Resultaten visade att tabellinnehållets presentation bör anpassas efter användningskontexten och den specifika uppgift användaren försöker utföra."
      },
      {
        title: "Prioritering av information",
        description: "Tydlig prioritering av information visade sig vara avgörande för att skapa en användbar mobilupplevelse med komplex tabelldata."
      },
      {
        title: "Fortsatt utvecklingsbehov",
        description: "Det finns behov av fortsatt forskning kring hur komplexa datastrukturer kan presenteras på mobila enheter, särskilt för specialiserade domäner som pension och försäkring."
      }
    ]
  };

  const personasData = [
    {
      name: "Johan",
      age: 42,
      description: "Johan är en yrkesverksam person som snabbt vill kunna kontrollera sina pensionsuppgifter i farten på sin telefon.",
      needs: [
        "Snabb överblick över pensionssparande",
        "Lättillgänglig jämförelse mellan fonder",
        "Tydlig visualisering av komplex information"
      ]
    },
    {
      name: "Lisa",
      age: 58,
      description: "Lisa närmar sig pensionsåldern och vill kunna göra detaljerade analyser av sina försäkringar på sin iPad.",
      needs: [
        "Detaljerad information om försäkringsvillkor",
        "Möjlighet att utforska olika scenarion",
        "Anpassningsbar visning efter behov"
      ]
    }
  ];

  const accessibilityStats = [
    { value: "68%", label: "av pensionsportalsbesöken sker via mobila enheter", icon: "fas fa-mobile-alt" },
    { value: "74%", label: "av användarna upplever svårigheter med tabeller på små skärmar", icon: "fas fa-exclamation-triangle" },
    { value: "42%", label: "ökning av användarnöjdhet med optimerade mobiltabeller", icon: "fas fa-smile" },
    { value: "85%", label: "förbättrad uppgiftslösning med kontextanpassade tabelldesigner", icon: "fas fa-tasks" }
  ];

  const goalData = {
    mainGoal: "Utveckla designkoncept för hur tabeller i en pensions- och försäkringsportal kan optimeras för mobila enheter för att förbättra tillgänglighet, tydlighet och användarupplevelse.",
    secondaryGoals: [
      "Identifiera de specifika utmaningar som användare möter när de interagerar med tabeller på mobila enheter.",
      "Utvärdera och kategorisera olika typer av tabeller baserat på deras syfte och användningsområde.",
      "Utveckla designlösningar anpassade efter olika tabelltyper och användarbehov.",
      "Testa och utvärdera designlösningarna genom användarcentrerade metoder.",
      "Formulera designprinciper för mobilanpassade tabeller inom finanssektorn."
    ]
  };

  const summaryData = {
    title: "Sammanfattning av examensarbetet",
    subtitle: "Detta examensarbete visar hur mobilanpassning av tabeller kan förbättra användarupplevelsen inom pensions- och försäkringssektorn och bidra till mer tillgängliga digitala tjänster."
  };

  return (
    <div className="App">
      <Navbar transparent={!scrolled} activeSection={activeSection} />
      
      <main className="main-content">
        <HeroSection {...heroData} />
        <IntroductionSection {...introData} />
        <BackgroundSection timelineEvents={timelineEvents} />
        <MethodSection steps={methodSteps} />
        <ResultsSection results={resultsData} />
        <ReflectionSection {...reflectionData} />
        <TargetGroupSection personas={personasData} stats={accessibilityStats} />
        <GoalSection {...goalData} />
        <CtaSection {...summaryData} />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
