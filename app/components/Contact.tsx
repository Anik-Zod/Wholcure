'use client';
import { FormEvent, useState } from 'react';

export default function ProfessionalContact() {
  const [success, setSuccess] = useState(false);

  return (
    <section className="py-24 bg-[#FAFBFC] relative overflow-hidden">
      {/* Subtle Grid Overlay for "Tech" Professionalism */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Brand & Info Column */}
          <div className="lg:w-5/12 space-y-10">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] text-xs border-l-4 border-primary pl-4 mb-4 block">
                ESTABLISHED EXCELLENCE
              </span>
              <h2 className="text-5xl font-black text-slate-900 leading-tight">
                Let’s build the <br />
                <span className="text-primary">future</span> together.
              </h2>
            </div>

            {/* Structured Location Matrix */}
            <div className="space-y-8">
              {[
                { city: "Karachi", type: "Head Office", address: "Sharah-e-Faisal, Sindh", icon: "fa-building" },
                { city: "Hyderabad", type: "Sub Office", address: "Qasimabad, Sindh", icon: "fa-landmark" }
              ].map((loc, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-none w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className={`fas ${loc.icon}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{loc.type}</p>
                    <h4 className="text-lg font-bold text-slate-800">{loc.city}</h4>
                    <p className="text-slate-500 text-sm">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Social Bar */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm font-semibold text-slate-900 mb-4">Global Connectivity</p>
              <div className="flex gap-3">
                {['linkedin-in', 'facebook-f', 'instagram', 'youtube'].map((s) => (
                  <a key={s} href="#" className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all">
                    <i className={`fab fa-${s}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Precision Form Card */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input type="text" placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all text-slate-900" />
                    <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Full Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all text-slate-900" />
                    <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                  </div>
                </div>

                <div className="relative">
                  <select className="w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Investment Opportunities</option>
                    <option>Technical Support</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-0 top-4 text-xs text-slate-300 pointer-events-none" />
                </div>

                <div className="relative">
                  <textarea rows={4} placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all resize-none" />
                  <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Project Details</label>
                </div>

                <button className="group relative w-full py-5 bg-slate-900 overflow-hidden rounded-2xl transition-all hover:bg-primary">
                  <div className="relative z-10 flex items-center justify-center gap-3 text-white font-bold tracking-wide">
                    <span>INITIATE CONSULTATION</span>
                    <i className="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform" />
                  </div>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}