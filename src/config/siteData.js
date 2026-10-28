/**
 * ============================================================================
 * SWARNALAY JEWELLERS - MASTER CONFIGURATION FILE (ENGLISH)
 * ============================================================================
 * All store information, rates, products, categories, and content can be
 * conveniently edited in this single file.
 */

export const storeConfig = {
  // Core Brand Info
  brandName: "Swarnalay",
  brandNameSubtitle: "Jewellers • Madhubani",
  brandNameDevanagari: "स्वर्णालय",
  tagline: "Timeless Jewellery, Crafted with Trust",
  establishedYear: 1989,
  yearsOfTrust: 35,

  // Contact Placeholders (Configurable)
  phone: "+91 87970 72656", // [PHONE] placeholder
  phoneDisplay: "+91 87970 72656",
  whatsappNumber: "918797072656", // [WHATSAPP] placeholder (numeric format without '+')
  whatsappDisplay: "+91 87970 72656",
  email: "care@swarnalayjewellers.com",
  
  // Location Placeholders
  address: "Mahila College Road", // [ADDRESS] placeholder
  city: "Madhubani, Bihar", // [CITY] placeholder
  pincode: "847211",
  fullAddress: "Mahila College Road, Madhubani, Bihar - 847211",

  // Business Timings
  timings: {
    weekdays: "10:30 AM – 8:30 PM",
    sunday: "11:00 AM – 7:00 PM",
    closedOn: "Tuesday (Weekly Off)",
  },

  // Google Maps Embed URL (Centered on Mahila College Road, Madhubani)
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Mahila+College+Road,+Madhubani,+Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    pinterest: "https://pinterest.com"
  }
};

/**
 * TODAY'S LIVE GOLD & SILVER RATES
 * Update these numbers daily.
 */
export const liveRates = {
  lastUpdated: "Today, 10:00 AM IST",
  currency: "₹",
  items: [
    {
      metal: "24K Gold",
      purity: "99.9% Pure Bullion",
      unit: "per 10 gram",
      rate: "78,450",
      change: "+₹220",
      isPositive: true,
      badge: "Standard Purity"
    },
    {
      metal: "22K Gold",
      purity: "91.6% BIS Hallmark",
      unit: "per 10 gram",
      rate: "71,950",
      change: "+₹180",
      isPositive: true,
      badge: "Ideal for Ornaments"
    },
    {
      metal: "18K Gold",
      purity: "75.0% Fine Gold",
      unit: "per 10 gram",
      rate: "58,850",
      change: "-₹90",
      isPositive: false,
      badge: "Diamond Jewellery"
    },
    {
      metal: "Fine Silver",
      purity: "99.9% Sterling Silver",
      unit: "per 1 kg",
      rate: "94,200",
      change: "+₹450",
      isPositive: true,
      badge: "Hallmarked 999"
    }
  ]
};

/**
 * 8 CORE JEWELLERY CATEGORIES
 */
export const categoriesData = [
  {
    id: "gold",
    title: "Gold Jewellery",
    subtitle: "Pure 22K & 18K Hallmarked Brilliance",
    count: "450+ Designs",
    image: "https://images.unsplash.com/photo-1611591475879-1e5b38f8373b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "diamond",
    title: "Diamond Solitaires",
    subtitle: "IGI & GIA Certified Radiance",
    count: "280+ Designs",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "silver",
    title: "Pure Silver",
    subtitle: "925 Sterling Utensils & Ornaments",
    count: "320+ Designs",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bridal",
    title: "Bridal Trousseau",
    subtitle: "Regal Heirloom Bridal Sets",
    count: "150+ Sets",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "rings",
    title: "Rings & Bands",
    subtitle: "Engagement & Eternity Rings",
    count: "210+ Designs",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "necklaces",
    title: "Necklaces & Chokers",
    subtitle: "Intricate Filigree & Kundan Sets",
    count: "190+ Designs",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "earrings",
    title: "Earrings & Jhumkas",
    subtitle: "From Classic Drops to Chandbalis",
    count: "340+ Designs",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bangles",
    title: "Bangles & Kadas",
    subtitle: "Antique Temple & Daily Wear Kadas",
    count: "180+ Designs",
    image: "https://images.unsplash.com/photo-1611591475879-1e5b38f8373b?auto=format&fit=crop&w=800&q=80"
  }
];

/**
 * 8+ FEATURED PRODUCTS (Pure English)
 */
export const featuredProducts = [
  {
    id: "prod-1",
    category: "bridal",
    name: "Mayura Kundan Bridal Choker Set",
    metal: "22K Yellow Gold (916 BIS)",
    weight: "48.60 grams",
    priceEstimate: "₹3,75,000",
    purity: "22K BIS Hallmarked",
    tag: "Masterpiece",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted with uncut Polki diamonds, rubies, and delicate South Sea pearls by heritage master artisans."
  },
  {
    id: "prod-2",
    category: "diamond",
    name: "Celestial Solitaire Diamond Ring",
    metal: "18K White Gold",
    weight: "4.85 grams",
    priceEstimate: "₹1,45,000",
    purity: "VVS-EF Natural Diamond (1.20 ct)",
    tag: "IGI Certified",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    description: "A mesmerizing brilliant cut solitaire diamond nestled in a frost-inspired platinum-tone prong setting."
  },
  {
    id: "prod-3",
    category: "gold",
    name: "Aaradhya Temple Carved Gold Necklace",
    metal: "22K Gold (916)",
    weight: "36.20 grams",
    priceEstimate: "₹2,82,000",
    purity: "22K BIS Hallmarked",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    description: "Intricate Goddess Lakshmi motifs hand-carved in antique finish with festive ghungroo tassel accents."
  },
  {
    id: "prod-4",
    category: "bangles",
    name: "Rajwada Filigree Royal Gold Kadas (Pair)",
    metal: "22K Yellow Gold",
    weight: "42.00 grams",
    priceEstimate: "₹3,26,000",
    purity: "22K BIS Hallmarked",
    tag: "Heritage",
    image: "https://images.unsplash.com/photo-1611591475879-1e5b38f8373b?auto=format&fit=crop&w=800&q=80",
    description: "Pair of openable screw-lock royal bangles showcasing fine jaali work and floral embossed borders."
  },
  {
    id: "prod-5",
    category: "earrings",
    name: "Noorani Chandbali Diamond Earrings",
    metal: "18K Rose & White Gold",
    weight: "18.40 grams",
    priceEstimate: "₹1,88,000",
    purity: "VVS Natural Diamonds + Emerald",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    description: "Moon-shaped chandelier earrings featuring bezel-set diamonds with suspended Zambian emerald drops."
  },
  {
    id: "prod-6",
    category: "silver",
    name: "Amrit Kalash 925 Pure Silver Pooja Set",
    metal: "925 Sterling Silver",
    weight: "520.00 grams",
    priceEstimate: "₹56,000",
    purity: "925 Certified Silver",
    tag: "Auspicious",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Seven-piece ceremonial puja set including thali, diya, bell, kalash, and incense holder."
  },
  {
    id: "prod-7",
    category: "rings",
    name: "Ananya Blue Sapphire & Diamond Ring",
    metal: "18K White Gold",
    weight: "5.10 grams",
    priceEstimate: "₹1,18,000",
    purity: "Natural Ceylon Sapphire & Diamonds",
    tag: "Cold Luxury",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    description: "Vibrant royal blue Ceylon sapphire encircled by a halo of micro-pave icy diamonds."
  },
  {
    id: "prod-8",
    category: "bridal",
    name: "Padmavati Royal Polki Haar with Ear Drops",
    metal: "22K Gold with Antique Jadau",
    weight: "72.40 grams",
    priceEstimate: "₹5,40,000",
    purity: "22K BIS Hallmarked",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    description: "Exquisite layered necklace with matching heavy earrings, crafted in traditional Jadau technique."
  }
];

/**
 * 5 TRUST PILLARS (Why Choose Us)
 */
export const whyChooseUsData = [
  {
    id: "hallmark",
    iconName: "ShieldCheck",
    title: "100% BIS Hallmarked",
    description: "Every gold creation is stamped with 6-digit HUID ensuring guaranteed purity, government certified."
  },
  {
    id: "transparency",
    iconName: "Sparkles",
    title: "Transparent Pricing",
    description: "Zero hidden charges. Clear itemized invoices showing exact gold weight, stone weight, and making charges."
  },
  {
    id: "custom",
    iconName: "Palette",
    title: "Custom Bespoke Designs",
    description: "Bring your dream concept or ancestral vision to reality with our in-house 3D CAD designers and master karigars."
  },
  {
    id: "exchange",
    iconName: "RefreshCw",
    title: "Lifetime Exchange",
    description: "Enjoy flexible lifetime exchange value across all gold and diamond jewellery at prevailing market rates."
  },
  {
    id: "buyback",
    iconName: "BadgeCheck",
    title: "Easy Buyback Assurance",
    description: "Instant transparent liquidity with our fair, hassle-free buyback policy on all authentic collections."
  }
];

/**
 * CUSTOMER TESTIMONIALS (ENGLISH)
 */
export const testimonialsData = [
  {
    id: 1,
    name: "Suman & Rahul Sharma",
    location: "Mahila College Road, Madhubani",
    rating: 5,
    verified: true,
    purchase: "Complete Bridal Jewellery Trousseau",
    comment: "We purchased our daughter's wedding jewellery from Swarnalay. The craftsmanship in the Polki choker set was breathtaking, and the billing transparency gave us total peace of mind."
  },
  {
    id: 2,
    name: "Dr. Ananya Mathur",
    location: "Station Road, Madhubani",
    rating: 5,
    verified: true,
    purchase: "1.20 ct Diamond Solitaire Ring",
    comment: "The royal ambiance of their showroom is matched only by their diamond brilliance. Certified with full IGI documentation. Highly recommended!"
  },
  {
    id: 3,
    name: "Vikramaditya Rathore",
    location: "Bata Chowk, Madhubani",
    rating: 5,
    verified: true,
    purchase: "Antique 22K Temple Kada",
    comment: "Our family has trusted Swarnalay for over two generations. Their honesty regarding gold purity and making charges is unmatched in the city."
  },
  {
    id: 4,
    name: "Pooja & Sameer Verma",
    location: "Ganga Sagar Chowk, Madhubani",
    rating: 5,
    verified: true,
    purchase: "Diamond & Sapphire Cocktail Ring",
    comment: "Customized our anniversary ring through their 3D CAD design service. The final piece exceeded our imagination! Truly world-class finish."
  }
];
