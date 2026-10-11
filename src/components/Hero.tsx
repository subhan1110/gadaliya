import React, { useState } from 'react';
import { Phone, MessageCircle, Instagram, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Hero: React.FC = () => {
  const [activeSkinPreview, setActiveSkinPreview] = useState<'sapphire' | 'carbon' | 'stealth'>('sapphire');

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
      {/* Subtle blue ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-sky-400/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Your Mobile, Our Priority • Visnagar, Gujarat
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Gadaliya Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 relative inline-block">
                Lamination & Repairing
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional mobile lamination, 360° hydrogel skins, and certified smartphone repairing with quality, care and trust. Managed by <strong className="text-slate-900 font-bold">Prakash Gadaliya</strong> in Visnagar.
            </p>

            {/* Direct Primary Action Buttons in White & Blue */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={SHOP_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${SHOP_INFO.phoneDial}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-500 text-slate-800 font-semibold text-base shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call {SHOP_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Social and Contact pill highlight */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-500">
              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-400 hover:text-slate-900 shadow-xs transition-all"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram: <strong className="text-slate-800">{SHOP_INFO.instagramHandle}</strong></span>
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>20-Minute Express Lamination</span>
              </div>
            </div>

            {/* Micro Trust Checklist */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200 text-left">
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-blue-600">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500">Precision Laser Fit</div>
              </div>
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-blue-600">3,500+</div>
                <div className="text-[11px] sm:text-xs text-slate-500">Phones Wrapped</div>
              </div>
              <div>
                <div className="font-heading text-lg sm:text-xl font-bold text-blue-600">6-Mo</div>
                <div className="text-[11px] sm:text-xs text-slate-500">Repair Warranty</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Phone Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[580px] rounded-[38px] p-3.5 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-slate-700 group">
              
              {/* Phone Outer Bezel */}
              <div
                className="relative w-full h-full rounded-[30px] overflow-hidden flex flex-col justify-between p-5 border border-slate-700/60 transition-all duration-500"
                style={{
                  background:
                    activeSkinPreview === 'sapphire'
                      ? 'radial-gradient(circle at 40% 30%, #2563eb 0%, #1e3a8a 50%, #0f172a 90%)'
                      : activeSkinPreview === 'carbon'
                      ? 'repeating-linear-gradient(45deg, #090e17 0, #090e17 6px, #1a2536 6px, #1a2536 12px)'
                      : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                }}
              >
                {/* Metallic light sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>

                {/* Camera Module Mockup */}
                <div className="w-24 h-28 rounded-2xl bg-[#09101b]/95 backdrop-blur-md border border-blue-900/40 p-2 grid grid-cols-2 gap-2 shadow-xl z-10">
                  <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-1 ring-white/50"></div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-1 ring-white/50"></div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-1 ring-white/50"></div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[8px] text-blue-400 font-mono">
                    PRO
                  </div>
                </div>

                {/* Central Shop Emblem on Phone */}
                <div className="my-auto text-center z-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#070d14]/85 border-2 border-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <div className="w-5 h-7 border-2 border-blue-400 rounded-sm flex flex-col justify-between items-center py-0.5">
                      <div className="w-1.5 h-0.5 bg-blue-400"></div>
                      <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <p className="mt-3 font-heading font-extrabold text-sm tracking-widest text-white drop-shadow">
                    GADALIYA SKIN
                  </p>
                  <p className="text-[10px] text-blue-300 font-medium tracking-wide">
                    {SHOP_INFO.instagramHandle}
                  </p>
                </div>

                {/* Bottom Card Inside Phone preview */}
                <div className="z-10 bg-[#070d14]/90 backdrop-blur-md rounded-2xl p-3 border border-blue-900/40">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-blue-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Ultra Armor Lamination
                    </span>
                    <span className="text-white font-bold font-mono">₹199+</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Precision wrap for iPhone, Samsung, OnePlus & Vivo.
                  </p>
                </div>
              </div>

              {/* Skin Swatch Selector under phone */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-lg z-20">
                <span className="text-[10px] text-slate-500 font-medium">Texture:</span>
                <button
                  onClick={() => setActiveSkinPreview('sapphire')}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    activeSkinPreview === 'sapphire' ? 'border-blue-600 scale-110 shadow-sm' : 'border-transparent'
                  }`}
                  style={{ background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)' }}
                  title="Sapphire Blue"
                />
                <button
                  onClick={() => setActiveSkinPreview('carbon')}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    activeSkinPreview === 'carbon' ? 'border-slate-800 scale-110 shadow-sm' : 'border-transparent'
                  }`}
                  style={{ background: '#1e293b' }}
                  title="Carbon Fiber"
                />
                <button
                  onClick={() => setActiveSkinPreview('stealth')}
                  className={`w-6 h-6 rounded-full border-2 transition-all ${
                    activeSkinPreview === 'stealth' ? 'border-slate-800 scale-110 shadow-sm' : 'border-transparent'
                  }`}
                  style={{ background: '#020617' }}
                  title="Stealth Matte"
                />
              </div>
            </div>

            <p className="mt-9 text-xs text-slate-500 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              100% gapless curved lamination in Visnagar
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
