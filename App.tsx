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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black overflow-hidden relative">
      {/* Global Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] mix-blend-screen opacity-20" />
      </div>

      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
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