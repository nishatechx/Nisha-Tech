import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck,
  Code2,
  FileText,
  Users,
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight min-h-[1.2em]">
            Let's <span className="text-accent">
              <Typewriter words={["Build.", "Grow.", "Automate.", "Innovate."]} delay={800} speed={100} />
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-light">
            Your complete partner for digital solutions. We design and build powerful digital systems, websites, and marketing strategies.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4 mb-10">
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

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="px-8 py-4 bg-accent text-white font-bold rounded-lg btn-hover-effect transition-all flex items-center justify-center gap-2 shadow-2xl shadow-accent/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 btn-hover-effect transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Strip */}
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-10 text-white/50">
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
              <span className="font-bold uppercase tracking-[0.2em] text-[9px]">Support</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30, rotateY: -20, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, x: 0, rotateY: -10, rotateX: 5 }}
          whileHover={{ 
            rotateY: 0, 
            rotateX: 0, 
            scale: 1.02,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block relative preserve-3d"
          style={{ perspective: 2000 }}
        >
          <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl shadow-2xl transform-gpu">
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Security', icon: ShieldCheck, value: 'High-Trust' },
                { label: 'Architecture', icon: Code2, value: 'Scalable' },
                { label: 'Compliance', icon: FileText, value: 'Verified' },
                { label: 'Support', icon: Users, value: '24/7' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-white mb-4 opacity-60" />
                  <div className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white font-bold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-[100px] -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;