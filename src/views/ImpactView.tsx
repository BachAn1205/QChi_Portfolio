import React from 'react';
import {
  Sparkles,
  Heart,
  ArrowRight,
  Music,
  Play,
  ShieldCheck,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { IMPACT_PROJECTS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';
import { AudioPlayerWidget } from '../components/AudioPlayerWidget';
import { FolderTabGraphic } from '../components/FolderTabGraphic';

interface ImpactViewProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ImpactView: React.FC<ImpactViewProps> = ({ lang, onSelectProject }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 relative">
      {/* Decorative Corner Tab */}
      <div className="hidden lg:block absolute top-6 right-8 opacity-80 pointer-events-none">
        <FolderTabGraphic size="lg" rotate={-10} variant="terracotta" label="CULTURE & IMPACT" />
      </div>

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
          <Heart className="w-3.5 h-3.5 text-[#8C5A35]" />
          <span>{lang === 'en' ? 'DOSSIER • CULTURE & GRASSROOTS ACTION' : 'HỒ SƠ • VĂN HÓA & HÀNH ĐỘNG CỘNG ĐỒNG'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
          <span className="text-gradient-forest">{lang === 'en' ? 'CULTURE' : 'VĂN HOÁ'}</span>{' '}
          <span className="text-[#2C2E2B]">{lang === 'en' ? '& IMPACT' : '& TÁC ĐỘNG'}</span>
        </h1>

        <p className="text-sm sm:text-base text-[#8C5A35] font-serif max-w-2xl mx-auto leading-relaxed">
          {lang === 'en'
            ? 'Reinvesting economic attention and grassroots empathy back into the soil, children, and soul of the Central Highlands.'
            : 'Tuần hoàn giá trị kinh tế và nguồn lực thực chất để nâng đỡ trẻ em, bảo tồn bản sắc và làm giàu cho đại ngàn.'}
        </p>

        <div className="pt-2 flex justify-center">
          <AudioPlayerWidget lang={lang} />
        </div>
      </div>

      {/* Featured Heritage Video & Performance Showcase */}
      <div className="canva-dossier-card p-6 sm:p-10 border-2 border-[#B7CCA0] relative">
        <div className="absolute -top-3.5 left-8">
          <span className="canva-pill-tab text-xs uppercase tracking-wider">
            {lang === 'en' ? "Heritage Acoustic Archive • T'rưng Solo" : "Kho Lưu Trữ Di Sản • Độc Tấu Đàn T'rưng"}
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pt-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black font-display text-[#2B4E2B] uppercase">
              {lang === 'en' ? "Traditional T'rưng Soloist & Cultural Workshops" : "Độc Tấu Đàn T'rưng & Chuỗi Workshop Văn Hóa"}
            </h2>
            <p className="text-xs sm:text-sm text-[#8C5A35] font-semibold">
              {lang === 'en' ? 'Indigenous Central Highlands Oral History Preservation' : 'Bảo tồn lịch sử truyền khẩu và âm sắc cội nguồn Tây Nguyên'}
            </p>
          </div>

          <span className="floating-sticker text-xs font-bold text-[#2B4E2B] shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
            <span>10,000+ Views • 12+ Schools</span>
          </span>
        </div>

        {/* Video Frame */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#242A24] border-2 border-[#B7CCA0] shadow-inner flex flex-col items-center justify-center text-center p-6 text-[#F6F6EE] group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2B4E2B] text-[#F6F6EE] flex items-center justify-center shadow-2xl border-2 border-[#E3EDD3] group-hover:scale-110 transition-transform cursor-pointer mb-4">
            <Play className="w-8 h-8 fill-current translate-x-0.5 text-[#E3EDD3]" />
          </div>
          <h3 className="text-base sm:text-xl font-bold font-serif max-w-lg mb-1">
            {lang === 'en'
              ? 'Thanh Am Dat Viet — Traditional Central Highlands T\'rưng Soloist Showcase'
              : 'Thanh Âm Đất Việt — Đêm Nhạc Độc Tấu Đàn T\'rưng Đại Ngàn'}
          </h3>
          <p className="text-xs sm:text-sm text-[#E3EDD3] max-w-md">
            {lang === 'en'
              ? 'Live recording: Quynh Chi performing traditional repertoire for 150+ urban attendees to bridge indigenous heritage.'
              : 'Ghi hình trực tiếp: Quỳnh Chi độc tấu nhạc cụ tre nứa truyền thống kết nối di sản với khán giả đô thị.'}
          </p>
          <div className="absolute bottom-4 right-4 text-[10px] sm:text-xs text-[#E3EDD3] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
            Heritage Video Stream
          </div>
        </div>
      </div>

      {/* Impact Projects (Canva Slide 4 & 5 Layout) */}
      <div className="space-y-16">
        {IMPACT_PROJECTS.map((project, index) => (
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
              {/* Left Column: Title, Role, Visual Asset, Metrics */}
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

                {/* Deep Dive Action Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 px-6 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-xs sm:text-sm font-display hover:bg-[#1E371E] transition-all shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>{lang === 'en' ? 'Open Field Case Study' : 'Mở Hồ Sơ Tác Động Chi Tiết'}</span>
                  <ArrowRight className="w-4 h-4 text-[#E3EDD3] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column: 3 Distinct Pill Cards */}
              <div className="lg:col-span-7 space-y-6">
                {/* Pill Card 1: Community Need & Context */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Community Need & On-Site Problem' : 'Nhu Cầu Thực Địa & Bài Toán Buôn Làng'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                    {project.details.description[0] ? project.details.description[0][lang] : project.summary[lang]}
                  </p>
                </div>

                {/* Pill Card 2: Strategy & Field Execution */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Strategy & Grassroots Execution' : 'Chiến Lược & Triển Khai Thực Tế'}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                      {project.details.description[1] ? project.details.description[1][lang] : project.summary[lang]}
                    </p>

                    {project.details.award && (
                      <div className="bg-[#FAF9F2] border border-[#8C5A35]/30 rounded-xl p-3 flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#8C5A35] shrink-0 mt-0.5" />
                        <p className="text-xs text-[#2B4E2B] font-bold">
                          {project.details.award[lang]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Pill Card 3: Measured Social Impact */}
                <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/90">
                  <div className="absolute -top-3 left-6">
                    <span className="canva-pill-tab text-xs">
                      {lang === 'en' ? 'Verified Social Outcomes' : 'Kết Quả & Tác Động Xã Hội Xác Thực'}
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
