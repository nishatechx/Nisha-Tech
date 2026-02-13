import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { ShieldCheck, TrendingUp, Wallet, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [ShieldCheck, TrendingUp, Wallet, Headphones];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-black relative overflow-hidden scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Why Partner With Us?</h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            We deliver more than code. We deliver certainty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-primary/30"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary transition-all duration-300 shadow-glow">
                    <Icon className="h-7 w-7 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm text-center leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;