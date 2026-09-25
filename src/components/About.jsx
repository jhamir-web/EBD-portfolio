import React from 'react';
import { Compass, PenTool, Hammer, CheckSquare } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white relative border-b border-[#0B1B33]/10 overflow-hidden">
      {/* Subtle Blueprint Grid Accent */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-8">
          <span className="w-2 h-[2px] bg-[#E8752A]"></span>
          02 / PRACTICE & ETHOS
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B1B33] leading-[0.95]">
              DESIGNING SPACES.
              <br />
              <span className="text-[#0B1B33]/85 relative">
                BUILDING IDEAS.
                <span className="absolute -bottom-3 left-0 w-20 h-[3px] bg-[#E8752A]"></span>
              </span>
            </h2>

            <div className="mt-8 space-y-4 max-w-2xl text-base sm:text-lg text-[#0B1B33]/80 font-light leading-relaxed">
              <p>
                E Design & Build is a multi-disciplinary architectural practice and construction studio. We work across architectural design, custom residential projects, structural renovations, property extensions, and turnkey construction.
              </p>
              <p className="text-sm sm:text-base text-[#0B1B33]/70 font-normal">
                Our approach merges disciplined drafting with practical on-site construction know-how. Every project is conceived with spatial clarity, structural honesty, and realistic project timelines.
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Principles Grid */}
          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
            <div className="p-6 bg-[#F7F7F5] border border-[#0B1B33]/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#0B1B33]/60 uppercase tracking-widest">
                <span>// PILLAR 01</span>
                <span className="text-[#E8752A]">ARCHITECTURE</span>
              </div>
              <h4 className="font-display text-base font-bold uppercase tracking-tight text-[#0B1B33]">
                Conceptual & Technical Precision
              </h4>
              <p className="text-xs text-[#0B1B33]/70 leading-relaxed font-light">
                From initial schematic layouts to comprehensive construction documents, our drawings reflect exact site requirements and structural feasibility.
              </p>
            </div>

            <div className="p-6 bg-[#F7F7F5] border border-[#0B1B33]/15 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#0B1B33]/60 uppercase tracking-widest">
                <span>// PILLAR 02</span>
                <span className="text-[#E8752A]">CONSTRUCTION</span>
              </div>
              <h4 className="font-display text-base font-bold uppercase tracking-tight text-[#0B1B33]">
                Transparent Execution
              </h4>
              <p className="text-xs text-[#0B1B33]/70 leading-relaxed font-light">
                We manage duration schedules and bill of quantities with total transparency, ensuring every phase is executed cleanly to approved specifications.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Data Line */}
        <div className="mt-16 pt-8 border-t border-[#0B1B33]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-[#0B1B33]/70">
          <div>
            <div className="text-[10px] uppercase text-[#0B1B33]/50">PRACTICE DOMAIN</div>
            <div className="font-bold text-[#0B1B33] text-sm mt-1">Design & Build</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-[#0B1B33]/50">PROJECT REACH</div>
            <div className="font-bold text-[#0B1B33] text-sm mt-1">Bulacan • Isabela • Zamboanga</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-[#0B1B33]/50">PROJECT DISCIPLINES</div>
            <div className="font-bold text-[#0B1B33] text-sm mt-1">Residential & Commercial</div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-[#0B1B33]/50">STUDIO FOCUS</div>
            <div className="font-bold text-[#0B1B33] text-sm mt-1">Surgical Renovation & Build</div>
          </div>
        </div>
      </div>
    </section>
  );
}
