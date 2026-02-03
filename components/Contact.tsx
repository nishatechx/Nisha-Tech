import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Digital Marketing',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formspree.io/f/xojlpjgy", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: 'Digital Marketing', message: '' });
        // Clear success message after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        >
          
          {/* Contact Info Side */}
          <div className="lg:w-5/12 p-10 bg-primary text-white relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/50 z-0"></div>
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Let's Grow Your Business
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-blue-200 mb-10"
              >
                Ready to start your digital journey? Fill out the form, and our experts will contact you within 24 hours.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Call Us", text: "9699658462" },
                  { icon: Mail, title: "Email Us", text: "nishatechx@gmail.com" },
                  { icon: MapPin, title: "Visit Us", text: "Civil Line, Washim - 444505 Maharashtra" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <item.icon className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-blue-200">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Abstract Circle */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary rounded-full opacity-20 blur-2xl"
            ></motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-10 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="+91 99999 99999"
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    disabled={status === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    disabled={status === 'submitting'}
                  >
                    <option>Digital Marketing</option>
                    <option>Web Development</option>
                    <option>Software Development</option>
                    <option>Business Automation</option>
                    <option>Content Creation</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your project..."
                  disabled={status === 'submitting'}
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={status === 'submitting'}
                className={`w-full font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
                  status === 'submitting' ? 'bg-gray-400 cursor-not-allowed text-gray-100' : 'bg-secondary hover:bg-orange-600 text-white'
                }`}
              >
                {status === 'submitting' ? (
                  <>Sending... <Loader2 className="h-5 w-5 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="h-5 w-5" /></>
                )}
              </motion.button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 border border-green-200"
                  >
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Message sent successfully! We'll contact you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2 border border-red-200"
                  >
                    <XCircle className="h-5 w-5 flex-shrink-0" />
                    <span>Something went wrong. Please try again later.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;