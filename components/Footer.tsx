import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnn6uP1sKhluLCr0Y9aPwlyiQZPDbSsJlAyVXAe9XwVwmtOdm4WWDoO2mBohFrJY9sGrWGZZnDZnqXjcGXcPpGAQSJWSDJch-Ns9Q_d41pag3IQuYJz42kzZxsarv0qFE958ExXHQNLgKeSTntdYNvfVUE1SFMDwiM5K5qzS3JkbWDN_dzru2gF_n0KUs/s16000/nisha%20tech%20studio%20logo.png" 
                alt="NISHA TECH STUDIO" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Empowering Indian businesses with cutting-edge digital and automation solutions. We bridge the gap between technology and growth.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-secondary transition-colors cursor-pointer"><Facebook className="h-5 w-5" /></span>
              <span className="text-gray-400 hover:text-secondary transition-colors cursor-pointer"><Twitter className="h-5 w-5" /></span>
              <span className="text-gray-400 hover:text-secondary transition-colors cursor-pointer"><Instagram className="h-5 w-5" /></span>
              <span className="text-gray-400 hover:text-secondary transition-colors cursor-pointer"><Linkedin className="h-5 w-5" /></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="text-sm">
                  <a href={item.href} className="text-gray-400 hover:text-secondary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer">Digital Marketing</li>
              <li className="text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer">Web Development</li>
              <li className="text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer">Software Solutions</li>
              <li className="text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer">Business Automation</li>
              <li className="text-sm text-gray-400 hover:text-secondary transition-colors cursor-pointer">Tech Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Phone</span>
                <span className="text-gray-300 hover:text-secondary transition-colors">9699658462</span>
              </li>
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Email</span>
                <span className="text-gray-300 hover:text-secondary transition-colors">nishatechx@gmail.com</span>
              </li>
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Address</span>
                <span className="text-gray-300">Civil Line, Washim - 444505 Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NISHA TECH STUDIO. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span className="w-2 h-2 rounded-full bg-accent"></span>
             <span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Made for Indian Businesses</span>
             <span className="w-2 h-2 rounded-full bg-secondary"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;