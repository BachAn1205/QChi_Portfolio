import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Globe, Sparkles } from 'lucide-react';
import { NavRoute, Language } from '../types';
import { UI_STRINGS, PERSONAL_INFO } from '../data/content';

interface NavbarProps {
  currentRoute: NavRoute;
  onNavigate: (route: NavRoute) => void;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  lang,
  onToggleLang,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { route: NavRoute; label: { en: string; vi: string } }[] = [
    { route: 'home', label: UI_STRINGS.nav.home },
    { route: 'research', label: UI_STRINGS.nav.research },
    { route: 'impact', label: UI_STRINGS.nav.impact },
    { route: 'profile', label: UI_STRINGS.nav.profile },
    { route: 'contact', label: UI_STRINGS.nav.contact },
  ];

  const handleNavClick = (route: NavRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6F6EE]/92 backdrop-blur-md shadow-xs border-b border-[#335C33]/15 py-2.5 sm:py-3'
          : 'bg-[#F6F6EE] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#335C33] text-[#F6F6EE] flex items-center justify-center font-serif font-bold text-sm sm:text-base shadow-xs group-hover:bg-[#284828] transition-colors">
            QC
          </div>
          <div>
            <span className="font-serif font-extrabold text-sm sm:text-base text-[#335C33] tracking-tight block leading-snug group-hover:text-[#284828] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#8C5A35] tracking-wider uppercase block">
              {lang === 'en' ? 'Portfolio 2026' : 'Hồ Sơ Tuyển Sinh 2026'}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links - Folder Tab Dock */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#FAF9F2] p-1.5 rounded-full border border-[#B7CCA0] shadow-[0_2px_10px_rgba(43,78,43,0.05)]">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`px-4 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 cursor-pointer font-display ${
                  isActive
                    ? 'bg-[#2B4E2B] text-[#F6F6EE] shadow-sm transform scale-[1.02]'
                    : 'text-[#2C2E2B]/80 hover:text-[#2B4E2B] hover:bg-[#E3EDD3]/60'
                }`}
              >
                {item.label[lang]}
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Language Switcher Pill + Resume Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Pill */}
          <div className="inline-flex items-center p-0.5 rounded-full bg-[#E3EDD3] border border-[#B7CCA0] shadow-xs">
            <button
              onClick={() => onToggleLang('en')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer font-display ${
                lang === 'en'
                  ? 'bg-[#2B4E2B] text-[#F6F6EE] shadow-xs'
                  : 'text-[#2B4E2B] hover:bg-[#F6F6EE]/60'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onToggleLang('vi')}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer font-display ${
                lang === 'vi'
                  ? 'bg-[#2B4E2B] text-[#F6F6EE] shadow-xs'
                  : 'text-[#2B4E2B] hover:bg-[#F6F6EE]/60'
              }`}
            >
              VI
            </button>
          </div>

          {/* Academic Resume Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B4E2B] text-[#F6F6EE] hover:bg-[#1E371E] transition-all duration-200 shadow-sm text-xs sm:text-sm font-bold font-display cursor-pointer hover:shadow-md hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-[#E3EDD3]" />
            <span>{UI_STRINGS.nav.resumeButton[lang]}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/20 hover:bg-[#E3EDD3] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F6EE] border-b border-[#335C33]/20 px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#335C33] text-[#F6F6EE]'
                    : 'text-[#2C2E2B] bg-[#FAF9F2] hover:bg-[#E3EDD3]'
                }`}
              >
                <span>{item.label[lang]}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-[#E3EDD3]" />}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#335C33] text-[#F6F6EE] text-sm font-bold shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#E3EDD3]" />
              <span>{UI_STRINGS.nav.resumeButton[lang]}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
