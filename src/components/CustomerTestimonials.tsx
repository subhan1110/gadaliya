import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  ThumbsUp,
  Star,
  Check,
  Copy,
  Sparkles,
  UserCheck,
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const CustomerTestimonials: React.FC = () => {
  const [copiedPrakash, setCopiedPrakash] = useState(false);
  const [copiedFarhan, setCopiedFarhan] = useState(false);

  const copyNumber = (number: string, type: 'prakash' | 'farhan', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(number);
    if (type === 'prakash') {
      setCopiedPrakash(true);
      setTimeout(() => setCopiedPrakash(false), 2000);
    } else {
      setCopiedFarhan(true);
      setTimeout(() => setCopiedFarhan(false), 2000);
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Share Experience Banner */}
        <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-slate-900 via-slate-900 to-blue-950 text-white shadow-xl relative overflow-hidden border border-slate-800">
          {/* Subtle Ambient Light Accents */}
          <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -top-12 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content Area */}
            <div className="text-center lg:text-left flex-1">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-3 shadow-xs">
                <ThumbsUp className="w-3.5 h-3.5 text-blue-400" />
                <span>Happy Customer of Gadaliya Mobile?</span>
                <span className="hidden sm:inline text-blue-400/70">•</span>
                <span className="hidden sm:inline flex items-center gap-1 text-amber-300">
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" /> 4.9 Rating
                </span>
              </div>

              {/* Title - slightly smaller text size as requested so it fits cleanly */}
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Share Your Experience with Gadaliya Mobile
              </h2>

              {/* Subtitles & Descriptions in English & Gujarati */}
              <p className="mt-2 text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Did Prakash bhai or Farhan fix your smartphone or apply a custom 3D skin? Leave your review or share photos to help us improve!
              </p>

              <p className="text-xs sm:text-sm text-blue-200 mt-2 font-medium">
                જો તમે પણ ગડલિયા મોબાઈલ પરથી ફોન રિપેર કે સ્કિન લગાવી હોય, તો તમારો પ્રતિભાવ જરૂર જણાવો.
              </p>

              {/* Quick WhatsApp Review Trigger */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={SHOP_INFO.whatsappUrl("Hello Prakash bhai & Farhan! I want to share my positive review and feedback for Gadaliya Mobile Visnagar.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/30 hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send Review on WhatsApp</span>
                  <Sparkles className="w-3.5 h-3.5 text-emerald-200" />
                </a>
              </div>
            </div>

            {/* Right Contact Cards: Prakash Bhai & Farhan */}
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[280px]">
              
              {/* Prakash Bhai Contact Card */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 backdrop-blur-md transition-all">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Prakash Bhai</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 font-normal">Owner</span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-mono">
                        {SHOP_INFO.prakashPhoneFormatted}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => copyNumber(SHOP_INFO.prakashPhoneRaw, 'prakash', e)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy phone number"
                    aria-label="Copy Prakash Bhai's phone number"
                  >
                    {copiedPrakash ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${SHOP_INFO.prakashPhoneDial}`}
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-white text-xs font-bold transition-all text-center"
                  >
                    <Phone className="w-3 h-3 text-blue-300" />
                    <span>Call</span>
                  </a>
                  <a
                    href={SHOP_INFO.whatsappUrl("Hello Prakash bhai! I want to share my review/experience for Gadaliya Mobile.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-200 hover:text-white text-xs font-bold transition-all text-center"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Farhan Contact Card */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 backdrop-blur-md transition-all">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                      <UserCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>Farhan</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-normal">Contact</span>
                      </div>
                      <div className="text-[11px] text-slate-300 font-mono">
                        {SHOP_INFO.farhanPhoneFormatted}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => copyNumber(SHOP_INFO.farhanPhoneRaw, 'farhan', e)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Copy phone number"
                    aria-label="Copy Farhan's phone number"
                  >
                    {copiedFarhan ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${SHOP_INFO.farhanPhoneDial}`}
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600 border border-blue-500/30 text-white text-xs font-bold transition-all text-center"
                  >
                    <Phone className="w-3 h-3 text-blue-300" />
                    <span>Call Farhan</span>
                  </a>
                  <a
                    href={SHOP_INFO.farhanWhatsappUrl("Hello Farhan bhai! I want to share my review/experience for Gadaliya Mobile.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-200 hover:text-white text-xs font-bold transition-all text-center"
                  >
                    <MessageCircle className="w-3 h-3 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
