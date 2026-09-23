import React from 'react';
import { ArrowUp, Mail, MapPin, Phone, Heart, Sparkles, ExternalLink, FileText } from 'lucide-react';
import { NavRoute, Language } from '../types';
import { PERSONAL_INFO, UI_STRINGS } from '../data/content';

interface FooterProps {
  onNavigate: (route: NavRoute) => void;
  lang: Language;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FAF9F2] border-t border-[#335C33]/20 pt-12 pb-8 text-[#2C2E2B] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#335C33]/15">
          {/* Col 1: Monogram & Vision */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#335C33] text-[#F6F6EE] flex items-center justify-center font-serif font-bold text-base shadow-xs">
                QC
              </div>
              <div>
                <span className="font-serif font-extrabold text-base sm:text-lg text-[#335C33] tracking-tight block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-semibold text-[#8C5A35]">
                  {lang === 'en' ? 'Quantitative Economics • Data Science • Circular Value Chains' : 'Kinh Tế Học Định Lượng • Khoa Học Dữ Liệu • Chuỗi Giá Trị Tuần Hoàn'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#2C2E2B]/80 max-w-lg leading-relaxed pt-1">
              {lang === 'en'
                ? '"To protect what I love, I need empirical tools. Economics provides systems-thinking, while Data Science transforms invisible assets into measurable, equitable impact."'
                : '"Để bảo vệ những gì mình trân quý, tôi cần những công cụ thực nghiệm. Kinh tế học trao cho tôi tư duy hệ thống, còn Khoa học Dữ liệu chuyển hoá tài sản vô hình thành tác động đo lường được."'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="section-badge">
                <Sparkles className="w-3 h-3 text-[#8C5A35]" />
                <span>VNU-HCM High School for the Gifted</span>
              </span>
              <span className="section-badge bg-[#FAF9F2] border-[#335C33]/20 text-[#8C5A35]">
                <span>Dak Lak, Vietnam</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#335C33] font-serif">
              {lang === 'en' ? 'Quick Navigation' : 'Điều Hướng Nhanh'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#2C2E2B]/80 hover:text-[#335C33] transition-colors cursor-pointer"
                >
                  {UI_STRINGS.nav.home[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('research')}
                  className="text-[#2C2E2B]/80 hover:text-[#335C33] transition-colors cursor-pointer"
                >
                  {UI_STRINGS.nav.research[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impact')}
                  className="text-[#2C2E2B]/80 hover:text-[#335C33] transition-colors cursor-pointer"
                >
                  {UI_STRINGS.nav.impact[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('profile')}
                  className="text-[#2C2E2B]/80 hover:text-[#335C33] transition-colors cursor-pointer"
                >
                  {UI_STRINGS.nav.profile[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#2C2E2B]/80 hover:text-[#335C33] transition-colors cursor-pointer"
                >
                  {UI_STRINGS.nav.contact[lang]}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="text-[#8C5A35] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{UI_STRINGS.nav.resumeButton[lang]}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#335C33] font-serif">
              {lang === 'en' ? 'Admissions Inquiries' : 'Thông Tin Liên Hệ'}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#2C2E2B]/80">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#335C33] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8C5A35] shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 hover:text-[#335C33] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8C5A35] shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8C5A35] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#335C33] font-semibold hover:underline pt-1"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-[#8C5A35]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#2C2E2B]/60">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed following</span>
            <span className="font-bold text-[#335C33]">CAFLOOP Design System</span>
          </div>

          <div className="flex items-center gap-4">
            <span>{lang === 'en' ? 'Lining & Tabular Numerals Active' : 'Chỉ số hiển thị Tabular Numerals'}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
