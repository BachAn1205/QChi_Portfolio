import React from 'react';
import {
  ArrowRight,
  FileText,
  Sparkles,
  GraduationCap,
  MapPin,
  BarChart2,
  Award,
  Globe,
  Trophy,
  Music,
  HeartHandshake,
  Leaf,
  CheckCircle2,
  BookOpen,
  ArrowUpRight,
  TrendingUp,
} from 'lucide-react';
import { Language, NavRoute, ProjectItem } from '../types';
import { UI_STRINGS, PERSONAL_INFO, BENTO_METRICS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';
import { AudioPlayerWidget } from '../components/AudioPlayerWidget';

interface HomeViewProps {
  lang: Language;
  onNavigate: (route: NavRoute) => void;
  onOpenResume: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  onNavigate,
  onOpenResume,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#E3EDD3]" />,
    Award: <Award className="w-5 h-5 text-[#E3EDD3]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#E3EDD3]" />,
    Globe: <Globe className="w-5 h-5 text-[#E3EDD3]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#E3EDD3]" />,
    Music: <Music className="w-5 h-5 text-[#E3EDD3]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#E3EDD3]" />,
    Leaf: <Leaf className="w-5 h-5 text-[#E3EDD3]" />,
  };

  return (
    <div className="w-full space-y-16 md:space-y-24 pb-12">
      {/* ─── SECTION 1: HERO ────────────────────────────────── */}
      <section className="relative pt-6 sm:pt-10 md:pt-16 pb-8 overflow-hidden">
        {/* Subtle Background Glow / Aura */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#335C33]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#8C5A35]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Category / Admissions Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start">
                <div className="section-badge">
                  <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
                  <span>{UI_STRINGS.hero.badge[lang]}</span>
                </div>
              </div>

              {/* Main Heading H1 */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#335C33] font-serif tracking-tight leading-[1.12]">
                {UI_STRINGS.hero.name}
              </h1>

              {/* Sub-Heading H2 */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#8C5A35] font-serif">
                {UI_STRINGS.hero.subtitle[lang]}
              </h2>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-[#2C2E2B]/85 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {UI_STRINGS.hero.tagline[lang]}
              </p>

              {/* Quick Academic Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/15">
                  <GraduationCap className="w-3.5 h-3.5 text-[#8C5A35]" />
                  <span>{lang === 'en' ? 'VNU-HCM Gifted High School' : 'Chuyên Năng Khiếu ĐHQG-HCM'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/15">
                  <MapPin className="w-3.5 h-3.5 text-[#8C5A35]" />
                  <span>{lang === 'en' ? 'Dak Lak & HCMC, Vietnam' : 'Đắk Lắk & TP.HCM'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF9F2] text-[#335C33] border border-[#335C33]/15">
                  <BarChart2 className="w-3.5 h-3.5 text-[#8C5A35]" />
                  <span>{lang === 'en' ? 'Data Science & Economics' : 'Khoa học Dữ liệu & Kinh tế'}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <button
                  onClick={() => onNavigate('research')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl md:rounded-2xl bg-[#335C33] text-[#F6F6EE] font-bold text-sm md:text-base shadow-md hover:bg-[#284828] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>{UI_STRINGS.hero.ctaWork[lang]}</span>
                  <ArrowRight className="w-4 h-4 text-[#E3EDD3]" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl md:rounded-2xl bg-white/70 backdrop-blur-sm text-[#335C33] border border-[#335C33]/25 font-bold text-sm md:text-base hover:bg-[#E3EDD3]/70 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#8C5A35]" />
                  <span>{UI_STRINGS.hero.ctaResume[lang]}</span>
                </button>
              </div>

              {/* T'rưng Chime Player */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <AudioPlayerWidget lang={lang} />
              </div>
            </div>

            {/* Right Visual Art Asset Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FAF9F2] rounded-3xl p-6 border-2 border-[#335C33]/20 shadow-lg relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#335C33]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#335C33]">
                      {lang === 'en' ? 'Core Synthesis' : 'Tổng Hoà Năng Lực'}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#8C5A35] bg-[#E3EDD3] px-2.5 py-0.5 rounded-full">
                    SDG 12 & 13
                  </span>
                </div>

                <VisualArtAsset
                  type="coffee"
                  className="h-56 sm:h-64 w-full"
                  caption={
                    lang === 'en'
                      ? 'CAFLOOP & Central Highlands Coffee Husk Upcycling'
                      : 'Mô hình kinh tế tuần hoàn tái chế vỏ cà phê CAFLOOP'
                  }
                />

                <div className="mt-4 pt-4 border-t border-[#335C33]/15 flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#335C33]">
                    {lang === 'en' ? 'Empirical Economics in Action' : 'Kinh tế học thực nghiệm'}
                  </span>
                  <span className="font-bold text-[#8C5A35]">
                    500+ kg Upcycled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: ABOUT ME ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-10 md:p-14 border border-[#335C33]/15 shadow-sm space-y-8">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="section-badge">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
              <span>{UI_STRINGS.about.badge[lang]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#335C33] font-serif tracking-tight">
              {UI_STRINGS.about.title[lang]}
            </h2>
            <p className="section-subtitle italic text-base sm:text-lg">
              {UI_STRINGS.about.quote[lang]}
            </p>
          </div>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-[#2C2E2B]/85 leading-relaxed">
              {UI_STRINGS.about.paragraphs[lang].map((para, index) => (
                <p key={index} className="indent-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Visual Accent Card with T'rung Asset */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-[#F6F6EE] rounded-2xl p-5 border border-[#335C33]/20 shadow-xs space-y-3">
                <VisualArtAsset
                  type="trung"
                  className="h-44 w-full"
                  caption={
                    lang === 'en'
                      ? "Acoustic T'rưng bamboo oral heritage"
                      : "Bảo tồn âm thanh cội nguồn đàn T'rưng"
                  }
                />
                <div className="text-center">
                  <span className="text-xs font-bold text-[#335C33] block">
                    {lang === 'en' ? 'Cultural Diplomacy & Arts' : 'Ngoại giao văn hoá & Di sản'}
                  </span>
                  <span className="text-[11px] text-[#8C5A35]">
                    2,300+ {lang === 'en' ? 'Students Reached' : 'Học sinh tiếp cận'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BENTO STATS ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-badge">
            <BarChart2 className="w-3.5 h-3.5 text-[#335C33]" />
            <span>{lang === 'en' ? 'VERIFIED METRICS' : 'CHỈ SỐ XÁC THỰC'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#335C33] font-serif tracking-tight">
            {UI_STRINGS.bentoTitle[lang]}
          </h2>
          <p className="section-subtitle">
            {UI_STRINGS.bentoSubtitle[lang]}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {BENTO_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-[#FAF9F2] rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-xs border border-[#335C33]/15 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group cursor-default"
            >
              {/* Decorative Subtle Circle */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#335C33]/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#335C33] text-[#F6F6EE] flex items-center justify-center shadow-xs">
                    {iconMap[metric.icon] || <Award className="w-5 h-5 text-[#E3EDD3]" />}
                  </div>
                  {metric.badge && (
                    <span className="text-[10px] font-bold text-[#8C5A35] bg-[#E3EDD3] px-2.5 py-0.5 rounded-full">
                      {metric.badge[lang]}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm font-bold text-[#335C33] leading-snug mb-1">
                  {metric.label[lang]}
                </p>
              </div>

              <div className="relative z-10 mt-3">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#335C33] tracking-tight font-serif tabular-nums">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-xs sm:text-sm font-bold text-[#8C5A35]">
                      {metric.unit}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-[#2C2E2B]/75 mt-2 leading-relaxed">
                  {metric.subtext[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Shimmer Progress Bar (Design System Section 6.5) */}
        <div className="bg-[#FAF9F2] border-2 border-[#335C33]/20 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-[#8C5A35] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
              {lang === 'en' ? 'Community Target Milestone' : 'Tiến Độ Sáng Kiến Thực Địa'}
            </span>
            <span className="text-xs md:text-sm font-bold text-[#335C33] bg-[#E3EDD3] px-3 py-1 rounded-full">
              {lang === 'en' ? '100% Fulfilled' : 'Đã Đạt 100%'}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-bold text-[#335C33] mb-4 font-serif">
            {lang === 'en'
              ? 'Ea Wer Project: 77 Bicycles & 2 Smart TVs for Buon Drang Phok Primary Students'
              : 'Dự án Ea Wer: 77 Xe Đạp & 2 Smart TV Cho Học Sinh Buôn Đrăng Phốk'}
          </h3>

          {/* Progress Track */}
          <div className="relative w-full h-5 md:h-6 bg-[#E3EDD3] rounded-full overflow-hidden mb-3 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#335C33] to-[#4A7F4A] rounded-full relative overflow-hidden transition-all duration-1000"
              style={{ width: '100%' }}
            >
              <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs md:text-sm font-semibold">
            <span className="text-[#335C33] font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#335C33]" />
              <span>{lang === 'en' ? 'All 77 Bicycles Delivered & Warranted' : 'Hoàn thành bàn giao & bảo hành tại buôn làng'}</span>
            </span>
            <span className="text-[#8C5A35]">Buon Drang Phok, Dak Lak</span>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: THREE PILLARS PREVIEW ───────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
            <span>{lang === 'en' ? 'PORTFOLIO ARCHITECTURE' : 'CẤU TRÚC HỒ SƠ'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#335C33] font-serif tracking-tight">
            {UI_STRINGS.pillars.title[lang]}
          </h2>
          <p className="section-subtitle">
            {UI_STRINGS.pillars.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: The Mind */}
          <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-7 border border-[#335C33]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center font-serif font-bold text-lg shadow-xs">
                01
              </div>
              <span className="text-xs font-bold text-[#8C5A35] uppercase tracking-wider block">
                {UI_STRINGS.pillars.mind.tag[lang]}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#335C33] font-serif group-hover:text-[#284828] transition-colors">
                {UI_STRINGS.pillars.mind.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2E2B]/80 leading-relaxed">
                {UI_STRINGS.pillars.mind.desc[lang]}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('research')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0] text-xs sm:text-sm font-bold border border-[#335C33]/15 transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Research Projects' : 'Xem Các Nghiên Cứu'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: The Heart */}
          <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-7 border border-[#335C33]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center font-serif font-bold text-lg shadow-xs">
                02
              </div>
              <span className="text-xs font-bold text-[#8C5A35] uppercase tracking-wider block">
                {UI_STRINGS.pillars.heart.tag[lang]}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#335C33] font-serif group-hover:text-[#284828] transition-colors">
                {UI_STRINGS.pillars.heart.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2E2B]/80 leading-relaxed">
                {UI_STRINGS.pillars.heart.desc[lang]}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('impact')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0] text-xs sm:text-sm font-bold border border-[#335C33]/15 transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Community Impact' : 'Xem Hoạt Động Xã Hội'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3: The Competitor */}
          <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-7 border border-[#335C33]/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center font-serif font-bold text-lg shadow-xs">
                03
              </div>
              <span className="text-xs font-bold text-[#8C5A35] uppercase tracking-wider block">
                {UI_STRINGS.pillars.competitor.tag[lang]}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#335C33] font-serif group-hover:text-[#284828] transition-colors">
                {UI_STRINGS.pillars.competitor.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C2E2B]/80 leading-relaxed">
                {UI_STRINGS.pillars.competitor.desc[lang]}
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onNavigate('profile')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0] text-xs sm:text-sm font-bold border border-[#335C33]/15 transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'View Full Academic CV' : 'Xem Hồ Sơ Năng Lực'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CALL TO ACTION BANNER ────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#335C33] to-[#284828] text-[#F6F6EE] rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2.5 max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E3EDD3] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {lang === 'en' ? 'Admissions Dialogue 2026' : 'Tuyển Sinh Đại Học Quốc Tế 2026'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              {lang === 'en' ? 'Building Transparent Ecosystems' : 'Kiến Tạo Những Hệ Sinh Thái Minh Bạch'}
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F6EE]/85 leading-relaxed">
              {lang === 'en'
                ? 'Discover how quantitative economics, empirical analytics, and grassroots empathy converge in this applicant profile.'
                : 'Khám phá sự giao thoa giữa kinh tế học định lượng, dữ liệu thực chứng và lòng trắc ẩn cộng đồng.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#E3EDD3] text-[#335C33] font-bold text-sm hover:bg-[#D5E3C0] transition-colors cursor-pointer shadow-sm"
            >
              {lang === 'en' ? 'Contact Applicant' : 'Liên Hệ Ứng Viên'}
            </button>
            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-xl bg-white/15 text-[#F6F6EE] font-semibold text-sm hover:bg-white/25 transition-colors cursor-pointer border border-white/20"
            >
              {lang === 'en' ? 'Download CV (PDF)' : 'Tải CV (PDF)'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
