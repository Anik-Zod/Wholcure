"use server";

import React from "react";
import { getBusinessById } from "@/services/businessService";
const Page = async ({
  params,
}: {
  params: Promise<{ businessId: string }>;
}) => {
  const { businessId } = await params;

  
  let items: any = [];

  try {
    items = await getBusinessById(businessId);
  } catch (err) {
    items = [];
  }

  return (
    <div className="min-h-screen mt-20 bg-[#F8F9FA]">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <div className="space-y-8">
              {/* Logo */}
              <div className="w-40 h-40 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center p-4">
                <img
                  src={items.logo}
                  alt="Logo"
                  className="w-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-5xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight">
                  {items.title}
                </h1>

                <div className="h-1.5 w-20 bg-slate-900 mt-4 rounded-full"></div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {/* items? aur tags? lagane se error nahi aayega agar data missing ho */}
                {items?.tags?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-5 py-2 rounded-xl bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-2xl text-gray-500 font-light leading-relaxed">
                {items.description}
              </p>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-xl font-bold mb-3 text-slate-800">
                  Business Details
                </h4>
                <p className="text-gray-600 leading-loose">{items.details}</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[400px]">
            <div className="sticky top-10 mt-10 bg-[#0F172A] rounded-[2.5rem] p-10 text-white shadow-2xl border border-white/5">
              <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
              <p className="text-gray-400 mb-10 text-sm leading-relaxed">
                Get direct access to {items.title}'s specialized premium
                services.
              </p>

              <div className="space-y-4">
                {/* link to contact us  */}
                <button className="w-full py-5 rounded-2xl bg-white text-black font-bold hover:bg-slate-200 transition-all duration-300 shadow-xl">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
