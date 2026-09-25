import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    if (onNavigate) onNavigate(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F7F5]/90 backdrop-blur-md py-3.5 border-b border-[#0B1B33]/10 shadow-[0_4px_20px_rgba(11,27,51,0.04)]'
            : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="E DESIGN & BUILD Home"
          >
            <div className="relative overflow-hidden rounded bg-white p-1 shadow-xs border border-[#0B1B33]/15 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/assets/logo.jpg"
                alt="E DESIGN & BUILD Logo"
                className="h-9 w-9 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm tracking-wider font-bold text-[#0B1B33] uppercase transition-colors group-hover:text-[#E8752A]">
                E Design & Build
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#0B1B33]/60 -mt-0.5">
                Architecture • Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-xs uppercase tracking-[0.2em] font-medium text-[#0B1B33]/80 hover:text-[#0B1B33] transition-colors py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8752A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#0B1B33] text-white hover:bg-[#101F36] text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 group border border-[#0B1B33] hover:border-[#E8752A]"
            >
              <span>Start a Project</span>
              <span className="w-1.5 h-1.5 bg-[#E8752A] rounded-full group-hover:scale-125 transition-transform"></span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E8752A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0B1B33] hover:text-[#E8752A] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0B1B33]/95 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 text-white md:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-8">
              // Navigation Index
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between border-b border-white/10 pb-4 text-2xl font-display uppercase tracking-tight text-white hover:text-[#E8752A] transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-[#E8752A]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="w-full py-3.5 px-6 bg-[#E8752A] text-white uppercase text-xs tracking-[0.2em] font-semibold flex items-center justify-center gap-2 hover:bg-[#d4651e] transition-colors"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-[10px] font-mono text-white/50 text-center tracking-widest pt-2">
              BULACAN, PHILIPPINES • ARCHITECTURAL DESIGN & BUILD
            </div>
          </div>
        </div>
      )}
    </>
  );
}
