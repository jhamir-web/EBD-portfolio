import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { PROJECTS_DATA } from '../data/projectsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const categories = [
    { label: 'ALL (06)', value: 'ALL' },
    { label: 'BUILD (03)', value: 'BUILD' },
    { label: 'DESIGN (03)', value: 'DESIGN' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'BUILD') return p.category.includes('Build') || p.category.includes('Extension');
    if (activeFilter === 'DESIGN') return p.category.includes('Design');
    return true;
  });

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth'
    });
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const cardWidth = carouselRef.current.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setCurrentSlideIndex(Math.min(Math.max(index, 0), filteredProjects.length - 1));
  };

  return (
    <section id="projects" className="py-14 sm:py-24 bg-[#F7F7F5] relative border-b border-[#0B1B33]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#0B1B33]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#E8752A] mb-2">
              <span className="w-2 h-[2px] bg-[#E8752A]"></span>
              01 / SELECTED PROJECTS
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B1B33]">
              PORTFOLIO ARCHIVE.
            </h2>
            <p className="mt-2 text-xs sm:text-base text-[#0B1B33]/70 max-w-lg font-light">
              A curated catalog of built environments, structural renovations, and architectural designs across Luzon and Mindanao.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveFilter(cat.value);
                  setCurrentSlideIndex(0);
                  if (carouselRef.current) carouselRef.current.scrollTo({ left: 0 });
                }}
                className={`px-3 py-1.5 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
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

        {/* ── MOBILE: Swipe carousel only ── */}
        <div className="md:hidden mt-8">
          {/* Carousel Track
              touch-action is NOT set here so the browser default logic applies:
              a predominantly-vertical swipe scrolls the page normally,
              a predominantly-horizontal swipe moves the carousel. */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 no-scrollbar overscroll-x-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="w-[85vw] max-w-[340px] shrink-0 snap-center"
              >
                <ProjectCard
                  project={project}
                  onSelect={onSelectProject}
                  layoutType="standard"
                />
              </div>
            ))}
          </div>

          {/* Pagination & nav buttons */}
          <div className="mt-4 pt-4 border-t border-[#0B1B33]/10 flex items-center justify-between">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#0B1B33]">
              <span className="text-[#E8752A] font-bold">
                {String(currentSlideIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-[#0B1B33]/40"> / </span>
              <span>{String(filteredProjects.length).padStart(2, '0')}</span>
              <span className="text-[#0B1B33]/40 text-[10px] ml-2">SWIPE ↔</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('prev')}
                className="w-8 h-8 flex items-center justify-center bg-white border border-[#0B1B33]/20 text-[#0B1B33] active:bg-[#0B1B33] active:text-white transition-colors"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCarousel('next')}
                className="w-8 h-8 flex items-center justify-center bg-white border border-[#0B1B33]/20 text-[#0B1B33] active:bg-[#0B1B33] active:text-white transition-colors"
                aria-label="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: Full editorial masonry grid ── */}
        <div className="hidden md:grid mt-12 grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
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
        <div className="mt-10 sm:mt-14 p-5 sm:p-6 bg-white border border-[#0B1B33]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#0B1B33]/70">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#E8752A] shrink-0"></span>
            <span>All entries reflect genuine project scopes, client site coordinates, and verified contract parameters.</span>
          </div>
          <div className="uppercase tracking-widest text-[10px] text-[#0B1B33]/50 shrink-0">
            TOTAL CATALOG: 06 ENTRIES
          </div>
        </div>
      </div>
    </section>
  );
}
