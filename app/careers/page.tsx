'use client';
import { useModal } from '../context/ModalContext';
import SectionHeader from '../components/SectionHeader';

export default function Careers() {
    const { openModal } = useModal();

    const jobs = [
        { title: 'Senior Software Engineer', type: 'Full-Time', dept: 'WholCure Technology', icon: 'fa-laptop-code', desc: 'Lead development of innovative software solutions using modern technologies.', loc: 'Remote/On-site' },
        { title: 'Construction Project Manager', type: 'Full-Time', dept: 'WholCure Constructions', icon: 'fa-hard-hat', desc: 'Oversee major construction projects from planning to completion.', loc: 'On-site' },
        { title: 'Digital Marketing Specialist', type: 'Full-Time', dept: 'WholCure Marketing', icon: 'fa-bullhorn', desc: 'Drive digital campaigns and grow brand presence across channels.', loc: 'Hybrid' },
        { title: 'Solar Energy Consultant', type: 'Full-Time', dept: 'WholCure Solar Electronics', icon: 'fa-solar-panel', desc: 'Provide expert consultation on solar energy solutions and installations.', loc: 'On-site' },
        { title: 'Corporate Legal Advisor', type: 'Full-Time', dept: 'WholCure Legal Services', icon: 'fa-gavel', desc: 'Provide legal counsel on corporate matters and compliance issues.', loc: 'On-site' },
        { title: 'Internship Program', type: 'Internship', dept: 'All Departments', icon: 'fa-building', desc: 'Gain hands-on experience across various business divisions.', loc: 'Hybrid' },
    ];

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

                <div>
                    <h3 className="text-3xl font-bold mb-10 text-center text-secondary">Current Openings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="card-3d border border-border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-custom-md bg-white hover:border-secondary-dark">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h4 className="flex-1 text-xl font-bold">{job.title}</h4>
                                    <span className="text-xs px-3 py-1 bg-secondary text-white rounded-full font-semibold whitespace-nowrap">{job.type}</span>
                                </div>
                                <p className="flex items-center gap-2 text-secondary-dark font-semibold mb-3">
                                    <i className={`fas ${job.icon}`}></i> {job.dept}
                                </p>
                                <p className="text-text-secondary mb-6">{job.desc}</p>
                                <div className="flex justify-between items-center pt-4 border-t border-secondary">
                                    <span className="text-sm text-text-light flex items-center gap-2"><i className="fas fa-map-marker-alt"></i> {job.loc}</span>
                                    <button className="px-6 py-2 bg-gradient-primary-reverse text-white rounded-xl font-semibold transition-transform duration-300 hover:-translate-y-1 hover:shadow-custom-md" onClick={() => openModal(job.title)}>Apply Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
