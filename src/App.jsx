import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
import Certificates from './components/Certificates';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    if (!preloaderComplete || !window.location.hash) return;

    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView({ behavior: 'smooth' });
  }, [preloaderComplete]);

  if (showComingSoon) {
    return <ComingSoon onBack={() => setShowComingSoon(false)} />;
  }

  return (
    <main className="page-shell">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero onPreloadComplete={() => setPreloaderComplete(true)} />

        {preloaderComplete && (
          <div className="animate-fade-in-up">
            <Navbar />
            <About />
            <Services />
            <Project onCtaClick={() => setShowComingSoon(true)} />
            <Certificates />
            <ContactSection />
            <Footer />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
