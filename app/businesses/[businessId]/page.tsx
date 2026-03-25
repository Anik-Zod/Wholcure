import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllBusiness, getBusinessById } from "@/services/businessService";
import { ChevronLeft, Mail, Share2, Globe, MapPin } from "lucide-react"; 
import Link from "next/link";
import { Business } from "@/types";
import { ListStart } from 'lucide-react';
import { Briefcase } from "lucide-react";
import { Building2 } from "lucide-react"; 
export const dynamic = "force-dynamic";

const BusinessDetailPage = async ({
  params,
}: {
  params: Promise<{ businessId: string }>;
}) => {
  const { businessId } = await params;

  let business: Business | null = null;

  try {
    business = await getBusinessById(businessId);
  } catch (error) {
    console.error(`Failed to fetch business ${businessId}:`, error);
  }

  if (!business) notFound();

  const biz = business;
  const titleArray = business.title.split(" ");
  const lastWord = titleArray.pop();
  const mainTitle = titleArray.join(" ");

  return (
    <>
    <section className="">
      <div className="min-h-screen  text-black flex items-center overflow-hidden relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <section className="px-6 py-12 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-16">
            {/* Left Content Column */}
            <div className="flex flex-col mt-10 space-y-8 ">
              <div>
                <div className="flex flex-col items-start justify-items-start space-y-4 mb-8 ">
                  {/* Flex Container for Badges */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {/* 1. Verification Badge */}
                    {biz.isVerified ? (
                      <div
                        className="group relative flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md 
      transition-all hover:border-primary/60"
                      >
                        {/* Animated Shine Effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none rounded-full"></div>

                        {/* Checkmark Icon */}
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] drop-shadow-sm">
                          Verified Business
                        </span>
                      </div>
                    ) : (
                      <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                        Standard Listing
                      </div>
                    )}

                    {/* 2. Category Badge */}
                    <div className="px-4 py-2 rounded-full border  text-primary  bg-primary/10   border-primary/30 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                      {biz.category || "Professional Entity"}
                    </div>
                    
                  </div>
                  
                </div>
                  <div className="flex flex-wrap gap-3 mt-8">
  {/* Location Pill */}
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-primary border  rounded-2xl backdrop-blur-md">
    <MapPin className="w-4 h-4 text-primary  " />
    <span className="text-xs font-semibold text-gray-300 tracking-wide">
      {biz.location || "Global Ops"}
    </span>
  </div>

  {/* Website Pill */}
  {biz.website && (
    <a 
      href={biz.website} 
      target="_blank"
      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:border-primary/50 transition-all"
    >
      <Globe className="w-4 h-4 text-primary" />
      <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">
        Visit Website
      </span>
    </a>
  )}
</div>
                <h1 className="text-5xl text-text-primary lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                  {mainTitle} {""}
                  <span className="bg-gradient-primary bg-clip-text text-transparent ">
                    {lastWord}
                  </span>
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  {biz.tags && biz.tags.length > 0 ? (
                    biz.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 rounded-full border border-primary/20 bg-[primary]/10 text-primary text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm"
                      >
                        # {tag}
                      </span>
                    ))
                  ) : (
                    <span className="px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                      Verified Business
                    </span>
                  )}
                </div>

                <p className="text-text-secondary  max-w-xl leading-relaxed text-lg">
                  {biz.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/portfolio"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all transform hover:-translate-y-1 shadow-lg shadow-[#e8c67a]/10"
                >
                  View Portfolio &rarr;
                </Link>

                <Link
                  href="/contact"
                  className="border border-white/10 px-6 py-4 rounded-lg font-medium hover:border-primary hover:text-primary transition-all bg-white/5"
                >
                  Contact Us
                </Link>
              </div>

              {/* <p className="text-sm text-gray-500">
              Not sure what you need?
              <Link
                href="/review"
                className="text-[#e8c67a] underline underline-offset-4 ml-2 hover:text-white transition-colors"
              >
                Get a free website review &rarr;
              </Link>
            </p> */}
            </div>

            {/* Right Content Column (The Logo Circle) */}
            <div className="flex justify-center items-center">
              <div className="group relative w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-primary flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out hover:shadow-[0_0_50px_rgba(232,198,122,0.2)]">
                {/* The Image Container */}
                <div className="relative w-full h-full p-16 lg:p-24 transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image
                    src={biz.logo}
                    alt={biz.title}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>

                {/* Optional: Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

      </div>
      </section>
<section className="py-24 bg-hero-bg overflow-hidden ">
  <div className="container mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-20 flex flex-col justify-center items-center">
      <h3 className="bg-gradient-primary bg-clip-text text-transparent text-sm font-bold uppercase tracking-[0.3em] mb-4">
        OUR STRENGTHS
      </h3>
     
      <p className="text-text-secondary max-w-xl leading-relaxed">
        {biz.whyWeBest}
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* --- CARD 1: FEATURES --- */}
      <div className="group relative p-10 rounded-[2em] bg-white  shadow-gray-200/50 hover:-translate-y-2 border border-gray-100 overflow-hidden card-3d  shadow-custom-md transition-all duration-300 h hover:shadow-custom-3d group">
        {/* Background Number 01 */}
        <div className="absolute top-4 right-8 text-7xl font-black text-primary/10 leading-none select-none">
          01
        </div>

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
          <div className="group relative p-10 rounded-[2em] bg-white  shadow-gray-200/50 hover:-translate-y-2 border border-gray-100 overflow-hidden card-3d  shadow-custom-md transition-all duration-300 h hover:shadow-custom-3d group">
        {/* Background Number 02 */}
        <div className="absolute top-4 right-8 text-7xl font-black text-primary/10 leading-none select-none">
          02
        </div>

        <div className="w-[70px] h-[70px] p-4 flex items-center justify-center bg-gradient-primary rounded-2xl text-white mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
          <Briefcase className="w-full h-full" />
        </div>
        
        <h4 className="text-2xl font-bold text-gray-900 mb-4">Services</h4>
        <ul className="space-y-3">
          {biz.details.services.map((item: string, index: number) => (
            <li key={index} className="flex items-center gap-3 text-gray-600 text-sm group/li">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="group-hover/li:text-primary transition-colors">{item}</span>
            </li>
          ))}
        </ul>
    
      </div>

      {/* --- CARD 3: INDUSTRIES --- */}
        <div className="group relative p-10 rounded-[2em] bg-white  shadow-gray-200/50 hover:-translate-y-2 border border-gray-100 overflow-hidden card-3d  shadow-custom-md transition-all duration-300 h hover:shadow-custom-3d group">
        {/* Background Number 03 */}
        <div className="absolute top-4 right-8 text-7xl font-black text-primary/10 leading-none select-none">
          03
        </div>

        <div className="w-[70px] h-[70px] p-4 flex items-center justify-center bg-gradient-primary rounded-2xl text-white mb-8 shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
          <Building2 className="w-full h-full" />
        </div>
        
        <h4 className="text-2xl font-bold text-gray-900 mb-4">Industries</h4>
        <ul className="space-y-3">
          {biz.details.industries.map((item: string, index: number) => (
            <li key={index} className="flex items-center gap-3 text-gray-600 text-sm group/li">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="group-hover/li:text-primary transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</section>

    </>
  );
};





export default BusinessDetailPage;
