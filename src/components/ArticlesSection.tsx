import React, { useState } from 'react';
import { BookOpen, ArrowLeft, ArrowRight, X, Lightbulb, Share2, Check } from 'lucide-react';
import { ARTICLES_DATA, ArticleItem, SITE_METADATA } from '../data/siteData';

interface ArticlesSectionProps {
  isRtl: boolean;
  onOpenBooking: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ isRtl, onOpenBooking }) => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="articles" className="py-14 sm:py-20 lg:py-24 bg-[#0a0c12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'دليل المعرفة الميكانيكية' : 'Technical Knowledge Hub'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'مقالات مهندسي الأصيل' : 'Al-Aseel Engineering Guides'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'مقالات ونشرات صيانة السيارات' : 'Articles & Automotive Technical Guides'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'أدلة هندسية عملية مبسطة لملاك سيارات تويوتا وجيلي للتعرف على تشخيص الأعطال، وقاية المحرك والعفشة، وفهم علب الفيوزات والكهرباء.'
              : 'Practical engineering guides for Toyota and Geely owners to understand warning symptoms, preventative maintenance, and fuse diagnostics.'}
          </p>
        </div>

        {/* Featured Guide Banner */}
        <div className="mb-10 sm:mb-12 rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0f1118]/85 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-start shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-amber-400 font-bold">{isRtl ? 'دليل عملي مصور' : 'Diagnostic Guide'}</span>
              <span aria-hidden="true">·</span>
              <span>{isRtl ? 'فحص كمبيوتر متقدم' : 'ECU & Sensor Telemetry'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              {isRtl
                ? 'كيف تفحص علامة فحص المحرك (Check Engine) وقراءة أكواد الأعطال في مركز الأصيل؟'
                : 'How to diagnose Check Engine lights & retrieve DTC codes at Al-Aseel?'}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {isRtl
                ? 'إضاءة لمبة الأعطال ليست مدعاة للقلق إذا تم فحصها فوراً بأجهزة الكمبيوتر الدقيقة. نقوم بفحص بيانات الحساسات الحية للتأكد من خليط الهواء والوقود، كفاءة علبة البيئة، وحساسات الصبابات VVT-i.'
                : 'A Check Engine warning is best addressed with certified scanning rather than guesswork. We analyze live sensor waveforms to check fuel trims and catalytic efficiency.'}
            </p>

            <div className="pt-2">
              <button
                onClick={() => setActiveArticle(ARTICLES_DATA[0])}
                type="button"
                className="w-full sm:w-auto px-6 py-3 bg-[#08090d] hover:bg-white/[0.06] text-amber-300 border border-amber-500/30 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>{isRtl ? 'قراءة الدليل الكامل' : 'Read Full Engineering Guide'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 shadow-lg">
            <img
              src={SITE_METADATA.diagnosticImage}
              alt="Car Diagnostic Scanner"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {ARTICLES_DATA.map((article) => {
            const title = isRtl ? article.titleAr : article.titleEn;
            const summary = isRtl ? article.summaryAr : article.summaryEn;
            const readTime = isRtl ? article.readTimeAr : article.readTimeEn;
            const category = isRtl ? article.categoryAr : article.categoryEn;

            return (
              <article
                key={article.id}
                className="group bg-[#0f1118]/85 backdrop-blur-md rounded-2xl border border-white/[0.08] p-6 flex flex-col justify-between hover:border-amber-400/40 transition-all hover:shadow-[0_8px_30px_rgb(229,185,103,0.08)] hover:-translate-y-1 duration-300 text-start"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
                    <span className="text-amber-400 font-bold">{category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug mb-3">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(article)}
                    type="button"
                    className="text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>{isRtl ? 'اقرأ المقال كاملاً' : 'Read Full Article'}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </button>

                  <span className="text-xs text-slate-400 font-mono font-medium">ASG GUIDE</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#08090d]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#11131c] border border-white/15 rounded-2xl max-w-3xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-10 space-y-6 text-start shadow-2xl shadow-black/80">
            
            {/* Modal header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-amber-400 font-bold">{isRtl ? activeArticle.categoryAr : activeArticle.categoryEn}</span>
                  <span aria-hidden="true">·</span>
                  <span>{isRtl ? activeArticle.readTimeAr : activeArticle.readTimeEn}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {isRtl ? activeArticle.titleAr : activeArticle.titleEn}
                </h2>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors shrink-0"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-[#08090d] p-4 rounded-xl border border-white/[0.08]">
                {isRtl ? activeArticle.summaryAr : activeArticle.summaryEn}
              </p>

              {activeArticle.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-amber-400 font-mono text-base font-bold">0{idx + 1}.</span>
                    <span>{isRtl ? sec.headingAr : sec.headingEn}</span>
                  </h3>
                  
                  <div className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line font-normal">
                    {isRtl ? sec.contentAr : sec.contentEn}
                  </div>

                  {sec.tipsAr && (
                    <div className="mt-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                        <Lightbulb className="w-4 h-4" />
                        <span>{isRtl ? 'إرشادات مهندسي الأصيل:' : 'Engineering Guidelines:'}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                        {(isRtl ? sec.tipsAr : sec.tipsEn || []).map((tip, ti) => (
                          <li key={ti} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">✓</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-[#08090d] border border-white/10 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedLink ? (isRtl ? 'تم النسخ!' : 'Copied!') : (isRtl ? 'مشاركة' : 'Share')}</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#08090d] border border-white/10 rounded-xl"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenBooking();
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/25"
                >
                  {isRtl ? 'احجز فحصاً لسيارتك' : 'Book Check'}
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
