import React from 'react';
import { Astrologer } from '@/data/astrologers';

interface AstrologerCardProps {
  astrologer: Astrologer;
  onChat: (astrologer: Astrologer) => void;
}

export default function AstrologerCard({ astrologer, onChat }: AstrologerCardProps) {
  return (
    <div className="cosmic-card rounded-2xl p-3.5 sm:p-4 border border-amberGold-200 flex flex-col justify-between relative bg-white">
      <span className="absolute top-3.5 right-3.5 bg-emerald-100 border border-emerald-300 text-emerald-800 text-[9px] sm:text-[10px] font-black px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> ONLINE
      </span>
      <div>
        <div className="flex gap-3 sm:gap-3.5 items-center">
          <div className="relative flex-shrink-0">
            <img
              src={astrologer.image}
              alt={astrologer.name}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-amberGold-300 shadow-xs"
            />
            <span className="absolute -bottom-1 -right-1 bg-amberGold-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded shadow-xs">
              {astrologer.rating.toFixed(1)} ★
            </span>
          </div>
          <div className="flex-1 min-w-0 pr-14 sm:pr-0">
            <h4 className="font-serif font-bold text-darkSlate-900 text-sm truncate">
              {astrologer.name}
            </h4>
            <p className="text-[11px] text-amberGold-700 font-bold truncate">
              {astrologer.specialties}
            </p>
            <p className="text-[10px] text-darkSlate-500 font-semibold">
              {astrologer.languages} • {astrologer.experience}
            </p>
            <p className="text-[10px] text-emerald-700 font-bold mt-0.5 sm:mt-1 flex items-center gap-1">
              <i className="fa-solid fa-comments"></i> {astrologer.consultations}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-amberGold-100 flex items-center justify-between gap-2">
        <div className="min-w-0">
          <span className="text-[10px] text-darkSlate-400 line-through font-medium">
            ₹{astrologer.originalPrice}/min
          </span>
          <div className="text-xs sm:text-sm font-black text-emerald-600 truncate">
            ₹{astrologer.discountedPrice}{' '}
            <span className="text-[10px] text-darkSlate-500 font-normal">
              / min (First Chat)
            </span>
          </div>
        </div>
        <button
          onClick={() => onChat(astrologer)}
          className="gold-gradient-bg hover:opacity-95 text-white font-extrabold px-3.5 sm:px-4 py-2 rounded-xl text-xs active:scale-95 transition-all flex items-center gap-1.5 shadow-sm shrink-0"
        >
          <i className="fa-solid fa-comment-dots"></i> Chat Now
        </button>
      </div>
    </div>
  );
}
