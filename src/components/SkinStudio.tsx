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
  Plus,
  Trash2,
  ArrowRight,
  Shield,
  Instagram,
  ExternalLink,
  ShoppingBag,
  Layers,
} from 'lucide-react';
import { PHOTO_SKINS, SHOP_INFO } from '../data/shopData';
import { SkinPhotoItem } from '../types';

export const SkinStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  // Multi-selection state: array of selected skins
  const [selectedSkins, setSelectedSkins] = useState<SkinPhotoItem[]>([PHOTO_SKINS[0]]);
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

  const basePricePerSkin = 150;
  const shippingFee = 50; // Flat courier fee regardless of quantity
  const skinCount = selectedSkins.length;
  const skinsSubtotal = skinCount * basePricePerSkin;
  const totalPrice = skinCount > 0 ? (deliveryType === 'online' ? skinsSubtotal + shippingFee : skinsSubtotal) : 0;

  // Toggle selection for multiple skins
  const toggleSkin = (skin: SkinPhotoItem) => {
    setSelectedSkins((prev) => {
      const exists = prev.some((s) => s.id === skin.id);
      if (exists) {
        return prev.filter((s) => s.id !== skin.id);
      } else {
        return [...prev, skin];
      }
    });
  };

  const removeSkin = (skinId: string) => {
    setSelectedSkins((prev) => prev.filter((s) => s.id !== skinId));
  };

  const isSelected = (skinId: string) => selectedSkins.some((s) => s.id === skinId);

  const getSelectionIndex = (skinId: string) => {
    const idx = selectedSkins.findIndex((s) => s.id === skinId);
    return idx >= 0 ? idx + 1 : null;
  };

  const handleSelectAllFiltered = () => {
    setSelectedSkins((prev) => {
      const existingIds = new Set(prev.map((s) => s.id));
      const toAdd = filteredSkins.filter((s) => !existingIds.has(s.id));
      return [...prev, ...toAdd];
    });
  };

  const handleClearSelection = () => {
    setSelectedSkins([]);
  };

  const handleOrderSkin = () => {
    if (selectedSkins.length === 0) return;

    const deliveryText =
      deliveryType === 'online'
        ? `🚚 Online Home Delivery (₹${skinsSubtotal} Skins + ₹50 Flat Courier Shipping = ₹${totalPrice} Total)`
        : `🏪 Store Pickup & Professional Laser Application in Visnagar (₹${totalPrice} Total)`;

    const phoneText = customerPhoneModel.trim()
      ? `\n*Phone Model(s):* ${customerPhoneModel}`
      : '\n*Phone Model(s):* (Will confirm in chat)';

    const skinsList = selectedSkins
      .map(
        (s, i) =>
          `${i + 1}. *${s.name}* ${s.nameGu ? `(${s.nameGu})` : ''} - ₹${s.price} [${s.category}]`
      )
      .join('\n');

    const message = `Hello Prakash bhai,\nI want to order ${selectedSkins.length} mobile skin${
      selectedSkins.length > 1 ? 's' : ''
    } from Gadaliya Mobile Visnagar:\n\n*Selected Skins (${selectedSkins.length} items):*\n${skinsList}\n${phoneText}\n*Order Type:* ${deliveryText}\n*Total Amount:* ₹${totalPrice}\n\nPlease confirm availability and laser-cutting time!`;

    window.open(SHOP_INFO.whatsappUrl(message), '_blank');
  };

  return (
    <section
      id="skin-designs"
      className="py-16 md:py-24 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors"
    >
      {/* Anchor for backward compatibility with #skin-studio */}
      <div id="skin-studio" className="-mt-20 pt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Special Price ₹150 Only • મલ્ટીપલ સ્કિન સિલેક્ટ કરો
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Mobile Skin Designs
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Authentic laser-cut mobile skins photographed live in Visnagar. Select one or <strong className="text-blue-600 dark:text-blue-400 font-bold">multiple skins together</strong> at <strong className="text-slate-900 dark:text-white font-bold">₹150</strong> each (In-Store with free fitting) or online delivery (+flat ₹50 shipping per order).
            </p>
            <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full"></div>
          </div>

          {/* Pricing & Multi-select indicator badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/80 text-slate-900 dark:text-white">
              <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Skin Price
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className="text-2xl font-black text-slate-900 dark:text-white font-mono">₹150</span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">/ skin</span>
              </div>
            </div>

            {skinCount > 0 && (
              <div className="px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-100 flex items-center gap-3 animate-in fade-in">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-xs">
                  {skinCount}
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    {skinCount === 1 ? '1 Skin Selected' : `${skinCount} Skins Selected`}
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    Subtotal: ₹{skinsSubtotal}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar text-xs">
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  isCatActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {cat === 'All' ? `All Skin Designs (${PHOTO_SKINS.length})` : cat}
              </button>
            );
          })}
        </div>

        {/* Multi-Select Helper Banner & Quick Controls */}
        <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Select Multiple Skins:</span>{' '}
              <span>કોઈપણ સ્કિન પર ક્લિક કરીને ૧ થી વધુ સ્કિન એક સાથે સિલેક્ટ કરી શકો છો (Click cards to select/deselect).</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end shrink-0">
            <button
              onClick={handleSelectAllFiltered}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 font-bold text-[11px] text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors"
            >
              Select All in Category
            </button>
            {skinCount > 0 && (
              <button
                onClick={handleClearSelection}
                className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 font-bold text-[11px] text-red-600 dark:text-red-400 hover:bg-red-100 transition-colors"
              >
                Clear All ({skinCount})
              </button>
            )}
          </div>
        </div>

        {/* Main Content Layout: Grid + Sticky Order Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT: Grid of Skin Photos (8 columns) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span>Showing {filteredSkins.length} High-Definition Skins</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                {skinCount > 0 ? `${skinCount} skin(s) selected` : 'Click to select multiple'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {filteredSkins.map((skin) => {
                const selected = isSelected(skin.id);
                const orderIndex = getSelectionIndex(skin.id);

                return (
                  <div
                    key={skin.id}
                    onClick={() => toggleSkin(skin)}
                    className={`group relative rounded-2xl overflow-hidden border-2 cursor-pointer transition-all duration-300 bg-white dark:bg-slate-900 flex flex-col justify-between select-none ${
                      selected
                        ? 'border-blue-600 ring-4 ring-blue-600/25 shadow-xl -translate-y-1'
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md'
                    }`}
                  >
                    {/* Top Left: Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1 items-start pointer-events-none">
                      <span className="px-2 py-0.5 rounded-md bg-slate-950/85 text-white text-[9px] font-extrabold uppercase tracking-wider shadow-sm backdrop-blur-xs">
                        {skin.badge}
                      </span>
                    </div>

                    {/* Top Right: Multi-select Checkbox & Zoom Button */}
                    <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
                      {/* Zoom Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setZoomImage(skin);
                        }}
                        className="p-1.5 rounded-full bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 shadow-md transition-all active:scale-90"
                        title="Zoom photo in high resolution"
                        aria-label="Zoom photo"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Select/Deselect Toggle Pill */}
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${
                          selected
                            ? 'bg-blue-600 text-white ring-2 ring-white dark:ring-slate-900 scale-105'
                            : 'bg-white/90 dark:bg-slate-800/90 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 border border-slate-300 dark:border-slate-600'
                        }`}
                      >
                        {selected ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                        )}
                      </div>
                    </div>

                    {/* Skin Photo with 3:4 Aspect Ratio */}
                    <div className="aspect-[3/4] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                      <img
                        src={skin.imageUrl}
                        alt={skin.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          selected ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          const fallbackSrc = `/skins/${skin.id.replace(/-/g, '_')}.jpg`;
                          if (target.src !== fallbackSrc) {
                            target.src = fallbackSrc;
                          }
                        }}
                      />
                      
                      {selected && (
                        <div className="absolute inset-0 bg-blue-600/15 border-2 border-blue-600 pointer-events-none rounded-2xl flex items-center justify-center">
                          <span className="bg-blue-600 text-white px-2.5 py-1 rounded-full shadow-lg text-[11px] font-extrabold flex items-center gap-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                            #{orderIndex} Selected
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Information Bar */}
                    <div className="p-3 bg-white dark:bg-slate-900 space-y-1 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider truncate">
                          {skin.category}
                        </span>
                        <span className="font-mono font-black text-xs text-slate-900 dark:text-white shrink-0">
                          ₹{skin.price}
                        </span>
                      </div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white leading-snug line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skin.name}
                      </h4>
                      {skin.nameGu && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-medium">
                          {skin.nameGu}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Instagram Collection & Custom Skin Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-50/70 via-pink-50/70 to-amber-50/70 dark:from-purple-950/40 dark:via-pink-950/30 dark:to-slate-900 border-2 border-pink-200 dark:border-pink-900/60 shadow-xs space-y-4 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      Visit our Instagram for more skin collection
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-pink-700 dark:text-pink-300 mt-0.5">
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

              {/* Instagram ID Box displayed below */}
              <div className="pt-3 border-t border-pink-200/80 dark:border-pink-900/50 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Instagram ID:
                  </span>
                  <a
                    href={SHOP_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono font-black text-sm text-slate-900 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 bg-white dark:bg-slate-800 border border-pink-200 dark:border-pink-800/80 px-3 py-1 rounded-lg transition-colors shadow-2xs"
                  >
                    <span className="text-pink-600 dark:text-pink-400">@</span>gadaliya_mobile_skin
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <span className="text-slate-400">•</span>
                  <span>અથવા તમારો મનપસંદ ફોટો પ્રિન્ટ કરાવો:</span>
                  <a
                    href={SHOP_INFO.whatsappUrl('Hello Prakash bhai, I want to print my own custom wallpaper or personal photo as a mobile skin at Gadaliya Mobile.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-200 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 rounded-md hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Device Compatibility Note */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <strong className="text-slate-900 dark:text-white">Universal Laser-Cutting Compatibility:</strong> Every skin is custom computer laser-cut for your exact smartphone model (iPhone, Samsung Galaxy, OnePlus, Vivo, Oppo, Realme, Xiaomi, Nothing Phone, Google Pixel, Motorola, etc.).
              </div>
            </div>
          </div>

          {/* RIGHT: Multi-Skin Cart & WhatsApp Checkout (4 columns) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm space-y-6 transition-colors">
              
              {/* Header with Selected Skin Count */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Your Selection ({skinCount} {skinCount === 1 ? 'Design' : 'Designs'})
                  </span>
                  {skinCount > 0 && (
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-[10px] font-bold">
                      ₹{basePricePerSkin} × {skinCount}
                    </span>
                  )}
                </div>

                {/* Selected Skins List */}
                {skinCount === 0 ? (
                  <div className="p-6 text-center rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-2">
                    <ShoppingBag className="w-8 h-8 mx-auto text-slate-400 dark:text-slate-600" />
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      No Skins Selected Yet
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      ગેલેરીમાંથી કોઈપણ સ્કિન પર ક્લિક કરીને પસંદ કરો (તમે ૧ થી વધુ પણ પસંદ કરી શકો છો).
                    </p>
                    <button
                      onClick={() => setSelectedSkins([PHOTO_SKINS[0]])}
                      className="mt-2 text-xs font-bold text-blue-600 hover:underline"
                    >
                      + Select Popular Skin
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1 no-scrollbar">
                    {selectedSkins.map((skin, idx) => (
                      <div
                        key={skin.id}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 group transition-all"
                      >
                        {/* Thumbnail */}
                        <div
                          onClick={() => setZoomImage(skin)}
                          className="w-12 h-14 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0 bg-slate-100 dark:bg-slate-800 cursor-pointer relative"
                        >
                          <img
                            src={skin.imageUrl}
                            alt={skin.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const fallbackSrc = `/skins/${skin.id.replace(/-/g, '_')}.jpg`;
                              if (target.src !== fallbackSrc) target.src = fallbackSrc;
                            }}
                          />
                        </div>

                        {/* Title & Info */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h4 className="font-bold text-xs text-slate-900 dark:text-white truncate">
                              {skin.name}
                            </h4>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                            <span className="truncate">{skin.category}</span>
                            <span className="font-mono font-bold text-slate-900 dark:text-white shrink-0">
                              ₹{skin.price}
                            </span>
                          </div>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeSkin(skin.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                          title="Remove this skin"
                          aria-label={`Remove ${skin.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {skinCount > 1 && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80">
                    ✓ તમે {skinCount} સ્કિન્સ પસંદ કરી છે. WhatsApp ઓર્ડરમાં બધી જ સ્કિન્સ એક સાથે જશે!
                  </p>
                )}
              </div>

              {/* Enter Phone Model Input */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    Mobile Model(s) / તમારો મોબાઈલ
                  </span>
                  {skinCount > 1 && (
                    <span className="text-[10px] text-blue-600 dark:text-blue-400 lowercase font-medium">
                      (for multiple phones)
                    </span>
                  )}
                </label>
                <input
                  type="text"
                  value={customerPhoneModel}
                  onChange={(e) => setCustomerPhoneModel(e.target.value)}
                  placeholder={
                    skinCount > 1
                      ? "e.g., Skin 1: iPhone 15, Skin 2: OnePlus 12..."
                      : "E.g., iPhone 15 Pro, Samsung S24, Vivo V30..."
                  }
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-blue-600 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Order Mode Toggle (Store Pickup vs Online Delivery) */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                    Delivery Option
                  </label>
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                    {deliveryType === 'online' ? 'Flat ₹50 courier' : 'Free fitting in store'}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {/* Option 1: Store Pickup */}
                  <button
                    type="button"
                    onClick={() => setDeliveryType('store')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      deliveryType === 'store'
                        ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 ring-1 ring-blue-600 text-blue-900 dark:text-blue-100 shadow-xs'
                        : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                      <Store className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Visnagar Store</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Free Laser Application</div>
                    <div className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-1">
                      ₹{basePricePerSkin} {skinCount > 1 ? `× ${skinCount}` : 'Flat'}
                    </div>
                  </button>

                  {/* Option 2: Online Delivery */}
                  <button
                    type="button"
                    onClick={() => setDeliveryType('online')}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      deliveryType === 'online'
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600 ring-1 ring-emerald-600 text-emerald-950 dark:text-emerald-100 shadow-xs'
                        : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs mb-1">
                      <Truck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>Home Delivery</span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">+₹50 Flat Shipping</div>
                    <div className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-1">
                      Courier to door
                    </div>
                  </button>
                </div>
              </div>

              {/* Order Total Breakdown */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Selected Skins ({skinCount}):</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {skinCount > 0 ? `${skinCount} × ₹${basePricePerSkin} = ₹${skinsSubtotal}` : '₹0'}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>
                    {deliveryType === 'online' ? 'Flat Courier Shipping:' : 'Store Laser-Cutting & Fitting:'}
                  </span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">
                    {deliveryType === 'online' ? `+₹${shippingFee}` : 'FREE (₹0)'}
                  </span>
                </div>
                {deliveryType === 'online' && skinCount > 1 && (
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    ⭐ Combined Shipping: Pay only ₹50 total courier for all {skinCount} skins!
                  </div>
                )}
                <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-sm font-bold text-slate-900 dark:text-white">
                  <span>Total Amount:</span>
                  <span className="font-mono text-base text-blue-600 dark:text-blue-400 font-extrabold">₹{totalPrice}</span>
                </div>
              </div>

              {/* Order on WhatsApp CTA */}
              <button
                disabled={skinCount === 0}
                onClick={handleOrderSkin}
                className={`w-full py-4 rounded-xl text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all active:scale-98 ${
                  skinCount === 0
                    ? 'bg-slate-300 dark:bg-slate-700 cursor-not-allowed opacity-60'
                    : 'bg-[#25d366] hover:bg-[#20ba5a] hover:shadow-lg'
                }`}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {skinCount === 0
                    ? 'Select at least 1 Skin'
                    : `Order ${skinCount} Skin${skinCount > 1 ? 's' : ''} on WhatsApp (₹${totalPrice})`}
                </span>
              </button>

              <div className="text-center space-y-2">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Direct inquiry to <strong className="text-slate-800 dark:text-slate-200">{SHOP_INFO.owner}</strong> ({SHOP_INFO.phoneFormatted})
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                  <Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                  <span>More skins on Instagram:</span>
                  <a
                    href={SHOP_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-pink-600 dark:text-pink-400 hover:underline"
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
            className="relative max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-4 border border-transparent dark:border-slate-800 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
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
                <h4 className="font-bold text-base text-slate-900 dark:text-white">{zoomImage.name}</h4>
                {zoomImage.nameGu && (
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{zoomImage.nameGu}</p>
                )}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{zoomImage.category}</p>
              </div>
              <div className="text-right">
                <div className="font-mono font-black text-lg text-blue-600 dark:text-blue-400">₹150</div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">+₹50 flat shipping</div>
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  toggleSkin(zoomImage);
                }}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                  isSelected(zoomImage.id)
                    ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 hover:bg-red-100'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSelected(zoomImage.id) ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Remove from Selection</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    <span>+ Add to Selection</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setZoomImage(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
