'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

interface RechargePack {
  cost: number;
  coins: number;
  name: string;
  bonusText: string;
  isPopular?: boolean;
}

const RECHARGE_PACKS: RechargePack[] = [
  {
    cost: 99,
    coins: 100,
    name: 'Starter Pack',
    bonusText: '+ 20 Bonus Coins',
  },
  {
    cost: 199,
    coins: 250,
    name: 'Popular Destiny Pack',
    bonusText: '+ 50 Bonus Coins',
    isPopular: true,
  },
  {
    cost: 499,
    coins: 700,
    name: 'VIP Astrologer Pack',
    bonusText: '+ Free Palm & Kundli PDF',
  },
];

export default function WalletModal() {
  const { isWalletModalOpen, setIsWalletModalOpen, addCoins, showToast } = useApp();
  const [selectedPack, setSelectedPack] = useState(RECHARGE_PACKS[1]); // Default 199 pack

  if (!isWalletModalOpen) return null;

  const handleProcessPayment = () => {
    addCoins(selectedPack.coins);
    showToast('🎉 Recharge Success', `Added ${selectedPack.coins} coins to your wallet!`, '🪙');
    setIsWalletModalOpen(false);
  };

  const getPackClassNames = (pack: RechargePack) => {
    const isSelected = selectedPack.cost === pack.cost;

    if (pack.isPopular) {
      return `recharge-pack p-4 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all relative shadow-sm bg-gradient-to-r from-amberGold-50 via-amberGold-100/90 to-amberGold-50 border-amberGold-500 ${
        isSelected ? 'ring-2 ring-amberGold-400/40' : ''
      }`;
    }

    return `recharge-pack p-4 rounded-2xl border-2 cursor-pointer flex items-center justify-between transition-all ${
      isSelected
        ? 'bg-amberGold-50 border-amberGold-500 shadow-sm'
        : 'bg-sunshine-50 border-amberGold-200 hover:border-amberGold-500'
    }`;
  };

  return (
    <div
      id="walletModal"
      className="fixed inset-0 z-50 bg-darkSlate-950/60 backdrop-blur-md flex items-center justify-center p-4"
    >
      <div className="cosmic-card w-full max-w-lg rounded-3xl p-6 sm:p-8 border-2 border-amberGold-300 relative bg-white space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl">
        <button
          onClick={() => setIsWalletModalOpen(false)}
          className="absolute top-5 right-5 text-darkSlate-400 hover:text-darkSlate-800 p-2 rounded-full hover:bg-sunshine-100 transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="text-center space-y-1.5">
          <div className="w-14 h-14 mx-auto rounded-3xl bg-amberGold-100 text-amberGold-600 flex items-center justify-center text-3xl shadow-sm">
            🪙
          </div>
          <h3 className="font-serif text-2xl font-bold text-darkSlate-900">
            Recharge Astromee Coins
          </h3>
          <p className="text-xs text-darkSlate-600 font-medium">
            Use coins for live chat consultations, AI reports &amp; detailed Kundli analysis
          </p>
        </div>

        {/* Recharge Pack Options */}
        <div className="space-y-3">
          {RECHARGE_PACKS.map((pack) => (
            <div
              key={pack.cost}
              onClick={() => setSelectedPack(pack)}
              className={getPackClassNames(pack)}
            >
              {pack.isPopular && (
                <span className="absolute -top-2.5 right-4 bg-amberGold-500 text-white text-[9px] font-black px-2.5 py-0.5 rounded-full shadow-xs uppercase">
                  BEST VALUE
                </span>
              )}
              <div>
                <span className="text-xs font-extrabold text-amberGold-800">{pack.name}</span>
                <div className="text-sm font-black text-darkSlate-900">
                  {pack.coins} Coins{' '}
                  <span className="text-emerald-600 text-xs font-bold">{pack.bonusText}</span>
                </div>
              </div>
              <span className="text-base font-black text-amberGold-700">₹{pack.cost}</span>
            </div>
          ))}
        </div>

        {/* Payment Action */}
        <div className="space-y-2">
          <button
            onClick={handleProcessPayment}
            className="w-full gold-gradient-bg hover:opacity-95 text-white font-black text-sm py-3.5 rounded-xl shadow-lg shadow-amberGold-500/30 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-lock text-sm"></i>
            <span>Pay Securely via UPI / NetBanking / Cards</span>
          </button>
          <div className="flex items-center justify-center gap-3 text-[11px] text-darkSlate-500 font-medium">
            <span>⚡ Instant Balance Credit</span>
            <span>•</span>
            <span>🛡️ 100% Safe Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
