"use client"

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SupportPage = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      gsap.from(".support-card", {
        scrollTrigger: {
          trigger: ".support-grid",
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: "How can I reset my password?",
      a: "Navigate to the login gateway, click 'Forgot Password,' and enter your registered email. A secure reset link will be dispatched to your inbox instantly."
    },
    {
      q: "How do I get support for technical issues?",
      a: "Our engineering team is reachable 24/7. Submit a detailed ticket via our contact form or email our technical desk for high-priority resolution."
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FBFDFF] text-slate-900 selection:bg-teal-100 overflow-x-hidden pb-20">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-5%] left-[-5%] w-[700px] h-[700px] bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">

        {/* Header Section */}
        <div className="mb-24">
          <p className="hero-text text-teal-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Support Gateway v1.0</p>
          <h1 className="hero-text text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950">
            Help & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600">Support.</span>
          </h1>
          <p className="hero-text text-slate-500 text-xl max-w-3xl leading-relaxed">
            Stuck on a project? Encountering a technical glitch? Our dedicated support squad is standing by to bridge the gap between problem and solution.
          </p>
        </div>

        <div className="support-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Main Contact Card */}
          <div className="support-card lg:col-span-7 bg-white border border-slate-200 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500">
            <span className="text-teal-600 font-mono text-xs font-black uppercase tracking-widest">Connect With Us</span>
            <h2 className="text-4xl font-black mt-4 mb-8 text-slate-900 leading-tight italic">Initiate a Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-teal-500 hover:border-teal-400 transition-all duration-300">
                <div className="bg-teal-500 text-white w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-teal-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white">Contact Form</h3>
                <p className="text-sm text-slate-500 group-hover:text-teal-50 mb-6 font-medium leading-relaxed">Fill out our integrated form for tracked ticket resolution.</p>
                <button className="text-teal-600 font-black text-xs uppercase tracking-widest group-hover:text-white">Open Form →</button>
              </div>

              <div className="group p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
                <div className="bg-indigo-600 text-white w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-white">Email Us</h3>
                <p className="text-sm text-slate-500 group-hover:text-indigo-50 mb-6 font-medium leading-relaxed">Direct correspondence to our cloud support desk for deep dives.</p>
                <a href="mailto:info@WholCuresolutions.cloud" className="text-indigo-600 font-black text-xs uppercase tracking-widest group-hover:text-white underline-offset-4 underline">info@WholCuresolutions.cloud</a>
              </div>
            </div>
          </div>

          {/* FAQ Sidebar */}
          <div className="support-card lg:col-span-5 space-y-6">
            <div className="bg-slate-950 p-10 rounded-[3rem] text-white overflow-hidden relative group">
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-all duration-700" />
              <h2 className="text-2xl font-black mb-6 italic tracking-tight">Rapid Resolve (FAQs)</h2>

              <div className="space-y-4 relative z-10">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex w-full justify-between items-center text-left gap-4"
                    >
                      <span className="text-sm font-bold text-slate-200 hover:text-teal-400 transition-colors">{faq.q}</span>
                      <span className={`text-xl transition-transform duration-300 ${openFaq === idx ? 'rotate-45 text-teal-400' : 'rotate-0'}`}>+</span>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === idx ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <p className="text-xs text-slate-400 font-mono leading-relaxed tracking-tighter">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Metrics Card */}
            <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Avg Response Time</p>
                <p className="text-2xl font-black text-slate-900 tracking-tighter leading-none mt-1">{"< 4 Hours"}</p>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden`}>
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-indigo-500 opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase gap-4">
          <p className="font-bold text-slate-500">WholCure SUPPORT // CLOUD DESK</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-teal-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-teal-600 transition-colors">Emergency Portal</a>
          </div>
          <p>STABLE UPTIME: 99.9%</p>
        </footer>

      </main>
    </div>
  );
};

export default SupportPage;