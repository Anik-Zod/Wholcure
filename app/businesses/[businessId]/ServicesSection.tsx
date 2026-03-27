import { Briefcase, Building2, ListStart } from 'lucide-react'
import React from 'react'


const ServicesSection = ({biz}) => {
  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-[60px] [perspective:1000px]">
  
  <div className="group relative h-[480px] bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-x-4 hover:-rotate-y-4 hover:scale-[1.02] hover:border-primary/20 hover:shadow-[0_30px_60px_rgba(243,109,51,0.1)]">
    
    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(243,109,51,0.08),transparent_70%)] group-hover:opacity-100"></div>

    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
      
    

      <div>
        <h3 className="font-playfair text-[2.5rem] leading-[1.1] text-[#1a1a1a] mb-5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:text-primary">
          Residential <br/> Masterpieces
        </h3>
        <p className="font-inter text-[#666666] text-base leading-relaxed max-w-[85%]">
          Crafting living spaces that blend architectural innovation with soulful design.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quas magni provident, molestias, debitis vero voluptas 
        </p>
      </div>

      <div>
        <div className="w-[30px] h-[0.5] bg-[#e0e0e0] mb-5 transition-all duration-500 group-hover:w-full group-hover:bg-primary"></div>
    
      </div>
    </div>
  </div>
<div className="group relative h-[480px] bg-white rounded-[24px] overflow-hidden border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-x-4 hover:-rotate-y-4 hover:scale-[1.02] hover:border-primary/20 hover:shadow-[0_30px_60px_rgba(243,109,51,0.1)]">
    
    <div className="absolute inset-0 opacity-0 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(243,109,51,0.08),transparent_70%)] group-hover:opacity-100"></div>

    <div className="relative z-10 h-full p-10 flex flex-col justify-between">
      
    

      <div>
        <h3 className="font-playfair text-[2.5rem] leading-[1.1] text-[#1a1a1a] mb-5 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:text-primary">
          Residential <br/> Masterpieces
        </h3>
        <p className="font-inter text-[#666666] text-base leading-relaxed max-w-[85%]">
          Crafting living spaces that blend architectural innovation with soulful design.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam quas magni provident, molestias, debitis vero voluptas 
        </p>
      </div>

      <div>
        <div className="w-[30px] h-[0.5] bg-[#e0e0e0] mb-5 transition-all duration-500 group-hover:w-full group-hover:bg-primary"></div>
    
      </div>
    </div>
  </div>
  </div>
    
    </div>
  )
}

export default ServicesSection
