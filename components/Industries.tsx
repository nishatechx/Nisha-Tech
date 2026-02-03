import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-neutral scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Industries We Serve</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Tailored for Indian Sectors</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 text-gray-600 mt-4 md:mt-0"
          >
            Our solutions are adaptable and scalable, designed to meet the specific needs of various industries across India.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative rounded-xl overflow-hidden cursor-pointer h-64"
            >
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-xl">{ind.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;