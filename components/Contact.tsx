import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
    hidden: { opacity: 0, y: 60, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="contact" className="py-24 bg-white perspective-2000">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="preserve-3d"
          >
            <motion.h2 variants={itemVariants} className="text-[10px] font-bold text-accent tracking-[0.3em] uppercase mb-6 backface-hidden">
              Contact Us
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-heading font-bold text-primary mb-10 leading-[1.15] tracking-tight backface-hidden">
              Let’s build something <br/>
              impactful together
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted mb-12 leading-relaxed font-light text-lg backface-hidden">
              Whether you’re a startup, institution, or individual — we help turn your ideas into real digital solutions. Reach out to us today.
            </motion.p>
 
            <div className="space-y-10 preserve-3d">
              {[
                { icon: Phone, title: 'Phone', value: '+91 95035 50351' },
                { icon: Mail, title: 'Email', value: 'info@nishatech.in' },
                { icon: MapPin, title: 'Location', value: 'Washim, Maharashtra, India' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-8 group backface-hidden"
                >
                  <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center shrink-0 group-hover:bg-primary/5 transition-colors duration-500 border border-border">
                    <item.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-muted font-light">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
 
          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-surface p-10 md:p-12 rounded-3xl border border-border shadow-2xl shadow-primary/5 preserve-3d backface-hidden"
          >
            <h4 className="text-2xl font-bold text-primary mb-8 tracking-tight">Inquiry Form</h4>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-white border border-border focus:border-primary rounded-xl outline-none transition-all font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-white border border-border focus:border-primary rounded-xl outline-none transition-all font-light" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Subject / Project Type</label>
                <input type="text" className="w-full px-5 py-4 bg-white border border-border focus:border-primary rounded-xl outline-none transition-all font-light" placeholder="Tender Participation / ERP Development" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Message</label>
                <textarea className="w-full px-5 py-4 bg-white border border-border focus:border-primary rounded-xl outline-none transition-all h-40 resize-none font-light" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-accent text-white font-bold rounded-xl btn-hover-effect transition-all shadow-2xl shadow-accent/20">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;