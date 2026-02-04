'use client';
import { useModal } from '../context/ModalContext';
import { FormEvent, useState, useRef } from 'react';

export default function ApplicationModal() {
  const { isModalOpen, position, closeModal } = useModal();
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isModalOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, use FormData to include the file
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      closeModal();
    }, 3000);
  };

  return (
    <div 
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 animate-fadeIn" 
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className="bg-white rounded-3xl w-full max-w-2xl relative max-h-[95vh] overflow-y-auto shadow-2xl border border-slate-100 transition-all">
        
        {/* Close Button */}
        <button 
          className="absolute top-5 right-6 text-slate-400 hover:text-slate-600 transition-colors p-2"
          onClick={closeModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!success ? (
          <div className="p-8 md:p-10">
            <header className="mb-8">
              <span className="text-primary font-bold text-sm uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">Careers</span>
              <h2 className="text-3xl font-extrabold mt-3 text-slate-900">Apply for {position}</h2>
              <p className="text-slate-500 mt-2">Complete the form below and our team will reach out shortly.</p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
                  <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
                  <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
                  <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>

                {/* LinkedIn */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">LinkedIn Profile</label>
                  <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              {/* Experience Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Years of Experience *</label>
                <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select your experience level</option>
                  <option value="0-1">0-1 years (Entry)</option>
                  <option value="1-3">1-3 years (Junior)</option>
                  <option value="3-5">3-5 years (Mid-Level)</option>
                  <option value="5-10">5-10 years (Senior)</option>
                  <option value="10+">10+ years (Expert)</option>
                </select>
              </div>

              {/* Resume Upload Field */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Resume / CV *</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${fileName ? 'border-primary bg-primary/5' : 'border-slate-200 hover:border-primary hover:bg-slate-50'}`}
                >
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" required />
                  <div className="flex flex-col items-center">
                    <svg className={`w-8 h-8 mb-2 ${fileName ? 'text-primary' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                    <span className="text-sm font-medium text-slate-600">{fileName ? fileName : 'Click to upload or drag and drop'}</span>
                    <span className="text-xs text-slate-400 mt-1">PDF, DOCX up to 10MB</span>
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Why should we hire you? *</label>
                <textarea required rows={4} placeholder="Tell us about your achievements..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="submit" className="flex-[2] py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold shadow-lg shadow-primary/20 transform active:scale-[0.98] transition-all">
                  Submit Application
                </button>
                <button type="button" onClick={closeModal} className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold transition-all">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center animate-scaleIn">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Application Sent!</h3>
            <p className="text-slate-500 max-w-xs mx-auto">We've received your application for {position}. Check your email for a confirmation.</p>
          </div>
        )}
      </div>
    </div>
  );
}