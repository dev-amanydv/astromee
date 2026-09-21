'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ASTROLOGERS, Astrologer } from '@/data/astrologers';

type FilterCategory = 'all' | 'love' | 'career' | 'vedic' | 'tarot';

export default function AstrologersSection() {
  const { startChatConsultation } = useApp();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const filteredAstrologers =
    activeCategory === 'all'
      ? ASTROLOGERS
      : ASTROLOGERS.filter((a) => a.category === activeCategory || activeCategory === 'career');

  return (
    <section id="astrologersSection" className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl font-bold text-darkSlate-900 flex items-center gap-2">
            <i className="fa-solid fa-headset text-amberGold-500"></i>
            <span>Consult Top Astrologers Online</span>
          </h3>
          <p className="text-xs text-darkSlate-600 font-medium">
            Instant guidance on Marriage, Love, Career &amp; Planetary Doshas
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors shadow-xs ${
              activeCategory === 'all'
                ? 'bg-amberGold-500 text-white'
                : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
            }`}
          >
            All Astrologers
          </button>
          <button
            onClick={() => setActiveCategory('love')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeCategory === 'love'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
            }`}
          >
            ❤️ Love &amp; Marriage
          </button>
          <button
            onClick={() => setActiveCategory('career')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeCategory === 'career'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
            }`}
          >
            💼 Career &amp; Wealth
          </button>
          <button
            onClick={() => setActiveCategory('vedic')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeCategory === 'vedic'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
            }`}
          >
            📜 Vedic &amp; Kundli
          </button>
          <button
            onClick={() => setActiveCategory('tarot')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
              activeCategory === 'tarot'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
            }`}
          >
            🃏 Tarot &amp; Psychic
          </button>
        </div>
      </div>

      {/* Astrologer Cards Grid (3 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAstrologers.map((astro) => (
          <div
            key={astro.id}
            className="cosmic-card rounded-2xl p-4 border border-amberGold-200 flex flex-col justify-between relative bg-white"
          >
            <span className="absolute top-3.5 right-3.5 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> ONLINE
            </span>
            <div>
              <div className="flex gap-3.5 items-center">
                <div className="relative flex-shrink-0">
                  <img
                    src={astro.image}
                    alt={astro.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-amberGold-300 shadow-xs"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-amberGold-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-xs">
                    {astro.rating.toFixed(1)} ★
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif font-bold text-darkSlate-900 text-sm truncate">
                    {astro.name}
                  </h4>
                  <p className="text-[11px] text-amberGold-700 font-bold truncate">
                    {astro.specialties}
                  </p>
                  <p className="text-[10px] text-darkSlate-500 font-semibold">
                    {astro.languages} • {astro.experience}
                  </p>
                  <p className="text-[10px] text-emerald-700 font-bold mt-1 flex items-center gap-1">
                    <i className="fa-solid fa-comments"></i> {astro.consultations}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-amberGold-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-darkSlate-400 line-through font-medium">
                  ₹{astro.originalPrice}/min
                </span>
                <div className="text-sm font-black text-emerald-600">
                  ₹{astro.discountedPrice}{' '}
                  <span className="text-[10px] text-darkSlate-500 font-normal">
                    / min (First Chat)
                  </span>
                </div>
              </div>
              <button
                onClick={() => startChatConsultation(astro)}
                className="gold-gradient-bg hover:opacity-95 text-white font-extrabold px-4 py-2 rounded-xl text-xs active:scale-95 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <i className="fa-solid fa-comment-dots"></i> Chat Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
