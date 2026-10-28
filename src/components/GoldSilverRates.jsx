import React from 'react';
import { TrendingUp, TrendingDown, Clock, ShieldCheck, MessageCircle, Star } from 'lucide-react';
import { liveRates, storeConfig } from '../config/siteData';

export default function GoldSilverRates() {
  const whatsappRateInquiry = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Swarnalay Jewellers, I would like to know about today\'s live gold & silver rates and current making charges.'
  )}`;

  return (
    <section id="rates" className="py-16 sm:py-24 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-gold-champagne" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
              MARKET TRANSPARENCY
            </span>
            <span className="h-[1px] w-5 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal text-emerald-950 tracking-tight mb-3">
            Today's Gold & Silver Rate
          </h2>
          <p className="text-charcoal-muted text-xs sm:text-base leading-relaxed font-light mb-4">
            Real-time benchmark bullion rates updated daily for our valued patrons.
          </p>

          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-emerald-900 bg-white px-4 py-1.5 rounded-full border border-ivory-300 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gold-deep" />
            <span>Last Updated: {liveRates.lastUpdated}</span>
          </div>
        </div>

        {/* Live Rates Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-8 sm:mb-10">
          {liveRates.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-4 sm:p-6 bg-white border border-ivory-300 hover:border-gold-champagne transition-all duration-300 shadow-warm flex flex-col justify-between"
            >
              <div>
                {/* Metal & Badge Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-2.5 sm:mb-4">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-800 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100 inline-block mb-1">
                      {item.badge}
                    </span>
                    <h3 className="font-heading text-base sm:text-xl font-bold text-emerald-950 leading-tight">
                      {item.metal}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-charcoal-muted mt-0.5">{item.purity}</p>
                  </div>

                  {/* Change indicator */}
                  <div className={`inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full self-start ${
                    item.isPositive
                      ? 'text-emerald-800 bg-emerald-100'
                      : 'text-rose-700 bg-rose-50'
                  }`}>
                    {item.isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>{item.change}</span>
                  </div>
                </div>

                {/* Rate Display */}
                <div className="my-3 sm:my-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-xl sm:text-3xl font-bold text-gold-deep tracking-tight">
                      {liveRates.currency} {item.rate}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-charcoal-muted mt-0.5 block">
                    {item.unit}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 sm:pt-3 border-t border-ivory-200 flex items-center justify-between text-[10px] sm:text-xs text-charcoal-muted">
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-deep" />
                  <span>Hallmark Assured</span>
                </span>
                <span className="text-[9px] text-gold-deep font-semibold tracking-wider">LIVE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rate Inquiry Banner */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 border border-ivory-300 shadow-warm flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <div>
            <h4 className="font-heading text-xl sm:text-2xl font-semibold text-emerald-950 mb-1">
              Lock Today’s Rate or Inquire Custom Bullion
            </h4>
            <p className="text-charcoal-muted text-xs sm:text-sm font-light">
              * Rates reflect standard bullion value excluding local GST (3%) and craftsmanship charges.
            </p>
          </div>

          <a
            href={whatsappRateInquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-gold-light" />
            <span>Lock Rate via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
