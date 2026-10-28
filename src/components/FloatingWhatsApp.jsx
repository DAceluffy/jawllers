import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { storeConfig } from '../config/siteData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultMsg = 'Hello Swarnalay Jewellers, I would like to inquire about your fine jewellery collections and today\'s rates.';

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = encodeURIComponent(userMsg || defaultMsg);
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${finalMsg}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl overflow-hidden bg-white border border-ivory-300 shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="bg-emerald-950 p-4 flex items-center justify-between text-ivory-50 border-b border-emerald-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 border border-gold-champagne/40 flex items-center justify-center font-hindi font-bold text-lg text-gold-light">
                स्व
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm">Swarnalay Fine Jewellery</h4>
                <p className="text-[11px] text-gold-light flex items-center gap-1 font-light">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Instant Response</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-emerald-900 text-ivory-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-ivory-50">
            <div className="bg-white rounded-xl p-3 border border-ivory-300 text-xs text-charcoal-muted leading-relaxed mb-4 shadow-sm">
              <p className="font-medium text-emerald-950 mb-1">
                Welcome to Swarnalay Jewellers!
              </p>
              <p>
                How can our master consultants assist you today with Gold, Diamond, or Bridal collections?
              </p>
            </div>

            <form onSubmit={handleSend} className="space-y-3">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="Type your question or requirement..."
                className="w-full px-3 py-2 rounded-lg bg-white border border-ivory-300 text-charcoal text-xs placeholder:text-charcoal-light focus:outline-none focus:border-gold-champagne"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-emerald-900 hover:bg-emerald-850 text-ivory-50 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-gold-light" />
                <span>Start WhatsApp Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-900 hover:bg-emerald-850 text-gold-light shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 border border-gold-champagne/40 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-800 opacity-30 animate-ping pointer-events-none group-hover:opacity-0" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-gold-champagne/20 relative z-10" />
        <span className="absolute top-1 right-1 w-3 h-3 bg-gold-champagne rounded-full border-2 border-emerald-900" />
      </button>

    </div>
  );
}
