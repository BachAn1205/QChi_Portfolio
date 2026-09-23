import React, { useState, useEffect } from 'react';
import { NavRoute, Language, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { HomeView } from './views/HomeView';
import { ResearchView } from './views/ResearchView';
import { ImpactView } from './views/ImpactView';
import { ProfileView } from './views/ProfileView';
import { ContactView } from './views/ContactView';

export default function App() {
  // Default to English as specified for international admissions committee
  const [lang, setLang] = useState<Language>('en');
  const [currentRoute, setCurrentRoute] = useState<NavRoute>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Sync route with URL hash for true multi-page SPA experience
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['research', 'impact', 'profile', 'contact'].includes(hash)) {
        setCurrentRoute(hash as NavRoute);
      } else {
        setCurrentRoute('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: NavRoute) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '#/' : `#/${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6EE] text-[#2C2E2B] selection:bg-[#E3EDD3] selection:text-[#335C33]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main View Display */}
      <main className="flex-1 w-full">
        {currentRoute === 'home' && (
          <HomeView
            lang={lang}
            onNavigate={handleNavigate}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentRoute === 'research' && (
          <ResearchView
            lang={lang}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentRoute === 'impact' && (
          <ImpactView
            lang={lang}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentRoute === 'profile' && (
          <ProfileView
            lang={lang}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactView
            lang={lang}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}
      </main>

      {/* Standard Footer */}
      <Footer
        onNavigate={handleNavigate}
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Full Academic Resume / CV Modal with Print Support */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}

