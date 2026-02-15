"use client"
import { contactFormSubmit } from '@/services/contactService';
import React, { useState } from 'react'

const businesses = [
    "WholCure Real Estate", "WholCure Constructions", "WholCure Technology",
    "WholCure Marketing", "WholCure Electronics", "WholCure Solar Electronics",
    "WholCure Packaging", "WholCure Legal Services", "WholCure Business Development",
    "WholCure MedHIPPA", "WholCure Institute", "WholCure Ogaglow", "WholCure Motors"
];

function ContactUs() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState<string|null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Validation: Ensure a business is selected
        if (!selected) {
            setError("Please select a Department of Interest");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const result = await contactFormSubmit(data);
            setSuccess(result.message || "Message Sent!");
            // Reset form
            setSelected("");
            e.currentTarget.reset();
        } catch (err: any) {
            console.error(err);
            setError(err.message || "Failed to submit. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-full max-w-2xl mx-auto'>
            {success ? (
                <div className="py-16 px-8 text-center bg-slate-50 rounded-3xl border border-slate-100 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-200">
                        <i className="fas fa-check text-4xl" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-2">Message Received</h3>
                    <p className="text-slate-600 max-w-xs mx-auto mb-8 leading-relaxed">{success}</p>
                    <button onClick={() => setSuccess(null)} className="px-8 py-3 bg-white border border-slate-200 rounded-full text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all duration-300">
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                    {error && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm font-semibold border-l-4 border-red-500 flex items-center gap-3 animate-pulse">
                            <i className="fas fa-exclamation-circle" />
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <FormInput label="Full Name" name="fullName" type="text" />
                        <FormInput label="Email Address" name="email" type="email" />
                    </div>

                    {/* CUSTOM SELECT */}
                    <div className="relative group">
                        <label className="absolute -top-5 left-0 text-[10px] text-primary font-black uppercase tracking-[0.2em]">Department of Interest</label>
                        
                        {/* CRITICAL: Hidden input so the value is sent with the form */}
                        <input type="hidden" name="subject" value={selected} required />

                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-full border-b-2 py-4 bg-transparent cursor-pointer flex justify-between items-center transition-all ${isOpen ? 'border-primary' : 'border-slate-200'}`}
                        >
                            <span className={`font-semibold ${selected ? 'text-slate-900' : 'text-slate-400'}`}>
                                {selected || "Select WholCure Entity..."}
                            </span>
                            <i className={`fas fa-chevron-down text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-slate-300'}`} />
                        </div>

                        {isOpen && (
                            <div className="absolute z-50 mt-2 w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                                <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200">
                                    {businesses.map((biz) => (
                                        <div
                                            key={biz}
                                            onClick={() => { setSelected(biz); setIsOpen(false); setError(null); }}
                                            className="px-6 py-4 text-slate-600 font-medium hover:bg-slate-50 hover:text-primary cursor-pointer border-b border-slate-50 last:border-0 flex items-center justify-between group/opt"
                                        >
                                            {biz}
                                            {selected === biz && <i className="fas fa-check text-primary animate-in zoom-in" />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ${isOpen ? 'w-full' : 'w-0'}`} />
                    </div>

                    <div className="relative group">
                        <textarea name="message" rows={4} required placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-all resize-none font-medium text-slate-900" />
                        <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs font-bold uppercase tracking-wider">
                            Project Details
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full" />
                    </div>

                    {/* SUBMIT BUTTON WITH LOADING STATE */}
                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full py-6 bg-slate-900 rounded-full transition-all duration-500 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                    >
                        <div className="flex items-center justify-center gap-4 text-white font-black tracking-widest text-sm">
                            {isSubmitting ? (
                                <>
                                    <i className="fas fa-circle-notch fa-spin" />
                                    <span>PROCESSING...</span>
                                </>
                            ) : (
                                <>
                                    <span>INITIATE CONSULTATION</span>
                                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                                        <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1" />
                                    </div>
                                </>
                            )}
                        </div>
                    </button>
                </form>
            )}
        </div>
    );
}

const FormInput = ({ label, name, type }: { label: string, name: string, type: string }) => (
    <div className="relative group">
        <input type={type} name={name} required placeholder=" " className="peer w-full border-b-2 border-slate-200 py-3 bg-transparent outline-none focus:border-primary transition-colors text-slate-900 font-medium" />
        <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-5 peer-[:not(:placeholder-shown)]:text-xs font-bold uppercase tracking-wider">
            {label}
        </label>
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full" />
    </div>
);

export default ContactUs;