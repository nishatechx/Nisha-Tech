import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden scroll-mt-24 bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology Circuit Board" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900/90"></div>
      </div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-secondary/10 border border-secondary/20 mb-4 backdrop-blur-sm">
             <h4 className="text-secondary font-bold uppercase tracking-wider text-xs">Workflow</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            A precise, transparent engineering process from concept to deployment.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-0 left-0 h-0.5 bg-gradient-to-r from-white/5 via-secondary to-white/5 -translate-y-1/2 z-0"
          ></motion.div>

           {/* Mobile Connector Line */}
           <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/5 via-secondary to-white/5 -translate-x-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative bg-white/5 backdrop-blur-md p-6 pt-12 rounded-xl border border-white/10 hover:border-secondary/50 transition-all duration-300 text-center group hover:-translate-y-2 hover:bg-white/10"
              >
                {/* Number Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-xl group-hover:border-secondary transition-all duration-300 z-10">
                    <span className="text-xl font-bold text-gray-400 group-hover:text-secondary transition-colors font-mono">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 mt-4 group-hover:text-secondary transition-colors">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;