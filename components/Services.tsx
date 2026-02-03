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
    <section id="services" className="py-20 bg-neutral scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Our Expertise</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Complete Digital Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
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
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-100 group"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
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