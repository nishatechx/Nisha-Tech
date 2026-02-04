import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-900 text-white relative overflow-hidden scroll-mt-24">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800/40 via-gray-900 to-gray-900 pointer-events-none"></div>
      
      {/* Circuit/Dot Grid */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ 
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-1 px-3 rounded-md bg-white/5 border border-white/10 mb-3">
             <h4 className="text-gray-300 font-bold uppercase tracking-wider text-[10px]">Our Expertise</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Digital Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            We provide a 360-degree approach to your business technology needs, ensuring every aspect of your digital presence works in harmony.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id} 
              variants={item}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-secondary/50 hover:bg-gray-800 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,207,0,0.1)]"
            >
              <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300 border border-secondary/20">
                <service.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;