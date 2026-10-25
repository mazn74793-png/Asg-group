import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Globe } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface NavbarProps {
  isRtl: boolean;
  onToggleLanguage: () => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isRtl, onToggleLanguage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = isRtl
    ? [
        { label: 'الرئيسية', href: '#hero' },
        { label: 'خدماتنا', href: '#services' },
        { label: 'ماركاتنا', href: '#brands' },
        { label: 'الصيانات', href: '#maintenance' },
        { label: 'قطع الغيار والزيوت', href: '#products' },
        { label: 'المقالات', href: '#articles' },
        { label: 'تواصل معنا', href: '#contact' },
      ]
    : [
        { label: 'Home', href: '#hero' },
        { label: 'Services', href: '#services' },
        { label: 'Brands', href: '#brands' },
        { label: 'Maintenance', href: '#maintenance' },
        { label: 'Parts & Oils', href: '#products' },
        { label: 'Articles', href: '#articles' },
        { label: 'Contact', href: '#contact' },
      ];

  return (
    <header className="sticky top-0 z-40 bg-[#08090d]/90 backdrop-blur-xl border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 sm:gap-8 h-20">
          
          {/* Zone 1: Single Brand Wordmark with luxury badge */}
          <a
            href="#hero"
            className="text-lg sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2.5 group"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-sm sm:text-base shadow-md shadow-amber-500/20 group-hover:scale-105 transition-all">
              ASG
            </span>
            <span className="font-extrabold text-white group-hover:text-amber-300 transition-colors">
              {isRtl ? 'الأصيل أوتوموتيف' : 'Al-Aseel Automotive'}
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text links with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-400 after:to-amber-200 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary CTA Button + Language toggle */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onToggleLanguage}
              type="button"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer"
              title="Change Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRtl ? 'English' : 'عربي'}</span>
            </button>

            <a
              href={`tel:${SITE_METADATA.phone}`}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span dir="ltr">{SITE_METADATA.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenBooking}
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-[0.98] rounded-xl transition-all shadow-lg shadow-amber-500/25 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{isRtl ? 'حجز موعد صيانة' : 'Book Appointment'}</span>
            </button>
          </div>

          {/* Mobile hamburger & quick triggers */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleLanguage}
              type="button"
              className="p-2 text-slate-200 hover:text-white bg-white/[0.04] border border-white/10 rounded-xl"
              title="Language"
            >
              <Globe className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-slate-200 hover:text-white bg-white/[0.04] border border-white/10 rounded-xl"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0c12]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-300 hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href={`tel:${SITE_METADATA.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/10 rounded-xl"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span dir="ltr">{SITE_METADATA.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              type="button"
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25"
            >
              <Calendar className="w-4 h-4" />
              <span>{isRtl ? 'حجز موعد صيانة فوري' : 'Book Maintenance Visit'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
