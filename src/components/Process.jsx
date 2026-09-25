import React from 'react';
import { PROCESS_DATA } from '../data/projectsData';

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 bg-white relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-4">
          <span className="w-2 h-[2px] bg-[#E8752A]"></span>
          04 / METHODOLOGY
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0B1B33]/10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B1B33]">
            HOW WE WORK.
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#0B1B33]/60 max-w-sm uppercase tracking-wider">
            A linear, predictable delivery cycle ensuring architectural fidelity and cost control.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_DATA.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 bg-[#F7F7F5] border border-[#0B1B33]/15 flex flex-col justify-between hover:border-[#0B1B33] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#0B1B33]/10">
                  <span className="font-mono text-xl font-bold text-[#0B1B33] group-hover:text-[#E8752A] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#0B1B33]/40 uppercase">
                    PHASE {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#0B1B33] mt-5">
                  {step.name}
                </h3>

                <p className="mt-3 text-sm font-medium text-[#0B1B33] leading-snug">
                  {step.description}
                </p>

                <p className="mt-3 text-xs text-[#0B1B33]/70 font-light leading-relaxed">
                  {step.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#0B1B33]/10 flex items-center justify-between text-[10px] font-mono text-[#0B1B33]/50">
                <span>STAGE {idx + 1} OF 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8752A]/40 group-hover:bg-[#E8752A] transition-colors"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
