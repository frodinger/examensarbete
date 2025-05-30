import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import IntroductionSection from './sections/IntroductionSection';
import BackgroundSection from './sections/BackgroundSection';
import GoalSection from './sections/GoalSection';
import TargetGroupSection from './sections/TargetGroupSection';
import MethodSection from './sections/MethodSection';
import ResultsSection from './sections/ResultsSection';
import ReflectionSection from './sections/ReflectionSection';
import Footer from './components/Footer';
import './scss/main.scss';

function App() {
  // Sätt upp tillgänglighetsattribut vid komponentmontering
  useEffect(() => {
    // Sätt språkattribut på HTML-elementet
    document.documentElement.lang = 'sv';
    
    // Lägg till ARIA-landmärken när det behövs
    document.title = "Examensarbete - Forskningspresentation";
    
    // Lägg till en beskrivning för webbplatsen
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'En interaktiv presentation av examensarbete med forskningsresultat, metodik och analys.');
    }
  }, []);

  return (
    <div className="App">
      <a href="#main-content" className="skip-link" id="skip-link">
        Hoppa till innehåll
      </a>
      
      <header role="banner">
        <Navbar />
      </header>
      
      <main id="main-content" tabIndex="-1" role="main">
        <h1 className="sr-only">Examensarbete - Forskningspresentation</h1>
        <IntroductionSection />
        <BackgroundSection />
        <GoalSection />
        <TargetGroupSection />
        <MethodSection />
        <ResultsSection />
        <ReflectionSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
