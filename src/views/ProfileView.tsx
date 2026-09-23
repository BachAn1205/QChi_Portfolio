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
  Printer,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { Language, AccordionGroup } from '../types';
import { PROFILE_ACCORDIONS, PERSONAL_INFO } from '../data/content';

interface ProfileViewProps {
  lang: Language;
  onOpenResume: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ lang, onOpenResume }) => {
  // All open by default so admissions officers can quickly scan
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
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#335C33]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#335C33]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#335C33]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#335C33]" />,
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="section-badge">
          <Trophy className="w-3.5 h-3.5 text-[#335C33]" />
          <span>{lang === 'en' ? 'THE COMPETITOR • VERIFIED PROFILE' : 'BẢN LĨNH • HỒ SƠ NĂNG LỰC TOÀN DIỆN'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#335C33] font-serif tracking-tight">
          {lang === 'en' ? 'Global Excellence & Academic Profile' : 'Thành Tích Học Thuật & Năng Lực Cạnh Tranh'}
        </h1>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'A rigorous track record of excellence across quantitative academics, business strategy, public policy, and traditional arts.'
            : 'Hồ sơ thành tích được kiểm chứng qua các kỳ thi học thuật, đấu trường giải case quốc tế, tranh biện và nghệ thuật.'}
        </p>

        {/* Top Resume PDF Action Banner */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#335C33] text-[#F6F6EE] font-bold text-sm shadow-md hover:bg-[#284828] active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#E3EDD3]" />
            <span>{lang === 'en' ? 'Download Full Resume (PDF)' : 'Tải / Xem Hồ Sơ Đầy Đủ (PDF)'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/20 hover:bg-[#E3EDD3] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Expand All' : 'Mở tất cả'}
            </button>
            <button
              onClick={collapseAll}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FAF9F2] text-[#8C5A35] border border-[#335C33]/20 hover:bg-[#E3EDD3] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Collapse All' : 'Thu gọn'}
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Categories */}
      <div className="space-y-6">
        {PROFILE_ACCORDIONS.map((group) => {
          const isOpen = openSections[group.id];
          return (
            <div
              key={group.id}
              className="bg-[#FAF9F2] rounded-3xl border border-[#335C33]/20 shadow-xs overflow-hidden transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSection(group.id)}
                className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left hover:bg-[#F6F6EE]/60 transition-colors cursor-pointer focus:outline-none"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center shadow-xs">
                    {iconMap[group.icon] || <Award className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#335C33] font-serif">
                      {group.title[lang]}
                    </h2>
                    <span className="text-xs font-semibold text-[#8C5A35]">
                      {group.items.length} {lang === 'en' ? 'Verified Entries' : 'Hạng mục xác thực'}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#E3EDD3] text-[#335C33] flex items-center justify-center">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 space-y-6 border-t border-[#335C33]/15">
                  {group.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F6F6EE] rounded-2xl p-4 sm:p-5 border border-[#335C33]/15 space-y-2.5 shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-sm sm:text-base font-extrabold text-[#335C33]">
                            {item.title[lang]}
                          </h3>
                          {item.badge && (
                            <span className="text-[10px] font-bold text-[#8C5A35] bg-[#E3EDD3] px-2.5 py-0.5 rounded-full">
                              {item.badge[lang]}
                            </span>
                          )}
                        </div>

                        {item.date && (
                          <span className="text-xs font-bold text-[#8C5A35] shrink-0">
                            {item.date}
                          </span>
                        )}
                      </div>

                      {item.subtitle && (
                        <p className="text-xs sm:text-sm font-semibold text-[#8C5A35] italic">
                          {item.subtitle[lang]}
                        </p>
                      )}

                      <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C2E2B]/85 pl-1 leading-relaxed">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#335C33] mt-2 shrink-0" />
                            <span>{point[lang]}</span>
                          </li>
                        ))}
                      </ul>
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
