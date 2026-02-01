'use client';

import { FormEvent, useState } from 'react';
import SectionHeader from './SectionHeader';

export default function Contact() {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Contact form submitted');
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 5000);
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-8">
                <SectionHeader
                    badge="GET IN TOUCH"
                    title="Contact"
                    highlightedText="Us"
                    description="Let's discuss how we can help your business grow"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="flex flex-col gap-6">
                        <div className="p-8 bg-bg-light rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-custom-md hover:-translate-y-1">
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-2xl mb-4">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary">Visit Us</h4>
                            <p className="text-text-secondary leading-relaxed">WholCure Corporate Headquarters<br />123 Business Boulevard, Suite 500<br />Innovation City, IC 12345</p>
                        </div>
                        <div className="p-8 bg-bg-light rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-custom-md hover:-translate-y-1">
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-2xl mb-4">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary">Call Us</h4>
                            <p className="text-text-secondary leading-relaxed">Main:  +92 328 2296963<br />Support:  +92 328 2296963<br />Mon-Fri, 9AM-6PM</p>
                        </div>
                        <div className="p-8 bg-bg-light rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-custom-md hover:-translate-y-1">
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-2xl mb-4">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary">Email Us</h4>
                            <p className="text-text-secondary leading-relaxed">General: info@wholcure.com<br />Sales: sales@wholcure.com<br />Support: support@wholcure.com</p>
                        </div>
                        <div className="p-8 bg-bg-light rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-custom-md hover:-translate-y-1">
                            <div className="w-[60px] h-[60px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-2xl mb-4">
                                <i className="fas fa-globe"></i>
                            </div>
                            <h4 className="text-xl font-bold mb-3 text-primary">Follow Us</h4>
                            <div className="flex gap-4 mt-2">
                                {['linkedin', 'tiktok', 'facebook', 'instagram','youtube'].map((social, i) => (
                                    <a key={i} href="#" aria-label={social} className="w-[40px] h-[40px] flex items-center justify-center bg-primary text-white rounded-lg transition-all duration-300 hover:bg-secondary hover:-translate-y-1">
                                        <i className={`fab fa-${social}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-bg-light p-10 rounded-3xl">
                        {!success ? (
                            <form id="contactForm" className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactName" className="font-semibold text-text-primary">Your Name *</label>
                                        <input type="text" id="contactName" name="name" required className="w-full px-4 py-3 border-2 border-border rounded-xl font-primary text-base transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactEmail" className="font-semibold text-text-primary">Your Email *</label>
                                        <input type="email" id="contactEmail" name="email" required className="w-full px-4 py-3 border-2 border-border rounded-xl font-primary text-base transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactPhone" className="font-semibold text-text-primary">Phone Number</label>
                                        <input type="tel" id="contactPhone" name="phone" className="w-full px-4 py-3 border-2 border-border rounded-xl font-primary text-base transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactSubject" className="font-semibold text-text-primary">Subject *</label>
                                        <select id="contactSubject" name="subject" required className="w-full px-4 py-3 border-2 border-border rounded-xl font-primary text-base transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white">
                                            <option value="">Select a subject...</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="real-estate">Real Estate</option>
                                            <option value="construction">Construction</option>
                                            <option value="technology">Technology</option>
                                            <option value="marketing">Marketing</option>
                                            <option value="solar">Solar Electronics</option>
                                            <option value="electronics">Electronics</option>
                                            <option value="packaging">Packaging</option>
                                            <option value="legal">Legal Services</option>
                                            <option value="lms">LMS / Training</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="contactMessage" className="font-semibold text-text-primary">Your Message *</label>
                                    <textarea id="contactMessage" name="message" rows={6} required className="w-full px-4 py-3 border-2 border-border rounded-xl font-primary text-base transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white resize-y min-h-[120px]"></textarea>
                                </div>
                                <button type="submit" className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-white bg-gradient-primary rounded-xl font-semibold transition-all duration-300 hover:-translate-y-[3px] hover:shadow-custom-md border-none cursor-pointer">
                                    <span>Send Message</span>
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        ) : (
                            <div id="contactSuccess" className="text-center p-8">
                                <i className="fas fa-check-circle text-6xl text-secondary mb-4"></i>
                                <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
                                <p>Thank you for contacting WholCure. We'll get back to you within 24 hours.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
