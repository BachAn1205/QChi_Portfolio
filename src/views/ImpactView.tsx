import React from 'react';
import { Sparkles, Heart, ArrowRight, Music, Play, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { IMPACT_PROJECTS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';
import { AudioPlayerWidget } from '../components/AudioPlayerWidget';

interface ImpactViewProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ImpactView: React.FC<ImpactViewProps> = ({ lang, onSelectProject }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Page Header with subtle warmer atmospheric grounding */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="section-badge">
          <Heart className="w-3.5 h-3.5 text-[#8C5A35]" />
          <span>{lang === 'en' ? 'THE HEART • CULTURE, EMPATHY & ADVOCACY' : 'TRÁI TIM • VĂN HOÁ, THẤU CẢM & HÀNH ĐỘNG'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#335C33] font-serif tracking-tight">
          {lang === 'en' ? 'Culture, Empathy & Grassroots Advocacy' : 'Văn Hoá, Thấu Cảm & Tác Động Cộng Đồng'}
        </h1>
        <p className="section-subtitle">
          {lang === 'en'
            ? 'Reinvesting economic value and systemic attention back into the soil and soul of the Central Highlands.'
            : 'Tuần hoàn giá trị kinh tế và nguồn lực thực chất để bảo tồn bản sắc và nâng đỡ con người đại ngàn.'}
        </p>

        <div className="pt-2 flex justify-center">
          <AudioPlayerWidget lang={lang} />
        </div>
      </div>

      {/* Featured Video / Media Performance Showcase (as requested in prompt) */}
      <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-8 border-2 border-[#335C33]/20 shadow-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#335C33] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#335C33]">
                {lang === 'en' ? 'Heritage Performance Archive' : 'Kho Lưu Trữ Di Sản Âm Nhạc'}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#335C33] font-serif">
              {lang === 'en' ? "Traditional T'rưng Solo Performance & Educational Workshops" : "Độc Tấu Đàn T'rưng & Chuỗi Workshop Giáo Dục Di Sản"}
            </h3>
          </div>

          <span className="text-xs font-bold text-[#8C5A35] bg-[#E3EDD3] px-3 py-1 rounded-full shrink-0">
            10,000+ Views • 12+ Schools
          </span>
        </div>

        {/* Video / Multimedia Player Frame (Placeholder for real candidate video) */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#2C2E2B] border border-[#335C33]/30 shadow-inner flex flex-col items-center justify-center text-center p-6 text-[#F6F6EE] group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#335C33]/90 text-[#F6F6EE] flex items-center justify-center shadow-xl border-2 border-[#E3EDD3] group-hover:scale-110 transition-transform cursor-pointer mb-4">
            <Play className="w-8 h-8 fill-current translate-x-0.5" />
          </div>
          <h4 className="text-base sm:text-xl font-bold font-serif max-w-lg mb-1">
            {lang === 'en'
              ? 'Thanh Am Dat Viet — Traditional Central Highlands T\'rưng Soloist Showcase'
              : 'Thanh Âm Đất Việt — Đêm Nhạc Độc Tấu Đàn T\'rưng Đại Ngàn'}
          </h4>
          <p className="text-xs sm:text-sm text-[#E3EDD3] max-w-md">
            {lang === 'en'
              ? '[Video Embed: Quynh Chi performing the traditional T\'rưng at the municipal auditorium in Ho Chi Minh City for ~150 urban attendees]'
              : '[Khung video: Quỳnh Chi biểu diễn độc tấu đàn T\'rưng tại khán phòng TP.HCM trước 150 khán giả]'}
          </p>
          <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs text-[#E3EDD3]/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
            YouTube / Vimeo Archive Ready
          </div>
        </div>
      </div>

      {/* Impact Projects Cards */}
      <div className="space-y-10 sm:space-y-14">
        {IMPACT_PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#335C33]/20 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Narrative */}
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

                {/* Key Metrics */}
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

                {/* Action trigger */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs sm:text-sm font-bold shadow-xs hover:bg-[#284828] active:scale-95 transition-all cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'View Field Insights & Story' : 'Xem Nhật Ký Thực Địa & Chi Tiết'}</span>
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

              {/* Right Column: Visual Art Illustration */}
              <div className="lg:col-span-4 w-full">
                <VisualArtAsset
                  type={project.imageType}
                  className="h-56 sm:h-64 w-full shadow-xs"
                  caption={
                    project.imageType === 'trung'
                      ? "Oral heritage codified into structured curriculum"
                      : project.imageType === 'bicycles'
                      ? '77 Bicycles for Buon Drang Phok primary students'
                      : project.imageType === 'debate'
                      ? 'Incentive modeling & public policy adjudication'
                      : 'Community wildlife rescue & road safety'
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
