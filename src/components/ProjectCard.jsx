import React from 'react';
import { ArrowUpRight, Compass, Ruler } from 'lucide-react';

export default function ProjectCard({ project, onSelect, layoutType = 'standard' }) {
  const isLarge = layoutType === 'large';

  return (
    <article
      onClick={() => onSelect(project)}
      className={`group cursor-pointer relative bg-white border border-[#0B1B33]/15 flex flex-col justify-between transition-all duration-300 hover:border-[#0B1B33] hover:shadow-[0_16px_36px_rgba(11,27,51,0.08)] ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      {/* Top Header: Technical Project Number & Category */}
      <div className="p-4 sm:p-5 pb-3 flex items-center justify-between border-b border-[#0B1B33]/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          {/* Project Number with Subtle Shift on Hover */}
          <span className="text-[#0B1B33] font-bold text-sm tracking-wider transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[#E8752A]">
            PROJ {project.num}
          </span>
          <span className="text-[#0B1B33]/30">/</span>
          <span className="text-[11px] uppercase tracking-wider text-[#0B1B33]/60">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#0B1B33]/50 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8752A]/80"></span>
          <span>DOCUMENTED</span>
        </div>
      </div>

      {/* Main Image Area with Zoom & Reveal */}
      <div className={`relative overflow-hidden bg-[#101F36] ${isLarge ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'}`}>
        <img
          src={project.renderImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle Architectural Blueprint Corner Marker */}
        <div className="absolute top-3 left-3 bg-[#0B1B33]/85 text-white/90 text-[10px] font-mono px-2 py-0.5 border border-white/20 uppercase tracking-wider backdrop-blur-xs">
          FIG. {project.num}
        </div>

        {/* Hover Blueprint Quick-Peek badge */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#0B1B33] text-[10px] font-mono px-2 py-1 uppercase tracking-wider shadow-sm flex items-center gap-1">
          <Ruler className="w-3 h-3 text-[#E8752A]" />
          <span>Plans Available</span>
        </div>
      </div>

      {/* Content & Metadata Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtle Orange Accent Line on hover */}
          <div className="w-0 h-[2px] bg-[#E8752A] transition-all duration-300 group-hover:w-16 mb-3"></div>

          {/* Project Title with Subtle Translation */}
          <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#0B1B33] leading-snug transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>

          {/* Location */}
          <p className="mt-2 text-xs sm:text-sm font-normal text-[#0B1B33]/70 flex items-center gap-1.5">
            <span className="font-mono text-[10px] text-[#E8752A] uppercase">LOC:</span>
            <span>{project.location}</span>
          </p>
        </div>

        {/* Bottom Metrics & View Action */}
        <div className="mt-6 pt-4 border-t border-[#0B1B33]/10 flex items-end justify-between">
          <div className="space-y-1">
            {project.duration && (
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]/60">
                <span className="text-[#0B1B33]/40">DURATION: </span>
                <span className="font-semibold text-[#0B1B33]">{project.duration}</span>
              </div>
            )}
            <div className="text-xs font-mono uppercase tracking-wider">
              <span className="text-[#0B1B33]/40">
                {project.cost.includes('Fee') ? 'DESIGN FEE: ' : 'PROJECT COST: '}
              </span>
              <span className="font-bold text-[#0B1B33] text-sm">
                {project.fee ? project.fee : project.cost}
              </span>
            </div>
          </div>

          {/* CTA — bordered button style */}
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#0B1B33] border border-[#0B1B33]/30 px-3 py-1.5 group-hover:border-[#E8752A] group-hover:bg-[#E8752A]/8 group-hover:text-[#E8752A] transition-all duration-300">
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E8752A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </article>
  );
}
