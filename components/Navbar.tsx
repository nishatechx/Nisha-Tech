import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

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
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-primary/80 backdrop-blur-md shadow-2xl py-3 border-b border-white/10' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
             <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXu7LI-owiEtFLdj5e2u_gxWrLEMp90BeFBnx1TSbUWT-JQih3hyphenhyphenqzs-TPnRmnMreTdCHx5I-mFsvJzFY3m0X-kTeqTUvvMcwYVPEO7vuta1P4ydDmwbdSh6_C-5662hifO3QDQ4gesu2OirBnlCU8YJXGhsBcj8TcgKmKQCkUczxebqv3U8YUvzjJlMg/s16000/Nisha%20Tech%20Solutions%20Logo.png" 
                alt="Nisha Tech Solutions Logo" 
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
             />
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] transition-all text-white/70 hover:text-white relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
             <motion.a 
               href="#contact" 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
               className="px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase tracking-[0.2em] transition-all bg-accent text-white hover:bg-opacity-90 btn-hover-effect shadow-xl shadow-accent/20"
             >
               Contact Us
             </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-primary border-b border-white/10 lg:hidden py-6 px-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium text-white/80 hover:text-white transition-colors p-2"
                >
                  {item.label}
                </a>
              ))}
               <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="mt-4 block w-full py-4 rounded-xl bg-accent text-center text-white font-bold shadow-lg">
                 Let's Talk
               </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;