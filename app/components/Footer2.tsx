"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



const Footer2 = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/#about" },
        { name: "Our Businesses", link: "/#businesses" },
        { name: "LMS", link: "/lms" },
        { name: "Careers", link: "/careers" },
        { name: "Why choose us", link: "/why_choose_us" }
      ]
    },
    {
      title: "Our Businesses",
      links: [
        { name: "Real Estate", link: "/real_estate" },
        { name: "Technology", link: "/technology" },
        { name: "Marketing", link: "/marketing" },
        { name: "Solar Electronics", link: "/solar_electronics" },
        { name: "MedHIPPA", link: "/medhippa" },
        { name: "Ogaglow", link: "/ogaglow" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", link: "/legal/privacy_policy" },
        { name: "Terms & Conditions", link: "/legal/terms_&_conditions" },
        { name: "Returns Policy", link: "/legal/returns_policy" }
      ]
    },
    {
      title: "FAQ",
      links: [
        { name: "General Questions", link: "/faq/general_questions" },
        { name: "Pricing & Plans", link: "/faq/pricing_&_plans" },
        { name: "Support & Help", link: "/faq/support_&_help" }
      ]
    }
  ];

  const Social = [
  { icon: 'linkedin-in', to: "https://www.linkedin.com/company/wholcure/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BYF28u2PPT36NC9rbL3NWEg%3D%3D" },
  { icon: 'tiktok', to: "https://www.tiktok.com/@wholcure?_r=1&_t=ZS-93wEmqvioq5" },
  { icon: 'whatsapp', to: "https://wa.me/+923282296963" },
  { icon: 'facebook-f', to: "https://www.facebook.com/WholCure?rdid=APVwOdfz6R85WFkB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GdLegajdW%2F#" },
  { icon: 'instagram', to: "https://www.instagram.com/wholcure" },
  { icon: 'youtube', to: "https://youtube.com/@wholcure?si=5Yr7n_9-Yz1cAFyP" }
  ];

  /* ================= GSAP VIEWPORT ANIMATION ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%", // Triggers when the top of footer reaches 85% of viewport
          toggleActions: "play none none none", // Plays once when entering
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  /* ================= HOVER ANIMATIONS ================= */
  const hoverIn = (el: HTMLElement) => {
    gsap.to(el, { y: -4, scale: 1.05, duration: 0.3, ease: "power2.out" });
  };

  const hoverOut = (el: HTMLElement) => {
    gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <footer ref={footerRef} className="px-6 md:px-16 lg:px-24 xl:px-32 bg-[#17203C] overflow-hidden">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* Logo & Description */}
        <div className="footer-item">
          <Image
            className="w-34 md:w-40"
            src="/White tagline logo.pdf.png"
            width={100}
            height={100}
            alt="Logo"
          />
          <p className="max-w-[410px] mt-6 text-white/60">
            A multi-industry group committed to excellence, innovation, and sustainable growth across eight dynamic sectors.
          </p>

          <div className="flex gap-4 mt-6">
            {Social.map((s, i) => (
              <a
                key={i}
                href={s.to}
                aria-label={s.icon}
                className="py-2 px-2 text-white flex items-center justify-center bg-white/10 rounded-lg"
                onMouseEnter={(e) => hoverIn(e.currentTarget)}
                onMouseLeave={(e) => hoverOut(e.currentTarget)}
              >
                <i className={`fab fa-${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between w-full md:w-[56%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index} className="footer-item">
              <h3 className="font-semibold text-base mb-3 text-white">
                {section.title}
              </h3>
              <ul className="text-sm space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.link}
                      className="inline-block text-white/60"
                      onMouseEnter={(e) => hoverIn(e.currentTarget)}
                      onMouseLeave={(e) => hoverOut(e.currentTarget)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <p className="footer-item py-4 text-center text-sm md:text-base text-white/60">
        Copyright 2025 © <a href="#" className="underline">WholCure</a> All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer2;