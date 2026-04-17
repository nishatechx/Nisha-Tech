import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="industries" className="py-24 relative overflow-hidden scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-secondary border border-primary/20 mb-4">
               <h4 className="text-primary font-bold uppercase tracking-wider text-[10px]">Sectors</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark">Impact Across Industries</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 text-muted mt-4 md:mt-0 font-light"
          >
            Tailored digital solutions that solve specific challenges for diverse market sectors.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INDUSTRIES.map((ind, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-96 shadow-card"
            >
              {/* Tech Scanner Animation */}
              <motion.div 
                className="absolute left-0 w-full h-[2px] bg-accent/80 shadow-[0_0_15px_#4EC3CF] z-20"
                initial={{ top: "0%", opacity: 0 }}
                whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 1 + (idx * 0.5) // Stagger scanning slightly
                }}
              />

              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex items-end p-6">
                <div className="w-full bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 relative z-30">
                  <h3 className="text-dark font-bold text-lg mb-1">{ind.name}</h3>
                  <div className="h-0.5 w-8 bg-accent group-hover:w-full transition-all duration-300 mb-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;