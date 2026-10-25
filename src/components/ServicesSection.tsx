import React, { useState } from 'react';
import { Zap, Disc, Droplets, Sparkles, Wind, Wrench, CheckCircle2, Clock, ShieldCheck, X } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/siteData';

interface ServicesSectionProps {
  isRtl: boolean;
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ isRtl, onSelectServiceForBooking }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Disc':
        return <Disc className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Wind':
        return <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      case 'Wrench':
      default:
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 lg:py-24 bg-[#0a0c12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'خدماتنا المتكاملة' : 'Our Capabilities'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'هندسة صيانة بأعلى المعايير' : 'Precision Automotive Engineering'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'ما نقدمه من خدمات صيانة وإصلاح' : 'Our Professional Services'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'باقة شاملة تغطي كافة متطلبات سيارتك مع مهندسين معتمدين، بدءاً من كشف الكمبيوتر والكهرباء الدقيق وحتى السمكرة والدهان في أحدث الأفران الحرارية الإيطالية.'
              : 'End-to-end automotive capabilities covering certified computerized diagnostics, suspension rebuilds, bake oven refinishing, and scheduled servicing.'}
          </p>
        </div>

        {/* Services Bento Grid with Modern Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, index) => {
            const title = isRtl ? service.titleAr : service.titleEn;
            const shortDesc = isRtl ? service.shortDescAr : service.shortDescEn;
            const duration = isRtl ? service.durationAr : service.durationEn;
            const warranty = isRtl ? service.warrantyAr : service.warrantyEn;
            const features = isRtl ? service.featuresAr : service.featuresEn;

            return (
              <div
                key={service.id}
                className="group relative bg-[#0f1118]/85 backdrop-blur-md rounded-2xl border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 p-6 flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(229,185,103,0.08)] hover:-translate-y-1"
              >
                <div>
                  {/* Top card header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 via-amber-600/10 to-transparent border border-amber-500/25 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400/70 tracking-widest">
                      0{index + 1}.
                    </span>
                  </div>

                  {/* Title & Short Description with high contrast */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6">
                    {features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Metadata and Action */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2 text-xs">
                  <div className="space-y-1 text-slate-300">
                    <div className="flex items-center gap-1.5 font-mono text-xs">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-amber-400 font-medium text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate max-w-[130px] sm:max-w-[150px]">{warranty}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setActiveModalService(service)}
                      type="button"
                      className="px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 rounded-xl transition-all cursor-pointer"
                    >
                      {isRtl ? 'التفاصيل' : 'Details'}
                    </button>
                    <button
                      onClick={() => onSelectServiceForBooking(title)}
                      type="button"
                      className="px-4 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-95 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-md shadow-amber-500/20"
                    >
                      {isRtl ? 'حجز' : 'Book'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 bg-[#08090d]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#11131c] border border-white/15 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[88vh] overflow-y-auto shadow-2xl shadow-black/80 text-start">
            
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                  {getIcon(activeModalService.icon)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {isRtl ? activeModalService.titleAr : activeModalService.titleEn}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                    <span>{isRtl ? activeModalService.durationAr : activeModalService.durationEn}</span>
                    <span>·</span>
                    <span className="text-amber-400 font-semibold">{isRtl ? activeModalService.warrantyAr : activeModalService.warrantyEn}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveModalService(null)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {isRtl ? activeModalService.fullDescAr : activeModalService.fullDescEn}
              </p>

              <div>
                <h4 className="text-sm font-bold text-amber-300 mb-3">
                  {isRtl ? 'يشمل هذا الفحص والصيانة:' : 'What is included in this service:'}
                </h4>
                <ul className="space-y-2.5">
                  {(isRtl ? activeModalService.featuresAr : activeModalService.featuresEn).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 hover:text-white bg-white/[0.05] border border-white/10 rounded-xl"
              >
                {isRtl ? 'إغلاق' : 'Close'}
              </button>

              <button
                onClick={() => {
                  const title = isRtl ? activeModalService.titleAr : activeModalService.titleEn;
                  setActiveModalService(null);
                  onSelectServiceForBooking(title);
                }}
                className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/25"
              >
                {isRtl ? 'طلب حجز هذه الخدمة' : 'Request This Service'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
