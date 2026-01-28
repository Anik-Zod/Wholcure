
export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Businesses', href: '#businesses' },
    { name: 'LMS', href: '#lms' },
    { name: 'Careers', href: '#careers' },
  ];

  const businessLinks = [
    { name: 'Real Estate', href: '#businesses' },
    { name: 'Constructions', href: '#businesses' },
    { name: 'Technology', href: '#businesses' },
    { name: 'Marketing', href: '#businesses' },
    { name: 'Solar Electronics', href: '#businesses' },
  ];

  return (
    <footer className="footer bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white pt-16 pb-8">
        <div className="container max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div className="footer-section">
                    <h3 className="text-3xl font-extrabold mb-4">Whol<span className="text-secondary">Cure</span></h3>
                    <p className="text-white/70 leading-relaxed mb-6">A multi-industry group committed to excellence, innovation, and sustainable growth across eight dynamic sectors.</p>
                    <div className="flex gap-4 mt-6">
                        {['linkedin', 'twitter', 'facebook', 'instagram', 'youtube'].map((social, i) => (
                            <a key={i} href="#" aria-label={social} className="w-[45px] h-[45px] flex items-center justify-center bg-white/10 rounded-lg transition-all duration-300 hover:bg-primary hover:-translate-y-1">
                                <i className={`fab fa-${social}`}></i>
                            </a>
                        ))}
                    </div>
                </div>
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
                <div className="footer-section">
                    <h4 className="text-xl font-bold mb-6">Contact Info</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-white/70 leading-relaxed">
                            <i className="fas fa-map-marker-alt text-secondary mt-1"></i> 123 Business Blvd, Innovation City
                        </li>
                        <li className="flex items-start gap-3 text-white/70 leading-relaxed">
                            <i className="fas fa-phone-alt text-secondary mt-1"></i> +1 (555) 123-4567
                        </li>
                        <li className="flex items-start gap-3 text-white/70 leading-relaxed">
                            <i className="fas fa-envelope text-secondary mt-1"></i> info@wholcure.com
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
