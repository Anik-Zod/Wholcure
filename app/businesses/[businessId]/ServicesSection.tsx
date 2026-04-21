import { Building2, Layout, Palette } from 'lucide-react'
import React from 'react'
import { Business, Service } from "@/types";

// 1. Skeleton Loader Component (Bahar define kiya hai)
const SkeletonServiceCard = () => (
  <div className="relative w-full h-[380px] md:h-[450px] rounded-[24px] md:rounded-[48px] bg-white border border-black/5 overflow-hidden shadow-sm animate-pulse">
    <div className="p-5 md:p-10 h-full flex flex-col">
      <div className="flex-grow">
        {/* Title Skeleton */}
        <div className="h-6 md:h-10 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-3 md:h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-3 md:h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-3 md:h-4 bg-gray-100 rounded w-2/3"></div>
        </div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <div className="w-full h-[1px] bg-gray-100 mb-4 md:mb-8"></div>
        {/* Button Skeleton */}
        <div className="w-24 md:w-32 h-8 md:h-12 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ServicesSection = ({ biz }: { biz: Business | null }) => {
 

  // 2. Loading State Check
  if (!biz) {
    return (
      <div className="py-12 md:py-3">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6 max-w-7xl mx-auto">
          <SkeletonServiceCard />
          <SkeletonServiceCard />
          <SkeletonServiceCard />
        </div>
      </div>
    );
  }

  return (
    <div className=" py-12 md:py-3">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-3 md:p-6 justify-items-center max-w-7xl mx-auto">
        {biz.services?.map((r: Service, index: number) => (
          <div 
            key={index} 
            className="relative group w-full h-[380px] md:h-[450px] rounded-[24px] md:rounded-[48px] border border-black/5 overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02] bg-white"
          >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-10"></div>
            <div 
              className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 blur-[60px] md:blur-[80px] rounded-full pointer-events-none opacity-30 transition-opacity group-hover:opacity-50"
              style={{ backgroundColor: r.bgColour ||"bg-red-500"}}
            ></div>

            {/* Content */}
            <div className="relative z-20 p-5 md:p-10 h-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-gray-900 text-lg md:text-4xl font-bold leading-tight mb-2 md:mb-4 tracking-tight">
                  {r.title || "Service Title"}
                </h3>
                <p className="text-slate-600 text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                  {r.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
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