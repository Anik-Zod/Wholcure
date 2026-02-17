import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllBusiness, getBusinessById } from "@/services/businessService";
import { ChevronLeft, Mail, Share2, Globe, MapPin } from "lucide-react"; // Optional: Add Lucide icons
import Link from "next/link";
import { Business } from "@/types";


export const dynamic = 'force-dynamic';

const BusinessDetailPage = async ({ params }: {params:Promise<{businessId:string}>}) => {
  const { businessId } = await params;
  
  let business: Business | null = null;

  try {
    business = await getBusinessById(businessId);
  } catch (error) {
    console.error(`Failed to fetch business ${businessId}:`, error);
  }

  if (!business) notFound();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/directory" className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Directory
          </Link>
          <div className="flex gap-3">
            <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header Section */}
            <section className="space-y-6">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white">
                <Image
                  src={business.logo}
                  alt={business.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  {business.title}
                </h1>
                
                <div className="flex flex-wrap gap-2">
                  {business.tags?.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[11px] uppercase tracking-wider font-bold rounded-md bg-secondary-dark text-white">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
                  {business.description}
                </p>
              </div>
            </section>

            <hr className="border-slate-200" />

            {/* Detailed Content */}
            <article className="prose prose-slate prose-lg max-w-none">
              <h3 className="text-slate-900 font-semibold">Overview</h3>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                {business.details}
              </div>
            </article>
          </div>

          {/* RIGHT COLUMN: Action Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Primary Action Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Connect</h3>
                <p className="text-slate-500 text-sm mb-6">
                  Ready to explore opportunities or inquire about services?
                </p>
                
                <div className="space-y-3">
                  <Link href={"/#contact"}>
                                    <button className="w-full flex items-center justify-center gap-2 bg-secondary-dark text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-blue-200">
                    <Mail className="w-4 h-4" />
                    Contact Business
                  </button>
                  </Link>
                  <Link href={business.websiteLink || "/"}>
                  <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold py-4 rounded-xl transition-all">
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </button>
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 space-y-4">
                   <div className="flex items-center gap-3 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>Remote / Global</span>
                   </div>
                </div>
              </div>

              {/* Verified Badge / Trust Element */}
              <div className="px-4 py-3 bg-emerald-50 rounded-2xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-800 uppercase tracking-wide">
                  Verified Business Entity
                </span>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default BusinessDetailPage;