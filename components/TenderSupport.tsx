import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

const TenderSupport: React.FC = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
              <Handshake className="w-4 h-4 text-white" />
              <span className="text-xs font-bold uppercase tracking-widest">Partnership Opportunity</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Tender Support & <br />
              Collaboration
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              We are open to participating in Government Tenders, RFPs, and IT Projects. We can collaborate as a technology partner for execution and delivery.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Joint Venture & Consortium Participation",
                "Technical Execution Partner",
                "RFP & Tender Documentation Support",
                "Post-Implementation Maintenance"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <span className="text-white/90 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="#contact" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="inline-block px-10 py-4 bg-accent text-white font-bold rounded hover:bg-opacity-90 transition-all shadow-xl"
            >
              Discuss Collaboration
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="p-12 border border-white/20 bg-white/5 backdrop-blur-sm rounded-2xl">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-white/20">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Government Tenders</h4>
                    <p className="text-white/60">Ready to participate as a primary or secondary technical vendor.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-white/20">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Institutional Projects</h4>
                    <p className="text-white/60">Specialized solutions for schools, colleges, and municipal bodies.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-white/20">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">NGO Digital Initiatives</h4>
                    <p className="text-white/60">Scalable systems for social impact and data management.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TenderSupport;
