import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Globe, Database } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Management Systems',
      category: 'ERP & Automation',
      description: 'Smart systems to manage operations efficiently for schools, colleges, and offices.',
      icon: Database,
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800', // Dashboard/ERP
    },
    {
      title: 'Web Platforms',
      category: 'Web Development',
      description: 'Modern, fast, and responsive websites and portals designed to perform.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800', // Web Design layout
    },
    {
      title: 'Custom Software',
      category: 'Software Engineering',
      description: 'Bespoke software solutions built exactly for unique business needs.',
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800', // Programming/Code
    },
  ];

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
    hidden: { opacity: 0, scale: 0.8, rotateY: -15, y: 40 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white perspective-2000">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16 lg:mb-20 preserve-3d"
        >
          <motion.div variants={itemVariants} className="narrative-label">Chapter 4: The Impact</motion.div>
          <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-muted/60 tracking-[0.3em] uppercase mb-6 backface-hidden">
            Recent Projects
          </motion.h2>
          <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8 tracking-tight backface-hidden">
            Proven Digital Solutions
          </motion.h3>
          <motion.p variants={itemVariants} className="text-muted max-w-2xl mx-auto text-lg font-light backface-hidden">
            We have built powerful systems that help our clients grow and succeed. More project details are available on request.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 preserve-3d"
          style={{ perspective: 1200 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                rotateY: -8, 
                rotateX: 4, 
                z: 40,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
              className="group border border-border overflow-hidden bg-surface rounded-2xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 preserve-3d backface-hidden"
            >
              <div className="aspect-video overflow-hidden relative bg-primary/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 text-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  <project.icon className="w-4 h-4" />
                  <span>{project.category}</span>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-4 tracking-tight">{project.title}</h4>
                <p className="text-muted text-sm leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-muted text-xs font-light italic tracking-wide">
            * Detailed case studies and experience letters are available upon request for tender participation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
