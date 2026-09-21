'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ZODIAC_SIGNS } from '@/data/horoscope';

export default function Header() {
  const {
    coins,
    setIsWalletModalOpen,
    setIsWheelModalOpen,
    isMobileNavOpen,
    setIsMobileNavOpen,
    setScanMode,
    setSelectedSign,
    showToast,
    scrollToSection,
  } = useApp();

  return (
    <header className="bg-white/95 backdrop-blur-2xl border-b border-amberGold-200/80 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 lg:gap-6">
        {/* Brand Identity */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-amberGold-500 via-mysticLight-purple to-mysticLight-pink p-0.5 shadow-md shadow-amberGold-500/20 group-hover:scale-105 transition-all">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amberGold-50 to-transparent opacity-80"></div>
              <span className="font-serif font-black text-amberGold-600 text-2xl relative z-10">
                A
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-serif font-black text-2xl tracking-wide gold-gradient-text leading-none">
                Astromee
              </h1>
              <span className="bg-gradient-to-r from-amberGold-500 to-amberGold-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
                PRO
              </span>
            </div>
            <p className="text-[10px] text-darkSlate-500 font-bold tracking-widest uppercase mt-0.5 flex items-center gap-1">
              <span>Vedic Astrology</span>
              <span className="text-amberGold-500">✦</span>
              <span>Cosmic AI</span>
            </p>
          </div>
        </div>

        {/* Center Desktop Mega Menu */}
        <nav className="hidden xl:flex items-center gap-1 text-[13px] font-bold text-darkSlate-700">
          {/* Nav Item 1: Home */}
          <div className="nav-item">
            <button
              onClick={() => scrollToSection('heroSection')}
              className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-house text-amberGold-600 text-xs"></i>
              <span>Home</span>
            </button>
          </div>

          {/* Nav Item 2: Astrologers (with Dropdown) */}
          <div className="nav-item">
            <button
              onClick={() => scrollToSection('astrologersSection')}
              className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-headset text-amberGold-600 text-xs"></i>
              <span>Astrologers</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <i className="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
            </button>
            {/* Mega Dropdown */}
            <div className="nav-dropdown absolute left-0 top-full mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400">
                Consultation Modes
              </div>
              <a
                href="#astrologersSection"
                onClick={() => scrollToSection('astrologersSection')}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amberGold-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amberGold-100 text-amberGold-700 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div>
                  <div className="font-bold text-darkSlate-900 text-xs">Chat with Astrologers</div>
                  <div className="text-[10px] text-darkSlate-500 font-medium">
                    Instant replies • ₹1/min offer
                  </div>
                </div>
              </a>
              <a
                href="#astrologersSection"
                onClick={() => scrollToSection('astrologersSection')}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amberGold-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="font-bold text-darkSlate-900 text-xs">Talk on Audio Call</div>
                  <div className="text-[10px] text-darkSlate-500 font-medium">
                    Direct live voice consultation
                  </div>
                </div>
              </a>
              <a
                href="#astrologersSection"
                onClick={() => scrollToSection('astrologersSection')}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-amberGold-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div>
                  <div className="font-bold text-darkSlate-900 text-xs">Love & Marriage Masters</div>
                  <div className="text-[10px] text-darkSlate-500 font-medium">
                    Kundli Milan & relationship advice
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Nav Item 3: AI Scanner (with Dropdown) */}
          <div className="nav-item">
            <button
              onClick={() => scrollToSection('aiScannerSection')}
              className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-microchip text-mysticLight-purple text-xs"></i>
              <span>Palm reader </span>
            </button>
            {/* Dropdown */}
            <div className="nav-dropdown absolute left-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400">
                AI Biometric Scanners
              </div>
              <button
                onClick={() => {
                  setScanMode('palm');
                  scrollToSection('aiScannerSection');
                }}
                className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
              >
                <span className="text-lg">✋</span>
                <div>
                  <div className="font-bold text-darkSlate-900 text-xs">AI Palm Reader</div>
                  <div className="text-[10px] text-darkSlate-500 font-medium">
                    Scan Life, Heart & Fate lines
                  </div>
                </div>
              </button>
              <button
                onClick={() => {
                  setScanMode('face');
                  scrollToSection('aiScannerSection');
                }}
                className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <span className="text-lg">👤</span>
                <div>
                  <div className="font-bold text-darkSlate-900 text-xs">AI Face Destiny Scan</div>
                  <div className="text-[10px] text-darkSlate-500 font-medium">
                    Physiognomy & destiny nodes
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Nav Item 4: Horoscope (with Dropdown) */}
          <div className="nav-item">
            <button
              onClick={() => scrollToSection('horoscopeSection')}
              className="nav-link-btn px-3 py-2 rounded-xl hover:text-amberGold-700 hover:bg-amberGold-50/60 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-sun text-amberGold-500 text-xs"></i>
              <span>Horoscope</span>
              <i className="fa-solid fa-chevron-down text-[9px] opacity-60"></i>
            </button>
            {/* 12 Signs Quick Jump Dropdown */}
            <div className="nav-dropdown absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50">
              <div className="px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider text-darkSlate-400 mb-1">
                Choose Sun Sign
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-center text-xs">
                {ZODIAC_SIGNS.map((sign) => (
                  <button
                    key={sign.name}
                    onClick={() => {
                      setSelectedSign(sign);
                      scrollToSection('horoscopeSection');
                    }}
                    className="p-1.5 rounded-lg hover:bg-amberGold-50 text-darkSlate-800 font-bold"
                  >
                    {sign.symbol} {sign.name.length > 6 ? sign.name.slice(0, 5) + '.' : sign.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Right Action Suite */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Coin Wallet Capsule Button */}
          <button
            onClick={() => setIsWalletModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-amberGold-50 via-amberGold-100 to-amberGold-50 hover:from-amberGold-100 hover:to-amberGold-200 border-2 border-amberGold-400 rounded-2xl px-3.5 py-1.5 hover:shadow-md active:scale-95 transition-all group shadow-2xs"
          >
            <span className="text-base group-hover:rotate-12 transition-transform">🪙</span>
            <div className="text-left leading-tight">
              <div className="text-[8px] text-amberGold-800 font-black uppercase tracking-wider">
                Balance
              </div>
              <div className="text-xs font-black text-darkSlate-900 flex items-center gap-1">
                <span id="userCoins">{coins}</span>{' '}
                <span className="text-[10px] text-darkSlate-500 font-bold">Coins</span>
              </div>
            </div>
            <span className="bg-amberGold-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-lg shadow-xs group-hover:bg-amberGold-600 transition-colors">
              + Topup
            </span>
          </button>

          {/* Daily Lucky Spin Chakra Button */}
          <button
            onClick={() => setIsWheelModalOpen(true)}
            className="relative p-2.5 bg-white hover:bg-amberGold-50 active:scale-90 rounded-2xl border border-amberGold-200 text-amberGold-600 hover:text-amberGold-700 shadow-xs transition-all flex items-center gap-1.5 text-xs font-black"
            title="Daily Lucky Spin"
          >
            <i className="fa-solid fa-dharmachakra text-base animate-spin-slow text-amberGold-500"></i>
            <span className="hidden sm:inline">Spin</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mysticLight-pink opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-mysticLight-pink border-2 border-white"></span>
            </span>
          </button>

          {/* VIP User Profile Dropdown Menu */}
          <div className="relative group">
            <button className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amberGold-400 to-mysticLight-purple p-0.5 shadow-sm hover:scale-105 active:scale-95 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-darkSlate-700">
                <i className="fa-solid fa-user text-xs text-amberGold-600"></i>
              </div>
            </button>
            {/* Profile Menu */}
            <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-amberGold-200/80 p-3 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all space-y-2">
              <div className="border-b border-amberGold-100 pb-2 px-1">
                <div className="font-black text-darkSlate-900 text-xs">Astromee Seeker</div>
                <div className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active VIP Account
                </div>
              </div>
              <div className="space-y-1 text-xs font-semibold text-darkSlate-700">
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-amberGold-50 flex items-center justify-between"
                >
                  <span>🪙 Coin Recharge</span>
                  <span className="text-[10px] text-amberGold-700 font-bold">{coins} Coins</span>
                </button>
                <button
                  onClick={() =>
                    showToast('📜 My Reports', 'You have 2 saved Kundli charts and 1 Palm report')
                  }
                  className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-amberGold-50 flex items-center gap-2"
                >
                  <i className="fa-solid fa-scroll text-amberGold-600 text-xs"></i>
                  <span>My Saved Reports</span>
                </button>
                <button
                  onClick={() =>
                    showToast('💬 Consultations', 'Chat history with Acharya Ananya saved')
                  }
                  className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-amberGold-50 flex items-center gap-2"
                >
                  <i className="fa-solid fa-comments text-amberGold-600 text-xs"></i>
                  <span>Chat History</span>
                </button>
                <button
                  onClick={() =>
                    showToast('⚙️ Settings', 'Notification & privacy preferences updated')
                  }
                  className="w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-amberGold-50 flex items-center gap-2 text-darkSlate-500"
                >
                  <i className="fa-solid fa-gear text-xs"></i>
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="xl:hidden p-2.5 rounded-2xl bg-sunshine-100 hover:bg-sunshine-200 border border-amberGold-200 text-darkSlate-700 text-base"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Hidden on XL) */}
      <div
        id="mobileDrawerNav"
        className={`${
          isMobileNavOpen ? 'block' : 'hidden'
        } xl:hidden border-t border-amberGold-200 bg-white/98 px-4 py-4 space-y-3`}
      >
        <div className="grid grid-cols-2 gap-2 text-xs font-bold">
          <button
            onClick={() => {
              scrollToSection('heroSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            🏠 Home
          </button>
          <button
            onClick={() => {
              scrollToSection('astrologersSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            👥 Astrologers (Live)
          </button>
          <button
            onClick={() => {
              scrollToSection('aiScannerSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            ✋ AI Palm Scanner
          </button>
          <button
            onClick={() => {
              scrollToSection('kundliSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            📜 Free Kundli Chart
          </button>
          <button
            onClick={() => {
              scrollToSection('flameSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            ❤️ FLAME Match
          </button>
          <button
            onClick={() => {
              scrollToSection('horoscopeSection');
              setIsMobileNavOpen(false);
            }}
            className="p-2.5 rounded-xl bg-sunshine-50 text-left hover:bg-amberGold-50"
          >
            ♈ Daily Horoscope
          </button>
        </div>
      </div>
    </header>
  );
}
