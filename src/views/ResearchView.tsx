import React from 'react';
import {
  Sparkles,
  BarChart2,
  BookOpen,
  Target,
  ArrowRight,
  Award,
  Database,
  TrendingUp,
  FileCheck2,
  Cpu,
} from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { RESEARCH_PROJECTS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';
import { FolderTabGraphic } from '../components/FolderTabGraphic';

interface ResearchViewProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ResearchView: React.FC<ResearchViewProps> = ({ lang, onSelectProject }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 relative">
      {/* Decorative Corner Tab */}
      <div className="hidden lg:block absolute top-6 right-8 opacity-80 pointer-events-none">
        <FolderTabGraphic size="lg" rotate={8} variant="matcha" label="RESEARCH DOSSIER" />
      </div>

      {/* Header Section (Canva Slide 3 & 4 Theme) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
          <BarChart2 className="w-3.5 h-3.5 text-[#2B4E2B]" />
          <span>{lang === 'en' ? 'DOSSIER • ACADEMIC INQUIRY' : 'HỒ SƠ • NGHIÊN CỨU HỌC THUẬT'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
          <span className="text-gradient-forest">{lang === 'en' ? 'RESEARCH' : 'NGHIÊN CỨU'}</span>{' '}
          <span className="text-[#2C2E2B]">{lang === 'en' ? '& ENTERPRISE' : '& KHỞI NGHIỆP'}</span>
        </h1>

        <p className="text-sm sm:text-base text-[#8C5A35] font-serif max-w-2xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'Bridging empirical data science and economic modeling to drive circular bio-economy systems and expose structural market gaps.'
            : 'Giao thoa giữa khoa học dữ liệu thực nghiệm và mô hình kinh tế học để thúc đẩy hệ sinh thái tuần hoàn và giải quyết các bài toán cơ cấu.'}
        </p>
      </div>

      {/* Research Case Studies (Canva Slide 4 & 5 Layout: Left Title/Visual + Right 3 Pill Cards) */}
      <div className="space-y-16">
        {RESEARCH_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="canva-dossier-card p-6 sm:p-10 border-2 border-[#B7CCA0] relative"
          >
            {/* Top Project Tag Badge */}
            <div className="absolute -top-3.5 left-8 flex items-center gap-2">
              <span className="canva-pill-tab text-xs uppercase tracking-wider">
                {project.badge[lang]}
              </span>
              <span className="hidden sm:inline-flex px-3 py-0.5 rounded-full bg-white text-[#8C5A35] text-[11px] font-bold border border-[#B7CCA0]">
                {project.period}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-3">
              {/* Left Column (Canva Slide 4 Left): Title, Role, Visual Asset, Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5A35] font-display block mb-1">
                    {project.role[lang]}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-[#2B4E2B] uppercase tracking-tight leading-tight">
                    {project.title[lang]}
                  </h2>
                </div>

                {/* Visual Asset Box */}
                <div className="rounded-2xl overflow-hidden border border-[#B7CCA0] bg-[#FAF9F2] p-3 shadow-xs">
                  <VisualArtAsset
                    type={project.imageType}
                    className="h-44 sm:h-48 w-full"
                    caption={project.title[lang]}
                  />
                </div>

                {/* 3 Metric Mini Cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {project.keyMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-white/80 p-2.5 rounded-2xl border border-[#B7CCA0]/60 text-center shadow-xs"
                    >
                      <div className="text-base sm:text-lg font-black text-[#2B4E2B] font-display tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-bold text-[#8C5A35] leading-tight mt-0.5">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Deep Dive Action Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 px-6 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-xs sm:text-sm font-display hover:bg-[#1E371E] transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>{lang === 'en' ? 'Open Full Research Dossier' : 'Mở Hồ Sơ Nghiên Cứu Chi Tiết'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E3EDD3] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column (Canva Slide 4 Right): 3 Distinct Pill Cards */}
              <div className="lg:col-span-7 space-y-6">
                {/* Pill Card 1: Context & Core Problem */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Objective & Empirical Context' : 'Mục Tiêu & Bối Cảnh Thực Chứng'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                    {project.details.description[0] ? project.details.description[0][lang] : project.summary[lang]}
                  </p>
                </div>

                {/* Pill Card 2: Methodological Approach & Tools */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Analytical Methodology & Modeling' : 'Phương Pháp Phân Tích & Mô Hình'}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                      {project.details.description[1] ? project.details.description[1][lang] : project.summary[lang]}
                    </p>

                    {/* Publication or Award Banner */}
                    {project.details.publication && (
                      <div className="bg-[#E3EDD3]/60 border border-[#B7CCA0] rounded-xl p-3 flex items-start gap-2.5">
                        <BookOpen className="w-4 h-4 text-[#2B4E2B] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#2C2E2B] italic">
                          <strong className="text-[#2B4E2B] not-italic mr-1">Publication:</strong>
                          {project.details.publication}
                        </p>
                      </div>
                    )}

                    {project.details.award && (
                      <div className="bg-[#FAF9F2] border border-[#8C5A35]/30 rounded-xl p-3 flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-[#8C5A35] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#2B4E2B] font-bold">
                          {project.details.award[lang]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Pill Card 3: Measured Impact & Policy Implications */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Measured Impact & Real-World Utility' : 'Tác Động Thực Tế & Giá Trị Ứng Dụng'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                    {project.details.outcomes && project.details.outcomes[0]
                      ? project.details.outcomes[0][lang]
                      : (project.details.description[2] ? project.details.description[2][lang] : project.summary[lang])}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
