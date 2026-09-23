import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  FileText,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Globe,
  Building,
} from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, UI_STRINGS } from '../data/content';

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
    // Build mailto link with encoded parameters
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Vision Statement Banner */}
      <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#335C33]/20 shadow-md space-y-5">
        <div className="section-badge">
          <Sparkles className="w-3.5 h-3.5 text-[#8C5A35]" />
          <span>{UI_STRINGS.contactSection.badge[lang]}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#335C33] font-serif tracking-tight">
          {UI_STRINGS.contactSection.heading[lang]}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#2C2E2B]/85 leading-relaxed font-serif italic max-w-4xl">
          "{UI_STRINGS.contactSection.visionText[lang]}"
        </p>

        <p className="text-xs sm:text-sm text-[#8C5A35] font-medium leading-relaxed max-w-3xl">
          {UI_STRINGS.contactSection.subtext[lang]}
        </p>
      </div>

      {/* Main Grid: Form & Direct Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#FAF9F2] rounded-3xl p-6 sm:p-8 border border-[#335C33]/15 shadow-sm space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#335C33] font-serif">
              {lang === 'en' ? 'Direct Inquiry Form' : 'Gửi Thư Trực Tiếp'}
            </h2>
            <p className="text-xs sm:text-sm text-[#8C5A35]">
              {lang === 'en'
                ? 'Send a direct message to discuss admissions, research collaborations, or academic inquiries.'
                : 'Trao đổi tuyển sinh, cơ hội nghiên cứu học thuật hoặc dự án cộng đồng.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#335C33] mb-1.5">
                {UI_STRINGS.contactSection.form.name[lang]} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={lang === 'en' ? 'e.g., Admissions Officer / Prof. Jane Doe' : 'Họ và tên hoặc chức danh...'}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6F6EE] border border-[#335C33]/25 focus:outline-none focus:border-[#335C33] focus:ring-1 focus:ring-[#335C33] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#335C33] mb-1.5">
                  {UI_STRINGS.contactSection.form.email[lang]} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@university.edu"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6F6EE] border border-[#335C33]/25 focus:outline-none focus:border-[#335C33] focus:ring-1 focus:ring-[#335C33] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-[#335C33] mb-1.5">
                  {UI_STRINGS.contactSection.form.institution[lang]}
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder={lang === 'en' ? 'e.g., Admissions Committee' : 'Trường Đại học / Tổ chức...'}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6F6EE] border border-[#335C33]/25 focus:outline-none focus:border-[#335C33] focus:ring-1 focus:ring-[#335C33] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#335C33] mb-1.5">
                {UI_STRINGS.contactSection.form.subject[lang]}
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={lang === 'en' ? 'e.g., Undergraduate Admissions 2026' : 'Chủ đề trao đổi...'}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6F6EE] border border-[#335C33]/25 focus:outline-none focus:border-[#335C33] focus:ring-1 focus:ring-[#335C33] transition-all"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-[#335C33] mb-1.5">
                {UI_STRINGS.contactSection.form.message[lang]} *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={lang === 'en' ? 'Enter your message or questions...' : 'Nhập nội dung trao đổi...'}
                className="w-full text-xs sm:text-sm px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#F6F6EE] border border-[#335C33]/25 focus:outline-none focus:border-[#335C33] focus:ring-1 focus:ring-[#335C33] transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs sm:text-sm font-bold shadow-md hover:bg-[#284828] active:scale-95 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#E3EDD3]" />
                <span>{UI_STRINGS.contactSection.form.send[lang]}</span>
              </button>

              {submitted && (
                <span className="text-xs text-[#335C33] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#335C33]" />
                  <span>{UI_STRINGS.contactSection.form.sentToast[lang]}</span>
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Direct Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF9F2] rounded-3xl p-6 sm:p-8 border border-[#335C33]/15 shadow-sm space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#335C33] font-serif">
              {lang === 'en' ? 'Official Candidate Channels' : 'Kênh Liên Lạc Trực Tiếp'}
            </h3>

            <div className="space-y-4">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F6F6EE] border border-[#335C33]/15 hover:border-[#335C33] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center shrink-0 group-hover:bg-[#335C33] group-hover:text-[#F6F6EE] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5A35] block">
                    {lang === 'en' ? 'Primary Academic Email' : 'Email Học Thuật'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#335C33] group-hover:underline break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F6F6EE] border border-[#335C33]/15 hover:border-[#335C33] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center shrink-0 group-hover:bg-[#335C33] group-hover:text-[#F6F6EE] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5A35] block">
                    {lang === 'en' ? 'Direct Phone / WhatsApp' : 'Số Điện Thoại / Zalo'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#335C33] group-hover:underline">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F6F6EE] border border-[#335C33]/15">
                <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5A35] block">
                    {lang === 'en' ? 'Geographic Base' : 'Địa Bàn Học Tập & Hoạt Động'}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#335C33]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F6F6EE] border border-[#335C33]/15 hover:border-[#335C33] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E3EDD3] text-[#335C33] flex items-center justify-center shrink-0 group-hover:bg-[#335C33] group-hover:text-[#F6F6EE] transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5A35] block">
                    LinkedIn Network
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#335C33] group-hover:underline">
                    linkedin.com/in/quynh-chi-phan
                  </span>
                </div>
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E3EDD3] text-[#335C33] text-xs sm:text-sm font-bold border border-[#335C33]/20 hover:bg-[#D5E3C0] active:scale-95 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#8C5A35]" />
                <span>{lang === 'en' ? 'View & Download Full Resume PDF' : 'Xem & Tải Toàn Bộ Hồ Sơ (PDF)'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
