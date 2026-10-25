import React, { useRef, useEffect } from 'react';
import { Phone, MessageSquare, CheckCircle2, Wrench, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface HeroVideoSectionProps {
  isRtl: boolean;
  onOpenBooking: () => void;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ isRtl, onOpenBooking }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handled gracefully
        });
      }
    }
  }, []);

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#08090d] via-[#0c0e15] to-[#08090d]">
      
      {/* Luxury ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] sm:w-[750px] h-[350px] sm:h-[480px] bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 -right-10 w-[280px] sm:w-[450px] h-[350px] bg-blue-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text and Value Proposition */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-start">
            
            {/* Elegant metadata kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
              <span className="font-mono tracking-wider font-bold">ASG GROUP</span>
              <span className="text-white/20">·</span>
              <span>{isRtl ? 'زهراء المعادي' : 'Zahraa El Maadi'}</span>
              <span className="text-white/20">·</span>
              <span className="text-amber-400 font-bold">{isRtl ? 'تخصص تويوتا وجيلي' : 'Toyota & Geely Specialists'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2] tracking-tight">
              {isRtl ? (
                <>
                  مركز الأصيل لصيانة السيارات <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                    ASG group
                  </span>
                </>
              ) : (
                <>
                  Al-Aseel Automotive Service <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100">
                    ASG group
                  </span>
                </>
              )}
            </h1>

            {/* Body Description with enhanced contrast */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal">
              {isRtl ? (
                <>
                  مرحباً بكم في الأصيل: وجهتك الأرقى والأكثر موثوقية لصيانة وإصلاح سيارات 
                  <strong className="text-amber-300 font-semibold"> تويوتا </strong> و
                  <strong className="text-amber-300 font-semibold"> جيلي </strong>. 
                  نقدم منظومة هندسية متكاملة بأحدث أجهزة الفحص المعتمدة، قطع الغيار الأصلية، مع كادر فني محترف يضمن لك أعلى معايير الجودة وراحة البال.
                </>
              ) : (
                <>
                  Welcome to Al-Aseel: Your premier destination for master certified maintenance and repair of 
                  <strong className="text-amber-300 font-semibold"> Toyota </strong> and 
                  <strong className="text-amber-300 font-semibold"> Geely </strong> vehicles. 
                  Delivering precision engineering with factory diagnostic equipment and 100% genuine OEM components.
                </>
              )}
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-amber-500/25 active:scale-[0.98] text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
              >
                <Wrench className="w-4 h-4" />
                <span>{isRtl ? 'احجز موعد صيانة فوري' : 'Book Maintenance Visit'}</span>
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5">
                <a
                  href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(isRtl ? 'مرحباً مركز الأصيل، أود الاستفسار عن صيانة سيارتي' : 'Hello Al-Aseel, I would like to inquire about a car service')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-3.5 bg-[#0f1118] hover:bg-[#151923] text-emerald-400 font-semibold rounded-xl transition-all border border-emerald-500/30 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'واتساب' : 'WhatsApp'}</span>
                </a>

                <a
                  href={`tel:${SITE_METADATA.phone}`}
                  className="px-4 py-3.5 bg-[#0f1118] hover:bg-[#151923] text-slate-200 hover:text-white font-semibold rounded-xl transition-colors border border-white/10 text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span dir="ltr">{SITE_METADATA.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Trust highlights checklist */}
            <div className="pt-4 grid grid-cols-2 gap-2.5 sm:gap-3 text-xs text-slate-300 border-t border-white/[0.08]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-white">{isRtl ? 'فحص كمبيوتر معتمد' : 'Computer Diagnostics'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-white">{isRtl ? 'قطع غيار فابريكا أصلية' : '100% Genuine Parts'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-white">{isRtl ? 'فرن حراري إيطالي' : 'Italian Bake Oven'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-medium text-white">{isRtl ? 'ضمان رسمي مكتوب' : 'Certified Warranty'}</span>
              </div>
            </div>

          </div>

          {/* Autoplay Ambient Video (Zero controls, clean high-end framing) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#0e1017] border border-white/10 shadow-2xl shadow-black/60 group">
              
              <div className="relative aspect-video sm:aspect-[16/10] w-full bg-[#050608] overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover scale-[1.01]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={SITE_METADATA.heroImage}
                >
                  <source src={SITE_METADATA.videoUrl} type="video/mp4" />
                </video>

                {/* Subtle cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/85 via-transparent to-[#08090d]/30 pointer-events-none" />

                {/* Elegant status strip pinned at bottom */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[11px] sm:text-xs text-slate-200 bg-[#08090d]/75 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-semibold text-white">{isRtl ? 'جولة حية داخل مركز الأصيل' : 'Live Inside Al-Aseel Workshop'}</span>
                  </div>
                  <span className="font-mono text-amber-300 font-bold text-[10px] sm:text-xs">ASG FACILITY</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width 4-column KPI strip below the hero split */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1118]/80 backdrop-blur-sm border border-white/[0.08] space-y-1 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tabular-nums flex items-center gap-1.5">
              <span>+15</span>
              <span className="text-amber-400 text-sm font-sans font-bold">{isRtl ? 'عاماً' : 'Years'}</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isRtl ? 'خبرة متراكمة في صيانة تويوتا وجيلي' : 'Automotive repair & overhaul excellence'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1118]/80 backdrop-blur-sm border border-white/[0.08] space-y-1 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tabular-nums flex items-center gap-1.5">
              <span>+12,500</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isRtl ? 'سيارة تمت صيانتها بنجاح واحتراف' : 'Successfully serviced vehicles in Cairo'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1118]/80 backdrop-blur-sm border border-white/[0.08] space-y-1 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tabular-nums flex items-center gap-1.5">
              <span>100%</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isRtl ? 'قطع غيار أصلية ومطابقة للمواصفات' : 'Certified OEM parts & fluids'}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#0f1118]/80 backdrop-blur-sm border border-white/[0.08] space-y-1 hover:border-amber-400/30 transition-all">
            <div className="text-xl sm:text-3xl font-black text-white font-mono tabular-nums flex items-center gap-1.5">
              <span>24/7</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">
              {isRtl ? 'استجابة سريعة وحجز فوري عبر واتساب' : 'Fast WhatsApp support & booking'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
