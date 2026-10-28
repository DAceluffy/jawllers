import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../config/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonialsData.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const current = testimonialsData[currentIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 sm:py-24 bg-ivory-50 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Lumière "What Our Customers Say" */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-gold-champagne" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
              REAL STORIES
            </span>
            <span className="h-[1px] w-5 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal text-emerald-950 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl p-6 sm:p-12 lg:p-14 bg-white border border-ivory-300 shadow-warm transition-all duration-500">
          
          {/* Subtle Quote Icon */}
          <div className="text-gold-champagne/40 mb-4">
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 rotate-180" />
          </div>

          <div className="relative z-10">
            {/* Testimonial Quote */}
            <p className="font-heading text-lg sm:text-2xl font-normal text-emerald-950 leading-relaxed mb-6 sm:mb-8 italic">
              "{current.comment}"
            </p>

            {/* Reviewer Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 sm:pt-6 border-t border-ivory-200">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-emerald-950">
                    {current.name}
                  </h3>
                  {current.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  {current.location} • <span className="text-emerald-800 font-medium">{current.purchase}</span>
                </p>
              </div>

              {/* Star Rating & Navigation */}
              <div className="flex items-center justify-between sm:justify-end gap-4 pt-2 sm:pt-0">
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-champagne text-gold-champagne" />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-ivory-300 hover:border-emerald-800 text-charcoal hover:text-emerald-900 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-ivory-300 hover:border-emerald-800 text-charcoal hover:text-emerald-900 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
