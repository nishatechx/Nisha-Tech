import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
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
    <section id="why-us" className="py-24 bg-white border-t border-border perspective-2000">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-20 preserve-3d"
        >
          <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase mb-6 backface-hidden">
            Why Choose Us
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 tracking-tight backface-hidden">
            Reliable. Scalable. Result-Oriented.
          </motion.h3>
          <motion.p variants={itemVariants} className="text-muted max-w-2xl mx-auto text-lg font-light backface-hidden">
            We provide end-to-end execution and custom solutions using modern technology at affordable pricing with dedicated support.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 preserve-3d"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="p-10 border border-border bg-surface hover:border-primary transition-all duration-500 rounded-2xl group hover:shadow-2xl hover:shadow-primary/5 backface-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500">
                  <Icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-bold mb-4 text-primary tracking-tight">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;