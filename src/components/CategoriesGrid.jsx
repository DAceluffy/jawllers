import React from 'react';
import { Sparkles } from 'lucide-react';
import { categoriesData } from '../config/siteData';

export default function CategoriesGrid({ onSelectCategory }) {
  const handleCategoryClick = (categoryId) => {
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const collectionElement = document.getElementById('collection');
    if (collectionElement) {
      collectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-12 sm:py-24 bg-ivory-100 relative overflow-hidden">
      {/* Subtle Arc Flourish */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full border border-gold-champagne/15 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="h-[1px] w-4 sm:w-5 bg-gold-champagne" />
            <span className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
              CURATED FOR YOU
            </span>
            <span className="h-[1px] w-4 sm:w-5 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-2xl sm:text-5xl font-normal text-emerald-950 tracking-tight">
            Featured Collections
          </h2>
        </div>

        {/* Signature Arched Category Grid (Clean 2 columns on mobile, 4 on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative cursor-pointer flex flex-col items-center active:scale-[0.98] transition-transform duration-300"
            >
              {/* Arched Photo Card - Compact on mobile */}
              <div className="relative w-full aspect-[3.2/4] sm:aspect-[3.2/4.6] arch-top rounded-b-xl overflow-hidden bg-ivory-200 border border-ivory-300 group-hover:border-gold-champagne transition-colors duration-500 shadow-warm">
                <img
                  src={category.image}
                  alt={`${category.title} - Swarnalay Fine Jewellery`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle warm lighting gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Signature Bottom Deep Emerald Label Strip with Gold "+" */}
              <div className="w-full -mt-3 sm:-mt-4 relative z-10 px-1.5 sm:px-3">
                <div className="w-full py-1.5 sm:py-3 px-2 sm:px-3 rounded-lg bg-emerald-900 group-hover:bg-emerald-850 text-ivory-50 border border-gold-champagne/30 shadow-md flex items-center justify-between transition-colors duration-300">
                  <span className="text-[9px] sm:text-xs tracking-[0.15em] font-semibold uppercase text-ivory-100 truncate">
                    {category.title}
                  </span>
                  <span className="text-[11px] sm:text-sm text-gold-light font-light ml-0.5 group-hover:rotate-90 transition-transform duration-300">
                    +
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
