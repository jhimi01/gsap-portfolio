import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import CustomCursor from './components/CustomCursor';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <CustomCursor />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="app-container app-glass">
        {!introFinished && <Intro onComplete={() => setIntroFinished(true)} />}
        {/* <Navbar /> */}
        <main>
        <Hero runAnimation={introFinished} onOpenMenu={() => setIsMenuOpen(true)} />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
