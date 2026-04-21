"use client";
import { Business } from '@/types'
import React from 'react'

const Partners = ({ biz }: { biz: Business | null }) => {
  return (
    <div>
   {biz?.partners && biz.partners.length > 0 && (
  <div className="py-16 text-center">
    <p className=" text-sm font-bold uppercase mb-4 text-slate-400 ">
      Strategic Partners
    </p>
    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
      {/* Array par map chalana zaroori hai */}
      {biz.partners.map((partner, index) => (
        <span key={index} className="text-2xl font-semibold italic">
          {partner}
        </span>
      ))}
    </div>
  </div>
)}

    </div>
  )
}

export default Partners
