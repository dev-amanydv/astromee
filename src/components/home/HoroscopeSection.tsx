'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ZODIAC_SIGNS } from '@/data/horoscope';

interface PanchangItem {
  label: string;
  value: string;
  cardBg: string;
  borderColor: string;
  labelColor: string;
  valueColor: string;
}

const PANCHANG_ITEMS: PanchangItem[] = [
  {
    label: 'Tithi',
    value: 'Shukla Paksha Dashami',
    cardBg: 'bg-sunshine-50',
    borderColor: 'border-amberGold-200',
    labelColor: 'text-darkSlate-500',
    valueColor: 'text-darkSlate-900',
  },
  {
    label: 'Nakshatra',
    value: 'Rohini Nakshatra',
    cardBg: 'bg-sunshine-50',
    borderColor: 'border-amberGold-200',
    labelColor: 'text-darkSlate-500',
    valueColor: 'text-darkSlate-900',
  },
  {
    label: 'Abhijit Muhurat (Auspicious)',
    value: '11:45 AM - 12:35 PM',
    cardBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    labelColor: 'text-emerald-700',
    valueColor: 'text-emerald-900',
  },
  {
    label: 'Rahu Kaal (Avoid)',
    value: '03:00 PM - 04:30 PM',
    cardBg: 'bg-rose-50',
    borderColor: 'border-rose-200',
    labelColor: 'text-rose-700',
    valueColor: 'text-rose-900',
  },
];

export default function HoroscopeSection() {
  const { selectedSign, setSelectedSign, scrollToSection, showToast } = useApp();

  return (
    <section
      id="horoscopeSection"
      className="cosmic-card rounded-3xl p-6 sm:p-8 border border-amberGold-200 space-y-6 bg-white"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amberGold-100 pb-4">
        <div>
          <h3 className="font-serif text-2xl font-bold text-darkSlate-900 flex items-center gap-2">
            <i className="fa-solid fa-sun text-amberGold-500"></i>
            <span>Daily Sun Sign Horoscope</span>
          </h3>
          <p className="text-xs text-darkSlate-600 font-medium">
            Select your zodiac sign for daily love, career &amp; wellness forecast
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-xs font-bold text-amberGold-800 bg-amberGold-50 px-3 py-1 rounded-full border border-amberGold-200 shadow-2xs"
            id="todayDateStr"
          >
            Today&apos;s Forecast
          </span>
        </div>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2.5 text-center">
        {ZODIAC_SIGNS.map((sign) => {
          const isActive = selectedSign.name === sign.name;
          return (
            <button
              key={sign.name}
              onClick={() => setSelectedSign(sign)}
              className={`horoscope-chip p-3 rounded-2xl border border-amberGold-200 text-darkSlate-800 transition-all flex flex-col items-center hover:bg-amberGold-100 group ${
                isActive ? 'active' : 'bg-sunshine-50'
              }`}
            >
              <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                {sign.symbol}
              </span>
              <span className="text-xs font-bold">{sign.name}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-amberGold-50/80 via-white to-sunshine-100 rounded-2xl p-6 border border-amberGold-300 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xs">
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-3">
            <span id="activeSignIcon" className="text-4xl text-amberGold-600">
              {selectedSign.symbol}
            </span>
            <div>
              <h4 id="activeSignTitle" className="font-serif font-black text-xl text-amberGold-900">
                {selectedSign.name} Daily Horoscope
              </h4>
              <div className="flex items-center gap-4 text-xs text-darkSlate-600 font-bold mt-0.5">
                <span>
                  🎨 Lucky Color:{' '}
                  <strong className="text-amberGold-700">{selectedSign.luckyColor}</strong>
                </span>
                <span>
                  🔢 Lucky Number:{' '}
                  <strong className="text-amberGold-700">{selectedSign.luckyNumber}</strong>
                </span>
                <span>
                  ⏰ Lucky Time:{' '}
                  <strong className="text-amberGold-700">{selectedSign.luckyTime}</strong>
                </span>
              </div>
            </div>
          </div>

          <p
            id="activeSignText"
            className="text-sm text-darkSlate-700 font-medium leading-relaxed max-w-3xl"
          >
            {selectedSign.fullForecast}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full lg:w-auto">
          <button
            onClick={() => scrollToSection('astrologersSection')}
            className="gold-gradient-bg hover:opacity-95 text-white font-extrabold px-6 py-3 rounded-xl text-xs active:scale-95 transition-all text-center whitespace-nowrap shadow-md shadow-amberGold-500/20"
          >
            Consult Astrologer for {selectedSign.name}{' '}
            <i className="fa-solid fa-arrow-right ml-1"></i>
          </button>
          <button
            onClick={() =>
              showToast('⭐ Saved', `${selectedSign.name} Horoscope saved to daily reading`)
            }
            className="bg-white hover:bg-sunshine-50 text-darkSlate-700 font-bold border border-amberGold-200 px-4 py-2.5 rounded-xl text-xs text-center transition-colors"
          >
            <i className="fa-regular fa-bookmark mr-1"></i> Save Reading
          </button>
        </div>
      </div>

      <div
        id="panchangWidget"
        className="pt-2 border-t border-amberGold-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs"
      >
        {PANCHANG_ITEMS.map((item) => (
          <div
            key={item.label}
            className={`p-3 ${item.cardBg} rounded-xl border ${item.borderColor}`}
          >
            <span className={`text-[10px] ${item.labelColor} font-bold uppercase block`}>
              {item.label}
            </span>
            <span className={`font-extrabold ${item.valueColor} text-sm`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
