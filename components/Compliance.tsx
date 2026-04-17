import React from 'react';
import { motion } from 'framer-motion';
import { CREDENTIALS } from '../constants';
import { FileCheck, ShieldCheck } from 'lucide-react';

const Compliance: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="compliance" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Trust & Verification</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Company Credentials</h3>
          <p className="text-muted max-w-2xl mx-auto">
            Nisha Tech Solutions is a fully registered and compliant entity, meeting all necessary legal and professional requirements for government and enterprise projects.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CREDENTIALS.map((cred, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 border border-border flex items-center justify-between group hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <FileCheck className="w-6 h-6 text-primary group-hover:text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{cred.title}</h4>
                  <p className="text-xs text-muted uppercase tracking-wider">{cred.status}</p>
                </div>
              </div>
              <ShieldCheck className="w-5 h-5 text-success" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 p-8 bg-primary text-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1">Secure & Compliant</h4>
              <p className="text-white/70 text-sm">We adhere to all data protection and privacy regulations.</p>
            </div>
          </div>
          <a href="#contact" className="px-8 py-3 bg-accent text-white font-bold rounded hover:bg-opacity-90 transition-colors">
            Request Full Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
