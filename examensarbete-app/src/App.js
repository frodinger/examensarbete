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
    title: "Tillgänglig webbdesign för alla",
    subtitle: "Ett examensarbete om hur moderna webbapplikationer kan göras mer tillgängliga och användbara",
    buttons: [
      { text: "Läs mer", url: "#introduktion", primary: true },
      { text: "Ladda ner rapport", url: "/assets/examensarbete.pdf", primary: false }
    ]
  };

  const introData = {
    description: "Detta examensarbete undersöker hur moderna webbapplikationer kan designas och utvecklas för att vara tillgängliga för <strong>alla användare</strong>, oavsett funktionsvariation. Genom att kombinera användarcentrerad design med tekniska lösningar har vi skapat riktlinjer för inkluderande digitala upplevelser."
  };

  const timelineEvents = [
    { year: "2018", description: "WCAG 2.1 publiceras med uppdaterade riktlinjer", icon: "fas fa-file-alt" },
    { year: "2019", description: "EU:s tillgänglighetsdirektiv träder i kraft", icon: "fas fa-gavel" },
    { year: "2020", description: "Svenska myndigheter måste följa tillgänglighetskraven", icon: "fas fa-university" },
    { year: "2022", description: "Nya studier visar fortsatta brister i webbapplikationer", icon: "fas fa-chart-bar" }
  ];

  const methodSteps = [
    {
      title: "Litteraturstudie",
      description: "Genomgång av tidigare forskning inom tillgänglighet och användarupplevelse.",
      tools: ["Akademiska databaser", "Google Scholar", "Research Gate"]
    },
    {
      title: "Användarintervjuer",
      description: "Intervjuer med personer med olika funktionsvariationer om deras digitala vanor.",
      tools: ["Intervjuguide", "Inspelningsutrustning", "Transkribering"]
    },
    {
      title: "Prototyputveckling",
      description: "Skapande av interaktiva prototyper baserade på designriktlinjer för tillgänglighet.",
      tools: ["Figma", "Adobe XD", "HTML/CSS/JS"]
    },
    {
      title: "Användartester",
      description: "Testning av prototyperna med representativa användare.",
      tools: ["Skärmläsare", "Tangentbordsnavigering", "Ögonrörelsespårning"]
    },
    {
      title: "Analys och rekommendationer",
      description: "Sammanställning av resultat och utformning av designriktlinjer.",
      tools: ["Dataanalys", "Mönsterigenkänning", "Rapportskrivning"]
    }
  ];

  const resultsData = [
    {
      title: "Förbättrad skärmläsarkompatibilitet",
      description: "Implementering av ARIA-attribut och semantisk HTML förbättrade skärmläsarkompatibiliteten.",
      icon: "fas fa-universal-access",
      stats: { value: "87%", label: "förbättring" }
    },
    {
      title: "Ökad tangentbordsnavigering",
      description: "Optimerad fokushantering gjorde navigering utan mus betydligt enklare.",
      icon: "fas fa-keyboard",
      stats: { value: "92%", label: "effektivitet" }
    },
    {
      title: "Bättre färgkontrast",
      description: "Anpassade färgpaletter som uppfyller WCAG AAA-kraven för kontrast.",
      icon: "fas fa-adjust",
      stats: { value: "4.8:1", label: "kontrastförhållande" }
    },
    {
      title: "Responsiv design",
      description: "Förbättrad upplevelse på alla enheter, från smartphones till stora skärmar.",
      icon: "fas fa-mobile-alt",
      stats: { value: "100%", label: "kompatibilitet" }
    }
  ];

  const reflectionData = {
    quote: {
      text: "Tillgänglighet handlar inte bara om att uppfylla krav, utan om att skapa digitala upplevelser som fungerar för alla.",
      author: "Examensarbete 2023"
    },
    reflectionPoints: [
      {
        title: "Tillgänglighet från start",
        description: "Att inkludera tillgänglighet från projektets början var avgörande för framgång, istället för att försöka implementera det i efterhand."
      },
      {
        title: "Användarcentrerad process",
        description: "Den användarcentrerade designprocessen gav värdefulla insikter som inte hade upptäckts genom enbart teoretisk research."
      },
      {
        title: "Balans mellan estetik och funktion",
        description: "Det är möjligt att skapa visuellt tilltalande design som samtidigt är fullt tillgänglig, dessa aspekter står inte i motsats till varandra."
      },
      {
        title: "Utbildningsbehov",
        description: "Det finns ett fortsatt behov av utbildning kring tillgänglig design bland utvecklare och designers."
      }
    ]
  };

  const personasData = [
    {
      name: "Erik",
      age: 35,
      description: "Erik har synnedsättning och använder skärmläsare för att ta del av webbinnehåll.",
      needs: [
        "Semantisk HTML-struktur",
        "Beskrivande alt-texter för bilder",
        "Konsekvent tangentbordsnavigering"
      ]
    },
    {
      name: "Maria",
      age: 62,
      description: "Maria har artrit, vilket gör det svårt att använda mus med precision.",
      needs: [
        "Tillräckligt stora klickytor",
        "Enkel tangentbordsnavigering",
        "Tydlig visuell feedback vid fokus"
      ]
    }
  ];

  const accessibilityStats = [
    { value: "15%", label: "av befolkningen har någon form av funktionsnedsättning", icon: "fas fa-users" },
    { value: "96%", label: "av webbplatser har tillgänglighetsproblem", icon: "fas fa-exclamation-triangle" },
    { value: "20%", label: "ökning av konverteringar med tillgänglig design", icon: "fas fa-chart-line" },
    { value: "83%", label: "av användare med funktionsnedsättningar har lämnat en webbplats p.g.a. tillgänglighetsproblem", icon: "fas fa-sign-out-alt" }
  ];

  const goalData = {
    mainGoal: "Utveckla riktlinjer för hur moderna webbapplikationer kan designas och utvecklas för att vara tillgängliga för alla användare, oavsett funktionsvariation.",
    secondaryGoals: [
      "Identifiera de vanligaste tillgänglighetsutmaningarna i moderna webbapplikationer.",
      "Undersöka hur WCAG 2.1 kan implementeras i praktiken med moderna ramverk.",
      "Skapa en prototyp som demonstrerar tillgängliga designmönster.",
      "Utvärdera prototypens användbarhet med olika användargrupper.",
      "Formulera konkreta rekommendationer för utvecklare och designers."
    ]
  };

  const summaryData = {
    title: "Sammanfattning av examensarbetet",
    subtitle: "Detta examensarbete visar hur tillgänglig webbdesign kan implementeras i moderna webbapplikationer och bidra till en mer inkluderande digital värld."
  };

  return (
    <div className="App">
      <ScrollIndicator />
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
