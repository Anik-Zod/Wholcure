import { Briefcase, Building2, ListStart } from 'lucide-react'
import React from 'react'

const FeaturesSection = ({biz}) => {
  return (
 <div>
      <div className="grid md:grid-cols-2 gap-8 mt-5">
        
        {/* --- CARD 1: FEATURES --- */}
        <div className="group relative p-10 rounded-[25px] border-t-4 border-[#f36d33] bg-white  shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
          {/* Background Number 01 */}
    
  
          <div className="w-[70px] h-[70px] p-4 flex items-center justify-center bg-gradient-primary rounded-2xl text-white mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            <ListStart className="w-full h-full" />
          </div>
          
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Features</h4>
          <ul className="space-y-3">
            {biz.details.features.map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-3 text-gray-600 text-sm group/li">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="group-hover/li:text-primary transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* --- CARD 2: SERVICES --- */}
       
        {/* --- CARD 3: INDUSTRIES --- */}
   
          <div className="group relative p-10 rounded-[25px] border-t-4 border-[#f36d33] bg-white  shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
            
          {/* Background Number 03 */}
      
  
          <div className='flex  items-center gap-5'>
            <div className="w-[70px] h-[70px]  p-4 flex items-center justify-center bg-gradient-primary rounded-2xl text-white mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
            <Building2 className="w-full h-full" />
          </div>
          
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Industries</h4>
          </div>
          <ul className="space-y-3">
    {biz.details.industries.map((item: string, index: number) => (
  <span 
    key={index} 
    className="cursor-default rounded-full border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#f36d33] hover:bg-white hover:text-[#f36d33] hover:shadow-md mx-0.5"
  >
    {item}
  </span>
))}
          </ul>
        </div>
  
      </div>
    
    </div>
  )
}

export default FeaturesSection
