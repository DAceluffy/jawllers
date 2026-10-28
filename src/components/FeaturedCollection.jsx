import React, { useState } from 'react';
import { MessageCircle, Eye, Star, Heart, ShieldCheck, Scale } from 'lucide-react';
import { featuredProducts, storeConfig } from '../config/siteData';
import ProductModal from './ProductModal';

export default function FeaturedCollection({ selectedCategory, onSelectCategory }) {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState({});

  React.useEffect(() => {
    if (selectedCategory) {
      setActiveTab(selectedCategory);
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'gold', label: 'Gold' },
    { id: 'diamond', label: 'Diamond' },
    { id: 'bangles', label: 'Bangles' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'rings', label: 'Rings' },
    { id: 'silver', label: 'Silver' },
  ];

  const filteredProducts = activeTab === 'all'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeTab);

  const getWhatsAppLink = (product) => {
    const text = encodeURIComponent(
      `Hello Swarnalay Jewellers, I would like to inquire about "${product.name}" (Net Wt: ${product.weight}). Please share current pricing and availability.`
    );
    return `https://wa.me/${storeConfig.whatsappNumber}?text=${text}`;
  };

  const toggleWishlist = (id, e) => {
    e.stopPropagation();
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="collection" className="py-12 sm:py-24 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-12 pb-3 sm:pb-4 border-b border-ivory-300">
          <div>
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="text-[9px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
                MOST LOVED
              </span>
            </div>
            <h2 className="font-heading text-2xl sm:text-5xl font-normal text-emerald-950 tracking-tight">
              Best Sellers
            </h2>
          </div>

          <a
            href="#contact-form"
            className="text-[10px] sm:text-xs uppercase tracking-[0.18em] font-medium text-emerald-800 hover:text-gold-deep transition-colors mt-2 sm:mt-0 flex items-center gap-1 group"
          >
            <span>Custom Orders & Inquiries</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2.5 mb-6 sm:mb-8 no-scrollbar -mx-3 px-3 sm:mx-0 sm:px-0">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (onSelectCategory) onSelectCategory(tab.id);
                }}
                className={`px-3 py-1 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-emerald-900 text-ivory-50 shadow-sm border border-gold-champagne/40'
                    : 'bg-white text-charcoal-muted hover:text-emerald-900 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl sm:rounded-2xl bg-white border border-ivory-300 hover:border-gold-champagne transition-all duration-300 shadow-warm hover:shadow-warm-hover flex flex-col justify-between overflow-hidden"
            >
              {/* Product Image Frame (Compact & Square on mobile) */}
              <div 
                className="relative aspect-square overflow-hidden bg-ivory-200/50 p-2 sm:p-4 flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} - Swarnalay Fine Jewellery`}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Wishlist Heart Icon */}
                <button
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 backdrop-blur-sm border border-ivory-300 flex items-center justify-center text-charcoal-muted hover:text-rose-600 transition-colors cursor-pointer"
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-3 h-3 sm:w-4 sm:h-4 ${wishlist[product.id] ? 'fill-rose-600 text-rose-600' : ''}`} />
                </button>

                {/* Hallmark Badge */}
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                  <span className="px-1.5 py-0.5 rounded bg-white/90 backdrop-blur-sm text-[8px] sm:text-[9px] font-semibold text-emerald-900 border border-ivory-300 uppercase tracking-wider">
                    {product.tag}
                  </span>
                </div>

                {/* Quick View Pill */}
                <div className="hidden sm:block absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="px-3 py-1.5 rounded-full bg-white/95 text-emerald-900 border border-ivory-300 shadow-md text-[11px] font-medium tracking-wider uppercase flex items-center gap-1.5 hover:bg-emerald-900 hover:text-white transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2.5 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  {/* Metal specs & weight */}
                  <div className="flex items-center justify-between text-[9px] sm:text-[11px] text-charcoal-muted mb-1">
                    <span className="flex items-center gap-0.5 font-medium text-emerald-800 truncate max-w-[90px] sm:max-w-none">
                      <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-deep flex-shrink-0" />
                      <span className="truncate">{product.purity}</span>
                    </span>
                    <span className="flex items-center gap-0.5 font-light">
                      <Scale className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-charcoal-light flex-shrink-0" />
                      <span>{product.weight}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xs sm:text-lg font-semibold text-emerald-950 line-clamp-1 group-hover:text-emerald-800 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="font-heading text-sm sm:text-xl font-bold text-gold-deep mt-0.5 mb-1 sm:mt-1 sm:mb-2">
                    {product.priceEstimate}
                  </p>

                  {/* 5 Gold Stars Rating */}
                  <div className="flex items-center gap-0.5 mb-2 sm:mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-gold-champagne text-gold-champagne" />
                    ))}
                    <span className="text-[9px] sm:text-[10px] text-charcoal-light ml-0.5 font-medium">(48)</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-1.5 sm:pt-2 border-t border-ivory-200">
                  <a
                    href={getWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 sm:py-2.5 px-1.5 sm:px-3 rounded-lg sm:rounded-xl bg-emerald-900 hover:bg-emerald-850 text-ivory-50 text-[10px] sm:text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-1 sm:gap-2 shadow-sm transition-all active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-gold-light flex-shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
