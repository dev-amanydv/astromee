'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function HeaderActions() {
  const {
    coins,
    setIsWalletModalOpen,
    setIsWheelModalOpen,
    isMobileNavOpen,
    setIsMobileNavOpen,
    showToast,
  } = useApp();

  return (
    <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
      <button
        onClick={() => setIsWalletModalOpen(true)}
        className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amberGold-50 via-amberGold-100 to-amberGold-50 hover:from-amberGold-100 hover:to-amberGold-200 border sm:border-2 border-amberGold-400 rounded-xl sm:rounded-2xl px-2 py-1 sm:px-3.5 sm:py-1.5 hover:shadow-md active:scale-95 transition-all group shadow-2xs"
      >
        <span className="text-sm sm:text-base group-hover:rotate-12 transition-transform">🪙</span>
        <div className="text-left leading-tight">
          <div className="text-[7px] sm:text-[8px] text-amberGold-800 font-black uppercase tracking-wider">
            Balance
          </div>
          <div className="text-[11px] sm:text-xs font-black text-darkSlate-900 flex items-center gap-0.5 sm:gap-1">
            <span id="userCoins">{coins}</span>{' '}
            <span className="text-[9px] sm:text-[10px] text-darkSlate-500 font-bold">Coins</span>
          </div>
        </div>
        <span className="hidden sm:inline-block bg-amberGold-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-lg shadow-xs group-hover:bg-amberGold-600 transition-colors">
          + Topup
        </span>
      </button>

      <button
        onClick={() => setIsWheelModalOpen(true)}
        className="relative p-2 sm:p-2.5 bg-white hover:bg-amberGold-50 active:scale-90 rounded-xl sm:rounded-2xl border border-amberGold-200 text-amberGold-600 hover:text-amberGold-700 shadow-xs transition-all flex items-center gap-1.5 text-xs font-black"
        title="Daily Lucky Spin"
      >
        <i className="fa-solid fa-dharmachakra text-sm sm:text-base animate-spin-slow text-amberGold-500"></i>
        <span className="hidden sm:inline">Spin</span>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mysticLight-pink opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-mysticLight-pink border-2 border-white"></span>
        </span>
      </button>

      <div className="relative group">
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amberGold-400 to-mysticLight-purple p-0.5 shadow-sm hover:scale-105 active:scale-95 transition-transform flex items-center justify-center">
          <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center text-darkSlate-700">
            <i className="fa-solid fa-user text-[11px] sm:text-xs text-amberGold-600"></i>
          </div>
        </button>
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

      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className="xl:hidden p-2.5 rounded-2xl bg-sunshine-100 hover:bg-sunshine-200 border border-amberGold-200 text-darkSlate-700 text-base"
        aria-label="Toggle mobile menu"
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
