import ContactUs from './ContactUs';
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

  return (
    <section id="contact" className=" px-4 py-14 lg:py-24 bg-bg-light relative overflow-hidden">
      <SectionHeader
        description="Let's discuss how we can help your business grow."
        title="Contact"
        highlightedText='us'
        badge='get in touch'
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Brand & Info */}
          <div className="lg:w-5/12 space-y-12 px-5">
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
            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-100">
              <ContactUs /> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}