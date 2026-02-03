import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiASI07fl6T1RNy377VETtHUnrZSCV-XB6k7_4PRAeA6vUK0gugoDN5uFQ0QxgQpmC8bWLDgFapJAmmxyUYLY06hmox_zK_aN6942bEpEkSqdolye5QPyBSLzSJ9x3Uul1DfbrJWbRn70XKzwqH-rJVBo7EzeHTKR1ywFLmUwa-SZlnDvEjY688JAoxIwM/s16000/about.png" 
                alt="Team Collaboration" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white font-medium italic">"Building the digital future of India, one business at a time."</p>
              </div>
            </div>
            {/* Floating Card */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">5+ Years</p>
                  <p className="text-sm text-gray-500">Of Innovation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">About NISHA TECH STUDIO</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Strategy. Design. Technology.</h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Nisha Tech Studio is a creative-technology studio built to help businesses grow in a fast-moving digital world ⚡
              </p>
              <p>
                We work at the intersection of strategy, design, and technology to create solutions that don’t just look good, but perform. Our services include digital marketing, website and software development, content creation, and business automation — all designed to improve visibility, efficiency, and scalability.
              </p>
              <p>
                What sets us apart is our approach. We take time to understand your business, identify real problems, and build customized digital systems that support long-term growth. Whether you’re a local brand, startup, or growing organization, we focus on delivering clarity, consistency, and measurable results.
              </p>
              <p className="font-medium text-primary border-l-4 border-secondary pl-4">
                At Nisha Tech Studio, technology is not an expense — it’s an energy that powers growth, innovation, and sustainability. We’re here to build digital foundations that help your business move forward with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['End-to-End Digital Solutions', 'Indian Market Understanding', 'Technology + Strategy', 'Long-term Partnership'].map((item, index) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;