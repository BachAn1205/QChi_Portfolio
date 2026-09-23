import React from 'react';
import { Sparkles, BarChart2, BookOpen, Target, ExternalLink, ArrowRight, Award } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { RESEARCH_PROJECTS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';

interface ResearchViewProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ResearchView: React.FC<ResearchViewProps> = ({ lang, onSelectProject }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="section-badge">
          <BarChart2 className="w-3.5 h-3.5 text-[#335C33]" />
          <span>{lang === 'en' ? 'THE MIND • RESEARCH & ENTERPRISE' : 'TRÍ TUỆ • NGHIÊN CỨU & KHỞI NGHIỆP'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#335C33] font-serif tracking-tight">
          {lang === 'en' ? 'Quantitative Research & Enterprise' : 'Nghiên Cứu Định Lượng & Khởi Nghiệp'}
        </h1>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'Leveraging empirical data science and economic modeling to drive circular value chains and expose structural inequities.'
            : 'Ứng dụng khoa học dữ liệu thực nghiệm và mô hình kinh tế học để thúc đẩy chuỗi giá trị tuần hoàn và phơi bày các khoảng cách cơ cấu.'}
        </p>
      </div>

      {/* Projects Grid / Cards */}
      <div className="space-y-10 sm:space-y-14">
        {RESEARCH_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#335C33]/20 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="section-badge text-[11px]">
                    <Sparkles className="w-3 h-3 text-[#8C5A35]" />
                    <span>{project.badge[lang]}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#8C5A35] bg-[#F6F6EE] px-3 py-0.5 rounded-full border border-[#335C33]/15">
                    {project.period}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#335C33] font-serif tracking-tight mb-2">
                    {project.title[lang]}
                  </h2>
                  <p className="text-sm sm:text-base font-semibold text-[#8C5A35]">
                    {project.role[lang]}
                  </p>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-[#2C2E2B]/85 leading-relaxed">
                  {project.summary[lang]}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-2">
                  {project.keyMetrics.map((metric, i) => (
                    <div
                      key={i}
                      className="bg-[#F6F6EE] p-3 rounded-2xl border border-[#335C33]/15 text-center shadow-xs"
                    >
                      <div className="text-base sm:text-xl md:text-2xl font-extrabold text-[#335C33] font-serif tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-semibold text-[#8C5A35] mt-0.5 leading-tight">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Publication or Award Banner if present */}
                {project.details.publication && (
                  <div className="bg-[#E3EDD3]/60 border border-[#335C33]/20 rounded-2xl p-3.5 flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[#335C33] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#2C2E2B] italic">
                      <strong className="text-[#335C33] not-italic mr-1">Published:</strong>
                      {project.details.publication}
                    </p>
                  </div>
                )}

                {project.details.award && (
                  <div className="bg-[#FAF9F2] border border-[#8C5A35]/30 rounded-2xl p-3.5 flex items-start gap-3">
                    <Award className="w-4 h-4 text-[#8C5A35] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#335C33] font-bold">
                      {project.details.award[lang]}
                    </p>
                  </div>
                )}

                {/* Action trigger to open full detailed case */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#284828] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'View Full Methodology & In-Depth Analysis' : 'Xem Chi Tiết Phương Pháp & Dữ Liệu'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-[#2C2E2B]/70 bg-[#F6F6EE] px-2.5 py-0.5 rounded-full border border-[#335C33]/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual Graphic */}
              <div className="lg:col-span-4 w-full">
                <VisualArtAsset
                  type={project.imageType}
                  className="h-56 sm:h-64 w-full shadow-xs"
                  caption={
                    project.imageType === 'coffee'
                      ? 'CAFLOOP Cascara upcycling cycle'
                      : project.imageType === 'materials'
                      ? 'Computational crystal modeling (VESTA/DFT)'
                      : 'Empirical regression & econometric survey models'
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
