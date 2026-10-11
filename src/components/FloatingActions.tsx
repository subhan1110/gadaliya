import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={SHOP_INFO.whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp with Prakash Gadaliya (+91 91733 09034)"
        className="w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};
