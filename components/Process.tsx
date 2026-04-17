import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="process" className="py-32 relative overflow-hidden scroll-mt-24 bg-surface perspective-2000">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-24 preserve-3d"
        >
          <motion.div variants={itemVariants} className="narrative-label">Chapter 5: The Roadmap</motion.div>
          <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-muted/60 tracking-[0.3em] uppercase mb-6 backface-hidden">
            Our Workflow
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 tracking-tight backface-hidden">
            Simple Process. Powerful Results.
          </motion.h3>
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-muted text-lg font-light leading-relaxed backface-hidden">
            We follow a structured methodology to ensure every project is delivered with precision and excellence.
          </motion.p>
        </motion.div>

        <div className="relative preserve-3d">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
          
          {/* Filled Line with Animation */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-12 left-0 h-0.5 bg-primary/20 z-0"
          ></motion.div>

          {/* Moving Data Packet Animation */}
          <motion.div
             className="hidden lg:block absolute top-12 left-0 h-1 w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10 blur-[2px]"
             animate={{ left: ["-10%", "110%"] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10 preserve-3d"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative bg-white p-10 pt-14 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-500 shadow-card hover:shadow-2xl hover:shadow-primary/5 border border-transparent hover:border-primary/10 backface-hidden"
              >
                {/* Number Overlay */}
                <div className="absolute top-4 right-6 text-6xl font-heading font-black text-primary/[0.03] select-none group-hover:text-primary/[0.07] transition-colors duration-500">
                  {index + 1}
                </div>
                
                {/* Number Orb */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-4 border-surface shadow-xl flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-500 z-10">
                    <span className="text-lg font-bold text-primary">{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 tracking-tight">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-light">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;