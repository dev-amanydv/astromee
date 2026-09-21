'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';

export default function ToastNotification() {
  const { toast, hideToast } = useApp();

  return (
    <div
      id="toastNotification"
      className={`fixed top-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white/95 backdrop-blur-md border border-amberGold-300 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 transition-all duration-300 ${
        toast.visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 pointer-events-none translate-y-3'
      }`}
    >
      <div
        id="toastIcon"
        className="w-10 h-10 rounded-xl bg-amberGold-100 text-amberGold-600 flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-xs"
      >
        {toast.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p id="toastTitle" className="text-xs font-extrabold text-amberGold-800 truncate">
          {toast.title || 'Notification'}
        </p>
        <p id="toastBody" className="text-xs text-darkSlate-600 font-medium line-clamp-2 mt-0.5">
          {toast.message}
        </p>
      </div>
      <button
        onClick={hideToast}
        className="text-darkSlate-400 p-1.5 hover:text-darkSlate-700 rounded-lg hover:bg-sunshine-100 transition-colors"
      >
        <i className="fa-solid fa-xmark text-sm"></i>
      </button>
    </div>
  );
}
