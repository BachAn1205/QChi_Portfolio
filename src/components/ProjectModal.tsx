import React, { useEffect } from 'react';
import { X, Sparkles, Award, BookOpen, Target, ExternalLink } from 'lucide-react';
import { ProjectItem, Language } from '../types';
import { VisualArtAsset } from './VisualArtAsset';
import { AudioPlayerWidget } from './AudioPlayerWidget';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-[#FAF9F2] rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[#B7CCA0] max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#E3EDD3] text-[#2B4E2B] hover:bg-[#B7CCA0] transition-colors cursor-pointer shadow-xs z-20 border border-[#B7CCA0]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="canva-pill-tab text-xs uppercase tracking-wider">
            {project.badge[lang]}
          </span>
          <span className="text-xs font-semibold text-[#8C5A35] bg-white px-3 py-1 rounded-full border border-[#B7CCA0]">
            {project.period}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-black text-[#2B4E2B] font-display uppercase tracking-tight mb-1 pr-8">
          {project.title[lang]}
        </h3>

        <p className="text-xs sm:text-sm font-bold text-[#8C5A35] font-display uppercase tracking-wider mb-4">
          {project.role[lang]}
        </p>

        {/* Visual Illustration */}
        <div className="my-5">
          <VisualArtAsset
            type={project.imageType}
            className="h-44 md:h-52 w-full"
            caption={
              project.imageType === 'trung'
                ? lang === 'en'
                  ? "Traditional Central Highlands T'rưng bamboo resonance"
                  : "Di sản âm thanh đàn T'rưng đại ngàn Tây Nguyên"
                : project.imageType === 'coffee'
                ? lang === 'en'
                  ? 'Closed-loop Cascara tea upcycling & value chain'
                  : 'Chuỗi giá trị tuần hoàn vỏ cà phê Cascara'
                : lang === 'en'
                ? 'Empirical quantitative modeling & community impact'
                : 'Mô hình định lượng thực chứng & tác động cộng đồng'
            }
          />
        </div>

        {/* Audio Player if applicable */}
        {project.hasAudio && (
          <div className="mb-6 flex justify-center">
            <AudioPlayerWidget lang={lang} />
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 my-6">
          {project.keyMetrics.map((metric, i) => (
            <div
              key={i}
              className="bg-[#FAF9F2] p-3.5 rounded-2xl border border-[#335C33]/15 text-center shadow-xs"
            >
              <div className="text-xl md:text-2xl font-extrabold text-[#335C33] font-serif tabular-nums">
                {metric.value}
              </div>
              <div className="text-[11px] md:text-xs font-semibold text-[#8C5A35] mt-1 leading-tight">
                {metric.label[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* Publication or Award Banner */}
        {project.details.publication && (
          <div className="bg-[#E3EDD3]/70 border border-[#335C33]/25 rounded-2xl p-4 my-4 flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-[#335C33] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#335C33] block mb-0.5">
                {lang === 'en' ? 'Peer-Reviewed Publication' : 'Công Bố Khoa Học Quốc Tế'}
              </span>
              <p className="text-xs md:text-sm text-[#2C2E2B] font-medium italic">
                {project.details.publication}
              </p>
            </div>
          </div>
        )}

        {project.details.award && (
          <div className="bg-[#FAF9F2] border-2 border-[#8C5A35]/30 rounded-2xl p-4 my-4 flex items-start gap-3">
            <Award className="w-5 h-5 text-[#8C5A35] shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A35] block mb-0.5">
                {lang === 'en' ? 'Distinguished Honor' : 'Giải Thưởng Danh Dự'}
              </span>
              <p className="text-xs md:text-sm text-[#335C33] font-bold">
                {project.details.award[lang]}
              </p>
            </div>
          </div>
        )}

        {/* Full In-Depth Narrative */}
        <div className="space-y-4 my-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#335C33] flex items-center gap-1.5">
            <Target className="w-4 h-4 text-[#8C5A35]" />
            <span>{lang === 'en' ? 'Methodology & Project Narrative' : 'Phương Pháp & Tiến Trình Triển Khai'}</span>
          </h4>

          {project.details.description.map((desc, idx) => (
            <div key={idx} className="bg-[#FAF9F2] p-4 rounded-2xl border border-[#335C33]/10 text-xs md:text-sm text-[#2C2E2B]/85 leading-relaxed">
              {desc[lang]}
            </div>
          ))}
        </div>

        {/* Sustainable Development Goals Alignment */}
        {project.details.sdg && project.details.sdg.length > 0 && (
          <div className="my-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A35] block mb-2">
              {lang === 'en' ? 'United Nations SDGs Addressed' : 'Mục Tiêu Phát Triển Bền Vững (UN SDGs)'}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.details.sdg.map((sdg, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E3EDD3] text-[#335C33] border border-[#335C33]/20"
                >
                  {sdg}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#335C33]/15 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[11px] font-medium text-[#2C2E2B]/70 bg-[#FAF9F2] px-2.5 py-0.5 rounded-md border border-[#335C33]/10">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs md:text-sm font-bold hover:bg-[#284828] transition-colors cursor-pointer"
          >
            <span>{lang === 'en' ? 'Close Overview' : 'Đóng Chi Tiết'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
