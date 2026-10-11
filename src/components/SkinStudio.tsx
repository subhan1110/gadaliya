import React, { useState } from 'react';
import {
  Sparkles,
  Maximize2,
  X,
  CheckCircle2,
  Tag,
  Smartphone,
  Truck,
  Store,
  MessageCircle,
  Eye,
  Check,
  Camera,
  Layers,
  ArrowRight,
  Shield,
  Instagram,
  ExternalLink,
} from 'lucide-react';
import { PHOTO_SKINS, SHOP_INFO } from '../data/shopData';
import { SkinPhotoItem } from '../types';

export const SkinStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkin, setSelectedSkin] = useState<SkinPhotoItem>(PHOTO_SKINS[0]);
  const [deliveryType, setDeliveryType] = useState<'store' | 'online'>('store');
  const [customerPhoneModel, setCustomerPhoneModel] = useState('');
  const [zoomImage, setZoomImage] = useState<SkinPhotoItem | null>(null);

  const categories = [
    'All',
    'Devotional & Spiritual',
    'Supercars & Racing',
    'Wildlife & Royalty',
    'Heritage & Traditional',
    'Superbikes & Moto',
    '3D Geometric & Texture',
    'Travel & Lifestyle',
  ];

  const filteredSkins =
    activeCategory === 'All'
      ? PHOTO_SKINS
      : PHOTO_SKINS.filter((skin) => skin.category === activeCategory);

  const basePrice = 150;
  const shippingFee = 50;
  const totalPrice = deliveryType === 'online' ? basePrice + shippingFee : basePrice;

  const handleOrderSkin = () => {
    const deliveryText =
      deliveryType === 'online'
        ? `🚚 Online Home Delivery (₹150 Skin + ₹50 Courier Shipping = ₹200 Total)`
        : `🏪 Store Pickup & Professional Application in Visnagar (₹150 Total)`;

    const phoneText = customerPhoneModel.trim()
      ? `\n*Phone Model:* ${customerPhoneModel}`
      : '\n*Phone Model:* (Will confirm in chat)';

    const message = `Hello Prakash bhai,\nI want to order this mobile skin design from Gadaliya Mobile Visnagar:\n\n*Skin Name:* ${selectedSkin.name} (${selectedSkin.nameGu || ''})\n*Category:* ${selectedSkin.category}${phoneText}\n*Order Type:* ${deliveryText}\n*Total Price:* ₹${totalPrice}\n\nPlease confirm availability and details!`;

    window.open(SHOP_INFO.whatsappUrl(message), '_blank');
  };

  return (
    <section id="skin-designs" className="py-16 md:py-24 border-b border-slate-200 bg-white scroll-mt-20">
      {/* Anchor for backward compatibility with #skin-studio */}
      <div id="skin-studio" className="-mt-20 pt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Special Price ₹150 Only • લેમિનેશન સ્કિન
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Mobile Skin Designs
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              Authentic laser-cut mobile skins photographed live in Visnagar. Available for all smartphone models at <strong className="text-slate-900 font-bold">₹150</strong> (In-Store with free fitting) or <strong className="text-slate-900 font-bold">₹200</strong> with online home delivery (+₹50 shipping).
            </p>
            <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          {/* Pricing Summary Badge */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-blue-50 border border-blue-200 text-slate-900">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                Skin Price
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-slate-900 font-mono">₹150</span>
                <span className="text-xs text-slate-500 font-medium">+₹50 if ordered online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar text-xs">
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  isCatActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat === 'All' ? `All Skin Designs (${PHOTO_SKINS.length})` : cat}
              </button>
            );
          })}
        </div>

        {/* Main Content Layout: Grid + Sticky Order Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Grid of Skin Photos (8 columns) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Showing {filteredSkins.length} High-Definition Skins</span>
              <span className="text-blue-600 font-semibold">Click any skin to preview & order</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredSkins.map((skin) => {
                const isSelected = selectedSkin.id === skin.id;
                return (
                  <div
                    key={skin.id}
                    onClick={() => setSelectedSkin(skin)}
                    className={`group relative rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 bg-white flex flex-col justify-between ${
                      isSelected
                        ? 'border-blue-600 ring-2 ring-blue-600/30 shadow-lg -translate-y-1'
                        : 'border-slate-200 hover:border-blue-400 hover:shadow-md'
                    }`}
                  >
                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/85 text-white text-[9px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-xs">
                        {skin.badge}
                      </span>
                    </div>

                    {/* Zoom Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomImage(skin);
                      }}
                      className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-md transition-all active:scale-90"
                      title="Zoom photo in high resolution"
                      aria-label="Zoom photo"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    {/* Skin Photo with 3:4 Aspect Ratio */}
                    <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 relative">
                      <img
                        src={skin.imageUrl}
                        alt={skin.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to /skins/ path if needed
                          const target = e.currentTarget;
                          const fallbackSrc = `/skins/${skin.id.replace(/-/g, '_')}.jpg`;
                          if (target.src !== fallbackSrc) {
                            target.src = fallbackSrc;
                          }
                        }}
                      />
                      
                      {isSelected && (
                        <div className="absolute inset-0 bg-blue-600/10 border-2 border-blue-600 pointer-events-none rounded-2xl flex items-center justify-center">
                          <span className="bg-blue-600 text-white p-1 rounded-full shadow-md">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Information Bar */}
                    <div className="p-3 bg-white space-y-1 border-t border-slate-100">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider truncate">
                          {skin.category}
                        </span>
                        <span className="font-mono font-black text-xs text-slate-900 shrink-0">
                          ₹{skin.price}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {skin.name}
                      </h4>
                      {skin.nameGu && (
                        <p className="text-[11px] text-slate-500 truncate font-medium">
                          {skin.nameGu}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instagram Collection & Custom Skin Card (Targeted by user) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50/70 via-pink-50/70 to-amber-50/70 border-2 border-pink-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                      Visit our Instagram for more skin collection
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-pink-700 mt-0.5">
                      વધુ સ્કિન કલેક્શન જોવા માટે અમારું Instagram વિઝિટ કરો
                    </p>
                  </div>
                </div>

                <a
                  href={SHOP_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold text-xs tracking-wide shadow-sm shadow-pink-500/25 transition-all active:scale-95 whitespace-nowrap shrink-0"
                >
                  <Instagram className="w-4 h-4" />
                  <span>View Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Instagram ID Box displayed below as requested ("niche id bhi dal do") */}
              <div className="pt-3 border-t border-pink-200/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Instagram ID:
                  </span>
                  <a
                    href={SHOP_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono font-black text-sm text-slate-900 hover:text-pink-600 bg-white border border-pink-200 px-3 py-1 rounded-lg transition-colors shadow-2xs"
                  >
                    <span className="text-pink-600">@</span>gadaliya_mobile_skin
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="text-slate-400">•</span>
                  <span>અથવા તમારો મનપસંદ ફોટો પ્રિન્ટ કરાવો:</span>
                  <a
                    href={SHOP_INFO.whatsappUrl('Hello Prakash bhai, I want to print my own custom wallpaper or personal photo as a mobile skin at Gadaliya Mobile.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Device Compatibility Note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <strong>Universal Laser-Cutting Compatibility:</strong> Every skin is custom computer laser-cut for your exact smartphone model (iPhone, Samsung Galaxy, OnePlus, Vivo, Oppo, Realme, Xiaomi, Nothing Phone, Google Pixel, Motorola, etc.).
              </div>
            </div>
          </div>

          {/* RIGHT: Selected Skin Details & WhatsApp Checkout (4 columns) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
              
              {/* Selected Design Title */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Selected Skin Design
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-700 text-[10px] font-bold">
                    {selectedSkin.badge}
                  </span>
                </div>

                {/* Selected Image Preview with Phone Silhouette Frame */}
                <div className="flex gap-4 items-center">
                  <div
                    onClick={() => setZoomImage(selectedSkin)}
                    className="w-20 h-28 rounded-2xl overflow-hidden border-2 border-blue-600 shrink-0 bg-slate-100 shadow-sm relative group cursor-pointer"
                  >
                    <img
                      src={selectedSkin.imageUrl}
                      alt={selectedSkin.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallbackSrc = `/skins/${selectedSkin.id.replace(/-/g, '_')}.jpg`;
                        if (target.src !== fallbackSrc) target.src = fallbackSrc;
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-extrabold text-base text-slate-900 leading-snug">
                      {selectedSkin.name}
                    </h3>
                    {selectedSkin.nameGu && (
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">
                        {selectedSkin.nameGu}
                      </p>
                    )}
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {selectedSkin.category}
                    </p>
                    <div className="text-xs font-black text-slate-900 font-mono mt-2">
                      Skin Price: <span className="text-blue-600">₹{basePrice}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {selectedSkin.description}
                </p>
              </div>

              {/* Enter Phone Model Input */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-blue-600" />
                  Your Mobile Model (તમારો મોબાઈલ)
                </label>
                <input
                  type="text"
                  value={customerPhoneModel}
                  onChange={(e) => setCustomerPhoneModel(e.target.value)}
                  placeholder="E.g., iPhone 15 Pro, Samsung S24, Vivo V30..."
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Order Mode Toggle (Store Pickup ₹150 vs Online Delivery ₹200) */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Delivery Option
                </label>
                
                <div className="grid grid-cols-2 gap-2">
                  {/* Option 1: Store Pickup */}
                  <button
                    type="button"
                    onClick={() => setDeliveryType('store')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      deliveryType === 'store'
                        ? 'bg-blue-50 border-blue-600 ring-1 ring-blue-600 text-blue-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                      <Store className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Visnagar Store</span>
                    </div>
                    <div className="text-[11px] text-slate-500">Free Laser Application</div>
                    <div className="text-xs font-mono font-bold text-slate-900 mt-1">₹150 Flat</div>
                  </button>

                  {/* Option 2: Online Delivery */}
                  <button
                    type="button"
                    onClick={() => setDeliveryType('online')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      deliveryType === 'online'
                        ? 'bg-emerald-50 border-emerald-600 ring-1 ring-emerald-600 text-emerald-950 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                      <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Home Delivery</span>
                    </div>
                    <div className="text-[11px] text-slate-500">+₹50 Shipping Charge</div>
                    <div className="text-xs font-mono font-bold text-slate-900 mt-1">₹200 Total</div>
                  </button>
                </div>
              </div>

              {/* Order Total Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Skin Wrap Price:</span>
                  <span className="font-mono font-bold text-slate-900">₹{basePrice}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>
                    {deliveryType === 'online' ? 'Courier Shipping Charge:' : 'Store Laser-Cutting & Fitting:'}
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {deliveryType === 'online' ? `+₹${shippingFee}` : 'FREE (₹0)'}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Total Amount:</span>
                  <span className="font-mono text-base text-blue-600 font-extrabold">₹{totalPrice}</span>
                </div>
              </div>

              {/* Order on WhatsApp CTA */}
              <button
                onClick={handleOrderSkin}
                className="w-full py-4 rounded-xl bg-[#25d366] hover:bg-[#20ba5a] text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp (₹{totalPrice})</span>
              </button>

              <div className="text-center space-y-2">
                <div className="text-[11px] text-slate-500">
                  Direct inquiry to <strong className="text-slate-800">{SHOP_INFO.owner}</strong> ({SHOP_INFO.phoneFormatted})
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-1.5 text-xs text-slate-600">
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>More skins on Instagram:</span>
                  <a
                    href={SHOP_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-pink-600 hover:underline"
                  >
                    {SHOP_INFO.instagramHandle}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Zooming Skin Photo */}
      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setZoomImage(null)}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img
                src={zoomImage.imageUrl}
                alt={zoomImage.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallbackSrc = `/skins/${zoomImage.id.replace(/-/g, '_')}.jpg`;
                  if (target.src !== fallbackSrc) target.src = fallbackSrc;
                }}
              />
            </div>
            <div className="pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base text-slate-900">{zoomImage.name}</h4>
                {zoomImage.nameGu && (
                  <p className="text-xs font-semibold text-blue-600">{zoomImage.nameGu}</p>
                )}
                <p className="text-xs text-slate-500 mt-0.5">{zoomImage.category}</p>
              </div>
              <div className="text-right">
                <div className="font-mono font-black text-lg text-blue-600">₹150</div>
                <div className="text-[10px] text-slate-500 font-medium">+₹50 courier fee</div>
              </div>
            </div>
            <button
              onClick={() => {
                setSelectedSkin(zoomImage);
                setZoomImage(null);
              }}
              className="mt-4 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Select this Skin to Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
