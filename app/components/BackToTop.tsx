'use client';
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      id="backToTop" 
      className={`fixed bottom-8 right-8 w-[50px] h-[50px] bg-gradient-primary rounded-full text-white text-xl flex items-center justify-center cursor-pointer shadow-custom-lg transition-all duration-300 z-50 hover:-translate-y-1 hover:shadow-custom-hover focus:outline-none ${isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}`} 
      aria-label="Back to top" 
      onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
    </button>
  );
}
