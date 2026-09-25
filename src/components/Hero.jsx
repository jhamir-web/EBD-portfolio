import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Layers } from 'lucide-react';

export default function Hero({ onExploreClick, onOpenProject }) {
  const [activeHeroView, setActiveHeroView] = useState('render'); // 'render' | 'blueprint'

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-grid-subtle">
      {/* Subtle Architectural Reference Lines */}
      <div className="absolute top-0 left-8 sm:left-16 bottom-0 w-[1px] bg-[#0B1B33]/5 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-0 right-8 sm:right-16 bottom-0 w-[1px] bg-[#0B1B33]/5 pointer-events-none hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between">
        {/* Top Editorial Index & Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-[#0B1B33]/10 text-[11px] font-mono tracking-[0.2em] text-[#0B1B33]/60 uppercase">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[#E8752A]"></span>
            <span>E DESIGN & BUILD STUDIO</span>
            <span className="text-[#0B1B33]/30">/</span>
            <span>PORTFOLIO 2026</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#0B1B33]/70">
            <span>COORD: 14.839° N, 120.811° E</span>
            <span className="text-[#0B1B33]/30">/</span>
            <span className="text-[#0B1B33]">CENTRAL LUZON & BEYOND</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-8 sm:py-12 flex-1">
          {/* Left Column: Bold Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-[#0B1B33]/15 self-start text-[10px] font-mono uppercase tracking-[0.25em] text-[#0B1B33]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8752A] animate-pulse"></span>
              Architectural Practice & Construction
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-[#0B1B33] leading-[0.92] uppercase">
                WE DESIGN.
                <br />
                <span className="text-[#0B1B33]/90 relative inline-block">
                  WE BUILD.
                  {/* Subtle Orange Accent Line */}
                  <span className="absolute -bottom-2 left-0 w-24 sm:w-32 h-[3px] bg-[#E8752A]"></span>
                </span>
              </h1>
            </div>

            <div className="pt-4 max-w-xl space-y-3">
              <p className="text-xl sm:text-2xl font-light text-[#0B1B33] tracking-tight leading-snug">
                Thoughtful spaces, carefully designed and built.
              </p>
              <p className="text-sm sm:text-base text-[#0B1B33]/70 font-normal leading-relaxed">
                Architecture, renovation, and construction crafted around the way you live. Seamlessly bridging concept drawings and structural precision.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6">
              <a
                href="#projects"
                onClick={onExploreClick}
                className="px-7 py-3.5 bg-[#0B1B33] text-white hover:bg-[#101F36] transition-all duration-300 text-xs font-semibold uppercase tracking-[0.2em] border border-[#0B1B33] hover:border-[#E8752A] flex items-center gap-3 group shadow-xs"
              >
                <span>VIEW PROJECTS</span>
                <span className="text-[#E8752A] font-mono text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-[0.18em] text-[#0B1B33]/80 hover:text-[#E8752A] transition-colors py-2 group"
              >
                <span>Explore our work</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#E8752A] group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Architectural Micro Metrics */}
            <div className="pt-6 sm:pt-10 grid grid-cols-3 gap-4 border-t border-[#0B1B33]/10 max-w-lg">
              <div>
                <div className="font-mono text-xs text-[#E8752A] font-semibold">// 01</div>
                <div className="font-display text-sm font-semibold text-[#0B1B33] mt-0.5">RESIDENTIAL</div>
                <div className="text-[10px] font-mono text-[#0B1B33]/50">Tailored living</div>
              </div>
              <div>
                <div className="font-mono text-xs text-[#E8752A] font-semibold">// 02</div>
                <div className="font-display text-sm font-semibold text-[#0B1B33] mt-0.5">RENOVATION</div>
                <div className="text-[10px] font-mono text-[#0B1B33]/50">Structural upgrades</div>
              </div>
              <div>
                <div className="font-mono text-xs text-[#E8752A] font-semibold">// 03</div>
                <div className="font-display text-sm font-semibold text-[#0B1B33] mt-0.5">BUILD</div>
                <div className="text-[10px] font-mono text-[#0B1B33]/50">Turnkey delivery</div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Magazine Presentation Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-3 sm:p-4 border border-[#0B1B33]/15 shadow-[0_12px_40px_rgba(11,27,51,0.06)] group">
              {/* Technical Drawing Markers */}
              <div className="absolute top-2 left-2 text-[9px] font-mono text-[#0B1B33]/40 tracking-wider">
                FIG. 01 — MALOLOS
              </div>
              <div className="absolute top-2 right-2 text-[9px] font-mono text-[#E8752A] tracking-wider">
                SCALE 1:150
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center justify-between mb-2 mt-4 px-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[#0B1B33]/70">
                  Featured Project Monograph
                </span>
                <div className="flex items-center gap-1 bg-[#F7F7F5] p-1 border border-[#0B1B33]/10">
                  <button
                    onClick={() => setActiveHeroView('render')}
                    className={`text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider transition-colors ${
                      activeHeroView === 'render'
                        ? 'bg-[#0B1B33] text-white font-medium'
                        : 'text-[#0B1B33]/60 hover:text-[#0B1B33]'
                    }`}
                  >
                    3D Render
                  </button>
                  <button
                    onClick={() => setActiveHeroView('blueprint')}
                    className={`text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider transition-colors ${
                      activeHeroView === 'blueprint'
                        ? 'bg-[#0B1B33] text-white font-medium'
                        : 'text-[#0B1B33]/60 hover:text-[#0B1B33]'
                    }`}
                  >
                    Blueprint
                  </button>
                </div>
              </div>

              {/* Image Frame with Aspect Ratio */}
              <div
                className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-[#101F36] cursor-pointer"
                onClick={() => onOpenProject && onOpenProject('01')}
              >
                <img
                  src={
                    activeHeroView === 'render'
                      ? '/assets/projects/p1-render.jpg'
                      : '/assets/projects/p1-plan.jpg'
                  }
                  alt="Proposed Renovation of Existing Bungalow House"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeHeroView === 'blueprint' ? 'bg-white p-2 object-contain' : 'group-hover:scale-105'
                  }`}
                />

                {/* Architectural Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0B1B33]/85 backdrop-blur-md p-3 border-l-2 border-[#E8752A] text-white flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono tracking-widest text-[#E8752A] uppercase">
                      PROJ 01 • BUNGALOW RENOVATION
                    </div>
                    <div className="text-xs font-display tracking-tight text-white/90 truncate max-w-[220px] sm:max-w-xs">
                      Grand Royale Subd., Malolos, Bulacan
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 tracking-wider text-white">
                    180 Days
                  </span>
                </div>
              </div>

              {/* Bottom Caption & Drawing Grid Note */}
              <div className="pt-3 flex items-center justify-between text-[10px] font-mono text-[#0B1B33]/60 uppercase">
                <span>EST. COST: ₱3,900,000</span>
                <span className="text-[#E8752A] group-hover:underline flex items-center gap-1 cursor-pointer" onClick={() => onOpenProject && onOpenProject('01')}>
                  Inspect drawing <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Blueprint Grid Watermark Behind */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#E8752A]/20 pointer-events-none -z-10 hidden sm:block"></div>
          </div>
        </div>

        {/* Bottom Banner Bar */}
        <div className="pt-8 border-t border-[#0B1B33]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#0B1B33]/70">
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 bg-[#E8752A]"></span>
            <span>Disciplined design. Honest execution.</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-wider">
            <span>RESIDENTIAL</span>
            <span>•</span>
            <span>RENOVATION</span>
            <span>•</span>
            <span>CONSTRUCTION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
