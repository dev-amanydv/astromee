'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';

interface SearchItem {
  name: string;
  section: string;
  type: string;
}

interface QuickSuggestion {
  label: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  hoverBg: string;
  sectionId: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  { name: 'Acharya Ananya - Vedic, Tarot, Numerology', section: 'astrologersSection', type: 'Astrologer' },
  { name: 'Pandit Devraj Sharma - Kundli, KP System', section: 'astrologersSection', type: 'Astrologer' },
  { name: 'Dr. Priya Nambiar - Psychic Reader & Palmistry', section: 'astrologersSection', type: 'Astrologer' },
  { name: 'AI Palm Biometric Scanner', section: 'aiScannerSection', type: 'AI Tool' },
  { name: 'AI Facial Destiny Scan', section: 'aiScannerSection', type: 'AI Tool' },
  { name: 'Free Vedic Kundli Birth Chart', section: 'kundliSection', type: 'Vedic Chart' },
  { name: 'FLAME Love & Relationship Match', section: 'flameSection', type: 'Calculator' },
  { name: 'Aries Daily Horoscope', section: 'horoscopeSection', type: 'Horoscope' },
  { name: 'Taurus Daily Horoscope', section: 'horoscopeSection', type: 'Horoscope' },
  { name: 'Gemini Daily Horoscope', section: 'horoscopeSection', type: 'Horoscope' },
  { name: 'Leo Daily Horoscope', section: 'horoscopeSection', type: 'Horoscope' },
  { name: "Today's Panchang & Auspicious Muhurat", section: 'panchangWidget', type: 'Panchang' },
];

const QUICK_SUGGESTIONS: QuickSuggestion[] = [
  {
    label: '💬 Acharya Ananya (Vedic & Tarot)',
    badge: 'ONLINE',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    hoverBg: 'hover:bg-amberGold-50',
    sectionId: 'astrologersSection',
  },
  {
    label: '✋ AI Palm Destiny Reader',
    badge: 'FREE TEASER',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    hoverBg: 'hover:bg-purple-50',
    sectionId: 'aiScannerSection',
  },
  {
    label: '📜 Vedic Kundli Birth Chart PDF',
    badge: 'INSTANT',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    hoverBg: 'hover:bg-emerald-50',
    sectionId: 'kundliSection',
  },
  {
    label: '❤️ FLAME Love & Marriage Match Test',
    badge: 'FREE',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    hoverBg: 'hover:bg-rose-50',
    sectionId: 'flameSection',
  },
];

export default function SpotlightModal() {
  const { isSpotlightOpen, setIsSpotlightOpen, scrollToSection } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSpotlightOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSpotlightOpen]);

  if (!isSpotlightOpen) return null;

  const filteredItems = query.trim()
    ? SEARCH_ITEMS.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase().trim())
      )
    : [];

  const handleSelect = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsSpotlightOpen(false);
  };

  return (
    <div
      id="spotlightModal"
      className="fixed inset-0 z-50 bg-darkSlate-950/60 backdrop-blur-md flex items-start justify-center pt-20 p-4"
    >
      <div className="cosmic-card w-full max-w-xl rounded-3xl p-4 sm:p-6 border-2 border-amberGold-300 bg-white shadow-2xl space-y-4">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-3.5 text-amberGold-600 text-sm"></i>
          <input
            ref={inputRef}
            type="text"
            id="spotlightInput"
            placeholder="Type to search astrologer, service, or zodiac sign..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-sunshine-50 border border-amberGold-300 rounded-2xl py-3 pl-11 pr-10 text-sm text-darkSlate-900 placeholder-darkSlate-400 focus:outline-none focus:border-amberGold-500 focus:bg-white font-medium"
          />
          <button
            onClick={() => setIsSpotlightOpen(false)}
            className="absolute right-3 top-3 text-darkSlate-400 hover:text-darkSlate-700 p-1"
            aria-label="Close search"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div id="spotlightResults" className="max-h-72 overflow-y-auto space-y-2 text-xs">
          {!query.trim() ? (
            <>
              <div className="p-2 text-[11px] font-bold text-darkSlate-400 uppercase tracking-wider">
                Quick Suggestions
              </div>
              {QUICK_SUGGESTIONS.map((item) => (
                <div
                  key={item.label}
                  onClick={() => handleSelect(item.sectionId)}
                  className={`p-2.5 rounded-xl ${item.hoverBg} cursor-pointer flex items-center justify-between transition-colors`}
                >
                  <span className="font-bold text-darkSlate-800">{item.label}</span>
                  <span
                    className={`text-[10px] ${item.badgeBg} ${item.badgeText} font-bold px-2 py-0.5 rounded-full`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </>
          ) : filteredItems.length === 0 ? (
            <div className="p-4 text-center text-darkSlate-500 font-medium">
              No matches found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item.section)}
                className="p-2.5 rounded-xl hover:bg-amberGold-50 cursor-pointer flex items-center justify-between transition-colors"
              >
                <span className="font-bold text-darkSlate-900">{item.name}</span>
                <span className="text-[10px] bg-amberGold-100 text-amberGold-800 font-black px-2 py-0.5 rounded-full">
                  {item.type}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
