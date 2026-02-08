'use client'

import Link from 'next/link';
import { Job } from "@/types";
import { MapPin, Briefcase, Clock, CircleDollarSign, ArrowRight } from "lucide-react";
import ApplyForm from "./ApplyForm";
import { useState } from 'react';

function JobCard({ job }: { job: Job }) {
    const [openForm, setOpenForm] = useState(false)

    const formatSalary = (num: number) => {
        return num >= 1000 ? (num / 1000).toFixed(0) + 'k' : num;
    };



    return (
        <>
            <div
                key={job._id}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-blue-500/20 flex flex-col h-full"
            >
                <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                        {job.industry}
                    </span>
                    <span className="shrink-0 ml-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg border border-slate-200">
                        {job.employment_type}
                    </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-5 leading-tight group-hover:text-blue-600 transition-colors">
                    {job.job_title}
                </h4>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={16} className="text-slate-400" />
                        <span className="truncate capitalize">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Briefcase size={16} className="text-slate-400" />
                        <span>{job.experience_level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock size={16} className="text-slate-400" />
                        <span>{job.work_mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
                        <CircleDollarSign size={16} />
                        <span>
                            {job.salary_range
                                ? `$${formatSalary(job.salary_range.min)} - $${formatSalary(job.salary_range.max)}`
                                : "Negotiable"}
                        </span>
                    </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-8 flex-grow">
                    {job.job_description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Now</span>
                    </div>

                    <button
                        onClick={() => setOpenForm(true)}
                        className="flex items-center gap-2 bg-gradient-primary-reverse text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-200 hover:shadow-blue-400 hover:-translate-y-0.5 transition-all cursor-pointer">
                        Apply Now <ArrowRight size={16} />
                    </button>
                </div>
            </div>

            {openForm && (
                <ApplyForm
                    jobId={job._id}
                    
                    position={job.job_title}
                    onClose={() => setOpenForm(false)}
                />
            )}
        </>
    )
}

export default JobCard;
