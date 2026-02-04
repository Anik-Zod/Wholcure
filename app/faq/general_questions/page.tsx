"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-slate-200 py-6 last:border-0 bento-item">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-secondary-dark' : 'text-slate-900 group-hover:text-indigo-500'}`}>
          {question}
        </span>
        <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-secondary-dark border-secondary-dark rotate-45' : 'bg-white border-slate-200 rotate-0'}`}>
          <svg className={`h-4 w-4 transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      <div 
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-lg text-slate-500 leading-relaxed max-w-4xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const WholCureFAQ = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: "Where is Wholcare Solutions located?", a: "Our innovation hub is located in the heart of Hala, Sindh, Pakistan." },
    { q: "Can Wholcare help with e-commerce websites?", a: "Absolutely. We build robust, scalable e-commerce ecosystems tailored to your inventory and growth goals." },
    { q: "Do you work on AI-based projects?", a: "Yes, we integrate cutting-edge AI tools to automate workflows and enhance user experiences." },
    { q: "Do you work with all types of businesses?", a: "We partner with everyone from local retail shops to specialized healthcare providers." },
    { q: "Is customization available for services?", a: "Every project is a blank canvas. We provide 100% personalized solutions based on your specific needs." },
    { q: "Do you provide ongoing support?", a: "We believe in long-term partnerships. We offer continuous maintenance and technical support post-launch." }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 overflow-x-hidden">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-slate-100 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className="mb-24">
          <p className="hero-text text-secondary-dark font-bold tracking-[0.2em] uppercase text-xs mb-4 italic">Knowledge Base</p>
          <h1 className="hero-text text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
            General <span className="text-slate-300">Questions.</span>
          </h1>
          <p className="hero-text text-slate-500 text-2xl max-w-4xl leading-snug font-medium">
            Discover how WholCure transforms complex digital challenges into simple, elegant business solutions.
          </p>
        </div>

        {/* Introduction Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          
          <div className="bento-item md:col-span-8 bg-slate-950 text-white p-12 rounded-[3rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-700">
               <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
            </div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">Welcome to WholCure</h2>
            <p className="text-slate-400 text-xl leading-relaxed relative z-10">
              We're your friendly tech partner. Big enough to handle global-scale projects, but close-knit enough to care about every single pixel and line of code. We speak plain language, solve real problems, and keep you ahead of the curve.
            </p>
          </div>

          <div className="bento-item md:col-span-4 bg-secondary-dark p-12 rounded-[3rem] text-white flex flex-col justify-end shadow-xl shadow-indigo-200">
             <h3 className="text-5xl font-black mb-2 italic">100%</h3>
             <p className="text-indigo-100 font-mono text-sm tracking-widest uppercase">Client-Centric Attention</p>
          </div>

          <div className="bento-item md:col-span-12 grid grid-cols-2 md:grid-cols-5 gap-4">
             {['Web Dev', 'Marketing', 'SEO', 'AI Tools', 'Graphic Design'].map((service, i) => (
               <div key={i} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center font-bold text-slate-700 hover:bg-white hover:shadow-md transition-all cursor-default">
                 {service}
               </div>
             ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 bento-item">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 mb-4 italic underline decoration-indigo-500 underline-offset-8">FAQs</h2>
            <p className="text-slate-500 font-medium">Can't find what you're looking for? Reach out to our support team directly.</p>
            <button className="mt-8 bg-secondary-dark text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-indigo-200 hover:scale-105 active:scale-95 transition-all">
              Contact Support
            </button>
          </div>
          
          <div className="lg:col-span-8 bento-item">
            <div className="bg-white border border-slate-100 rounded-[2rem] px-8 py-4 shadow-sm">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-32 bento-item bg-slate-50 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between border border-slate-200">
           <div className="mb-8 md:mb-0">
             <h2 className="text-4xl font-black text-slate-900 mb-2 leading-tight">Ready to shine online?</h2>
             <p className="text-slate-500 text-lg">Let's work together to build something extraordinary.</p>
           </div>
           <div className="flex gap-4">
             <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-xl">Get a Price Quote</button>
           </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase">
          <p>WholCure Solutions // 2026</p>
          <p>Pakistan // Worldwide</p>
        </footer>

      </main>
    </div>
  );
};

export default WholCureFAQ;