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
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);

    for(let i=0; i<particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillStyle = 'rgba(255, 207, 0, 0.4)'; // Secondary Yellow color

      for(let i=0; i<particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for(let j=i+1; j<particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx*dx + dy*dy);

          if(dist < 120) {
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
    <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80" 
          alt="Modern Indian Office" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>

      {/* Canvas Layer for Network Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 text-white tracking-tight">
            <span className="block mb-2">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-gradient-to-r from-yellow-300 via-secondary to-yellow-500 text-transparent bg-clip-text animate-gradient-x"
              >
                Empowering Indian
              </motion.span>
            </span>
            
            {/* Changing Word Section */}
            <span className="block h-[1.3em] sm:h-[1.2em] overflow-hidden">
               <AnimatePresence mode="wait">
                  <motion.span
                    key={WORDS[index]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="block text-white drop-shadow-md"
                  >
                    {WORDS[index]}
                  </motion.span>
                </AnimatePresence>
            </span>
            
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="block mt-2 sm:mt-4 text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            >
              <span className="text-gray-300">with </span>
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
                Digital & Automation Solutions
              </span>
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light"
          >
            From result-driven marketing to smart business automation — we build the technology that helps your business grow in the digital era.
          </motion.p>
          
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
        aria-label="Scroll to About section"
      >
        <span className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-secondary transition-colors">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 rounded-full border border-white/10 group-hover:border-secondary/50 group-hover:bg-primary/50 transition-colors"
        >
          <ChevronDown className="h-5 w-5 text-white/60 group-hover:text-secondary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;