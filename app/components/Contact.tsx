'use client';
import { FormEvent, useState } from 'react';
import SectionHeader from './SectionHeader';

const Social = [
  { icon: 'linkedin-in', to: "#" },
  { icon: 'tiktok', to: "#" },
  { icon: 'whatsapp', to: "#" },
  { icon: 'facebook-f', to: "#" },
  { icon: 'instagram', to: "#" },
  { icon: 'youtube', to: "#" }
];

export default function ProfessionalContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFBFC] relative overflow-hidden">
      <SectionHeader
        description="Let's discuss how we can help your business grow."
        title="Contact"
        highlightedText='us'
        badge='get in touch'
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Brand & Info */}
          <div className="lg:w-5/12 space-y-12">
            <div>
              <span className="text-primary font-bold tracking-[0.3em] text-xs border-l-4 border-primary pl-4 mb-4 block uppercase">
                Established Excellence
              </span>
              <h2 className="text-5xl font-black text-slate-900 leading-[1.1]">
                Let’s build the <br />
                <span className="text-primary">future</span> together.
              </h2>
            </div>

            {/* Contact Details Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {/* Offices */}
              {[
                { city: "Karachi", type: "Head Office", info: "Sharah-e-Faisal, Sindh", icon: "fa-building" },
                { city: "Hyderabad", type: "Sub Office", info: "Qasimabad, Sindh", icon: "fa-landmark" }
              ].map((loc, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-none w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i className={`fas ${loc.icon}`} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{loc.type}</p>
                    <h4 className="text-lg font-bold text-slate-800">{loc.city}</h4>
                    <p className="text-slate-500 text-sm">{loc.info}</p>
                  </div>
                </div>
              ))}

              {/* Communication Channels */}
              <div className="flex gap-5 group">
                <div className="flex-none w-12 group-hover:bg-primary group-hover:text-white transition-all duration-300 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <i className="fas fa-phone-alt" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call Us</p>
                  <p className="text-lg font-bold text-slate-800">+92 328 2296963</p>
                  <p className="text-slate-500 text-xs">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>

              <div className="flex gap-5 group ">
                <div className="flex-none w-12 group-hover:bg-primary group-hover:text-white transition-all duration-300 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Us</p>
                  <p className="text-lg font-bold text-slate-800">info@wholcure.com</p>
                  <p className="text-slate-500 text-xs">Support: support@wholcure.com</p>
                </div>
              </div>
            </div>

            {/* Social Connectivity */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">Global Connectivity</p>
              <div className="flex flex-wrap gap-3">
                {Social.map((s) => (
                  <a key={s.icon} href={s.to} className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all">
                    <i className={`fab fa-${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100">
              {success ? (
                <div className="py-20 text-center space-y-4">
                   <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                     <i className="fas fa-check" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                   <p className="text-slate-500">We'll get back to you within 24 hours.</p>
                   <button onClick={() => setSuccess(false)} className="text-primary font-bold text-sm underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" required placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all text-slate-900" />
                      <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-medium">Full Name</label>
                    </div>
                    <div className="relative group">
                      <input type="email" required placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all text-slate-900" />
                      <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-medium">Email Address</label>
                    </div>
                  </div>

                  <div className="relative">
                    <select className="w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary appearance-none cursor-pointer text-slate-700 font-medium">
                      <option>General Inquiry</option>
                      <option>Investment Opportunities</option>
                      <option>Technical Support</option>
                    </select>
                    <label className="absolute -top-4 left-0 text-xs text-primary font-medium">Subject Matter</label>
                    <i className="fas fa-chevron-down absolute right-0 top-4 text-xs text-slate-300 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <textarea rows={4} required placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all resize-none" />
                    <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs font-medium">Project Details</label>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="group relative w-full py-5 bg-slate-900 overflow-hidden rounded-2xl transition-all hover:bg-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3 text-white font-bold tracking-widest">
                      <span>{isSubmitting ? 'SENDING...' : 'INITIATE CONSULTATION'}</span>
                      {!isSubmitting && <i className="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform" />}
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}