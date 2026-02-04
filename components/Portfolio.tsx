import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-primary relative overflow-hidden scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block p-1 px-3 rounded-md bg-white/10 border border-white/10 mb-3 backdrop-blur-sm">
               <h4 className="text-secondary font-bold uppercase tracking-wider text-[10px]">Our Work</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <p className="text-gray-400 text-right md:text-left max-w-sm">
              We don't just write code; we build digital assets that generate revenue and streamline operations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl"
            >
              {/* Image Container */}
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <button className="flex items-center gap-2 text-primary bg-secondary px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Case Study <ArrowUpRight className="h-5 w-5" />
                    </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-30 bg-gray-900">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1 block">{project.category}</span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">{project.title}</h3>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                            {tag}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;