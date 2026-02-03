import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const WORDS = ["Businesses", "Startups", "NGOs", "Organizations", "Institutions", "Schools", "Colleges", "MSMEs"];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    let particles: {x: number, y: number, vx: number, vy: number}[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 12000), 100);

    for(let i=0; i<particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillStyle = 'rgba(249, 115, 22, 0.5)'; // Secondary orange color

      for(let i=0; i<particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for(let j=i+1; j<particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx*dx + dy*dy);

          if(dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
          alt="Modern Indian Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80"></div>
      </div>

      {/* Canvas Layer for Network Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-1 mb-4 border border-secondary/50 rounded-full bg-secondary/10 backdrop-blur-sm"
          >
            <span className="text-secondary font-semibold text-sm tracking-wide uppercase">Trusted by 100+ Indian Businesses</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            <span className="block sm:inline">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-transparent bg-clip-text animate-gradient-x"
              >
                Empowering Indian
              </motion.span>{' '}
              <span className="inline-flex flex-col h-[1.1em] overflow-hidden align-bottom min-w-[150px] sm:min-w-[280px] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[index]}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-transparent bg-clip-text animate-gradient-x block"
                  >
                    {WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            {' '}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-white inline-block"
            >
              with
            </motion.span>{' '}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 text-transparent bg-clip-text animate-gradient-x block sm:inline pb-1"
            >
              Digital & Automation Solutions
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg"
          >
            From result-driven marketing to smart business automation — we build the technology that helps your business grow in the digital era.
          </motion.p>
        </motion.div>
      </div>
      
      {/* Decorative Gradient at bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10"
      ></motion.div>

      {/* Scroll Down Indicator - Arrow */}
      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase group-hover:text-secondary transition-colors">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-secondary/50 group-hover:bg-primary/50 transition-colors shadow-lg"
        >
          <ChevronDown className="h-6 w-6 text-white group-hover:text-secondary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;