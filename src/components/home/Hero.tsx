'use client';

import React from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { ASTROLOGERS } from '@/data/astrologers';

export default function Hero() {
  const { scrollToSection, startChatConsultation } = useApp();
  const featuredAstro = ASTROLOGERS[0]; // Acharya Ananya

  return (
    <section
      id="heroSection"
      className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amberGold-50/90 via-white to-mysticLight-softPurple/50 border border-amberGold-300/70 shadow-xl p-6 sm:p-10 lg:p-12"
    >
      {/* Decorative Cosmic Gradient Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-mysticLight-purple/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amberGold-400/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Hero Content */}
        <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-amberGold-300 rounded-full px-4 py-1.5 text-xs text-amberGold-800 font-bold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>100% Confidential • Verified Vedic Astrologers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-black leading-tight tracking-tight text-darkSlate-900">
            Unlock Your Destiny with India&apos;s Top Astrologers at{' '}
            <span className="gold-gradient-text font-serif">₹1 / Min</span>
          </h2>

          <p className="text-darkSlate-600 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            Get authentic clarity on{' '}
            <strong>Love, Career, Marriage, Finances &amp; Kundli Doshas</strong>. Connect
            instantly via Live Chat &amp; Call with 500+ verified Vedic masters.
          </p>

          {/* Hero Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection('astrologersSection')}
              className="gold-gradient-bg hover:opacity-95 text-white font-extrabold px-7 py-3.5 rounded-2xl active:scale-95 transition-all flex items-center justify-center gap-2.5 text-sm shadow-lg shadow-amberGold-500/30"
            >
              <i className="fa-solid fa-comments text-base"></i>
              <span>Start First Chat @ ₹1</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </button>

            <button
              onClick={() => scrollToSection('aiScannerSection')}
              className="bg-white hover:bg-amberGold-50 border-2 border-amberGold-300 text-amberGold-800 font-extrabold px-6 py-3.5 rounded-2xl active:scale-95 transition-all text-sm flex items-center justify-center gap-2.5 shadow-xs"
            >
              <i className="fa-solid fa-hand-sparkles text-amberGold-600 text-base"></i>
              <span>Try Free AI Palm Scanner</span>
            </button>
          </div>

          {/* Trust Stats Bar */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-amberGold-200/80 max-w-lg mx-auto lg:mx-0">
            <div className="text-left">
              <div className="font-black text-lg text-darkSlate-900">500+</div>
              <div className="text-[11px] text-darkSlate-500 font-semibold">Verified Masters</div>
            </div>
            <div className="text-left border-l border-amberGold-200 pl-4">
              <div className="font-black text-lg text-amberGold-600 flex items-center gap-1">
                <span>4.9★</span>
                <i className="fa-solid fa-star text-xs"></i>
              </div>
              <div className="text-[11px] text-darkSlate-500 font-semibold">2M+ Consults</div>
            </div>
            <div className="text-left border-l border-amberGold-200 pl-4">
              <div className="font-black text-lg text-emerald-600 flex items-center gap-1">
                <i className="fa-solid fa-shield-check text-base"></i>
                <span>100%</span>
              </div>
              <div className="text-[11px] text-darkSlate-500 font-semibold">Private &amp; Secure</div>
            </div>
          </div>
        </div>

        {/* Right Hero Visual / Live Spotlight Card (Desktop) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Spinning Celestial Astrolabe Ring */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-amberGold-300/60 animate-spin-slow pointer-events-none"></div>

            {/* Featured Astrologer Live Card */}
            <div className="cosmic-card rounded-3xl p-5 border-2 border-amberGold-300 relative bg-white/95 space-y-4">
              <div className="flex items-center justify-between border-b border-amberGold-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider">
                    Astrologer of the Moment
                  </span>
                </div>
                <span className="bg-amberGold-100 text-amberGold-800 text-[10px] font-black px-2 py-0.5 rounded-full">
                  TOP RATED
                </span>
              </div>

              <div className="flex gap-4 items-center">
                <div className="relative flex-shrink-0">
                  <img
                    src={featuredAstro.image}
                    alt={featuredAstro.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-amberGold-400 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 bg-amberGold-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-xs">
                    4.9 ★
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif font-bold text-darkSlate-900 text-base truncate">
                    {featuredAstro.name}
                  </h4>
                  <p className="text-xs text-amberGold-700 font-bold truncate">
                    {featuredAstro.title}
                  </p>
                  <p className="text-[11px] text-darkSlate-500 font-semibold mt-0.5">
                    {featuredAstro.experience} • 14,800+ Consults
                  </p>
                </div>
              </div>

              <div className="bg-sunshine-50 p-3 rounded-2xl border border-amberGold-200 text-xs text-darkSlate-700 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-darkSlate-500 font-bold">First Chat Rate:</span>
                  <div className="text-right">
                    <span className="line-through text-darkSlate-400 text-[11px] mr-1.5">
                      ₹{featuredAstro.originalPrice}/min
                    </span>
                    <span className="text-sm font-black text-emerald-600">
                      ₹{featuredAstro.discountedPrice} / min
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                  <i className="fa-solid fa-circle-check"></i> Available right now • Instant
                  Response
                </div>
              </div>

              <button
                onClick={() => startChatConsultation(featuredAstro)}
                className="w-full gold-gradient-bg hover:opacity-95 text-white font-extrabold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md shadow-amberGold-500/20 active:scale-95 transition-all"
              >
                <i className="fa-solid fa-comment-dots text-sm"></i>
                <span>Connect with {featuredAstro.name} Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
