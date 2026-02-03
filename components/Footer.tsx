import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-secondary" />
              <span className="font-bold text-2xl text-white tracking-tighter">NISHA TECH STUDIO</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Empowering Indian businesses with cutting-edge digital and automation solutions. We bridge the gap between technology and growth.
            </p>
            <div className="flex space-x-4">
              <span className="text-gray-400"><Facebook className="h-5 w-5" /></span>
              <span className="text-gray-400"><Twitter className="h-5 w-5" /></span>
              <span className="text-gray-400"><Instagram className="h-5 w-5" /></span>
              <span className="text-gray-400"><Linkedin className="h-5 w-5" /></span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className="text-sm">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Digital Marketing</li>
              <li className="text-sm">Web Development</li>
              <li className="text-sm">Software Solutions</li>
              <li className="text-sm">Business Automation</li>
              <li className="text-sm">Tech Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Phone</span>
                9699658462
              </li>
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Email</span>
                nishatechx@gmail.com
              </li>
              <li className="text-sm">
                <span className="block text-gray-500 text-xs uppercase mb-1">Address</span>
                Civil Line, Washim - 444505 Maharashtra
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} NISHA TECH STUDIO. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span className="w-2 h-2 rounded-full bg-green-500"></span>
             <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Made for Indian Businesses</span>
             <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;