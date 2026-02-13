import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 pt-20 pb-10 relative border-t border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="mb-6">
               <img 
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPUPRZRHNJHMixNwd9_eVBwuDKXNNw5sMUowScagq8XN9tf-nQjL7E_jedkm40sPWXOxKrXsRLxpt4Z5iuumQhvfJgOHzCzZZop0P5M9_5ITqKChmlyL2bvzIA8Atnxrt1G-84gg7vCirAQ_RkXyCoz6GZpqWIYeZji8bPShE7plCJjfkYN39reeVgO7Q/s16000/Nisha%20Tech%20Solutions.png" 
                 alt="Nisha Tech Solutions" 
                 className="h-12 w-auto object-contain"
               />
            </div>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Pioneering digital transformation for Indian enterprises. We build the technology that powers the future.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full glass-panel flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.label} className="text-sm">
                  <a href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li className="text-sm hover:text-primary cursor-pointer transition-colors">Enterprise Software</li>
              <li className="text-sm hover:text-primary cursor-pointer transition-colors">Cloud Architecture</li>
              <li className="text-sm hover:text-primary cursor-pointer transition-colors">AI & Automation</li>
              <li className="text-sm hover:text-primary cursor-pointer transition-colors">Digital Strategy</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="text-sm">
                <span className="block text-slate-500 text-xs mb-1">Phone</span>
                <span className="text-white">9699658462</span>
              </li>
              <li className="text-sm">
                <span className="block text-slate-500 text-xs mb-1">Email</span>
                <span className="text-white">nishatechx@gmail.com</span>
              </li>
              <li className="text-sm">
                <span className="block text-slate-500 text-xs mb-1">HQ</span>
                <span className="text-white">Washim, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Nisha Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
             <span>Operational Status: Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;