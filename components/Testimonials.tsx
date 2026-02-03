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
    <section id="testimonials" className="py-20 bg-blue-50/50 overflow-hidden relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-secondary font-bold uppercase tracking-wider mb-2">Success Stories</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted by Growing Businesses</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from our partners across India who have scaled their operations with our digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div 
        className="relative flex overflow-x-hidden cursor-pointer"
        onClick={() => setIsPaused(!isPaused)}
        title="Click to pause/resume"
      >
        <div className={`flex gap-6 animate-scroll min-w-full shrink-0 px-3 ${isPaused ? 'paused' : 'running'}`} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`a-${idx}`} testimonial={testimonial} />
          ))}
        </div>
        <div className={`flex gap-6 animate-scroll min-w-full shrink-0 px-3 ${isPaused ? 'paused' : 'running'}`} aria-hidden="true" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={`b-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      {/* Interaction Hint */}
      <div className="flex justify-center mt-8 gap-2 text-sm text-gray-400 items-center">
        <MousePointerClick className="h-4 w-4" />
        <span>Click on cards to stop scrolling</span>
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
  <div className="w-[350px] md:w-[400px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow select-none">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
      ))}
    </div>
    <Quote className="h-8 w-8 text-blue-100 mb-4" />
    <p className="text-gray-600 mb-6 italic min-h-[80px]">"{testimonial.content}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold border-2 border-secondary/20 shadow-sm">
        {getInitials(testimonial.name)}
      </div>
      <div>
        <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
        <p className="text-xs text-secondary font-medium uppercase tracking-wide">{testimonial.role}</p>
        <p className="text-xs text-gray-400">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;