'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function KundliSection() {
  const { setIsWalletModalOpen, showToast } = useApp();
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateKundli = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);
    showToast('📜 Kundli Ready', 'Basic Vedic chart generated successfully!');
  };

  return (
    <section
      id="kundliSection"
      className="cosmic-card rounded-3xl p-4 sm:p-8 border border-emerald-200 bg-white space-y-4 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl shadow-xs">
              <i className="fa-solid fa-scroll"></i>
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-darkSlate-900">
                Free Vedic Kundli Chart
              </h3>
              <p className="text-xs text-darkSlate-500 font-medium">
                Instant Lagna &amp; planetary transit generator
              </p>
            </div>
          </div>
          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2.5 py-1 rounded-full">
            INSTANT PDF
          </span>
        </div>

        <form onSubmit={generateKundli} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="text-xs text-darkSlate-700 font-bold block mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3 py-2 text-xs text-darkSlate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="text-xs text-darkSlate-700 font-bold block mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3 py-2 text-xs text-darkSlate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="text-xs text-darkSlate-700 font-bold block mb-1">Birth Date</label>
              <input
                type="date"
                required
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3 py-2 text-xs text-darkSlate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
            <div>
              <label className="text-xs text-darkSlate-700 font-bold block mb-1">Birth Time</label>
              <input
                type="time"
                required
                value={birthTime}
                onChange={(e) => setBirthTime(e.target.value)}
                className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3 py-2 text-xs text-darkSlate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-darkSlate-700 font-bold block mb-1">Place of Birth</label>
            <input
              type="text"
              required
              placeholder="City, State, Country"
              value={birthPlace}
              onChange={(e) => setBirthPlace(e.target.value)}
              className="w-full bg-sunshine-50 border border-amberGold-200 rounded-xl px-3 py-2 text-xs text-darkSlate-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 active:scale-95 text-white font-extrabold text-xs py-3 rounded-xl transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-chart-pie"></i>
            <span>Generate Full Kundli Chart</span>
          </button>
        </form>
      </div>

      {isGenerated && (
        <div
          id="kundliResult"
          className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs space-y-2 mt-4"
        >
          <p className="font-black text-emerald-800 flex items-center gap-1.5">
            <i className="fa-solid fa-circle-check text-emerald-600"></i>
            <span>Kundli Generated: Lagna - Aries (Mesha) • Rashi - Leo (Simha)</span>
          </p>
          <div className="p-2.5 bg-white rounded-xl border border-amberGold-200 flex items-center justify-between shadow-xs">
            <div>
              <span className="text-xs font-bold text-amberGold-800">
                ⚠️ Manglik &amp; Sade Sati Report
              </span>
              <p className="text-[10px] text-darkSlate-500">Planetary dosha remedies included</p>
            </div>
            <button
              onClick={() => setIsWalletModalOpen(true)}
              className="bg-amberGold-500 text-white font-black text-xs px-3 py-1.5 rounded-lg shadow-xs hover:bg-amberGold-600"
            >
              Unlock Full (₹29)
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
