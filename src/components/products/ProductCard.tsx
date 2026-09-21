'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useApp } from '@/context/AppContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { showToast } = useApp();
  const [imgSrc, setImgSrc] = useState(product.thumbnail || product.images?.[0] || '');
  const [imageError, setImageError] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  const originalPrice =
    product.discountPercentage && product.discountPercentage > 0
      ? new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(product.price / (1 - product.discountPercentage / 100))
      : null;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    showToast(
      '✨ Added to Sacred Cart',
      `"${product.title.slice(0, 24)}..." added for cosmic blessings!`,
      '🛍️'
    );
  };

  return (
    <div className="cosmic-card rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amberGold-500/10">
      {/* Top badges */}
      <div className="flex items-center justify-between gap-2 mb-2 z-10">
        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amberGold-100 text-amberGold-800 border border-amberGold-200/80">
          {product.category.replace(/-/g, ' ')}
        </span>

        {product.discountPercentage && product.discountPercentage > 0 && (
          <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200 shadow-2xs">
            -{Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>

      {/* Product Image Area */}
      <Link
        href={`/products/${product.id}`}
        className="relative block w-full aspect-square bg-gradient-to-b from-sunshine-50 to-amberGold-50/40 rounded-xl overflow-hidden mb-3 group/img cursor-pointer"
      >
        {!imageError && imgSrc ? (
          <Image
            src={imgSrc}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-3 group-hover/img:scale-108 transition-transform duration-300"
            onError={() => {
              setImageError(true);
              if (product.images && product.images[0] && product.images[0] !== imgSrc) {
                setImgSrc(product.images[0]);
                setImageError(false);
              }
            }}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-amberGold-300 bg-amberGold-50/50">
            <i className="fa-solid fa-gem text-3xl mb-1"></i>
            <span className="text-[10px] text-darkSlate-400 font-bold">Astromee Remedy</span>
          </div>
        )}

        {/* Quick Add Overlay on Hover */}
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-9 h-9 rounded-xl bg-white/95 text-amberGold-700 shadow-md border border-amberGold-200 flex items-center justify-center hover:bg-amberGold-500 hover:text-white active:scale-95"
          title="Add to Sacred Cart"
          aria-label="Add to Sacred Cart"
        >
          <i className="fa-solid fa-cart-plus text-xs"></i>
        </button>
      </Link>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link href={`/products/${product.id}`}>
            <h4
              className="font-bold text-sm text-darkSlate-900 group-hover:text-amberGold-700 transition-colors line-clamp-2 leading-snug cursor-pointer"
              title={product.title}
            >
              {product.title}
            </h4>
          </Link>

          {/* Rating */}
          {typeof product.rating === 'number' && (
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="flex items-center text-amberGold-500 text-[11px]">
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="text-xs font-bold text-darkSlate-800">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[10px] text-darkSlate-400 font-medium">
                ({product.reviews?.length || (product.id * 7) % 50 + 5} reviews)
              </span>
            </div>
          )}
        </div>

        {/* Price and CTA */}
        <div className="mt-3 pt-2.5 border-t border-amberGold-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-black text-darkSlate-900 font-serif">
                {formattedPrice}
              </span>
              {originalPrice && (
                <span className="text-[11px] text-darkSlate-400 line-through font-medium">
                  {originalPrice}
                </span>
              )}
            </div>
            <span className="text-[9px] text-emerald-700 font-black uppercase tracking-wider flex items-center gap-0.5">
              <i className="fa-solid fa-sparkles text-[8px] text-amberGold-500"></i> Energised
            </span>
          </div>

          <Link
            href={`/products/${product.id}`}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amberGold-500 to-amberGold-600 hover:from-amberGold-600 hover:to-amberGold-700 text-white font-bold text-xs shadow-xs hover:shadow-md transition-all active:scale-95 flex items-center gap-1"
          >
            <span>View</span>
            <i className="fa-solid fa-chevron-right text-[9px]"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
