import Image from "next/image";

const Footer2 = () => {
    const linkSections = [
        {
            title: "Quick Links",
            links: [
                {name:"Home",link:"/"},
                {name:"About Us",link:"/#about"},
                {name:"Our Businesses",link:"/#businesses"},
                {name:"LMS",link:"/lms"},
                {name:"Careers",link:"/careers"},
                {name:"Why choose us",link:"/why_choose_us"}
            ]
        },
        {
            title: "Our Businesses",
            links: [
                {name:"Real Estate",link:"/real_estate"},
                {name:"Technology",link:"/technology"},
                {name:"Marketing",link:"/marketing"},
                {name:"Solar Electronics",link:"/solar_electronics"},
                {name:"MedHIPPA",link:"/medhippa"},
                {name:"Ogaglow",link:"/ogaglow"}
            ]
        },
        {
            title: "Legal",
            links: [
                {name:"Privacy Policy",link:"/legal/privacy_policy"},
                {name:"Terms & Conditions",link:"/legal/terms_&_conditions"},
                {name:"Returns Policy",link:"/legal/returns_policy"}
            ]
        },
        {
            title: "FAQ",
            links: [
                {name:"General Questions",link:"/faq/general_questions"},
                {name:"Pricing & Plans",link:"/faq/pricing_&_plans"},
                {name:"Support & Help",link:"/faq/support_&_help"}
            ]
        }
    ];

const Social = [
  {icon:'linkedin-in',to:"#"},
  {icon:'tiktok',to:"#"},
  {icon:'whatsapp',to:"#"},
  {icon:'facebook-f',to:"#"},
  {icon:'instagram',to:"#"},
  {icon:'youtube',to:"#"}
  ]

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#17203C]">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <Image width={100} height={100} className="w-34 md:w-40" src="/White tagline logo.pdf.png" alt="dummyLogoColored" />
                    <p className="max-w-[410px] mt-6 text-white/60">A multi-industry group committed to excellence, innovation, and sustainable growth across eight dynamic sectors.</p>
                    
                    <div className="flex gap-4 mt-6">
                        {Social.map((s, i) => (
                            <a key={i} href={s.to} aria-label={s.icon} className="py-2 px-2 text-white flex items-center justify-center bg-white/10 rounded-lg transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                                <i className={`fab fa-${s.icon}`}></i>
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
                                        <a href={link.link} className="hover:underline transition text-white/60">{link.name}</a>
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