import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden scroll-mt-24 bg-black">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Engineering Excellence</h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            Our proven methodology ensures transparency, velocity, and quality.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 z-0"></div>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-12 left-0 h-0.5 bg-gradient-to-r from-primary via-white to-primary z-0 shadow-neon"
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative glass-card p-6 pt-10 rounded-2xl text-center group hover:-translate-y-2"
              >
                {/* Number Orb */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:shadow-glow transition-all duration-300 z-10">
                    <span className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 mt-4">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;