import SectionHeader from './SectionHeader';

export default function LMS() {
    const courses = [
        { title: 'Software Development', icon: 'fa-code', desc: 'Full-stack development, modern frameworks, and best practices', duration: '12 Weeks', level: 'Expert Level' },
        { title: 'Construction Management', icon: 'fa-hammer', desc: 'Project planning, safety protocols, and quality control', duration: '10 Weeks', level: 'Professional' },
        { title: 'Digital Marketing', icon: 'fa-chart-bar', desc: 'SEO, social media, analytics, and growth strategies', duration: '8 Weeks', level: 'Intermediate' },
        { title: 'Renewable Energy', icon: 'fa-sun', desc: 'Solar systems, energy efficiency, and sustainability', duration: '6 Weeks', level: 'Beginner' },
    ];

    return (
        <section id="lms" className="py-24 bg-bg-light relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-8">
                <SectionHeader
                    badge="LEARNING & DEVELOPMENT"
                    title="Learning Management"
                    highlightedText="System"
                    description="Professional training and skill development for industry excellence"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Feature 1 */}
                    <div className="card-3d bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
                        <div className="w-[90px] h-[90px] mx-auto mb-6 flex items-center justify-center bg-gradient-secondary rounded-full text-white text-4xl shadow-custom-lg">
                            <i className="fas fa-graduation-cap"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Professional Training</h3>
                        <p className="text-text-secondary">Industry-leading training programs designed by experts to enhance your professional capabilities and career growth.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="card-3d bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
                        <div className="w-[90px] h-[90px] mx-auto mb-6 flex items-center justify-center bg-gradient-secondary rounded-full text-white text-4xl shadow-custom-lg">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Skill Development</h3>
                        <p className="text-text-secondary">Comprehensive courses focused on developing critical skills for the modern workplace and emerging technologies.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="card-3d bg-white rounded-2xl p-8 shadow-custom-md transition-all duration-300 relative transform-style-3d hover:-translate-y-2 hover:shadow-custom-3d text-center group">
                        <div className="w-[90px] h-[90px] mx-auto mb-6 flex items-center justify-center bg-gradient-secondary rounded-full text-white text-4xl shadow-custom-lg">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
                        <p className="text-text-secondary">Recognized industry certifications that validate your expertise and enhance your professional credibility.</p>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-3xl font-bold mb-10 text-primary">Featured Training Programs</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {courses.map((course, idx) => (
                            <div key={idx} className="card-3d bg-white p-8 rounded-2xl shadow-custom-sm transition-all duration-300 border-2 border-transparent hover:-translate-y-2 hover:shadow-custom-md hover:border-primary">
                                <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-2xl mb-4">
                                    <i className={`fas ${course.icon}`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-3">{course.title}</h4>
                                <p className="text-sm text-text-secondary mb-4">{course.desc}</p>
                                <div className="flex gap-4 text-xs font-medium text-text-light">
                                    <span className="flex items-center gap-2"><i className="fas fa-clock"></i> {course.duration}</span>
                                    <span className="flex items-center gap-2"><i className="fas fa-user"></i> {course.level}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
