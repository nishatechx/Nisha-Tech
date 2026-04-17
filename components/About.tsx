import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden perspective-2000">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="preserve-3d"
          >
            <motion.div variants={itemVariants} className="narrative-label">Chapter 1: Our Purpose</motion.div>
            <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-muted/60 tracking-[0.3em] uppercase mb-6 backface-hidden">
              About Nisha Tech
            </motion.h2>
            
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-10 leading-[1.15] tracking-tight backface-hidden">
              Technology That <br/>
              Works for You.
            </motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-8 text-muted leading-relaxed font-light text-lg backface-hidden">
              <p>
                <span className="text-primary font-semibold">Nisha Tech Solutions</span> is a growing IT company delivering end-to-end digital solutions — from development to marketing and automation.
              </p>
              <p>
                Our goal is simple: Create solutions that are practical, scalable, and result-driven. We believe in technology that drives real business impact.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 backface-hidden">
              <h4 className="text-primary font-bold mb-8 text-sm uppercase tracking-wider">We work with:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Businesses",
                  "Educational Institutions",
                  "Organizations",
                  "Individuals with Ideas"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-primary font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 20, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative preserve-3d"
            >
               <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border group">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                    alt="Indian Tech Professional"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
               </div>
               {/* Stats Overlay */}
               <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl border border-border rounded-2xl hidden md:block backdrop-blur-sm bg-white/90">
                <div className="text-4xl font-bold text-primary mb-2 tracking-tight">Reliable</div>
                <div className="text-[10px] text-muted uppercase font-bold tracking-[0.2em]">IT Solutions Partner</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;