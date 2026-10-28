import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Calendar, Sparkles, User, Phone } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'bridal',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Swarnalay Jewellers, my name is ${formData.name || 'Client'}. I am contacting you regarding ${formData.category} jewellery and booking a showroom visit.`
    );
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-[1px] w-5 bg-gold-champagne" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-emerald-800">
              CONNECT WITH US
            </span>
            <span className="h-[1px] w-5 bg-gold-champagne" />
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-normal text-emerald-950 tracking-tight mb-3">
            Book a Consultation or Enquire
          </h2>
          <p className="text-charcoal-muted text-xs sm:text-base leading-relaxed font-light">
            Looking for a custom design, bridal trousseau, or current rates? Send us a message or chat directly on WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl p-6 sm:p-12 bg-white border border-ivory-300 shadow-warm">
          {submitted ? (
            <div className="text-center py-8 sm:py-12 space-y-4 sm:space-y-5 animate-fadeIn">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-900 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-emerald-950">
                Inquiry Received!
              </h3>
              <p className="text-charcoal-muted text-xs sm:text-base max-w-md mx-auto font-light leading-relaxed">
                Thank you for reaching out to Swarnalay Jewellers. Our master consultant will contact you via WhatsApp or phone within 1 business hour.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-gold-light" />
                  <span>Confirm on WhatsApp Now</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', category: 'bridal', date: '', message: '' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-ivory-300 text-charcoal-muted hover:text-emerald-900 text-xs sm:text-sm active:scale-95 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal-light absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-emerald-950 placeholder:text-charcoal-light text-sm focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne transition-all"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-charcoal-light absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-emerald-950 placeholder:text-charcoal-light text-sm focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne transition-all"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Category Interest */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                    I Am Interested In
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-emerald-950 text-sm focus:outline-none focus:border-gold-champagne transition-all cursor-pointer"
                  >
                    <option value="bridal">Bridal Trousseau & Sets</option>
                    <option value="gold">22K / 18K Gold Jewellery</option>
                    <option value="diamond">Certified Diamonds & Solitaires</option>
                    <option value="custom">Bespoke Custom CAD Design</option>
                    <option value="silver">925 Pure Silver Ornaments</option>
                    <option value="rates">Bullion Rates & Investment</option>
                  </select>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                    Preferred Visit Date (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-charcoal-light absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-ivory-50 border border-ivory-300 text-emerald-950 text-sm focus:outline-none focus:border-gold-champagne transition-all cursor-pointer"
                    />
                  </div>
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] sm:text-xs font-semibold text-emerald-950 uppercase tracking-wider mb-1.5">
                  Your Message / Custom Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the jewellery you are looking for..."
                  className="w-full p-4 rounded-xl bg-ivory-50 border border-ivory-300 text-emerald-950 placeholder:text-charcoal-light text-sm focus:outline-none focus:border-gold-champagne transition-all resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-gold-light" />
                  <span>{isSubmitting ? 'Sending Details...' : 'Send Inquiry & Book Visit'}</span>
                </button>

                <p className="text-[11px] text-charcoal-muted flex items-center gap-1.5 font-light">
                  <span className="w-2 h-2 rounded-full bg-emerald-700" />
                  <span>Private & Confidential • Guaranteed Privacy</span>
                </p>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
