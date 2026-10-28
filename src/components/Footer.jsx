import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  Star
} from 'lucide-react';
import { storeConfig, categoriesData } from '../config/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ivory-100 border-t border-ivory-300 text-charcoal pb-24 sm:pb-12 relative overflow-hidden">
      
      {/* 1. Deep Emerald Newsletter Banner (Matching Lumière "Join Our Community" section) */}
      <div className="bg-emerald-950 text-ivory-100 py-12 sm:py-16 border-b border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gold-light block mb-2">
              STAY CONNECTED
            </span>
            <h3 className="font-heading text-3xl sm:text-5xl font-normal text-ivory-50 tracking-tight mb-3">
              Join Our Community
            </h3>
            <p className="text-ivory-300 text-xs sm:text-sm font-light mb-8 max-w-lg mx-auto">
              Be the first to know about new heritage arrivals, exclusive bridal showcases, and bullion market updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-grow px-5 py-3.5 rounded-full bg-emerald-900/80 border border-emerald-700 text-ivory-50 placeholder:text-ivory-400 text-xs sm:text-sm focus:outline-none focus:border-gold-champagne transition-all"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-gold-champagne hover:bg-gold-light text-emerald-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer active:scale-95"
              >
                Subscribe
              </button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-[11px] text-ivory-300 uppercase tracking-widest font-light">
              <span className="flex items-center gap-1.5">
                <Star className="w-2.5 h-2.5 fill-gold-champagne text-gold-champagne" />
                Exclusive Previews
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-2.5 h-2.5 fill-gold-champagne text-gold-champagne" />
                New Royal Arrivals
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-2.5 h-2.5 fill-gold-champagne text-gold-champagne" />
                Heirloom Inspiration
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body (Warm Ivory with Emerald text) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-ivory-300">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 border border-gold-champagne/40 flex items-center justify-center text-gold-champagne shadow-sm">
                <span className="font-hindi text-lg font-bold">स्व</span>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-[0.16em] uppercase text-emerald-900 block leading-tight">
                  {storeConfig.brandName}
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-charcoal-muted font-sans block font-medium">
                  FINE JEWELLERY • JAIPUR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
              Jaipur's premier destination for certified BIS hallmarked gold, diamond solitaires, and bespoke royal bridal jewellery since 1989.
            </p>

            <div className="p-3 rounded-xl bg-white border border-ivory-300 flex items-center gap-2.5 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-800 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs text-emerald-950 font-medium">
                Government Certified BIS Hallmark Jeweller
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={storeConfig.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 hover:border-emerald-800 hover:bg-emerald-900 hover:text-white flex items-center justify-center text-charcoal-muted transition-all active:scale-95"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={storeConfig.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 hover:border-emerald-800 hover:bg-emerald-900 hover:text-white flex items-center justify-center text-charcoal-muted transition-all active:scale-95"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={storeConfig.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-ivory-300 hover:border-emerald-800 hover:bg-emerald-900 hover:text-white flex items-center justify-center text-charcoal-muted transition-all active:scale-95"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${storeConfig.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-emerald-300 hover:border-emerald-800 hover:bg-emerald-900 hover:text-white flex items-center justify-center text-emerald-800 transition-all active:scale-95"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-xs uppercase tracking-wider text-emerald-950 font-bold mb-3 sm:mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-charcoal-muted">
              <li>
                <a href="#categories" className="hover:text-emerald-800 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-emerald-800 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#rates" className="hover:text-emerald-800 transition-colors">
                  Daily Rates
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-emerald-800 transition-colors">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#bridal" className="hover:text-emerald-800 transition-colors">
                  Bridal Suite
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-800 transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Jewellery Categories Column */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-xs uppercase tracking-wider text-emerald-950 font-bold mb-3 sm:mb-4">
              Jewellery Categories
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-charcoal-muted">
              {categoriesData.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a href="#collection" className="hover:text-emerald-800 transition-colors">
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Contact & Address Column */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="font-heading text-xs uppercase tracking-wider text-emerald-950 font-bold mb-3 sm:mb-4">
              Contact & Store
            </h4>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-muted">
              <MapPin className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
              <span>{storeConfig.fullAddress}</span>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-muted">
              <Phone className="w-4 h-4 text-emerald-800 flex-shrink-0" />
              <a href={`tel:${storeConfig.phone}`} className="hover:text-emerald-950 font-medium transition-colors">
                {storeConfig.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-muted">
              <Mail className="w-4 h-4 text-emerald-800 flex-shrink-0" />
              <a href={`mailto:${storeConfig.email}`} className="hover:text-emerald-950 transition-colors">
                {storeConfig.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-muted pt-0.5">
              <Clock className="w-4 h-4 text-emerald-800 flex-shrink-0 mt-0.5" />
              <span>{storeConfig.timings.weekdays} ({storeConfig.timings.closedOn})</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-charcoal-muted text-center sm:text-left">
          <p>© 2026 Swarnalay Fine Jewellery. All rights reserved. Handcrafted in Jaipur.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-emerald-900 hover:text-gold-deep transition-colors cursor-pointer active:scale-95 font-medium"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
