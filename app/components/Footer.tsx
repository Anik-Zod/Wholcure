
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
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
        <footer className="footer bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white pt-16 pb-8">
            <div className="container max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

                    <div className="footer-section">
                        <img src="White tagline logo.pdf.png" alt="wholcure" className="w-40 pb-5 " />
                        <p className="text-white/70 leading-relaxed mb-6">A multi-industry group committed to excellence, innovation, and sustainable growth across eight dynamic sectors.</p>
                        <div className="flex gap-4 mt-6">
                            {['linkedin', 'tiktok', 'facebook', 'instagram', 'youtube'].map((social, i) => (
                                <a key={i} href="#" aria-label={social} className="py-2 px-2 flex items-center justify-center bg-white/10 rounded-lg transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                                    <i className={`fab fa-${social}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* quick links */}
                    <div className="footer-section">
                        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                        <ul>
                            {footerLinks.map((link, i) => (
                                <li key={i} className="mb-3">
                                    <a href={link.href} className="text-white/70 transition-all duration-300 hover:text-white hover:pl-2">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* our business  */}
                    <div className="footer-section">
                        <h4 className="text-xl font-bold mb-6">Our Businesses</h4>
                        <ul>
                            {businessLinks.map((link, i) => (
                                <li key={i} className="mb-3">
                                    <a href={link.href} className="text-white/70 transition-all duration-300 hover:text-white hover:pl-2">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* leagl  */}
                    <div className="footer-section">
                        <h4 className="text-xl font-bold mb-6">Legal</h4>
                        <ul>
                            {legalLinks.map((link, i) => (
                                <li key={i} className="mb-3">
                                    <a href={link.href} className="text-white/70 transition-all duration-300 hover:text-white hover:pl-2">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* faq  */}
                    <div className="footer-section ">
                        <h4 className="text-xl font-bold mb-6">FAQ</h4>
                        <ul>
                            {FAQLinks.map((link, i) => (
                                <li key={i} className="mb-3">
                                    <a href={link.href} className="text-white/70 transition-all duration-300 hover:text-white hover:pl-2">{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/70 leading-relaxed group">
                                <div className='bg-white/20 py-2 px-3 rounded-lg'>
                                    <MapPin className="w-5 h-5 text-secondary mt-1 group-hover:scale-125 transition-all text-white" />
                                </div>
                                <span>123 Business Blvd, Innovation City</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70 leading-relaxed group">
                                <div className='bg-white/20 py-2 px-3 rounded-lg'>
                                    <Phone className="w-5 h-5 text-secondary mt-1 group-hover:scale-125 transition-all text-white" />
                                </div>
                                <span>+92 328 2296963</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/70 leading-relaxed group">
                                <div className='bg-white/20 py-2 px-3 rounded-lg'>
                                    <Mail className="w-5 h-5 text-secondary mt-1 group-hover:scale-125 transition-all text-white" />
                                </div>
                                <span>info@wholcure.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-white/60 text-sm">
                        &copy; 2024 WholCure. All rights reserved. | <a href="#privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a> | <a href="#terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
