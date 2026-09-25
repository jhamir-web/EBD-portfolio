import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MapPin, Calendar, DollarSign, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onInquire }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || { url: project.renderImage, caption: 'Project Perspective' };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-8 bg-[#0B1B33]/85 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full h-full sm:h-auto sm:max-h-[92vh] max-w-6xl bg-[#F7F7F5] border border-[#0B1B33]/20 shadow-2xl flex flex-col overflow-hidden">

        {/* Sticky Top Control Bar */}
        <div className="sticky top-0 z-30 px-4 sm:px-6 py-3.5 bg-white/98 backdrop-blur-md border-b border-[#0B1B33]/15 flex items-center justify-between gap-3 shadow-xs">
          {/* Project Title & Badge */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-[#E8752A] bg-[#0B1B33] text-white px-2 py-0.5 shrink-0">
              PROJ {project.num}
            </span>
            <span className="font-display font-bold uppercase tracking-tight text-xs sm:text-sm text-[#0B1B33] truncate">
              {project.title}
            </span>
          </div>

          {/* Single Sleek Close Button */}
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center bg-[#0B1B33] text-white hover:bg-[#101F36] border border-[#0B1B33] hover:border-[#E8752A] transition-colors focus:outline-none shrink-0"
            aria-label="Close Presentation"
          >
            <X className="w-4 h-4 text-[#E8752A]" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Main Visual Display Area (Permanently Expanded for clarity) */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="relative bg-[#101F36] border border-[#0B1B33]/15 overflow-hidden flex items-center justify-center min-h-[380px] sm:min-h-[500px] lg:min-h-[540px]">
              <img
                src={currentImage.url}
                alt={currentImage.caption}
                className="max-h-full max-w-full object-contain"
              />

              {/* Technical Caption Pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#0B1B33]/90 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1.5 border-l-2 border-[#E8752A] truncate">
                {currentImage.caption}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative p-1 border transition-all duration-200 ${activeImageIndex === idx
                      ? 'border-[#E8752A] ring-1 ring-[#E8752A] bg-white'
                      : 'border-[#0B1B33]/15 bg-white/50 hover:border-[#0B1B33]/40'
                    }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-14 h-11 sm:w-20 sm:h-14 object-cover"
                  />
                  <span className="block text-[9px] font-mono text-center text-[#0B1B33]/70 truncate max-w-[70px] sm:max-w-[80px]">
                    View {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Architectural Specification Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8752A]">
                  // ARCHITECTURAL DOSSIER
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0B1B33] mt-1 leading-tight">
                  {project.title}
                </h2>
              </div>

              {/* Data Table */}
              <div className="border-t border-b border-[#0B1B33]/10 divide-y divide-[#0B1B33]/10 text-xs font-mono">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between gap-4">
                    <span className="text-[#0B1B33]/50 uppercase tracking-wider">{detail.label}</span>
                    <span className="font-medium text-[#0B1B33] text-right font-sans">{detail.value}</span>
                  </div>
                ))}
              </div>

              {/* Verified Project Scope */}
              <div className="bg-white p-4 border border-[#0B1B33]/10 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#0B1B33]/60">
                  Project Documentation Status
                </div>
                <p className="text-xs text-[#0B1B33]/80 leading-relaxed font-light">
                  This portfolio entry contains verified design and build documentation managed by E Design & Build. Complete architectural plans, elevations, and structural schematics are on file.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#0B1B33]/10 space-y-3">
              <button
                onClick={() => {
                  onClose();
                  if (onInquire) onInquire(project.title);
                }}
                className="w-full py-3.5 px-6 bg-[#0B1B33] text-white hover:bg-[#101F36] uppercase text-xs tracking-[0.2em] font-semibold flex items-center justify-center gap-2 border border-[#0B1B33] hover:border-[#E8752A] transition-all group"
              >
                <span>Start a Similar Project</span>
                <ArrowRight className="w-4 h-4 text-[#E8752A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
