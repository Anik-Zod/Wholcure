import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllBusiness, getBusinessById } from "@/services/businessService";
import { ChevronLeft, Mail, Share2, Globe, MapPin } from "lucide-react"; // Optional: Add Lucide icons
import Link from "next/link";
import { Business } from "@/types";


export const dynamic = 'force-dynamic';

const BusinessDetailPage = async ({ params }: { params: Promise<{ businessId: string }> }) => {
  const { businessId } = await params;

  let business: Business | null = null;

  try {
    business = await getBusinessById(businessId);
  } catch (error) {
    console.error(`Failed to fetch business ${businessId}:`, error);
  }

  if (!business) notFound();

  const biz = business;

  return (
    <div className="min-h-screen bg-[#F0F2F5] pb-12">
      {/* Top Navbar - Fixed */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm h-14 flex items-center px-4">
        <div className="max-w-[1200px] mx-auto w-full flex items-center justify-between">
          <Link href="/directory" className="flex items-center gap-2 text-primary font-bold hover:bg-gray-100 p-2 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Back to WholCure Entity</span>
          </Link>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section (Cover + Profile) */}
      <div className="pt-14 bg-white shadow-sm overflow-hidden">
        <div className="max-w-[1250px] mx-auto">
          {/* Cover Photo */}
          <div className="relative aspect-[3/1] w-full bg-slate-200 overflow-hidden sm:rounded-b-lg group h-30">
            {biz.coverPhoto || biz.images?.[0] ? (
              <Image src={biz.coverPhoto || biz.images?.[0] || ""} alt="Cover" fill className="object-cover" priority />
            ) : (
              <div className="w-full h-full bg-linear-to-r from-slate-300 to-slate-400" />
            )}
            <div className="absolute inset-0 bg-black/10 transition-colors pointer-events-none" />

          </div>

          {/* Identity Bar */}
          <div className="px-4 flex flex-col items-center md:flex-row md:items-end gap-0 md:gap-6 -mt-12 md:-mt-10 pb-4 border-b border-gray-100">
            {/* Profile Picture */}
            <div className="relative w-40 h-40 rounded-full bg-white p-1 shadow-md ring-4 ring-white z-10">
              <div className="w-full h-full relative rounded-full overflow-hidden border border-gray-100 bg-white group cursor-pointer hover:brightness-95 transition">
                <Image src={biz.logo} alt={biz.title} fill className="object-contain p-4" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <button className="absolute bottom-2 right-4 w-9 h-9 bg-[#E4E6EB] border border-gray-200 rounded-full flex items-center justify-center text-black shadow-sm hover:bg-gray-200 transition">
                <i className="fas fa-camera text-sm" />
              </button>
            </div>

            {/* Title & Category Area */}
            <div className="flex-1 text-center md:text-left pt-6 md:pt-14 pb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1c1e21] tracking-tight flex items-center justify-center md:justify-start gap-2">
                {biz.title}
                {biz.isVerified && (
                  <i className="fas fa-check-circle text-[#1877F2] text-2xl lg:text-3xl" title="Verified" />
                )}
              </h1>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-2 text-[#65676B] font-semibold">
                <span>{biz.category || "Professional WholCure Entity"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span>{biz.tags?.[0] ? `#${biz.tags[0]}` : "Verified Business"}</span>
              </div>
            </div>

            {/* CTA Container */}
            <div className="flex items-center gap-2 mb-4 w-full md:w-auto px-4 md:px-0">
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
            </div>
          </div>


        </div>
      </div>

      {/* Main Content Area (Two Columns) */}
      <main className="max-w-[1250px] mx-auto px-4 mt-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN: Sidebar Info */}
          <aside className="lg:w-1/3 xl:w-2/5 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-4">
              <h3 className="text-xl font-extrabold text-black">Intro</h3>

              <p className="text-[#050505] text-[15px] leading-relaxed">
                {biz.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-[#050505] font-medium">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>Located at {biz.location || "Remote / Global Ops"}</span>
                </div>
                {biz.website && (
                  <div className="flex items-center gap-3 text-sm text-[#050505] font-medium">
                    <Globe className="w-5 h-5 text-gray-500" />
                    <a href={biz.website} target="_blank" className="text-primary hover:underline">{biz.website.replace('https://', '')}</a>
                  </div>
                )}
                <div className="flex items-center gap-3 text-sm text-[#050505] font-medium">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <span>Verified Entity Presence</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3 text-sm text-blue-700 font-bold border border-blue-100">
                <i className="fas fa-shield-alt text-lg" />
                Page Transparency & Verified Security
              </div>
            </div>

            {/* Mini Partners Card */}
            {biz.partners && biz.partners.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-extrabold text-black">Partners</h3>
                  <button className="text-primary text-sm font-semibold hover:bg-blue-50 px-2 py-1 rounded">See all</button>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {biz.partners.map((p, i) => (
                    <div key={i} className="p-3 bg-[#F0F2F5] rounded-lg font-bold text-center border border-gray-200">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>

          {/* RIGHT COLUMN: Feed Content */}
          <div className="lg:w-2/3 xl:w-3/5 space-y-6">

            {/* Why Choose Us - Large Feed Post */}
            {biz.whyWeBest && (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border border-gray-200 bg-white">
                    <Image src={biz.logo} alt="Mini logo" fill className="object-contain p-1" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-black">{biz.title}</h4>
                    <p className="text-xs text-gray-500">Shared about their values</p>
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  <h3 className="text-2xl font-black text-slate-800 tracking-tight leading-none italic border-l-4 border-primary pl-4 py-1">
                    "Why choose us?"
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed italic">&quot;{biz.whyWeBest}&quot;</p>
                </div>
                {biz.images?.[1] && (
                  <div className="relative aspect-video w-full bg-slate-100">
                    <Image src={biz.images[1]} alt="Values visual" fill className="object-cover" />
                  </div>
                )}
              </section>
            )}

            {/* Overview Section - Structured Post */}
            <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-6">
              <h3 className="text-xl font-extrabold text-black">Services Overview</h3>
              <div className="bg-[#F0F2F5] p-6 rounded-2xl border border-gray-100">
                {typeof biz.details === "string" ? (
                  <p className="text-gray-700 leading-relaxed">{biz.details}</p>
                ) : (
                  <div className="space-y-8">
                    {Object.entries(biz.details || {}).map(([key, value]) => (
                      <div key={key} className="space-y-3">
                        <h4 className="text-lg font-bold text-slate-900 border-b border-gray-200 pb-1">{key}</h4>
                        {Array.isArray(value) ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {value.map((item, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                {item}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 font-medium px-2">{String(value)}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* Project Gallery - Photo Post */}
            {biz.images && biz.images.length > 0 && (
              <section className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 flex justify-between items-center">
                  <h3 className="text-xl font-extrabold text-black">Project Portfolio</h3>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{biz.images.length} Photos</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1 p-1">
                  {biz.images?.map((img, i) => (
                    <div key={i} className={`relative aspect-square bg-gray-100 hover:brightness-90 transition-all cursor-pointer ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                      <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessDetailPage;