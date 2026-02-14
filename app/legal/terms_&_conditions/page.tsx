"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '@/app/components/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function TermsAndConditions() {
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

      // Bento reveal
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FDFEFF] text-slate-900 selection:bg-amber-100 overflow-x-hidden">

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-5%] right-[-2%] w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] bg-amber-500/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">

        {/* Cinematic Header */}
        <div className="mb-20">
          <p className="hero-text text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Service Agreement v2.0</p>
          <h1 className="hero-text text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-primary">Conditions.</span>
          </h1>
          <p className="hero-text text-slate-500 text-xl max-w-3xl leading-relaxed">
            By using WholCure, you agree to follow the rules outlined below. These terms protect both you as a user and us as a service provider.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Section 1: Intro Card */}
          <div className="bento-item md:col-span-8 bg-white border border-slate-200 shadow-sm p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-500">
            <span className="text-primary font-mono text-sm font-bold">01 // ACCEPTANCE</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-slate-900">Introduction</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Welcome to WholCure. These Terms and Conditions govern your use of our digital ecosystem. By accessing our platform, you confirm that you have read, understood, and agreed to be legally bound by these protocols.
            </p>
          </div>

          {/* Section 2: Last Updated Premium Card */}
          <div className="bento-item md:col-span-4 relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-[2.5rem] flex flex-col justify-between group shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest">Enforced</span>
                </div>
              </div>
              <h2 className="text-3xl font-black text-white leading-tight">Last <span className="text-slate-400 font-light italic">Revision</span></h2>
              <p className="text-xl font-medium text-amber-400 mt-2">Aug 26, 2024</p>
            </div>
            <div className="mt-8 relative z-10">
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 w-full group-hover:scale-x-110 transition-transform duration-1000 origin-left" />
              </div>
              <p className="text-slate-400 text-[10px] mt-4 font-mono uppercase tracking-tighter">Agreement Score: Validated</p>
            </div>
          </div>

          {/* Section 3: Responsibilities */}
          <div className="bento-item md:col-span-5 bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem]">
            <span className="text-primary font-mono text-sm font-bold">02 // USER CONDUCT</span>
            <h2 className="text-2xl font-bold mt-4 mb-6">Your Responsibilities</h2>
            <ul className="space-y-4">
              {['Maintain account confidentiality', 'No unauthorized hacking or viral transmission', 'Compliance with local and global laws'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium leading-tight">
                  <span className="text-amber-500 mt-1">✦</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: IP and Liability */}
          <div className="bento-item md:col-span-7 bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm">
            <span className="text-primary font-mono text-sm font-bold">03 // LEGAL BOUNDARIES</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Intellectual Property</h3>
                <p className="text-sm text-slate-500 leading-relaxed">All content, trademarks, and code are the exclusive property of WholCure. Usage without written consent is strictly prohibited.</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Liability Limits</h3>
                <p className="text-sm text-slate-500 leading-relaxed">WholCure is not liable for indirect damages. Our total liability is capped at the amount paid for services rendered.</p>
              </div>
            </div>
          </div>

          {/* Section 5: Governing Law & Contact */}
          <div className="bento-item md:col-span-12 mt-4 bg-[#232D40] text-white p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-violet-200">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-4xl font-black mb-4">Ready to agree?</h2>
              <p className="text-violet-100 font-medium text-lg">
                These terms are governed by the laws of Pakistan/USA. If you have questions regarding the fine print, our legal experts are one click away.
              </p>
            </div>
            <button className="px-12 py-5 rounded-2xl font-black bg-primary-dark text-black transition-all text-lg shadow-xl active:scale-95 duration-200">
              Contact Legal Team
            </button>
          </div>

        </div>

        <div className="mt-32">
          <Contact />
        </div>

        {/* Minimal Footer */}
        <footer className="mt-24 flex flex-col md:flex-row justify-between items-center text-slate-400 font-mono text-[10px] tracking-widest border-t border-slate-200 pt-12 gap-4">
          <p className="font-bold text-slate-500 uppercase">WholCure LEGAL DEPT &copy; 2026</p>
          <div className="flex gap-8 uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors">EULA</a>
          </div>
          <p>STRICTLY CONFIDENTIAL</p>
        </footer>

      </main>
    </div>
  );
}