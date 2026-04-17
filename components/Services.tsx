import React from 'react';
import { SERVICES } from '../constants';
import { motion, useMotionValue, useTransform, useSpring, Variants } from 'framer-motion';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ service: ServiceItem; variants: Variants }> = ({ service, variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="card-professional group relative preserve-3d cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500"
      >
        <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h4 
        style={{ transform: "translateZ(40px)" }}
        className="text-xl font-bold text-primary mb-4 tracking-tight"
      >
        {service.title}
      </h4>
      {service.image && (
        <div 
          style={{ transform: "translateZ(35px)" }}
          className="relative h-40 rounded-xl overflow-hidden mb-6 border border-border/50"
        >
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
      )}
      <p 
        style={{ transform: "translateZ(30px)" }}
        className="text-muted text-sm leading-relaxed mb-8 font-light"
      >
        {service.description}
      </p>
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="w-12 h-1 bg-accent/20 group-hover:w-full transition-all duration-700"
      ></div>
      
      {/* 3D background glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl -z-10 transition-opacity duration-500"></div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-surface perspective-2000">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div variants={itemVariants} className="narrative-label">Chapter 2: The Craft</motion.div>
          <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-muted/60 tracking-[0.3em] uppercase mb-6">
            Expert Solutions
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 tracking-tight">
            Complete Digital Solutions — All in One Place
          </motion.h3>
          <motion.p variants={itemVariants} className="text-muted max-w-2xl mx-auto text-lg font-light">
            We design and build powerful digital systems, websites, and marketing strategies that help you grow, scale, and succeed in the digital world.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: 1000 }}
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;