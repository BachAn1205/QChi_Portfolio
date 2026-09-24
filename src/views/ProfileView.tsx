import React, { useState } from 'react';
import {
  Sparkles,
  Trophy,
  GraduationCap,
  Award,
  Terminal,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart2,
  Code2,
} from 'lucide-react';
import { Language, AccordionGroup } from '../types';
import { PROFILE_ACCORDIONS, PERSONAL_INFO } from '../data/content';
import { FolderTabGraphic } from '../components/FolderTabGraphic';

interface ProfileViewProps {
  lang: Language;
  onOpenResume: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ lang, onOpenResume }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'academic-profile': true,
    'economics-olympiads': true,
    'debate-arts-mun': true,
    'technical-skills': true,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    setOpenSections({
      'academic-profile': true,
      'economics-olympiads': true,
      'debate-arts-mun': true,
      'technical-skills': true,
    });
  };

  const collapseAll = () => {
    setOpenSections({
      'academic-profile': false,
      'economics-olympiads': false,
      'debate-arts-mun': false,
      'technical-skills': false,
    });
  };

  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#2B4E2B]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#2B4E2B]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#2B4E2B]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#2B4E2B]" />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16 relative">
      {/* Decorative Corner Tab */}
      <div className="hidden lg:block absolute top-6 right-6 opacity-80 pointer-events-none">
        <FolderTabGraphic size="lg" rotate={10} variant="forest" label="CURRICULUM VITAE" />
      </div>

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
          <Trophy className="w-3.5 h-3.5 text-[#2B4E2B]" />
          <span>{lang === 'en' ? 'DOSSIER • ACADEMIC HONORS & CURRICULUM' : 'HỒ SƠ • THÀNH TÍCH HỌC THUẬT & CV'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
          <span className="text-gradient-forest">{lang === 'en' ? 'ACADEMIC' : 'HỒ SƠ'}</span>{' '}
          <span className="text-[#2C2E2B]">{lang === 'en' ? 'HONORS & CV' : 'NĂNG LỰC'}</span>
        </h1>

        <p className="text-sm sm:text-base text-[#8C5A35] font-serif max-w-2xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'A rigorous, verified track record across quantitative economics, national olympiads, international debate, and technical data tools.'
            : 'Hồ sơ năng lực được chứng thực qua các kỳ thi học sinh giỏi, giải case quốc tế, tranh biện và công cụ khoa học dữ liệu.'}
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-sm font-display hover:bg-[#1E371E] shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-[#E3EDD3]" />
            <span>{lang === 'en' ? 'Open Interactive Resume (PDF)' : 'Xem / Tải Toàn Bộ CV (PDF)'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-white text-[#2B4E2B] border border-[#B7CCA0] hover:bg-[#E3EDD3] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Expand All' : 'Mở tất cả'}
            </button>
            <button
              onClick={collapseAll}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold font-display bg-white text-[#2C2E2B]/70 border border-[#B7CCA0] hover:bg-[#E3EDD3] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Collapse All' : 'Thu gọn'}
            </button>
          </div>
        </div>
      </div>

      {/* Top 3 Quick Highlight Dossier Cards (Canva Slide 2 / 8 Inspiration) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="canva-dossier-card p-6 pt-7 relative bg-white/90">
          <div className="absolute -top-3 left-6">
            <span className="canva-pill-tab text-xs">
              {lang === 'en' ? 'Institution & Rigor' : 'Trường & Học Vị'}
            </span>
          </div>
          <h3 className="font-bold text-sm text-[#2B4E2B] font-display mb-1">
            {lang === 'en' ? 'VNU-HCM High School for the Gifted' : 'THPT Chuyên Năng Khiếu - ĐHQG-HCM'}
          </h3>
          <p className="text-xs text-[#2C2E2B]/80 leading-relaxed">
            {lang === 'en' ? 'Specialized Economics & Social Science cohort. GPA: 9.9/10 (Top 1%).' : 'Lớp chuyên Kinh tế - Xã hội. Điểm TB: 9.9/10 (Top 1% toàn khối).'}
          </p>
        </div>

        <div className="canva-dossier-card p-6 pt-7 relative bg-white/90">
          <div className="absolute -top-3 left-6">
            <span className="canva-pill-tab text-xs">
              {lang === 'en' ? 'Olympiad & Strategy' : 'Học Sinh Giỏi & Tranh Biện'}
            </span>
          </div>
          <h3 className="font-bold text-sm text-[#2B4E2B] font-display mb-1">
            {lang === 'en' ? 'National Economics & Case Comp' : 'Kỳ Thi Kinh Tế Quốc Gia & Case'}
          </h3>
          <p className="text-xs text-[#2C2E2B]/80 leading-relaxed">
            {lang === 'en' ? 'First Prize National Olympiad, Best Speaker, Top Global Case Solutions.' : 'Giải Nhất HSG Quốc Gia, Diễn giả xuất sắc nhất, Quán quân giải Case thương mại.'}
          </p>
        </div>

        <div className="canva-dossier-card p-6 pt-7 relative bg-white/90">
          <div className="absolute -top-3 left-6">
            <span className="canva-pill-tab text-xs">
              {lang === 'en' ? 'Data Tools & Modeling' : 'Khoa Học Dữ Liệu & Công Cụ'}
            </span>
          </div>
          <h3 className="font-bold text-sm text-[#2B4E2B] font-display mb-1">
            Python, R, Stata & LaTeX
          </h3>
          <p className="text-xs text-[#2C2E2B]/80 leading-relaxed">
            {lang === 'en' ? 'Multivariate regression, spatial GIS mapping, time-series econometric forecasting.' : 'Hồi quy đa biến, bản đồ không gian GIS, dự báo chuỗi thời gian kinh tế.'}
          </p>
        </div>
      </div>

      {/* Accordions Stack */}
      <div className="space-y-6">
        {PROFILE_ACCORDIONS.map((group) => {
          const isOpen = openSections[group.id];
          return (
            <div
              key={group.id}
              className="canva-dossier-card overflow-hidden border-2 border-[#B7CCA0]"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(group.id)}
                className="w-full p-5 sm:p-6 flex items-center justify-between bg-white/70 hover:bg-[#E3EDD3]/40 transition-colors text-left cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center border border-[#B7CCA0] shrink-0">
                    {iconMap[group.icon] || <Award className="w-5 h-5 text-[#2B4E2B]" />}
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-black font-display text-[#2B4E2B] uppercase tracking-tight">
                      {group.title[lang]}
                    </h2>
                    <span className="text-xs font-semibold text-[#8C5A35]">
                      {group.items.length} {lang === 'en' ? 'Verified Records' : 'Mục chứng thực'}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#FAF9F2] border border-[#B7CCA0] flex items-center justify-center text-[#2B4E2B]">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="p-5 sm:p-6 pt-2 border-t border-[#B7CCA0]/50 space-y-4 bg-white/40">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/90 border border-[#B7CCA0]/60 space-y-2.5 shadow-2xs hover:border-[#2B4E2B] transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#2B4E2B] shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-xs sm:text-sm font-bold text-[#2B4E2B]">
                              {item.title[lang]}
                            </h3>
                            {item.subtitle && (
                              <p className="text-[11px] font-semibold text-[#8C5A35]">
                                {item.subtitle[lang]}
                              </p>
                            )}
                          </div>
                        </div>
                        {item.date && (
                          <span className="text-[11px] font-bold text-[#8C5A35] bg-[#E3EDD3] px-2.5 py-0.5 rounded-full self-start sm:self-auto shrink-0 font-display">
                            {item.date}
                          </span>
                        )}
                      </div>

                      {item.points && item.points.length > 0 && (
                        <ul className="space-y-1 pl-6">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs text-[#2C2E2B]/85 leading-relaxed font-medium list-disc">
                              {pt[lang]}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.badge && (
                        <div className="pl-6 pt-1">
                          <span className="inline-block text-[10px] font-semibold text-[#2B4E2B] bg-[#FAF9F2] border border-[#B7CCA0] px-2 py-0.5 rounded-md">
                            {item.badge[lang]}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
