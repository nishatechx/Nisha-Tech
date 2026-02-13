import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 relative overflow-hidden scroll-mt-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full glass-panel border border-primary/30 mb-4">
               <h4 className="text-primary font-bold uppercase tracking-wider text-[10px]">Sectors</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Impact Across Industries</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 text-slate-400 mt-4 md:mt-0 font-light"
          >
            Tailored digital solutions that solve specific challenges for diverse market sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 glass-card border-0"
            >
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              
              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-6">
                <div className="w-full glass-panel p-4 rounded-xl border border-white/10 backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{ind.name}</h3>
                  <div className="h-0.5 w-8 bg-primary group-hover:w-full transition-all duration-300 mb-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;