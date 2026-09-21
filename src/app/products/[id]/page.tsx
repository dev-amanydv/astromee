'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import TopStatusBar from '@/components/layout/TopStatusBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Product } from '@/types/product';
import { fetchProductById } from '@/lib/api/products';
import { ProductDetailSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';
import { useApp } from '@/context/AppContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { showToast, setIsWalletModalOpen } = useApp();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  const productId = params?.id as string;

  const loadProduct = useCallback(async () => {
    if (!productId) return;
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProductById(productId);
      setProduct(data);
      const mainImg = data.images?.[0] || data.thumbnail || '';
      setSelectedImage(mainImg);
    } catch (err) {
      console.error('Error loading product details:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Could not find or retrieve this cosmic remedy.'
      );
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  const handleAddToCart = () => {
    if (!product) return;
    showToast(
      '🛍️ Added to Sacred Cart',
      `"${product.title.slice(0, 26)}..." has been added to your order!`,
      '✨'
    );
  };

  const handleBuyNow = () => {
    if (!product) return;
    showToast(
      '⚡ Preparing Sacred Order',
      'Connecting with Vedic fulfillment partners for energized delivery...',
      '🕉️'
    );
  };

  const handleConsultAstrologer = () => {
    showToast(
      '🔮 Astrologer Remedy Consultation',
      'Matching you with our senior Vedic gemstone & remedial astrologer...',
      '✨'
    );
    router.push('/#astrologersSection');
  };

  return (
    <>
      <div className="sticky top-0 z-40">
        <TopStatusBar />
        <Header />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 min-h-[70vh]">
        {/* Navigation / Breadcrumb */}
        <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-darkSlate-500 overflow-x-auto no-scrollbar">
            <Link href="/" className="hover:text-amberGold-700 transition-colors flex items-center gap-1">
              <i className="fa-solid fa-house text-[10px]"></i>
              <span>Home</span>
            </Link>
            <span className="text-amberGold-400">/</span>
            <Link href="/store" className="hover:text-amberGold-700 transition-colors">
              Astro Store
            </Link>
            <span className="text-amberGold-400">/</span>
            <span className="text-darkSlate-900 font-bold truncate max-w-[200px] sm:max-w-md">
              {product ? product.title : 'Remedy Details'}
            </span>
          </nav>

          <Link
            href="/store"
            className="text-xs font-bold text-amberGold-700 hover:text-amberGold-800 flex items-center gap-1.5 shrink-0"
          >
            <i className="fa-solid fa-arrow-left text-[10px]"></i>
            <span>Back to Store</span>
          </Link>
        </div>

        {/* Loading State */}
        {loading && <ProductDetailSkeleton />}

        {/* Error State */}
        {!loading && error && (
          <ProductErrorState
            title="Product Not Found"
            message={error}
            onRetry={loadProduct}
            showHomeLink={true}
          />
        )}

        {/* Product Details Content */}
        {!loading && product && (
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Image Gallery Column */}
              <div className="space-y-4">
                {/* Main Large Display */}
                <div className="cosmic-card relative aspect-square w-full rounded-3xl overflow-hidden bg-gradient-to-b from-sunshine-50 via-amberGold-50/20 to-white border border-amberGold-200/90 shadow-md flex items-center justify-center p-6">
                  {selectedImage && !imageError ? (
                    <Image
                      src={selectedImage}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain p-6 transition-all duration-300"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="text-center text-amberGold-400">
                      <i className="fa-solid fa-gem text-5xl mb-2"></i>
                      <p className="text-xs font-bold text-darkSlate-500">
                        Energised Cosmic Remedy
                      </p>
                    </div>
                  )}

                  {product.discountPercentage && product.discountPercentage > 0 && (
                    <div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-black px-2.5 py-1 rounded-full shadow-md">
                      {Math.round(product.discountPercentage)}% OFF
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-amberGold-100/90 backdrop-blur-xs text-amberGold-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amberGold-200/80">
                    {product.availabilityStatus || 'Available'}
                  </div>
                </div>

                {/* Thumbnail Selector */}
                {product.images && product.images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
                    {product.images.map((img, idx) => (
                      <button
                        key={`${img}-${idx}`}
                        onClick={() => {
                          setSelectedImage(img);
                          setImageError(false);
                        }}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-sunshine-50 ${
                          selectedImage === img
                            ? 'border-amberGold-500 ring-2 ring-amberGold-400/30 scale-105'
                            : 'border-amberGold-200/70 hover:border-amberGold-400 opacity-80 hover:opacity-100'
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${product.title} view ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-contain p-1.5"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info Column */}
              <div className="space-y-6">
                {/* Category & Brand Pills */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-amberGold-100 text-amberGold-800 text-xs font-black uppercase tracking-wider border border-amberGold-200">
                    {product.category.replace(/-/g, ' ')}
                  </span>
                  {product.brand && (
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold border border-purple-200">
                      Brand: {product.brand}
                    </span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-black uppercase tracking-wider">
                    ✦ Vedic Certified
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-darkSlate-900 leading-tight">
                  {product.title}
                </h1>

                {/* Rating & Reviews overview */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-amberGold-500 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-2xs">
                    <span>{product.rating ? product.rating.toFixed(1) : '4.8'}</span>
                    <i className="fa-solid fa-star text-[10px]"></i>
                  </div>
                  <span className="text-xs text-darkSlate-600 font-semibold">
                    Based on {product.reviews?.length || 18} verified buyer ratings
                  </span>
                  <span className="text-amberGold-400">•</span>
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <i className="fa-solid fa-check-circle"></i> In Stock ({product.stock || 25} units)
                  </span>
                </div>

                {/* Pricing Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-sunshine-50 to-amberGold-50/50 border border-amberGold-200 space-y-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-3xl font-black text-darkSlate-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.discountPercentage && product.discountPercentage > 0 && (
                      <span className="text-base text-darkSlate-400 line-through font-semibold">
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                    {product.discountPercentage && (
                      <span className="text-xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                        Save {Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-darkSlate-500">
                    Inclusive of all astrological consecration & protective packaging taxes.
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-darkSlate-400">
                    Cosmic Significance & Description
                  </h4>
                  <p className="text-xs sm:text-sm text-darkSlate-700 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="py-3.5 px-6 rounded-2xl bg-white hover:bg-amberGold-50 text-darkSlate-900 border-2 border-amberGold-400 font-bold text-xs sm:text-sm shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-cart-plus text-amberGold-600"></i>
                      <span>Add to Sacred Cart</span>
                    </button>

                    <button
                      onClick={handleBuyNow}
                      className="py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amberGold-500 to-amberGold-600 hover:from-amberGold-600 hover:to-amberGold-700 text-white font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-bolt text-xs"></i>
                      <span>Buy Remedy Now</span>
                    </button>
                  </div>

                  {/* Consult Astrologer CTA */}
                  <button
                    onClick={handleConsultAstrologer}
                    className="w-full py-3 px-4 rounded-2xl bg-purple-50 hover:bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs group"
                  >
                    <i className="fa-solid fa-headset text-purple-600 group-hover:scale-110 transition-transform"></i>
                    <span>Consult an Astrologer Before Ordering This Remedy (₹1/min)</span>
                  </button>
                </div>

                {/* Remedy Guarantee & Policies */}
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
            </div>

            {/* Customer Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <section className="cosmic-card rounded-3xl p-6 sm:p-8 border border-amberGold-200/80 space-y-6">
                <div className="flex items-center justify-between border-b border-amberGold-100 pb-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-darkSlate-900">
                      Seeker Reviews & Blessings
                    </h3>
                    <p className="text-xs text-darkSlate-600 font-medium mt-0.5">
                      Verified feedback from practitioners and spiritual seekers
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-serif font-black text-amberGold-700">
                      {product.rating ? product.rating.toFixed(1) : '4.8'} / 5.0
                    </div>
                    <div className="text-[10px] text-darkSlate-500 font-bold">
                      {product.reviews.length} Verified Reviews
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.reviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-sunshine-50/70 border border-amberGold-200/70 space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-amberGold-500 text-xs">
                            {Array.from({ length: 5 }).map((_, sIdx) => (
                              <i
                                key={sIdx}
                                className={`fa-solid fa-star ${
                                  sIdx < rev.rating ? 'text-amberGold-500' : 'text-amberGold-200'
                                }`}
                              ></i>
                            ))}
                          </div>
                          <span className="text-[10px] text-darkSlate-400 font-medium">
                            {new Date(rev.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs text-darkSlate-700 italic font-medium leading-relaxed">
                          &quot;{rev.comment}&quot;
                        </p>
                      </div>

                      <div className="pt-2 border-t border-amberGold-100/60 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amberGold-200 text-amberGold-800 flex items-center justify-center font-bold text-[10px]">
                          {rev.reviewerName.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-darkSlate-800">
                          {rev.reviewerName}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
