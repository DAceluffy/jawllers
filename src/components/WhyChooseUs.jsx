import React from 'react';
import { ShieldCheck, Sparkles, Palette, RefreshCw, BadgeCheck, Star, Award, CheckCircle2 } from 'lucide-react';
import { whyChooseUsData } from '../config/siteData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Palette: Palette,
  RefreshCw: RefreshCw,
  BadgeCheck: BadgeCheck,
};

export default function WhyChooseUs() {
  return (
    <section id="craftsmanship" className="py-20 lg:py-28 bg-emerald-950 text-ivory-100 relative overflow-hidden">
      {/* Subtle Gold Arc Curves in Background */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full border border-gold-champagne/10 -translate-y-1/2 pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-emerald-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-gold-champagne" />
            <span className="text-[10px] sm:text-xs tracking-[0.28em] uppercase font-semibold text-gold-light">
              CRAFTED WITH PURPOSE
            </span>
            <span className="h-[1px] w-6 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ivory-50 mb-4">
            The Art of Fine Craftsmanship
          </h2>
          <p className="text-ivory-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Every piece is thoughtfully designed and meticulously crafted by skilled master artisans using ethically sourced 22K/18K hallmarked gold and certified solitaires. Our commitment to quality ensures jewellery that lasts a lifetime — and beyond.
          </p>

          {/* Central Circular Stamp (Matching Lumière "Handcrafted with Passion") */}
          <div className="mt-8 inline-flex items-center justify-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-900/90 border border-gold-champagne/60 p-1 shadow-lg shadow-emerald-950/80">
              <div className="w-full h-full rounded-full border border-gold-champagne/30 flex flex-col items-center justify-center text-center p-1">
                <Star className="w-3.5 h-3.5 fill-gold-champagne text-gold-champagne mb-0.5" />
                <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.16em] font-bold text-gold-light leading-tight">
                  HAND CRAFTED
                </span>
                <span className="text-[6px] tracking-[0.2em] uppercase text-ivory-300">
                  WITH PASSION
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseUsData.map((item, index) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl p-7 sm:p-8 bg-emerald-900/50 hover:bg-emerald-900/80 border border-emerald-800 hover:border-gold-champagne/50 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Icon & Index Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-emerald-950 border border-gold-champagne/40 flex items-center justify-center text-gold-light group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-gold-champagne" />
                    </div>
                    <span className="text-xl font-heading text-gold-champagne/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-normal text-ivory-50 mb-2.5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ivory-300 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Seal */}
                <div className="mt-6 pt-4 border-t border-emerald-800/80 flex items-center gap-2 text-xs text-gold-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-champagne" />
                  <span className="tracking-wider uppercase text-[10px] font-medium">
                    Guaranteed Purity
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
