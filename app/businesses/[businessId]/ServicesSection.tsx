// import { Building2, Layout, Palette, ArrowUpRight } from 'lucide-react'
// import React from 'react'
// import { Business } from "@/types";

// const ServicesSection = ({ biz }: { biz: Business }) => {
//   const services = [
//     {
//       title: "Residential Masterpieces",
//       desc: "Crafting living spaces that blend architectural innovation with soulful design.",
//       icon: <Layout size={24} />,
//       isFeatured: false
//     },
//     {
//       title: "Digital Brand Design",
//       desc: "From logos to color palettes, together we'll develop your brand that stands out from the competition and resonates.",
//       icon: <Palette size={32} />,
//       isFeatured: true 
//     },
//     {
//       title: "Commercial Excellence",
//       desc: "Digital products come in many shapes and sizes—from apps and automotive interfaces.",
//       icon: <Building2 size={24} />,
//       isFeatured: false
//     }
//   ];

//   return (
//     <div classNameName="bg-[#fcfcfc] py-24 px-6 md:px-[60px]">
//       <div classNameName="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
        
//         {services.map((service, idx) => (
//           <div 
//             key={idx}
//             classNameName={`group relative flex flex-col transition-all duration-700 ease-out rounded-[48px] border overflow-hidden
//               ${service.isFeatured 
//                 ? "h-[600px] bg-white border-primary/20 z-20 lg:scale-105 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15),0_30px_60px_-30px_rgba(243,109,51,0.3)]" 
//                 : "h-[500px] bg-slate-50/50 border-black/5 hover:bg-white hover:border-black/10 hover:shadow-xl"
//               }`}
//           >
//             {/* --- PREMIUM ENHANCEMENTS FOR CENTER CARD --- */}
//             {service.isFeatured && (
//               <>
//                 {/* 1. Subtle Inner Glow & Reflection */}
//                 <div classNameName="absolute inset-0 bg-gradient-to-tr from-primary/[0.02] via-transparent to-white pointer-events-none" />
                
//                 {/* 2. Top Edge Shine (The "Glass" effect) */}
//                 <div classNameName="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-80 z-10" />

//                 {/* 3. Dark Bottom Shadow Overlay */}
//                 <div classNameName="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-40 bg-black/[0.08] blur-[100px] rounded-full pointer-events-none" />
//               </>
//             )}

//             <div classNameName="relative z-20 h-full p-12 flex flex-col">
              
//               {/* Icon Container - More Geometric */}
//               <div classNameName={`w-full aspect-square rounded-[36px] mb-10 flex items-center justify-center relative overflow-hidden border 
//                 ${service.isFeatured ? "bg-slate-50 border-primary/10" : "bg-white border-black/5"}`}>
                
//                 <div classNameName="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/40"></div>

//                 <div classNameName={`w-20 h-20 flex items-center justify-center backdrop-blur-md border transition-all duration-700 
//                    ${service.isFeatured 
//                     ? "bg-primary shadow-[0_20px_40px_-10px_rgba(243,109,51,0.5)] border-white/30 text-white rounded-[24px] rotate-[-8deg] group-hover:rotate-0" 
//                     : "bg-white shadow-sm border-black/5 text-slate-400 group-hover:text-primary rounded-2xl group-hover:rotate-6"}`}>
//                     {service.icon}
//                 </div>
//               </div>

//               {/* Text Content - Bold & Clean */}
//               <div classNameName="flex-grow">
//                 <h3 classNameName={`font-bold leading-[1.1] mb-5 tracking-tight transition-all duration-500
//                   ${service.isFeatured ? "text-[2.6rem] text-slate-900" : "text-[1.8rem] text-slate-800"}`}>
//                   {service.title.split(' ').map((word, i) => (
//                     <React.Fragment key={i}>
//                       {word} {i === 0 && <br/>}
//                     </React.Fragment>
//                   ))}
//                 </h3>
//                 <p classNameName={`leading-relaxed max-w-[90%] ${service.isFeatured ? "text-slate-600 text-base" : "text-slate-400 text-sm"}`}>
//                   {service.desc}
//                 </p>
//               </div>

//               {/* Refined Button - Exactly like image */}
//               <div classNameName="mt-8">
//                 {service.isFeatured && (
//                     <div classNameName="w-full h-[1px] bg-slate-100 mb-8" />
//                 )}
                
//                 <button classNameName={`flex items-center justify-center gap-3 py-4 px-10 rounded-full text-[12px] font-black uppercase tracking-[0.15em] transition-all duration-500
//                   ${service.isFeatured 
//                     ? "bg-[#0a0c10] text-white hover:bg-primary shadow-2xl hover:-translate-y-1 w-fit" 
//                     : "bg-transparent text-slate-400 border border-slate-200 hover:border-primary hover:text-primary w-fit"}`}>
//                   Learn more
//                   <ArrowUpRight size={16} classNameName={service.isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   )
// }

// export default ServicesSection;
import { Building2, Layout, Palette, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Business } from "@/types";

const ServicesSection = ({ biz }: { biz: Business }) => {
 const services = [
    {
      title: "Residential Masterpieces",
      desc: "Crafting living spaces that blend architectural innovation with soulful design.",
      icon: <Layout size={24} />,
      isFeatured: false,
    colour1: '#F15126', // Orange
      colour2: '#349CD7', // Blue glow
    },
    {
      title: "Digital Brand Design",
      desc: "From logos to color palettes, together we'll develop your brand that stands out from the competition and resonates.",
      icon: <Palette size={32} />,
      isFeatured: true ,
        colour1: '#88BB40', // Orange
      colour2: '#FEB713',
    },
    {
      title: "Commercial Excellence",
      desc: "Digital products come in many shapes and sizes—from apps and automotive interfaces.",
      icon: <Building2 size={24} />,
      isFeatured: false,
        colour1: '#FEB713', // Orange
        colour2: '#F15126', // Orange

    }
  ];

  return (
    <>
 


<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
  {services.map((r, index) => (
    <div 
      key={index} 
      className="relative group w-full max-w-[400px] h-[450px] rounded-[48px] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-white/5"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
      <div 
        className="absolute -bottom-20 -left-20 w-80 h-80 blur-[80px] rounded-full pointer-events-none opacity-50"
        style={{ backgroundColor: r.colour1 }}
      ></div>

      {/* Content */}
      <div className="relative z-20 p-8 md:p-10 h-full flex flex-col">
        <div className="flex-grow">
          <h3 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight">
            {r.title || "Digital Brand Design"}
          </h3>
        <p className="text-slate-600  text-base leading-relaxed">
          From logos to color palettes, together we ll develop your brand that stands out from the competition and resonates with your audience.
        </p>
        </div>

        <div className="mt-8">
          <div className="w-full h-[1px] bg-gray-200/50 mb-8"></div>
          <button className="w-full sm:w-auto px-8 py-4 font-bold text-white bg-slate-900 rounded-full transition-all duration-500 hover:bg-[#f05225] hover:shadow-2xl active:scale-[0.98]">
            Contact us
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
{/* organe:#F15126 */}

{/* #FEB713 yelow
#88BB40 green
#349CD7 blue */}
    </>
  )
}

export default ServicesSection;
