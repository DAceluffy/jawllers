# स्वर्णालय (Swarnalay) — Luxury Jewellery Website

A production-grade, fully responsive website for **स्वर्णालय (Swarnalay) Jewellers**, designed with a **Cold & Blue Luxury Theme** (Deep Navy, Royal Blue, Ice Blue, Frost White, Silver, Icy Cyan, with champagne gold price highlights).

---

## 💎 Features & Sections

1. **Top Micro-Header**: BIS Hallmark announcement, city tag, direct phone link, and Hindi/English language toggle.
2. **Sticky Glassmorphism Navbar**: Brand mark "स्वर्णालय" in *Noto Serif Devanagari*, navigation links with smooth scroll, language switch, and WhatsApp CTA button.
3. **Hero Section**: Full-screen gradient backdrop, headline *"Timeless Jewellery, Crafted with Trust"* (*"शाश्वत आभूषण, अटूट विश्वास"*), dual CTAs (*View Collection* / *Visit Store*), trust counters, and a luxury jewellery showcase card.
4. **Categories Grid**: 8 categories (Gold, Diamond, Silver, Bridal, Rings, Necklaces, Earrings, Bangles) with frosted glass cards, hover zoom, and count badges.
5. **Featured Collection**: 8 handcrafted jewellery cards with filter tabs (*All*, *Bridal*, *Gold*, *Diamond*, *Bangles*, *Earrings*, *Rings*, *Silver*), net weight in grams, champagne gold price highlights, Quick View modal, and pre-formatted "Enquire on WhatsApp" buttons.
6. **Why Choose Us**: 5 pillars of trust:
   - 100% BIS Hallmarked (with 6-digit HUID guarantee)
   - Transparent Pricing (clear itemized weights and making charges)
   - Custom Bespoke Designs (3D CAD & master karigars)
   - Lifetime Exchange Guarantee
   - Easy Buyback Assurance
7. **Today's Gold & Silver Rate**: Live bullion board displaying rates for 24K Gold (10g), 22K Gold (10g), 18K Gold (10g), and Fine Silver (1kg) with price trend indicators and last updated timestamp.
8. **Bridal Special Banner**: Editorial showcase for ancestral Polki, Jadau, and Kundan bridal trousseaus with VIP suite consultation booking.
9. **About Us Section**: 35+ years legacy story (established 1989 in Jaipur), craftsmanship highlights, and verified milestone counters.
10. **Customer Testimonials**: Interactive auto-playing carousel with star ratings, reviewer locations, purchased pieces, and verified buyer badges.
11. **Visit Store**: Real-time Google Maps embed, physical address, business hours/timings, telephone, and valet parking information.
12. **Contact & Appointment Form**: Interactive booking form for showroom visits and bridal consultations with live feedback and direct WhatsApp confirmation.
13. **Floating WhatsApp Button**: Animated glowing pulse badge with quick chat popover.
14. **Footer**: Brand story, certification notice, quick links, category links, store coordinates, social media links, and copyright.
15. **Luxury 404 Page**: Themed fallback template for unmatched routes.

---

## 🎨 Theme Palette

- **Deep Navy**: `#0B1F3A` (Primary background, deep royal tone)
- **Royal Blue**: `#1E4FA3` (Secondary accents, gradients, active states)
- **Ice Blue**: `#CFE8FF` (Soft glow, subtle backgrounds, highlights)
- **Frost White**: `#F5FAFF` (Primary light text, clean surfaces)
- **Silver**: `#C0C8D4` (Borders, metadata, secondary text)
- **Icy Cyan Accent**: `#7FD6FF` (Hover sparks, interactive highlights, glows)
- **Champagne Gold Accent**: `#E8C872` / `#D4AF37` (Reserved for price highlights & hallmark seals)

### Typography
- Headings: `Playfair Display` & `Cormorant Garamond`
- Body & Interface: `Poppins`
- Brand Logo & Devanagari: `Noto Serif Devanagari`

---

## ⚙️ Easy Configuration (`src/config/siteData.js`)

All store details, phone numbers, addresses, gold rates, and products are stored in a single configuration file: `src/config/siteData.js`.

### Updating Store Contact Info:
```javascript
export const storeConfig = {
  brandName: "Swarnalay",
  brandNameHindi: "स्वर्णालय",
  phone: "+91 98765 43210",       // [PHONE]
  whatsappNumber: "919876543210",  // [WHATSAPP]
  address: "Shop No. 12-16, Heritage Jewellers Promenade...", // [ADDRESS]
  city: "Jaipur, Rajasthan",       // [CITY]
  // ...
};
```

### Updating Daily Bullion Rates:
```javascript
export const liveRates = {
  lastUpdated: "Today, 10:00 AM IST",
  currency: "₹",
  items: [
    { metal: "24K Gold", rate: "78,450", change: "+₹220", isPositive: true },
    { metal: "22K Gold", rate: "71,950", change: "+₹180", isPositive: true },
    { metal: "18K Gold", rate: "58,850", change: "-₹90",  isPositive: false },
    { metal: "Fine Silver", rate: "94,200", change: "+₹450", isPositive: true }
  ]
};
```

---

## 🚀 Running the Project

```bash
# Navigate to the project directory
cd swarnalay

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
