import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center ${scrolled ? 'py-4' : 'py-6'}`}
    >
      <div className={`
        relative px-6 rounded-full transition-all duration-500
        ${scrolled 
          ? 'w-[90%] max-w-7xl glass-panel shadow-glass border border-white/10 bg-black/40' 
          : 'w-full max-w-7xl bg-transparent border-transparent'
        }
      `}>
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             <img 
               src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUPRZRHNJHMixNwd9_eVBwuDKXNNw5sMUowScagq8XN9tf-nQjL7E_jedkm40sPWXOxKrXsRLxpt4Z5iuumQhvfJgOHzCzZZop0P5M9_5ITqKChmlyL2bvzIA8Atnxrt1G-84gg7vCirAQ_RkXyCoz6GZpqWIYeZji8bPShE7plCJjfkYN39reeVgO7Q/s16000/Nisha%20Tech%20Solutions.png" 
               alt="Nisha Tech Solutions" 
               className="h-12 w-auto object-contain"
             />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-primary hover:bg-white/5 transition-all relative group overflow-hidden"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Call to Action (Desktop) */}
          <div className="hidden lg:block">
             <a href="#contact" className="px-5 py-2 rounded-full bg-primary hover:bg-white text-black text-sm font-bold transition-all shadow-glow hover:shadow-white/20">
               Get Started
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] glass-panel rounded-2xl p-4 lg:hidden border border-white/10 z-50 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-primary hover:pl-6 transition-all"
              >
                {item.label}
              </a>
            ))}
             <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="mt-4 block px-4 py-3 rounded-xl bg-primary text-center text-black font-bold shadow-glow">
               Get Started
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;