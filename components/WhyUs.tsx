import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { ShieldCheck, TrendingUp, Wallet, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [ShieldCheck, TrendingUp, Wallet, Headphones];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-primary text-white relative overflow-hidden scroll-mt-24">
      {/* Background Gradients & Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-primary to-primary pointer-events-none"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Animated Abstract Shapes */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full blur-3xl pointer-events-none"
      ></motion.div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary rounded-full blur-[100px] pointer-events-none"
      ></motion.div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/5 rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-16 h-16 border border-secondary/20 rounded-lg transform rotate-45 opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-secondary/40 rounded-full opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NISHA TECH STUDIO?</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We combine global standards with local understanding to deliver solutions that actually work for Indian businesses.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index} 
                variants={itemVariant}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all text-center group hover:border-secondary/30 relative overflow-hidden"
              >
                 {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center p-3 bg-secondary/10 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors shadow-[0_0_15px_rgba(255,207,0,0.1)]">
                    <Icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;