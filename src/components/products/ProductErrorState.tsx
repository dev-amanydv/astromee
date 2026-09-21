'use client';

import React from 'react';
import Link from 'next/link';

interface ProductErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHomeLink?: boolean;
}

export default function ProductErrorState({
  title = 'Unable to Load Products',
  message = 'We encountered an error connecting to the cosmic remedy vault. Please check your connection and try again.',
  onRetry,
  showHomeLink = false,
}: ProductErrorStateProps) {
  return (
    <div className="cosmic-card rounded-2xl p-8 sm:p-12 text-center max-w-lg mx-auto my-8 border border-amberGold-200 shadow-lg">
      <div className="w-16 h-16 rounded-3xl bg-rose-100 text-rose-600 border border-rose-200 flex items-center justify-center mx-auto mb-4 text-2xl shadow-xs">
        <i className="fa-solid fa-triangle-exclamation"></i>
      </div>

      <h3 className="font-serif text-xl font-bold text-darkSlate-900 mb-2">
        {title}
      </h3>

      <p className="text-xs text-darkSlate-600 leading-relaxed mb-6">
        {message}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amberGold-500 to-amberGold-600 hover:from-amberGold-600 hover:to-amberGold-700 text-white font-bold text-xs shadow-md active:scale-95 transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-arrows-rotate text-xs"></i>
            <span>Try Again</span>
          </button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-amberGold-50 text-darkSlate-700 font-bold text-xs border border-amberGold-200 shadow-2xs active:scale-95 transition-all flex items-center gap-2"
          >
            <i className="fa-solid fa-house text-xs text-amberGold-600"></i>
            <span>Return to Astromee</span>
          </Link>
        )}
      </div>
    </div>
  );
}
