'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function WheelModal() {
  const { isWheelModalOpen, setIsWheelModalOpen, addCoins, showToast } = useApp();
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  if (!isWheelModalOpen) return null;

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const randomDegree = rotationDegree + 1440 + Math.floor(Math.random() * 360);
    setRotationDegree(randomDegree);

    setTimeout(() => {
      addCoins(20);
      showToast('🎉 Chakra Prize', 'You won 20 Free Astromee Coins!', '🎁');
      setIsWheelModalOpen(false);
      setIsSpinning(false);
    }, 3100);
  };

  return (
    <div
      id="wheelModal"
      className="fixed inset-0 z-50 bg-darkSlate-950/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
    >
      <div className="cosmic-card w-full max-w-sm rounded-3xl p-4 sm:p-6 border-2 border-amberGold-300 text-center space-y-4 relative bg-white shadow-2xl">
        <button
          onClick={() => setIsWheelModalOpen(false)}
          className="absolute top-4 right-4 text-darkSlate-400 hover:text-darkSlate-800 p-2 rounded-full"
        >
          <i className="fa-solid fa-xmark text-base"></i>
        </button>
        <h3 className="font-serif text-xl font-black text-amberGold-900">
          Daily Lucky Chakra Spin
        </h3>
        <p className="text-xs text-darkSlate-600 font-medium">
          Spin the celestial chakra daily to win up to 50 free coins!
        </p>

        <div className="relative w-48 h-48 mx-auto border-4 border-amberGold-400 rounded-full flex items-center justify-center bg-gradient-to-tr from-sunshine-100 to-amberGold-100 shadow-xl">
          <i
            id="spinWheelGraphic"
            style={{
              transform: `rotate(${rotationDegree}deg)`,
              transition: isSpinning ? 'transform 3000ms cubic-bezier(0.2, 0.8, 0.2, 1)' : 'none',
            }}
            className="fa-solid fa-dharmachakra text-8xl text-amberGold-500"
          ></i>
        </div>

        <button
          id="spinBtn"
          disabled={isSpinning}
          onClick={spinWheel}
          className="w-full gold-gradient-bg hover:opacity-95 text-white font-black text-xs py-3 rounded-xl shadow-md shadow-amberGold-500/30 active:scale-95 disabled:opacity-75"
        >
          🎯 Spin Chakra &amp; Win Coins
        </button>
      </div>
    </div>
  );
}
