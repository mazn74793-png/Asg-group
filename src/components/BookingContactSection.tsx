import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, MessageSquare, ExternalLink, AlertCircle, RefreshCw } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface BookingContactSectionProps {
  isRtl: boolean;
  prefilledService?: string;
  prefilledBrand?: string;
}

export const BookingContactSection: React.FC<BookingContactSectionProps> = ({
  isRtl,
  prefilledService = '',
  prefilledBrand = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: prefilledBrand || 'تويوتا Toyota',
    model: '',
    year: '2022',
    service: prefilledService || 'صيانة دورية شاملة',
    date: '',
    timeSlot: 'صباحاً 10:00 ص - 1:00 م',
    notes: '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
    if (prefilledBrand) {
      setFormData((prev) => ({ ...prev, brand: prefilledBrand }));
    }
  }, [prefilledService, prefilledBrand]);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState<null | {
    id: string;
    details: typeof formData;
  }>(null);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errors.name = isRtl ? 'يرجى كتابة الاسم بالكامل' : 'Please provide your full name';
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean || phoneClean.length < 10) {
      errors.phone = isRtl ? 'يرجى إدخال رقم هاتف صحيح (مثال: 01040006038)' : 'Please enter a valid phone number';
    }
    if (!formData.model.trim()) {
      errors.model = isRtl ? 'يرجى كتابة موديل السيارة' : 'Please enter vehicle model';
    }
    if (!formData.date) {
      errors.date = isRtl ? 'يرجى اختيار تاريخ الموعد' : 'Please select preferred date';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `ASG-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingSuccess({
        id: generatedId,
        details: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setBookingSuccess(null);
    setFormData({
      name: '',
      phone: '',
      brand: 'تويوتا Toyota',
      model: '',
      year: '2022',
      service: 'صيانة دورية شاملة',
      date: '',
      timeSlot: 'صباحاً 10:00 ص - 1:00 م',
      notes: '',
    });
  };

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-[#08090d] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-start">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2.5">
            <span>{isRtl ? 'حجز المواعيد والتواصل' : 'Easy Scheduling & Direct Contact'}</span>
            <span aria-hidden="true">·</span>
            <span>{isRtl ? 'خدمة سريعة بدون انتظار' : 'Zero Wait Time Guarantee'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {isRtl ? 'اجعل موعدك بسيطًا وسريعًا' : 'Make Your Appointment Simple & Fast'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            {isRtl
              ? 'احجز موعدك مسبقاً لاستقبال سيارتك فور وصولك دون أي انتظار. مهندس الاستقبال وفنيو المركز سيكونون في انتظارك بكافة الأجهزة وقطع الغيار.'
              : 'Reserve your inspection slot in advance to ensure instant vehicle check-in with dedicated service bays.'}
          </p>
        </div>

        {/* 2-Column Booking and Contact Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Interactive Appointment Booking Card */}
          <div className="lg:col-span-7 bg-[#0f1118]/90 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-xl text-start">
            {bookingSuccess ? (
              <div className="space-y-6 text-center py-4">
                <div className="w-16 h-16 bg-emerald-500/15 text-emerald-400 rounded-2xl mx-auto flex items-center justify-center border border-emerald-500/25">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {isRtl ? 'رقم تأكيد الحجز:' : 'Booking Ref:'} {bookingSuccess.id}
                  </span>
                  <h3 className="text-2xl font-black text-white">
                    {isRtl ? 'تم تسجيل طلب موعدك بنجاح!' : 'Your Appointment Has Been Booked!'}
                  </h3>
                  <p className="text-sm text-slate-200 max-w-md mx-auto font-normal">
                    {isRtl
                      ? `شكراً لك أ/ ${bookingSuccess.details.name}. سيتواصل معك فريق الاستقبال لتأكيد الموعد واستقبال سيارتك.`
                      : `Thank you, ${bookingSuccess.details.name}. Our front desk team will contact you shortly.`}
                  </p>
                </div>

                <div className="bg-[#08090d] p-5 rounded-2xl border border-white/10 text-xs sm:text-sm text-slate-200 space-y-2.5 text-start max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">{isRtl ? 'السيارة:' : 'Vehicle:'}</span>
                    <span className="font-semibold text-white">{bookingSuccess.details.brand} {bookingSuccess.details.model} ({bookingSuccess.details.year})</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">{isRtl ? 'الخدمة المطلوبة:' : 'Requested Service:'}</span>
                    <span className="font-bold text-amber-300">{bookingSuccess.details.service}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.06]">
                    <span className="text-slate-400">{isRtl ? 'التاريخ والوقت:' : 'Date & Time:'}</span>
                    <span className="font-semibold text-white">{bookingSuccess.details.date} ({bookingSuccess.details.timeSlot})</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">{isRtl ? 'الهاتف:' : 'Phone:'}</span>
                    <span className="font-semibold text-white font-mono" dir="ltr">{bookingSuccess.details.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/${SITE_METADATA.whatsapp}?text=${encodeURIComponent(
                      `مرحباً مركز الأصيل، قمت بتسجيل حجز برقم (${bookingSuccess.id}):\nالاسم: ${bookingSuccess.details.name}\nالسيارة: ${bookingSuccess.details.brand} ${bookingSuccess.details.model} ${bookingSuccess.details.year}\nالخدمة: ${bookingSuccess.details.service}\nالتاريخ: ${bookingSuccess.details.date}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/30"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{isRtl ? 'إرسال تأكيد عبر واتساب' : 'Send via WhatsApp'}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#08090d] hover:bg-white/[0.06] text-slate-200 font-semibold rounded-xl text-xs sm:text-sm border border-white/10 transition-colors cursor-pointer"
                  >
                    {isRtl ? 'حجز موعد آخر' : 'Book Another'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {isRtl ? 'استمارة حجز موعد صيانة' : 'Service Appointment Booking Form'}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 font-normal">
                    {isRtl ? 'املأ البيانات وسيتم التجهيز لاستقبال سيارتك فوراً' : 'Fill details for immediate scheduling'}
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'الاسم بالكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRtl ? 'مثال: محمد أحمد' : 'e.g. Mohamed Ahmed'}
                      className={`w-full bg-[#08090d] border rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        formErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isRtl ? '01040006038' : '01040006038'}
                      dir="ltr"
                      className={`w-full bg-[#08090d] border rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        formErrors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Brand & Model & Year */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'ماركة السيارة' : 'Make'}
                    </label>
                    <select
                      value={formData.brand}
                      onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                      className="w-full bg-[#08090d] border border-white/10 focus:border-amber-400 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-white focus:outline-none"
                    >
                      <option value="تويوتا Toyota">تويوتا Toyota</option>
                      <option value="جيلي Geely">جيلي Geely</option>
                      <option value="نيسان Nissan">نيسان Nissan</option>
                      <option value="هيونداي Hyundai">هيونداي Hyundai</option>
                      <option value="كيا Kia">كيا Kia</option>
                      <option value="أخرى Other">ماركة أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'الموديل *' : 'Model *'}
                    </label>
                    <input
                      type="text"
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      placeholder={isRtl ? 'مثال: كورولا / امجراند' : 'e.g. Corolla / Emgrand'}
                      className={`w-full bg-[#08090d] border rounded-xl py-3 px-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${
                        formErrors.model ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {formErrors.model && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.model}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'سنة الصنع' : 'Year'}
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full bg-[#08090d] border border-white/10 focus:border-amber-400 rounded-xl py-3 px-3.5 text-xs sm:text-sm text-white focus:outline-none font-mono"
                    >
                      {Array.from({ length: 18 }, (_, i) => 2026 - i).map((y) => (
                        <option key={y} value={y.toString()}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Needed */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {isRtl ? 'الخدمة المطلوبة' : 'Service Required'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#08090d] border border-white/10 focus:border-amber-400 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none"
                  >
                    <option value="صيانة دورية شاملة">صيانة دورية شاملة (10k / 40k / 80k)</option>
                    <option value="الأعطال الكهربائية وكشف الكمبيوتر">الأعطال الكهربائية وكشف الكمبيوتر</option>
                    <option value="الإطارات والعفشة والاتزان">الإطارات والعفشة والاتزان وضبط زوايا</option>
                    <option value="تغيير زيوت وفلاتر">تغيير زيوت وفلاتر وسوائل المحرك</option>
                    <option value="صيانة وتعبئة التكييف">صيانة وتعبئة التكييف وفحص التسريب</option>
                    <option value="سمكرة ودهان وفرن حراري">سمكرة ودهان وفرن حراري / PDR</option>
                    <option value="طلب قطعة غيار أصلية">طلب وتسعير قطعة غيار أصلية</option>
                    <option value="فحص شامل قبل الشراء / سفر">فحص شامل قبل الشراء أو السفر</option>
                  </select>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'التاريخ المفضل *' : 'Preferred Date *'}
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full bg-[#08090d] border rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none transition-colors ${
                        formErrors.date ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
                      }`}
                    />
                    {formErrors.date && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.date}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      {isRtl ? 'الفترة الزمنية المفضلة' : 'Preferred Time Slot'}
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#08090d] border border-white/10 focus:border-amber-400 rounded-xl py-3 px-4 text-xs sm:text-sm text-white focus:outline-none"
                    >
                      <option value="صباحاً 10:00 ص - 1:00 م">صباحاً (10:00 ص - 1:00 م)</option>
                      <option value="ظهراً 1:00 م - 4:00 م">ظهراً (1:00 م - 4:00 م)</option>
                      <option value="مساءً 4:00 م - 7:00 م">مساءً (4:00 م - 7:00 م)</option>
                      <option value="مساءً 7:00 م - 10:00 م">مساءً (7:00 م - 10:00 م)</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                    {isRtl ? 'ملاحظات أو أعراض تشتكي منها (اختياري)' : 'Symptoms or Notes (Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={isRtl ? 'مثال: وجود صوت تزييق في المطبات، أو لمبة الماكينة منورة...' : 'Describe any noise, warning light, or required check...'}
                    className="w-full bg-[#08090d] border border-white/10 focus:border-amber-400 rounded-xl py-2.5 px-4 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 active:scale-[0.99] text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>{isRtl ? 'تأكيد حجز موعد الصيانة' : 'Confirm Service Booking'}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* Column 2: Direct Contact, Working Hours & Map */}
          <div className="lg:col-span-5 space-y-5 text-start">
            
            {/* Contact Information Card */}
            <div className="bg-[#0f1118]/90 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{isRtl ? 'تواصل معنا مباشرة' : 'Contact Us Directly'}</span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'رقم الهاتف المباشر:' : 'Direct Phone:'}</span>
                    <a
                      href={`tel:${SITE_METADATA.phone}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors font-mono"
                      dir="ltr"
                    >
                      {SITE_METADATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'واتساب الدعم السريع:' : 'WhatsApp Support:'}</span>
                    <a
                      href={`https://wa.me/${SITE_METADATA.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-bold text-emerald-400 hover:underline font-mono"
                      dir="ltr"
                    >
                      +20 104 000 6038
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'البريد الإلكتروني:' : 'Email Address:'}</span>
                    <a
                      href={`mailto:${SITE_METADATA.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-400 transition-colors font-mono"
                    >
                      {SITE_METADATA.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'العنوان:' : 'Address:'}</span>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                      {isRtl ? SITE_METADATA.addressAr : SITE_METADATA.addressEn}
                    </p>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{isRtl ? 'مواعيد العمل:' : 'Working Hours:'}</span>
                    <p className="text-xs text-slate-300 leading-snug font-medium">
                      {isRtl ? SITE_METADATA.workingHoursAr : SITE_METADATA.workingHoursEn}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded Google Maps */}
            <div className="bg-[#0f1118]/90 backdrop-blur-md border border-white/[0.08] rounded-2xl overflow-hidden p-2.5 shadow-xl">
              <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-200 font-medium">
                <span className="font-semibold text-white">{isRtl ? 'موقع المركز على الخريطة' : 'Workshop Location Map'}</span>
                <a
                  href="https://maps.app.goo.gl/uP9bB"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>{isRtl ? 'فتح في خرائط جوجل' : 'Open in Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[250px] sm:h-[280px] rounded-xl overflow-hidden bg-[#08090d]">
                <iframe
                  title="Al-Aseel Automotive Location Map"
                  src={SITE_METADATA.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
