import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface FooterProps {
  isRtl: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isRtl }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/[0.08] text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-start">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-sm shadow-md shadow-amber-500/20">
                ASG
              </span>
              <span className="text-xl font-bold text-white tracking-tight">
                {isRtl ? 'الأصيل أوتوموتيف' : 'Al-Aseel Automotive'}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {isRtl
                ? 'مركز الأصيل لصيانة السيارات Asg group - المركز المتخصص في صيانة وإصلاح سيارات تويوتا وجيلي وجميع السيارات الحديثة بزهراء المعادي.'
                : 'Al-Aseel Automotive Service Center (ASG Group) - Premier automotive repair and maintenance specialists in Zahraa El Maadi, Cairo.'}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isRtl ? 'أقسام الموقع' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'الرئيسية ومقدمة المركز' : 'Home & Facility'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'ما نقدمه من خدمات' : 'Our Capabilities'}
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'ماركات سياراتنا (تويوتا وجيلي)' : 'Toyota & Geely Expertise'}
                </a>
              </li>
              <li>
                <a href="#maintenance" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'جداول وفحص الصيانات' : 'Scheduled Maintenance'}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'قطع غيار وزيوت أصلية' : 'Genuine Parts & Oils'}
                </a>
              </li>
              <li>
                <a href="#articles" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'مقالات وأدلة الصيانة' : 'Technical Articles'}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isRtl ? 'خدمات الصيانة' : 'Core Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'الأعطال الكهربائية والكمبيوتر' : 'Electrical & ECU Diagnostics'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'الإطارات والعفشة وضبط الزوايا' : 'Tires & 3D Wheel Alignment'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'تغيير الزيوت والسوائل التخليقية' : 'Synthetic Oil & Fluid Flush'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'سمكرة ودهان وفرن حراري' : 'Bake Oven Spray & Dent Repair'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  {isRtl ? 'صيانة التكييف وشحن الفريون' : 'A/C Evaporator & Freon Refill'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {isRtl ? 'تواصل معنا' : 'Direct Contacts'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`tel:${SITE_METADATA.phone}`} className="hover:text-white font-mono" dir="ltr">
                  {SITE_METADATA.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${SITE_METADATA.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white font-mono" dir="ltr">
                  +20 104 000 6038
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${SITE_METADATA.email}`} className="hover:text-white">
                  {SITE_METADATA.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{isRtl ? SITE_METADATA.addressAr : SITE_METADATA.addressEn}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and to-top button */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {isRtl ? 'مركز الأصيل لصيانة السيارات ASG Group. جميع الحقوق محفوظة.' : 'Al-Aseel Automotive Service Center ASG Group. All rights reserved.'}
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>{isRtl ? 'العودة للأعلى' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
