import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  Sparkles,
  CheckCircle2,
  Building,
  ArrowRight,
} from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, UI_STRINGS } from '../data/content';
import { FolderTabGraphic } from '../components/FolderTabGraphic';

interface ContactViewProps {
  lang: Language;
  onOpenResume: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang, onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Admissions Inquiry regarding ${PERSONAL_INFO.name}`
    );
    const body = encodeURIComponent(
      `Dear ${PERSONAL_INFO.name},\n\nFrom: ${formData.name} (${formData.institution || 'University / Organization'})\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent via Portfolio Contact Form`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 relative">
      {/* Decorative Corner Tab */}
      <div className="hidden lg:block absolute top-6 right-8 opacity-80 pointer-events-none">
        <FolderTabGraphic size="lg" rotate={12} variant="matcha" label="GET IN TOUCH" />
      </div>

      {/* Header Section (Canva Slide 10 Exact Theme: LET'S BUILD SOMETHING GREAT TOGETHER) */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDD3] text-[#2B4E2B] text-xs font-bold font-display uppercase tracking-wider border border-[#B7CCA0]">
          <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
          <span>{lang === 'en' ? 'DIALOGUE & ADMISSIONS 2026' : 'ĐỐI THOẠI & TUYỂN SINH 2026'}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase leading-tight">
          <span className="text-gradient-forest">{lang === 'en' ? "LET'S BUILD" : 'CÙNG KIẾN TẠO'}</span>
          <br />
          <span className="text-[#2C2E2B]">{lang === 'en' ? 'SOMETHING MEANINGFUL' : 'NHỮNG GIÁ TRỊ THỰC'}</span>
        </h1>

        <p className="text-sm sm:text-base text-[#8C5A35] font-serif max-w-2xl mx-auto leading-relaxed">
          "{UI_STRINGS.contactSection.visionText[lang]}"
        </p>
      </div>

      {/* Main Grid (Canva Slide 10 Structure) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Thank You Card, Direct Info & CV Link */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card with Pill Tab: Thank You / Vision */}
          <div className="canva-dossier-card p-6 sm:p-7 pt-8 relative bg-white/90">
            <div className="absolute -top-3.5 left-6">
              <span className="canva-pill-tab text-xs">
                {lang === 'en' ? 'Thank You & Vision' : 'Lời Cảm Ơn & Tầm Nhìn'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#2C2E2B]/85 font-medium leading-relaxed">
              {lang === 'en'
                ? 'Thank you for taking the time to review my academic dossier. Whether you represent an admissions committee, an academic faculty research lab, or a grassroots development enterprise, I welcome your insights and prospective dialogue.'
                : 'Cảm ơn quý thầy cô và hội đồng tuyển sinh đã dành thời gian xem xét hồ sơ năng lực của tôi. Rất mong có cơ hội được trao đổi sâu hơn về các định hướng học thuật và dự án trong tương lai.'}
            </p>
          </div>

          {/* Contact Details List (matching Canva Slide 10 circular badges) */}
          <div className="canva-dossier-card p-6 space-y-4 bg-white/90">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#2C2E2B] hover:text-[#2B4E2B] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center shrink-0 border border-[#B7CCA0] group-hover:bg-[#2B4E2B] group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold text-[#8C5A35] block">Email</span>
                <span className="truncate block">{PERSONAL_INFO.email}</span>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#2C2E2B] hover:text-[#2B4E2B] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center shrink-0 border border-[#B7CCA0] group-hover:bg-[#2B4E2B] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8C5A35] block">{lang === 'en' ? 'Phone' : 'Số điện thoại'}</span>
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#2C2E2B]">
              <div className="w-10 h-10 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center shrink-0 border border-[#B7CCA0]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8C5A35] block">{lang === 'en' ? 'Location' : 'Địa bàn'}</span>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-[#2C2E2B]">
              <div className="w-10 h-10 rounded-full bg-[#E3EDD3] text-[#2B4E2B] flex items-center justify-center shrink-0 border border-[#B7CCA0]">
                <Building className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#8C5A35] block">{lang === 'en' ? 'School' : 'Trường'}</span>
                <span className="leading-snug">{PERSONAL_INFO.school}</span>
              </div>
            </div>
          </div>

          {/* Quick Resume Button */}
          <button
            onClick={onOpenResume}
            className="w-full py-3.5 px-6 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-xs sm:text-sm font-display hover:bg-[#1E371E] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <FileText className="w-4 h-4 text-[#E3EDD3]" />
            <span>{lang === 'en' ? 'Download Full Academic CV (PDF)' : 'Tải / Xem Hồ Sơ Đầy Đủ (PDF)'}</span>
          </button>
        </div>

        {/* Right Column: Direct Inquiry Form */}
        <div className="lg:col-span-7 canva-dossier-card p-6 sm:p-8 pt-8 relative bg-white/95">
          <div className="absolute -top-3.5 left-6">
            <span className="canva-pill-tab text-xs">
              {lang === 'en' ? 'Direct Message / Inquiry Form' : 'Gửi Thư Trực Tiếp'}
            </span>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-black font-display text-[#2B4E2B] uppercase">
              {lang === 'en' ? 'Send a Message' : 'Để Lại Lời Nhắn'}
            </h2>
            <p className="text-xs text-[#8C5A35]">
              {lang === 'en'
                ? 'Directly reach applicant regarding admissions, scholarship discussions, or research.'
                : 'Thảo luận tuyển sinh, cơ hội học bổng hoặc hợp tác nghiên cứu học thuật.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#2B4E2B] mb-1 font-display">
                {UI_STRINGS.contactSection.form.name[lang]} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === 'en' ? 'e.g., Admissions Officer / Dr. Smith' : 'Họ và tên hoặc chức vụ...'}
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-[#FAF9F2] border border-[#B7CCA0] focus:outline-none focus:border-[#2B4E2B] focus:ring-1 focus:ring-[#2B4E2B] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#2B4E2B] mb-1 font-display">
                  {UI_STRINGS.contactSection.form.email[lang]} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="admissions@university.edu"
                  className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-[#FAF9F2] border border-[#B7CCA0] focus:outline-none focus:border-[#2B4E2B] focus:ring-1 focus:ring-[#2B4E2B] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#2B4E2B] mb-1 font-display">
                  {UI_STRINGS.contactSection.form.institution[lang]}
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder={lang === 'en' ? 'University / Institution' : 'Tên Trường / Tổ chức...'}
                  className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-[#FAF9F2] border border-[#B7CCA0] focus:outline-none focus:border-[#2B4E2B] focus:ring-1 focus:ring-[#2B4E2B] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2B4E2B] mb-1 font-display">
                {UI_STRINGS.contactSection.form.subject[lang]}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={lang === 'en' ? 'e.g., Admissions Interview 2026' : 'Tiêu đề thư...'}
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-[#FAF9F2] border border-[#B7CCA0] focus:outline-none focus:border-[#2B4E2B] focus:ring-1 focus:ring-[#2B4E2B] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#2B4E2B] mb-1 font-display">
                {UI_STRINGS.contactSection.form.message[lang]} *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'en' ? 'Type your message or inquiry here...' : 'Nội dung tin nhắn...'}
                className="w-full text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-[#FAF9F2] border border-[#B7CCA0] focus:outline-none focus:border-[#2B4E2B] focus:ring-1 focus:ring-[#2B4E2B] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-full bg-[#2B4E2B] text-[#F6F6EE] font-bold text-xs sm:text-sm font-display hover:bg-[#1E371E] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>{UI_STRINGS.contactSection.form.send[lang]}</span>
              <Send className="w-4 h-4 text-[#E3EDD3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-[#E3EDD3] border border-[#B7CCA0] flex items-center gap-2 text-xs text-[#2B4E2B] font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#2B4E2B]" />
                <span>{UI_STRINGS.contactSection.form.sentToast[lang]}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
