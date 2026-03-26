/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Facebook, 
  MapPin, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  BadgeDollarSign,
  CheckCircle2,
  MessageCircle,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { Logo } from './components/Logo';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Hours', href: '#hours' },
    { name: 'Contact', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-slate-100 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center group">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/8801753160718?text=Hello%20Kurigram%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 text-white px-7 py-3 rounded-md text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all active:scale-95 shadow-sm"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex justify-center mb-4">
              <Logo variant="badge" showTagline={false} className="w-32 h-32" />
            </div>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold text-slate-900 uppercase tracking-widest hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/8801753160718?text=Hello%20Kurigram%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-slate-900 text-white px-6 py-4 rounded-md text-center text-xs font-bold uppercase tracking-widest"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4">
            Established & Trusted
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.05] mb-8">
            Healthy Smiles <br />
            <span className="serif text-primary">Made Simple.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md">
            Experience premium dental care in the heart of Kurigram. We combine modern technology with a gentle touch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/8801753160718?text=Hello%20Kurigram%20Dental%20Care%2C%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-10 py-5 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-lg shadow-slate-900/10 active:scale-95 text-center"
            >
              Book Appointment
            </a>
            <a 
              href="tel:01753160718"
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-md font-bold text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95 text-center"
            >
              Call Now
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-slate-200 pt-8">
            <div>
              <p className="text-2xl font-bold text-slate-900">5000+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Patients</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div>
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Dental Clinic"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-2xl border border-slate-100 max-w-[200px]">
            <div className="flex text-amber-400 mb-2">
              {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <p className="text-xs font-bold text-slate-900 leading-tight">"The best dental experience I've ever had in Kurigram."</p>
            <p className="text-[10px] text-slate-400 mt-2">— Local Resident</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              A Tradition of <span className="serif text-primary">Excellence</span> in Kurigram.
            </h2>
            <div className="space-y-6 text-lg text-slate-500 leading-relaxed">
              <p className="font-medium text-slate-900">
                কুড়িগ্রাম শহরে আপনার দাঁতের সুস্থতা ও সৌন্দর্যের যত্ন নিতে চাইলে, কুড়িগ্রাম ডেন্টাল কেয়ার হতে পারে আপনার নির্ভরযোগ্য সহচর।
              </p>
              <p>
                স্টেশন ক্লাব সুপার মার্কেটের ১ম তলায়, কলেজ রোডে অবস্থিত এই ক্লিনিকটি অভিজ্ঞ ডাক্তারদের মাধ্যমে উন্নত মানের ডেন্টাল সেবা প্রদান করে। আমরা আধুনিক প্রযুক্তি এবং বন্ধুত্বপূর্ণ পরিবেশে রোগীদের সেবা নিশ্চিত করি।
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Location</h4>
                <p className="text-sm text-slate-500">Station Club Super Market, College Road</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-2">Philosophy</h4>
                <p className="text-sm text-slate-500">Patient-first approach with modern care</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-2xl border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                <Logo variant="badge" showTagline={false} className="w-24 h-24" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Root Canal Treatment', icon: <Stethoscope className="w-6 h-6" />, desc: 'Painless and effective treatment for deep infections.' },
    { title: 'Dental Filling', icon: <ShieldCheck className="w-6 h-6" />, desc: 'High-quality aesthetic fillings for cavities.' },
    { title: 'Crown & Bridge', icon: <Sparkles className="w-6 h-6" />, desc: 'Durable and natural-looking tooth restoration.' },
    { title: 'Dental Surgery', icon: <CheckCircle2 className="w-6 h-6" />, desc: 'Safe surgical procedures by expert surgeons.' },
    { title: 'X-ray Facility', icon: <MapPin className="w-6 h-6" />, desc: 'On-site digital X-ray for accurate diagnosis.' },
    { title: 'Teeth Whitening', icon: <Sparkles className="w-6 h-6" />, desc: 'Brighten your smile with professional whitening.' },
    { title: 'Veneers', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Perfect your smile with custom dental veneers.' },
    { title: 'Child Dental Care', icon: <Sparkles className="w-6 h-6" />, desc: 'Gentle and friendly care for your little ones.' },
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">Specialized Care for <br /><span className="serif text-primary">Every Smile.</span></h2>
          </div>
          <p className="text-slate-500 text-lg max-w-xs">Comprehensive dental solutions tailored to your unique needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-slate-200">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-10 bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: 'Experienced Doctors', icon: <Stethoscope />, desc: 'Our team has years of specialized experience in various dental fields.' },
    { title: 'Modern Equipment', icon: <Sparkles />, desc: 'We use the latest digital technology for precise and comfortable treatments.' },
    { title: 'Clean & Friendly', icon: <ShieldCheck />, desc: 'A sterile, welcoming environment designed for your peace of mind.' },
    { title: 'Affordable Pricing', icon: <BadgeDollarSign />, desc: 'Quality dental care at prices that fit your budget.' },
  ];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Our Standard</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12 leading-tight">Why Choose <br /><span className="serif text-primary">Kurigram Dental?</span></h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {reasons.map((reason) => (
                <div key={reason.title} className="group">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {React.cloneElement(reason.icon as React.ReactElement, { className: "w-5 h-5" })}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">{reason.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop" 
                alt="Happy Patient" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-slate-900 text-white p-10 rounded-xl shadow-2xl max-w-[240px] hidden md:block">
              <p className="font-display font-bold text-3xl mb-2">5000+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Local residents trust us with their smiles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessHours = () => {
  const hours = [
    { day: 'Saturday', time: '10:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 9:00 PM' },
    { day: 'Monday', time: '10:00 AM – 9:00 PM' },
    { day: 'Tuesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Wednesday', time: '10:00 AM – 9:00 PM' },
    { day: 'Thursday', time: '10:00 AM – 9:00 PM' },
    { day: 'Friday', time: 'Closed', isClosed: true },
  ];

  return (
    <section id="hours" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Availability</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 uppercase tracking-widest">Business Hours</h2>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="divide-y divide-slate-100">
            {hours.map((item) => (
              <div key={item.day} className="flex items-center justify-between p-8 hover:bg-slate-50 transition-colors">
                <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{item.day}</span>
                <span className={cn(
                  "text-sm font-medium tracking-wide",
                  item.isClosed ? "text-red-500 font-bold" : "text-slate-500"
                )}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12 leading-tight">Visit Our <br /><span className="serif text-primary">Clinic.</span></h2>
            
            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="w-px h-12 bg-primary" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Call Us</h4>
                  <a href="tel:01753160718" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">01753160718</a>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-px h-12 bg-primary" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Email Us</h4>
                  <a href="mailto:drsmhemel@gmail.com" className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">drsmhemel@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="w-px h-12 bg-primary" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Location</h4>
                  <p className="text-xl font-bold text-slate-900 leading-relaxed">Station Club Super Market (1st Floor), College Road, Kurigram</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap gap-4">
              <a 
                href="tel:01753160718"
                className="bg-slate-900 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-sm"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/8801753160718"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-sm"
              >
                WhatsApp
              </a>
              <a 
                href="https://fb.com/Dr.Hemel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-sm"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.673895047466!2d89.6465451!3d25.8258941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f1d5334f555555%3A0x5555555555555555!2sCollege%20Road%2C%20Kurigram!5e0!3m2!1sen!2sbd!4v1711438900000!5m2!1sen!2sbd" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'What treatments are available?', a: 'We provide a comprehensive range of treatments including Root Canal, Dental Filling, Crown & Bridge, Surgery, X-ray, Teeth Whitening, Veneers, and Child Dental Care.' },
    { q: 'What are the costs?', a: 'Our pricing is very affordable and depends on the specific treatment. We provide a clear cost estimate after the initial consultation.' },
    { q: 'Can I visit without an appointment?', a: 'While we prefer appointments to ensure minimal waiting time, we do accept walk-in patients for emergencies.' },
    { q: 'How to book an appointment?', a: 'You can book an appointment by sending us a message on WhatsApp at 01753160718, calling us, or visiting our clinic directly during business hours.' },
  ];

  return (
    <section id="faq" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">Help Center</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 uppercase tracking-widest">Common Questions</h2>
        </div>
        <div className="space-y-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <button 
                className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">{faq.q}</span>
                <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform duration-500", openIndex === index && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Logo theme="dark" showTagline={false} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xs">
              Premium dental care in Kurigram. We combine artistry with expertise to create your perfect smile.
            </p>
            <div className="flex gap-6">
              <a href="https://fb.com/Dr.Hemel" className="text-slate-500 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#hours" className="hover:text-white transition-colors">Business Hours</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-6 text-sm font-medium text-slate-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <span className="leading-relaxed">Station Club Super Market (1st Floor), College Road, Kurigram</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>01753160718</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>drsmhemel@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Join our mailing list for oral health tips and exclusive updates.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Kurigram Dental Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <BusinessHours />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8801753160718?text=Hello%20Kurigram%20Dental%20Care%2C%20I%20have%20a%20question%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-xl shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
