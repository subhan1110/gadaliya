import React from 'react';
import { Smartphone, Instagram, MessageCircle, Phone } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#162238] text-slate-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand Identity matching screenshot */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl border border-blue-500/40 bg-blue-950/30 flex items-center justify-center text-blue-400">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-base text-white tracking-tight">
                Gadaliya<span className="text-blue-500">Mobile</span>
              </div>
              <p className="text-[10px] text-slate-400">
                Lamination | Repairing
              </p>
            </div>
          </div>

          {/* Center: Navigation Links & Social Icons matching screenshot */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#skin-studio" className="hover:text-blue-400 transition-colors">
              Lamination
            </a>
            <a href="#repairs" className="hover:text-blue-400 transition-colors">
              Repairing
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
              <a
                href={SHOP_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-pink-400 transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SHOP_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${SHOP_INFO.phoneDial}`}
                className="text-slate-400 hover:text-blue-400 transition-colors"
                title="Call"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Copyright matching screenshot */}
          <div className="text-xs text-slate-400 text-center lg:text-right">
            © 2026 Gadaliya Mobile. All rights reserved. Run by Prakash Gadaliya.
          </div>

        </div>
      </div>
    </footer>
  );
};
