import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#0B1B33]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-2">
              <span className="w-2 h-[2px] bg-[#E8752A]"></span>
              03 / STUDIO CAPABILITIES
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B1B33]">
              DISCIPLINES &amp; SERVICES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#0B1B33]/60 max-w-sm uppercase tracking-wider">
            Comprehensive architectural and construction delivery from initial sketch to final occupancy.
          </p>
        </div>

        {/* Large Numbered Typographic Service Rows */}
        <div className="divide-y divide-[#0B1B33]/10 border-b border-[#0B1B33]/10">
          {SERVICES_DATA.map((service) => {
            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveService(service.num)}
                onMouseLeave={() => setActiveService(null)}
                className="group py-7 sm:py-10 transition-colors duration-300 hover:bg-white/80 px-3 sm:px-6 cursor-pointer"
                onClick={() => onSelectService && onSelectService(service.title)}
              >
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center">
                  {/* Service Number */}
                  <div className="col-span-2 md:col-span-2 flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-3xl font-light text-[#0B1B33]/40 group-hover:text-[#E8752A] transition-all duration-300 group-hover:translate-x-1">
                      {service.num}
                    </span>
                    <div className="h-[2px] w-0 bg-[#E8752A] transition-all duration-300 group-hover:w-6 hidden sm:block"></div>
                  </div>

                  {/* Service Title */}
                  <div className="col-span-8 md:col-span-5">
                    <h3 className="font-display text-lg sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0B1B33]">
                      {service.title}
                    </h3>
                    {/* On mobile show summary inline */}
                    <p className="mt-1 text-xs text-[#0B1B33]/60 font-light leading-relaxed md:hidden">
                      {service.summary}
                    </p>
                  </div>

                  {/* Summary & Deliverables — desktop only */}
                  <div className="hidden md:block md:col-span-4 space-y-2">
                    <p className="text-sm text-[#0B1B33]/70 font-light leading-relaxed">
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {service.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono uppercase bg-white border border-[#0B1B33]/10 px-2 py-0.5 text-[#0B1B33]/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#0B1B33]/15 flex items-center justify-center group-hover:border-[#E8752A] group-hover:bg-[#0B1B33] transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0B1B33] group-hover:text-[#E8752A] transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
