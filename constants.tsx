import { 
  Megaphone, 
  Globe, 
  Code2, 
  PenTool, 
  Bot, 
  LineChart, 
  Briefcase, 
  School, 
  Store, 
  Rocket 
} from 'lucide-react';
import { ServiceItem, ProcessStep, NavItem, Industry } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Industries', href: '#industries' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Boost your brand visibility with SEO, Social Media Management, and targeted Ad campaigns tailored for the Indian market.',
    icon: Megaphone,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Responsive, fast, and secure websites, landing pages, and corporate portals designed to convert visitors into customers.',
    icon: Globe,
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Custom software solutions, ERPs, and management systems built to streamline your specific business operations.',
    icon: Code2,
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    description: 'Engaging graphics, reels, videos, and professional copywriting that resonates with your audience.',
    icon: PenTool,
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Save time and reduce errors with CRM integration, workflow automation, and smart AI tools.',
    icon: Bot,
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic guidance to help you choose the right technology stack for sustainable business growth.',
    icon: LineChart,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'We analyze your business goals and market requirements.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We create a strategic roadmap and select the right tech stack.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our experts develop your solution with precision and quality.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your project and ensure everything runs smoothly.',
  },
  {
    number: '05',
    title: 'Grow',
    description: 'Continuous support and optimization to scale your business.',
  },
];

export const INDUSTRIES: Industry[] = [
  { 
    name: 'Small Businesses', 
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvrWFlqOgIloDXRZR4jFaD9kORwW7HWPsQrC3KIQNsiX8_li6gkZZtdVcszvLTWkIrv0oz6V3uXDjBJGWfrM3fSLWeiWkj-VUPPwJ8nXpAnWCfbrvnwZ0Ovq4c6aXjizTo2nTCRRQpBccKsexHnw0mK3kfuDnD3o5QwowdUOBDt2ne4G_gj_UmcvpqyH0/s16000/small%20business.jpg' 
  },
  { 
    name: 'Startups', 
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfT_T9ViL1YfroMYtD7CISKDMOhmIPyqB1LXmdJIb2tZdgVDHN-nU7T__OqfV-7v6wNK48kpfKW8G59AVFL3GyfWC5JanhahrSLPvW3Q9S_U1WAjv311Z5MhGXfmuqbw073xzDiGCUa1ipBRjK4988ekhPopSZdHJ-jAN66IB-fv0BpNvvn9GoPC_DGQU/s16000/Gemini_Generated_Image_a2atfga2atfga2at.png' 
  },
  { 
    name: 'Education', 
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhemZQUhXbKbJFSQYzUaSAst1lKBfdMAgXRL0xBIHqtQz0i1mW9AS4UoCWMYAe-emc9hTdoTRxn8tSP8aniFahpEqZ-VvqkJoCqBwAVfqxeGXfrniuWUmIEh6HD2eFr4lsx9s1NaZ-vWXTCtYJdDlcnZDey8RGGVpKblfGb642yihISOrTUuFakEpq3ug4/s16000/education.png' 
  },
  { 
    name: 'Local Brands', 
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZuCswqIODDe15bDCXpswJC1WV0NrcgGidwWoMboWYSJ1w6C052x-5I1qGmrL4S9SFXwPSnXwkNa10wbt-vPiWvLOUAMOFVye49ua8DpgNDa9NFDq9vOj4mTIncS4VwL-AVKSivKhevgZemQ1NM-dJ21GPAU5NS3w2AYb_4lCQUjcaPbZqIIAEmmPVrIE/s16000/local.jpg' 
  },
];

export const WHY_CHOOSE_US = [
  { title: 'Indian Market Expertise', text: 'We understand the nuances of the local market.' },
  { title: 'Result-Oriented', text: 'We focus on ROI and tangible growth metrics.' },
  { title: 'Affordable & Scalable', text: 'Solutions that fit your budget and grow with you.' },
  { title: 'Dedicated Support', text: 'We are always just a call or message away.' },
];