import { ProjectItem, MetricCardData, AccordionGroup } from '../types';

export const PERSONAL_INFO = {
  name: 'Phan Hoàng Quỳnh Chi',
  nameAscii: 'Phan Hoang Quynh Chi',
  phone: '(+84) 972 582 580',
  email: 'student242706@ptnk.edu.vn',
  location: 'Dak Lak & Ho Chi Minh City, Vietnam',
  school: 'VNU-HCM High School for the Gifted (Phổ thông Năng khiếu)',
  linkedin: 'https://linkedin.com/in/quynh-chi-phan',
  github: 'https://github.com',
};

export const UI_STRINGS = {
  nav: {
    home: { en: 'Home', vi: 'Trang Chủ' },
    research: { en: 'Research & Enterprise', vi: 'Nghiên Cứu & Khởi Nghiệp' },
    impact: { en: 'Culture & Impact', vi: 'Văn Hoá & Tác Động' },
    profile: { en: 'Full Profile / CV', vi: 'Hồ Sơ Năng Lực' },
    contact: { en: 'Contact & Vision', vi: 'Liên Hệ & Tầm Nhìn' },
    resumeButton: { en: 'Resume PDF', vi: 'Hồ Sơ PDF' },
  },
  hero: {
    badge: { en: 'Admissions Portfolio 2026', vi: 'Hồ Sơ Tuyển Sinh Đại Học 2026' },
    name: 'PHAN HOÀNG QUỲNH CHI',
    subtitle: {
      en: 'Curious by nature. Strategic by thought. Driven to create.',
      vi: 'Tò mò từ bản năng. Chiến lược trong tư duy. Dấn thân để kiến tạo.',
    },
    tagline: {
      en: "Bridging the cultural heartbeat of Vietnam's Central Highlands with predictive analytics, economic systems, and circular innovation.",
      vi: 'Giao thoa giữa nhịp đập văn hoá Tây Nguyên với phân tích dữ liệu dự báo, hệ thống kinh tế và đổi mới tuần hoàn.',
    },
    ctaWork: { en: 'Explore My Work', vi: 'Khám Phá Dự Án' },
    ctaResume: { en: 'Download Full Resume (PDF)', vi: 'Tải Hồ Sơ Đầy Đủ (PDF)' },
    quickFacts: [
      { label: { en: 'VNUHCM High School for the Gifted', vi: 'THPT Chuyên Năng Khiếu - ĐHQG-HCM' }, icon: 'GraduationCap' },
      { label: { en: 'Dak Lak, Vietnam', vi: 'Đắk Lắk, Việt Nam' }, icon: 'MapPin' },
      { label: { en: 'Economics & Data Science', vi: 'Kinh Tế Học & Khoa Học Dữ Liệu' }, icon: 'BarChart2' },
    ],
  },
  about: {
    badge: { en: 'About Me', vi: 'Giới Thiệu Bản Thân' },
    title: {
      en: 'The Mind of an Analyst. The Heart of the Highlands.',
      vi: 'Trí Tuệ Của Nhà Phân Tích. Trái Tim Của Đại Ngàn.',
    },
    paragraphs: {
      en: [
        "Growing up in Dak Lak, the coffee capital of Vietnam, my childhood was defined by two distinct sensory memories: the resonant echoes of the indigenous T'rưng instrument fading through neighborhood loudspeakers, and the acrid smell of coffee husks burning along the highways. For a long time, I accepted these simply as the background of my hometown.",
        "But as I grew older, the data began to tell a different, more urgent story. I learned that the 1.6 million tons of agricultural waste burned annually in Vietnam generated 1.8 million tons of CO2—stripping farmers of over $80 million in potential carbon market value simply because they lacked the Data Science tools for Measurement, Reporting, and Verification (MRV). Similarly, behind the stage lights, T'rưng artisans were abandoning their craft because cultural nostalgia alone could not sustain a livelihood without a viable economic ecosystem.",
        "These harsh realities taught me a vital lesson: empathy is merely a starting point. To protect what I love, I need empirical tools. Economics provides me with the systems-thinking required to design sustainable value chains, while Data Science equips me with the evidence needed to transform invisible assets—from a musical note to a carbon credit—into measurable, equitable impact. I don't just crunch numbers; I code solutions that protect the soil and elevate the soul of the Central Highlands.",
      ],
      vi: [
        "Lớn lên tại Đắk Lắk — thủ phủ cà phê của Việt Nam, tuổi thơ của tôi được định hình bởi hai miền ký ức đối lập: thanh âm ngân vang của tiếng đàn T'rưng vọng qua loa phát thanh xóm làng, và mùi khói khét lẹt của vỏ cà phê bị đốt dọc theo những triền quốc lộ. Suốt nhiều năm, tôi từng nghĩ đó chỉ là bối cảnh đời thường của quê hương.",
        "Nhưng khi lớn lên, những con số bắt đầu cất lên một câu chuyện khác, cấp bách hơn nhiều. Tôi nhận ra 1,6 triệu tấn phụ phẩm nông nghiệp bị đốt mỗi năm tại Việt Nam đã thải ra 1,8 triệu tấn CO2 — tước đi của người nông dân hơn 80 triệu USD giá trị tín chỉ carbon tiềm năng, chỉ vì họ thiếu các công cụ Khoa học Dữ liệu để Đo lường, Báo cáo và Thẩm tra (MRV). Tương tự, đằng sau ánh đèn sân khấu, các nghệ nhân đàn T'rưng dần bỏ nghề vì nỗi hoài niệm văn hoá đơn thuần không thể nuôi sống gia đình nếu thiếu một hệ sinh thái kinh tế tự chủ.",
        "Thực tế khắc nghiệt ấy dạy tôi một bài học cốt lõi: lòng trắc ẩn chỉ là điểm khởi đầu. Để bảo vệ những điều mình yêu thương, tôi cần những công cụ thực nghiệm. Kinh tế học trao cho tôi tư duy hệ thống để thiết kế chuỗi giá trị bền vững; còn Khoa học Dữ liệu trang bị bằng chứng để biến những tài sản vô hình — từ một nốt nhạc dân tộc đến một tín chỉ carbon — thành tác động đo lường được và công bằng. Tôi không chỉ xử lý số liệu; tôi xây dựng giải pháp để bảo vệ mảnh đất và thắp sáng tâm hồn của vùng đất Tây Nguyên.",
      ],
    },
    quote: {
      en: '"Empathy is merely a starting point. To protect what I love, I need empirical tools."',
      vi: '"Lòng trắc ẩn chỉ là điểm khởi đầu. Để bảo vệ những gì mình trân quý, tôi cần những công cụ thực nghiệm."',
    },
  },
  bentoTitle: {
    en: 'Academic Excellence & Verified Impact',
    vi: 'Năng Lực Học Thuật & Tác Động Thực Nghiệm',
  },
  bentoSubtitle: {
    en: 'Key quantitative metrics from standardized testing, global competitions, and grassroots initiatives.',
    vi: 'Các chỉ số định lượng nổi bật từ khảo thí chuẩn hóa, đấu trường quốc tế và dự án thực địa.',
  },
  pillars: {
    title: { en: 'Three Pillars of Purpose', vi: 'Ba Trụ Cột Năng Lực' },
    subtitle: {
      en: 'A cohesive architecture connecting rigorous analytics, community empathy, and competitive excellence.',
      vi: 'Cấu trúc năng lực đồng nhất kết nối tư duy phân tích, trái tim cộng đồng và bản lĩnh học thuật.',
    },
    mind: {
      title: { en: 'The Mind: Research & Enterprise', vi: 'Trí Tuệ: Nghiên Cứu & Khởi Nghiệp' },
      desc: {
        en: 'Econometric modeling, circular-economy startup CAFLOOP, international materials science at NSYSU Taiwan, and high-school economics mentorship.',
        vi: 'Nghiên cứu kinh lượng học, khởi nghiệp kinh tế tuần hoàn CAFLOOP, khoa học vật liệu tại NSYSU Đài Loan và lãnh đạo CLB Kinh tế học.',
      },
      tag: { en: '4 Key Projects', vi: '4 Dự án chính' },
    },
    heart: {
      title: { en: 'The Heart: Culture & Impact', vi: 'Trái Tim: Văn Hoá & Tác Động' },
      desc: {
        en: "Indigenous T'rưng oral curriculum for 2,300+ students, soloist performance, international art exhibition, and 77 bicycles for Ea Wer primary students.",
        vi: "Giáo trình bảo tồn đàn T'rưng cho 2.300+ học sinh, độc tấu dân tộc, triển lãm nghệ thuật quốc tế và dự án trao 77 xe đạp tại Ea Wer.",
      },
      tag: { en: '5 Community Initiatives', vi: '5 Sáng kiến cộng đồng' },
    },
    competitor: {
      title: { en: 'The Competitor: Full Profile & CV', vi: 'Bản Lĩnh: Hồ Sơ Năng Lực Toàn Diện' },
      desc: {
        en: 'Harvard Crimson Business Case Global Finalist (Top 30/2000), International Economics Olympiad (Top 5 Vietnam), World Economics Cup Silver, and perfect AP scores.',
        vi: 'Chung kết toàn cầu Harvard Crimson (Top 30/2000), Tuyển thủ Top 5 IEO Việt Nam, Huy chương Bạc World Economics Cup và điểm tuyệt đối 4 môn AP.',
      },
      tag: { en: 'Verified Honors', vi: 'Thành tích xác thực' },
    },
  },
  contactSection: {
    badge: { en: 'Vision & Prospective Dialogue', vi: 'Tầm Nhìn & Kết Nối' },
    heading: { en: 'Building Transparent Ecosystems', vi: 'Kiến Tạo Những Hệ Sinh Thái Minh Bạch' },
    visionText: {
      en: 'When I hold my degree in Business Analytics and Information Systems, my first destination will be the agricultural supply chains of the Central Highlands. My vision is to build systemic data architectures that make agricultural data transparent, accessible, and actionable—ensuring that the local resources and the people who cultivate them are accurately valued and equitably rewarded.',
      vi: 'Khi cầm trong tay tấm bằng Cử nhân Phân tích Kinh doanh và Hệ thống Thông tin, đích đến đầu tiên của tôi sẽ là chuỗi cung ứng nông sản của vùng đất Tây Nguyên. Tầm nhìn của tôi là xây dựng kiến trúc dữ liệu mang tính hệ thống, giúp dữ liệu nông nghiệp trở nên minh bạch, dễ tiếp cận và có tính hành động — đảm bảo nguồn tài nguyên địa phương và những người canh tác luôn được định giá chuẩn xác và đãi ngộ công bằng.',
    },
    subtext: {
      en: 'Whether you are a university admissions committee seeking a data-driven innovator, a professor looking for a dedicated quantitative researcher, or a partner passionate about circular economies—I would love to connect.',
      vi: 'Dù quý vị là đại diện hội đồng tuyển sinh đang tìm kiếm một ứng viên đổi mới định lượng, một giáo sư cần trợ lý nghiên cứu tận tâm, hay một đối tác cùng chung lý tưởng về kinh tế tuần hoàn — tôi rất vinh hạnh được kết nối.',
    },
    form: {
      name: { en: 'Your Name / Title', vi: 'Họ và tên / Chức danh' },
      email: { en: 'Your Email Address', vi: 'Địa chỉ Email' },
      institution: { en: 'University / Organization', vi: 'Trường Đại học / Tổ chức' },
      subject: { en: 'Subject of Interest', vi: 'Chủ đề quan tâm' },
      message: { en: 'Message / Admissions Inquiries', vi: 'Nội dung tin nhắn / Trao đổi tuyển sinh' },
      send: { en: 'Send Message via Email Client', vi: 'Gửi Thư Trực Tiếp' },
      sentToast: { en: 'Opening email client with your message...', vi: 'Đang mở ứng dụng email với nội dung của bạn...' },
    },
  },
};

export const BENTO_METRICS: MetricCardData[] = [
  {
    id: 'gpa',
    value: '9.6',
    unit: '/10.0',
    label: { en: 'High School GPA (Grade 10 & 11)', vi: 'Điểm Trung Bình (Lớp 10 & 11)' },
    subtext: {
      en: 'Top 6% of the grade at VNUHCM High School for the Gifted; 1 of only 2 admits from Dak Lak Province.',
      vi: 'Top 6% toàn khối THPT Chuyên Năng Khiếu ĐHQG-HCM; 1 trong 2 học sinh Đắk Lắk trúng tuyển.',
    },
    icon: 'GraduationCap',
    badge: { en: 'Top 6% Grade', vi: 'Top 6% Toàn Khối' },
  },
  {
    id: 'standardized',
    value: '1450',
    unit: 'SAT | 7.5 IELTS',
    label: { en: 'Standardized Test Scores', vi: 'Điểm Chuẩn Hóa Quốc Tế' },
    subtext: {
      en: 'IELTS 7.5 Academic (CEFR C1) and SAT 1450 demonstrate advanced English and quantitative proficiency.',
      vi: 'IELTS 7.5 và SAT 1450 khẳng định năng lực tiếng Anh học thuật và tư duy định lượng vững chắc.',
    },
    icon: 'Award',
    badge: { en: 'Standardized Tests', vi: 'Khảo Thí Chuẩn Hóa' },
  },
  {
    id: 'ap',
    value: '4×5',
    unit: 'Perfect Scores',
    label: { en: 'Advanced Placement (AP)', vi: 'Điểm Tuyệt Đối 4 Môn AP' },
    subtext: {
      en: 'Calculus AB (5), Statistics (5), Microeconomics (5), Macroeconomics (5).',
      vi: 'Giải tích AB (5), Thống kê (5), Kinh tế vi mô (5), Kinh tế vĩ mô (5).',
    },
    icon: 'CheckCircle2',
    badge: { en: 'Rigorous Math & Econ', vi: 'Toán & Kinh Tế Chuyên Sâu' },
  },
  {
    id: 'hcbc',
    value: 'Top 30',
    unit: '/2000 Global Teams',
    label: { en: 'Harvard Crimson Business Case 2025', vi: 'Harvard Crimson Business Case 2025' },
    subtext: {
      en: 'Sole Vietnamese representative team invited to compete on the Harvard University campus.',
      vi: 'Đội tuyển duy nhất đại diện Việt Nam được mời tranh tài trực tiếp tại khuôn viên Đại học Harvard.',
    },
    icon: 'Globe',
    badge: { en: 'Harvard Global Finalist', vi: 'Chung Kết Toàn Cầu Harvard' },
  },
  {
    id: 'ieo',
    value: 'Top 5',
    unit: 'Vietnam National Team',
    label: { en: 'International Economics Olympiad (IEO)', vi: 'Olympic Kinh Tế Quốc Tế (IEO)' },
    subtext: {
      en: 'Ranked 3rd Nationally in the Vietnam National Team Selection for 2 consecutive years (2025 & 2026).',
      vi: 'Xếp hạng 3 toàn quốc trong kỳ thi chọn đội tuyển Olympic Kinh tế Quốc tế 2 năm liên tiếp (2025 & 2026).',
    },
    icon: 'Trophy',
    badge: { en: 'Ranked 3rd Nationally', vi: 'Hạng 3 Toàn Quốc' },
  },
  {
    id: 'trung-students',
    value: '2,300+',
    unit: 'Students Engaged',
    label: { en: "T'rưng Cultural Education Project", vi: "Dự Án Giáo Dục Đàn T'rưng" },
    subtext: {
      en: 'Interactive oral heritage workshops across 12+ schools, 5,000+ media followers, and 10,000+ views.',
      vi: 'Chuỗi workshop di sản tại 12+ trường học, 5.000+ người theo dõi và 10.000+ lượt xem lưu trữ.',
    },
    icon: 'Music',
    badge: { en: 'Cultural Preservation', vi: 'Bảo Tồn Di Sản' },
  },
  {
    id: 'ea-wer',
    value: '77',
    unit: 'Bicycles + 2 Smart TVs',
    label: { en: 'Ea Wer Project & Social Reinvestment', vi: 'Dự Án Ea Wer & Tái Đầu Tư Xã Hội' },
    subtext: {
      en: 'Bootstrapping profits and community funds directly equipped primary students in Buon Drang Phok.',
      vi: 'Lợi nhuận từ mô hình kinh doanh và nguồn lực cộng đồng hỗ trợ học sinh tiểu học Buôn Đrăng Phốk.',
    },
    icon: 'HeartHandshake',
    badge: { en: 'Social Reinvestment', vi: 'Tái Đầu Tư Xã Hội' },
  },
  {
    id: 'wildlife-profit',
    value: '4,000,000',
    unit: 'VND Net Profit',
    label: { en: 'Whisper of the Wild Conservation', vi: 'Quỹ Bảo Tồn Động Vật Hoang Dã' },
    subtext: {
      en: 'Managed COGS and supply tracking for eco-products to fund the Cu Chi Wildlife Rescue Station.',
      vi: 'Quản lý giá vốn và chuỗi cung ứng sản phẩm gây quỹ cho Trạm cứu hộ Động vật hoang dã Củ Chi.',
    },
    icon: 'Leaf',
    badge: { en: 'Direct Conservation', vi: 'Bảo Tồn Thực Nghiệm' },
  },
];

export const RESEARCH_PROJECTS: ProjectItem[] = [
  {
    id: 'quantitative-research',
    category: 'research',
    badge: { en: 'Econometrics & Published Research', vi: 'Kinh Lượng Học & Bài Báo Quốc Tế' },
    title: {
      en: 'Revealing Disparities Through Data: 3 Quantitative Studies',
      vi: 'Phơi Bày Bất Bình Đẳng Qua Dữ Liệu: 3 Công Trình Định Lượng',
    },
    subtitle: {
      en: 'Empirical investigations uncovering hidden inequalities across sustainability awareness, food safety, and carbon credit distribution.',
      vi: 'Nghiên cứu thực chứng khám phá khoảng cách nhận thức phát triển bền vững, an toàn thực phẩm và thị trường tín chỉ carbon.',
    },
    role: { en: 'Principal Student Researcher & Co-Author', vi: 'Nhà Nghiên Cứu Học Sinh & Đồng Tác Giả' },
    period: '2024 - 2026',
    summary: {
      en: 'Conducted rigorous quantitative research using SPSS, ANOVA, logistic regression, and econometric models to assess rural-urban gaps and propose decentralized farmer-centric carbon incentives.',
      vi: 'Thực hiện nghiên cứu định lượng chuẩn mực với SPSS, phân tích phương sai ANOVA, hồi quy logistic và mô hình kinh lượng học đánh giá khoảng cách nông thôn - thành thị và cơ chế tín chỉ carbon cho nông dân.',
    },
    tags: ['Econometrics', 'ANOVA', 'Binary Logistic Regression', 'SPSS', 'Blockchain & Carbon Markets', 'Survey Design'],
    keyMetrics: [
      { label: { en: 'Model Accuracy', vi: 'Độ chính xác mô hình' }, value: '83.5%' },
      { label: { en: 'Odds Ratio Boost', vi: 'Tỷ số Odds Ratio' }, value: '3.482×' },
      { label: { en: 'Survey Cohort', vi: 'Cỡ mẫu khảo sát' }, value: '400+ & 200' },
    ],
    details: {
      description: [
        {
          en: 'Study 1: Awareness Disparities in Sustainable Career Choices (2024) — Conducted an urban-rural stratified cross-sectional survey among 200 high school students in Dak Lak. Applying ANOVA and Binary Logistic Regression via SPSS, I constructed a predictive model with 83.5% classification accuracy. The findings proved that a one-unit increase in sustainability awareness boosts the odds of choosing a sustainable career by 3.482 times, quantitatively confirming a severe information-access gap among rural youth.',
          vi: 'Nghiên cứu 1: Bất bình đẳng nhận thức trong lựa chọn nghề nghiệp bền vững (2024) — Khảo sát phân tầng 200 học sinh THPT thành thị và nông thôn tại Đắk Lắk. Ứng dụng ANOVA và hồi quy Logistic nhị phân qua SPSS, xây dựng mô hình dự báo đạt độ chính xác 83,5%. Kết quả chứng minh: mỗi đơn vị tăng lên trong nhận thức bền vững làm tăng xác suất chọn nghề bền vững lên 3,482 lần, phơi bày khoảng trống tiếp cận thông tin nghiêm trọng của thanh thiếu niên nông thôn.',
        },
        {
          en: 'Study 2: QR Code-Based Food Traceability & Consumer Behavior Toward Food Safety in Vietnam (Dec 2025) — Co-authored with Dr. Do Hai Yen (Dean of Economics & Business Administration, Tan Trao University), published in the Tennessee Community Service International of Empowerment Journal, 2(2), 18–36. Designed and executed a cross-sectional survey of 400+ consumers across Hanoi and HCMC, applying econometric models to verify that digital traceability substantially mitigates perceived risk, while revealing that willingness-to-pay remains heavily skewed toward high-income cohorts.',
          vi: 'Nghiên cứu 2: Truy xuất nguồn gốc bằng mã QR và hành vi người tiêu dùng đối với an toàn thực phẩm tại Việt Nam (Tháng 12/2025) — Đồng tác giả cùng TS. Đỗ Hải Yến (Trưởng khoa Kinh tế & QTKD, ĐH Tân Trào), công bố trên tạp chí quốc tế Tennessee Community Service International of Empowerment Journal, 2(2), 18–36. Khảo sát 400+ người tiêu dùng tại Hà Nội và TP.HCM, ứng dụng mô hình kinh lượng học chứng minh truy xuất số giúp giảm thiểu rủi ro cảm nhận, nhưng biên độ hưởng lợi còn tập trung ở nhóm thu nhập cao.',
        },
        {
          en: 'Study 3: Circular Credits for Farmers (C4F): A Conceptual Framework (Jan 2026) — Awarded the Global Outstanding Writing Content Prize by the Harvard International Review Academic Writing Contest. Investigated structural inequities in global voluntary carbon markets, centering on coffee smallholders in Gia Lai and Dak Lak. Proposed a blockchain-anchored circular credit architecture that ties micro-credits directly to verifiable soil and husk recycling behaviors.',
          vi: 'Nghiên cứu 3: Tín chỉ Tuần hoàn cho Nông dân (C4F) (Tháng 01/2026) — Đạt Giải thưởng Nội dung Viết Xuất sắc Toàn cầu từ Tạp chí Đánh giá Quốc tế Harvard (HIR). Phân tích cấu trúc bất bình đẳng trong thị trường carbon tự nguyện tại Gia Lai và Đắk Lắk, đề xuất mô hình tín chỉ tuần hoàn trên nền tảng blockchain nhằm phi tập trung hoá giá trị carbon và gắn trực tiếp với hành vi tái chế phụ phẩm của nông hộ.',
        },
      ],
      publication: 'Tennessee Community Service International of Empowerment Journal, Vol. 2(2), pp. 18-36 (Dec 2025)',
      award: {
        en: 'Global Outstanding Writing Content Prize — Harvard International Review Academic Writing Contest 2026',
        vi: 'Giải Nội dung Xuất sắc Toàn cầu — Cuộc thi Viết Học thuật Tạp chí Quốc tế Harvard 2026',
      },
      sdg: ['SDG 4: Quality Education', 'SDG 8: Decent Work & Economic Growth', 'SDG 12: Responsible Consumption', 'SDG 13: Climate Action'],
    },
    imageType: 'data',
  },
  {
    id: 'cafloop-startup',
    category: 'research',
    badge: { en: 'Circular Economy & Entrepreneurship', vi: 'Kinh Tế Tuần Hoàn & Vận Hành Doanh Nghiệp' },
    title: {
      en: 'CAFLOOP (Green Coffee Husk Project) & Business Operations',
      vi: 'Dự Án Khởi Nghiệp CAFLOOP & Vận Hành Chuỗi Giá Trị Cà Phê',
    },
    subtitle: {
      en: 'Transforming CO2-emitting agricultural waste into commercial Cascara tea with end-to-end unit economics and supply chain traceability.',
      vi: 'Biến phụ phẩm vỏ cà phê phát thải CO2 thành trà Cascara thương mại với bài toán kinh tế điểm hòa vốn và minh bạch nguồn gốc.',
    },
    role: { en: 'Founder & Product Strategist', vi: 'Nhà Sáng Lập & Chiến Lược Sản Phẩm' },
    period: 'Sep 2024 - Present',
    summary: {
      en: 'Bootstrapped an eco-venture converting discarded coffee husks into value-added Cascara tea. Modeled COGS, unit economics, dynamic pricing, and implemented QR traceability while reinvesting proceeds into local schooling.',
      vi: 'Tự khởi tạo dự án tái chế vỏ cà phê thành trà Cascara chất lượng cao. Kiểm soát chi phí giá vốn hàng bán (COGS), định giá tối ưu, tích hợp tem QR truy xuất và tái đầu tư 100% lợi nhuận ban đầu cho học sinh nghèo.',
    },
    tags: ['Circular Economy', 'COGS Analysis', 'Unit Economics', 'Cascara Upcycling', 'Supply Chain', 'QR Traceability'],
    keyMetrics: [
      { label: { en: 'Coffee Waste Upcycled', vi: 'Vỏ cà phê tái chế' }, value: '500+ kg' },
      { label: { en: 'CO2 Abatement', vi: 'Cắt giảm khí thải' }, value: 'Measurable' },
      { label: { en: 'School Aid Fund', vi: 'Quỹ hỗ trợ trường học' }, value: '100% Profit' },
    ],
    details: {
      description: [
        {
          en: 'Venture Inception & Operational Engineering: In Dak Lak, over 1.6 million tons of coffee husks are traditionally burned or left to decompose anaerobically, generating heavy greenhouse emissions. CAFLOOP engineers a closed-loop model: procuring ripe coffee husks from local family farms, standardizing solar dehydration protocols, and packaging commercial Cascara tea rich in antioxidants.',
          vi: 'Khởi xướng & Kỹ thuật Vận hành: Tại Đắk Lắk, hàng trăm nghìn tấn vỏ cà phê bị đốt bỏ ven đường tạo khói độc hại hoặc phân huỷ yếm khí sinh khí nhà kính. CAFLOOP thiết lập chu trình khép kín: thu mua vỏ cà phê chín từ nông hộ, chuẩn hóa quy trình phơi sấy năng lượng mặt trời và đóng gói thành phẩm trà Cascara giàu chất chống oxy hóa.',
        },
        {
          en: 'Managerial Accounting & Cost Optimization: Structured detailed spreadsheets tracking Cost of Goods Sold (COGS), raw husk procurement, biodegradable food-grade packaging, and labor costs. Optimized tiered pricing strategies for urban coffee shops and conscious consumers to achieve rapid operational break-even.',
          vi: 'Kế toán Quản trị & Tối ưu Chi phí: Xây dựng bảng theo dõi chi tiết giá vốn hàng bán (COGS), chi phí thu mua vỏ tươi, bao bì tự hủy thân thiện môi trường và nhân công sơ chế. Tối ưu hoá chiến lược định giá theo phân khúc nhằm nhanh chóng đạt điểm hòa vốn vận hành.',
        },
        {
          en: 'Industry Apprenticeship at SI CAFE (Dak Lak Branch, Jul - Aug 2025): Shadowed commercial supply-chain logistics, audited green bean grading protocols, and supported digital warehouse inventories at a regional coffee facility to ground theoretical financial models in factory-floor reality.',
          vi: 'Thực tập Thực tế tại SI CAFE (Chi nhánh Đắk Lắk, 07 - 08/2025): Quan sát quy trình chuỗi cung ứng thực tế, tham gia kiểm định phân loại hạt và hỗ trợ nhập liệu kho tại cơ sở chế biến cà phê địa phương để đối chiếu kiến thức lý thuyết với vận hành công nghiệp.',
        },
        {
          en: 'Harvard Crimson Business Case (2025): As Team Lead for Finance & Strategy, co-architected a predictive revenue-forecasting model and constructed a mock Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV) dashboard, leading the team to become the sole Vietnamese finalist invited to Harvard campus.',
          vi: 'Harvard Crimson Business Case (2025): Trưởng nhóm Tài chính & Chiến lược, đồng thiết kế mô hình dự báo doanh thu và bảng điều khiển tỷ số CAC/LTV giả lập, dẫn dắt đội tuyển trở thành đại diện Việt Nam duy nhất tiến vào vòng chung kết tại Đại học Harvard.',
        },
      ],
      sdg: ['SDG 12: Responsible Consumption', 'SDG 13: Climate Action', 'SDG 8: Decent Work & Economic Growth'],
    },
    imageType: 'coffee',
  },
  {
    id: 'nsysu-taiwan-lab',
    category: 'research',
    badge: { en: 'International Computational Lab', vi: 'Phòng Thí Nghiệm Tính Toán Quốc Tế' },
    title: {
      en: 'National Sun Yat-sen University (NSYSU) Science & Innovation Camp',
      vi: 'Trại Hè Khoa Học & Đổi Mới Sáng Tạo NSYSU Đài Loan',
    },
    subtitle: {
      en: 'Fully-funded research fellowship in computational materials science, high-performance computing, and empirical data auditing.',
      vi: 'Học bổng 100% nghiên cứu khoa học vật liệu tính toán, môi trường siêu máy tính HPC và tư duy kiểm toán dữ liệu thực chứng.',
    },
    role: { en: 'Fully-Funded Student Researcher (100% Scholarship)', vi: 'Nhà Nghiên Cứu Học Sinh (Học bổng 100%)' },
    period: 'Jul 2026',
    summary: {
      en: 'Collaborated at the Computational Materials Research Lab. Mastered foundational C++, Linux/HPC environments, VESTA crystal modeling, and Density Functional Theory (DFT) to avoid data science "black box" fallacies.',
      vi: 'Làm việc tại Phòng Nghiên cứu Vật liệu Tính toán NSYSU. Làm chủ C++ cơ bản, hệ thống Linux/HPC, phần mềm mô phỏng cấu trúc VESTA và lý thuyết phiếm hàm mật độ (DFT), rèn luyện tư duy tránh cạm bẫy "hộp đen" trong khoa học dữ liệu.',
    },
    tags: ['Materials Science', 'C++', 'Linux HPC', 'VESTA', 'Density Functional Theory', 'Wastewater Purification'],
    keyMetrics: [
      { label: { en: 'Scholarship', vi: 'Suất học bổng' }, value: '100% Funded' },
      { label: { en: 'Final Pitch', vi: 'Đề án chung cuộc' }, value: 'Faculty Commended' },
      { label: { en: 'HPC Skills', vi: 'Kỹ năng tính toán' }, value: 'Linux & VESTA' },
    ],
    details: {
      description: [
        {
          en: 'Overcoming Steep Learning Curves: Selected as a fully-funded high school delegate. Despite entering with no prior computer systems background, collaborated rigorously with international doctoral researchers to navigate terminal commands, execute bash scripts on Linux HPC clusters, and configure atomic parameters.',
          vi: 'Vượt qua đường cong học tập dốc: Được tuyển chọn với học bổng toàn phần 100%. Dù chưa từng có nền tảng lập trình hệ thống trước đó, tôi đã làm việc cùng các nghiên cứu sinh quốc tế để thao tác lệnh terminal, chạy tập lệnh trên cụm siêu máy tính Linux HPC và thiết lập thông số nguyên tử.',
        },
        {
          en: 'Epistemological Takeaway on Data Science: Visualized atomic lattices using VESTA and explored quantum simulations via Density Functional Theory (DFT). The critical insight was recognizing that computational models are only as valid as their grounding in empirical physical constraints—a foundational mindset preventing "black box" blind spots in predictive modeling.',
          vi: 'Bài học tri thức luận về Khoa học Dữ liệu: Mô phỏng mạng tinh thể qua VESTA và tiếp cận mô hình hoá lượng tử qua lý thuyết phiếm hàm mật độ (DFT). Bài học lớn nhất là nhận ra mô hình tính toán chỉ có giá trị khi tôn trọng các giới hạn vật lý thực tế — tư duy nền tảng giúp tôi tránh cạm bẫy "hộp đen" khi xây dựng mô hình dự báo.',
        },
        {
          en: 'Applied Startup Pitch: Formulated and pitched a conceptual data-assisted wastewater purification venture to university faculty, integrating nanomaterial filtration kinetics with decentralized monitoring sensors.',
          vi: 'Đề án Khởi nghiệp Thực nghiệm: Hoàn thiện và thuyết trình trước hội đồng giáo sư đề án khởi nghiệp xử lý nước thải ứng dụng vật liệu mới kết hợp cảm biến quan trắc phân tán.',
        },
      ],
      sdg: ['SDG 6: Clean Water & Sanitation', 'SDG 9: Industry, Innovation & Infrastructure'],
    },
    imageType: 'materials',
  },
  {
    id: 'economic-pedagogy',
    category: 'research',
    badge: { en: 'Academic Leadership & Mentorship', vi: 'Lãnh Đạo Học Thuật & Khai Phóng Tri Thức' },
    title: {
      en: 'Translating Theory into Action: Dakonomics & Economics Mentorship',
      vi: 'Chuyển Hoá Lý Thuyết Thành Hành Động: Dakonomics & Khai Phóng Tư Duy',
    },
    subtitle: {
      en: 'Founding the first high-school economics club in Dak Lak, curating real-world casebanks, and mentoring national championship debate and case teams.',
      vi: 'Sáng lập CLB Kinh tế học THPT đầu tiên tại Đắk Lắk, xây dựng CaseBank thực tế và đào tạo các đội thi đoạt giải quốc gia.',
    },
    role: { en: 'Founder & President (Dakonomics) / Head of Expert (Shark Club)', vi: 'Nhà Sáng Lập & Chủ Tịch (Dakonomics) / Trưởng Ban Chuyên Môn (Shark Club)' },
    period: '2024 - Present',
    summary: {
      en: 'Founded Dakonomics Club with 9-person core team across 5 schools. Launched the "Dakonomics Green Ideas Competition" attracting entrants across 18 provinces for SDG 12. Directed academic curricula on Game Theory and Nash Equilibrium.',
      vi: 'Thành lập CLB Dakonomics với ban điều hành 9 thành viên kết nối 5 trường THPT. Tổ chức cuộc thi Dakonomics Green Ideas thu hút thí sinh từ 18 tỉnh thành hướng đến SDG 12. Thiết kế giáo trình Game Theory và cân bằng Nash sinh động.',
    },
    tags: ['Dakonomics Club', 'Case Competition Design', 'Game Theory', 'Nash Equilibrium', 'Shark Club VNUHCM', 'Youth For Impact'],
    keyMetrics: [
      { label: { en: 'Provinces Engaged', vi: 'Tỉnh thành tham gia' }, value: '18 Provinces' },
      { label: { en: 'High Schools', vi: 'Trường THPT kết nối' }, value: '5 Schools' },
      { label: { en: 'Workshop Attendees', vi: 'Học sinh dự workshop' }, value: '50+ & 200+' },
    ],
    details: {
      description: [
        {
          en: 'Dakonomics Club (Founder & President, May 2025 - Present): Established the pioneering high-school economics society in Dak Lak Province. Built an open-access digital "CaseBank" dissecting local business models, pricing strategies, and agricultural supply barriers.',
          vi: 'CLB Dakonomics (Sáng lập & Chủ tịch, 05/2025 - Hiện tại): Thành lập tổ chức học thuật kinh tế đầu tiên dành cho học sinh THPT tại Đắk Lắk. Xây dựng kho học liệu mở "CaseBank" phân tích các tình huống kinh doanh thực tế, chiến lược giá và nút thắt chuỗi nông sản.',
        },
        {
          en: 'Dakonomics Green Ideas Competition: Conceptualized and spearheaded a national business case contest dedicated to SDG 12 (Responsible Consumption). Reached participants from 18 provinces (including Hanoi and HCMC). Designed rubric matrices, vetted Top 14 semifinals and Top 7 finalists, and coordinated a masterclass with startup mentors from the Vietnam National Startup Support Center.',
          vi: 'Cuộc thi Dakonomics Green Ideas: Khởi xướng và chỉ đạo cuộc thi giải case kinh doanh hướng tới SDG 12 (Tiêu dùng & Sản xuất có trách nhiệm). Tiếp cận học sinh từ 18 tỉnh thành khắp cả nước. Thiết kế thang điểm đánh giá, chọn lọc Top 14 bán kết, Top 7 chung kết và tổ chức chuỗi workshop chuyên môn cùng chuyên gia từ Trung tâm Khởi nghiệp Quốc gia.',
        },
        {
          en: 'Shark Club (VNUHCM) & Geniusstar Mentorship: Directed the academic department of the flagship economics club at High School for the Gifted. Pioneered experiential learning simulations, such as the "Two Ice Cream Shops on a Beach" interactive exercise to allow students to organically deduce the Nash Equilibrium before formally introducing game theoretic formulas.',
          vi: 'Ban Chuyên Môn Shark Club (PTNK) & Geniusstar: Lãnh đạo mảng học thuật tại CLB Kinh tế hàng đầu trường Chuyên Năng Khiếu. Sáng tạo các bài tập mô phỏng tương tác, tiêu biểu là tình huống "Hai quầy kem trên bãi biển" giúp các bạn tự suy luận ra Cân bằng Nash trước khi tiếp cận công thức toán học trừu tượng.',
        },
        {
          en: 'Youth For Impact (Season 12): Private academic coach for Team Lục Long Công Chúa (crowned Season 12 Grand Champions); supported core operations for the Business Training Series impacting 200+ delegates toward SDG 8.6.',
          vi: 'Youth For Impact (Mùa 12): Huấn luyện viên chiến lược cho đội thi Lục Long Công Chúa (đoạt ngôi Quán Quân chung cuộc); tham gia ban vận hành chuỗi tập huấn kinh doanh tác động trực tiếp tới hơn 200 người tham dự.',
        },
      ],
      sdg: ['SDG 4: Quality Education', 'SDG 8: Decent Work', 'SDG 12: Responsible Consumption'],
    },
    imageType: 'data',
  },
];

export const IMPACT_PROJECTS: ProjectItem[] = [
  {
    id: 'trung-education',
    category: 'impact',
    badge: { en: 'Cultural Heritage Preservation', vi: 'Bảo Tồn Di Sản Dân Tộc' },
    title: {
      en: "T'rưng Cultural Education Project: Oral Heritage into Structured Curriculum",
      vi: "Dự Án Giáo Dục Di Sản Đàn T'rưng: Từ Truyền Miệng Đến Giáo Trình Chuẩn Hóa",
    },
    subtitle: {
      en: 'Systematizing the oral traditions of Central Highlands indigenous music into accessible learning modules for younger generations.',
      vi: 'Hệ thống hóa truyền thống âm nhạc truyền miệng Tây Nguyên thành chương trình học sinh động cho thế hệ trẻ.',
    },
    role: { en: 'Founder & Organizer', vi: 'Nhà Sáng Lập & Trưởng Ban Tổ Chức' },
    period: 'Nov 2024 - Present',
    summary: {
      en: "Refusing to let indigenous music become a dormant museum relic, synthesized oral heritage of the T'rưng bamboo instrument into a structured curriculum, coordinating workshops across 12+ schools and engaging ~2,300 students.",
      vi: "Không để âm nhạc bản địa trở thành hiện vật bảo tàng ngủ quên, tôi đúc kết di sản truyền miệng của đàn T'rưng thành bộ giáo trình trực quan, tổ chức biểu diễn tương tác tại 12+ trường học và kết nối ~2.300 học sinh.",
    },
    tags: ["T'rưng Bamboo Instrument", 'Oral History Synthesis', 'School Workshops', 'Digital Preservation', 'Central Highlands Heritage'],
    keyMetrics: [
      { label: { en: 'Students Engaged', vi: 'Học sinh tiếp cận' }, value: '2,300+' },
      { label: { en: 'Schools Partnered', vi: 'Trường học liên kết' }, value: '12+ Schools' },
      { label: { en: 'Media Community', vi: 'Cộng đồng theo dõi' }, value: '5,000+ Followers' },
    ],
    details: {
      description: [
        {
          en: "The Imperative of Active Preservation: In the Central Highlands, the T'rưng is crafted from tuned bamboo tubes arranged like a cascading waterfall. For centuries, its playing techniques were passed down strictly by oral ear-training. As village elders age and modern pop culture dominates, this irreplaceable acoustic heritage faced rapid erasure.",
          vi: "Tính cấp bách của bảo tồn chủ động: Đàn T'rưng của đồng bào Tây Nguyên được chế tác từ các ống nứa tự nhiên, sắp xếp như dòng thác đổ. Trải qua hàng thế kỷ, kỹ thuật chơi đàn chỉ được truyền miệng qua cảm âm. Khi các nghệ nhân lớn tuổi và văn hóa số lan rộng, thanh âm thiêng liêng này đứng trước nguy cơ mai một.",
        },
        {
          en: 'Pedagogical Synthesis: Interviewed folk artisans and music teachers to codify rhythm notations, pentatonic acoustic dynamics, and cultural folklore into structured, multimedia lesson plans adapted for elementary and middle schoolers.',
          vi: 'Hệ thống hóa sư phạm: Trực tiếp phỏng vấn các nghệ nhân dân gian và thầy cô dạy nhạc để ký âm tiết tấu, phân tích thang âm ngũ cung và giai thoại văn hoá thành các bài giảng đa phương tiện dễ hiểu cho học sinh phổ thông.',
        },
        {
          en: 'Grassroots Reach & Digital Archive: Coordinated interactive live-assembly workshops across 12+ schools in Dak Lak, giving ~2,300 young students hands-on tactile experience playing bamboo bars. Managed a cultural channel with 5,000+ followers and built a digitized YouTube archive surpassing 10,000+ views.',
          vi: 'Quy mô thực địa & Lưu trữ số hóa: Điều phối chuỗi workshop trải nghiệm trực tiếp tại hơn 12 trường học tại Đắk Lắk, giúp ~2.300 học sinh tận tay gõ từng phím nứa. Vận hành trang truyền thông văn hoá với hơn 5.000 người theo dõi và kho lưu trữ video đạt hơn 10.000 lượt xem.',
        },
      ],
      sdg: ['SDG 4: Quality Education', 'SDG 11: Sustainable Communities'],
    },
    imageType: 'trung',
    hasAudio: true,
  },
  {
    id: 'artistic-ambassadorship',
    category: 'impact',
    badge: { en: 'Arts & Cultural Diplomacy', vi: 'Nghệ Thuật & Giao Lưu Văn Hoá Quốc Tế' },
    title: {
      en: "The Artist's Voice: Bridging Gaps Through Traditional Music & Visual Arts",
      vi: "Tiếng Nói Người Nghệ Sĩ: Kết Nối Đại Ngàn Qua Âm Nhạc Dân Tộc & Hội Họa",
    },
    subtitle: {
      en: 'Soloist performance for urban audiences and visual arts representation at international gallery exhibition in the Philippines.',
      vi: 'Độc tấu đàn T\'rưng kết nối khán giả đô thị và triển lãm tranh quốc tế tại bảo tàng Philippines.',
    },
    role: { en: "Traditional T'rưng Soloist & International Exhibitor", vi: "Nghệ Sĩ Độc Tấu T'rưng & Tác Giả Triển Lãm Quốc Tế" },
    period: '2025 - 2026',
    summary: {
      en: 'Featured lead soloist at the "Thanh Am Dat Viet" showcase in Ho Chi Minh City (~150 attendees), and featured exhibitor at Museo ning Angeles, Philippines showcasing local ecological narratives.',
      vi: 'Nghệ sĩ độc tấu chính tại chương trình nghệ thuật "Thanh Âm Đất Việt" tại TP.HCM (~150 khán giả) và có tác phẩm được trưng bày tại Bảo tàng Museo ning Angeles, Philippines phản ánh vẻ đẹp sinh thái quê hương.',
    },
    tags: ["T'rưng Soloist", 'Thanh Am Dat Viet', 'Museo ning Angeles', 'Visual Storytelling', 'Cultural Diplomacy'],
    keyMetrics: [
      { label: { en: 'Metropolitan Audience', vi: 'Khán giả thành thị' }, value: '~150 Attendees' },
      { label: { en: 'International Gallery', vi: 'Triển lãm quốc tế' }, value: 'Philippines' },
      { label: { en: 'Mediums', vi: 'Chất liệu sáng tác' }, value: 'Music & Visual Arts' },
    ],
    details: {
      description: [
        {
          en: 'Musical Performance at "Thanh Am Dat Viet" (2025): Performed as the featured lead soloist on the indigenous T\'rưng before an audience of ~150 urban attendees in Ho Chi Minh City. Intentionally used the performance as a cultural bridge, presenting acoustic narratives of the Central Highlands to modern urban youths who had never encountered traditional highland folklore.',
          vi: 'Độc tấu tại "Thanh Âm Đất Việt" (2025): Giữ vai trò nghệ sĩ độc tấu đàn T\'rưng chính trước gần 150 khán giả tại TP.HCM. Tận dụng nghệ thuật biểu diễn như nhịp cầu văn hoá, mang thanh âm đại ngàn đến gần hơn với giới trẻ thành thị vốn ít có cơ hội tiếp xúc với nhạc cụ dân tộc.',
        },
        {
          en: 'International Exhibition at Museo ning Angeles, Philippines (Jul 2026): My original visual artwork, titled "Along the Waters of Srepok 3 Hydropower Plant, Dak Lak," was juried and featured in an international fine arts exhibition. The piece reflects the delicate friction between clean renewable energy infrastructure and indigenous riverine ecosystems.',
          vi: 'Triển lãm Quốc tế tại Museo ning Angeles, Philippines (07/2026): Tác phẩm mỹ thuật "Dọc Dòng Nước Thuỷ Điện Sêrêpôk 3, Đắk Lắk" được tuyển chọn trưng bày tại bảo tàng Museo ning Angeles, Philippines. Tác phẩm kể câu chuyện về sự giao thoa và mâu thuẫn tinh tế giữa công trình năng lượng tái tạo và hệ sinh thái ven sông của đồng bào bản địa.',
        },
      ],
      sdg: ['SDG 11: Sustainable Cities & Communities', 'SDG 17: Partnerships for the Goals'],
    },
    imageType: 'trung',
  },
  {
    id: 'ea-wer-project',
    category: 'impact',
    badge: { en: 'Philanthropy & Grassroots Reinvestment', vi: 'Thiện Nguyện & Tái Đầu Tư Cơ Sở' },
    title: {
      en: 'The Ea Wer Project & Social Reinvestment in Buon Drang Phok',
      vi: 'Dự Án Ea Wer: Trao Phương Tiện Nâng Bước Em Tới Trường Tại Buôn Đrăng Phốk',
    },
    subtitle: {
      en: 'Mobilizing circular startup revenue and community sponsorships to donate 77 bicycles and 2 smart TVs to remote students in Dak Lak.',
      vi: 'Huy động doanh thu từ khởi nghiệp xanh và nguồn lực xã hội trao tặng 77 xe đạp và 2 Smart TV cho học sinh vùng sâu.',
    },
    role: { en: 'Project Coordinator', vi: 'Điều Phối Viên Dự Án' },
    period: '2024 - Present',
    summary: {
      en: 'Reinvested profits from CAFLOOP and rallied community donors to provide sturdy bicycles and digital smart TVs for underserved children facing miles of treacherous dirt roads to reach school.',
      vi: 'Tái đầu tư lợi nhuận từ dự án CAFLOOP và kết nối các nhà hảo tâm trao tặng xe đạp chuyên dụng và Smart TV dạy học số cho học sinh tiểu học buôn làng xa xôi.',
    },
    tags: ['Ea Wer Village', 'Buon Drang Phok', '77 Bicycles', '2 Smart TVs', 'Educational Equity', 'Direct Impact'],
    keyMetrics: [
      { label: { en: 'Bicycles Donated', vi: 'Xe đạp trao tặng' }, value: '77 Bikes' },
      { label: { en: 'Smart TVs Installed', vi: 'Smart TV trang bị' }, value: '2 TVs' },
      { label: { en: 'Target Location', vi: 'Địa bàn triển khai' }, value: 'Buon Drang Phok' },
    ],
    details: {
      description: [
        {
          en: "Field Observations at Buon Drang Phok: During home visits in the remote commune of Ea Wer, the physical barrier to literacy became visceral. Primary students walked up to 8–10 kilometers daily under scorching heat or muddy monsoon rains. Seeing their families' stripped-down, rust-coated motorbikes held together with wire made it obvious that transportation was the direct fulcrum holding up their schooling.",
          vi: "Khảo sát thực địa tại Buôn Đrăng Phốk: Trong những chuyến thăm các gia đình khó khăn tại xã vùng biên Ea Wer, rào cản đến trường hiện lên đầy xót xa. Các em nhỏ phải đi bộ 8-10 km mỗi ngày dưới nắng gắt hoặc bùn lầy mùa mưa. Nhìn những chiếc xe máy cũ nát, gỉ sét chằng dây thép của cha mẹ các em, tôi hiểu phương tiện đi lại chính là điểm tựa thiết yếu giữ vững giấc mơ con chữ.",
        },
        {
          en: 'Tangible Resource Deployment: Coordinated logistics to assemble, deliver, and warranty 77 brand-new bicycles engineered for unpaved rural terrain. Concurrently installed 2 55-inch smart TVs in primary classrooms to introduce digitized visual curricula and internet-connected reading modules.',
          vi: 'Triển khai Nguồn lực Thực chất: Điều phối vận chuyển, lắp ráp và bảo hành 77 chiếc xe đạp khung chịu lực phù hợp đường đất đồi dốc. Đồng thời trao tặng và lắp đặt 2 Smart TV 55-inch tại các điểm trường tiểu học để hỗ trợ bài giảng trực quan số hoá.',
        },
        {
          en: 'Closed-Loop Philosophy: This initiative proved that sustainable ventures like CAFLOOP must not remain abstract economic theories on slide decks, but must directly recirculate economic surplus into the human dignity of the communities from which raw materials are harvested.',
          vi: 'Triết lý vòng lặp tuần hoàn: Dự án là minh chứng sống động rằng các mô hình kinh tế tuần hoàn như CAFLOOP không thể chỉ dừng lại trên trang giấy, mà phải tuần hoàn lợi nhuận để nâng cao phẩm giá và cơ hội của chính những con người trên mảnh đất sản sinh ra nguồn nguyên liệu.',
        },
      ],
      sdg: ['SDG 4: Quality Education', 'SDG 10: Reduced Inequalities'],
    },
    imageType: 'bicycles',
  },
  {
    id: 'community-advocacy',
    category: 'impact',
    badge: { en: 'Wildlife Conservation & Road Safety', vi: 'Bảo Tồn Hoang Dã & An Toàn Giao Thông' },
    title: {
      en: 'Environmental & Community Advocacy: Whisper of the Wild & Hoa Sen Bridge',
      vi: 'Hành Động Vì Cộng Đồng: Whisper of the Wild & Liên Minh Cầu Hoa Sen',
    },
    subtitle: {
      en: 'Directing product-based fundraising for pangolin & wildlife rescue and co-organizing cross-border traffic safety for highland children.',
      vi: 'Gây quỹ thương mại ủng hộ cứu hộ thú hoang dã và tổ chức chiến dịch an toàn giao thông cho học sinh buôn làng.',
    },
    role: { en: 'Head of External Relations & Regional Co-Organizer', vi: 'Trưởng Ban Đối Ngoại & Đồng Điều Phối Khu Vực' },
    period: '2024 - Present',
    summary: {
      en: 'Generated 4,000,000 VND net profit for the Cu Chi Wildlife Rescue Station via eco-stationery. Distributed 500 reflective wristbands and hosted safety workshops in Dak Lak with international youth alliances.',
      vi: 'Tạo ra 4.000.000 VNĐ lợi nhuận ròng ủng hộ Trạm Cứu hộ Động vật hoang dã Củ Chi qua sản phẩm văn phòng phẩm sinh thái. Trao 500 vòng phản quang an toàn giao thông cùng liên minh thanh niên quốc tế.',
    },
    tags: ['Wildlife Rescue Cu Chi', '4,000,000 VND Profit', 'Hoa Sen Bridge Alliance', 'IKU & KIYA Korea', 'VIASM Math Open Day'],
    keyMetrics: [
      { label: { en: 'Net Profit Raised', vi: 'Lợi nhuận gây quỹ' }, value: '4,000,000 VNĐ' },
      { label: { en: 'Reflective Bands', vi: 'Vòng phản quang' }, value: '500 Units' },
      { label: { en: 'Global Alliance', vi: 'Mạng lưới quốc tế' }, value: 'IKU & KIYA' },
    ],
    details: {
      description: [
        {
          en: 'Whisper of the Wild (Head of External Relations, 2024 - Present): Monetized conservation awareness through a product-based social campaign. Designed custom eco-notebooks and illustrated red packets featuring endangered Vietnamese species like the pangolin and gibbon. Supervised manufacturing logistics and tracked inventory spreadsheets, donating 4,000,000 VND in direct net profit to the Cu Chi Wildlife Rescue Station.',
          vi: 'Whisper of the Wild (Trưởng ban Đối ngoại, 2024 - Hiện tại): Thương mại hoá thông điệp bảo tồn qua các sản phẩm sáng tạo. Thiết kế sổ tay tái chế và bao lì xì minh hoạ các loài động vật quý hiếm như tê tê, vượn đen má vàng. Giám sát giá thành và xuất nhập kho, quyên góp toàn bộ 4.000.000 VNĐ lợi nhuận ròng cho Trạm Cứu hộ Động vật Hoang dã Củ Chi.',
        },
        {
          en: 'Hoa Sen Bridge Alliance (Jul 2026 - Present): Partnered with the International Kabataan Union (IKU) and Korea International Youth Alliance (KIYA) on a youth-driven road safety initiative. Out of 35,000 reflective wristbands distributed globally, personally coordinated and distributed 500 wristbands and delivered interactive road safety workshops for students in disadvantaged Dak Lak communes lacking highway lighting.',
          vi: 'Liên minh Cầu Hoa Sen (Tháng 07/2026 - Hiện tại): Đồng hành cùng Liên minh Thanh niên Quốc tế Kabataan (IKU) và Hiệp hội Thanh niên Quốc tế Hàn Quốc (KIYA) trong chiến dịch an toàn giao thông học đường. Trực tiếp tiếp nhận và phân phát 500 vòng tay phản quang cùng các buổi hướng dẫn an toàn khi đi học trong đêm tối cho học sinh nghèo tại các cung đường quốc lộ thiếu đèn chiếu sáng ở Đắk Lắk.',
        },
        {
          en: 'Public Academic Service: Facilitated logistical operations for the Vietnam Institute for Advanced Study in Mathematics (VIASM) Math Open Day, and provided simultaneous translation for visiting delegates at US Boarding School Fairs.',
          vi: 'Hoạt động Hỗ trợ Học thuật: Đảm nhiệm điều phối hậu cần tại Ngày hội Toán học Mở của Viện Nghiên cứu Cao cấp về Toán (VIASM), đồng thời làm phiên dịch viên cho các đại diện tuyển sinh tại Ngày hội Du học Trung học Nội trú Hoa Kỳ.',
        },
      ],
      sdg: ['SDG 15: Life on Land', 'SDG 3: Good Health & Well-being', 'SDG 17: Partnerships for the Goals'],
    },
    imageType: 'wildlife',
  },
  {
    id: 'debate-public-policy',
    category: 'impact',
    badge: { en: 'Debate, MUN & Public Policy', vi: 'Tranh Biện, MUN & Chính Sách Công' },
    title: {
      en: 'The Logical Adjudicator: Interrogating Incentives & Public Policy',
      vi: 'Người Trọng Tài Tư Duy: Bóc Tách Động Cơ & Phân Tích Chính Sách Công',
    },
    subtitle: {
      en: 'National debate championship title, UNHCR Best Position Paper at VSGMUN, and breaking adjudicator at national tournaments.',
      vi: 'Vô địch Tranh biện Quốc gia DAS-DO 2025, Bài lập trường xuất sắc nhất VSGMUN 2026 và giám khảo chuyên môn.',
    },
    role: { en: 'National Champion Competitor & Breaking Adjudicator', vi: 'Nhà Vô Địch Quốc Gia & Trọng Tài Tranh Biện' },
    period: '2024 - 2026',
    summary: {
      en: 'Assessing complex social motions through the lens of institutional economics, empirical trade-offs, and stakeholder incentives rather than empty rhetoric.',
      vi: 'Đánh giá các vấn đề chính sách phức tạp qua lăng kính kinh tế học thể chế, sự đánh đổi thực nghiệm và động cơ các bên thay vì sự hùng biện suông.',
    },
    tags: ['DAS-DO Debate Champion', 'VSGMUN Best Position Paper', 'UNHCR Committee', 'Breaking Judge', 'Public Policy Analysis'],
    keyMetrics: [
      { label: { en: 'Tournament Seed', vi: 'Thứ hạng hạt giống' }, value: 'National Champion (4th Seed)' },
      { label: { en: 'MUN Honors', vi: 'Thành tích MUN' }, value: 'Best Position Paper' },
      { label: { en: 'Judicial Role', vi: 'Vai trò giám khảo' }, value: 'Breaking Adjudicator' },
    ],
    details: {
      description: [
        {
          en: 'Championship Rigor at DAS-DO Debate Open 2025: Competed against top collegiate and high school debaters nationwide, entering elimination rounds as 4th Seed and clinching the National Championship. Structured case files centered on dynamic resource taxation, environmental mitigation, and decentralized regulatory compliance.',
          vi: 'Bản lĩnh Vô địch tại DAS-DO Debate Open 2025: Tranh tài cùng các đội tuyển học sinh, sinh viên xuất sắc toàn quốc, bước vào vòng loại trực tiếp với vị trí Hạt giống số 4 và đoạt ngôi Vô địch Toàn quốc. Xây dựng hệ thống luận điểm dựa trên cơ chế thuế tài nguyên, đánh đổi kinh tế và giám sát phân quyền.',
        },
        {
          en: 'Best Position Paper at VSGMUN 2026 (UNHCR Committee): Drafted policy recommendations simulating international refugee protections, exploring sovereign fiscal allocations, digital identity verification, and labor market integration in developing economies.',
          vi: 'Giải Bài lập trường Xuất sắc nhất tại VSGMUN 2026 (Hội đồng Cao ủy Tị nạn LHQ - UNHCR): Xây dựng tài liệu khuyến nghị chính sách bảo hộ người tị nạn, phân bổ ngân sách quốc gia, định danh số và cơ chế hòa nhập thị trường lao động tại các quốc gia đang phát triển.',
        },
        {
          en: 'Adjudication Philosophy: As a Breaking Judge at competitive national tournaments, I reject rhetorical flourish that lacks systemic substance. I evaluate motions by examining real-world human incentives, empirical elasticity, and asking the definitive policy question: "If this law is passed, how will individuals on the ground actually respond?"',
          vi: 'Triết lý Trọng tài: Với vai trò Giám khảo (Breaking Judge) tại các giải đấu uy tín, tôi kiên quyết bác bỏ những lối nói hùng hồn nhưng thiếu cơ sở định lượng. Tôi chấm điểm bằng cách bóc tách động cơ con người, độ co giãn thực chứng và đặt câu hỏi chính sách cốt lõi: "Nếu đạo luật này ban hành, người dân thực tế sẽ phản ứng ra sao?"',
        },
      ],
      sdg: ['SDG 16: Peace, Justice & Strong Institutions'],
    },
    imageType: 'debate',
  },
];

export const PROFILE_ACCORDIONS: AccordionGroup[] = [
  {
    id: 'academic-profile',
    title: { en: '1. Academic Profile & Standardized Testing', vi: '1. Hồ Sơ Học Thuật & Khảo Thí Chuẩn Hóa' },
    icon: 'GraduationCap',
    items: [
      {
        title: {
          en: 'VNU-HCM High School for The Gifted (Trường Phổ thông Năng khiếu - ĐHQG-HCM)',
          vi: 'Trường Phổ thông Năng khiếu - Đại học Quốc gia TP.HCM',
        },
        subtitle: { en: 'English Specialization Class (2024 - Expected Jun 2027)', vi: 'Lớp Chuyên Tiếng Anh (Niên khóa 2024 - 2027)' },
        date: 'Aug 2024 - Jun 2027',
        points: [
          { en: 'Overall GPA: 9.6 / 10.0 (Consistently across Grade 10 and Grade 11).', vi: 'Điểm trung bình học tập: 9,6 / 10,0 (Liên tục trong hai năm lớp 10 và lớp 11).' },
          { en: 'Top 6% student of the entire grade level (2024 & 2026).', vi: 'Top 6% học sinh có điểm trung bình cao nhất toàn khối (Năm 2024 & 2026).' },
          { en: "Selected as 1 of only 2 candidates admitted from Dak Lak Province to Vietnam's premier selective high school.", vi: 'Một trong hai thí sinh duy nhất của tỉnh Đắk Lắk trúng tuyển vào Trường Phổ thông Năng khiếu ĐHQG-HCM.' },
        ],
        badge: { en: 'Top Selective Institution', vi: 'Trường THPT Chuyên Hàng Đầu' },
      },
      {
        title: { en: 'Advanced Placement (AP) Examinations — Perfect Scores (4/4)', vi: 'Kỳ Thi Nâng Cao Advanced Placement (AP) — Điểm Tuyệt Đối (4/4)' },
        subtitle: { en: 'Self-studied and officially verified test results', vi: 'Tự học và đạt điểm tối đa ở 4 bộ môn định lượng' },
        points: [
          { en: 'AP Calculus AB: 5 / 5 (Max Score)', vi: 'AP Calculus AB: 5 / 5 (Điểm tuyệt đối)' },
          { en: 'AP Statistics: 5 / 5 (Max Score)', vi: 'AP Statistics: 5 / 5 (Điểm tuyệt đối)' },
          { en: 'AP Microeconomics: 5 / 5 (Max Score)', vi: 'AP Microeconomics (Kinh tế vi mô): 5 / 5 (Điểm tuyệt đối)' },
          { en: 'AP Macroeconomics: 5 / 5 (Max Score)', vi: 'AP Macroeconomics (Kinh tế vĩ mô): 5 / 5 (Điểm tuyệt đối)' },
        ],
        badge: { en: '4x AP 5s', vi: '4 Môn AP Đạt Điểm 5' },
      },
      {
        title: { en: 'Standardized English & Scholastic Assessments', vi: 'Chứng Chỉ Tiếng Anh & Khảo Thí Năng Lực Quốc Tế' },
        points: [
          { en: 'SAT: 1450 (Evidence-Based Reading and Writing & Mathematics).', vi: 'SAT: 1450 (Đọc - Viết Học Thuật & Toán Học).' },
          { en: 'IELTS Academic: 7.5 Overall (CEFR C1 Level).', vi: 'IELTS Academic: 7.5 Tổng thể (Trình độ CEFR C1).' },
        ],
        badge: { en: 'Standardized Excellence', vi: 'Chuẩn Hóa Quốc Tế' },
      },
      {
        title: { en: 'Phan Chu Trinh Secondary School, Dak Lak Province', vi: 'THCS Phan Chu Trinh, Tỉnh Đắk Lắk' },
        subtitle: { en: 'Grade 9 GPA: 8.8 / 10.0', vi: 'Điểm trung bình Lớp 9: 8,8 / 10,0' },
        date: 'Aug 2020 - May 2024',
        points: [
          { en: 'Provincial Third Prize in English Excellence Competition (Dak Lak Province, 2023).', vi: 'Giải Ba Học sinh Giỏi Tiếng Anh cấp Tỉnh (Tỉnh Đắk Lắk, 2023).' },
          { en: 'Graduated with Distinction and top high-school entrance exam scores.', vi: 'Tốt nghiệp loại Giỏi với điểm thi vào THPT top đầu tỉnh.' },
        ],
      },
    ],
  },
  {
    id: 'economics-olympiads',
    title: { en: '2. Economics, Business & Academic Olympiads', vi: '2. Đấu Trường Kinh Tế, Kinh Doanh & Học Thuật' },
    icon: 'Trophy',
    items: [
      {
        title: { en: 'Harvard Crimson Business Case Competition (HCBC) 2025', vi: 'Cuộc Thi Tình Huống Kinh Doanh Harvard Crimson (HCBC) 2025' },
        subtitle: { en: 'Global Finalist (Top 30 out of 2,000+ teams worldwide)', vi: 'Chung Kết Toàn Cầu (Top 30 trên 2.000+ đội tuyển quốc tế)' },
        date: '2025',
        points: [
          { en: 'Sole Vietnamese representative team invited to compete in-person on the Harvard University campus in Cambridge, MA.', vi: 'Đội tuyển đại diện duy nhất của Việt Nam được mời tranh tài trực tiếp tại khuôn viên Đại học Harvard (Hoa Kỳ).' },
          { en: 'Acted as Team Lead for Finance & Strategy; engineered DCF and CAC/LTV forecasting models for dynamic market entry.', vi: 'Trưởng nhóm phụ trách Tài chính & Chiến lược; xây dựng mô hình dự báo dòng tiền và bảng phân tích CAC/LTV.' },
        ],
        badge: { en: 'Top 30 Global Finalist', vi: 'Top 30 Toàn Cầu' },
      },
      {
        title: { en: 'International Economics Olympiad (IEO) — Vietnam National Selection', vi: 'Olympic Kinh Tế Quốc Tế (IEO) — Tuyển Chọn Đội Tuyển Việt Nam' },
        subtitle: { en: 'National Top 5 Selection (Ranked 3rd Nationally)', vi: 'Top 5 Đội Tuyển Toàn Quốc (Xếp Hạng 3 Toàn Quốc)' },
        date: '2025 & 2026',
        points: [
          { en: 'Selected into the National Top 5 for 2 consecutive years (2025 and 2026), achieving Rank 3 nationwide.', vi: 'Xuất sắc lọt vào Top 5 toàn quốc trong 2 năm liên tiếp (2025 & 2026), đứng vị trí thứ 3 toàn quốc.' },
          { en: 'Rigorous assessment encompassing advanced Microeconomics, Macroeconomics, and Business Case Analysis.', vi: 'Vượt qua các bài thi chuyên sâu về Vi mô, Vĩ mô và phân tích tình huống tài chính doanh nghiệp.' },
        ],
        badge: { en: 'Ranked 3rd Nationally', vi: 'Hạng 3 Toàn Quốc' },
      },
      {
        title: { en: 'World Economics Cup (WEC) 2025', vi: 'Cúp Kinh Tế Thế Giới (WEC) 2025' },
        subtitle: { en: 'Silver Award (Asia & Oceania) & Top 10 Fundamentals', vi: 'Huy Chương Bạc (Khu Vực Châu Á - Châu Đại Dương) & Top 10 Lý Thuyết' },
        date: '2025',
        points: [
          { en: 'Silver Award across Asia & Oceania competing against top economics students internationally.', vi: 'Huy chương Bạc toàn khu vực Châu Á & Châu Đại Dương cạnh tranh với các học sinh kinh tế quốc tế hàng đầu.' },
          { en: 'Top 10 Worldwide in Economics Fundamentals written examination.', vi: 'Top 10 Thế giới trong bài thi Kiến thức Kinh tế Nền tảng.' },
        ],
        badge: { en: 'Silver Medalist', vi: 'Huy Chương Bạc' },
      },
      {
        title: { en: 'Vietnam Economics Olympiad (VEO) 2025 & 2026', vi: 'Kỳ Thi Olympic Kinh Tế Việt Nam (VEO) 2025 & 2026' },
        subtitle: { en: 'National Bronze Medalist (Two-time consecutive awardee)', vi: 'Huy Chương Đồng Quốc Gia (Hai năm liên tiếp)' },
        date: '2025 & 2026',
        points: [
          { en: 'Awarded National Bronze Medal in consecutive competitive cycles.', vi: 'Đạt Huy chương Đồng cấp Quốc gia 2 năm liên tiếp.' },
        ],
      },
      {
        title: { en: 'Vietnam Business Innovation Challenge (VBIC) 2025', vi: 'Thử Thách Đổi Mới Sáng Tạo Kinh Doanh Việt Nam (VBIC) 2025' },
        subtitle: { en: 'Top 10 Grand Final (Team Lead)', vi: 'Top 10 Chung Kết Toàn Quốc (Trưởng Nhóm)' },
        date: '2025',
        points: [
          { en: 'Led multidisciplinary high school team to Top 10 Grand Final with a circular agricultural supply chain proposal.', vi: 'Dẫn dắt đội tuyển lọt vào Top 10 Chung kết toàn quốc với đề án chuỗi cung ứng nông sản tuần hoàn.' },
        ],
      },
      {
        title: { en: 'Aspiring Vietnam Contest 2025', vi: 'Cuộc Thi Aspiring Vietnam 2025' },
        subtitle: { en: 'Top 4 Individual, Trade Division (Final Round)', vi: 'Top 4 Cá Nhân Toàn Quốc, Bảng Thương Mại (Vòng Chung Kết)' },
        date: '2025',
        points: [
          { en: 'Ranked Top 4 nationally in trade theory, international tariffs, and commodity flows.', vi: 'Đứng trong Top 4 toàn quốc về lý thuyết thương mại, thuế quan quốc tế và dòng chảy hàng hóa.' },
        ],
      },
      {
        title: { en: 'ACCA Futurist Scholarship 2025', vi: 'Học Bổng ACCA Futurist 2025' },
        subtitle: { en: 'Top 50 Vietnam (Merit-based award for emerging finance talents)', vi: 'Top 50 Việt Nam (Học bổng tài năng tài chính - kế toán trẻ)' },
        date: '2025',
        points: [
          { en: 'Recognized among Top 50 emerging high-school finance and accounting talents by ACCA Vietnam.', vi: 'Được ACCA Việt Nam vinh danh trong Top 50 tài năng trẻ triển vọng lĩnh vực tài chính.' },
        ],
      },
    ],
  },
  {
    id: 'debate-arts-mun',
    title: { en: '3. Strategic Debate, MUN & Performing Arts', vi: '3. Tranh Biện Chiến Lược, MUN & Nghệ Thuật Di Sản' },
    icon: 'Sparkles',
    items: [
      {
        title: { en: 'DAS-DO Debate Open 2025', vi: 'Giải Tranh Biện Mở Rộng DAS-DO 2025' },
        subtitle: { en: 'National Champion (4th Seed in Elimination Rounds)', vi: 'Quán Quân Toàn Quốc (Hạt Giống Số 4 Vòng Loại Trực Tiếp)' },
        date: '2025',
        points: [
          { en: 'National Champion after 5 preliminary and 3 intense elimination parliamentary debate rounds.', vi: 'Đoạt ngôi Quán quân Quốc gia sau 5 vòng bảng và 3 vòng loại trực tiếp tranh biện nghị viện.' },
          { en: 'Expertly debated motions on economic incentives, antitrust enforcement, and environmental governance.', vi: 'Tranh biện xuất sắc các kiến nghị về động cơ kinh tế, chống độc quyền và quản trị môi trường.' },
        ],
        badge: { en: 'National Champion', vi: 'Quán Quân Quốc Gia' },
      },
      {
        title: { en: 'Vietnam Student Global Model United Nations (VSGMUN) 2026', vi: 'Mô Phỏng Liên Hợp Quốc Học Sinh Sinh Viên (VSGMUN) 2026' },
        subtitle: { en: 'Best Position Paper Award — UNHCR Committee', vi: 'Giải Bài Lập Trường Xuất Sắc Nhất — Hội Đồng UNHCR' },
        date: '2026',
        points: [
          { en: 'Awarded Best Position Paper representing state delegate in the United Nations High Commissioner for Refugees committee.', vi: 'Đạt giải Bài lập trường xuất sắc nhất đại diện phái đoàn quốc gia tại Hội đồng Cao ủy Tị nạn LHQ.' },
        ],
      },
      {
        title: { en: 'Traditional T’rưng Soloist — "Thanh Am Dat Viet" Showcase', vi: 'Độc Tấu Đàn T’rưng Dân Tộc — Đêm Nhạc "Thanh Âm Đất Việt"' },
        subtitle: { en: 'Featured Lead Performing Artist (Ho Chi Minh City)', vi: 'Nghệ Sĩ Độc Tấu Tiêu Biểu (TP. Hồ Chí Minh)' },
        date: '2025',
        points: [
          { en: 'Performed indigenous highland music for ~150 urban attendees, intentionally connecting rural culture to the city.', vi: 'Biểu diễn độc tấu nhạc cụ tre nứa cho ~150 khán giả thành thị, kết nối văn hoá bản địa với không gian hiện đại.' },
        ],
        badge: { en: 'Lead Soloist', vi: 'Độc Tấu Chính' },
      },
      {
        title: { en: 'International Art Exhibition: Museo ning Angeles, Philippines', vi: 'Triển Lãm Mỹ Thuật Quốc Tế: Museo ning Angeles, Philippines' },
        subtitle: { en: '"Along the Waters of Srepok 3 Hydropower Plant, Dak Lak"', vi: '"Dọc Dòng Nước Thuỷ Điện Sêrêpôk 3, Đắk Lắk"' },
        date: 'Jul 2026',
        points: [
          { en: 'Selected to exhibit original visual artwork projecting local socio-ecological narratives on an international stage.', vi: 'Tác phẩm được tuyển chọn trưng bày quốc tế, phản ánh câu chuyện văn hoá và sinh thái bản địa quê hương.' },
        ],
      },
    ],
  },
  {
    id: 'technical-skills',
    title: { en: '4. Technical Skills, Languages & Personal Interests', vi: '4. Kỹ Năng Kỹ Thuật, Ngôn Ngữ & Sở Thích' },
    icon: 'Terminal',
    items: [
      {
        title: { en: 'Quantitative & Analytical Methodologies', vi: 'Phương Pháp Nghiên Cứu Định Lượng & Thống Kê' },
        points: [
          { en: 'Econometrics: Ordinary Least Squares (OLS), Logistic Regression, Analysis of Variance (ANOVA).', vi: 'Kinh lượng học: Hồi quy OLS, Hồi quy Logistic nhị phân, Phân tích phương sai (ANOVA).' },
          { en: 'Statistical Packages & Tools: SPSS, MS Excel / Google Sheets (advanced financial modeling, pivot tables, VLOOKUP/INDEX-MATCH, sensitivity matrices), Canva Pro.', vi: 'Phần mềm thống kê: SPSS, MS Excel / Google Sheets chuyên sâu (mô hình tài chính, ma trận độ nhạy), Canva Pro.' },
          { en: 'Scientific Computing: Foundational C++, Linux HPC Bash scripting, VESTA crystal structure visualization, Density Functional Theory (DFT).', vi: 'Tính toán khoa học: C++ cơ bản, tập lệnh Linux HPC, phần mềm mô phỏng tinh thể VESTA, lý thuyết phiếm hàm mật độ (DFT).' },
        ],
        badge: { en: 'Empirical Toolset', vi: 'Công Cụ Thực Chứng' },
      },
      {
        title: { en: 'Languages Proficiency', vi: 'Năng Lực Ngôn Ngữ' },
        points: [
          { en: 'Vietnamese: Native Speaker (Bilingual mastery in academic, public speaking, and cultural prose).', vi: 'Tiếng Việt: Bản ngữ (Sử dụng thành thạo trong văn bản học thuật, diễn thuyết và văn phong di sản).' },
          { en: 'English: Full Professional / Academic Proficiency (IELTS 7.5 Academic, SAT 1450).', vi: 'Tiếng Anh: Thành thạo học thuật và giao tiếp quốc tế (IELTS 7.5, SAT 1450).' },
          { en: 'Japanese: Basic Elementary (Introductory conversational and cultural literacy).', vi: 'Tiếng Nhật: Sơ cấp (Giao tiếp cơ bản và tìm hiểu văn hoá).' },
        ],
      },
      {
        title: { en: 'Co-Curricular Passions & Athletic Pursuits', vi: 'Đam Mê Ngoại Khóa & Thể Thao' },
        points: [
          { en: "Traditional T'rưng Bamboo Performance: Practiced for over 6 years; certified soloist.", vi: "Diễn tấu Đàn T'rưng Tre Nứa: Rèn luyện hơn 6 năm, độc tấu sân khấu chuyên nghiệp." },
          { en: 'Applied Game Theory: Modeling strategic decision-making, oligopoly pricing, and asymmetric info.', vi: 'Lý thuyết Trò chơi Ứng dụng: Mô hình hoá quyết định chiến lược, thị trường độc quyền nhóm và thông tin bất đối xứng.' },
          { en: 'Athletics: Swimming (freestyle endurance) & Badminton (competitive singles/doubles).', vi: 'Thể thao rèn luyện: Bơi lội (sức bền tự do) & Cầu lông (đơn/đôi phong trào).' },
        ],
      },
    ],
  },
];
