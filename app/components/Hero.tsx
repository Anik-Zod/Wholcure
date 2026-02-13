'use client';

import { Ui } from '@/types';
import { useEffect, useRef, useState } from 'react';

export default function Hero({ data }: { data: Ui }) {
    const [counts, setCounts] = useState({
        industries: 0,
        projectsCompleted: 0,
        teamMembers: 0,
        happyClients: 0,
    });

    const heroRef = useRef<HTMLElement>(null);
    const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
    const hasAnimated = useRef(false);

    useEffect(() => {
        // Parallax Effect
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;

            elementsRef.current.forEach((element, index) => {
                if (element) {
                    const speed = parallaxSpeed * (index + 1);
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Counter Animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        animateCounters();
                        hasAnimated.current = true;
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const animateCounters = () => {
        if (!data) return;

        const duration = 2000;
        const targets = [
            Number(data.industries) || 0,
            Number(data.projectsCompleted) || 0,
            Number(data.teamMembers) || 0,
            Number(data.happyClients) || 0,
        ];
        const keys = ['industries', 'projectsCompleted', 'teamMembers', 'happyClients'] as const;

        targets.forEach((target, index) => {
            const key = keys[index];
            const startTime = performance.now();

            const updateCounter = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * target);

                setCounts((prev) => ({
                    ...prev,
                    [key]: value,
                }));

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            requestAnimationFrame(updateCounter);
        });
    };

    return (
        <section
            id="home"
            className="min-h-screen relative flex items-center justify-center pt-20 pb-34 overflow-hidden bg-hero-bg"
            ref={heroRef}
        >
            <div className="container relative z-10 max-w-7xl px-8 mx-auto text-center">
                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-[43px] md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-text-primary opacity-0 translate-y-[30px] animate-fadeInUp">
                        Building Tomorrow's <br />
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Multi-Industry
                        </span>{' '}
                        Excellence
                    </h1>
                    <p className="hidden md:block text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto opacity-0 translate-y-[30px] animate-fadeInUp [animation-delay:0.2s]">
                        WholCure is a dynamic industrial group operating across 8 diverse sectors,
                        delivering innovative solutions and driving growth through quality, trust, and expertise.
                    </p>

                    <div className="flex gap-4 md:gap-6 justify-center flex-wrap mb-4 md:mb-16 opacity-0 translate-y-[30px] animate-fadeInUp [animation-delay:0.4s]">
                        <a
                            href="#businesses"
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden bg-gradient-primary  text-white shadow-custom-md hover:translate-y-[-3px] hover:shadow-custom-hover group"
                        >
                            <span className="relative z-10">Explore Businesses</span>
                            <i className="fas fa-arrow-right relative z-10"></i>
                            <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white/30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-600 group-hover:w-[300px] group-hover:h-[300px]"></span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:translate-y-[-3px] hover:shadow-custom-md group"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <i className="fas fa-envelope relative z-10"></i>
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-0 md:mt-16 opacity-0 translate-y-[30px] animate-fadeInUp [animation-delay:0.6s]">
                        <div className="stat-card text-center p-6 bg-white/90 rounded-2xl backdrop-blur-md shadow-custom-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-custom-md">
                            <h3 className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {counts.industries}
                            </h3>
                            <p className="text-sm text-text-secondary m-0">Industries</p>
                        </div>
                        <div className="stat-card text-center p-6 bg-white/90 rounded-2xl backdrop-blur-md shadow-custom-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-custom-md">
                            <h3 className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {counts.projectsCompleted}+
                            </h3>
                            <p className="text-sm text-text-secondary m-0">Projects Completed</p>
                        </div>
                        <div className="stat-card text-center p-6 bg-white/90 rounded-2xl backdrop-blur-md shadow-custom-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-custom-md">
                            <h3 className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {counts.teamMembers}
                            </h3>
                            <p className="text-sm text-text-secondary m-0">Team Members</p>
                        </div>
                        <div className="stat-card text-center p-6 bg-white/90 rounded-2xl backdrop-blur-md shadow-custom-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-custom-md">
                            <h3 className="text-4xl md:text-5xl font-black bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {counts.happyClients >= 1000 ? '1000+' : counts.happyClients}
                            </h3>
                            <p className="text-sm text-text-secondary m-0">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 inset-x-0 mx-auto w-fit animate-bounce-s">
                <div className="w-[30px] h-[50px] border-[3px] border-primary rounded-[20px] flex justify-center pt-2">
                    <div className="w-[4px] h-[10px] bg-primary rounded-sm animate-scroll"></div>
                </div>
            </div>
        </section>
    );
}
