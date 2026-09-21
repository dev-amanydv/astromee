'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

const SOCIAL_LINKS = [
  { platform: 'Facebook', icon: 'fa-brands fa-facebook-f' },
  { platform: 'Instagram', icon: 'fa-brands fa-instagram' },
  { platform: 'X (Twitter)', icon: 'fa-brands fa-x-twitter' },
  { platform: 'YouTube', icon: 'fa-brands fa-youtube' },
];

const ASTROLOGY_TOOL_LINKS = [
  { label: 'Daily Horoscope', sectionId: 'horoscopeSection' },
  { label: 'Free Kundli Birth Chart', sectionId: 'kundliSection' },
  { label: 'FLAME Match Calculator', sectionId: 'flameSection' },
  { label: 'AI Palm Scanner', sectionId: 'aiScannerSection' },
  { label: "Today's Panchang & Muhurat", sectionId: 'panchangWidget' },
];

const CONSULTATION_LINKS = [
  { label: 'Chat with Astrologer', sectionId: 'astrologersSection' },
  { label: 'Talk to Astrologer', sectionId: 'astrologersSection' },
  { label: 'Love & Marriage Astrologers', sectionId: 'astrologersSection' },
  { label: 'Career Guidance Masters', sectionId: 'astrologersSection' },
  { label: 'Tarot Card Readers', sectionId: 'astrologersSection' },
];

const TRUST_LINKS = [
  {
    label: '100% Privacy Guarantee',
    toastTitle: '🔒 Privacy',
    toastMsg: 'All chats are 100% encrypted & confidential',
  },
  {
    label: 'Terms & Conditions',
    toastTitle: '📄 Terms',
    toastMsg: 'Standard Astromee Terms of Use applied',
  },
  {
    label: 'Refund Policy',
    toastTitle: '💳 Refund',
    toastMsg: '100% Satisfaction Refund Policy',
  },
  {
    label: '24/7 Customer Support',
    toastTitle: '💬 Support',
    toastMsg: 'Contact us at support@astromee.com',
  },
];

export default function Footer() {
  const { showToast, scrollToSection } = useApp();

  return (
    <footer className="bg-white border-t border-amberGold-200/80 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.platform}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast('📱 Social', `Following Astromee on ${item.platform}`);
                  }}
                  className="w-8 h-8 rounded-full bg-amberGold-50 border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white transition-colors"
                  aria-label={item.platform}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Astrology Tools
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              {ASTROLOGY_TOOL_LINKS.map((tool) => (
                <li key={tool.label}>
                  <button
                    onClick={() => scrollToSection(tool.sectionId)}
                    className="hover:text-amberGold-700 text-left"
                  >
                    {tool.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Consultations
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              {CONSULTATION_LINKS.map((link, idx) => (
                <li key={`${link.label}-${idx}`}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="hover:text-amberGold-700 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-xs">
            <h5 className="font-bold text-darkSlate-900 uppercase tracking-wider text-[11px]">
              Trust & Support
            </h5>
            <ul className="space-y-2 text-darkSlate-600 font-medium">
              {TRUST_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => showToast(link.toastTitle, link.toastMsg)}
                    className="hover:text-amberGold-700 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
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
