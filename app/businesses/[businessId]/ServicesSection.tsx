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
      colour1: '#F15126', 
      colour2: '#349CD7', 
    },
    {
      title: "Digital Brand Design",
      desc: "From logos to color palettes, together we'll develop your brand that stands out from the competition.",
      icon: <Palette size={32} />,
      isFeatured: true,
      colour1: '#88BB40', 
      colour2: '#FEB713',
    },
    {
      title: "Commercial Excellence",
      desc: "Digital products come in many shapes and sizes—from apps and automotive interfaces.",
      icon: <Building2 size={24} />,
      isFeatured: false,
      colour1: '#FEB713', 
      colour2: '#F15126', 
    }
  ];

  return (
    <div className=" py-12 md:py-3">
      {/* grid-cols-2: 2 колонки на мобилках
          md:grid-cols-2: 2 колонки на планшетах
          lg:grid-cols-3: 3 колонки на десктопе
          gap-3: маленькое расстояние на мобилках, чтобы влезло 2 в ряд
      */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6 justify-items-center max-w-7xl mx-auto">
        {services.map((r, index) => (
          <div 
            key={index} 
            className="relative group w-full h-[380px] md:h-[450px] rounded-[24px] md:rounded-[48px] border border-black/5 overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02] bg-white"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
            <div 
              className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 blur-[60px] md:blur-[80px] rounded-full pointer-events-none opacity-30"
              style={{ backgroundColor: r.colour1 }}
            ></div>

            {/* Content */}
            <div className="relative z-20 p-5 md:p-10 h-full flex flex-col">
              <div className="flex-grow">
                {/* Уменьшил шрифт для мобилок, чтобы текст не вылезал */}
                <h3 className="text-gray-900 text-lg md:text-4xl font-bold leading-tight mb-2 md:mb-4 tracking-tight">
                  {r.title}
                </h3>
                <p className="text-slate-600 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {r.desc}
                </p>
              </div>

              <div className="mt-4 md:mt-8">
                <div className="w-full h-[1px] bg-gray-200/50 mb-4 md:mb-8"></div>
                <button className="w-full sm:w-auto px-4 md:px-8 py-2 md:py-4 text-[10px] md:text-sm font-bold text-white bg-slate-900 rounded-full transition-all duration-500 hover:bg-[#F15126] hover:shadow-2xl active:scale-[0.98] uppercase tracking-wider">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection;