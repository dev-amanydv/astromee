'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { useSectionNavigation } from '@/hooks/useSectionNavigation';

interface MobileNavItem {
  label: string;
  sectionId?: string;
  href?: string;
}

const MOBILE_NAV_ITEMS: MobileNavItem[] = [
  { label: '🏠 Home', sectionId: 'heroSection' },
  { label: '🛍️ Astro Store', href: '/store' },
  { label: '👥 Astrologers (Live)', sectionId: 'astrologersSection' },
  { label: '✋ AI Palm Scanner', sectionId: 'aiScannerSection' },
  { label: '📜 Free Kundli Chart', sectionId: 'kundliSection' },
  { label: '❤️ FLAME Match', sectionId: 'flameSection' },
  { label: '♈ Daily Horoscope', sectionId: 'horoscopeSection' },
];

export default function MobileNavDrawer() {
  const { isMobileNavOpen, setIsMobileNavOpen } = useApp();
  const { navigateTo } = useSectionNavigation();

  const handleNavClick = (item: MobileNavItem) => {
    setIsMobileNavOpen(false);
    navigateTo(item.sectionId, item.href);
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
            key={item.href || item.sectionId}
            onClick={() => handleNavClick(item)}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50 flex items-center justify-between"
          >
            <span>{item.label}</span>
            {item.href === '/store' && (
              <span className="text-[9px] bg-amberGold-500 text-white px-1.5 py-0.5 rounded-full font-black uppercase">
                New
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
