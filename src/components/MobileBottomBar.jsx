import React from 'react';
import { Phone, MessageCircle, TrendingUp, Gem, MapPin } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function MobileBottomBar() {
  const whatsappUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Swarnalay Jewellers, I would like to inquire about your fine jewellery collections and today\'s rates.'
  )}`;

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-emerald-950/95 backdrop-blur-xl border-t border-emerald-800/80 safe-pb px-3 py-1.5 shadow-[0_-8px_24px_rgba(7,23,17,0.7)] text-ivory-200">
      <div className="grid grid-cols-5 items-center text-center">
        
        {/* 1. Collection */}
        <a
          href="#collection"
          className="flex flex-col items-center justify-center py-1 text-ivory-300 hover:text-gold-light active:text-white transition-colors"
        >
          <Gem className="w-5 h-5 mb-0.5 text-gold-champagne" />
          <span className="text-[10px] font-medium tracking-tight">Catalog</span>
        </a>

        {/* 2. Live Rates */}
        <a
          href="#rates"
          className="flex flex-col items-center justify-center py-1 text-ivory-300 hover:text-gold-light active:text-white transition-colors"
        >
          <TrendingUp className="w-5 h-5 mb-0.5 text-gold-light" />
          <span className="text-[10px] font-medium tracking-tight">Rates</span>
        </a>

        {/* 3. Center Highlight: WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center -mt-4 group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-champagne to-gold-light flex items-center justify-center text-emerald-950 shadow-lg shadow-emerald-950/80 border-2 border-emerald-950 group-active:scale-95 transition-transform">
            <MessageCircle className="w-6 h-6 fill-emerald-950/20" />
          </div>
          <span className="text-[10px] font-semibold text-gold-light mt-0.5 tracking-tight">Chat</span>
        </a>

        {/* 4. Call Store */}
        <a
          href={`tel:${storeConfig.phone}`}
          className="flex flex-col items-center justify-center py-1 text-ivory-300 hover:text-gold-light active:text-white transition-colors"
        >
          <Phone className="w-5 h-5 mb-0.5 text-ivory-100" />
          <span className="text-[10px] font-medium tracking-tight">Call</span>
        </a>

        {/* 5. Visit Store */}
        <a
          href="#visit-store"
          className="flex flex-col items-center justify-center py-1 text-ivory-300 hover:text-gold-light active:text-white transition-colors"
        >
          <MapPin className="w-5 h-5 mb-0.5 text-gold-champagne" />
          <span className="text-[10px] font-medium tracking-tight">Store</span>
        </a>

      </div>
    </nav>
  );
}
