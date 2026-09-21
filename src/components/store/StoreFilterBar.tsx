import React from 'react';
import { ProductCategory } from '@/types/product';

interface StoreFilterBarProps {
  searchQuery: string;
  onSearchQueryChange: (val: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onClearSearch: () => void;
  sortBy: string;
  onSortByChange: (val: string) => void;
  categories: ProductCategory[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  activeSearch: string;
  onResetAll: () => void;
}

export default function StoreFilterBar({
  searchQuery,
  onSearchQueryChange,
  onSearchSubmit,
  onClearSearch,
  sortBy,
  onSortByChange,
  categories,
  selectedCategory,
  onSelectCategory,
  activeSearch,
  onResetAll,
}: StoreFilterBarProps) {
  const hasActiveFilters = activeSearch !== '' || selectedCategory !== 'all';

  return (
    <section className="cosmic-card rounded-2xl p-4 sm:p-5 border border-amberGold-200/80 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <form onSubmit={onSearchSubmit} className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchQueryChange(e.target.value)}
            placeholder="Search remedies, crystals, fragrances..."
            className="w-full pl-10 pr-20 py-2.5 rounded-xl bg-sunshine-50/80 border border-amberGold-200 focus:border-amberGold-500 focus:bg-white text-xs font-semibold text-darkSlate-900 placeholder:text-darkSlate-400 focus:outline-none transition-all"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-amberGold-600"></i>

          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {searchQuery && (
              <button
                type="button"
                onClick={onClearSearch}
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

        <div className="flex items-center gap-2 text-xs font-bold text-darkSlate-700 self-end md:self-auto">
          <label htmlFor="sortSelect" className="text-darkSlate-500 whitespace-nowrap">
            Sort By:
          </label>
          <select
            id="sortSelect"
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="px-3 py-2 rounded-xl bg-sunshine-50 border border-amberGold-200 text-darkSlate-800 text-xs font-bold focus:border-amberGold-500 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured Remedies</option>
            <option value="rating-desc">Highest Rated</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
        <button
          onClick={() => onSelectCategory('all')}
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
            onClick={() => onSelectCategory(cat.slug)}
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

      {hasActiveFilters && (
        <div className="flex items-center gap-2 pt-2 border-t border-amberGold-100 text-xs text-darkSlate-600">
          <span className="font-semibold">Active filters:</span>
          {selectedCategory !== 'all' && (
            <span className="px-2 py-0.5 rounded-md bg-amberGold-100 text-amberGold-800 font-bold capitalize flex items-center gap-1">
              Category: {selectedCategory.replace(/-/g, ' ')}
              <button
                onClick={() => onSelectCategory('all')}
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
                onClick={onClearSearch}
                className="hover:text-purple-900"
              >
                ×
              </button>
            </span>
          )}
          <button
            onClick={onResetAll}
            className="text-[11px] text-amberGold-700 hover:underline font-bold ml-auto"
          >
            Reset all filters
          </button>
        </div>
      )}
    </section>
  );
}
