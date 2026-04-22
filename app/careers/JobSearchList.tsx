'use client';

import { useState } from 'react';
import { Job } from '@/types';
import JobCard from './jobCard';

export default function JobSearchList({ jobs }: { jobs: Job[] }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = jobs.filter(job => 
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=" py-12 px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 max-w-7xl mx-auto">
                <h3 className="text-3xl font-bold text-slate-800 whitespace-nowrap">
                    Current Openings
                </h3>

              <div className="flex flex-col gap-2 w-full md:w-96">
    <div className="relative">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input
            type="text"
            placeholder="Search positions..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
    {/* Result count shifted to the right for better balance */}
    <p className="text-xs text-slate-400 text-right pr-2 italic">
        Found {filteredJobs.length} {filteredJobs.length === 1 ? 'opening' : 'openings'}
    </p>
</div>
                
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job: Job) => (
                        <JobCard key={job._id} job={job} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <i className="fas fa-search text-4xl text-slate-300 mb-4"></i>
                        <p className="text-xl text-slate-500">No jobs found matching "{searchTerm}"</p>
                    </div>
                )}
            </div>
        </div>
    );
}