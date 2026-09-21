'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

interface NavItem {
  label: string;
  sectionId: string;
}

const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: '🏠 Home', sectionId: 'heroSection' },
  { label: '👥 Astrologers (Live)', sectionId: 'astrologersSection' },
  { label: '✋ AI Palm Scanner', sectionId: 'aiScannerSection' },
  { label: '📜 Free Kundli Chart', sectionId: 'kundliSection' },
  { label: '❤️ FLAME Match', sectionId: 'flameSection' },
  { label: '♈ Daily Horoscope', sectionId: 'horoscopeSection' },
];

export default function MobileNavDrawer() {
  const { isMobileNavOpen, setIsMobileNavOpen, scrollToSection } = useApp();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileNavOpen(false);
  };

  return (
    <div
      id="mobileDrawerNav"
      className={`${
        isMobileNavOpen ? 'block' : 'hidden'
      } xl:hidden border-t border-amberGold-200 bg-white/98 px-4 py-4 space-y-3`}
    >
      <div className="grid grid-cols-2 gap-2 text-xs font-bold">
        {MOBILE_NAV_ITEMS.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => handleNavClick(item.sectionId)}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
