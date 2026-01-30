"use client"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionHeader from './SectionHeader';

interface BusinessProps {
  icon: string;
  title: string;
  desc: string;
  features: string[];
}

function BusinessCard({ biz }: { biz: BusinessProps }) {
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
        className="w-[70px] h-[70px] flex items-center justify-center bg-gradient-primary rounded-xl text-white text-3xl mb-6 shadow-lg transform-style-3d"
      >
        <i className={`fas ${biz.icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-text-primary">{biz.title}</h3>
      <p className="mb-6 leading-relaxed text-text-secondary">{biz.desc}</p>
      <div className="flex flex-wrap gap-3 mb-6">
        {biz.features.map((feat, i) => (
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

export default function Businesses() {
  const businesses = [
    {
      icon: 'fa-building',
      title: 'WholCure Real Estate',
      desc: 'Premium property development, strategic buying and selling solutions, and comprehensive real estate investment services for residential and commercial projects.',
      features: ['Property Development', 'Investment Solutions', 'Asset Management']
    },
    {
      icon: 'fa-hard-hat',
      title: 'WholCure Constructions',
      desc: 'World-class construction services for residential, commercial, and infrastructure projects, delivering quality, safety, and timely completion.',
      features: ['Residential Projects', 'Commercial Buildings', 'Infrastructure']
    },
    {
      icon: 'fa-laptop-code',
      title: 'WholCure Technology',
      desc: 'Cutting-edge software development, innovative web solutions, AI-powered tools, and comprehensive IT services for digital transformation.',
      features: ['Software Development', 'AI Solutions', 'IT Services']
    },
    {
      icon: 'fa-bullhorn',
      title: 'WholCure Marketing',
      desc: 'Strategic digital marketing, powerful branding, creative media solutions, and growth strategies that amplify your business presence.',
      features: ['Digital Marketing', 'Brand Strategy', 'Growth Consulting']
    },
    {
      icon: 'fa-solar-panel',
      title: 'WholCure Solar Electronics',
      desc: 'Advanced solar energy systems, renewable energy solutions, and sustainable power alternatives for residential and commercial applications.',
      features: ['Solar Systems', 'Renewable Energy', 'Green Solutions']
    },
    {
      icon: 'fa-microchip',
      title: 'WholCure Electronics',
      desc: 'Innovative electronic products, advanced systems, and cutting-edge technological innovations for various industrial and consumer applications.',
      features: ['Electronic Products', 'System Design', 'Innovation R&D']
    },
    {
      icon: 'fa-box',
      title: 'WholCure Packaging',
      desc: 'Comprehensive industrial and commercial packaging solutions, custom designs, and sustainable packaging innovations for diverse products.',
      features: ['Industrial Packaging', 'Custom Solutions', 'Eco-Friendly Options']
    },
    {
      icon: 'fa-gavel',
      title: 'WholCure Legal Services',
      desc: 'Professional corporate legal services, business compliance, regulatory advisory, and comprehensive legal solutions for modern enterprises.',
      features: ['Corporate Law', 'Compliance', 'Legal Advisory']
    },
    {
      icon: 'fa-briefcase',
      title: 'WholCure Business Development',
      desc: 'Wholcure Business Development helps startups and companies with planning, branding, and strategic growth solutions.',
      features: ['Business Development', 'Strategic Growth', 'Brand Strategy']
    },
    {
      icon: 'fa-hospital',
      title: 'WholCure MedHIPPA',
      desc: 'Wholcure MedHIPPA provides professional medical billing, coding, claims management, and revenue cycle services for healthcare providers and clinics.',
      features: ['Medical Billing', 'Coding', 'Claims Management']
    },
    {
      icon: 'fa-graduation-cap',
      title: 'WholCure Institute',
      desc: 'Wholcure Institute offers professional training and skill development programs for students, freelancers, and future entrepreneurs.',
      features: ['Professional Training', 'Skill Development', 'Future Entrepreneurs']
    },
    {
      icon: 'fa-spa',
      title: 'WholCure Ogaglow',
      desc: "WholCure Ogaglow delivers natural skincare and hair care products focused on healthy skin, strong hair, and organic beauty solutions.",
      features: ['Natural Skincare', 'Hair Care', 'Organic Beauty']
    },
    {
      icon: 'fa-car',
      title: "WholCure Moters",
      desc: "Wholcure Motors specializes in buying and selling reliable vehicles with transparent pricing and customer-focused automotive services.",
      features: ['Vehicle Buying', 'Vehicle Selling', 'Transparent Pricing']
    }
  ];

  return (
    <section id="businesses" className="py-24 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-8">
        <SectionHeader
          badge="OUR PORTFOLIO"
          title="Our"
          highlightedText="Businesses"
          description="Eight industries, one commitment to excellence"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((biz, idx) => (
            <BusinessCard key={idx} biz={biz} />
          ))}
        </div>
      </div>
    </section>
  );
}

