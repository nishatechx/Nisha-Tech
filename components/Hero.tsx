import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Code2, Cpu, Smartphone, Instagram, Linkedin, Facebook, ChevronsDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150
    };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas!.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas!.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse collision detection
        let dx = (mouse.x || 0) - this.x;
        let dy = (mouse.y || 0) - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.x !== null && distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas!.width - this.size * 10) {
            this.x += 3;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3;
          }
          if (mouse.y < this.y && this.y < canvas!.height - this.size * 10) {
            this.y += 3;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 2) - 1; // -1 to 1
        const directionY = (Math.random() * 2) - 1;
        const color = '#FACC15'; // Primary Yellow

        particles.push(new Particle(x, y, directionX * 0.4, directionY * 0.4, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x)) + 
                         ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - (distance / 20000);
            if (opacityValue > 0) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.5})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
    };

    // Event Listeners
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden perspective-2000 pt-24 pb-12 lg:py-0">
      
      <style>{`
        @keyframes tiranga-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .tiranga-text {
          background: linear-gradient(90deg, #FF9933, #FFFFFF, #138808, #FF9933);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: tiranga-flow 3s linear infinite;
        }
      `}</style>

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 bg-black">
        
        {/* Animated Network Canvas */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-10 opacity-60 mix-blend-screen"
        />

        {/* Deep ambient glow layers (behind canvas) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] z-0"></div>
        
        {/* Grid Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-[linear-gradient(to_bottom,transparent_0%,#000000_100%),linear-gradient(rgba(250,204,21,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(70deg)] origin-bottom opacity-30 z-0"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Side: Text Content */}
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 w-full text-center lg:text-left pt-6 lg:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-white tracking-tight font-heading">
              <span className="block text-slate-200">
                Empowering
              </span>
              <span className="block tiranga-text drop-shadow-2xl">
                 India
              </span>
              <span className="block text-2xl sm:text-3xl md:text-5xl mt-2 md:mt-4 text-slate-200 font-normal">
                with Digital & Automation Solutions.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              From result-driven marketing to smart business automation — we build the technology that helps your business grow in the digital era.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full">
                 <a 
                   href="#contact" 
                   onClick={(e) => handleSmoothScroll(e, 'contact')}
                   className="group relative px-8 py-4 rounded-xl bg-primary text-black font-bold text-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transition-all transform hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-3 overflow-hidden"
                 >
                    <span className="relative z-10">Start Project</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                 </a>
                 
                 <a 
                   href="#services" 
                   onClick={(e) => handleSmoothScroll(e, 'services')}
                   className="group px-8 py-4 rounded-xl glass-card text-white font-bold text-lg hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50 backdrop-blur-md w-full sm:w-auto text-center flex items-center justify-center gap-3"
                 >
                    <Globe className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                    <span>Explore Solutions</span>
                 </a>
              </div>
          </motion.div>

          {/* Right Side: Model Image & Floating Icons */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
             className="lg:col-span-5 relative flex justify-center items-center mt-8 lg:mt-0"
          >
             <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
                 {/* Main Image */}
                 <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiQnG2aK7VagcMCQGRDMbwKgVZt0UNEaHAn7-UaDD3e5vM6gQjBHYGO3Zd02PTfqfaVF_oA4aekJvuuUqwvIF3FlaeIJrrVlKsUVgIi4pOXLvZ16jrRwR4CpjIgTHj5P48aqxGDQe0_euROhboWqd0bYgz0GMyZq58ScxtynFz_Tp-gVOCxrcXO8dvQvo/w266-h400/model-Photoroom.png" 
                    alt="Nisha Tech Professional"
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(250,204,21,0.2)]"
                 />
                 
                 {/* Background Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-primary/20 to-transparent blur-[60px] rounded-full z-0"></div>

                 {/* Floating Icons */}
                 {[
                    { Icon: Code2, color: "#38bdf8", top: "10%", right: "10%", delay: 0 },
                    { Icon: Instagram, color: "#e1306c", bottom: "20%", left: "5%", delay: 1 },
                    { Icon: Linkedin, color: "#0077b5", top: "20%", left: "-5%", delay: 0.5 },
                    { Icon: Cpu, color: "#facc15", bottom: "10%", right: "15%", delay: 1.5 },
                    { Icon: Smartphone, color: "#4ade80", top: "50%", right: "-10%", delay: 2 },
                    { Icon: Facebook, color: "#1877F2", top: "40%", left: "-10%", delay: 2.5 }
                 ].map((item, index) => (
                    <motion.div
                       key={index}
                       animate={{ y: [0, -15, 0] }}
                       transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
                       className="absolute z-20 w-12 h-12 rounded-xl glass-panel border border-white/20 flex items-center justify-center shadow-lg bg-black/50 backdrop-blur-md"
                       style={{ top: item.top, right: item.right, bottom: item.bottom, left: item.left, color: item.color }}
                    >
                       <item.Icon className="w-6 h-6" />
                    </motion.div>
                 ))}
             </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator with animation */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
         className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className="flex flex-col items-center gap-2 cursor-pointer group p-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-primary transition-colors duration-300">Scroll</span>
            <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
               <ChevronsDown className="w-8 h-8 text-slate-500 group-hover:text-primary transition-colors duration-300 opacity-80" />
            </motion.div>
          </a>
      </motion.div>
    </section>
  );
};

export default Hero;