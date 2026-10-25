import React, { useState } from 'react';
import { Package, ShieldCheck, Check, Search, Droplets, MessageSquare } from 'lucide-react';
import { PRODUCTS_DATA, SITE_METADATA } from '../data/siteData';

interface ProductsSectionProps {
  isRtl: boolean;
  onRequestProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ isRtl, onRequestProduct }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'parts' | 'oil'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const title = isRtl ? item.titleAr : item.titleEn;
    const desc = isRtl ? item.descAr : item.descEn;
    const matchesSearch =
      searchTerm === '' ||
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-14 sm:py-20 lg:py-24 bg-[#08090d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'قطع غيار وزيوت معتمدة' : 'OEM Parts & Fluids'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'ضمان الأصالة 100%' : '100% Genuine Guarantee'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'ما نقدمه من منتجات أصلية' : 'Genuine Spare Parts & Certified Oils'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'قطع غيار أصلية فابريكا لسيارات تويوتا وجيلي مع شهادات الضمان المعتمدة، بالإضافة لأرقى زيوت المحركات وسوائل التبريد وناقل الحركة.'
              : 'Direct access to certified OEM parts for Toyota & Geely alongside world-class synthetic engine oils and factory transmission fluids.'}
          </p>
        </div>

        {/* Visual Feature Split: Genuine Parts Showcase */}
        <div className="mb-10 sm:mb-14 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f1118]/85 grid grid-cols-1 lg:grid-cols-12 items-center shadow-xl">
          <div className="lg:col-span-5 aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden bg-[#08090d]">
            <img
              src={SITE_METADATA.partsImage}
              alt="Genuine OEM Spare Parts"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-10 space-y-4 text-start">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>{isRtl ? 'ضمان رسمي ضد التقليد' : 'OFFICIAL OEM WARRANTY'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {isRtl ? 'قطع غيار أصلية فابريكا بالباركود المعتمد' : 'Authentic OEM Components with Factory Barcode'}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {isRtl
                ? 'نحرص في مركز الأصيل على عدم استخدام أي قطع تجارية مجهولة المصدر. جميع المساعدين، تيل الفرامل، الطنابير، الفلاتر، والبوجيهات معتمدة مباشرة من تويوتا وجيلي وتأتي في عبواتها الأصلية برقم تسلسلي يمكن للعميل مطالعته بنفسه.'
                : 'All shock absorbers, brake pads, rotors, filters, and spark plugs are procured from certified distributors in tamper-evident factory packaging.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5 text-xs text-slate-200 font-medium">
              <div className="flex items-center gap-2 bg-[#08090d] px-3.5 py-2 rounded-xl border border-white/10">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>{isRtl ? 'عمر تشغيلي أطول' : 'Maximum durability'}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#08090d] px-3.5 py-2 rounded-xl border border-white/10">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>{isRtl ? 'توافق ميكانيكي تام 100%' : '100% Exact fit'}</span>
              </div>
              <div className="flex items-center gap-2 bg-[#08090d] px-3.5 py-2 rounded-xl border border-white/10">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>{isRtl ? 'شهادة ضمان معتمدة' : 'Full warranty'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter controls and search bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Functional filter control */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0f1118] border border-white/[0.08] rounded-2xl overflow-x-auto scrollbar-none">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {isRtl ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setFilterCategory('parts')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                filterCategory === 'parts'
                  ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>{isRtl ? 'قطع غيار أصلية' : 'Genuine Parts'}</span>
            </button>
            <button
              onClick={() => setFilterCategory('oil')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                filterCategory === 'oil'
                  ? 'bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/25'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Droplets className="w-4 h-4" />
              <span>{isRtl ? 'زيوت وسوائل' : 'Oils & Fluids'}</span>
            </button>
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isRtl ? 'ابحث عن قطعة أو موديل...' : 'Search parts or model...'}
              className="w-full bg-[#0f1118] border border-white/10 rounded-xl py-2.5 px-10 text-xs sm:text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredProducts.map((item) => {
            const title = isRtl ? item.titleAr : item.titleEn;
            const desc = isRtl ? item.descAr : item.descEn;
            const compatibility = isRtl ? item.compatibilityAr : item.compatibilityEn;
            const badge = isRtl ? item.badgeAr : item.badgeEn;

            return (
              <div
                key={item.id}
                className="bg-[#0f1118]/85 backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all hover:shadow-[0_8px_30px_rgb(229,185,103,0.08)] hover:-translate-y-1 text-start"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                    <span className="font-bold text-amber-400">{item.brand}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">{badge}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                    {title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {desc}
                  </p>

                  <div className="p-3.5 bg-[#08090d] rounded-xl border border-white/[0.06] mb-5 text-xs text-slate-200 space-y-1">
                    <span className="text-[11px] font-bold text-amber-400 block">
                      {isRtl ? 'التوافق والموديلات:' : 'Vehicle Fitment:'}
                    </span>
                    <span className="font-medium">{compatibility}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.specs.map((sp, idx) => (
                      <span key={idx} className="text-[11px] text-slate-300 bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 rounded-lg">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(isRtl ? `مرحباً مركز الأصيل، أود الاستفسار عن توفر وسعر: ${title}` : `Hello Al-Aseel, I want to inquire about availability and price of: ${title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-3 bg-[#08090d] hover:bg-white/[0.05] text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{isRtl ? 'استفسار واتساب' : 'WhatsApp'}</span>
                  </a>

                  <button
                    onClick={() => onRequestProduct(title)}
                    type="button"
                    className="py-2.5 px-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-all cursor-pointer whitespace-nowrap shadow-md shadow-amber-500/25"
                  >
                    {isRtl ? 'طلب حجز' : 'Reserve'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
