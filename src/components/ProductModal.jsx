import React from 'react';
import { X, MessageCircle, ShieldCheck, Scale, Award } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Swarnalay Jewellers, I am inquiring about "${product.name}" (Weight: ${product.weight}, Metal: ${product.metal}). Please share more details and current pricing.`
  );

  const whatsappUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-emerald-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-t-3xl sm:rounded-3xl overflow-hidden bg-white border border-ivory-300 shadow-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile top pill drag indicator */}
        <div className="w-12 h-1 bg-ivory-400 rounded-full mx-auto my-2.5 sm:hidden" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white/90 border border-ivory-300 flex items-center justify-center text-charcoal hover:text-emerald-900 transition-all cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column: Compact height on mobile */}
          <div className="relative aspect-[16/10] sm:aspect-square md:h-full max-h-48 sm:max-h-none bg-ivory-200 p-3 sm:p-6 flex items-center justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-sm"
            />
            
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/90 backdrop-blur-md text-[9px] sm:text-xs font-semibold text-emerald-900 border border-ivory-300 uppercase tracking-wider">
                {product.tag}
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[9px] sm:text-xs font-semibold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] sm:text-xs text-charcoal-muted">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-deep" />
                  {product.purity}
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-3xl font-normal text-emerald-950 mb-1.5 sm:mb-2">
                {product.name}
              </h3>

              {/* Price Highlight */}
              <div className="flex items-baseline gap-2 mb-3 sm:mb-4">
                <span className="font-heading text-xl sm:text-3xl font-bold text-gold-deep tracking-tight">
                  {product.priceEstimate}
                </span>
                <span className="text-[10px] sm:text-[11px] text-charcoal-muted">
                  (Estimated • Taxes Extra)
                </span>
              </div>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-3.5 sm:mb-5">
                <div className="p-2 sm:p-3 rounded-xl bg-ivory-100 border border-ivory-300">
                  <div className="flex items-center gap-1 text-[9px] sm:text-xs text-charcoal-muted mb-0.5">
                    <Scale className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-800" />
                    <span>Gross Weight</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950">{product.weight}</p>
                </div>

                <div className="p-2 sm:p-3 rounded-xl bg-ivory-100 border border-ivory-300">
                  <div className="flex items-center gap-1 text-[9px] sm:text-xs text-charcoal-muted mb-0.5">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-deep" />
                    <span>Certification</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950">BIS 916 Hallmark</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-light">
                {product.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-1.5 pt-2.5 border-t border-ivory-200 safe-pb">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 sm:py-3.5 px-4 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-gold-light" />
                <span>Enquire on WhatsApp</span>
              </a>

              <p className="text-[9px] sm:text-[11px] text-center text-charcoal-light">
                Instant response & live video walkthrough available on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
