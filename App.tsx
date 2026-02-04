import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-neutral text-gray-900 font-sans selection:bg-secondary selection:text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Industries />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}

export default App;