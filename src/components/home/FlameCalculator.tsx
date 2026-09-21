'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

interface FlameOutcome {
  title: string;
  desc: string;
}

const FLAME_OUTCOMES: FlameOutcome[] = [
  {
    title: 'L - Love (94% Compatibility)',
    desc: 'Deep romantic connection, intense planetary harmony & soulmate alignment!',
  },
  {
    title: 'A - Affection (88% Compatibility)',
    desc: 'Warm mutual respect, excellent communication and strong long-term bonding.',
  },
  {
    title: 'M - Marriage (98% Auspicious Match)',
    desc: 'Rare planetary alignment indicating blessed, prosperous lifelong union!',
  },
];

export default function FlameCalculator() {
  const { scrollToSection } = useApp();
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [result, setResult] = useState<FlameOutcome | null>(null);

  const calculateFlame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!yourName.trim() || !partnerName.trim()) return;

    const pick = FLAME_OUTCOMES[Math.floor(Math.random() * FLAME_OUTCOMES.length)];
    setResult(pick);
  };

  return (
    <section
      id="flameSection"
      className="cosmic-card rounded-3xl p-4 sm:p-8 border border-rose-200 bg-white space-y-4 flex flex-col justify-between w-full max-w-full min-w-0"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-500 flex items-center justify-center text-xl shadow-xs">
              <i className="fa-solid fa-fire-flame-curved"></i>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-darkSlate-900">
                FLAME Love Calculator
              </h3>
              <p className="text-xs text-darkSlate-500 font-medium">
                Test cosmic relationship chemistry
              </p>
            </div>
          </div>
          <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-2.5 py-1 rounded-full">
            FREE TOOL
          </span>
        </div>

        <form onSubmit={calculateFlame} className="space-y-3.5">
          <div>
            <label className="text-xs text-darkSlate-700 font-bold mb-1.5 block">Your Name</label>
            <input
              type="text"
              id="flameYourName"
              required
              placeholder="e.g. Rahul Sharma"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3.5 py-2.5 text-xs text-darkSlate-900 focus:outline-none focus:border-rose-400 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-darkSlate-700 font-bold mb-1.5 block">
              Partner&apos;s Name
            </label>
            <input
              type="text"
              id="flamePartnerName"
              required
              placeholder="e.g. Priya Patel"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3.5 py-2.5 text-xs text-darkSlate-900 focus:outline-none focus:border-rose-400 focus:bg-white transition-all"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-95 active:scale-95 text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-md shadow-rose-500/20 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-heart"></i>
            <span>Calculate Love &amp; Marriage Compatibility</span>
          </button>
        </form>
      </div>

      {result && (
        <div
          id="flameResult"
          className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center space-y-1.5 mt-4"
        >
          <div className="text-base font-black text-rose-700 font-serif" id="flameMatchTitle">
            {result.title}
          </div>
          <p className="text-xs text-darkSlate-700 font-medium" id="flameMatchDesc">
            {result.desc}
          </p>
          <button
            onClick={() => scrollToSection('astrologersSection')}
            className="text-xs text-amberGold-700 hover:underline font-bold pt-1 inline-block"
          >
            Consult Astrologer for Kundli Matching →
          </button>
        </div>
      )}
    </section>
  );
}
