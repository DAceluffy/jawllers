import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin, Phone, Star } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#categories", label: "Categories" },
    { href: "#collection", label: "Collections" },
    { href: "#rates", label: "Daily Rates" },
    { href: "#craftsmanship", label: "Craftsmanship" },
    { href: "#bridal", label: "Bridal Suite" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#visit-store", label: "Visit Store" },
  ];

  const whatsappUrl = `https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Swarnalay Jewellers, I would like to inquire about your fine jewellery collections.'
  )}`;

  return (
    <>
      {/* Top Micro Announcement Bar (Deep Forest Emerald like in reference design) */}
      <div className="bg-emerald-900 border-b border-emerald-800 text-[11px] sm:text-xs text-ivory-100 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider font-light">
          <div className="flex items-center gap-2 sm:gap-4 mx-auto sm:mx-0">
            <span className="flex items-center gap-1.5 text-gold-light font-medium">
              <Star className="w-3 h-3 fill-gold-champagne text-gold-champagne" />
              <span>100% BIS 916 HALLMARKED GOLD & CERTIFIED DIAMONDS</span>
            </span>
            <span className="text-emerald-700 hidden md:inline">•</span>
            <span className="hidden md:inline text-ivory-200">
              JAIPUR HERITAGE SINCE 1989
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-ivory-200">
            <a href={`tel:${storeConfig.phone}`} className="flex items-center gap-1 hover:text-gold-light transition-colors">
              <Phone className="w-3 h-3 text-gold-champagne" />
              <span>{storeConfig.phoneDisplay}</span>
            </a>
            <span className="text-emerald-700">|</span>
            <span className="flex items-center gap-1 text-ivory-300">
              <MapPin className="w-3 h-3 text-gold-champagne" />
              {storeConfig.city}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar (Warm Ivory & Pearl White with Emerald branding) */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-warm border-b border-ivory-300 py-2.5 sm:py-3'
            : 'bg-ivory-100/90 backdrop-blur-sm border-b border-ivory-300/80 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo (Centered luxury serif aesthetic matching Lumière) */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-900 border border-gold-champagne/40 flex items-center justify-center text-gold-champagne shadow-sm group-hover:scale-105 transition-transform duration-300">
              <span className="font-hindi text-lg font-bold">स्व</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-emerald-900 leading-tight">
                {storeConfig.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-charcoal-muted font-sans font-medium -mt-0.5">
                FINE JEWELLERY • JAIPUR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.12em] font-medium text-charcoal-muted hover:text-emerald-800 transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-champagne group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-800 text-ivory-50 text-xs font-medium tracking-wider uppercase border border-gold-champagne/30 shadow-sm flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20 text-gold-light" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-ivory-200 border border-ivory-300 text-charcoal hover:text-emerald-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ivory-50 border-b border-ivory-300 px-6 py-6 transition-all duration-300 shadow-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wider uppercase text-charcoal hover:text-emerald-800 py-1.5 border-b border-ivory-200 flex justify-between items-center"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-gold-deep">→</span>
                </a>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-900 text-ivory-50 font-medium text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" />
                  <span>WhatsApp Us</span>
                </a>

                <div className="flex justify-between items-center pt-2 text-xs text-charcoal-muted">
                  <span>{storeConfig.phoneDisplay}</span>
                  <span className="text-emerald-800 font-medium">{storeConfig.city}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
