import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, Navigation, ShieldCheck, Tag, ArrowRight } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const AtAGlanceHero: React.FC = () => {
  return (
    <section id="home" className="py-12 md:py-16 bg-slate-50/60 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column hero container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: At a Glance Card matching grexa.site structure */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8 transition-colors">
            
            {/* Header with Title & Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  At a glance
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                  {SHOP_INFO.name}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Managed by <strong className="text-slate-800 dark:text-slate-200 font-semibold">{SHOP_INFO.owner}</strong> • Visnagar, Gujarat
                </p>
              </div>

              {/* Star Rating Badge matching grexa.site */}
              <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 bg-amber-50 dark:bg-amber-950/30 sm:bg-transparent dark:sm:bg-transparent p-3 sm:p-0 rounded-2xl border sm:border-0 border-amber-200/60 dark:border-amber-900/40">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-extrabold text-base text-slate-900 dark:text-white">
                    {SHOP_INFO.rating}
                  </span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Based on {SHOP_INFO.reviewCount}
                </span>
              </div>
            </div>

            {/* Quick Info Grid (What we do, Location, Business hours) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* 1. What we do */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  What we do
                </div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  Mobile Accessories, 360° Lamination, Smartphone Repair Shop
                </p>
              </div>

              {/* 2. Location */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Location
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  {SHOP_INFO.shopNumber}, {SHOP_INFO.address}
                </p>
              </div>

              {/* 3. Business hours */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Business hours
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                  Mon–Sat: {SHOP_INFO.hoursWeekday}<br />
                  Sun: {SHOP_INFO.hoursSunday}
                </p>
              </div>

            </div>

            {/* Notice text */}
            <p className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
              "You can contact us anytime during the day with your smartphone repair or skin lamination query. Walk-ins welcome anytime!"
            </p>

            {/* Action buttons matching grexa.site */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${SHOP_INFO.phoneDial}`}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {SHOP_INFO.phoneFormatted}</span>
              </a>

              <a
                href={SHOP_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={SHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs tracking-wide border border-slate-200 dark:border-slate-700 shadow-xs transition-all"
              >
                <Navigation className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Get directions</span>
              </a>
            </div>

          </div>

          {/* Right Column: Special Offers & Store Highlights matching grexa.site promo cards */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Promo Card 1: 20% Off Offer */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-7 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-xs">
                <Tag className="w-3.5 h-3.5" />
                Special In-Store Offer
              </div>

              <h2 className="font-heading text-3xl font-extrabold leading-tight">
                20% Off in Store
              </h2>

              <p className="text-xs text-blue-100 leading-relaxed">
                Get flat 20% discount on 360° hydrogel phone lamination + premium tempered glass combo protection in Visnagar!
              </p>

              <a
                href={SHOP_INFO.whatsappUrl('Hello Prakash bhai, I want to claim the 20% off lamination combo offer at Gadaliya Mobile.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition-all"
              >
                <span>Claim Offer on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Promo Card 2: 20-Min Express Service */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                    20-Min Lamination
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Live precision laser-cutting at counter
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                We wrap all phones, smartwatches, AirPods, and power banks with zero bubbles and edge-to-edge finish.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Warranty: <strong className="text-slate-800 dark:text-slate-200">Guaranteed</strong></span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">• Open Today</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
