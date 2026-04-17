import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXu7LI-owiEtFLdj5e2u_gxWrLEMp90BeFBnx1TSbUWT-JQih3hyphenhyphenqzs-TPnRmnMreTdCHx5I-mFsvJzFY3m0X-kTeqTUvvMcwYVPEO7vuta1P4ydDmwbdSh6_C-5662hifO3QDQ4gesu2OirBnlCU8YJXGhsBcj8TcgKmKQCkUczxebqv3U8YUvzjJlMg/s16000/Nisha%20Tech%20Solutions%20Logo.png" 
                alt="Nisha Tech Solutions Logo" 
                className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/50 font-light">
              Your complete partner for digital solutions. We design and build powerful digital systems, websites, and marketing strategies.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 border border-white/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Company</h3>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/50 hover:text-white transition-colors font-light tracking-wide">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Solutions</h3>
            <ul className="space-y-4">
              <li className="text-sm text-white/50 hover:text-white cursor-pointer transition-colors font-light tracking-wide">Web Development</li>
              <li className="text-sm text-white/50 hover:text-white cursor-pointer transition-colors font-light tracking-wide">Software Engineering</li>
              <li className="text-sm text-white/50 hover:text-white cursor-pointer transition-colors font-light tracking-wide">ERP Systems</li>
              <li className="text-sm text-white/50 hover:text-white cursor-pointer transition-colors font-light tracking-wide">Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-[10px] uppercase tracking-[0.3em] mb-10">Contact</h3>
            <ul className="space-y-6">
              <li className="group">
                <span className="block text-white/30 text-[9px] uppercase font-bold tracking-[0.2em] mb-2">Phone</span>
                <span className="text-white font-medium group-hover:text-accent transition-colors">+91 96996 58462</span>
              </li>
              <li className="group">
                <span className="block text-white/30 text-[9px] uppercase font-bold tracking-[0.2em] mb-2">Email</span>
                <span className="text-white group-hover:text-accent transition-colors">info@nishatech.in</span>
              </li>
              <li className="group">
                <span className="block text-white/30 text-[9px] uppercase font-bold tracking-[0.2em] mb-2">Office</span>
                <span className="text-white group-hover:text-accent transition-colors">Washim, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[9px] text-white/20 uppercase tracking-[0.3em] font-bold">
          <p>
            &copy; {new Date().getFullYear()} Nisha Tech Solutions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 mt-6 md:mt-0">
             <span className="hover:text-white/40 transition-colors cursor-pointer">ISO 9001:2015 Certified Process</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;