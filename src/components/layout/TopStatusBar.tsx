'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function TopStatusBar() {
  const { currentLanguage, setCurrentLanguage, showToast, scrollToSection } = useApp();

  const handleSetLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    showToast('🌐 Language Changed', `Language updated to ${lang}`);
  };

  return (
    <div className="bg-gradient-to-r from-amberGold-900 via-amberGold-700 to-darkSlate-900 text-white text-[11px] font-medium py-1.5 px-4 sm:px-8 border-b border-amberGold-600/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Live Astrologers Counter */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="font-bold text-amberGold-200">520+ Vedic Astrologers Online</span>
          <span className="hidden md:inline text-amberGold-400/60">•</span>
          <span className="hidden md:inline text-white/90">
            First Consultation at just <strong>₹1/Min</strong>
          </span>
        </div>

        {/* Center Muhurat Announcement */}
        <div
          className="hidden lg:flex items-center gap-2 text-amberGold-100 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection('panchangWidget')}
        >
          <i className="fa-solid fa-om text-amberGold-400 text-xs"></i>
          <span>
            Today&apos;s Abhijit Muhurat: <strong>11:45 AM - 12:35 PM</strong> (Highly Auspicious)
          </span>
        </div>

        {/* Right Quick Language & Help Links */}
        <div className="flex items-center gap-3 text-[11px]">
          <button
            onClick={() => showToast('💬 24/7 Support', 'Connected with Astromee VIP Helpdesk')}
            className="hover:text-amberGold-300 transition-colors flex items-center gap-1 font-semibold"
          >
            <i className="fa-solid fa-headset text-amberGold-400"></i>
            <span>Support</span>
          </button>
          <span className="text-white/30">|</span>
          <div className="relative group">
            <button className="hover:text-amberGold-300 transition-colors flex items-center gap-1 font-bold">
              <i className="fa-solid fa-globe text-amberGold-400"></i>
              <span id="currentLang">{currentLanguage}</span>
              <i className="fa-solid fa-chevron-down text-[8px] opacity-70"></i>
            </button>
            <div className="absolute right-0 top-full mt-1.5 w-28 bg-white rounded-xl shadow-xl border border-amberGold-200 py-1.5 text-darkSlate-800 text-xs font-semibold opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <button
                onClick={() => handleSetLanguage('English')}
                className="w-full text-left px-3 py-1 hover:bg-amberGold-50 text-amberGold-800"
              >
                English
              </button>
              <button
                onClick={() => handleSetLanguage('हिन्दी')}
                className="w-full text-left px-3 py-1 hover:bg-amberGold-50"
              >
                हिन्दी
              </button>
              <button
                onClick={() => handleSetLanguage('தமிழ்')}
                className="w-full text-left px-3 py-1 hover:bg-amberGold-50"
              >
                தமிழ்
              </button>
              <button
                onClick={() => handleSetLanguage('मराठी')}
                className="w-full text-left px-3 py-1 hover:bg-amberGold-50"
              >
                मराठी
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
