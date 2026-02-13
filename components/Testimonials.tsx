import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: "Vikram Malhotra",
    role: "Director, Malhotra Polymers",
    location: "Aurangabad",
    content: "The ERP solution Nisha Tech built for us reduced factory waste by 15%. Their understanding of industrial workflows is unmatched.",
  },
  {
    name: "Priya Kulkarni",
    role: "Owner, Kulkarni Silks",
    location: "Yeola",
    content: "Our online sales grew by 30% after the new e-commerce launch. The design is elegant and the backend is rock solid.",
  },
  {
    name: "Rajesh Shinde",
    role: "MD, Gati Cargo",
    location: "Pune",
    content: "Real-time fleet tracking has transformed our logistics. We now have 100% visibility over fuel and routes.",
  },
  {
    name: "Dr. Sameer Khan",
    role: "Founder, CarePlus Clinics",
    location: "Hyderabad",
    content: "A robust patient management system that works flawlessly offline. Automated reminders have cut no-shows by 40%.",
  },
   {
    name: "Arjun Singh",
    role: "CEO, Skyline Infra",
    location: "Gurgaon",
    content: "Their CRM implementation completely streamlined our lead management. Conversion rates are up significantly.",
  },
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-black overflow-hidden relative scroll-mt-24">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center relative z-10">
         <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Client Success</h2>
         <p className="text-slate-400">Trusted by India's fastest growing enterprises.</p>
      </div>

      {/* Marquee */}
      <div 
        className="relative flex overflow-x-hidden z-10 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-6 animate-scroll min-w-full shrink-0 px-4 ${isPaused ? 'paused' : 'running'}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`a-${idx}`} testimonial={testimonial} />
          ))}
        </div>
        <div className={`flex gap-6 animate-scroll min-w-full shrink-0 px-4 ${isPaused ? 'paused' : 'running'}`} aria-hidden="true" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`b-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => (
  <div className="w-[350px] flex-shrink-0 glass-card p-8 rounded-2xl relative group">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-slate-300 mb-6 italic font-light leading-relaxed">"{testimonial.content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white border border-white/10">
         {testimonial.name[0]}
      </div>
      <div>
        <h5 className="font-bold text-white text-sm">{testimonial.name}</h5>
        <p className="text-xs text-slate-500 uppercase">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;