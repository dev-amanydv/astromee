'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { showToast, scrollToSection } = useApp();

  return (
    <footer className="bg-white border-t border-amberGold-200/80 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amberGold-500 to-mysticLight-purple p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-serif font-black text-amberGold-600 text-lg">
                  A
                </div>
              </div>
              <span className="font-serif font-black text-2xl gold-gradient-text">Astromee</span>
            </div>
            <p className="text-xs text-darkSlate-600 font-medium leading-relaxed max-w-sm">
              Astromee is India&apos;s premier trusted Vedic astrology and spiritual consultation platform, bringing accurate astrological calculations, AI biometric palm reading, and live verified consultations.
            </p>
            <div className="flex items-center gap-3 text-amberGold-600 text-sm">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('📱 Social', 'Following Astromee on Facebook');
                }}
                className="w-8 h-8 rounded-full bg-amberGold-50 border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('📱 Social', 'Following Astromee on Instagram');
                }}
                className="w-8 h-8 rounded-full bg-amberGold-50 border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('📱 Social', 'Following Astromee on X (Twitter)');
                }}
                className="w-8 h-8 rounded-full bg-amberGold-50 border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('📱 Social', 'Following Astromee on YouTube');
                }}
                className="w-8 h-8 rounded-full bg-amberGold-50 border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Astrological Services */}
          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Astrology Tools
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              <li>
                <button
                  onClick={() => scrollToSection('horoscopeSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Daily Horoscope
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kundliSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Free Kundli Birth Chart
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('flameSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  FLAME Match Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('aiScannerSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  AI Palm Scanner
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('panchangWidget')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Today&apos;s Panchang & Muhurat
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Consultations */}
          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Consultations
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              <li>
                <button
                  onClick={() => scrollToSection('astrologersSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Chat with Astrologer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('astrologersSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Talk to Astrologer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('astrologersSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Love & Marriage Astrologers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('astrologersSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Career Guidance Masters
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('astrologersSection')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Tarot Card Readers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Support & Security */}
          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Trust & Support
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              <li>
                <button
                  onClick={() => showToast('🔒 Privacy', 'All chats are 100% encrypted & confidential')}
                  className="hover:text-amberGold-700 text-left"
                >
                  100% Privacy Guarantee
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('📄 Terms', 'Standard Astromee Terms of Use applied')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('💳 Refund', '100% Satisfaction Refund Policy')}
                  className="hover:text-amberGold-700 text-left"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast('💬 Support', 'Contact us at support@astromee.com')}
                  className="hover:text-amberGold-700 text-left"
                >
                  24/7 Customer Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-amberGold-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-darkSlate-500 font-medium gap-4">
          <div>
            © 2026 Astromee.com. All rights reserved. Empowering cosmic discovery.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>⚡ UPI & Card Secured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
