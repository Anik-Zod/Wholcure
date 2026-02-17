

import { getAllJobs } from '@/services/jobService';
import SectionHeader from '../components/SectionHeader';
import { Job } from '@/types';
import JobCard from './jobCard';

export const dynamic = 'force-dynamic';

export default async function Careers() {
    const jobs = await getAllJobs();

    const benefits = [
        { title: 'Growth Opportunities', icon: 'fa-rocket', desc: 'Career advancement and professional development' },
        { title: 'Collaborative Culture', icon: 'fa-users', desc: 'Work with talented professionals across industries' },
        { title: 'Innovation-Driven', icon: 'fa-lightbulb', desc: 'Encouraged to think creatively and innovate' },
        { title: 'Competitive Benefits', icon: 'fa-hand-holding-usd', desc: 'Industry-leading compensation and benefits' },
    ];

    return (
        <section id="careers" className="py-24 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-8">
                <SectionHeader
                    badge="JOIN OUR TEAM"
                    title="Career"
                    highlightedText="Opportunities"
                    description="Be part of a dynamic team shaping the future of industries"
                    gradient='bg-gradient-primary-reverse'
                    badgeClass='bg-gradient-to-r from-secondary-dark/20 to-secondary/20 text-secondary-dark'
                />

                <div className="mb-20">
                    <h3 className="text-3xl font-bold mb-10 text-center text-secondary">Why Work With Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="card-3d text-center p-8 bg-bg-light rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-custom-md">
                                <i className={`fas ${benefit.icon} text-5xl text-secondary mb-6`}></i>
                                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                                <p className="text-text-secondary">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-50 py-12 px-4">
                    <h3 className="text-3xl font-bold mb-10 text-center text-slate-800">Current Openings</h3>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs.map((job: Job) => (
                            <JobCard key={job._id} job={job} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
