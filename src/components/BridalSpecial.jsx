import React from 'react';
import { Crown, Sparkles, CheckCircle2, Calendar, MessageCircle, Star } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function BridalSpecial() {
  const bridalWhatsAppUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Swarnalay Jewellers, I would like to book a VIP Bridal Suite consultation for wedding jewellery.'
  )}`;

  return (
    <section id="bridal" className="py-12 sm:py-24 relative overflow-hidden bg-emerald-950 text-ivory-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Luxury Card Banner */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-emerald-900/60 border border-emerald-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-5 sm:p-12 lg:p-16 z-10">
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-6">
                <span className="h-[1px] w-5 sm:w-6 bg-gold-champagne" />
                <span className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-gold-light">
                  ROYAL BRIDAL SUITE
                </span>
                <span className="h-[1px] w-5 sm:w-6 bg-gold-champagne" />
              </div>

              <h2 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-normal text-ivory-50 tracking-tight leading-tight mb-3 sm:mb-6">
                The Regal Swarnalay <br />
                <span className="italic font-serif text-gold-light">Bridal Trousseau</span>
              </h2>

              <p className="text-ivory-300 text-xs sm:text-base font-light leading-relaxed mb-5 sm:mb-8 max-w-xl">
                Your wedding day deserves nothing less than ancestral majesty. Book a private consultation with our master bridal stylists in our Jaipur VIP lounge.
              </p>

              {/* Perks List */}
              <div className="space-y-2.5 sm:space-y-4 mb-6 sm:mb-10">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-950 border border-gold-champagne/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-champagne" />
                  </div>
                  <span className="text-ivory-100 text-xs sm:text-sm font-medium">
                    Exclusive 1-on-1 Bridal Consultation
                  </span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-950 border border-gold-champagne/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-champagne" />
                  </div>
                  <span className="text-ivory-100 text-xs sm:text-sm font-medium">
                    Custom Polki, Jadau & Kundan Heirlooms
                  </span>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-950 border border-gold-champagne/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-champagne" />
                  </div>
                  <span className="text-ivory-100 text-xs sm:text-sm font-medium">
                    Matching Trousseau for the Entire Family
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
                <a
                  href="#contact-form"
                  className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-full bg-gold-champagne hover:bg-gold-light text-emerald-950 font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Bridal Appointment</span>
                </a>

                <a
                  href={bridalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 sm:py-4 rounded-full border border-emerald-700 bg-emerald-950/60 hover:bg-emerald-950 text-gold-light font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-gold-champagne" />
                  <span>Chat with Bridal Stylist</span>
                </a>
              </div>
            </div>

            {/* Right Image Column: Compact height on mobile */}
            <div className="lg:col-span-5 relative h-48 sm:h-96 lg:h-full min-h-[190px] sm:min-h-[440px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85"
                alt="Swarnalay Royal Bridal Jewellery Lounge"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-emerald-950 via-emerald-950/30 to-transparent" />

              {/* Floating Bridal VIP Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-emerald-950/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-gold-champagne/40 max-w-[190px] sm:max-w-xs shadow-lg">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-gold-champagne text-gold-champagne" />
                  <span className="text-[9px] sm:text-xs font-semibold text-gold-light uppercase tracking-wider">
                    VIP Bridal Lounge
                  </span>
                </div>
                <p className="text-[8px] sm:text-xs text-ivory-300 leading-tight sm:leading-relaxed font-light">
                  Complimentary hospitality & styling for the bride and family.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
