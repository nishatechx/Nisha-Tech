import React from 'react';
import { INDUSTRIES } from '../constants';
import { motion } from 'framer-motion';

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 relative overflow-hidden scroll-mt-24 bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Digital Network Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Updated Gradient to match other sections */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-1 px-3 rounded-md bg-white/5 border border-white/10 mb-3 backdrop-blur-sm">
               <h4 className="text-secondary font-bold uppercase tracking-wider text-[10px]">Industries We Serve</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Tailored for Indian Sectors</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 text-gray-400 mt-4 md:mt-0"
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
              className="group relative rounded-xl overflow-hidden cursor-pointer h-80 shadow-2xl border border-white/5"
            >
              <img 
                src={ind.image} 
                alt={ind.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-6">
                <div className="w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-xl mb-2">{ind.name}</h3>
                  <div className="h-1 w-12 bg-secondary group-hover:w-full transition-all duration-300 mb-2"></div>
                  <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Digital transformation for {ind.name}.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;