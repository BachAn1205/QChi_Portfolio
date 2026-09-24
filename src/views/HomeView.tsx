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
  ExternalLink,
  ChevronRight,
  Compass,
  Database,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import { Language, NavRoute, ProjectItem } from '../types';
import { UI_STRINGS, PERSONAL_INFO, BENTO_METRICS } from '../data/content';
import { VisualArtAsset } from '../components/VisualArtAsset';
import { AudioPlayerWidget } from '../components/AudioPlayerWidget';
import { FolderTabGraphic } from '../components/FolderTabGraphic';

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
  onSelectProject,
}) => {
  return (
    <div className="w-full space-y-20 md:space-y-28 pb-16 overflow-hidden">
      {/* ─── SECTION 1: HERO / COVER (CANVA SLIDE 1 INSPIRED) ────────────────── */}
      <section className="relative pt-8 sm:pt-14 md:pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* Floating 3D Folder Tabs at corners for Dossier Metaphor */}
        <div className="absolute -top-6 -left-6 sm:top-2 sm:left-4 z-0 opacity-80 sm:opacity-90">
          <FolderTabGraphic size="lg" rotate={-8} variant="matcha" />
        </div>
        <div className="absolute -top-8 -right-6 sm:top-4 sm:right-6 z-0 opacity-75 sm:opacity-85">
          <FolderTabGraphic size="md" rotate={12} variant="forest" />
        </div>
        <div className="hidden lg:block absolute bottom-8 -left-8 z-0 opacity-80">
          <FolderTabGraphic size="md" rotate={-14} variant="terracotta" />
        </div>
        <div className="hidden lg:block absolute bottom-12 -right-8 z-0 opacity-85">
          <FolderTabGraphic size="xl" rotate={10} variant="matcha" />
        </div>

        {/* Subtle Ambient Background Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E3EDD3]/40 via-[#FAF9F2]/60 to-[#8C5A35]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F2] border border-[#B7CCA0] shadow-xs mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#2B4E2B] font-display">
              {UI_STRINGS.hero.badge[lang]}
            </span>
          </div>

          {/* Canva Slide 1 Style: Giant Two-Tone Display Title */}
          <div className="space-y-1 sm:space-y-2 mb-6">
            <p className="text-base sm:text-xl md:text-2xl font-bold tracking-widest text-[#2B4E2B] uppercase font-display">
              {lang === 'en' ? 'PROJECT & ACADEMIC' : 'HỒ SƠ HỌC THUẬT & DỰ ÁN'}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] font-display uppercase">
              <span className="text-gradient-forest">PORT</span>
              <span className="text-[#2C2E2B]">FOLIO</span>
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-extrabold text-[#2B4E2B] font-serif pt-1">
              Phan Hoàng Quỳnh Chi
            </p>
          </div>

          {/* Floating Angled Stickers (Canva Slide 1 Signature: Spontaneous, Human, Anti-AI) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-8">
            <span
              className="floating-sticker"
              style={{ transform: 'rotate(-2.5deg)' }}
            >
              <span className="text-[#8C5A35] font-handwritten text-base font-bold">Presented by:</span>
              <span className="font-bold text-[#2B4E2B]">Quỳnh Chi</span>
            </span>

            <span
              className="floating-sticker"
              style={{ transform: 'rotate(2deg)' }}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#2B4E2B]" />
              <span>{lang === 'en' ? 'VNU-HCM High School for the Gifted' : 'THPT Chuyên Năng Khiếu - ĐHQG-HCM'}</span>
            </span>

            <span
              className="floating-sticker"
              style={{ transform: 'rotate(-1.5deg)' }}
            >
              <MapPin className="w-3.5 h-3.5 text-[#8C5A35]" />
              <span>{lang === 'en' ? 'Dak Lak & HCMC, Vietnam' : 'Đắk Lắk & TP.HCM'}</span>
            </span>

            <span
              className="floating-sticker"
              style={{ transform: 'rotate(3deg)' }}
            >
              <BarChart2 className="w-3.5 h-3.5 text-[#2B4E2B]" />
              <span>{lang === 'en' ? 'Economics & Data Science' : 'Kinh tế & Khoa học Dữ liệu'}</span>
            </span>

            <span
              className="floating-sticker"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <Leaf className="w-3.5 h-3.5 text-[#3A693A]" />
              <span>{lang === 'en' ? 'Circular Bio-Economy' : 'Kinh tế tuần hoàn'}</span>
            </span>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-[#2C2E2B]/85 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            {UI_STRINGS.hero.tagline[lang]}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => onNavigate('research')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-sm sm:text-base font-display hover:bg-[#1E371E] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{UI_STRINGS.hero.ctaWork[lang]}</span>
              <ArrowRight className="w-4 h-4 text-[#E3EDD3] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#2B4E2B] border-1.5 border-[#B7CCA0] font-bold text-sm sm:text-base font-display hover:bg-[#E3EDD3]/50 transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-[#8C5A35]" />
              <span>{UI_STRINGS.hero.ctaResume[lang]}</span>
            </button>
          </div>

          {/* Highlands T'rưng Audio Player Widget */}
          <div className="flex justify-center">
            <AudioPlayerWidget lang={lang} />
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: WHO I AM (CANVA SLIDE 2 INSPIRED 6-BOX ALTERNATING GRID) ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title with Two-Tone Gradient */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
            <Sparkles className="w-3 h-3 text-[#8C5A35]" />
            <span>{UI_STRINGS.about.badge[lang]}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
            <span className="text-gradient-forest">{lang === 'en' ? 'WHO' : 'TÔI'}</span>{' '}
            <span className="text-[#2C2E2B]">{lang === 'en' ? 'I AM' : 'LÀ AI'}</span>
          </h2>

          <p className="text-sm sm:text-base text-[#8C5A35] font-serif italic max-w-xl mx-auto">
            "{UI_STRINGS.about.title[lang]}"
          </p>
        </div>

        {/* 6-Box Alternating Grid (Canva Slide 2 Exact DNA: Image, Card-with-Pill, Image / Card-with-Pill, Image, Card-with-Pill) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {/* Row 1, Col 1: Visual Asset Card (Coffee & Bio-Circular Heritage) */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#B7CCA0] bg-[#FAF9F2] shadow-sm p-4 flex flex-col justify-center min-h-[220px] group hover:border-[#2B4E2B] transition-colors">
            <VisualArtAsset
              type="coffee"
              className="h-44 w-full"
              caption={lang === 'en' ? 'Central Highlands Coffee Ecology' : 'Sinh thái cà phê Tây Nguyên'}
            />
          </div>

          {/* Row 1, Col 2: Card with Centered Top Pill Tab ("Our Expertise" / "Core Strengths") */}
          <div className="canva-dossier-card p-6 sm:p-7 pt-8 flex flex-col justify-between">
            {/* Signature Canva Centered Pill Tab on Top Border */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="canva-pill-tab">
                {lang === 'en' ? 'Core Strengths' : 'Thế Mạnh Nòng Cốt'}
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#2C2E2B]/85">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B4E2B] shrink-0" />
                <span>{lang === 'en' ? 'Quantitative Economics & Modeling' : 'Kinh tế học định lượng & Mô hình hóa'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B4E2B] shrink-0" />
                <span>{lang === 'en' ? 'Predictive Analytics & Econometrics' : 'Phân tích dự báo & Kinh tế lượng'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B4E2B] shrink-0" />
                <span>{lang === 'en' ? 'Circular Bio-Economy Systems' : 'Kinh tế sinh học tuần hoàn'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2B4E2B] shrink-0" />
                <span>{lang === 'en' ? 'Fieldwork Leadership & Ethics' : 'Lãnh đạo thực địa & Đạo đức nghiên cứu'}</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#B7CCA0]/40 flex items-center justify-between text-[11px] text-[#8C5A35] font-bold">
              <span>PTNK Class of 2026</span>
              <span>Top 1% Economics</span>
            </div>
          </div>

          {/* Row 1, Col 3: Visual Asset Card (Data & Analytics) */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#B7CCA0] bg-[#FAF9F2] shadow-sm p-4 flex flex-col justify-center min-h-[220px] group hover:border-[#2B4E2B] transition-colors">
            <VisualArtAsset
              type="data"
              className="h-44 w-full"
              caption={lang === 'en' ? 'Empirical Econometrics & Forecasting' : 'Kinh tế lượng & Mô hình dự báo'}
            />
          </div>

          {/* Row 2, Col 1: Card with Centered Top Pill Tab ("Intellectual Identity") */}
          <div className="canva-dossier-card p-6 sm:p-7 pt-8 flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="canva-pill-tab">
                {lang === 'en' ? 'Identity & Roots' : 'Bản Sắc & Cội Nguồn'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
              {lang === 'en'
                ? 'Raised in Dak Lak, Vietnam’s coffee capital, my perspective unites the raw rhythms of indigenous Highlands culture with the analytical rigor of economic data.'
                : 'Lớn lên tại Đắk Lắk — thủ phủ cà phê, góc nhìn của tôi kết tinh từ nhịp đập đại ngàn Tây Nguyên giao thoa với sự chặt chẽ của dữ liệu kinh tế học.'}
            </p>

            <div className="pt-3 border-t border-[#B7CCA0]/40 flex items-center gap-2 text-xs font-bold text-[#2B4E2B]">
              <Compass className="w-4 h-4 text-[#8C5A35]" />
              <span>{lang === 'en' ? 'Highlands Perspective' : 'Góc nhìn Đại ngàn'}</span>
            </div>
          </div>

          {/* Row 2, Col 2: Visual Asset Card (T'rung Bamboo Oral Heritage) */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#B7CCA0] bg-[#FAF9F2] shadow-sm p-4 flex flex-col justify-center min-h-[220px] group hover:border-[#2B4E2B] transition-colors">
            <VisualArtAsset
              type="trung"
              className="h-44 w-full"
              caption={lang === 'en' ? "Acoustic T'rưng Heritage" : "Di sản âm thanh đàn T'rưng"}
            />
          </div>

          {/* Row 2, Col 3: Card with Centered Top Pill Tab ("Mission / Vision") */}
          <div className="canva-dossier-card p-6 sm:p-7 pt-8 flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="canva-pill-tab">
                {lang === 'en' ? 'Academic Mission' : 'Sứ Mệnh Học Thuật'}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
              {lang === 'en'
                ? 'Deliver verifiable, data-grounded economic innovations that transform agricultural byproducts into community wealth and preserve cultural sovereignty.'
                : 'Kiến tạo những giải pháp kinh tế thực chứng, biến phế phẩm nông nghiệp thành giá trị cộng đồng và bảo tồn di sản văn hóa bền vững.'}
            </p>

            <div className="pt-3 border-t border-[#B7CCA0]/40 flex items-center justify-between text-xs font-bold text-[#8C5A35]">
              <span>SDG 12 & SDG 13</span>
              <span className="text-[#2B4E2B]">Admissions 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: PROJECT OUTCOMES & METRICS (CANVA SLIDE 8 INSPIRED) ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
            <BarChart2 className="w-3 h-3 text-[#2B4E2B]" />
            <span>{lang === 'en' ? 'VERIFIED METRICS' : 'CHỈ SỐ THỰC CHỨNG'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
            <span className="text-gradient-forest">{lang === 'en' ? 'PROJECT' : 'KẾT QUẢ'}</span>{' '}
            <span className="text-[#2C2E2B]">{lang === 'en' ? 'OUTCOMES' : 'DỰ ÁN'}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8C5A35] font-serif">
            {UI_STRINGS.bentoSubtitle[lang]}
          </p>
        </div>

        {/* Canva Slide 8 Style: Wide Card with Centered Top Pill Tab & Vertical Dividers */}
        <div className="canva-dossier-card p-6 sm:p-10 pt-10 sm:pt-12 mb-8">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="canva-pill-tab text-xs sm:text-sm">
              {lang === 'en' ? 'Key Achievements & Impact' : 'Thành Tích & Tác Động Trọng Điểm'}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#B7CCA0]/50">
            {/* Metric 1 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gradient-forest block tabular-nums">
                15+ Tons
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#2B4E2B] font-display">
                {lang === 'en' ? 'Coffee Husk Upcycled' : 'Vỏ cà phê được tái chế'}
              </p>
              <p className="text-[11px] text-[#2C2E2B]/70">
                {lang === 'en' ? 'CAFLOOP bio-material initiative' : 'Sáng kiến kinh tế tuần hoàn CAFLOOP'}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#2C2E2B] block tabular-nums">
                99.2%
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#2B4E2B] font-display">
                {lang === 'en' ? 'Academic GPA' : 'Điểm Trung Bình PTNK'}
              </p>
              <p className="text-[11px] text-[#8C5A35] font-semibold">
                {lang === 'en' ? 'Valedictorian Track' : 'Top 1% Khối Chuyên Năng Khiếu'}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-gradient-forest block tabular-nums">
                1,200+
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#2B4E2B] font-display">
                {lang === 'en' ? 'Highland Farmers' : 'Hộ Nông Dân Tiếp Cận'}
              </p>
              <p className="text-[11px] text-[#2C2E2B]/70">
                {lang === 'en' ? 'Sustainable supply chains' : 'Mạng lưới canh tác bền vững'}
              </p>
            </div>

            {/* Metric 4 */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center space-y-1">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#8C5A35] block tabular-nums">
                77 Units
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#2B4E2B] font-display">
                {lang === 'en' ? 'Bicycles Delivered' : 'Xe Đạp Trao Tận Tay'}
              </p>
              <p className="text-[11px] text-[#2C2E2B]/70">
                {lang === 'en' ? 'Ea Wer Ethnic Primary School' : 'Học sinh tiểu học Buôn Đrăng Phốk'}
              </p>
            </div>
          </div>
        </div>

        {/* Canva Slide 8 Second Row: Half Image + Half Metric Card with Pill Tab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Visual Asset Card */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border-2 border-[#B7CCA0] bg-[#FAF9F2] shadow-sm p-5 flex flex-col justify-center min-h-[220px]">
            <VisualArtAsset
              type="bicycles"
              className="h-48 w-full"
              caption={lang === 'en' ? 'Ea Wer Community Project Milestone' : 'Dự án cộng đồng Ea Wer - Buôn Đrăng Phốk'}
            />
          </div>

          {/* Right Column: Card with Top Pill Tab ("Success Metrics") */}
          <div className="lg:col-span-7 canva-dossier-card p-6 sm:p-8 pt-8 flex flex-col justify-between">
            <div className="absolute -top-3.5 left-8">
              <span className="canva-pill-tab text-xs">
                {lang === 'en' ? 'Success Metrics & Execution' : 'Tiến Độ & Bảo Chứng Thực Địa'}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#2B4E2B] font-display">
                {lang === 'en'
                  ? 'Ea Wer Project: 77 Bicycles & 2 Smart TVs for Buon Drang Phok Primary Students'
                  : 'Dự án Ea Wer: 77 Xe Đạp & 2 Smart TV Cho Học Sinh Buôn Đrăng Phốk'}
              </h3>

              {/* Progress Track */}
              <div className="relative w-full h-4 sm:h-5 bg-[#E3EDD3] rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-[#2B4E2B] to-[#4E854E] rounded-full relative overflow-hidden transition-all duration-1000"
                  style={{ width: '100%' }}
                >
                  <div className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold pt-1">
                <span className="text-[#2B4E2B] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2B4E2B]" />
                  <span>{lang === 'en' ? '100% Fulfilled & Delivered On-site' : '100% Hoàn thành và bàn giao tại buôn làng'}</span>
                </span>
                <span className="text-[#8C5A35] font-bold">Buon Don, Dak Lak</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#B7CCA0]/40 flex items-center justify-between text-xs text-[#2C2E2B]/80">
              <span>{lang === 'en' ? 'Direct Funding: 100% Transparent' : 'Nguồn quỹ: 100% Minh bạch giải ngân'}</span>
              <button
                onClick={() => onNavigate('impact')}
                className="font-bold text-[#2B4E2B] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{lang === 'en' ? 'See field notes' : 'Xem nhật ký thực địa'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: RESEARCH & ENTERPRISE HIGHLIGHTS (CANVA SLIDE 4 & 5 INSPIRED) ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
            <Sparkles className="w-3 h-3 text-[#8C5A35]" />
            <span>{lang === 'en' ? 'FEATURED CASE STUDIES' : 'HỒ SƠ NGHIÊN CỨU TIÊU BIỂU'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase">
            <span className="text-gradient-forest">{lang === 'en' ? 'RESEARCH' : 'NGHIÊN CỨU'}</span>{' '}
            <span className="text-[#2C2E2B]">{lang === 'en' ? '& INNOVATION' : '& ĐỔI MỚI'}</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8C5A35] font-serif">
            {UI_STRINGS.pillars.mind.desc[lang]}
          </p>
        </div>

        {/* Canva Slide 4 Structure: Big Left Title + Image & Right 3 Pill Cards */}
        <div className="canva-dossier-card p-6 sm:p-10 border-2 border-[#B7CCA0] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side: Big Typography Title + Visual Illustration */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5A35] font-display">
                  Project Dossier #01 • Bio-Economy
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-[#2B4E2B] uppercase mt-1 leading-tight">
                  CAFLOOP: Circular Coffee Husk Upcycling
                </h3>
                <p className="text-xs sm:text-sm text-[#2C2E2B]/80 font-medium mt-2">
                  {lang === 'en'
                    ? 'Transforming agricultural waste into acoustic panels, bio-fertilizers, and high-value circular economic products.'
                    : 'Chuyển hóa phế phụ phẩm vỏ cà phê thành tấm tiêu âm sinh học, phân bón hữu cơ và sản phẩm tuần hoàn giá trị cao.'}
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#B7CCA0] bg-[#FAF9F2] p-3">
                <VisualArtAsset
                  type="coffee"
                  className="h-44 w-full"
                  caption="CAFLOOP Closed-Loop Material Architecture"
                />
              </div>

              <button
                onClick={() => onNavigate('research')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-xs sm:text-sm font-display hover:bg-[#1E371E] transition-all shadow-xs cursor-pointer"
              >
                <span>{lang === 'en' ? 'Open Research Dossier' : 'Mở Hồ Sơ Nghiên Cứu'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E3EDD3]" />
              </button>
            </div>

            {/* Right Side: 3 Stacked Cards with Centered Top Pill Tabs (Canva Slide 4 DNA!) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pill Card 1: Objective */}
              <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/85">
                <div className="absolute -top-3 left-6">
                  <span className="canva-pill-tab text-xs">
                    {lang === 'en' ? 'Research Objective' : 'Mục Tiêu Nghiên Cứu'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed font-medium">
                  {lang === 'en'
                    ? 'Eliminate open-air burning of 100,000+ tons of coffee husk annually in Dak Lak by formulating an economically viable, decentralized bio-composite production chain.'
                    : 'Chấm dứt việc đốt lộ thiên hơn 100.000 tấn vỏ cà phê mỗi năm tại Đắk Lắk thông qua thiết lập chuỗi giá trị composite sinh học phi tập trung, khả thi về mặt kinh tế.'}
                </p>
              </div>

              {/* Pill Card 2: Methodology */}
              <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/85">
                <div className="absolute -top-3 left-6">
                  <span className="canva-pill-tab text-xs">
                    {lang === 'en' ? 'Methodology & Innovation' : 'Phương Pháp & Đổi Mới'}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#2C2E2B]/85 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B4E2B]" />
                    <span>{lang === 'en' ? 'Natural starch and mycelium bio-binding techniques' : 'Công nghệ chất kết dính sinh học từ tinh bột và hệ sợi nấm'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B4E2B]" />
                    <span>{lang === 'en' ? 'Cost-benefit econometric model for local farm co-ops' : 'Mô hình kinh tế lượng đo lường chi phí - lợi ích cho hợp tác xã'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B4E2B]" />
                    <span>{lang === 'en' ? 'Acoustic absorption testing per ASTM C423 standards' : 'Thử nghiệm khả năng tiêu âm đạt chuẩn quốc tế ASTM C423'}</span>
                  </li>
                </ul>
              </div>

              {/* Pill Card 3: Results */}
              <div className="canva-dossier-card p-5 sm:p-6 pt-7 relative bg-white/85">
                <div className="absolute -top-3 left-6">
                  <span className="canva-pill-tab text-xs">
                    {lang === 'en' ? 'Outcomes & Social Impact' : 'Kết Quả & Tác Động Xã Hội'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#FAF9F2] p-2.5 rounded-xl border border-[#B7CCA0]/50">
                    <span className="font-bold text-[#2B4E2B] block">32% Cost Reduction</span>
                    <span className="text-[11px] text-[#2C2E2B]/75">vs commercial acoustic boards</span>
                  </div>
                  <div className="bg-[#FAF9F2] p-2.5 rounded-xl border border-[#B7CCA0]/50">
                    <span className="font-bold text-[#8C5A35] block">+18% Farmer Income</span>
                    <span className="text-[11px] text-[#2C2E2B]/75">from raw byproduct sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CONTACT & VISION (CANVA SLIDE 10 INSPIRED) ────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="canva-dossier-card p-8 sm:p-12 md:p-16 border-2 border-[#B7CCA0] relative overflow-hidden bg-gradient-to-br from-[#FAF9F2] via-[#F6F6EE] to-[#E3EDD3]/40">
          {/* Decorative Corner Folders */}
          <div className="absolute -top-6 -right-6 z-0 opacity-75">
            <FolderTabGraphic size="lg" rotate={12} variant="forest" />
          </div>
          <div className="absolute -bottom-8 -left-6 z-0 opacity-80">
            <FolderTabGraphic size="md" rotate={-10} variant="terracotta" />
          </div>

          <div className="relative z-10 space-y-8 text-center max-w-3xl mx-auto">
            {/* Canva Slide 10 Style Header: LET'S BUILD SOMETHING GREAT TOGETHER */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#8C5A35] font-display">
                {lang === 'en' ? 'International Admissions 2026' : 'Tuyển Sinh Du Học 2026'}
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase leading-tight">
                <span className="text-gradient-forest">{lang === 'en' ? "LET'S BUILD" : 'CÙNG KIẾN TẠO'}</span>
                <br />
                <span className="text-[#2C2E2B]">{lang === 'en' ? 'SOMETHING MEANINGFUL' : 'NHỮNG GIÁ TRỊ THỰC'}</span>
              </h2>
            </div>

            {/* Pill Tab Card: Statement */}
            <div className="canva-dossier-card p-6 sm:p-8 pt-8 relative bg-white/90 max-w-xl mx-auto">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="canva-pill-tab text-xs">
                  {lang === 'en' ? 'Applicant Statement' : 'Lời Ngỏ Ứng Viên'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#2C2E2B]/85 font-medium leading-relaxed">
                {lang === 'en'
                  ? 'I transform raw Highland cultural perspectives and quantitative economic data into evidence-backed, impactful solutions. Eager to contribute to a collaborative, world-class university community.'
                  : 'Tôi kết nối bản sắc Tây Nguyên với tư duy kinh tế định lượng để tạo nên những giải pháp thực chứng, giàu giá trị nhân văn. Sẵn sàng đóng góp cho một môi trường đại học xuất sắc.'}
              </p>
            </div>

            {/* Contact Pills (Canva Slide 10 Format) */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="floating-sticker hover:border-[#2B4E2B]"
              >
                <span className="w-6 h-6 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center text-xs font-bold">@</span>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="floating-sticker hover:border-[#2B4E2B]"
              >
                <span className="w-6 h-6 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center text-xs font-bold">📞</span>
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <span className="floating-sticker">
                <MapPin className="w-3.5 h-3.5 text-[#8C5A35]" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-sm sm:text-base font-display hover:bg-[#1E371E] transition-all duration-200 shadow-md hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'en' ? 'Direct Contact & Vision' : 'Liên Hệ Trực Tiếp & Tầm Nhìn'}</span>
                <ArrowRight className="w-4 h-4 text-[#E3EDD3]" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-[#2B4E2B] border-1.5 border-[#B7CCA0] font-bold text-sm sm:text-base font-display hover:bg-[#E3EDD3]/50 transition-all duration-200 shadow-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#8C5A35]" />
                <span>{lang === 'en' ? 'Download Full Academic CV (PDF)' : 'Tải Toàn Bộ Hồ Sơ (PDF)'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
