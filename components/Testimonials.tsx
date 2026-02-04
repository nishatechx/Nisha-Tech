import React, { useState } from 'react';
import { Quote, Star, MousePointerClick } from 'lucide-react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    name: "Vikram Malhotra",
    role: "Director, Malhotra Polymers Pvt. Ltd.",
    location: "Aurangabad, MH",
    content: "Factory ka production data pehle paper pe tha. NISHA TECH STUDIO ne jo ERP banaya, usse ab waste 15% kam ho gaya hai. Real-time tracking se efficiency badh gayi. Bilkul value for money kaam hai.",
  },
  {
    name: "Priya Kulkarni",
    role: "Owner, Kulkarni Paithani & Silks",
    location: "Yeola, MH",
    content: "Amchya business sathi online store chalu kela ani sales madhe 30% vadh zali. Tyanchi team khup support karte. Website chi design ani speed ek number ahe. Nakki recommended ahe saglyanna.",
  },
  {
    name: "Rajesh Shinde",
    role: "Owner, Gati Cargo Movers",
    location: "Pune, MH",
    content: "Pehle drivers ka hisaab rakhna mushkil tha. Inke app se ab sab gaadiyon ka live tracking hota hai aur petrol ka kharcha bhi control mein aa gaya. Bahut badhiya service di hai bhaisahab.",
  },
  {
    name: "Dr. Sameer Khan",
    role: "Founder, CarePlus Clinics",
    location: "Hyderabad, TS",
    content: "We needed a patient management system that works offline too. The solution they built is robust. Appointment no-shows have dropped by 40% thanks to the automated WhatsApp reminders.",
  },
  {
    name: "Arjun Singh",
    role: "CEO, Skyline Infra Heights",
    location: "Gurgaon, HR",
    content: "Lead management mein problem aa rahi thi. Inke CRM implementation ke baad, follow-ups miss nahi hote. Hamara conversion rate pichle 6 mahine mein significantly improve hua hai. Great team to work with.",
  },
  {
    name: "Mrs. Vandana Iyer",
    role: "Principal, Heritage Valley School",
    location: "Chennai, TN",
    content: "The school app has bridged the gap between parents and teachers. Fee collection is now 100% digital, saving our admin staff hours of manual work every week. Excellent support from NISHA TECH STUDIO.",
  },
  {
    name: "Karthik Menon",
    role: "Co-founder, FreshBox Delivery",
    location: "Bangalore, KA",
    content: "As a bootstrap startup, we needed a scalable tech stack on a budget. They guided us perfectly. Our app uptime is 99.9% even during peak order hours. Truly partners in our growth.",
  },
  {
    name: "Suraj Bhan",
    role: "Owner, Tadka Singh Dhaba Chain",
    location: "Chandigarh, PB",
    content: "Customer feedback aur inventory manage karna sar dard tha. Ab software se sab automatic hai. Food cost control mein help mili hai. Inki team ne raat ko bhi support diya jab hume zaroorat thi.",
  }
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-gray-900 overflow-hidden relative scroll-mt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract Dark Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900/90"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-1 px-3 rounded-md bg-white/5 border border-white/10 mb-3 backdrop-blur-sm">
             <h4 className="text-secondary font-bold uppercase tracking-wider text-[10px]">Success Stories</h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Growing Businesses</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Hear from our partners across India who have scaled their operations with our digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative flex overflow-x-hidden cursor-grab active:cursor-grabbing z-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-8 animate-scroll min-w-full shrink-0 px-4 py-8 ${isPaused ? 'paused' : 'running'}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`a-${idx}`} testimonial={testimonial} />
          ))}
        </div>
        <div className={`flex gap-8 animate-scroll min-w-full shrink-0 px-4 py-8 ${isPaused ? 'paused' : 'running'}`} aria-hidden="true" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`b-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      {/* Interaction Hint */}
      <div className="flex justify-center mt-4 gap-2 text-sm text-gray-500 items-center relative z-10">
        <MousePointerClick className="h-4 w-4" />
        <span>Hover to pause & read</span>
      </div>
    </section>
  );
};

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const TestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0] }> = ({ testimonial }) => (
  <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 
    hover:scale-105 hover:border-secondary/50 hover:bg-white/10 
    transition-all duration-300 ease-out select-none relative group">
    
    {/* Decorative Quote Icon Positioned Absolutely */}
    <div className="absolute top-6 right-8 text-white/5 group-hover:text-secondary/10 transition-colors duration-300">
      <Quote className="h-12 w-12 transform rotate-180" />
    </div>

    <div className="flex items-center gap-1 mb-6 relative z-10">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
      ))}
    </div>
    
    <p className="text-gray-300 mb-8 italic min-h-[80px] leading-relaxed relative z-10 font-light">"{testimonial.content}"</p>
    
    <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center text-secondary font-bold shadow-lg">
        {getInitials(testimonial.name)}
      </div>
      <div>
        <h5 className="font-bold text-white group-hover:text-secondary transition-colors">{testimonial.name}</h5>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{testimonial.role}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          <p className="text-xs text-gray-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;