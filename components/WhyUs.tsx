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
    <section id="why-us" className="py-20 bg-primary text-white relative overflow-hidden scroll-mt-24">
      {/* Abstract Shapes */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-800 rounded-full opacity-20 blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary rounded-full opacity-10 blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NISHA TECH STUDIO?</h2>
          <p className="max-w-2xl mx-auto text-blue-200">
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
                className="bg-blue-800/30 backdrop-blur-sm border border-blue-700/50 p-6 rounded-xl hover:bg-blue-800/50 transition-all text-center"
              >
                <div className="inline-flex items-center justify-center p-3 bg-secondary/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">
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