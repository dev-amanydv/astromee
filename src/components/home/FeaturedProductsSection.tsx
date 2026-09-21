'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { fetchProducts } from '@/lib/api/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductGridSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';

interface TrustFeature {
  icon: string;
  label: string;
  bg: string;
  color: string;
}

const TRUST_FEATURES: TrustFeature[] = [
  { icon: '🕉️', label: '100% Vedic Energised', bg: 'bg-amberGold-100', color: 'text-amberGold-700' },
  { icon: '💎', label: 'Certified Natural & Pure', bg: 'bg-emerald-100', color: 'text-emerald-700' },
  { icon: '📦', label: 'Discreet & Fast Shipping', bg: 'bg-purple-100', color: 'text-purple-700' },
  { icon: '🔮', label: 'Astrologer Verified', bg: 'bg-rose-100', color: 'text-rose-700' },
];

export default function FeaturedProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFeaturedProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts({ limit: 8 });
      setProducts(data.products || []);
    } catch (err) {
      console.error('Error fetching featured products:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the cosmic product catalog.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadFeaturedProducts();
  }, [loadFeaturedProducts]);

  return (
    <section id="cosmicStoreSection" className="space-y-6 pt-4 w-full max-w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-amberGold-200/80 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-gradient-to-r from-amberGold-500 to-amberGold-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-2xs">
              ✦ Astromee Mall
            </span>
            <span className="text-[11px] font-bold text-amberGold-800 flex items-center gap-1">
              <i className="fa-solid fa-gem text-amberGold-500"></i>
              Vedic Remedies & Healing
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-3xl font-black text-darkSlate-900 tracking-tight flex items-center gap-2.5">
            <span>Cosmic Remedies & Sacred Store</span>
          </h3>
          <p className="text-xs sm:text-sm text-darkSlate-600 font-medium mt-1">
            Energised gemstones, spiritual fragrances, celestial decor & astral healing items
          </p>
        </div>

        <Link
          href="/store"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-amberGold-50 hover:bg-amberGold-100 border border-amberGold-300 text-amberGold-800 text-xs font-bold transition-all group shadow-2xs self-start sm:self-auto shrink-0"
        >
          <span>Explore All Products</span>
          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform"></i>
        </Link>
      </div>

      {loading ? (
        <ProductGridSkeleton count={8} />
      ) : error ? (
        <ProductErrorState
          title="Could Not Load Cosmic Products"
          message={error}
          onRetry={loadFeaturedProducts}
        />
      ) : (
        <ProductGrid products={products} />
      )}

      <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sunshine-100 via-amberGold-50 to-sunshine-100 border border-amberGold-200 grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-around gap-3 sm:gap-4 w-full min-w-0">
        {TRUST_FEATURES.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[11px] sm:text-xs font-bold text-darkSlate-800">
            <span
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-xs sm:text-sm shadow-2xs shrink-0`}
            >
              {item.icon}
            </span>
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
