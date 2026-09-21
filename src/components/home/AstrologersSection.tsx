'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ASTROLOGERS } from '@/data/astrologers';
import AstrologerCard from './AstrologerCard';

type FilterCategory = 'all' | 'love' | 'career' | 'vedic' | 'tarot';

interface CategoryOption {
  id: FilterCategory;
  label: string;
}

const CATEGORY_TABS: CategoryOption[] = [
  { id: 'all', label: 'All Astrologers' },
  { id: 'love', label: '❤️ Love & Marriage' },
  { id: 'career', label: '💼 Career & Wealth' },
  { id: 'vedic', label: '📜 Vedic & Kundli' },
  { id: 'tarot', label: '🃏 Tarot & Psychic' },
];

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
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkSlate-900 flex items-center gap-2">
            <i className="fa-solid fa-headset text-amberGold-500 text-base sm:text-xl"></i>
            <span>Consult Top Astrologers Online</span>
          </h3>
          <p className="text-xs text-darkSlate-600 font-medium mt-0.5">
            Instant guidance on Marriage, Love, Career &amp; Planetary Doshas
          </p>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 -mx-3 px-3 sm:mx-0 sm:px-0">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors shrink-0 ${
                  isActive
                    ? 'bg-amberGold-500 text-white shadow-xs'
                    : 'bg-white text-darkSlate-700 border border-amberGold-200 hover:bg-amberGold-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredAstrologers.map((astro) => (
          <AstrologerCard
            key={astro.id}
            astrologer={astro}
            onChat={startChatConsultation}
          />
        ))}
      </div>
    </section>
  );
}
