import React from 'react';
import { motion } from 'framer-motion';
import { GOV_SOLUTIONS } from '../constants';

const GovSolutions: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="government" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Institutional Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Government & Institutional Solutions</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Dedicated technology solutions designed to support public sector initiatives and institutional digital transformation.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {GOV_SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card-professional flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{solution.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GovSolutions;
