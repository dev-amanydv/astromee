'use client';

import React from 'react';
import HeaderNav from './HeaderNav';
import HeaderActions from './HeaderActions';
import MobileNavDrawer from './MobileNavDrawer';

function BrandLogo() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="flex items-center gap-3 cursor-pointer select-none group"
      onClick={handleScrollToTop}
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
  );
}

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-2xl border-b border-amberGold-200/80 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3 lg:gap-6">
        <BrandLogo />
        <HeaderNav />
        <HeaderActions />
      </div>
      <MobileNavDrawer />
    </header>
  );
}
