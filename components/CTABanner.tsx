import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-center lg:text-left"
          >
            <h2 className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase mb-6">Work With Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 tracking-tight leading-[1.15]">
              Turn your ideas into <br/>
              real digital solutions.
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed">
              Whether you’re a startup, institution, or individual — we help you build something impactful together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-accent text-white font-bold rounded-2xl btn-hover-effect transition-all shadow-2xl shadow-accent/20 group"
            >
              Let’s build something impactful
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
