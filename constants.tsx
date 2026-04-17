import { 
  Code2, 
  ShieldCheck,
  Database,
  Settings,
  Briefcase,
  Cpu,
  Megaphone,
  Palette,
  BarChart3,
  Zap,
  Layout,
  Layers,
  Rocket
} from 'lucide-react';
import { ServiceItem, ProcessStep, NavItem, Capability, Credential } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Web Design & Development',
    description: 'Modern, fast, and responsive websites designed to impress and perform. Business & portfolio websites, institutional websites, and landing pages.',
    icon: Layout,
  },
  {
    id: 'software-dev',
    title: 'Software & App Development',
    description: 'Custom software built exactly for your needs. Web applications, Android apps, custom dashboards, and secure & scalable systems.',
    icon: Code2,
  },
  {
    id: 'erp-systems',
    title: 'ERP & Management Systems',
    description: 'Smart systems to manage operations efficiently. School & college systems, office management, and student & staff tracking.',
    icon: Database,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Grow your brand and reach more people online. Social media marketing, Instagram & Facebook growth, and Google Ads campaigns.',
    icon: Megaphone,
  },
  {
    id: 'branding-design',
    title: 'Branding & Creative Design',
    description: 'Build a strong and professional identity. Logo design, social media creatives, posters & banners, and UI/UX design.',
    icon: Palette,
  },
  {
    id: 'data-solutions',
    title: 'Data & Survey Solutions',
    description: 'Make better decisions with smart data systems. Survey tools, data collection systems, reporting dashboards, and analytics.',
    icon: BarChart3,
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Infrastructure',
    description: 'Secure your systems and data. Website security, data protection, server setup, and backup systems.',
    icon: ShieldCheck,
  },
  {
    id: 'automation',
    title: 'Automation Solutions',
    description: 'Save time and increase efficiency. Workflow automation, process automation, and system integrations.',
    icon: Zap,
  },
];

export const CAPABILITIES: Capability[] = [
  { title: 'Businesses', description: 'Helping modern enterprises scale with custom digital tools.' },
  { title: 'Educational Institutions', description: 'Smart management systems for schools and colleges.' },
  { title: 'Organizations', description: 'Digital transformation for NGOs and government bodies.' },
  { title: 'Individuals', description: 'Turning unique ideas into real digital products.' },
];

export const CREDENTIALS: Credential[] = [
  { title: 'GST Registration', status: 'Verified' },
  { title: 'MSME Certificate', status: 'Verified' },
  { title: 'PAN Card', status: 'Verified' },
  { title: 'Company Profile PDF', status: 'Available on Request' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Requirement',
    description: 'We start by listening to your needs and understanding your unique business goals.',
  },
  {
    number: '02',
    title: 'Plan Solution',
    description: 'Architecting the right strategy and technical roadmap for your project.',
  },
  {
    number: '03',
    title: 'Design & Develop',
    description: 'Our experts build your solution using modern technology and best practices.',
  },
  {
    number: '04',
    title: 'Deliver with Quality',
    description: 'Rigorous testing and quality checks before we hand over the final product.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'We stay with you to provide maintenance, updates, and technical assistance.',
  },
];

export const WHY_CHOOSE_US = [
  { title: 'End-to-End Execution', text: 'From idea to execution — we handle everything for you.', icon: Rocket },
  { title: 'Custom Solutions', text: 'Tailor-made systems built exactly for your specific needs.', icon: Settings },
  { title: 'Modern Technology', text: 'Using the latest tech stacks for fast and scalable results.', icon: Layers },
  { title: 'Affordable Pricing', text: 'Premium digital solutions that fit your budget perfectly.', icon: Briefcase },
  { title: 'Dedicated Support', text: 'Reliable assistance whenever you need help with your systems.', icon: Cpu },
];
