'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import TopStatusBar from '@/components/layout/TopStatusBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StoreHero from '@/components/store/StoreHero';
import StoreFilterBar from '@/components/store/StoreFilterBar';
import ProductGrid from '@/components/products/ProductGrid';
import { ProductGridSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';
import { Product, ProductCategory } from '@/types/product';
import { fetchProducts, fetchCategories } from '@/lib/api/products';

export default function StorePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSearch, setActiveSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleResetAll = () => {
    setSelectedCategory('all');
    handleClearSearch();
  };

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

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-6 sm:space-y-8 min-h-[70vh]">
        <nav className="flex items-center gap-2 text-xs font-semibold text-darkSlate-500">
          <Link href="/" className="hover:text-amberGold-700 transition-colors flex items-center gap-1">
            <i className="fa-solid fa-house text-[10px]"></i>
            <span>Home</span>
          </Link>
          <span className="text-amberGold-400">/</span>
          <span className="text-darkSlate-900 font-bold">Astro Store</span>
        </nav>

        <StoreHero />

        <StoreFilterBar
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onSearchSubmit={handleSearchSubmit}
          onClearSearch={handleClearSearch}
          sortBy={sortBy}
          onSortByChange={setSortBy}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleClearSearch();
          }}
          activeSearch={activeSearch}
          onResetAll={handleResetAll}
        />

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
