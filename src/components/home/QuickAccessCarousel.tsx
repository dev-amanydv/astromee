'use client';

import React, { useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { CAROUSEL_ITEMS, CarouselItem } from '@/data/carousel';

export default function QuickAccessCarousel() {
  const { setScanMode, scrollToSection, showToast } = useApp();
  const trackRef = useRef<HTMLDivElement>(null);

  const nudgeCarousel = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    try {
      const computedStyle = window.getComputedStyle(track);
      const matrix = new DOMMatrixReadOnly(computedStyle.transform);
      const currentX = matrix.m41;

      track.style.animationPlayState = 'paused';
      const offset = direction === 'left' ? 240 : -240;
      track.style.transform = `translateX(${currentX + offset}px)`;
      track.style.transition = 'transform 0.4s ease-out';

      setTimeout(() => {
        if (track) {
          track.style.transition = '';
          track.style.animationPlayState = 'running';
        }
      }, 1800);
    } catch {
      // fallback
    }
  };

  const handleItemClick = (item: CarouselItem) => {
    if (item.actionType === 'scroll' && item.target) {
      scrollToSection(item.target);
    } else if (item.actionType === 'scan' && item.target) {
      setScanMode(item.target as 'palm' | 'face');
      scrollToSection('aiScannerSection');
    } else if (item.actionType === 'toast') {
      showToast(item.toastTitle || 'Notification', item.toastMsg || '', item.toastIcon || '✨');
    }
  };

  const renderItems = (keyPrefix: string) => {
    return CAROUSEL_ITEMS.map((item, idx) => (
      <button
        key={`${keyPrefix}-${item.id}-${idx}`}
        onClick={() => handleItemClick(item)}
        className="carousel-item-pill flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sunshine-50 hover:bg-amberGold-50 border border-amberGold-200/90 shadow-2xs whitespace-nowrap cursor-pointer"
      >
        <div
          className={`w-7 h-7 rounded-full bg-gradient-to-tr ${item.iconGradient} text-white flex items-center justify-center text-xs font-bold shadow-xs`}
        >
          {item.icon}
        </div>
        <span className="text-xs text-darkSlate-800 font-bold">{item.label}</span>
        {item.badge && (
          <span className="bg-purple-100 text-purple-700 text-[9px] px-1.5 py-0.5 rounded font-black">
            {item.badge}
          </span>
        )}
      </button>
    ));
  };

  return (
    <section className="bg-white/90 border-b border-amberGold-200/60 py-3 px-3 sm:px-6 shadow-2xs relative overflow-hidden group/ribbon">
      <div className="max-w-7xl mx-auto flex items-center gap-3 w-full min-w-0">
        <button
          onClick={() => nudgeCarousel('left')}
          className="hidden sm:flex z-20 w-7 h-7 rounded-full bg-white/95 border border-amberGold-300 text-amberGold-700 shadow-md items-center justify-center hover:bg-amberGold-500 hover:text-white transition-all opacity-0 group-hover/ribbon:opacity-100 -mr-2 shrink-0"
          title="Scroll Left"
        >
          <i className="fa-solid fa-chevron-left text-xs"></i>
        </button>

        <div
          id="carouselViewport"
          className="flex-1 min-w-0 overflow-hidden carousel-fade-mask quick-carousel-wrapper py-1"
        >
          <div
            id="quickCarouselTrack"
            ref={trackRef}
            className="quick-carousel-track gap-4 items-center"
          >
            {renderItems('set1')}
            {renderItems('set2')}
          </div>
        </div>

        <button
          onClick={() => nudgeCarousel('right')}
          className="hidden sm:flex z-20 w-7 h-7 rounded-full bg-white/95 border border-amberGold-300 text-amberGold-700 shadow-md items-center justify-center hover:bg-amberGold-500 hover:text-white transition-all opacity-0 group-hover/ribbon:opacity-100 -ml-2"
          title="Scroll Right"
        >
          <i className="fa-solid fa-chevron-right text-xs"></i>
        </button>
      </div>
    </section>
  );
}
