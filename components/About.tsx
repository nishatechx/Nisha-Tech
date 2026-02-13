import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden scroll-mt-24">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative perspective-1000"
          >
            {/* Glass Card Container */}
            <div className="relative rounded-2xl p-2 glass-panel shadow-[0_0_50px_rgba(250,204,21,0.1)]">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
            
            {/* Floating Glass Stat */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 glass-card p-6 rounded-2xl border border-white/10 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 text-black">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold text-white">5+</p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">About Us</h2>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
              Strategy. Design. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Technology.</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light mb-10">
              <p>
                <span className="text-white font-medium">Nisha Tech Solutions</span> is a creative-technology studio built to help businesses grow in a fast-moving digital world ⚡
              </p>
              <p>
                We work at the intersection of strategy, design, and technology to create solutions that don’t just look good, but perform. Our services include digital marketing, website and software development, content creation, and business automation — all designed to improve visibility, efficiency, and scalability.
              </p>
              <p>
                At Nisha Tech Solutions, technology is not an expense — it’s an energy that powers growth, innovation, and sustainability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['End-to-End Digital Solutions', 'Indian Market Understanding', 'Technology + Strategy', 'Long-term Partnership'].map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg glass-panel hover:bg-white/5 transition-colors border border-white/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#FACC15]"></div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;