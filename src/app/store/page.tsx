'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import TopStatusBar from '@/components/layout/TopStatusBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Product, ProductCategory } from '@/types/product';
import { fetchProducts, fetchCategories } from '@/lib/api/products';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductGridSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSearch, setActiveSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load categories on mount
  useEffect(() => {
    async function loadCategories() {
      try {
        const catList = await fetchCategories();
        setCategories(catList);
      } catch (err) {
        console.warn('Could not load categories list:', err);
      }
    }
    loadCategories();
  }, []);

  // Fetch products based on filters
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts({
        limit: 28,
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        search: activeSearch || undefined,
      });
      setProducts(data.products || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the cosmic remedy vault. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, activeSearch]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveSearch(searchQuery.trim());
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setActiveSearch('');
  };

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...products];
    switch (sortBy) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return list;
    }
  }, [products, sortBy]);

  return (
    <>
      <div className="sticky top-0 z-40">
        <TopStatusBar />
        <Header />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 min-h-[70vh]">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-darkSlate-500">
          <Link href="/" className="hover:text-amberGold-700 transition-colors flex items-center gap-1">
            <i className="fa-solid fa-house text-[10px]"></i>
            <span>Home</span>
          </Link>
          <span className="text-amberGold-400">/</span>
          <span className="text-darkSlate-900 font-bold">Astro Store</span>
        </nav>

        {/* Hero Banner */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amberGold-600 via-amberGold-500 to-mysticLight-purple p-6 sm:p-10 text-white shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute left-10 top-0 w-48 h-48 bg-amber-300/20 rounded-full blur-xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-black uppercase tracking-wider border border-white/30">
              <span>✨ Certified Vedic Remedies & Mall</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-sm">
              Cosmic Remedies & Sacred Treasures
            </h1>
            <p className="text-white/90 text-xs sm:text-sm font-medium leading-relaxed">
              Explore authentic energized gemstones, celestial fragrances, sacred talismans & healing crystals, blessed by Vedic rituals to align your cosmic vibrations.
            </p>
          </div>
        </section>

        {/* Search, Filter & Sort Controls */}
        <section className="cosmic-card rounded-2xl p-4 sm:p-5 border border-amberGold-200/80 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search remedies, crystals, fragrances..."
                className="w-full pl-10 pr-20 py-2.5 rounded-xl bg-sunshine-50/80 border border-amberGold-200 focus:border-amberGold-500 focus:bg-white text-xs font-semibold text-darkSlate-900 placeholder:text-darkSlate-400 outline-hidden transition-all"
              />
              <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-amberGold-600"></i>
              
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="w-6 h-6 rounded-lg text-darkSlate-400 hover:text-darkSlate-700 flex items-center justify-center text-xs"
                    title="Clear search"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
                <button
                  type="submit"
                  className="px-2.5 py-1.5 rounded-lg bg-amberGold-500 hover:bg-amberGold-600 text-white text-[11px] font-bold transition-colors shadow-2xs"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-700 self-end md:self-auto">
              <label htmlFor="sortSelect" className="text-darkSlate-500 whitespace-nowrap">
                Sort By:
              </label>
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 rounded-xl bg-sunshine-50 border border-amberGold-200 text-darkSlate-800 text-xs font-bold focus:border-amberGold-500 outline-hidden cursor-pointer"
              >
                <option value="featured">Featured Remedies</option>
                <option value="rating-desc">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setActiveSearch('');
                setSearchQuery('');
              }}
              className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amberGold-500 text-white shadow-xs'
                  : 'bg-sunshine-100 hover:bg-amberGold-50 text-darkSlate-700 border border-amberGold-200/80'
              }`}
            >
              ✦ All Remedies
            </button>

            {categories.slice(0, 10).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  setActiveSearch('');
                  setSearchQuery('');
                }}
                className={`px-3.5 py-1.5 rounded-full font-bold whitespace-nowrap capitalize transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-amberGold-500 text-white shadow-xs'
                    : 'bg-sunshine-100 hover:bg-amberGold-50 text-darkSlate-700 border border-amberGold-200/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Filter Indicators */}
          {(activeSearch || selectedCategory !== 'all') && (
            <div className="flex items-center gap-2 pt-2 border-t border-amberGold-100 text-xs text-darkSlate-600">
              <span className="font-semibold">Active filters:</span>
              {selectedCategory !== 'all' && (
                <span className="px-2 py-0.5 rounded-md bg-amberGold-100 text-amberGold-800 font-bold capitalize flex items-center gap-1">
                  Category: {selectedCategory.replace(/-/g, ' ')}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:text-amberGold-900"
                  >
                    ×
                  </button>
                </span>
              )}
              {activeSearch && (
                <span className="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold flex items-center gap-1">
                  Search: &quot;{activeSearch}&quot;
                  <button
                    onClick={handleClearSearch}
                    className="hover:text-purple-900"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  handleClearSearch();
                }}
                className="text-[11px] text-amberGold-700 hover:underline font-bold ml-auto"
              >
                Reset all filters
              </button>
            </div>
          )}
        </section>

        {/* Product Grid Area */}
        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-darkSlate-600">
            <span>
              Showing <span className="text-darkSlate-900 font-black">{sortedProducts.length}</span> remedies & products
            </span>
            <span className="text-amberGold-700 flex items-center gap-1">
              <i className="fa-solid fa-shield-halved text-amberGold-500"></i>
              Safe & Secured Checkout
            </span>
          </div>

          {loading ? (
            <ProductGridSkeleton count={12} />
          ) : error ? (
            <ProductErrorState
              title="Unable to Load Store Catalog"
              message={error}
              onRetry={loadProducts}
              showHomeLink={true}
            />
          ) : (
            <ProductGrid
              products={sortedProducts}
              emptyMessage={`No items found matching "${activeSearch || selectedCategory}". Try searching for another remedy or reset filters.`}
            />
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
