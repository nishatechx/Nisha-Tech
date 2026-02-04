import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Modern Office Architecture" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900/90"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiASI07fl6T1RNy377VETtHUnrZSCV-XB6k7_4PRAeA6vUK0gugoDN5uFQ0QxgQpmC8bWLDgFapJAmmxyUYLY06hmox_zK_aN6942bEpEkSqdolye5QPyBSLzSJ9x3Uul1DfbrJWbRn70XKzwqH-rJVBo7EzeHTKR1ywFLmUwa-SZlnDvEjY688JAoxIwM/s16000/about.png" 
                alt="Team Collaboration" 
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -right-6 bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-700 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-700/50 p-3 rounded-full border border-gray-600">
                  <CheckCircle2 className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">5+ Years</p>
                  <p className="text-sm text-gray-400">Of Innovation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-10 bg-secondary rounded-full"></div>
                <h4 className="text-secondary font-bold uppercase tracking-wider text-sm">About NISHA TECH STUDIO</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Strategy. Design. Technology.</h2>
            
            <div className="space-y-5 text-gray-300 leading-relaxed mb-10 text-lg font-light">
              <p>
                Nisha Tech Studio is a <span className="text-white font-medium">creative-technology studio</span> built to help businesses grow in a fast-moving digital world ⚡
              </p>
              <p>
                We work at the intersection of strategy, design, and technology to create solutions that don’t just look good, but perform. Our services include digital marketing, website and software development, content creation, and business automation — all designed to improve visibility, efficiency, and scalability.
              </p>
              <p className="font-medium text-white border-l-4 border-secondary pl-4 bg-white/5 py-3 pr-2 rounded-r-lg">
                At Nisha Tech Studio, technology is not an expense — it’s an energy that powers growth, innovation, and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {['End-to-End Digital Solutions', 'Indian Market Understanding', 'Technology + Strategy', 'Long-term Partnership'].map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;