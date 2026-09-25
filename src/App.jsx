import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectDetailModal from './components/ProjectDetailModal';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PROJECTS_DATA } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactProjectPrefill, setContactProjectPrefill] = useState('');

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenProjectById = (id) => {
    const found = PROJECTS_DATA.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  const handleInquireFromModal = (projectTitle) => {
    setContactProjectPrefill(projectTitle);
    handleOpenContact();
  };

  const handleSelectService = (serviceTitle) => {
    setContactProjectPrefill(serviceTitle);
    handleOpenContact();
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#0B1B33] flex flex-col font-sans selection:bg-[#E8752A]/20 selection:text-[#0B1B33]">
      {/* Sticky Architectural Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onExploreClick={handleExploreClick}
          onOpenProject={handleOpenProjectById}
        />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <About />

        <Services onSelectService={handleSelectService} />

        <Process />

        <Contact prefilledProject={contactProjectPrefill} />
      </main>

      {/* Dark Navy Architectural Footer */}
      <Footer />

      {/* Detailed Project Monograph Presentation Modal */}
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
