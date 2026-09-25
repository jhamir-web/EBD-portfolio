import React, { useState } from 'react';
import { Home, FolderOpen, Info, Layers, Mail } from 'lucide-react';

const TABS = [
  { id: 'home',     label: 'Home',     Icon: Home },
  { id: 'projects', label: 'Projects',  Icon: FolderOpen },
  { id: 'about',    label: 'About',     Icon: Info },
  { id: 'services', label: 'Services',  Icon: Layers },
  { id: 'contact',  label: 'Contact',   Icon: Mail },
];

export default function MobileBottomNav({ activePage, onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B1B33]/95 backdrop-blur-xl border-t border-white/10 safe-area-pb">
      <div className="flex items-stretch h-16">
        {TABS.map(({ id, label, Icon }) => {
          const isActive = activePage === id;
          return (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all duration-200 relative ${
                isActive ? 'text-[#E8752A]' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#E8752A] rounded-b-full" />
              )}
              <Icon className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-[9px] font-mono uppercase tracking-wider leading-none transition-all duration-200 ${
                isActive ? 'font-bold' : 'font-normal'
              }`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
