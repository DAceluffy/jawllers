import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-12 sm:py-24 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 lg:gap-16 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-[210px] xs:max-w-[240px] sm:max-w-md lg:max-w-none">
              
              {/* Main Image with Arched Aesthetic - Scaled down on phone */}
              <div className="rounded-t-[90px] sm:rounded-t-[120px] rounded-b-xl sm:rounded-b-2xl overflow-hidden bg-ivory-200 border-2 border-ivory-300 shadow-warm aspect-[3.6/4.4] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1611591475879-1e5b38f8373b?auto=format&fit=crop&w=1000&q=80"
                  alt="Swarnalay Master Craftsman Hallmarked Gold Jewellery"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Overlapping Floating Milestone Card */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-8 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-ivory-300 shadow-warm max-w-[160px] sm:max-w-[260px]">
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                  <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-emerald-900 flex items-center justify-center text-gold-light">
                    <Award className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-gold-champagne" />
                  </div>
                  <div>
                    <p className="font-heading text-lg sm:text-3xl font-bold text-emerald-950">35+</p>
                    <p className="text-[8px] sm:text-xs text-charcoal-muted uppercase tracking-wider">Years of Trust</p>
                  </div>
                </div>
                <p className="text-[8px] sm:text-xs text-charcoal-muted leading-tight sm:leading-relaxed pt-1.5 border-t border-ivory-200">
                  Devotion since 1989 in Madhubani.
                </p>
              </div>

              {/* Floating Certified Seal Top Left */}
              <div className="absolute -top-2.5 -left-2 sm:-top-5 sm:-left-5 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3.5 border border-ivory-300 flex items-center gap-2 shadow-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800" />
                <div>
                  <p className="text-[9px] sm:text-xs font-bold text-emerald-950 uppercase tracking-wider">BIS Hallmark</p>
                  <p className="text-[8px] text-charcoal-muted">Govt. Certified</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative Story & Statistics */}
          <div className="lg:col-span-6 mt-4 sm:mt-0">
            <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="h-[1px] w-4 sm:w-5 bg-gold-champagne" />
              <span className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
                OUR LEGACY
              </span>
              <span className="h-[1px] w-4 sm:w-5 bg-gold-champagne" />
            </div>

            <h2 className="font-heading text-2xl sm:text-5xl font-normal text-emerald-950 tracking-tight mb-3 sm:mb-6">
              Crafting Memories Since 1989
            </h2>

            <div className="space-y-2.5 sm:space-y-4 text-charcoal-muted text-xs sm:text-base leading-relaxed font-light mb-6 sm:mb-8">
              <p>
                Founded in the heart of Madhubani on Mahila College Road, Swarnalay began with a singular promise: to honor the sanctity of pure gold and the emotional milestones of Indian families.
              </p>
              <p>
                For over three and a half decades, our master artisans have married timeless Rajputana filigree with contemporary precision. Every diamond is hand-selected, and every gram of gold rigorously hallmarked.
              </p>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-6 pt-4 sm:pt-6 border-t border-ivory-300">
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-ivory-300">
                <p className="font-heading text-xl sm:text-3xl font-normal text-emerald-950">
                  35+ Years
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5">Unbroken Legacy</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-ivory-300">
                <p className="font-heading text-xl sm:text-3xl font-normal text-emerald-950">
                  100%
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5">BIS Certified</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-ivory-300">
                <p className="font-heading text-xl sm:text-3xl font-normal text-emerald-950">
                  12,000+
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5">Custom Designs</p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl bg-white border border-ivory-300">
                <p className="font-heading text-xl sm:text-3xl font-normal text-emerald-950">
                  50k+
                </p>
                <p className="text-[9px] sm:text-xs text-charcoal-muted uppercase tracking-wider mt-0.5">Smiles Adorned</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
