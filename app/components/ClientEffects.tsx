'use client';

import { useEffect } from 'react';

export default function ClientEffects() {
  useEffect(() => {
    // Scroll Animations
    const animateElements = document.querySelectorAll('.card-3d, .business-card, .course-card, .job-card, .why-card, .contact-card');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    (entry.target as HTMLElement).style.opacity = '1';
                    (entry.target as HTMLElement).style.transform = 'translateY(0)';
                    // Clear inline styles after transition to allow CSS hover/transform to work
                    setTimeout(() => {
                        (entry.target as HTMLElement).style.opacity = '';
                        (entry.target as HTMLElement).style.transform = '';
                        (entry.target as HTMLElement).style.transition = '';
                    }, 600);
                }, index * 100); 
                elementObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(element => {
        (element as HTMLElement).style.opacity = '0';
        (element as HTMLElement).style.transform = 'translateY(30px)';
        (element as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        elementObserver.observe(element);
    });

    // Tilt Effect
    const tiltCards = document.querySelectorAll('[data-tilt]');
    
    const handleTiltMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const card = e.currentTarget as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };
    
    const handleTiltLeave = (e: Event) => {
        const card = e.currentTarget as HTMLElement;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', handleTiltMove);
        card.addEventListener('mouseleave', handleTiltLeave);
    });

    return () => {
        elementObserver.disconnect();
        tiltCards.forEach(card => {
             card.removeEventListener('mousemove', handleTiltMove);
             card.removeEventListener('mouseleave', handleTiltLeave);
        });
    };
  }, []);

  return null;
}
