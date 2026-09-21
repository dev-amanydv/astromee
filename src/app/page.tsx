import React from 'react';
import TopStatusBar from '@/components/layout/TopStatusBar';
import Header from '@/components/layout/Header';
import QuickAccessCarousel from '@/components/home/QuickAccessCarousel';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import AstrologersSection from '@/components/home/AstrologersSection';
import FeaturedProductsSection from '@/components/home/FeaturedProductsSection';
import BiometricScanner from '@/components/home/BiometricScanner';
import FlameCalculator from '@/components/home/FlameCalculator';
import KundliSection from '@/components/home/KundliSection';
import HoroscopeSection from '@/components/home/HoroscopeSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-40">
        <TopStatusBar />
        <Header />
      </div>

      <QuickAccessCarousel />

      <main className="w-full max-w-7xl min-w-0 mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-8 sm:space-y-10 overflow-x-hidden">
        <Hero />

        <ServicesSection />

        <AstrologersSection />

        <FeaturedProductsSection />

        <BiometricScanner />

        <div id="interactiveToolsSection" className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full min-w-0">
          <FlameCalculator />
          <KundliSection />
        </div>

        <HoroscopeSection />
      </main>

      <Footer />
    </>
  );
}
