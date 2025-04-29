import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import DataSection from './sections/DataSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skip-link">Hoppa till innehåll</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <DataSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
