import React, { useState } from 'react';
import { ShieldCheck, Check, Cpu, Car } from 'lucide-react';
import { BRANDS_DATA } from '../data/siteData';

interface BrandsSectionProps {
  isRtl: boolean;
  onSelectBrandForBooking: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ isRtl, onSelectBrandForBooking }) => {
  const [selectedBrandId, setSelectedBrandId] = useState<string>('toyota');
  const activeBrand = BRANDS_DATA.find((b) => b.id === selectedBrandId) || BRANDS_DATA[0];

  return (
    <section id="brands" className="py-14 sm:py-20 lg:py-24 bg-[#08090d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'تخصص واحتراف هندسي' : 'Engineering Specialization'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'خبرة عميقة بكتالوجات المصنع' : 'Factory Service Schematics'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'ماركات سياراتنا وتخصصنا' : 'Specialized Vehicle Brands'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'تخصص رائد ومعتمد في سيارات تويوتا وجيلي، مع توفير برامج التشخيص الأصلية وأجهزة المعايرة المعتمدة وقطع الغيار الأصلية.'
              : 'Dedicated mastery in Toyota and Geely vehicles, featuring official diagnostic protocols, chassis blueprints, and verified OEM components.'}
          </p>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex items-center gap-2.5 mb-8 p-1.5 bg-[#0f1118] border border-white/[0.08] rounded-2xl overflow-x-auto scrollbar-none max-w-xl">
          {BRANDS_DATA.map((brand) => {
            const isActive = brand.id === selectedBrandId;
            return (
              <button
                key={brand.id}
                onClick={() => setSelectedBrandId(brand.id)}
                className={`flex-1 min-w-[130px] px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <Car className="w-4 h-4 shrink-0" />
                <span>{isRtl ? brand.nameAr : brand.nameEn}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Brand Detail Showcase */}
        <div className="bg-[#0f1118]/85 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center text-start shadow-xl">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <Cpu className="w-4 h-4" />
              <span>{isRtl ? 'برمجة كمبيوتر وتشخيص معتمد' : 'TECHSTREAM & OEM DIAGNOSTICS'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isRtl ? activeBrand.nameAr : activeBrand.nameEn}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {isRtl ? activeBrand.specialtyAr : activeBrand.specialtyEn}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {isRtl ? activeBrand.descriptionAr : activeBrand.descriptionEn}
            </p>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                {isRtl ? 'الموديلات الأكثر خدمة بالمركز:' : 'Popular Models Frequently Serviced:'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeBrand.popularModels.map((model, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 bg-[#08090d] border border-white/10 text-xs text-slate-200 rounded-xl font-medium"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectBrandForBooking(isRtl ? activeBrand.nameAr : activeBrand.nameEn)}
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
              >
                {isRtl ? `احجز صيانة لسيارة ${activeBrand.nameAr}` : `Book Service for ${activeBrand.nameEn}`}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#08090d] rounded-2xl p-6 border border-white/10 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{isRtl ? 'مزايا صيانة هذه الماركة في الأصيل:' : 'Our Brand Service Advantages:'}</span>
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'مهندسون وفنيون معتمدون وذوو خبرة عميقة بالمحرك والعفشة' : 'Master mechanics certified in powertrain and chassis systems'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'توفر فوري لقطع الغيار الأصلية وفلاتر الفابريكا وسوائل المصنع' : 'Immediate stock of factory OEM filters, brake kits, and fluids'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'كشف كمبيوتر دقيق يحدد العطل بالمللي دون تجارب عشوائية' : 'Pinpoint electronic scanning eliminating guesswork or parts firing'}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{isRtl ? 'ضمان رسمي مكتوب على كافة أعمال الصيانة والمصنعية' : 'Official written warranty on all labor and installed parts'}</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
