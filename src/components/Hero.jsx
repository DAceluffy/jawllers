import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Award, Star } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-ivory-100 pt-6 pb-12 sm:pt-12 sm:pb-20 lg:py-24">
      {/* Delicate Golden Arc Lines in Background (matching Lumière aesthetic) */}
      <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-gold-champagne/15 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full border border-gold-champagne/20 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full border border-ivory-300 pointer-events-none" />

      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-gold-soft/40 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-6">
              <span className="h-[1px] w-5 sm:w-6 bg-gold-champagne" />
              <span className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
                TIMELESS ELEGANCE • MODERN HERITAGE
              </span>
              <span className="h-[1px] w-5 sm:w-6 bg-gold-champagne" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-6xl md:text-7xl font-normal tracking-tight text-emerald-950 leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-7">
              Jewellery That <br className="hidden sm:inline" />
              <span className="italic font-serif text-emerald-900 font-medium">Tells Your Story</span>
            </h1>

            {/* Subtext */}
            <p className="text-charcoal-muted text-xs sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-10">
              Exquisite designs, ethically crafted with 100% BIS Hallmarked 22K gold and certified diamonds to celebrate every moment that matters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-14">
              <a
                href="#collection"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-95 group border border-emerald-700/40"
              >
                <span>Shop The Collection</span>
                <ArrowRight className="w-4 h-4 text-gold-light group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#visit-store"
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full border border-emerald-900/30 bg-white/60 hover:bg-ivory-200 text-emerald-900 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
              >
                <MapPin className="w-4 h-4 text-gold-deep" />
                <span>Visit Showroom</span>
              </a>
            </div>

            {/* Trust Pillars Counters */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-5 sm:pt-8 border-t border-ivory-300 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="font-heading text-xl sm:text-4xl font-normal text-emerald-950">
                  35+
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5 font-medium">
                  Years Heritage
                </p>
              </div>

              <div className="text-center lg:text-left border-x border-ivory-300 px-2 sm:px-4">
                <p className="font-heading text-xl sm:text-4xl font-normal text-emerald-950">
                  100%
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5 font-medium">
                  BIS Hallmarked
                </p>
              </div>

              <div className="text-center lg:text-left">
                <p className="font-heading text-xl sm:text-4xl font-normal text-emerald-950">
                  50,000+
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5 font-medium">
                  Happy Families
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Signature Arched Frame (Optimized & scaled down on mobile) */}
          <div className="lg:col-span-5 relative flex justify-center mt-2 sm:mt-0">
            
            {/* Arched Jewellery Frame */}
            <div className="relative w-full max-w-[210px] xs:max-w-[240px] sm:max-w-md">
              <div className="relative rounded-t-[100px] sm:rounded-t-[180px] rounded-b-2xl sm:rounded-b-3xl overflow-hidden bg-ivory-200 border border-gold-champagne/40 sm:border-2 shadow-warm p-2 sm:p-3">
                
                <div className="relative rounded-t-[90px] sm:rounded-t-[170px] rounded-b-xl sm:rounded-b-2xl overflow-hidden aspect-[3.6/4.5] sm:aspect-[3.8/5]">
                  <img
                    src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
                    alt="Swarnalay Royal Bridal Kundan Jewellery Collection"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  {/* Subtle warm tint overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />

                  {/* Bottom Caption Pill */}
                  <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 border border-ivory-300 shadow-sm flex items-center justify-between">
                    <div>
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-emerald-800 font-semibold block">
                        Signature Piece
                      </span>
                      <h3 className="font-heading text-xs sm:text-base font-semibold text-emerald-950 leading-tight">
                        Mayura Choker Set
                      </h3>
                    </div>
                    <span className="text-[10px] sm:text-xs font-heading font-bold text-gold-deep bg-ivory-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded border border-gold-champagne/30">
                      22K
                    </span>
                  </div>
                </div>

              </div>

              {/* Circular Emblem (Scaled on mobile) */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-18 h-18 sm:w-28 sm:h-28 rounded-full bg-emerald-900 border sm:border-2 border-gold-champagne text-gold-light flex items-center justify-center shadow-lg p-1.5 sm:p-2 animate-float">
                <div className="w-full h-full rounded-full border border-gold-champagne/40 flex flex-col items-center justify-center text-center p-0.5 sm:p-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-gold-champagne text-gold-champagne mb-0.5" />
                  <span className="text-[6px] sm:text-[8px] tracking-[0.15em] uppercase font-bold text-ivory-100 leading-tight">
                    TIMELESS
                  </span>
                  <span className="text-[5px] sm:text-[6px] tracking-[0.2em] uppercase text-gold-light">
                    BEAUTY
                  </span>
                </div>
              </div>

              {/* Floating certified badge */}
              <div className="absolute -bottom-2.5 -left-2.5 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-ivory-300 shadow-warm flex items-center gap-1.5 sm:gap-2.5">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-800" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-emerald-950 uppercase tracking-wider">BIS Hallmarked</p>
                  <p className="text-[8px] sm:text-[9px] text-charcoal-muted">100% Certified</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
