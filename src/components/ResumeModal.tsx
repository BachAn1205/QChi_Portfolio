import React, { useEffect } from 'react';
import { X, Printer, Download, GraduationCap, Award, BookOpen, Briefcase, Heart, Cpu, FileText } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, lang }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-[#F6F6EE] rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-[#335C33]/25 max-h-[95vh] overflow-y-auto">
        {/* Modal Top Actions */}
        <div className="sticky top-0 z-20 -mt-2 -mx-2 mb-4 p-3 bg-[#F6F6EE]/95 backdrop-blur-sm border-b border-[#335C33]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#335C33]" />
            <span className="text-xs sm:text-sm font-bold text-[#335C33]">
              {lang === 'en' ? 'Official Academic Curriculum Vitae' : 'Hồ Sơ Năng Lực Học Thuật Chính Thức'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs font-bold hover:bg-[#284828] transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / Save PDF' : 'In / Lưu PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-[#E3EDD3] text-[#335C33] hover:bg-[#D5E3C0] transition-colors cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Sheet */}
        <div id="resume-printable-area" className="bg-[#FAF9F2] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#335C33]/20 shadow-sm text-[#2C2E2B] space-y-6">
          {/* Header */}
          <div className="text-center pb-4 border-b border-[#335C33]/20">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#335C33] font-serif tracking-tight mb-1">
              PHAN HOANG QUYNH CHI
            </h1>
            <p className="text-xs sm:text-sm text-[#8C5A35] font-semibold mb-2">
              {PERSONAL_INFO.phone} | {PERSONAL_INFO.email} | Dak Lak & Ho Chi Minh City, Vietnam
            </p>
            <p className="text-xs text-[#2C2E2B]/75 italic">
              Specialized in Quantitative Economics, Data Science & Circular Value Chains
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#8C5A35]" />
              <span>EDUCATION</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                <span>VNUHCM - High School for The Gifted, Ho Chi Minh City, Vietnam</span>
                <span className="text-[#8C5A35]">Aug 2024 - Expected Jun 2027</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#2C2E2B]/85 pl-1 leading-relaxed">
                <li><strong className="text-[#335C33]">Specialization:</strong> English | <strong className="text-[#335C33]">GPA:</strong> 9.6/10.0 (Grade 10 & 11) | <strong className="text-[#335C33]">SAT:</strong> 1450 | <strong className="text-[#335C33]">IELTS:</strong> 7.5 Academic</li>
                <li><strong className="text-[#335C33]">Advanced Placement (AP):</strong> Calculus AB (5), Statistics (5), Microeconomics (5), Macroeconomics (5)</li>
                <li>Selected as 1 of only 2 admits from Dak Lak Province to Vietnam's most selective high school</li>
                <li>Top 6% Student of the Grade level (2024 & 2026)</li>
              </ul>

              <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33] pt-2">
                <span>Phan Chu Trinh Secondary School, Dak Lak Province, Vietnam</span>
                <span className="text-[#8C5A35]">Aug 2020 - May 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[#2C2E2B]/85 pl-1 leading-relaxed">
                <li>GPA: 8.8/10.0 (Grade 9) | Provincial Third Prize in English (2023)</li>
              </ul>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8C5A35]" />
              <span>HONORS & AWARDS</span>
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed pl-1">
              <li><strong className="text-[#335C33]">Global Outstanding Writing Content Prize:</strong> Harvard International Review Academic Writing Contest 2026</li>
              <li><strong className="text-[#335C33]">National Top 5 Selection (Ranked 3rd Nationally):</strong> International Economics Olympiad (IEO) 2025 & 2026</li>
              <li><strong className="text-[#335C33]">National Bronze Medalist:</strong> Vietnam Economics Olympiad (VEO) 2025 & 2026</li>
              <li><strong className="text-[#335C33]">Global Finalist (Top 30/2000):</strong> Harvard Crimson Business Case (HCBC) 2025. Sole Vietnamese representative team invited to Harvard campus.</li>
              <li><strong className="text-[#335C33]">Silver Award (Asia & Oceania) & Top 10 Fundamentals:</strong> World Economics Cup (WEC) 2025</li>
              <li><strong className="text-[#335C33]">Top 10 Grand Final (Team Lead):</strong> Vietnam Business Innovation Challenge (VBIC) 2025</li>
              <li><strong className="text-[#335C33]">Top 4 Individual, Trade Division (Final Round):</strong> Aspiring Vietnam Contest 2025</li>
              <li><strong className="text-[#335C33]">Top 50 Vietnam:</strong> ACCA Futurist Scholarship 2025 (Merit-based award for emerging finance talents)</li>
              <li><strong className="text-[#335C33]">Strategic Debate & MUN:</strong> National Champion at DAS-DO Debate Open 2025 (4th Seed); Best Position Paper at VSGMUN 2026 (UNHCR).</li>
            </ul>
          </div>

          {/* Research & Applied Analytics */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8C5A35]" />
              <span>RESEARCH & APPLIED ANALYTICS</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>Student Researcher | Circular Credits for Farmers (C4F): A Conceptual Framework</span>
                  <span className="text-[#8C5A35]">Jan 2026</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  Investigated systemic inequalities in global carbon markets focusing on coffee farming in Gia Lai and Dak Lak. Proposed conceptual blockchain-based circular credit model to decentralize carbon value distribution to verifiable farming actions. Won Global Outstanding Writing Content Prize (Harvard International Review).
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>Co-Author & Data Assistant | QR Code-Based Food Traceability & Consumer Behavior</span>
                  <span className="text-[#8C5A35]">Dec 2025</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  Published in <em>Tennessee Community Service International of Empowerment</em>, 2(2), 18-36. Co-authored with Dr. Do Hai Yen. Executed cross-sectional survey of 400+ consumers in Hanoi and HCMC with econometric modeling on digital traceability and risk perception.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>Student Researcher | Awareness Disparities in Sustainable Development & Career Choice</span>
                  <span className="text-[#8C5A35]">2024</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  Conducted urban-rural stratified cross-sectional survey among 200 high school students in Dak Lak. Applied ANOVA and binary logistic regression (83.5% accuracy, OR = 3.482).
                </p>
              </div>
            </div>
          </div>

          {/* Entrepreneurship & Community Impact */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#8C5A35]" />
              <span>ENTREPRENEURSHIP & COMMUNITY IMPACT</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>CAFLOOP (Green Coffee Husk Project) | Founder</span>
                  <span className="text-[#8C5A35]">Sep 2024 - Present</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  Circular venture upcycling CO2-emitting coffee husks in Dak Lak into commercial Cascara tea. Tracked COGS, structured budgets, optimized pricing, integrated QR traceability, and reinvested early profits to fund school supplies in Buon Drang Phok.
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>T’rưng Cultural Education Project | Founder & Organizer</span>
                  <span className="text-[#8C5A35]">Nov 2024 - Present</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  Synthesized indigenous T'rưng oral heritage into structured curriculum. Coordinated workshops across 12+ schools engaging ~2,300 students. Managed media channel with 5,000+ followers and YouTube archive (10,000+ views).
                </p>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row justify-between font-bold text-[#335C33]">
                  <span>Dakonomics Club | Founder & President</span>
                  <span className="text-[#8C5A35]">May 2025 - Present</span>
                </div>
                <p className="text-[#2C2E2B]/85 mt-1 leading-relaxed">
                  First high-school economics club in Dak Lak. Managed 9-person core team across 5 schools; organized Dakonomics Green Ideas Competition (SDG 12) with entrants from 18 provinces and expert workshops.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Leadership & Additional Experience */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#8C5A35]" />
              <span>ACADEMIC LEADERSHIP & VOLUNTEERISM</span>
            </h2>
            <div className="space-y-2 text-xs sm:text-sm text-[#2C2E2B]/85 leading-relaxed">
              <p><strong className="text-[#335C33]">Shark Club & Geniusstar:</strong> Head of Expert at VNUHCM economics club; designed curricula on supply-demand elasticity and Nash Equilibrium simulation.</p>
              <p><strong className="text-[#335C33]">Community Volunteer Initiatives:</strong> Whisper of the Wild (4,000,000 VND net profit for Cu Chi Wildlife Rescue); Ea Wer Project (77 bicycles and 2 smart TVs to primary students in Dak Lak); VIASM Math Open Day logistics & US Boarding School Fair translator.</p>
              <p><strong className="text-[#335C33]">NSYSU Taiwan Science & Innovation Camp (Jul 2026):</strong> Fully-funded delegate (100% scholarship) conducting data-driven materials research with Linux HPC, C++, VESTA, and DFT; pitched conceptual wastewater purification startup.</p>
              <p><strong className="text-[#335C33]">SI CAFE Internship (Jul - Aug 2025):</strong> Shadowed supply chain operations and data entry at Dak Lak coffee facility.</p>
            </div>
          </div>

          {/* Arts, Skills & Interests */}
          <div>
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335C33] pb-1 border-b border-[#335C33]/25 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#8C5A35]" />
              <span>ARTS, SKILLS & INTERESTS</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2C2E2B]/85">
              <div>
                <p><strong className="text-[#335C33]">Arts:</strong> Traditional T’rưng Artist (Soloist at "Thanh Am Dat Viet" for ~150 attendees); International Exhibitor ("Along the Waters of Srepok 3 Hydropower Plant" at Museo ning Angeles, Philippines, Jul 2026).</p>
                <p className="mt-1.5"><strong className="text-[#335C33]">Languages:</strong> Vietnamese (Native), English (IELTS 7.5 Academic / SAT 1450), Japanese (Basic).</p>
              </div>
              <div>
                <p><strong className="text-[#335C33]">Technical & Analytical:</strong> Basic Econometrics, ANOVA, Binary Logistic Regression, MS Excel/Google Sheets financial modeling, SPSS, Canva, Basic C++/Linux HPC, VESTA, DFT.</p>
                <p className="mt-1.5"><strong className="text-[#335C33]">Interests:</strong> T'rưng Performing, Game Theory, Swimming, Badminton, Strategic Debate & MUN.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#335C33] text-[#F6F6EE] text-xs sm:text-sm font-bold hover:bg-[#284828] transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close CV Viewer' : 'Đóng Xem Hồ Sơ'}
          </button>
        </div>
      </div>
    </div>
  );
};
