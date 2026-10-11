import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  Clock,
  ExternalLink,
  Check,
  Copy,
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPhoneNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(SHOP_INFO.phoneRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-column container matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* COLUMN 1: Heading & Contact List (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Contact Us
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Get in touch with <strong className="text-slate-900 font-bold">Gadaliya Mobile Visnagar</strong> for fast mobile repairing in Visnagar, hydrogel mobile lamination, and quality earphones & mobile accessories. We're here to help!
              </p>
            </div>

            {/* Contact list matching screenshot exactly */}
            <div className="space-y-4 pt-2">
              
              {/* 1. Phone */}
              <a
                href={`tel:${SHOP_INFO.phoneDial}`}
                className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-blue-600 transition-all duration-200">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {SHOP_INFO.phoneFormatted}
                    </span>
                    <button
                      onClick={copyPhoneNumber}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
                      title="Copy phone number"
                      aria-label="Copy phone number"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="text-xs text-slate-500">
                    Call Us • <span className="text-slate-700 font-medium">{SHOP_INFO.owner}</span>
                  </div>
                </div>
              </a>

              {/* 2. WhatsApp */}
              <a
                href={SHOP_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[#25d366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-200">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs text-slate-500">
                    Quick Response • Direct Chat
                  </div>
                </div>
              </a>

              {/* 3. Instagram */}
              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(220,39,67,0.4)] transition-all duration-200">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base text-slate-900 group-hover:text-pink-600 transition-colors">
                    {SHOP_INFO.instagramHandle}
                  </div>
                  <div className="text-xs text-slate-500">
                    Follow on Instagram for Latest Skins
                  </div>
                </div>
              </a>

              {/* 4. Address */}
              <a
                href={SHOP_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:bg-blue-600 transition-all duration-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                    {SHOP_INFO.shopNumber}
                  </div>
                  <div className="text-xs text-slate-500">
                    {SHOP_INFO.address}
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* COLUMN 2: Visnagar Map View (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="relative w-full h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 group">
              
              {/* Stylized Google Maps Background of Visnagar */}
              <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
                {/* Visual Map Representation */}
                <svg className="w-full h-full object-cover opacity-90" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                  {/* Water bodies */}
                  <path d="M-20,0 C30,40 100,20 120,0 L120,-20 L-20,-20 Z" fill="#aad3df" />
                  <path d="M180,0 C190,50 210,60 250,50 C290,40 330,70 360,50 L420,50 L420,0 Z" fill="#aad3df" />
                  
                  {/* Road network */}
                  <path d="M-20,180 L420,240" stroke="#ffffff" strokeWidth="14" />
                  <path d="M-20,180 L420,240" stroke="#f6ce7d" strokeWidth="8" />
                  
                  <path d="M120,-20 L150,420" stroke="#ffffff" strokeWidth="12" />
                  <path d="M120,-20 L150,420" stroke="#fff4c2" strokeWidth="7" />

                  <path d="M220,-20 L180,420" stroke="#ffffff" strokeWidth="16" />
                  <path d="M220,-20 L180,420" stroke="#fbd98e" strokeWidth="9" />

                  <path d="M220,120 L380,340" stroke="#ffffff" strokeWidth="10" />
                  <path d="M220,120 L380,340" stroke="#fff" strokeWidth="6" />

                  {/* Secondary streets */}
                  <path d="M60,100 L320,110" stroke="#ffffff" strokeWidth="6" />
                  <path d="M40,240 L340,160" stroke="#ffffff" strokeWidth="6" />
                  <path d="M80,300 L280,300" stroke="#ffffff" strokeWidth="6" />
                  <path d="M240,60 L350,180" stroke="#ffffff" strokeWidth="6" />

                  {/* Area markers & tags */}
                  <rect x="10" y="20" width="80" height="24" rx="4" fill="rgba(255,255,255,0.7)" />
                  <text x="50" y="36" fontSize="10" fill="#666" textAnchor="middle" fontFamily="sans-serif">nath Mahadev</text>

                  <rect x="15" y="145" width="85" height="20" rx="4" fill="rgba(255,255,255,0.7)" />
                  <text x="57" y="159" fontSize="9" fill="#777" textAnchor="middle" fontFamily="sans-serif">vaji Temple</text>

                  <rect x="100" y="80" width="135" height="22" rx="4" fill="rgba(255,255,255,0.85)" />
                  <circle cx="225" cy="91" r="7" fill="#8b5cf6" />
                  <text x="160" y="95" fontSize="10" fontWeight="bold" fill="#6b21a8" textAnchor="middle" fontFamily="sans-serif">Patel Vadi Fateh Darwaja</text>

                  {/* Road names */}
                  <text x="145" y="320" fontSize="9" fill="#888" transform="rotate(78 145 320)" fontFamily="sans-serif">Fateh Darwaja Road</text>
                  <text x="260" y="310" fontSize="9" fill="#888" transform="rotate(-60 260 310)" fontFamily="sans-serif">Visnagar Rd</text>
                </svg>

                {/* Classic Google Red Map Pin at center */}
                <div className="absolute top-[48%] left-[51%] -translate-x-1/2 -translate-y-full drop-shadow-md z-10 animate-bounce duration-1000">
                  <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C7.31 0 3.5 3.81 3.5 8.5C3.5 14.88 12 24 12 24S20.5 14.88 20.5 8.5C20.5 3.81 16.69 0 12 0ZM12 11.5C10.34 11.5 9 10.16 9 8.5C9 6.84 10.34 5.5 12 5.5C13.66 5.5 15 6.84 15 8.5C15 10.16 13.66 11.5 12 11.5Z" />
                  </svg>
                  <div className="w-3 h-1.5 bg-black/30 rounded-full blur-[1px] mx-auto mt-0.5"></div>
                </div>

                {/* Satellite thumbnail preview on bottom-left like real Google Maps */}
                <div className="absolute bottom-6 left-3 w-10 h-10 rounded-lg overflow-hidden border-2 border-white shadow-md z-10 bg-slate-800">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=100&q=80"
                    alt="Satellite"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom map terms text */}
                <div className="absolute bottom-1 right-2 text-[9px] text-slate-500 font-sans z-10 select-none">
                  Keyboard shortcuts · Map data ©2026 · Terms
                </div>
              </div>

              {/* Prominent "View on Google Maps" Pill Button (exact match from screenshot) */}
              <div className="absolute inset-x-0 bottom-6 flex justify-center z-20">
                <a
                  href={SHOP_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 text-white font-bold text-xs shadow-xl hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>

            </div>
          </div>

          {/* COLUMN 3: Opening Hours Card (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <div className="h-[360px] sm:h-[400px] rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                
                {/* Title with Clock icon in circle */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-800">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900">
                    Opening Hours
                  </h3>
                </div>

                {/* Weekdays */}
                <div className="pt-2">
                  <div className="text-sm font-bold text-slate-900">
                    Monday - Saturday
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {SHOP_INFO.hoursWeekday}
                  </div>
                </div>

                {/* Sunday */}
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Sunday
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {SHOP_INFO.hoursSunday}
                  </div>
                </div>
              </div>

              {/* Bottom Notice: Green dot indicator */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>• {SHOP_INFO.walkinNotice}</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
