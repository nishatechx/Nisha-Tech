import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-background text-dark font-sans selection:bg-primary selection:text-white overflow-hidden relative">
      <ScrollProgress />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <Process />
        <CTABanner />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;