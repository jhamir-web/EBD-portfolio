import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../data/projectsData';
import { Filter, Layers, SlidersHorizontal } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = [
    { label: 'ALL WORKS (06)', value: 'ALL' },
    { label: 'RENOVATION & BUILD (03)', value: 'BUILD' },
    { label: 'ARCHITECTURAL DESIGN (03)', value: 'DESIGN' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'BUILD') return p.category.includes('Build') || p.category.includes('Extension');
    if (activeFilter === 'DESIGN') return p.category.includes('Design');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      {/* Editorial Section Anchor Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#0B1B33]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-2">
              <span className="w-2 h-[2px] bg-[#E8752A]"></span>
              01 / SELECTED PROJECTS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B1B33]">
              PORTFOLIO ARCHIVE.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#0B1B33]/70 max-w-lg font-light">
              A curated catalog of built environments, structural renovations, and architectural designs across Luzon and Mindanao.
            </p>
          </div>

          {/* Filter Navigation */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                  activeFilter === cat.value
                    ? 'bg-[#0B1B33] text-white border-[#0B1B33]'
                    : 'bg-white text-[#0B1B33]/70 border-[#0B1B33]/15 hover:border-[#0B1B33] hover:text-[#0B1B33]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            // Give 01 and 04 an expansive editorial presentation if in "ALL" view
            const isExpansive = activeFilter === 'ALL' && (project.id === '01' || project.id === '04');
            return (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectProject}
                layoutType={isExpansive ? 'large' : 'standard'}
              />
            );
          })}
        </div>

        {/* Technical Portfolio Footnote */}
        <div className="mt-14 p-6 bg-white border border-[#0B1B33]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#0B1B33]/70">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E8752A]"></span>
            <span>All entries reflect genuine project scopes, client site coordinates, and verified contract parameters.</span>
          </div>
          <div className="uppercase tracking-widest text-[10px] text-[#0B1B33]/50">
            TOTAL CATALOG: 06 ENTRIES
          </div>
        </div>
      </div>
    </section>
  );
}
