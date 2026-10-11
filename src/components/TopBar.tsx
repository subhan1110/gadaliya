import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Visnagar, Gujarat, 384315</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon–Sat: {SHOP_INFO.hoursWeekday}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{SHOP_INFO.rating} ({SHOP_INFO.reviewCount})</span>
          </div>
          <a
            href={`tel:${SHOP_INFO.phoneDial}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{SHOP_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
