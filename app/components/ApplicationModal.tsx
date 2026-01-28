'use client';
import { useModal } from '../context/ModalContext';
import { FormEvent, useState } from 'react';

export default function ApplicationModal() {
  const { isModalOpen, position, closeModal } = useModal();
  const [success, setSuccess] = useState(false);

  if (!isModalOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Application submitted for:', position);
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
        closeModal();
    }, 3000);
  };

  return (
    <div className={`fixed inset-0 bg-black/50 z-[2000] flex items-center justify-center animate-fadeInUp`} onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
    }}>
        <div className="bg-white p-8 rounded-2xl w-[90%] max-w-[600px] relative max-h-[90vh] overflow-y-auto animate-modalSlideIn shadow-custom-lg">
            <span className="absolute top-4 right-6 text-3xl font-bold text-text-light cursor-pointer hover:text-text-primary transition-colors z-10" onClick={closeModal}>&times;</span>
            {!success ? (
                <>
                <h2 className="text-2xl font-bold mb-6 text-primary">Apply for: {position}</h2>
                <form id="applicationForm" className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input type="hidden" id="position" name="position" value={position} readOnly />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="font-semibold text-text-primary text-sm">Full Name *</label>
                        <input type="text" id="fullName" name="fullName" required className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold text-text-primary text-sm">Email Address *</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-semibold text-text-primary text-sm">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="linkedin" className="font-semibold text-text-primary text-sm">LinkedIn Profile</label>
                        <input type="url" id="linkedin" name="linkedin" className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)]" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="experience" className="font-semibold text-text-primary text-sm">Years of Experience *</label>
                        <select id="experience" name="experience" required className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white">
                            <option value="">Select...</option>
                            <option value="0-1">0-1 years</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="coverLetter" className="font-semibold text-text-primary text-sm">Cover Letter / Why should we hire you? *</label>
                        <textarea id="coverLetter" name="coverLetter" rows={5} required className="w-full px-4 py-3 border border-border rounded-lg text-sm transition-colors focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(0,102,255,0.1)] bg-white resize-y min-h-[100px]"></textarea>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <button type="submit" className="flex-1 py-3 px-6 bg-gradient-primary text-white rounded-lg font-semibold hover:-translate-y-1 hover:shadow-custom-md transition-all duration-300">Submit Application</button>
                        <button type="button" className="py-3 px-6 bg-gray-200 text-text-primary rounded-lg font-semibold hover:bg-gray-300 transition-colors" onClick={closeModal}>Cancel</button>
                    </div>
                </form>
                </>
            ) : (
                <div id="formSuccess" className="text-center py-8">
                    <i className="fas fa-check-circle text-6xl text-secondary mb-4"></i>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-primary mb-4">Application Submitted Successfully!</h3>
                    <p className="text-text-secondary">Thank you for your interest in joining WholCure. We'll review your application and get back to you soon.</p>
                </div>
            )}
        </div>
    </div>
  );
}
