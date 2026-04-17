import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-4">Our Strength</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Technical Capabilities & Project Execution</h3>
            <p className="text-muted mb-8 leading-relaxed">
              We maintain rigorous standards in our development lifecycle to ensure every project meets the high-trust requirements of our clients.
            </p>
            
            <div className="space-y-6">
              {CAPABILITIES.map((cap, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex gap-4"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{cap.title}</h4>
                    <p className="text-muted text-sm">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-surface rounded-2xl border border-border overflow-hidden p-8">
              <div className="w-full h-full border-2 border-dashed border-primary/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted font-medium uppercase tracking-wider text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
