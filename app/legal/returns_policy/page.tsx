"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ReturnsPolicy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance for text elements
      gsap.from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Bento reveal with a "pop" effect
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.2)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F9FBFC] text-slate-900 selection:bg-teal-100 overflow-x-hidden">
      
      {/* Soft Teal background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-slate-500/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">
        
        {/* Header Section */}
        <div className="mb-20">
          <p className="hero-text text-teal-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">Customer Satisfaction v1.0</p>
          <h1 className="hero-text text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950">
            Returns & <span className="text-transparent bg-clip-text bg-gradient-primary-reverse">Refunds.</span>
          </h1>
          <p className="hero-text text-slate-500 text-xl max-w-3xl leading-relaxed">
            We value your investment. While we strive for perfection, we have established a clear framework for when things don't go as planned.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Section 1: Introduction */}
          <div className="bento-item md:col-span-7 bg-white border border-slate-200 shadow-sm p-10 rounded-[2.5rem] hover:shadow-lg transition-shadow">
            <span className="text-teal-600 font-mono text-sm font-bold tracking-tighter italic">01 // PREFACE</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-slate-900 leading-tight">Our Promise</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Infotech, we strive to ensure that you are satisfied with our services. This policy outlines a fair and transparent process for requesting a refund or return of our digital services.
            </p>
          </div>

          {/* Section 2: Last Updated Card */}
          <div className="bento-item md:col-span-5 bg-secondary-dark p-10 rounded-[2.5rem] flex flex-col justify-between group shadow-xl shadow-teal-100">
             <div className="flex justify-between items-start">
               <div className="w-12 h-12 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center border border-white/20">
                 <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <span className="text-[10px] font-bold text-teal-100 border border-teal-400 px-3 py-1 rounded-full uppercase tracking-widest">Active Policy</span>
             </div>
             <div className="mt-12">
               <h2 className="text-white text-3xl font-black mb-1">Last Updated</h2>
               <p className="text-teal-100 text-xl font-medium italic opacity-80">Aug 26, 2024</p>
             </div>
          </div>

          {/* Section 3: Eligibility & Process Flow */}
          <div className="bento-item md:col-span-12 bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm overflow-hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div>
                <span className="text-teal-600 font-mono text-[10px] font-black uppercase">Eligibility</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Window of Return</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Requests must be made within <strong className="text-slate-900">5 days</strong> of purchase. Services must not have been fully delivered or personalized.</p>
              </div>
              <div>
                <span className="text-teal-600 font-mono text-[10px] font-black uppercase">Process</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Request Review</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Contact us at <span className="text-teal-600 underline">infotechcompany85@gmail.com</span> with project details. We review all requests within 48 hours.</p>
              </div>
              <div>
                <span className="text-teal-600 font-mono text-[10px] font-black uppercase">Payout</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4 tracking-tight">Processing Time</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Approved refunds are credited to your original payment method within <strong className="text-slate-900 text-lg underline">2 business days</strong>.</p>
              </div>
            </div>
          </div>

          {/* Section 4: Non-Refundable (The "Warning" Card) */}
          <div className="bento-item md:col-span-8 bg-slate-50 border-2 border-dashed border-slate-200 p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <span className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" /> Non-Refundable Items
              </span>
              <h2 className="text-3xl font-black mt-4 mb-6 text-slate-900">Exclusions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 text-sm text-slate-600 shadow-sm">
                   Customized services already initiated or completed.
                 </div>
                 <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 text-sm text-slate-600 shadow-sm">
                   Marketing or Design work involving premium stock assets.
                 </div>
                 <div className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 text-sm text-slate-600 shadow-sm">
                   Any digital service already utilized or downloaded.
                 </div>
                 <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xs uppercase tracking-widest">
                   No Exceptions Applied
                 </div>
              </div>
            </div>
          </div>

          {/* Section 5: Legal Disclaimer & CTA */}
          <div className="bento-item md:col-span-4 bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-between">
            <div>
               <h2 className="text-2xl font-bold mb-4">Financial Disclaimer</h2>
               <p className="text-slate-400 text-xs leading-relaxed uppercase tracking-tighter">
                 We are a service provider, not a financial institution. Infotech assumes no responsibility for indirect financial loss or transaction damages.
               </p>
            </div>
            <button className="mt-8 bg-teal-500 text-white py-4 rounded-2xl font-bold hover:bg-teal-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-teal-900/20">
              Submit Refund Request
            </button>
          </div>

        </div>

        {/* Minimal Footer */}
        <footer className="mt-24 flex flex-col md:flex-row justify-between items-center text-slate-400 font-mono text-[10px] tracking-[0.3em] border-t border-slate-200 pt-12 gap-4">
          <p className="font-bold text-slate-500 uppercase italic">WHOLECARE // RETURNS DEP</p>
          <div className="flex gap-8 uppercase">
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Contact</a>
          </div>
          <p>ISO COMPLIANT PROCESS</p>
        </footer>

      </main>
    </div>
  );
};

export default ReturnsPolicy;