'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import TopStatusBar from '@/components/layout/TopStatusBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGallery from '@/components/products/detail/ProductGallery';
import ProductDetailsInfo from '@/components/products/detail/ProductDetailsInfo';
import ProductReviewsList from '@/components/products/detail/ProductReviewsList';
import { ProductDetailSkeleton } from '@/components/products/ProductSkeleton';
import ProductErrorState from '@/components/products/ProductErrorState';
import { Product } from '@/types/product';
import { fetchProductById } from '@/lib/api/products';
import { useApp } from '@/context/AppContext';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { showToast } = useApp();

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-6 space-y-6 sm:space-y-8 min-h-[70vh]">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
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

        {loading && <ProductDetailSkeleton />}

        {!loading && error && (
          <ProductErrorState
            title="Product Not Found"
            message={error}
            onRetry={loadProduct}
            showHomeLink={true}
          />
        )}

        {!loading && product && (
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <ProductGallery
                product={product}
                selectedImage={selectedImage}
                onSelectImage={setSelectedImage}
              />
              <ProductDetailsInfo
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
                onConsultAstrologer={handleConsultAstrologer}
              />
            </div>

            {product.reviews && product.reviews.length > 0 && (
              <ProductReviewsList
                reviews={product.reviews}
                rating={product.rating}
              />
            )}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
