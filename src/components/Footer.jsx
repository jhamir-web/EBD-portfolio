import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="hidden md:block bg-[#0B1B33] text-white pt-16 pb-12 border-t border-[#101F36] relative overflow-hidden bg-grid-dark">
      {/* Hairline subtle orange top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8752A]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10 items-start">
          {/* Logo & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white rounded shadow-sm">
                <img
                  src="/assets/logo.jpg"
                  alt="E DESIGN & BUILD Official Mark"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <span className="font-display text-base font-bold tracking-wider text-white uppercase block">
                  E DESIGN & BUILD
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase block">
                  Architecture & Construction
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 font-light max-w-sm leading-relaxed">
              Thoughtful spaces, carefully designed and built. Architectural planning, residential development, and turnkey renovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E8752A]">
              // INDEX
            </div>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-white/70">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Studio
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Capabilities & Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Delivery Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Office Coordinates & Technical Stamp */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E8752A]">
              // LOCATION SPECIFICATION
            </div>
            <div className="text-xs font-mono text-white/70 space-y-1.5">
              <div>LOCATION: BULACAN, PHILIPPINES</div>
              <div>
                DIRECT: <a href="tel:09613364683" className="text-white hover:text-[#E8752A] transition-colors">0961 336 4683</a>
              </div>
              <div>
                EMAIL: <a href="mailto:johnervin0709@gmail.com" className="text-white hover:text-[#E8752A] transition-colors">johnervin0709@gmail.com</a>
              </div>
              <div className="text-white/40 text-[10px] pt-1">
                Active Projects: Bulacan • Isabela • Zamboanga
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div>
            © 2026 E Design & Build. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#E8752A] transition-colors py-1 group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E8752A] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
