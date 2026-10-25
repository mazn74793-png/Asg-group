import React, { useState } from 'react';
import { Clock, CheckCircle2, Calendar, Gauge } from 'lucide-react';
import { MAINTENANCE_SCHEDULES } from '../data/siteData';

interface MaintenanceCalculatorProps {
  isRtl: boolean;
  onSelectMaintenancePackage: (packageName: string) => void;
}

export const MaintenanceCalculator: React.FC<MaintenanceCalculatorProps> = ({
  isRtl,
  onSelectMaintenancePackage,
}) => {
  const [selectedIntervalIndex, setSelectedIntervalIndex] = useState<number>(0);
  const activePackage = MAINTENANCE_SCHEDULES[selectedIntervalIndex];

  return (
    <section id="maintenance" className="py-14 sm:py-20 lg:py-24 bg-[#0a0c12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'جداول الصيانة المعتمدة' : 'Scheduled Maintenance'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'الحفاظ على عمر المحرك وكفاءة الوقود' : 'Engine Longevity & Fuel Economy'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'الصيانات الدورية وجدول الفحص' : 'Maintenance Packages & Intervals'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'اختر الكيلومترات المقطوعة لسيارتك للتعرف على جدول الفحص الرسمي وقطع الغيار الواجب استبدالها طبقاً لكتالوج المصنع.'
              : 'Select your vehicle odometer interval to review official manufacturer inspection points, fluid flushes, and certified service procedures.'}
          </p>
        </div>

        {/* Interval Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
          {MAINTENANCE_SCHEDULES.map((pkg, idx) => {
            const isSelected = idx === selectedIntervalIndex;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIntervalIndex(idx)}
                type="button"
                className={`p-5 rounded-2xl text-start border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0f1118] border-amber-400/60 shadow-[0_4px_25px_rgb(229,185,103,0.12)]'
                    : 'bg-[#08090d] border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-slate-400'}`}>
                    {pkg.interval}
                  </span>
                  <Gauge className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                </div>
                <div className={`text-sm sm:text-base font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {isRtl ? pkg.titleAr : pkg.titleEn}
                </div>
                <div className="text-xs text-slate-300 mt-1 font-medium">
                  {isRtl ? pkg.recommendedForAr : pkg.recommendedForEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Package Card */}
        <div className="bg-[#0f1118]/85 backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 sm:p-10 text-start shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                {activePackage.interval} {isRtl ? 'فحص شامل' : 'Inspection Checklist'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {isRtl ? activePackage.titleAr : activePackage.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                {isRtl ? activePackage.recommendedForAr : activePackage.recommendedForEn}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-200 bg-[#08090d] border border-white/10 px-4 py-3 rounded-xl font-medium">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isRtl ? `المدة المقدرة: ${activePackage.durationAr}` : `Est. Duration: ${activePackage.durationEn}`}</span>
              </div>

              <button
                onClick={() => onSelectMaintenancePackage(isRtl ? activePackage.titleAr : activePackage.titleEn)}
                type="button"
                className="px-6 py-3 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{isRtl ? 'احجز هذه الصيانة' : 'Book This Package'}</span>
              </button>
            </div>
          </div>

          {/* Checklist Items Grid */}
          <div className="mt-8">
            <h4 className="text-sm font-bold text-white mb-4">
              {isRtl ? 'البنود التي يتم فحصها وتغييرها في هذه الصيانة:' : 'Inspection and Service Checklist:'}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(isRtl ? activePackage.itemsAr : activePackage.itemsEn).map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3 text-xs sm:text-sm text-slate-200 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
