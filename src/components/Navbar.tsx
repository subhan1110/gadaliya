import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Instagram, Smartphone } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products & Services', href: '#services' },
    { label: 'Skin Designs', href: '#skin-designs' },
    { label: 'Repairing', href: '#repairs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:scale-105 transition-transform">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-xl tracking-tight text-slate-900 flex items-center">
              Gadaliya<span className="text-blue-600">Mobile</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium tracking-wide">
              {SHOP_INFO.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp Us & Phone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SHOP_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-pink-600 hover:border-pink-300 transition-all"
            title="Follow @gadaliya_mobile_skin on Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={`tel:${SHOP_INFO.phoneDial}`}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold tracking-wide transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{SHOP_INFO.phoneFormatted}</span>
          </a>

          <a
            href={SHOP_INFO.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs tracking-wide shadow-md hover:shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={SHOP_INFO.whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#25d366] text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <a
              href={`tel:${SHOP_INFO.phoneDial}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-xs font-semibold text-slate-800"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              Call Now
            </a>
            <a
              href={SHOP_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 text-xs font-semibold text-slate-800"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              Instagram
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={SHOP_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25d366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp: +91 91733 09034
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
