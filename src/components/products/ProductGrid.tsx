'use client';

import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = 'No remedies or products found matching your criteria.',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="cosmic-card rounded-2xl p-12 text-center my-6 border border-amberGold-200">
        <div className="w-14 h-14 rounded-2xl bg-amberGold-100 text-amberGold-600 flex items-center justify-center mx-auto mb-3 text-xl">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <h4 className="font-bold text-darkSlate-900 text-base mb-1">
          No Products Found
        </h4>
        <p className="text-xs text-darkSlate-500 max-w-sm mx-auto">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
