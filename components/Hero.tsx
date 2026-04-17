import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2,
  Layers,
  Cpu
} from 'lucide-react';
import NetworkBackground from './NetworkBackground';
import Typewriter from './Typewriter';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-40 pb-20"
    >
      {/* Network Animation Background */}
      <NetworkBackground />

      {/* Subtle Moving Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/30 to-transparent rounded-full blur-[120px]"
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.4em]">The Digital Journey Begins</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight min-h-[1.2em]">
            Let's <span className="text-accent">
              <Typewriter words={["Build.", "Grow.", "Automate.", "Innovate."]} delay={800} speed={100} />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg lg:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Your complete partner for digital solutions. We design and build powerful digital systems, websites, and marketing strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {[
              "Websites & Software",
              "Digital Marketing",
              "Automation & Systems"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="w-5 h-5 text-accent opacity-80" />
                <span className="font-medium text-sm tracking-wide">{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-10 py-5 bg-accent text-white font-bold rounded-lg btn-hover-effect transition-all flex items-center justify-center gap-2 shadow-2xl shadow-accent/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="px-10 py-5 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 btn-hover-effect transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Strip */}
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-10 text-white/50">
            <div className="flex items-center gap-2.5 group">
              <ShieldCheck className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
              <span className="font-bold uppercase tracking-[0.2em] text-[9px]">Secure</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <Layers className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
              <span className="font-bold uppercase tracking-[0.2em] text-[9px]">Scalable</span>
            </div>
            <div className="flex items-center gap-2.5 group">
              <Cpu className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors" />
              <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;