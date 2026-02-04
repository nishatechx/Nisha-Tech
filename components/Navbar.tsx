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

  // Determine if the navbar should have a solid background (White)
  // This happens if the user scrolls OR if the mobile menu is open
  const showSolidNav = scrolled || isOpen;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        showSolidNav ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnn6uP1sKhluLCr0Y9aPwlyiQZPDbSsJlAyVXAe9XwVwmtOdm4WWDoO2mBohFrJY9sGrWGZZnDZnqXjcGXcPpGAQSJWSDJch-Ns9Q_d41pag3IQuYJz42kzZxsarv0qFE958ExXHQNLgKeSTntdYNvfVUE1SFMDwiM5K5qzS3JkbWDN_dzru2gF_n0KUs/s16000/nisha%20tech%20studio%20logo.png" 
              alt="NISHA TECH STUDIO" 
              className={`h-12 lg:h-14 w-auto object-contain transition-all duration-300 ${
                showSolidNav ? 'brightness-0' : ''
              }`}
            />
          </div>
          
          {/* Desktop/Laptop Menu - Visible on lg screens and up */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  showSolidNav ? 'text-primary' : 'text-gray-200'
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
                showSolidNav ? 'text-primary' : 'text-white' 
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
                className="block px-3 py-4 rounded-md text-base font-medium text-primary hover:text-secondary hover:bg-gray-50 border-b border-gray-50 last:border-0"
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