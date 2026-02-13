import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden scroll-mt-24">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Our Expertise</h2>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Digital Capabilities</h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light">
            We provide a full spectrum of digital services designed to accelerate your business transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
             <motion.div
               key={service.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: idx * 0.1, duration: 0.5 }}
               className="glass-card rounded-2xl p-8 relative group overflow-hidden"
             >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 mb-6 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 relative z-10 shadow-lg">
                <service.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-white transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;