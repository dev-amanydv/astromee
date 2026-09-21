'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { fetchProducts } from '@/lib/api/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductGridSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';

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
    <section id="cosmicStoreSection" className="space-y-6 pt-4">
      {/* Section Header */}
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
          <h3 className="font-serif text-2xl sm:text-3xl font-black text-darkSlate-900 tracking-tight flex items-center gap-2.5">
            <span>Cosmic Remedies & Sacred Store</span>
          </h3>
          <p className="text-xs sm:text-sm text-darkSlate-600 font-medium mt-1">
            Energised gemstones, spiritual fragrances, celestial decor & astral healing items
          </p>
        </div>

        <Link
          href="/store"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amberGold-50 hover:bg-amberGold-100 border border-amberGold-300 text-amberGold-800 text-xs font-bold transition-all group shadow-2xs self-start sm:self-auto"
        >
          <span>Explore All Products</span>
          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform"></i>
        </Link>
      </div>

      {/* Content Area */}
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

      {/* Trust Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-sunshine-100 via-amberGold-50 to-sunshine-100 border border-amberGold-200 flex flex-wrap items-center justify-around gap-4 text-center">
        <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-800">
          <span className="w-8 h-8 rounded-xl bg-amberGold-100 text-amberGold-700 flex items-center justify-center text-sm shadow-2xs">
            🕉️
          </span>
          <span>100% Vedic Energised</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-800">
          <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm shadow-2xs">
            💎
          </span>
          <span>Certified Natural & Pure</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-800">
          <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-sm shadow-2xs">
            📦
          </span>
          <span>Discreet & Fast Shipping</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-800">
          <span className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-sm shadow-2xs">
            🔮
          </span>
          <span>Astrologer Verified</span>
        </div>
      </div>
    </section>
  );
}
