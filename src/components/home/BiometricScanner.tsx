'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '@/context/AppContext';

export default function BiometricScanner() {
  const { scanMode, setScanMode, setIsWalletModalOpen, showToast } = useApp();
  const [isScanning, setIsScanning] = useState(false);
  const [progressPercent, setProgressPercent] = useState('0%');
  const [progressText, setProgressText] = useState('Analyzing Biometric Lines...');
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const simulateScan = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setIsScanning(true);
    setProgressPercent('0%');
    setProgressText(
      scanMode === 'palm'
        ? 'Scanning Heart Line & Mounts...'
        : 'Mapping 68 Facial Landmarks...'
    );

    const t1 = setTimeout(() => {
      setProgressPercent('35%');
      setProgressText(
        scanMode === 'palm'
          ? 'Scanning Heart Line & Mounts...'
          : 'Mapping 68 Facial Landmarks...'
      );
    }, 400);

    const t2 = setTimeout(() => {
      setProgressPercent('75%');
      setProgressText(
        scanMode === 'palm'
          ? 'Calculating Wealth & Fate Line Geometry...'
          : 'Analyzing Planetary Facial Nodes...'
      );
    }, 1000);

    const t3 = setTimeout(() => {
      setProgressPercent('100%');
      setProgressText('Generating Full Destiny Report...');
    }, 1600);

    const t4 = setTimeout(() => {
      setIsScanning(false);
      showToast(
        '✨ Destiny Scan Complete',
        '50% Free Teaser insights generated below!',
        '✋'
      );
    }, 2100);

    timeoutsRef.current = [t1, t2, t3, t4];
  };

  return (
    <section
      id="aiScannerSection"
      className="cosmic-card rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-mysticLight-purple/30 relative overflow-hidden bg-gradient-to-br from-white via-sunshine-50 to-mysticLight-softPurple/30"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-mysticLight-softPurple border border-mysticLight-purple/40 px-3 py-1 rounded-full text-xs text-mysticLight-purple font-extrabold mb-2">
            <i className="fa-solid fa-microchip"></i>
            <span>AI Biometric Destiny Engine v2.4</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-darkSlate-900">
            Palm &amp; Face <span className="gold-gradient-text">Destiny Scanner</span>
          </h3>
          <p className="text-xs sm:text-sm text-darkSlate-600 font-medium mt-1">
            Scan your palm lines or facial geometry to reveal Life Line length, Marriage Timing &amp;
            Financial Mounts.
          </p>
        </div>

        <div className="bg-sunshine-200 p-1.5 rounded-2xl border border-amberGold-200 flex gap-1.5 self-start lg:self-auto shadow-inner">
          <button
            id="scanModePalm"
            onClick={() => setScanMode('palm')}
            className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
              scanMode === 'palm'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'text-darkSlate-600 hover:text-amberGold-700'
            }`}
          >
            ✋ Palm Reader
          </button>
          <button
            id="scanModeFace"
            onClick={() => setScanMode('face')}
            className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
              scanMode === 'face'
                ? 'bg-amberGold-500 text-white shadow-xs'
                : 'text-darkSlate-600 hover:text-amberGold-700'
            }`}
          >
            👤 Face Reader
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm h-80 rounded-3xl bg-white border-2 border-dashed border-amberGold-300 flex flex-col items-center justify-center p-6 overflow-hidden shadow-md">
            {isScanning && <div id="scannerLine" className="scanner-laser z-20"></div>}

            <div className="absolute inset-4 pointer-events-none border border-amberGold-200/60 rounded-2xl flex flex-col justify-between p-2">
              <div className="flex justify-between">
                <div className="w-4 h-4 border-t-2 border-l-2 border-amberGold-500"></div>
                <div className="w-4 h-4 border-t-2 border-r-2 border-amberGold-500"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-4 h-4 border-b-2 border-l-2 border-amberGold-500"></div>
                <div className="w-4 h-4 border-b-2 border-r-2 border-amberGold-500"></div>
              </div>
            </div>

            <div id="scannerPlaceholder" className="text-center space-y-3 z-10">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-amberGold-50 border-2 border-amberGold-200 flex items-center justify-center text-3xl text-amberGold-600 shadow-sm animate-bounce-subtle">
                <i
                  id="scanIcon"
                  className={scanMode === 'palm' ? 'fa-solid fa-hand' : 'fa-solid fa-face-smile'}
                ></i>
              </div>
              <div>
                <h5 className="text-sm font-bold text-darkSlate-900">Upload Photo or Scan</h5>
                <p className="text-xs text-darkSlate-500 font-medium">
                  {scanMode === 'palm'
                    ? 'Place clear photo of left/right palm'
                    : 'Place clear frontal portrait photo'}
                </p>
              </div>
              <label className="gold-gradient-bg hover:opacity-95 text-white text-xs font-extrabold px-6 py-3 rounded-xl cursor-pointer inline-flex items-center gap-2 active:scale-95 transition-transform shadow-md shadow-amberGold-500/20">
                <i className="fa-solid fa-camera"></i>
                <span>Snap / Choose Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={simulateScan}
                />
              </label>
            </div>

            {isScanning && (
              <div
                id="scanProgressBox"
                className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 z-30"
              >
                <div className="w-12 h-12 border-4 border-amberGold-500 border-t-transparent rounded-full animate-spin"></div>
                <div>
                  <p id="scanProgressText" className="text-sm font-black text-amberGold-800">
                    {progressText}
                  </p>
                  <p className="text-[11px] text-darkSlate-500 font-medium mt-0.5">
                    {scanMode === 'palm'
                      ? 'Mapping Heart, Head, Life & Fate Lines'
                      : 'Analyzing Eye Shape, Forehead Line & Jaw Node'}
                  </p>
                </div>
                <div className="w-full max-w-xs bg-sunshine-200 rounded-full h-2.5 overflow-hidden border border-amberGold-200">
                  <div
                    id="scanProgressBar"
                    style={{ width: progressPercent }}
                    className="bg-gradient-to-r from-amberGold-500 via-amberGold-600 to-mysticLight-purple h-full transition-all duration-300"
                  ></div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={simulateScan}
            className="mt-4 text-xs text-amberGold-700 hover:text-amberGold-800 font-extrabold flex items-center gap-1.5 py-1.5 px-3 rounded-lg hover:bg-amberGold-50 transition-colors"
          >
            <i className="fa-solid fa-wand-magic-sparkles text-amberGold-500"></i>
            <span>Run Sample Demo Scan</span>
          </button>
        </div>

        <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-amberGold-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-amberGold-100 pb-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-square-poll-vertical text-amberGold-600"></i>
              <span className="text-xs font-extrabold text-darkSlate-900 uppercase tracking-wider">
                AI Biometric Analysis Report
              </span>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-black px-2.5 py-1 rounded-full">
              50% Free Preview
            </span>
          </div>

          <div id="scanResultsContainer" className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-amberGold-50/70 border border-amberGold-200 flex gap-3 items-start">
              <div className="w-8 h-8 rounded-xl bg-amberGold-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 shadow-xs">
                ❤️
              </div>
              <div>
                <p className="text-xs font-black text-amberGold-800">Heart &amp; Emotion Line:</p>
                <p className="text-xs text-darkSlate-700 font-medium leading-relaxed mt-0.5">
                  Deep, unbroken curved line reaching Jupiter Mount. Indicates passionate romantic
                  bonds, high emotional empathy, and stable long-term fidelity.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-amberGold-50/70 border border-amberGold-200 flex gap-3 items-start">
              <div className="w-8 h-8 rounded-xl bg-amberGold-500 text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 shadow-xs">
                ⚡
              </div>
              <div>
                <p className="text-xs font-black text-amberGold-800">Wealth Mount &amp; Fate Line:</p>
                <p className="text-xs text-darkSlate-700 font-medium leading-relaxed mt-0.5">
                  Prominent Sun and Mercury mounts indicating business acumen. Strong financial
                  growth spike predicted between <strong>ages 28 to 33</strong>.
                </p>
              </div>
            </div>

            <div className="relative p-5 rounded-2xl bg-gradient-to-r from-sunshine-100 to-amberGold-50 border-2 border-amberGold-300 overflow-hidden text-center space-y-2">
              <div className="filter blur-xs select-none text-[11px] text-darkSlate-400 space-y-1">
                <p>🔒 Marriage Timing &amp; Spouse First Initial: [CONFIDENTIAL VEDIC DATA]</p>
                <p>🔒 Foreign Travel Probability &amp; Lifetime Wealth Milestone Chart</p>
              </div>
              <div className="absolute inset-0 bg-white/85 backdrop-blur-xs flex flex-col items-center justify-center p-4">
                <div className="w-8 h-8 rounded-full bg-amberGold-100 text-amberGold-600 flex items-center justify-center text-sm mb-1 shadow-xs">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <h5 className="text-xs font-black text-darkSlate-900">
                  Unlock Full 12-Page Complete Destiny Report
                </h5>
                <p className="text-[11px] text-darkSlate-600 font-medium mb-2.5">
                  Accurate Marriage Age, Lucky Gemstones &amp; Astrological Remedies
                </p>
                <button
                  onClick={() => setIsWalletModalOpen(true)}
                  className="gold-gradient-bg hover:opacity-95 text-white text-xs font-extrabold px-6 py-2.5 rounded-full active:scale-95 transition-all flex items-center gap-2 shadow-md shadow-amberGold-500/20"
                >
                  <span>Unlock Full PDF for ₹49</span>
                  <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded font-black">
                    50 Coins
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
