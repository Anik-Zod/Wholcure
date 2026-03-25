'use client';

import { Ui } from '@/types';
import { useEffect, useRef, useState } from 'react';
import HeroOrbit from './HeroOrbit';
import { SparkleIcon, StarIcon } from 'lucide-react';

export default function Hero({ data }: { data: Ui }) {
    const [counts, setCounts] = useState({
        industries: 0,
        projectsCompleted: 0,
        teamMembers: 0,
        happyClients: 0,
    });

    const heroRef = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

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
                setCounts((prev) => ({ ...prev, [key]: value }));
                if (progress < 1) requestAnimationFrame(updateCounter);
            };
            requestAnimationFrame(updateCounter);
        });
    };

    useEffect(() => {
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
        return () => observer.disconnect();
    }, [data]);

    // Common style for all rings to ensure visibility
const ringStyle = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f05225]/30 shadow-[0_0_20px_rgba(240,82,37,0.3),_inset_0_0_15px_rgba(240,82,37,0.2)] [mask-image:radial-gradient(closest-side,transparent_95%,black_100%)] bg-primary/10";
    return (
        <section ref={heroRef} id="home" className="relative min-h-screen w-full flex items-center justify-center bg-hero-bg overflow-hidden pt-20 pb-34 px-6 text-center">
            
            {/* --- 1. INTERACTIVE BACKGROUND (Orbit & Stars) --- */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
                
                {/* Static Background Rings */}
                <div className={`size-[620px] ${ringStyle}`}></div>
                <div className={`size-[820px] ${ringStyle}`}></div>
                <div className={`size-[1020px] ${ringStyle}`}></div>
                <div className={`size-[1220px] ${ringStyle}`}></div>

                {/* Stars and Orbits */}
                <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="10s">
                    <StarIcon className="size-28 text-primary opacity-80" />
                </HeroOrbit>

                <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
                    <StarIcon className="size-8 text-primary" />
                </HeroOrbit>

                <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s">
                    <SparkleIcon className="size-8 text-primary" />
                </HeroOrbit>
                
                <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" >
                     <SparkleIcon className="size-8 text-primary" />      
                         
                </HeroOrbit>
            </div>

            {/* --- 2. HERO CONTENT --- */}
            <div className="container relative z-10 max-w-7xl mx-auto">
                <div className="relative max-w-4xl mx-auto">
                <h1 className="text-[43px] md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] text-text-primary opacity-0 translate-y-[30px] animate-fadeInUp">
                        Building Tomorrow's <br />
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Multi-Industry
                        </span>{' '}
                        Excellence
                    </h1>
                    
                    <p className="hidden md:block text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto opacity-0 translate-y-[30px] animate-fadeInUp [animation-delay:0.2s]">
                        WholCure is a dynamic industrial group operating across {data?.industries} diverse sectors,
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

                    {/* STAT CARDS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 opacity-0 translate-y-[30px] animate-fadeInUp [animation-delay:0.6s]">
                        {[
                            { label: 'Industries', value: counts.industries },
                            { label: 'Projects Completed', value: `${counts.projectsCompleted}+` },
                            { label: 'Team Members', value: counts.teamMembers },
                            { label: 'Happy Clients', value: counts.happyClients >= 1000 ? '1000+' : counts.happyClients },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 bg-white/15 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl transition-all hover:translate-y-[-5px]">
                                <h3 className="text-4xl md:text-5xl font-black text-primary mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SCROLL INDICATOR */}
            <div className="absolute bottom-10 inset-x-0 mx-auto w-fit animate-bounce">
                <div className="w-[30px] h-[50px] border-[3px] border-primary rounded-[20px] flex justify-center pt-2">
                    <div className="w-[4px] h-[10px] bg-primary rounded-sm animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}