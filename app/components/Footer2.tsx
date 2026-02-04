const Footer2 = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "About Us", "Our Businesses", "LMS", "Careers", "Why choose us"]
        },
        {
            title: "Our Businesses",
            links: ["Real Estate", "Technology", "Marketing", "Solar Electronics", "MedHIPPA", "Ogaglow"]
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Terms & Conditions", "Returns Policy"]
        },
        {
            title: "FAQ",
            links: ["General Questions", "Pricing & Plans", "Support & Help"]
        }
    ];
    const footerLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About Us', href: '/#about' },
        { name: 'Our Businesses', href: '/#businesses' },
        { name: 'LMS', href: '/#lms' },
        { name: 'Careers', href: '/careers' },
        { name: 'Why choose us', href: '/careers' },
    ];

    const legalLinks = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms & Conditions', href: '/terms-of-use' },
        { name: 'Returns Policy', href: '/terms-of-use' },
        // { name: 'Sections', href: '/terms-of-use' },
    ];

    const FAQLinks = [
        { name: 'General Questions', href: '/faq' },
        { name: 'Pricing & Plans', href: '/contact' },
        { name: 'Support & Help', href: '/contact' },
    ];

    const businessLinks = [
        { name: 'Real Estate', href: '/#businesses' },
        // { name: 'Constructions', href: '/#businesses' },
        { name: 'Technology', href: '/#businesses' },
        { name: 'Marketing', href: '/#businesses' },
        { name: 'Solar Electronics', href: '/#businesses' },
        // { name: 'Electronics', href: '/#businesses' },
        // { name: 'Packaging', href: '/#businesses' },
        // { name: 'Legal Services', href: '/#businesses' },
        // { name: 'Business Development', href: '/#businesses' },
        { name: 'MedHIPPA', href: '/#businesses' },
        // { name: 'Institute', href: '/#businesses' },
        { name: 'Ogaglow', href: '/#businesses' },
        // { name: 'Motors', href: '/#businesses' },

    ];
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#17203C]">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-40" src="White tagline logo.pdf.png" alt="dummyLogoColored" />
                    <p className="max-w-[410px] mt-6 text-white/60">A multi-industry group committed to excellence, innovation, and sustainable growth across eight dynamic sectors.</p>

                    <div className="flex gap-4 mt-6">
                        {['linkedin', 'tiktok', 'facebook', 'instagram', 'youtube'].map((social, i) => (
                            <a key={i} href="#" aria-label={social} className="py-2 px-2 text-white flex items-center justify-center bg-white/10 rounded-lg transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                                <i className={`fab fa-${social}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[56%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2 text-white">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition text-white/60">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-white/60">
                Copyright 2025 © <a href="#">WholCure</a> All Right Reserved.
            </p>
        </div>
    );
};

export default Footer2;