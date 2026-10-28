import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesGrid from './components/CategoriesGrid';
import FeaturedCollection from './components/FeaturedCollection';
import WhyChooseUs from './components/WhyChooseUs';
import GoldSilverRates from './components/GoldSilverRates';
import BridalSpecial from './components/BridalSpecial';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import VisitStore from './components/VisitStore';
import ContactForm from './components/ContactForm';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { storeConfig } from './config/siteData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [is404Preview, setIs404Preview] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  if (is404Preview) {
    return <NotFound onBackHome={() => setIs404Preview(false)} />;
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-ivory-100 flex flex-col items-center justify-center z-50">
        <div className="relative mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-ivory-300 border-t-emerald-900 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-hindi text-xl font-bold text-gold-deep">
              स्व
            </span>
          </div>
        </div>
        <h2 className="font-heading text-2xl font-bold tracking-[0.2em] uppercase text-emerald-950 animate-pulse">
          {storeConfig.brandName}
        </h2>
        <p className="text-[10px] text-charcoal-muted tracking-[0.3em] uppercase mt-1">
          FINE JEWELLERY • MADHUBANI
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal flex flex-col selection:bg-emerald-900 selection:text-ivory-50">
      
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Categories Grid (Signature Arched Frames) */}
        <CategoriesGrid onSelectCategory={handleCategorySelect} />

        {/* 4. Featured Collection (Best Sellers) */}
        <FeaturedCollection 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleCategorySelect} 
        />

        {/* 5. Craftsmanship & Why Choose Us (Signature Emerald Banner) */}
        <WhyChooseUs />

        {/* 6. Today's Gold & Silver Rate */}
        <GoldSilverRates />

        {/* 7. Bridal Special Banner */}
        <BridalSpecial />

        {/* 8. About Us */}
        <AboutUs />

        {/* 9. Customer Testimonials Carousel */}
        <Testimonials />

        {/* 10. Visit Store (Map + Timings + Phone) */}
        <VisitStore />

        {/* 11. Contact Form */}
        <ContactForm />
      </main>

      {/* Floating WhatsApp Button (Desktop & Tablet) */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bottom Bar (Mobile Phones Only) */}
      <MobileBottomBar />

      {/* 12. Footer */}
      <Footer />

      {/* Optional discrete 404 test pill at very bottom for review */}
      <div className="bg-ivory-200 py-2 pb-20 sm:pb-2 border-t border-ivory-300 text-center text-[11px] text-charcoal-muted">
        <span>Preview mode: </span>
        <button
          onClick={() => setIs404Preview(true)}
          className="text-emerald-800 font-medium hover:underline cursor-pointer ml-1"
        >
          View 404 Page Template
        </button>
      </div>

    </div>
  );
}
