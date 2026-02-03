import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
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
    
    // Smooth scroll logic ensuring correct offset
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update browser history without jumping
      window.history.pushState(null, '', href);
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-primary p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className={`font-bold text-2xl tracking-tighter transition-colors duration-300 ${scrolled ? 'animate-logo-pulse' : 'text-primary lg:text-white'}`}>
              NISHA TECH STUDIO
            </span>
          </div>
          
          {/* Desktop/Laptop Menu - Visible on lg screens and up */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  scrolled ? 'text-gray-700' : 'text-gray-200'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button - Visible on md screens and down */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-gray-700' : 'text-primary lg:text-white' 
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full top-full left-0 border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;