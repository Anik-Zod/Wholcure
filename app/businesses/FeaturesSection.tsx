import { Briefcase, Building2, ListStart } from 'lucide-react'
import React from 'react'
import { Business } from "@/types";

const FeaturesSection = ({biz}: { biz: Business }) => {
  return (
    <div>
      <div>
        {/* Mobile pe 2 columns dikhane ke liye 'grid-cols-2' rakha hai aur gap thoda kam kiya hai (gap-4) */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 mt-5">
          
          {/* --- CARD 1: FEATURES --- */}
          <div className="group relative p-6 md:p-10 rounded-[25px] border-t-4 border-[#f05225] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-3 md:p-4 flex items-center justify-center bg-[#f05225] rounded-2xl text-white mb-6 md:mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
              <ListStart className="w-full h-full" />
            </div>
            
            <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">Features</h4>
            <ul className="space-y-2 md:space-y-3">
              {biz.details.features.map((item: string, index: number) => (
                <li key={index} className="flex items-center gap-2 md:gap-3 text-gray-600 text-xs md:text-sm group/li">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f05225] shrink-0" />
                  <span className="group-hover/li:text-[#f05225] transition-colors line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
    
          {/* --- CARD 2: INDUSTRIES --- */}
          <div className="group relative p-6 md:p-10 rounded-[25px] border-t-4 border-[#f05225] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-5'>
              <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] p-3 md:p-4 flex items-center justify-center bg-[#f05225] rounded-2xl text-white mb-4 md:mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                <Building2 className="w-full h-full" />
              </div>
              <h4 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">Industries</h4>
            </div>

            {/* Industries ke chips ko flex-wrap kiya hai taaki mobile par overlap na ho */}
            <div className="flex flex-wrap gap-2">
              {biz.details.industries.map((item: string, index: number) => (
                <span 
                  key={index} 
                  className="cursor-default rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 md:px-5 md:py-2.5 text-[10px] md:text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#f05225] hover:bg-white hover:text-[#f05225] hover:shadow-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
    
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection