import React from 'react';

export default function StoreHero() {
  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amberGold-600 via-amberGold-500 to-mysticLight-purple p-4 sm:p-10 text-white shadow-xl">
      <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute left-10 top-0 w-48 h-48 bg-amber-300/20 rounded-full blur-xl pointer-events-none"></div>

      <div className="relative z-10 max-w-2xl space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-black uppercase tracking-wider border border-white/30">
          <span>✨ Certified Vedic Remedies & Mall</span>
        </div>
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-sm">
          Cosmic Remedies & Sacred Treasures
        </h1>
        <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
          Explore authentic energized gemstones, celestial fragrances, sacred talismans & healing crystals, blessed by Vedic rituals to align your cosmic vibrations.
        </p>
      </div>
    </section>
  );
}
