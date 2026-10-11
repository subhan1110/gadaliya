import React, { useState } from 'react';
import {
  Wrench,
  Smartphone,
  BatteryCharging,
  Zap,
  Droplets,
  Cpu,
  Camera,
  Clock,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { REPAIR_SERVICES, SHOP_INFO } from '../data/shopData';
import { RepairService } from '../types';

export const RepairEstimator: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('Apple');
  const [selectedService, setSelectedService] = useState<RepairService>(REPAIR_SERVICES[0]);

  const brands = ['Apple', 'Samsung', 'OnePlus', 'Vivo', 'Realme', 'Xiaomi / Poco', 'Oppo', 'Motorola'];

  const handleBookRepair = () => {
    const text = `Hello Prakash bhai, I have a ${selectedBrand} phone that needs "${selectedService.title}". Can you give me an exact quote for repair at Gadaliya Mobile Visnagar?`;
    window.open(SHOP_INFO.whatsappUrl(text), '_blank');
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'Camera':
        return <Camera className="w-5 h-5 text-blue-600" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-blue-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-600" />;
      default:
        return <Smartphone className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="repairs" className="py-20 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center sm:text-left">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
            Speedy Repair Counter
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Repair Time & Quote Estimator
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
            Select your phone brand and the issue. Most repairs are resolved same-day at our Visnagar workshop by Prakash Gadaliya with genuine-tested replacement parts.
          </p>
          <div className="w-16 h-1 bg-blue-600 mt-4 rounded-full mx-auto sm:mx-0"></div>
        </div>

        {/* Brand Selector */}
        <div className="mb-8">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-3">
            1. Select Your Device Brand
          </label>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedBrand === brand
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Issues List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {REPAIR_SERVICES.map((srv) => {
            const isSelected = selectedService.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 shadow-xs ${
                  isSelected
                    ? 'bg-blue-50/70 border-blue-600 shadow-md ring-1 ring-blue-600'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                      {getIcon(srv.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600">
                      From ₹{srv.startingPrice}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-slate-900 mb-1.5">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    {srv.timeEstimate}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {srv.warranty}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Quote Banner */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Gadaliya Quality Assurance
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
              Estimated Service: <span className="text-blue-400">{selectedBrand} {selectedService.title}</span>
            </h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
              <span>Time: <strong className="text-white">{selectedService.timeEstimate}</strong></span>
              <span>•</span>
              <span>Warranty: <strong className="text-emerald-400">{selectedService.warranty}</strong></span>
              <span>•</span>
              <span>Est. Starting: <strong className="text-blue-400 font-mono font-bold">₹{selectedService.startingPrice}</strong></span>
            </div>
          </div>

          <button
            onClick={handleBookRepair}
            className="w-full md:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-3 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all shrink-0 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get Quote on WhatsApp (+91 91733 09034)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
