import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/projectsData';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeService, setActiveService] = useState(null);
  const [openService, setOpenService] = useState(null);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 md:pb-12 border-b border-[#0B1B33]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-2">
              <span className="w-2 h-[2px] bg-[#E8752A]"></span>
              03 / STUDIO CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B1B33]">
              DISCIPLINES &amp; SERVICES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#0B1B33]/60 max-w-sm uppercase tracking-wider">
            Comprehensive architectural and construction delivery from initial sketch to final occupancy.
          </p>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden divide-y divide-[#0B1B33]/10 border-b border-[#0B1B33]/10">
          {SERVICES_DATA.map((service) => {
            const isOpen = openService === service.num;
            return (
              <div key={service.num}>
                <button
                  onClick={() => {
                    setOpenService(isOpen ? null : service.num);
                  }}
                  className="w-full flex items-center justify-between py-4 text-left gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-sm font-light text-[#E8752A] shrink-0">{service.num}</span>
                    <span className="font-display text-lg font-bold uppercase tracking-tight text-[#0B1B33] truncate">
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0B1B33]/50 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 pl-10 space-y-3">
                    <p className="text-xs text-[#0B1B33]/70 font-light leading-relaxed">
                      {service.summary}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono uppercase bg-white border border-[#0B1B33]/10 px-2 py-0.5 text-[#0B1B33]/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {onSelectService && (
                      <button
                        onClick={() => onSelectService(service.title)}
                        className="text-[11px] font-mono uppercase tracking-wider text-[#E8752A] flex items-center gap-1 pt-1"
                      >
                        Inquire about this service <ArrowUpRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: Large Numbered Rows */}
        <div className="hidden md:block divide-y divide-[#0B1B33]/10 border-b border-[#0B1B33]/10">
          {SERVICES_DATA.map((service) => {
            const isHovered = activeService === service.num;
            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveService(service.num)}
                onMouseLeave={() => setActiveService(null)}
                className="group py-8 sm:py-10 transition-colors duration-300 hover:bg-white/80 px-4 sm:px-6 cursor-pointer"
                onClick={() => onSelectService && onSelectService(service.title)}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start md:items-center">
                  {/* Service Number */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-[#0B1B33]/40 group-hover:text-[#E8752A] transition-all duration-300 group-hover:translate-x-1">
                      {service.num}
                    </span>
                    <div className="h-[2px] w-0 bg-[#E8752A] transition-all duration-300 group-hover:w-8"></div>
                  </div>

                  {/* Service Title */}
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#0B1B33] transition-colors group-hover:text-[#0B1B33]">
                      {service.title}
                    </h3>
                  </div>

                  {/* Summary & Deliverables */}
                  <div className="md:col-span-4 space-y-2">
                    <p className="text-xs sm:text-sm text-[#0B1B33]/70 font-light leading-relaxed">
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
                  <div className="md:col-span-1 flex justify-end">
                    <div className="w-10 h-10 rounded-full border border-[#0B1B33]/15 flex items-center justify-center group-hover:border-[#E8752A] group-hover:bg-[#0B1B33] transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-[#0B1B33] group-hover:text-[#E8752A] transition-colors" />
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
