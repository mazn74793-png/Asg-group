import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroVideoSection } from './components/HeroVideoSection';
import { ServicesSection } from './components/ServicesSection';
import { BrandsSection } from './components/BrandsSection';
import { MaintenanceCalculator } from './components/MaintenanceCalculator';
import { ProductsSection } from './components/ProductsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { BookingContactSection } from './components/BookingContactSection';
import { Footer } from './components/Footer';
import { MessageSquare, Phone } from 'lucide-react';
import { SITE_METADATA } from './data/siteData';

export default function App() {
  const [isRtl, setIsRtl] = useState(true);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledBrand, setPrefilledBrand] = useState('');

  useEffect(() => {
    document.documentElement.lang = isRtl ? 'ar' : 'en';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);

  const toggleLanguage = () => {
    setIsRtl((prev) => !prev);
  };

  const scrollToBooking = (service?: string, brand?: string) => {
    if (service) setPrefilledService(service);
    if (brand) setPrefilledBrand(brand);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#08090d] text-slate-100 flex flex-col font-sans ${isRtl ? 'rtl' : 'ltr'} selection:bg-amber-400 selection:text-slate-950`}>
      
      {/* Strict 3-zone Top Bar Contract Navbar */}
      <Navbar
        isRtl={isRtl}
        onToggleLanguage={toggleLanguage}
        onOpenBooking={() => scrollToBooking()}
      />

      <main className="flex-1">
        {/* Hero Video & Value Proposition (Autoplay ambient video with zero player controls) */}
        <HeroVideoSection
          isRtl={isRtl}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* What We Offer: Services Section (ما نقدمه من خدمات) */}
        <ServicesSection
          isRtl={isRtl}
          onSelectServiceForBooking={(serviceTitle) => scrollToBooking(serviceTitle)}
        />

        {/* Specialized Car Brands (ماركات سياراتنا) */}
        <BrandsSection
          isRtl={isRtl}
          onSelectBrandForBooking={(brandName) => scrollToBooking(undefined, brandName)}
        />

        {/* Maintenance Intervals & Packages (الصيانات) */}
        <MaintenanceCalculator
          isRtl={isRtl}
          onSelectMaintenancePackage={(packageName) => scrollToBooking(packageName)}
        />

        {/* Genuine Products & Certified Oils (ما نقدمه من منتجات) */}
        <ProductsSection
          isRtl={isRtl}
          onRequestProduct={(productName) => scrollToBooking(`طلب قطعة: ${productName}`)}
        />

        {/* Technical Articles & Maintenance Guides (مقالات) */}
        <ArticlesSection
          isRtl={isRtl}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* Fast Booking, Contact & Map (اجعل موعدك بسيطًا وسريعًا) */}
        <BookingContactSection
          isRtl={isRtl}
          prefilledService={prefilledService}
          prefilledBrand={prefilledBrand}
        />
      </main>

      {/* Quiet Footer */}
      <Footer isRtl={isRtl} />

      {/* Floating Action Buttons for Quick WhatsApp & Call (Mobile thumb friendly) */}
      <div className={`fixed bottom-4 ${isRtl ? 'left-4' : 'right-4'} z-30 flex items-center gap-2.5`}>
        <a
          href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(isRtl ? 'مرحباً مركز الأصيل، أود الاستفسار عن خدمة صيانة لسيارتي' : 'Hello Al-Aseel Center, I would like to inquire about a car service')}`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 hover:scale-105 active:scale-95 transition-all border border-emerald-400/30"
          title={isRtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
          aria-label="WhatsApp Contact"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>

        <a
          href={`tel:${SITE_METADATA.phone}`}
          className="hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 text-slate-950 items-center justify-center shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all border border-amber-300/40 font-bold"
          title={isRtl ? 'اتصل الآن' : 'Call Now'}
          aria-label="Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

    </div>
  );
}
