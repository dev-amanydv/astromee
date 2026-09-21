'use client';

import React from 'react';
import { Product } from '@/types/product';
import { formatCurrency, calculateOriginalPrice } from '@/lib/utils/formatters';

interface ProductDetailsInfoProps {
  product: Product;
  onAddToCart: () => void;
  onBuyNow: () => void;
  onConsultAstrologer: () => void;
}

export default function ProductDetailsInfo({
  product,
  onAddToCart,
  onBuyNow,
  onConsultAstrologer,
}: ProductDetailsInfoProps) {
  const formattedPrice = formatCurrency(product.price);
  const originalPrice = calculateOriginalPrice(product.price, product.discountPercentage);
  const discountRound = product.discountPercentage ? Math.round(product.discountPercentage) : 0;
  const formattedCategory = product.category.replace(/-/g, ' ');
  const reviewCount = product.reviews?.length || 18;
  const ratingText = product.rating ? product.rating.toFixed(1) : '4.8';
  const stockCount = product.stock || 25;

  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="px-2.5 sm:px-3 py-1 rounded-full bg-amberGold-100 text-amberGold-800 text-[11px] sm:text-xs font-black uppercase tracking-wider border border-amberGold-200">
          {formattedCategory}
        </span>
        {product.brand && (
          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-[11px] sm:text-xs font-bold border border-purple-200">
            Brand: {product.brand}
          </span>
        )}
        <span className="px-2 sm:px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
          ✦ Vedic Certified
        </span>
      </div>

      <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-darkSlate-900 leading-tight">
        {product.title}
      </h1>

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <div className="flex items-center gap-1 bg-amberGold-500 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-2xs">
          <span>{ratingText}</span>
          <i className="fa-solid fa-star text-[10px]"></i>
        </div>
        <span className="text-xs text-darkSlate-600 font-semibold">
          Based on {reviewCount} ratings
        </span>
        <span className="hidden sm:inline text-amberGold-400">•</span>
        <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
          <i className="fa-solid fa-check-circle"></i> In Stock ({stockCount} units)
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-gradient-to-r from-sunshine-50 to-amberGold-50/50 border border-amberGold-200 space-y-1">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-3xl font-black text-darkSlate-900">
            {formattedPrice}
          </span>
          {originalPrice && (
            <span className="text-base text-darkSlate-400 line-through font-semibold">
              {originalPrice}
            </span>
          )}
          {discountRound > 0 && (
            <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              Save {discountRound}%
            </span>
          )}
        </div>
        <p className="text-[11px] text-darkSlate-500">
          Inclusive of all astrological consecration & protective packaging taxes.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-xs uppercase tracking-wider text-darkSlate-400">
          Cosmic Significance & Description
        </h4>
        <p className="text-xs sm:text-sm text-darkSlate-700 leading-relaxed font-medium">
          {product.description}
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={onAddToCart}
            className="py-3.5 px-6 rounded-2xl bg-white hover:bg-amberGold-50 text-darkSlate-900 border-2 border-amberGold-400 font-bold text-xs sm:text-sm shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-cart-plus text-amberGold-600"></i>
            <span>Add to Sacred Cart</span>
          </button>

          <button
            onClick={onBuyNow}
            className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amberGold-500 to-amberGold-600 hover:from-amberGold-600 hover:to-amberGold-700 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-bolt text-xs"></i>
            <span>Buy Remedy Now</span>
          </button>
        </div>

        <button
          onClick={onConsultAstrologer}
          className="w-full py-3 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs group"
        >
          <i className="fa-solid fa-headset text-purple-600 group-hover:scale-110 transition-transform"></i>
          <span>Consult an Astrologer Before Ordering This Remedy (₹1/min)</span>
        </button>
      </div>

      <div className="pt-4 border-t border-amberGold-100 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
        <div className="p-2.5 rounded-xl bg-sunshine-50 border border-amberGold-100">
          <div className="text-amberGold-700 font-bold mb-0.5 flex items-center gap-1">
            <i className="fa-solid fa-truck-fast"></i> Shipping
          </div>
          <div className="text-[11px] text-darkSlate-600 font-medium">
            {product.shippingInformation || 'Dispatched in 2-4 days'}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-sunshine-50 border border-amberGold-100">
          <div className="text-amberGold-700 font-bold mb-0.5 flex items-center gap-1">
            <i className="fa-solid fa-shield-halved"></i> Warranty
          </div>
          <div className="text-[11px] text-darkSlate-600 font-medium">
            {product.warrantyInformation || 'Authenticity Guaranteed'}
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-sunshine-50 border border-amberGold-100 col-span-2 sm:col-span-1">
          <div className="text-amberGold-700 font-bold mb-0.5 flex items-center gap-1">
            <i className="fa-solid fa-rotate-left"></i> Returns
          </div>
          <div className="text-[11px] text-darkSlate-600 font-medium">
            {product.returnPolicy || '7-Day Return Policy'}
          </div>
        </div>
      </div>
    </div>
  );
}
