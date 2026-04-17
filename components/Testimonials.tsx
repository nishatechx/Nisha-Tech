import React, { useState } from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Rajesh Deshmukh",
    role: "Director, Deshmukh Agro Industries",
    location: "Washim",
    content: "Nisha Tech helped us take our agricultural products online. Their team is very supportive and explained everything in Marathi.",
  },
  {
    name: "Anjali Patil",
    role: "Founder, Patil Paithani",
    location: "Yeola, Nashik",
    content: "Our online sales doubled after the new website launch. The design beautifully captures our tradition while being modern.",
  },
  {
    name: "Vikram Rane",
    role: "MD, Rane Engineering Works",
    location: "MIDC, Aurangabad",
    content: "We needed a custom ERP for our factory floor. The solution is robust and has streamlined our inventory management perfectly.",
  },
  {
    name: "Dr. Sameer Kulkarni",
    role: "Head, Kulkarni Hospital",
    location: "Pune",
    content: "Excellent digital marketing services. We are seeing 40% more patient inquiries through Google every month.",
  },
   {
    name: "Suresh Jadhav",
    role: "Owner, Jadhav Logistics",
    location: "Nagpur",
    content: "They built a tracking app for our fleet that works even in low network areas. Highly recommended for custom software.",
  },
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-surface overflow-hidden relative scroll-mt-24">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 md:mb-16 text-center relative z-10"
      >
         <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Trusted by Maharashtra</h2>
         <p className="text-muted">Join 50+ businesses growing with us.</p>
      </motion.div>

      {/* Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative flex overflow-x-hidden z-10 py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
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
      </motion.div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => (
  <div className="w-[300px] md:w-[350px] flex-shrink-0 bg-white p-6 md:p-8 rounded-2xl relative group border-l-4 border-primary shadow-card">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
      ))}
    </div>
    <p className="text-slate-600 mb-6 italic font-light leading-relaxed text-sm md:text-base">"{testimonial.content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center font-bold text-primary border border-primary/20 shrink-0">
         {testimonial.name[0]}
      </div>
      <div>
        <h5 className="font-bold text-primary text-sm">{testimonial.name}</h5>
        <p className="text-xs text-muted">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;