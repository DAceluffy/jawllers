import React from 'react';
import { Home, Sparkles } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function NotFound({ onBackHome }) {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative z-10 max-w-lg w-full text-center bg-white rounded-3xl p-8 sm:p-12 border border-ivory-300 shadow-warm">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 flex items-center justify-center mx-auto mb-6">
          <Sparkles className="w-8 h-8 text-gold-champagne animate-pulse-slow" />
        </div>

        <p className="font-heading text-2xl font-bold uppercase tracking-[0.15em] text-emerald-900 mb-2">
          {storeConfig.brandName}
        </p>

        <h1 className="font-heading text-6xl font-normal text-emerald-950 tracking-tight mb-2">
          404
        </h1>

        <h2 className="font-heading text-xl sm:text-2xl font-semibold text-charcoal mb-4">
          Precious Page Not Found
        </h2>

        <p className="text-charcoal-muted text-sm leading-relaxed mb-8 font-light">
          The heirloom page you are searching for might have been moved or does not exist.
        </p>

        <button
          onClick={onBackHome}
          className="px-7 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 mx-auto shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <Home className="w-4 h-4 text-gold-light" />
          <span>Return to Showcase</span>
        </button>
      </div>
    </div>
  );
}
