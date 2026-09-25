import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetailModal from './components/ProjectDetailModal';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS_DATA } from './data/projectsData';

// Which desktop section IDs map to each mobile tab
const SECTION_MAP = {
  home:     null,          // Hero (no section id needed)
  projects: 'projects',
  about:    'about',
  services: 'services',
  contact:  'contact',
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactProjectPrefill, setContactProjectPrefill] = useState('');
  const [mobilePage, setMobilePage] = useState('home');

  /* ── Desktop helpers (scroll-based) ── */
  const handleOpenContact = () => {
    // On mobile → switch tab; on desktop → scroll
    if (window.innerWidth < 768) {
      setMobilePage('contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      setMobilePage('projects');
    } else {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectById = (id) => {
    const found = PROJECTS_DATA.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  const handleInquireFromModal = (projectTitle) => {
    setContactProjectPrefill(projectTitle);
    setSelectedProject(null);
    handleOpenContact();
  };

  const handleSelectService = (serviceTitle) => {
    setContactProjectPrefill(serviceTitle);
    handleOpenContact();
  };

  const handleMobileNav = (tabId) => {
    setMobilePage(tabId);
    // Scroll mobile page content to top when switching tabs
    window.scrollTo({ top: 0 });
  };

  /* ── Mobile page renderer ── */
  const MobilePage = () => {
    switch (mobilePage) {
      case 'home':
        return (
          <>
            <Hero onExploreClick={handleExploreClick} onOpenProject={handleOpenProjectById} />
          </>
        );
      case 'projects':
        return <Projects onSelectProject={(p) => setSelectedProject(p)} />;
      case 'about':
        return (
          <>
            <About />
            <Services onSelectService={handleSelectService} />
          </>
        );
      case 'services':
        return <Process />;
      case 'contact':
        return <Contact prefilledProject={contactProjectPrefill} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#0B1B33] flex flex-col font-sans selection:bg-[#E8752A]/20 selection:text-[#0B1B33]">

      {/* ── Navbar: always visible (hamburger removed on mobile since bottom nav replaces it) ── */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* ══════════════════════════════════════
          MOBILE LAYOUT  (< md)
          Each tab renders a single "page"
      ══════════════════════════════════════ */}
      <main className="flex-1 md:hidden pb-20">
        <MobilePage />
      </main>

      {/* ══════════════════════════════════════
          DESKTOP LAYOUT  (md+)
          Classic single-page scroll
      ══════════════════════════════════════ */}
      <main className="hidden md:block flex-1">
        <Hero onExploreClick={handleExploreClick} onOpenProject={handleOpenProjectById} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <About />
        <Services onSelectService={handleSelectService} />
        <Process />
        <Contact prefilledProject={contactProjectPrefill} />
      </main>

      {/* Footer: desktop only (mobile tabs replace it) */}
      <Footer className="hidden md:block" />

      {/* Mobile Bottom Nav */}
      <MobileBottomNav activePage={mobilePage} onNavigate={handleMobileNav} />

      {/* Project Modal (shared) */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </div>
  );
}
