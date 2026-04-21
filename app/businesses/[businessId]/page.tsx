"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Globe, Mail, MapPin, Share2 } from "lucide-react"; 
import Link from "next/link";
import { Business } from "@/types";
import FeaturesSection from "../FeaturesSection";
import { BouncingBackground } from "./BouncingBackground";
import ServicesSection from "./ServicesSection";
import { getBusinessById } from "@/services/businessService";
import Partners from "./Partners";


const BusinessDetailPage = ({
  params,
}: {
  params: Promise<{ businessId: string }>;
}) => {
  const [biz, setBiz] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [buttonData, setButtonData] = useState({ label: "Loading...", path: "#" });

  useEffect(() => {
    const initPage = async () => {
      try {
        const { businessId } = await params;
        const businessData = await getBusinessById(businessId);
        
        if (!businessData) {
          setLoading(false);
          return;
        }
        setBiz(businessData);

        
      } catch (error) {
        console.error("Initialization error:", error);
      } finally {
        setLoading(false);
      }
    };

    initPage();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-7xl px-6 lg:px-20 grid lg:grid-cols-2 gap-16 animate-pulse">
           <div className="space-y-6">
              <div className="h-8 w-40 bg-gray-200 rounded-full"></div>
              <div className="h-16 w-full bg-gray-200 rounded-xl"></div>
              <div className="h-24 w-5/6 bg-gray-100 rounded-xl"></div>
              <div className="flex gap-4"><div className="h-12 w-32 bg-gray-200 rounded-lg"></div></div>
           </div>
           <div className="flex justify-center"><div className="w-80 h-80 bg-gray-100 rounded-full"></div></div>
        </div>
      </div>
    );
  }

  if (!biz) notFound();

  const titleArray = biz.title.split(" ");
  const lastWord = titleArray.pop();
  const mainTitle = titleArray.join(" ");

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden mt-10">
      
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <BouncingBackground />
      </div>

      {/* Hero Section - Balanced Horizontal Width */}
      <section className="relative z-10 w-full max-w-[1440px] mx-auto px-6 py-20 lg:px-20 min-h-[90vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Content: Text & CTA */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-3">
                {biz.isVerified && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Verified</span>
                  </div>
                )}
                <div className="px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                  {biz.category || "Professional"}
                </div>
              </div>

              {/* Title & Description */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 tracking-tight">
                {mainTitle} <span className="text-primary">{lastWord}</span>
              </h1>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{biz.location}</span>
                </div>
                {biz.website && (
                  <a href={biz.website} target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium uppercase tracking-tighter">Official Site</span>
                  </a>
                )}
              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                {biz.mainDescription}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">

<a 
  href={biz.mainButtonLink} 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform inline-block"
>
  {biz.mainButtonRewrite || "View PDF"}
</a>
              <Link href="/contact" className="border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Contact Us
              </Link>
            </div>

            {/* CTA Container */}
            {/* <div className="flex items-center gap-2 mb-4 w-full md:w-auto px-4 md:px-0">
              <Link href="/#contact" className="flex-1 md:flex-none">
                <button className="w-full px-6 py-2 bg-[#1877F2] text-white font-bold rounded-lg hover:bg-[#166FE5] shadow-sm flex items-center justify-center gap-2 transition-colors">
                  <Mail className="w-4 h-4 fill-white" />
                  Contact Now
                </button>
              </Link>
              <button className="px-6 py-2 bg-[#E4E6EB] text-[#050505] font-bold rounded-lg hover:bg-[#D8DADF] flex items-center justify-center gap-2 transition-colors flex-1 md:flex-none">
                <Share2 className="w-4 h-4" />
                Share Page
              </button>
              <button className="p-2.5 bg-[#E4E6EB] text-black rounded-lg hover:bg-gray-200 hidden sm:block">
                <i className="fas fa-caret-down" />
              </button>
            </div> */}
          </div>

          {/* Right Content: Premium Logo Display */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
               {/* Decorative Ring */}
                      <div className="group relative w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-primary flex items-center justify-center overflow-hidden transition-all duration-700 hover:shadow-[0_0_50px_rgba(232,198,122,0.2)]">
              <div className="relative w-full h-full p-16 lg:p-24 transition-transform duration-500 group-hover:scale-110">
                <Image src={biz.logo} alt={biz.title} fill className="object-contain p-4" priority />
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* Strengths & Services - Full Width Adjusted */}
      <section className="w-full bg-gray-50/50 py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
       <div className="max-w-2xl mb-16 mx-auto text-center">
  <h3 className="text-primary text-sm font-bold uppercase mb-4">{biz.serviceHeading}</h3>
  <p className="text-2xl text-gray-800 font-medium leading-snug">
    {biz.whyWeBest}
  </p>
</div>
          
          <ServicesSection biz={biz} />

          <Partners biz={biz} />
          <div className="">
            <FeaturesSection biz={biz} />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default BusinessDetailPage;