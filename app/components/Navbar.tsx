'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';


const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'businesses', label: 'Businesses', href: '/#businesses' },
  { id: 'lms', label: 'LMS', href: '/lms' },
  { id: 'careers', label: 'Careers', href: '/careers' },
  { id: 'why-choose', label: 'Why Choose', href: '/#why-choose' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]



export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active link logic only if on home page
      if (pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id');

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (sectionId) setActiveSection(sectionId);
          }
        });
      } else {
        // If not on home page, setActiveSection based on pathname
        const path = pathname.replace('/', '');
        if (path) setActiveSection(path);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'careers' || id === 'lms') {
      closeMenu();
      return; // Let Next.js Link handle the navigation
    }

    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
        // Update URL with hash
        router.push(`/#${id}`, { scroll: false });
        closeMenu();
        setActiveSection(id);
      }
    } else {
      // If we're on another page, Link will handle navigation to /#id
      closeMenu();
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${isScrolled ? 'bg-white/98 shadow-custom-md' : 'bg-white/95 backdrop-blur-xl shadow-custom-sm'}`} id="navbar">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* logo */}
        <Link
          href={pathname === '/' ? '#home' : '/#home'}
          className="logo flex items-center transition-opacity hover:opacity-80 hover:cursor-pointer hover:scale-105 transition-all "
          onClick={(e) => handleLinkClick(e, 'home')}
        >

          <img src="/wholcure.png" alt="WholCure" className="w-[160px] h-[40px]" />
        </Link>

        <ul className={`lg:flex items-center gap-8 ${isMenuOpen ? 'fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white flex flex-col p-8 gap-0 overflow-y-auto shadow-custom-lg transition-all duration-300' : 'hidden lg:flex'} `} id="navMenu">
          {navItems.map((item) => (
            <li key={item.id} className="w-full lg:w-auto">
              <Link
                href={item.href}
                className={`block w-full py-4 lg:py-2 relative font-medium text-text-primary transition-all duration-300 hover:text-primary 
                       ${activeSection === item.id ? 'text-primary' : ''}
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-gradient-primary after:transition-all after:duration-300 after:rounded-sm hover:after:w-full lg:border-none border-b border-border
                       ${activeSection === item.id ? 'after:w-full' : ''}
                       capitalize
                       `}
                onClick={(e) => handleLinkClick(e, item.id)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={`flex flex-col gap-[6px] cursor-pointer p-2 lg:hidden group ${isMenuOpen ? 'active' : ''}`} id="navToggle" onClick={toggleMenu}>
          <span className={`w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-x-[8px] translate-y-[8px]' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-[25px] h-[3px] bg-primary rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-x-[8px] -translate-y-[8px]' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}
