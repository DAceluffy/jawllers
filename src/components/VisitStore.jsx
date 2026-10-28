import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Sparkles } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function VisitStore() {
  return (
    <section id="visit-store" className="py-16 sm:py-24 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-gold-champagne" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
              EXPERIENCE LUXURY
            </span>
            <span className="h-[1px] w-5 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal text-emerald-950 tracking-tight mb-3">
            Visit Our Flagship Store
          </h2>
          <p className="text-charcoal-muted text-xs sm:text-base leading-relaxed font-light">
            We welcome you to experience our collections in person with bespoke hospitality and expert guidance in Madhubani.
          </p>
        </div>

        {/* 2-Column Layout: Store Details + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3 sm:space-y-4">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-ivory-300 shadow-warm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-900">
                  <MapPin className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-emerald-950 mb-0.5">
                    Store Address
                  </h3>
                  <p className="text-charcoal-muted text-xs sm:text-sm leading-relaxed font-light">
                    {storeConfig.fullAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-ivory-300 shadow-warm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-900">
                  <Clock className="w-5 h-5 text-emerald-800" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-emerald-950 mb-0.5">
                    Store Timings
                  </h3>
                  <div className="text-charcoal-muted text-xs sm:text-sm space-y-1 font-light">
                    <p className="flex justify-between">
                      <span>Mon – Sat:</span>
                      <span className="text-emerald-950 font-medium">{storeConfig.timings.weekdays}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-emerald-950 font-medium">{storeConfig.timings.sunday}</span>
                    </p>
                    <p className="text-[11px] text-rose-700 pt-0.5 font-medium">
                      {storeConfig.timings.closedOn}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Valet Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-ivory-300 shadow-warm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0 text-emerald-900">
                  <Phone className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-emerald-950 mb-0.5">
                    Phone & Inquiries
                  </h3>
                  <a
                    href={`tel:${storeConfig.phone}`}
                    className="text-emerald-900 text-sm sm:text-base font-medium hover:text-gold-deep transition-colors block"
                  >
                    {storeConfig.phoneDisplay}
                  </a>
                  <p className="text-[11px] sm:text-xs text-charcoal-muted mt-1 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-gold-deep" />
                    <span>Complimentary Valet Parking Available</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Directions Action */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(storeConfig.fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 sm:py-4 rounded-full bg-emerald-900 hover:bg-emerald-800 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
            >
              <Navigation className="w-4 h-4 text-gold-light" />
              <span>Get Google Map Directions</span>
            </a>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-ivory-300 shadow-warm min-h-[280px] sm:min-h-[420px] relative">
            <iframe
              title="Swarnalay Jewellers Location Map"
              src={storeConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full contrast-[1.02]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
