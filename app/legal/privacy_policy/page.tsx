"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance for text elements
      gsap.from(".hero-text", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Subtle background movement
      gsap.to(".glow-1", {
        duration: 10,
        x: 50,
        y: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Bento reveal
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-indigo-100 overflow-x-hidden">

      {/* Soft Ambient Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="glow-1 absolute top-[-5%] left-[-2%] w-[700px] h-[700px] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] right-[0%] w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <main className="max-w-[1400px] mx-auto px-6 py-20 lg:py-32">

        {/* Cinematic Header */}
        <div className="mb-24">
          <p className="hero-text text-secondary-dark font-bold tracking-[0.2em] uppercase text-xs mb-4">Legal Framework v1.2</p>
          <h1 className="hero-text text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-slate-950">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-primary-reverse">Policy.</span>
          </h1>
          <p className="hero-text text-slate-500 text-xl max-w-3xl leading-relaxed">
            Transparency is the foundation of trust. This document outlines how we protect your digital footprint with industry-leading standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Section 1 - Introduction */}
          <div className="bento-item md:col-span-8 bg-white border border-slate-200 shadow-sm p-10 rounded-[2.5rem] hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
            <span className="text-secondary-dark font-mono text-sm font-bold">01 // INTRODUCTION</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-slate-900">Our Commitment</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Infotech, we view privacy not as a hurdle, but as a core product feature. Your data is encrypted, anonymized, and never sold to third parties. We are committed to ethical data practices that put you in control.
            </p>
          </div>

          {/* Section 2 - Date Card */}
          <div className="bento-item md:col-span-4 relative overflow-hidden bg-gradient-primary-reverse p-10 rounded-[2.5rem] flex flex-col justify-between group shadow-2xl shadow-indigo-200/50 transition-all duration-500 hover:-translate-y-2">

            {/* Abstract Background Decoration */}
            <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors duration-700" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Live Pulsing Badge */}
                <div className="flex items-center gap-2 bg-emerald-400/20 px-3 py-1 rounded-full border border-emerald-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Active</span>
                </div>
              </div>

              <p className="text-indigo-100/70 font-mono text-xs uppercase tracking-[0.2em] mb-1">Versioning // 2.0.4</p>
              <h2 className="text-3xl font-black text-white leading-[1.1] tracking-tight">
                Last <span className="block text-indigo-200">Updated</span>
              </h2>
              <p className="text-xl font-medium text-white/90 mt-2 italic opacity-80">Aug 26, 2024</p>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex justify-between items-end mb-3">
                <span className="text-white font-bold text-sm tracking-wide">Legal Integrity</span>
                <span className="text-indigo-100 text-xs font-mono">100%</span>
              </div>

              <div className="h-3 w-full bg-black/20 rounded-full p-[2px] backdrop-blur-sm shadow-inner">
                <div className="h-full bg-gradient-to-r from-indigo-300 to-white rounded-full w-1/4 group-hover:w-full transition-all duration-[1500ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-indigo-50 text-[11px] font-mono font-medium flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-indigo-300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Status: Compliant
                </p>
                <span className="text-[10px] text-white/40 font-mono italic">Protected by AES-256</span>
              </div>
            </div>
          </div>

          {/* Section 3 - List */}
          <div className="bento-item md:col-span-4 bg-white border border-slate-200 shadow-sm p-10 rounded-[2.5rem]">
            <span className="text-secondary-dark font-mono text-sm font-bold">02 // DATA POINTS</span>
            <h2 className="text-2xl font-bold mt-4 mb-6 text-slate-900">What We Collect</h2>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                Personal Identity
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                Browser Meta-data
              </li>
              <li className="flex items-center gap-3 font-medium">
                <div className="w-2 h-2 bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                Session Activity
              </li>
            </ul>
          </div>

          {/* Section 4 - Content Mixed */}
          <div className="bento-item md:col-span-8 bg-slate-50 border border-slate-200 p-10 rounded-[2.5rem]">
            <span className="text-secondary-dark font-mono text-sm font-bold">03 // YOUR CONTROL</span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-slate-900">Global Protection.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-600">
              <p className="leading-relaxed">Request a full export of your data or permanently wipe your account history with one click. We make data portability effortless.</p>
              <p className="leading-relaxed">Fully aligned with <strong className="text-slate-900">GDPR</strong>, <strong className="text-slate-900">CCPA</strong>, and <strong className="text-slate-900">PIPEDA</strong> to ensure your rights are protected worldwide.</p>
            </div>
          </div>

          {/* Section 5 - CTA */}
          <div className="bento-item md:col-span-12 mt-8 bg-slate-950 text-white p-12 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <h2 className="text-4xl font-black mb-2">Security Questions?</h2>
              <p className="text-slate-400 font-medium text-lg">Our legal team is ready to assist you with any inquiries.</p>
            </div>
            <button className="bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold hover:bg-indigo-50 transition-colors text-lg shadow-xl active:scale-95 duration-200">
              Contact Privacy Team
            </button>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-24 flex flex-col md:flex-row justify-between items-center text-slate-400 font-mono text-[10px] tracking-widest border-t border-slate-200 pt-12 gap-4">
          <p className="font-bold text-slate-500 uppercase">INFOTECH SYSTEMS &copy; 2026</p>
          <div className="flex gap-8 uppercase">
            <a href="#" className="hover:text-secondary-dark transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary-dark transition-colors">Compliance</a>
            <a href="#" className="hover:text-secondary-dark transition-colors">Security</a>
          </div>
          <p>ISO 27001 CERTIFIED</p>
        </footer>

      </main>
    </div>
  );
};

export default PrivacyPolicy;