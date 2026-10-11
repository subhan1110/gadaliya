import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SHOP_OFFERINGS, SHOP_INFO } from '../data/shopData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching grexa.site */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Products & Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Services From The Best Mobile Phone Accessory Shop in Visnagar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Discover our wide range of premium smartphone accessories, 360° hydrogel skins, display repairs, and quick digital services.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Offerings Grid matching grexa.site */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_OFFERINGS.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
                  
                  {item.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-heading text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                    {item.titleGu && (
                      <span className="text-xs text-blue-200 font-medium">
                        {item.titleGu}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Gujarati text as featured on grexa.site */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                    {item.descriptionGu}
                  </p>

                  {/* English description */}
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Action Button: Enquire via WhatsApp matching grexa.site */}
              <div className="p-6 pt-0">
                <a
                  href={SHOP_INFO.whatsappUrl(`Hello Prakash bhai, I want to enquire about "${item.title}" at Gadaliya Mobile Visnagar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#25d366] text-white font-bold text-xs tracking-wide shadow-sm hover:shadow-md transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#25d366] group-hover/btn:text-white transition-colors" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
