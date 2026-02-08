"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from '../SectionHeader';
import { Business } from '@/types';



export default function BusinessCard({ biz }: { biz: Business }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const icon = iconRef.current;
        if (!card) return;

        // Set initial 3D properties via GSAP for consistency
        gsap.set(card, {
            transformPerspective: 1000,
            transformStyle: "preserve-3d"
        });

        const onMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Exact Logic from ClientEffects.tsx for accurate "lift/tilt" feel
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                y: -12, // The "lift" effect
                scale: 1.04,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: 'auto'
            });

            if (icon) {
                gsap.to(icon, {
                    x: (x - centerX) / 12,
                    y: (y - centerY) / 12,
                    z: 40,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
            }
        };

        const onMouseEnter = () => {
            if (icon) {
                gsap.to(icon, {
                    rotateY: '+=360',
                    duration: 0.4,
                    ease: 'power2.inOut',
                    overwrite: 'auto'
                });
            }
        };

        const onMouseLeave = () => {
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
                overwrite: 'auto'
            });

            if (icon) {
                gsap.to(icon, {
                    x: 0,
                    y: 0,
                    z: 0,
                    rotateY: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                    overwrite: 'auto'
                });
            }
        };

        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
            card.removeEventListener('mouseenter', onMouseEnter);
            card.removeEventListener('mousemove', onMouseMove);
            card.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="
        business-card group p-10 cursor-pointer bg-white rounded-2xl 
        shadow-custom-md relative
        transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        transform-gpu transform-style-3d
        hover:shadow-custom-3d
      "
        >
            <div
                ref={iconRef}
                className="size-20 flex items-center justify-center bg-white rounded-xl text-white text-3xl mb-6 shadow-lg transform-style-3d overflow-hidden"
            >
                <img src={biz.logo} alt={biz.title} className="w-full h-full object-contain " />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-text-primary">{biz.title}</h3>
            <p className="mb-6 leading-relaxed text-text-secondary">{biz.description}</p>
            <div className="flex flex-wrap gap-3 mb-6">
                {biz.tags.map((feat, i) => (
                    <span key={i} className="text-sm px-4 py-2 bg-bg-gray rounded-full text-text-secondary flex items-center gap-2">
                        <i className="fas fa-check text-secondary"></i> {feat}
                    </span>
                ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold transition-all duration-300 group-hover:gap-4 group-hover:text-primary-dark">
                Learn More <i className="fas fa-arrow-right"></i>
            </a>
        </div>
    );
}