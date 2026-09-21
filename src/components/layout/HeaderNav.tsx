'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { ZODIAC_SIGNS, ZodiacSign } from '@/data/horoscope';

interface ConsultationMode {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

const CONSULTATION_MODES: ConsultationMode[] = [
  {
    icon: 'fa-solid fa-comments',
    iconBg: 'bg-amberGold-100',
    iconColor: 'text-amberGold-700',
    title: 'Chat with Astrologers',
    subtitle: 'Instant replies • ₹1/min offer',
  },
  {
    icon: 'fa-solid fa-phone',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    title: 'Talk on Audio Call',
    subtitle: 'Direct live voice consultation',
  },
  {
    icon: 'fa-solid fa-heart',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-700',
    title: 'Love & Marriage Masters',
    subtitle: 'Kundli Milan & relationship advice',
  },
];

const SCANNER_MODES = [
  {
    mode: 'palm' as const,
    icon: '✋',
    hoverBg: 'hover:bg-purple-50',
    title: 'AI Palm Reader',
    subtitle: 'Scan Life, Heart & Fate lines',
  },
  {
    mode: 'face' as const,
    icon: '👤',
    hoverBg: 'hover:bg-blue-50',
    title: 'AI Face Destiny Scan',
    subtitle: 'Physiognomy & destiny nodes',
  },
];

export default function HeaderNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollToSection, setScanMode, setSelectedSign } = useApp();

  const navigateOrScroll = (sectionId: string) => {
    if (pathname === '/') {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleSelectSign = (sign: ZodiacSign) => {
    setSelectedSign(sign);
    navigateOrScroll('horoscopeSection');
  };

  const handleSelectScanner = (mode: 'palm' | 'face') => {
    setScanMode(mode);
    navigateOrScroll('aiScannerSection');
  };

  return (
    <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold text-darkSlate-700">
      <div className="nav-item">
        <button
          onClick={() => navigateOrScroll('heroSection')}
          className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
        >
          <i className="fa-solid fa-house text-amberGold-600 text-xs"></i>
          <span>Home</span>
        </button>
      </div>

      <div className="nav-item">
        <Link
          href="/store"
          className={`nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5 ${
            pathname === '/store' || pathname.startsWith('/products')
              ? 'text-amberGold-700 font-extrabold bg-amberGold-50/80'
              : ''
          }`}
        >
          <i className="fa-solid fa-gem text-amberGold-600 text-xs"></i>
          <span>Astro Store</span>
          <span className="bg-gradient-to-r from-amberGold-500 to-amberGold-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
            Shop
          </span>
        </Link>
      </div>

      <div className="nav-item">
        <button
          onClick={() => navigateOrScroll('astrologersSection')}
          className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
        >
          <i className="fa-solid fa-headset text-amberGold-600 text-xs"></i>
          <span>Astrologers</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <i className="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
        </button>
        <div className="nav-dropdown absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400">
            Consultation Modes
          </div>
          {CONSULTATION_MODES.map((mode) => (
            <button
              key={mode.title}
              onClick={() => navigateOrScroll('astrologersSection')}
              className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-amberGold-50 transition-colors group text-left"
            >
              <div
                className={`w-8 h-8 rounded-lg ${mode.iconBg} ${mode.iconColor} flex items-center justify-center text-sm group-hover:scale-110 transition-transform`}
              >
                <i className={mode.icon}></i>
              </div>
              <div>
                <div className="font-bold text-darkSlate-900 text-xs">{mode.title}</div>
                <div className="text-[10px] text-darkSlate-500 font-medium">{mode.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="nav-item">
        <button
          onClick={() => navigateOrScroll('aiScannerSection')}
          className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
        >
          <i className="fa-solid fa-microchip text-mysticLight-purple text-xs"></i>
          <span>Palm reader </span>
        </button>
        <div className="nav-dropdown absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400">
            AI Biometric Scanners
          </div>
          {SCANNER_MODES.map((item) => (
            <button
              key={item.mode}
              onClick={() => handleSelectScanner(item.mode)}
              className={`w-full text-left flex items-center gap-3 p-2.5 rounded-xl ${item.hoverBg} transition-colors group`}
            >
              <span className="text-lg">{item.icon}</span>
              <div>
                <div className="font-bold text-darkSlate-900 text-xs">{item.title}</div>
                <div className="text-[10px] text-darkSlate-500 font-medium">{item.subtitle}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="nav-item">
        <button
          onClick={() => navigateOrScroll('horoscopeSection')}
          className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
        >
          <i className="fa-solid fa-sun text-amberGold-500 text-xs"></i>
          <span>Horoscope</span>
          <i className="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
        </button>
        <div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50">
          <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400 mb-1">
            Choose Sun Sign
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
            {ZODIAC_SIGNS.map((sign) => (
              <button
                key={sign.name}
                onClick={() => handleSelectSign(sign)}
                className="p-1.5 rounded-lg hover:bg-amberGold-50 text-darkSlate-800 font-bold"
              >
                {sign.symbol} {sign.name.length > 6 ? `${sign.name.slice(0, 5)}.` : sign.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
