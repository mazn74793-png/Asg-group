import heroImg from '../assets/images/alaseel_workshop_hero_1792957443637.jpg';
import partsImg from '../assets/images/alaseel_genuine_parts_1792957458506.jpg';
import diagnosticImg from '../assets/images/alaseel_car_diagnostic_1792957472264.jpg';

export interface ServiceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  shortDescAr: string;
  shortDescEn: string;
  fullDescAr: string;
  fullDescEn: string;
  featuresAr: string[];
  featuresEn: string[];
  icon: string;
  durationAr: string;
  durationEn: string;
  warrantyAr: string;
  warrantyEn: string;
}

export interface BrandInfo {
  id: string;
  nameAr: string;
  nameEn: string;
  logoLetter: string;
  specialtyAr: string;
  specialtyEn: string;
  popularModels: string[];
  descriptionAr: string;
  descriptionEn: string;
}

export interface ProductItem {
  id: string;
  category: 'parts' | 'oil';
  titleAr: string;
  titleEn: string;
  brand: string;
  descAr: string;
  descEn: string;
  compatibilityAr: string;
  compatibilityEn: string;
  specs: string[];
  badgeAr: string;
  badgeEn: string;
}

export interface ArticleItem {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  readTimeAr: string;
  readTimeEn: string;
  dateAr: string;
  dateEn: string;
  categoryAr: string;
  categoryEn: string;
  summaryAr: string;
  summaryEn: string;
  sections: {
    headingAr: string;
    headingEn: string;
    contentAr: string;
    contentEn: string;
    tipsAr?: string[];
    tipsEn?: string[];
  }[];
}

export const SITE_METADATA = {
  phone: '01040006038',
  phoneDisplay: '010 4000 6038',
  whatsapp: '201040006038',
  email: 'form@asg-alaseel.com',
  addressAr: '71 الشطر الخامس، متفرع من شارع الخمسين، زهراء المعادي، القاهرة',
  addressEn: '71 Fifth District, off 50th Street, Zahraa El Maadi, Cairo, Egypt',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.5679856878905!2d31.326891099999997!3d29.9631027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839c4c58552f7%3A0xaa4a61097431a3c8!2zQVNHIEdyb3VwINmF2LHZg9iyINin2YTYp9i12YrZhCDZhNmE2LXZitin2YbYqQ!5e0!3m2!1sen!2seg!4v1728831314905!5m2!1sen!2seg',
  videoUrl: 'https://www.asg-alaseel.com/resources/assets/front/images/Aseel.mp4',
  heroImage: heroImg,
  partsImage: partsImg,
  diagnosticImage: diagnosticImg,
  workingHoursAr: 'السبت - الخميس: 9:00 ص إلى 10:00 م | الجمعة: 1:00 م إلى 10:00 م',
  workingHoursEn: 'Sat - Thu: 9:00 AM to 10:00 PM | Fri: 1:00 PM to 10:00 PM',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'electrical',
    titleAr: 'الأعطال الكهربائية والكمبيوتر',
    titleEn: 'Electrical & Computer Diagnostics',
    shortDescAr: 'كشف إلكتروني متقدم بأحدث أجهزة الفحص المعتمدة وبرمجة الكنترول والفيوزات وحل أعطال الحساسات.',
    shortDescEn: 'Advanced electronic diagnostics, ECU coding, sensor troubleshooting, and complete wiring inspection.',
    fullDescAr: 'نمتلك في مركز الأصيل أحدث أجهزة كشف الأعطال بالكمبيوتر المتوافقة كلياً مع أنظمة تويوتا وجيلي وجميع السيارات الحديثة. نقوم بقراءة وتحليل الرموز البرمجية (DTC)، فحص الضفائر، فحص كفاءة الدينامو والمارش، وبرمجة حساسات الكامة والكرنك وعلب الفيوزات الذكية.',
    fullDescEn: 'We utilize state-of-the-art computerized diagnostic scanners fully compatible with Toyota, Geely, and modern passenger vehicles. We read and interpret DTC codes, diagnose wiring harnesses, inspect alternators, starters, and program ECUs and smart fuse modules.',
    featuresAr: [
      'فحص شامل للحساسات (الأكسجين، الكرنك، الماف)',
      'برمجة كومبيوتر السيارة وكنترول ناقل الحركة',
      'فحص واختبار البطارية والدينامو تحت الحمل',
      'إصلاح الضفائر وحل مشاكل تهريب الكهرباء'
    ],
    featuresEn: [
      'Comprehensive sensor diagnostics (O2, Crank, MAF)',
      'ECU & TCU reprogramming and adaptation',
      'Battery & alternator load testing',
      'Wiring harness repair & parasitic draw resolution'
    ],
    icon: 'Zap',
    durationAr: '45 - 90 دقيقة',
    durationEn: '45 - 90 mins',
    warrantyAr: 'ضمان 3 شهور على أعمال الصيانة',
    warrantyEn: '3 Months Service Warranty'
  },
  {
    id: 'tires-suspension',
    titleAr: 'الإطارات والعفشة والاتزان',
    titleEn: 'Tires, Suspension & Alignment',
    shortDescAr: 'ترصيص ليزري وضبط زوايا ثلاثي الأبعاد وصيانة كاملة للمساعدين والمقصات وعلبة الدركسيون.',
    shortDescEn: 'Laser balancing, 3D wheel alignment, shock absorber replacement, and complete suspension overhaul.',
    fullDescAr: 'عفشة سيارتك هي خط الأمان الأول على الطريق. نقوم بفحص دقيق لجميع أجزاء نظام التعليق الأمامي والخلفي (مقصات، جلب، بارات دركسيون، كبالن، مساعدين، وبلي العجل)، مع ضبط زوايا كمبيوتر دقيق لمنع مسح الكاوتش وانحراف المركبة.',
    fullDescEn: 'Your suspension is your primary safety shield. We perform thorough mechanical inspections of tie rods, control arms, bushings, CV joints, struts, and wheel bearings, combined with precision 3D alignment to eliminate tire wear and steering drift.',
    featuresAr: [
      'ضبط زوايا ثلاثي الأبعاد بأحدث أجهزة الليزر',
      'ترصيص إطارات دقيق ووزن ديناميكي',
      'تجديد شامل لعفشة جيلي وتويوتا بقطع أصلية',
      'فحص واختبار المساعدين وقواعد الموتور'
    ],
    featuresEn: [
      '3D laser precision wheel alignment',
      'Dynamic tire balancing and vibration elimination',
      'Complete suspension rebuild with genuine components',
      'Shock absorber and engine mount diagnostic testing'
    ],
    icon: 'Disc',
    durationAr: '60 - 120 دقيقة',
    durationEn: '60 - 120 mins',
    warrantyAr: 'ضمان 6 شهور على أجزاء العفشة الأصلية',
    warrantyEn: '6 Months Genuine Parts Warranty'
  },
  {
    id: 'oil-fluids',
    titleAr: 'تغيير الزيوت وسوائل المحرك',
    titleEn: 'Engine Oils & Fluid Service',
    shortDescAr: 'زيوت تخليقية بالكامل مطابقة لمواصفات المصنع وفلاتر أصلية مع فحص 24 نقطة مجاناً.',
    shortDescEn: 'Fully synthetic oils meeting exact manufacturer specs, genuine OEM filters, plus a complimentary 24-point check.',
    fullDescAr: 'نستخدم زيوت المحركات العالمية المعتمدة وفقاً لمعايير اللزوجة الدقيقة لكل محرك (0W-20, 5W-30, 5W-40) مع استبدال فلتر الزيت الأصلي، ومراجعة زيت الفتيس الأوتوماتيك وCVT، وسائل التبريد، وزيت الفرامل بجهاز قياس درجة الغليان والرطوبة.',
    fullDescEn: 'We provide premium certified engine oils matched to exact viscosity ratings (0W-20, 5W-30, 5W-40) with genuine OEM filter installation, automatic/CVT transmission fluid change, coolant flush, and brake fluid boiling-point inspection.',
    featuresAr: [
      'زيوت تخليقية معتمدة 100% تدوم حتى 10,000 كم',
      'تغيير فلاتر الزيت والهواء والتكييف الأصلية',
      'تغيير زيت الفتيس CVT والأوتوماتيك بجهاز الشفط المخصص',
      'فحص مجاني لمستوى كافة السوائل وحالة السيور'
    ],
    featuresEn: [
      '100% certified fully synthetic oils up to 10k km',
      'OEM oil, air, and cabin filter replacements',
      'CVT & automatic transmission flush & refill',
      'Complimentary multi-point fluid & belt check'
    ],
    icon: 'Droplets',
    durationAr: '30 - 45 دقيقة',
    durationEn: '30 - 45 mins',
    warrantyAr: 'ضمان أصالة الزيوت وقطع الغيار',
    warrantyEn: 'Genuine Oil & Filter Guarantee'
  },
  {
    id: 'body-paint',
    titleAr: 'سمكرة ودهان وفرن حراري',
    titleEn: 'Body Repair & Oven Paint',
    shortDescAr: 'استعد رونق سيارتك بأحدث أفران الرش الإيطالية، تعديل الشاسيه بالليزر ومطابقة ألوان بالكمبيوتر.',
    shortDescEn: 'Restore your vehicle in Italian heated bake spray booths, computerized color matching, and precision chassis calibration.',
    fullDescAr: 'قسم السمكرة والدهان مجهز بأفران رش حرارية حديثة بنظام ترشيح متطور لمنع ذرات الغبار، مع جهاز كمبيوتر لقراءة كود اللون الأصلي بدقة 100%. كما نوفر شفط الصدمات على البارد (PDR) بدون دهان للحفاظ على فابريكا السيارة.',
    fullDescEn: 'Our body and paint division is equipped with Italian heated bake spray booths featuring multi-stage filtration and computerized 100% OEM spectrophotometer color matching. We also offer Paintless Dent Removal (PDR) to retain factory finish.',
    featuresAr: [
      'فرن حراري معزول لضمان جودة ودوام الدهان',
      'مطابقة أكواد ألوان فابريكا تويوتا وجيلي',
      'سمكرة وتعديل صدمات على البارد PDR',
      'تلميع وحماية نانو سيراميك متقدمة'
    ],
    featuresEn: [
      'Pressurized bake oven ensuring long-lasting gloss',
      'Computerized color formula match for Toyota & Geely',
      'Paintless Dent Removal (PDR) techniques',
      'Multi-stage polish & advanced ceramic coating'
    ],
    icon: 'Sparkles',
    durationAr: '1 - 3 أيام حسب الحالة',
    durationEn: '1 - 3 Days depending on condition',
    warrantyAr: 'ضمان سنة ضد تقشر أو بهتان الدهان',
    warrantyEn: '1-Year Paint & Clear-Coat Warranty'
  },
  {
    id: 'ac-cooling',
    titleAr: 'صيانة وتعبئة التكييف',
    titleEn: 'A/C System & Cooling Service',
    shortDescAr: 'فحص دورة التبريد وتسريب الفريون، شحن فريون أصلي R134a وصيانة الكباس والسربنتينة.',
    shortDescEn: 'A/C leak detection with UV dye, virgin R134a gas recharge, compressor overhaul, and condenser cleaning.',
    fullDescAr: 'مع ارتفاع درجات الحرارة في الصيف، نوفر صيانة شاملة لدورة التكييف: كشف التسريب بالنيتروجين وأشعة الفلوروسنت، شحن فريون نقي أمريكي/أوروبي، استبدال بلف التمدد، فحص كفاءة الكباس، وتنظيف الثلاجة الداخلية لضمان هواء نقي وبارد.',
    fullDescEn: 'Keep cool through hot summers with full climate system maintenance: nitrogen & UV leak detection, virgin European/American refrigerant refill, expansion valve check, compressor overhaul, and cabin evaporator sanitization.',
    featuresAr: [
      'كشف تسريب إلكتروني وبالموجات والصبغة الفوسفورية',
      'شحن فريون أصلي مع زيت التزييت الخاص بالكباس',
      'تنظيف وتطهير ثلاجة المكيف والقضاء على الروائح',
      'إصلاح كلتش وبلوف كمبروسر التكييف'
    ],
    featuresEn: [
      'Electronic, ultrasonic & UV dye leak detection',
      'Virgin refrigerant recharge with PAG compressor oil',
      'Evaporator sanitization eliminating bacteria & odors',
      'Compressor clutch, valve, and belt servicing'
    ],
    icon: 'Wind',
    durationAr: '45 - 60 دقيقة',
    durationEn: '45 - 60 mins',
    warrantyAr: 'ضمان 6 شهور على شحن وتبريد التكييف',
    warrantyEn: '6 Months A/C Performance Warranty'
  },
  {
    id: 'periodic-maintenance',
    titleAr: 'الصيانة الدورية الشاملة',
    titleEn: 'Comprehensive Periodic Service',
    shortDescAr: 'صيانات جدولية معتمدة لكل 10,000 كم وحتى 100,000 كم للحفاظ على أداء المحرك وعمر السيارة.',
    shortDescEn: 'Scheduled manufacturer maintenance at 10k, 20k, 40k, 80k, and 100k intervals preserving performance and longevity.',
    fullDescAr: 'برنامج الصيانة الدورية في الأصيل مصمم طبقاً لكتالوج الصانع للسيارات الآسيوية واليابانية. يشمل فحص منظومة الفرامل، تغيير تيل الفرامل، تنظيف البوابة، تغيير شمعات الاشتعال (البوجيهات)، مراجعة السيور، والكشف على كفاءة منظومة الإشعال وحقن الوقود.',
    fullDescEn: 'Our periodic maintenance program mirrors strict OEM maintenance schedules. It includes brake caliper and pad inspection, throttle body cleaning, iridium spark plug replacement, drive belt checks, and fuel injection system diagnostics.',
    featuresAr: [
      'جدول معتمد لصيانات 10K / 40K / 80K / 100K كم',
      'فحص وتنظيف بوابة الهواء والرشاشات',
      'صيانة دورة الفرامل وتغيير التيل والطنابير',
      'تقرير فحص شامل بحالة السيارة يسلم للعميل'
    ],
    featuresEn: [
      'Certified intervals: 10K, 40K, 80K, 100K km',
      'Throttle body & injector ultrasonic cleaning',
      'Brake rotor surfacing, pad replacement & bleed',
      'Comprehensive inspection report handed to client'
    ],
    icon: 'Wrench',
    durationAr: '90 - 150 دقيقة',
    durationEn: '90 - 150 mins',
    warrantyAr: 'ضمان معتمد على جميع قطع الغيار المستبدلة',
    warrantyEn: 'Certified Warranty on All Installed Parts'
  }
];

export const BRANDS_DATA: BrandInfo[] = [
  {
    id: 'toyota',
    nameAr: 'تويوتا Toyota',
    nameEn: 'Toyota Motors',
    logoLetter: 'T',
    specialtyAr: 'مركز تخصصي معتمد لجميع موديلات تويوتا اليابانية مع توفر برامج تشخيص Techstream الأصلية وقطع غيار فابريكا.',
    specialtyEn: 'Specialized facility for all Toyota models utilizing official Techstream diagnostics and OEM factory parts.',
    popularModels: ['كورولا Corolla', 'يارس Yaris', 'فورتشنر Fortuner', 'كامري Camry', 'بيلتا Belta', 'راش Rush', 'لاند كروزر Land Cruiser'],
    descriptionAr: 'نمتلك خبرة تتجاوز 15 عاماً في صيانة محركات VVT-i وأنظمة نقل الحركة CVT وتكييف وعفشة سيارات تويوتا الشهيرة باعتماديتها العالية.',
    descriptionEn: 'Over 15 years of dedicated expertise in VVT-i powertrains, CVT transmissions, and robust Toyota suspension systems.'
  },
  {
    id: 'geely',
    nameAr: 'جيلي Geely',
    nameEn: 'Geely Auto',
    logoLetter: 'G',
    specialtyAr: 'الريادة والخبرة الفائقة في سيارات جيلي (امجراند، كولراي، اوكافانجو، ازكارا) مع توفير كامل قطع الغيار الأصلية وعلاج أعطال العفشة والفيوزات.',
    specialtyEn: 'Deep specialized expertise in Geely vehicles (Emgrand, Coolray, Okavango, Azkarra) with full OEM parts stock and fuse/suspension mastery.',
    popularModels: ['امجراند Emgrand 7 / EC7', 'كولراي Coolray', 'اوكافانجو Okavango', 'ازكارا Azkarra', 'GX3 Pro', 'توجيلا Tugella'],
    descriptionAr: 'نعتبر من أوائل المراكز المجهزة بأحدث خرائط الكهرباء وحلول شاسيه وعفشة جيلي امجراند بمختلف فئاتها، مع توفير قطع غيار وكيل أصلية بضمان.',
    descriptionEn: 'Recognized as leading authority in Geely Emgrand chassis engineering, ECU electrical wiring, and OEM replacement components.'
  },
  {
    id: 'asian-cars',
    nameAr: 'السيارات اليابانية والكورية',
    nameEn: 'Japanese & Korean Vehicles',
    logoLetter: 'A',
    specialtyAr: 'صيانة وإصلاح احترافي لسيارات نيسان، هيونداي، كيا، ميتسوبيشي مع فحص كمبيوتر دقيق وقطع غيار معتمدة.',
    specialtyEn: 'Expert maintenance for Nissan, Hyundai, Kia, and Mitsubishi with computerized calibration and certified parts.',
    popularModels: ['نيسان صني Sunny', 'هيونداي إلنترا Elantra', 'كيا سيراتو Cerato', 'ميتسوبيشي لانسر Lancer'],
    descriptionAr: 'فريقنا مجهز بالكتالوجات الهندسية ومعدات الفحص المتطورة للتعامل مع مختلف سيارات الركاب اليومية بكفاءة وسرعة فائقة.',
    descriptionEn: 'Engineers equipped with factory diagnostic schematics to service daily commuter and passenger cars with prompt reliability.'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'p1',
    category: 'parts',
    titleAr: 'تيل فرامل أصلي تويوتا كورولا / يارس',
    titleEn: 'OEM Toyota Brake Pads (Corolla & Yaris)',
    brand: 'Toyota Genuine Parts',
    descAr: 'تيل فرامل فابريكا ياباني خالي من الأسبستوس، يوفر أقصى كفاءة كبح وهدوء تام دون صفير مع عمر تشغيلي طويل.',
    descEn: 'Factory Japanese asbestos-free ceramic brake pads providing optimal stopping power without squeal.',
    compatibilityAr: 'تويوتا كورولا (2014 - 2024)، يارس (2015 - 2023)',
    compatibilityEn: 'Toyota Corolla (2014 - 2024), Yaris (2015 - 2023)',
    specs: ['كود القطعة الأصلي', 'عمر افتراضي 40,000 كم', 'ضمان ضد عيوب الصناعة'],
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Best Seller'
  },
  {
    id: 'p2',
    category: 'parts',
    titleAr: 'طقم مساعدين أمامي جيلي امجراند أصلي',
    titleEn: 'Genuine Geely Emgrand Front Shock Absorbers',
    brand: 'Geely Auto Genuine',
    descAr: 'مساعدين زيت وغاز معتمدين من المصنع مصممين لتحمل الطرق المصرية وامتصاص المطبات مع الحفاظ على اتزان وثبات السيارة.',
    descEn: 'Factory oil & gas shock absorbers engineered for ride comfort and highway stability.',
    compatibilityAr: 'جيلي امجراند 7 و EC7 (2013 - 2020)',
    compatibilityEn: 'Geely Emgrand 7 & EC7 (2013 - 2020)',
    specs: ['هندسة هيدروليكية معتمدة', 'جلب صلبة مدعمة', 'ضمان 6 شهور'],
    badgeAr: 'قطع أصلية 100%',
    badgeEn: '100% Genuine'
  },
  {
    id: 'p3',
    category: 'parts',
    titleAr: 'شمعات إشعال إيريديوم أصلية (بوجيهات)',
    titleEn: 'OEM Laser Iridium Spark Plugs',
    brand: 'Denso / NGK Japan',
    descAr: 'بوجيهات إيريديوم طويلة العمر تضمن إشعالاً فورياً، توفيراً ملحوظاً في استهلاك البنزين واستقراراً في سرعة السلانسيه.',
    descEn: 'Long-life laser iridium spark plugs enhancing fuel economy, cold start response, and idle stability.',
    compatibilityAr: 'تويوتا (جميع الفئات)، جيلي كولراي وامجراند',
    compatibilityEn: 'Toyota (All Models), Geely Coolray & Emgrand',
    specs: ['سن إيريديوم ليزري', 'تدوم حتى 80,000 كم', 'مقاومة تآكل فائقة'],
    badgeAr: 'أداء عالي',
    badgeEn: 'High Performance'
  },
  {
    id: 'p4',
    category: 'parts',
    titleAr: 'فلتر زيت أصلي بلف حماية داخلي',
    titleEn: 'OEM Engine Oil Filter with Bypass Valve',
    brand: 'Toyota / Geely Genuine',
    descAr: 'فلتر زيت ورقي متعدد الطبقات يحتجز أدق الشوائب ويحافظ على ضغط الزيت حتى في أصعب ظروف القيادة.',
    descEn: 'High-density multi-fiber oil filter retaining microscopic particles with internal pressure bypass protection.',
    compatibilityAr: 'سيارات تويوتا وجيلي والسيارات اليابانية',
    compatibilityEn: 'Toyota, Geely, and Japanese Cars',
    specs: ['فلترة 99% من الرواسب', 'جوان عازل حراري', 'كود التحقق الأصلي'],
    badgeAr: 'فابريكا',
    badgeEn: 'Factory OEM'
  },
  {
    id: 'o1',
    category: 'oil',
    titleAr: 'زيت محرك تخليقي بالكامل 5W-30 (10,000 كم)',
    titleEn: 'Fully Synthetic Engine Oil 5W-30 (10K KM)',
    brand: 'Mobil 1 / Shell Helix Ultra / Liqui Moly',
    descAr: 'تركيبة تخليقية متطورة توفر حماية فائقة للمحرك في درجات الحرارة العالية وسرعة تزييت فورية عند بدء التشغيل على البارد.',
    descEn: 'Advanced full synthetic formula with active cleansing technology and superior thermal breakdown resistance.',
    compatibilityAr: 'مطابق لمواصفات API SP / ILSAC GF-6A لسيارات تويوتا وجيلي',
    compatibilityEn: 'Meets API SP / ILSAC GF-6A for modern Toyota & Geely engines',
    specs: ['معدل لزوجة 5W-30', 'صالح حتى 10,000 كم', 'تنظيف متقدم لرواسب الكربون'],
    badgeAr: 'الأعلى توصية',
    badgeEn: 'Recommended'
  },
  {
    id: 'o2',
    category: 'oil',
    titleAr: 'زيت محرك تويوتا الأصلي 0W-20 موفر للوقود',
    titleEn: 'Toyota Genuine Motor Oil 0W-20 (Fuel Economy)',
    brand: 'Toyota Motor Oil Japan',
    descAr: 'الزيت المعتمد رسمياً لمحركات تويوتا الحديثة Dual VVT-i لتحقيق أعلى معدلات توفير الوقود وحماية نظام التوقيت المتغير.',
    descEn: 'Specially engineered for contemporary Dual VVT-i engines to maximize fuel economy and valve protection.',
    compatibilityAr: 'كورولا، يارس، كامري، راف فور الحديثة',
    compatibilityEn: 'Modern Corolla, Yaris, Camry, and RAV4',
    specs: ['مواصفة المصنع الرسمية', 'توفير فوري في استهلاك الوقود', 'حماية البلوف والتاكيهات'],
    badgeAr: 'معتمد رسمياً',
    badgeEn: 'Official Approval'
  },
  {
    id: 'o3',
    category: 'oil',
    titleAr: 'سائل ناقل الحركة الأوتوماتيكي وCVT الأصلي',
    titleEn: 'OEM Automatic & CVT Transmission Fluid',
    brand: 'Toyota TC/FE & Geely CVT Fluids',
    descAr: 'سائل نقل حركة خاص يمنع انزلاق السير الداخلي لفتيس الـ CVT ويحافظ على سلاسة النقلات وعمر الكلتشات.',
    descEn: 'Specialized CVT fluid preventing belt slip and maintaining smooth torque transfer in variable transmissions.',
    compatibilityAr: 'فتيس CVT تويوتا وجيلي امجراند وكولراي',
    compatibilityEn: 'Toyota & Geely CVT automatic transmissions',
    specs: ['لزوجة ثابتة ضد الاحتكاك', 'حماية بلف البودي', 'استبدال كل 40,000 كم'],
    badgeAr: 'حماية الفتيس',
    badgeEn: 'Gearbox Shield'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-geely-suspension',
    slug: 'geely-emgrand-suspension-guide',
    titleAr: 'عفشة جيلي امجراند: متى تحتاج لتغيير العفشة أو صيانتها؟ | الأصيل أوتوموتيف',
    titleEn: 'Geely Emgrand Suspension Guide: Maintenance & Overhaul | Al-Aseel Automotive',
    readTimeAr: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    dateAr: '15 أكتوبر 2026',
    dateEn: 'Oct 15, 2026',
    categoryAr: 'صيانة العفشة والتعليق',
    categoryEn: 'Suspension & Chassis',
    summaryAr: 'دليل عملي شامل من مهندسي مركز الأصيل للتعرف على علامات تلف عفشة جيلي امجراند 7 وEC7، الفروق بين التغيير والصيانة، وطرق إطالة عمر المساعدين والمقصات.',
    summaryEn: 'Comprehensive guide by Al-Aseel engineers covering Geely Emgrand 7/EC7 suspension wear signs, repair vs replacement, and lifespan optimization.',
    sections: [
      {
        headingAr: 'مقدمة عن نظام تعليق جيلي امجراند في مصر',
        headingEn: 'Overview of Geely Emgrand Suspension on Egyptian Roads',
        contentAr: 'تعتبر سيارة جيلي امجراند من أكثر السيارات انتشاراً واقتصادية في مصر، إلا أن طبيعة الطرق والمطبات العشوائية تضع حملاً هائلاً على أجزاء العفشة الأمامية تحديداً. يتكون نظام التعليق الأمامي من مقصات مع جلب كاوتشوكية، مساعدين هيدروليك مع بطاحات، وبيض مقصات، وبارات دركسيون خارجية وداخلية.',
        contentEn: 'Geely Emgrand is widely popular in Egypt, but road imperfections place heavy loads on front suspension components: control arms, rubber bushings, strut mounts, ball joints, and tie rods.'
      },
      {
        headingAr: 'أبرز 5 علامات تشير لحاجة العفشة إلى تدخل فوري',
        headingEn: 'Top 5 Signs Your Suspension Requires Immediate Service',
        contentAr: 'إذا لاحظت أياً من الأعراض التالية أثناء قيادتك، يجب التوجه فوراً لمركز الصيانة لفحص السيارة بالرافعة: 1. صوت خبط أو "طقطقة" عند الدوران أو المرور فوق عيون القطط. 2. عومة أو عدم استقرار السيارة على السرعات التي تتجاوز 90 كم/س. 3. انحراف مقود القيادة ومسح الإطار من أحد الجوانب (تآكل غير متساوٍ). 4. رشح زيت حول جسم المساعد. 5. هبوط مقدمة السيارة عند الضغط المفاجئ على الفرامل.',
        contentEn: 'Watch for: 1. Knocking or clicking when turning or hitting bumps. 2. Highway wandering above 90 km/h. 3. Steering drift with uneven tire shoulder wear. 4. Oil weeping on shock absorbers. 5. Excessive front dive when braking.',
        tipsAr: [
          'لا تقم بتغيير جلب المقصات وحدها إذا كانت قاعدة المقص مجهدة أو ملتوية',
          'احرص دائماً على تغيير المساعدين في صورة زوجين (يمين وشمال معاً) لضمان توازن الثبات',
          'اضبط الزوايا بالليزر فور الانتهاء من أي فك أو تركيب في العفشة'
        ],
        tipsEn: [
          'Do not replace bushings alone if the control arm metal structure is distorted',
          'Always replace shock absorbers in pairs (left & right) for balanced dampening',
          'Perform a 3D laser wheel alignment immediately after any suspension intervention'
        ]
      },
      {
        headingAr: 'حلول مركز الأصيل لعفشة جيلي امجراند',
        headingEn: 'Al-Aseel Solutions for Geely Emgrand Chassis',
        contentAr: 'في مركز الأصيل، نوفر فحصاً ميكانيكياً شاملاً للعفشة بالرافعة مع قياس خلوص البارات والكبالن. ونستخدم قطع غيار جيلي أصلية معتمدة مع جلب مقواة مصممة خصيصاً لتحمل أوزان العمل الشاق، مع ضمان معتمد على القطع والمصنعية.',
        contentEn: 'At Al-Aseel, we carry out comprehensive hoist inspections measuring play in tie rods, ball joints, and CV axles, using reinforced genuine parts backed by warranty.'
      }
    ]
  },
  {
    id: 'art-geely-fusebox',
    slug: 'geely-emgrand-fuse-box-diagram-2014',
    titleAr: 'شرح علبة فيوزات جيلي امجراند 2014: دليلك الكامل | الأصيل-ASG',
    titleEn: 'Geely Emgrand 2014 Fuse Box Guide & Diagram | Al-Aseel-ASG',
    readTimeAr: '6 دقائق قراءة',
    readTimeEn: '6 min read',
    dateAr: '10 أكتوبر 2026',
    dateEn: 'Oct 10, 2026',
    categoryAr: 'كهرباء السيارات والفيوزات',
    categoryEn: 'Electrical & Fuses',
    summaryAr: 'توضيح تفصيلي لمواقع علبتي فيوزات جيلي امجراند 2014 (داخل الكابينة وتحت الكبوت)، مع وظائف كل فيوز بالأمبير وطريقة تشخيص الأعطال الكهربائية الشائعة.',
    summaryEn: 'Detailed diagram and explanation of the 2014 Geely Emgrand fuse boxes (engine bay and cabin), ampere ratings, and electrical diagnosis steps.',
    sections: [
      {
        headingAr: 'أين توجد علب الفيوزات في جيلي امجراند 2014؟',
        headingEn: 'Where are the Fuse Boxes Located in Geely Emgrand 2014?',
        contentAr: 'تحتوي جيلي امجراند 2014 على علبتي فيوزات رئيسيتين: العلّبة الأولى (علبة المحرك الخارجية): تقع في حوض المحرك بجانب البطارية والرفرف الأيسر، وهي مسؤولة عن الدوائر الرئيسية ذات الأمبير العالي مثل مروحة التبريد، طلمبة البنزين، الدينامو، نظام ABS، وكمبيوتر المحرك. العلّبة الثانية (علبة الصالون الداخلية): تقع أسفل لوحة العدادات على يسار السائق بجوار دواسة الفرامل والكلاتش (خلف درج التخزين الصغير)، وهي مسؤولة عن الإشارات، زجاج النوافذ، الولاعة، إضاءة الصالون، والراديو.',
        contentEn: 'Geely Emgrand features two main fuse centers: 1. Engine Bay (near battery and left fender) covering high-current circuits like cooling fans, fuel pump, alternator, ABS, and ECU. 2. Cabin Interior (under dash to the left of the steering wheel) controlling windows, lighter, interior lights, turn signals, and audio.'
      },
      {
        headingAr: 'أهم الفيوزات الشائعة ووظائفها وقيمتها بالأمبير',
        headingEn: 'Crucial Fuses, Functions and Ampere Ratings',
        contentAr: 'إليك قائمة بأهم الفيوزات التي قد تتعطل فجأة: \n• فيوز طلمبة البنزين (Fuel Pump): 15 أمبير (في حال عدم دوران المحرك رغم عمل المارش).\n• فيوز مروحة التبريد (Radiator Fan): 30 أو 40 أمبير (لحماية المحرك من السخونة الزائدة).\n• فيوز تكييف الهواء (A/C Clutch): 10 أمبير (في حال عدم لقط كمبروسر التكييف).\n• فيوز الولاعة والشاحن (Cigarette Lighter): 15 أمبير.\n• فيوز النوافذ الكهربائية (Power Windows): 30 أمبير.',
        contentEn: 'Key fuses to monitor: Fuel pump (15A), Radiator fan (30A/40A), A/C Compressor Clutch (10A), Power 12V Outlet (15A), Electric Windows (30A).',
        tipsAr: [
          'لا تقم أبداً بوضع فيوز ذو أمبير أعلى من الموصى به لتفادي احتراق الضفيرة',
          'استخدم ملاقط الفيوزات البلاستيكية الموجودة في غطاء العلبة لسحب الفيوز دون كسر أسنانه',
          'إذا تكرر احتراق نفس الفيوز فور تغييره، فهذا دليل على وجود قفلة كهربائية (Short Circuit) تتطلب فحصاً في المركز'
        ],
        tipsEn: [
          'Never replace a blown fuse with one of higher amperage to prevent wire harness fires',
          'Use the plastic fuse puller located on the lid to remove fuses safely',
          'If a replacement fuse blows immediately, there is an active short circuit requiring expert diagnostics'
        ]
      },
      {
        headingAr: 'خدمات كهرباء الأصيل لجيلي امجراند',
        headingEn: 'Al-Aseel Electrical Diagnostic Services for Geely',
        contentAr: 'نقدم في مركز الأصيل كشفاً دقيقاً بجهاز الملتميتر الرقمي وأجهزة فحص الضفيرة لكشف القفلات وحل مشاكل تهريب الكهرباء وضعف شحن الدينامو، مع توفير ريليهات وفيوزات أصلية معتمدة.',
        contentEn: 'Al-Aseel offers digital multimeter testing, parasitic drain checks, and alternator load analysis using genuine relays and fuses.'
      }
    ]
  },
  {
    id: 'art-toyota-yaris-issues',
    slug: 'toyota-yaris-common-issues-and-solutions',
    titleAr: 'أشهر أعطال تويوتا يارس: نصائح وحلول هندسية | دليل الصيانة من الأصيل',
    titleEn: 'Common Toyota Yaris Issues: Engineering Solutions | Al-Aseel Guide',
    readTimeAr: '5 دقائق قراءة',
    readTimeEn: '5 min read',
    dateAr: '05 أكتوبر 2026',
    dateEn: 'Oct 05, 2026',
    categoryAr: 'دليل أعطال تويوتا',
    categoryEn: 'Toyota Diagnostics',
    summaryAr: 'استعراض معمق لأشهر أعطال سيارة تويوتا يارس الميكانيكية والكهربائية (رعشة السلانسيه، تأخير النقلات، حرارة التكييف)، وطرق الوقاية منها في مركز الأصيل.',
    summaryEn: 'In-depth analysis of common Toyota Yaris mechanical and electrical quirks (idle vibrations, transmission response, AC cooling in hot weather) and preventative protocols.',
    sections: [
      {
        headingAr: 'لماذا تعتبر تويوتا يارس أيقونة الاعتمادية؟',
        headingEn: 'Why Toyota Yaris Stands as an Icon of Reliability',
        contentAr: 'تشتهر تويوتا يارس بمحركاتها الاقتصادية القوية (1.3L و 1.5L VVT-i) ونظم التعليق البسيطة والمعمرة. ومع ذلك، شأنها شأن أي سيارة حديثة، قد تظهر بها بعض الملاحظات بعد قطع مسافات طويلة أو بسبب إهمال مواعيد الصيانة الدورية واستخدام وقود أو زيوت غير مطابقة.',
        contentEn: 'Toyota Yaris is famed for rugged 1.3L & 1.5L VVT-i engines and durable mechanical design. However, heavy mileage and delayed fluid changes can lead to specific wear points.'
      },
      {
        headingAr: 'الأعطال الأكثر شيوعاً في تويوتا يارس وكيفية حلها',
        headingEn: 'Most Common Yaris Symptoms and Expert Fixes',
        contentAr: '1. رعشة المحرك على وضع التوقف (السلانسيه): السبب الأكثر شيوعاً هو اتساخ بوابة الهواء (Throttle Body) أو تراكم الكربون على حساس الماف (MAF Sensor). الحل: تنظيف إلكتروني دقيق بالسوائل المخصصة وإعادة ضبط البرمجة (Idle Re-learn).\n\n2. ضعف تبريد التكييف في الزحام الشديد: سببه غالباً اتساخ سربنتينة التكييف الخارجية أمام الردياتير أو نقص ضغط الفريون. الحل: غسيل السربنتينة بالضغط المنخفض واختبار ضغط الكباس وشحن فريون أصلي.\n\n3. خشونة في فتيس الـ CVT عند الإقلاع: ينتج ذلك عن تأخير تغيير زيت الفتيس المعتمد Toyota FE/TC كل 40,000 كم. الحل: تفريغ الزيت وتغيير فلتر الفتيس الداخلي وتنظيف مغناطيس كارتيرة الزيت.\n\n4. تزييق في الدريكسيون (الدركسيون الكهربائي EPS): سببه تآكل جلبة عمود الدريكسيون البلاستيكية. الحل: استبدال الجلبة بقطعة أصلية مع تشحيم خاص.',
        contentEn: '1. Idle vibration at stoplights: caused by carbonized throttle body or dirty MAF sensor. Solution: ultrasonic cleaning and idle relearn. 2. A/C cooling drop in traffic: dirty external condenser or low refrigerant. 3. CVT roughness: overdue transmission fluid. Always flush with Toyota FE fluid every 40k km. 4. Steering column click: worn EPS coupler bushing.',
        tipsAr: [
          'استخدم زيت تخليقي بلزوجة 0W-20 أو 5W-30 طبقاً لكتالوج تويوتا للحفاظ على حساسات الصبابات VVT-i',
          'لا تقم بتنظيف بوابة الهواء بضغط اليد العنيف دون فصل البطارية لتفادي تلف موتور البوابة الإلكتروني',
          'استبدل بوجيهات الإيريديوم كل 80,000 كم دون تأخير لضمان أعلى عزم وأقل استهلاك للبنزين'
        ],
        tipsEn: [
          'Always use 0W-20 or 5W-30 synthetic oil matching Toyota specs to protect VVT-i camshaft actuators',
          'Never force open the electronic throttle plate manually without proper procedure',
          'Replace iridium spark plugs strictly every 80k km for crisp engine throttle response'
        ]
      },
      {
        headingAr: 'لماذا تختار مركز الأصيل لصيانة سيارتك التويوتا؟',
        headingEn: 'Why Choose Al-Aseel for Your Toyota?',
        contentAr: 'نوفر أجهزة فحص تويوتا Techstream المتصلة بقواعد بيانات المصنع، ونستخدم فقط قطع الغيار الأصلية المختومة، بالإضافة إلى فنيين متخصصين على دراية تامة بكل مسمار في سيارات تويوتا.',
        contentEn: 'We employ Toyota Techstream diagnostic interfaces connected to factory schematics, authentic genuine parts, and seasoned master mechanics.'
      }
    ]
  }
];

export const MAINTENANCE_SCHEDULES = [
  {
    interval: '10,000 KM',
    titleAr: 'صيانة الـ 10,000 كم (صيانة دورية خفيفة)',
    titleEn: '10,000 KM Service (Express Maintenance)',
    recommendedForAr: 'كل 10 آلاف كم أو 6 أشهر',
    recommendedForEn: 'Every 10,000 KM or 6 months',
    itemsAr: [
      'تغيير زيت المحرك التخليقي بالكامل 10,000 كم',
      'تغيير فلتر الزيت الأصلي',
      'فحص وتنظيف فلتر الهواء وفلتر التكييف',
      'فحص مستوى زيت الفرامل وسوائل التبريد ومساحات الزجاج',
      'تربيط عفشة كامل ومراجعة تيل الفرامل بالأربع عجلات',
      'فحص ضغط الإطارات وضبطه'
    ],
    itemsEn: [
      'Full synthetic 10k km engine oil change',
      'Genuine OEM oil filter replacement',
      'Air filter & cabin filter inspection/cleaning',
      'Brake fluid, coolant, and washer fluid check',
      'Suspension bolt torque check & 4-wheel brake pad check',
      'Tire pressure check and adjustment'
    ],
    durationAr: '30 - 45 دقيقة',
    durationEn: '30 - 45 mins'
  },
  {
    interval: '40,000 KM',
    titleAr: 'صيانة الـ 40,000 كم (صيانة متوسطة شاملة)',
    titleEn: '40,000 KM Service (Comprehensive Intermediate)',
    recommendedForAr: 'كل 40 ألف كم أو سنتين',
    recommendedForEn: 'Every 40,000 KM or 2 years',
    itemsAr: [
      'جميع بنود صيانة الـ 10,000 كم بالكامل',
      'تغيير زيت الفتيس الأوتوماتيك / CVT مع فلتر الفتيس الداخلي',
      'تغيير فلتر الهواء وفلتر التكييف بقطع جديدة أصلية',
      'تنظيف بوابة الهواء الإلكترونية (Throttle Body) وإعادة البرمجة',
      'فحص وتغيير سائل الفرامل وتفريغ الهواء من الدورة',
      'ضبط زوايا ثلاثي الأبعاد بالكمبيوتر وترصيص العجلات'
    ],
    itemsEn: [
      'All 10,000 KM checklist items included',
      'Automatic / CVT transmission fluid and filter change',
      'Brand new OEM air filter and cabin A/C filter',
      'Electronic throttle body cleaning and idle calibration',
      'Brake fluid flush and hydraulic bleed',
      'Computerized 3D laser wheel alignment and balancing'
    ],
    durationAr: '90 - 120 دقيقة',
    durationEn: '90 - 120 mins'
  },
  {
    interval: '80,000 KM+',
    titleAr: 'صيانة الـ 80,000 - 100,000 كم (عمرة صيانة كبرى)',
    titleEn: '80,000 - 100,000 KM Service (Major Overhaul Check)',
    recommendedForAr: 'كل 80 إلى 100 ألف كم أو 4 سنوات',
    recommendedForEn: 'Every 80k - 100k KM or 4 years',
    itemsAr: [
      'جميع بنود صيانة الـ 40,000 كم بالكامل',
      'تغيير طقم شمعات الإشعال الإيريديوم (البوجيهات) الأصلية',
      'تغيير سير الكاتينة (أو فحص جنزير التايمنج) وسيور المجموعة',
      'تغيير سائل تبريد المحرك (الردياتير) الأصلي بالكامل',
      'فحص دورة التكييف وضغط الفريون وتنظيف السربنتينة',
      'فحص شامل لمنظومة التعليق والمساعدين وكبالن الدفع وقواعد المحرك',
      'كشف كمبيوتر شامل لجميع كنترولات السيارة واستخراج تقرير شامل'
    ],
    itemsEn: [
      'All 40,000 KM checklist items included',
      'Genuine laser iridium spark plugs replacement',
      'Timing belt / chain & accessory drive belt inspection/replacement',
      'Complete cooling system flush with genuine OEM antifreeze',
      'Complete A/C cycle pressure test, condenser wash, and gas recharge',
      'Full suspension overhaul inspection: struts, CV joints, engine mounts',
      'Full ECU scan across all vehicle modules with printed diagnostic health report'
    ],
    durationAr: '3 - 4 ساعات',
    durationEn: '3 - 4 hours'
  }
];
