import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', service: 'Digital Marketing', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel rounded-3xl p-1 border border-white/10 shadow-glass"
        >
          <div className="flex flex-col lg:flex-row bg-black/50 rounded-[22px] overflow-hidden">
            
            {/* Info Panel */}
            <div className="lg:w-5/12 p-10 bg-gradient-to-br from-surface to-black relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-bold mb-6 text-white">Let's Innovate</h3>
                <p className="text-slate-400 mb-12 font-light">
                  Ready to transform your business? Reach out and let's discuss your digital future.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Phone, title: "Phone", text: "9699658462" },
                    { icon: Mail, title: "Email", text: "nishatechx@gmail.com" },
                    { icon: MapPin, title: "Headquarters", text: "Civil Line, Washim - 444505" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center border border-white/10 text-primary">
                           <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-sm uppercase tracking-wide opacity-80">{item.title}</p>
                        <p className="text-slate-300 font-medium">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="lg:w-7/12 p-10 bg-white/[0.02]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-input placeholder:text-slate-600 focus:border-primary focus:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-input placeholder:text-slate-600 focus:border-primary focus:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg glass-input placeholder:text-slate-600 focus:border-primary focus:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Service</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg glass-input focus:border-primary focus:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                    >
                        <option className="bg-surface">Digital Marketing</option>
                        <option className="bg-surface">Web Development</option>
                        <option className="bg-surface">Software Development</option>
                        <option className="bg-surface">Business Automation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-input placeholder:text-slate-600 resize-none focus:border-primary focus:shadow-[0_0_15px_rgba(250,204,21,0.2)]"
                    placeholder="Describe your project needs..."
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full font-bold py-4 rounded-lg bg-primary text-black flex items-center justify-center gap-2 hover:shadow-glow hover:bg-white transition-all"
                >
                  {status === 'submitting' ? (
                    <>Processing... <Loader2 className="h-5 w-5 animate-spin" /></>
                  ) : (
                    <>Submit Request <ArrowRight className="h-5 w-5" /></>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;