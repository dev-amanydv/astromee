'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductGalleryProps {
  product: Product;
  selectedImage: string;
  onSelectImage: (img: string) => void;
}

export default function ProductGallery({
  product,
  selectedImage,
  onSelectImage,
}: ProductGalleryProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="space-y-4">
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

      {product.images && product.images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {product.images.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              onClick={() => {
                onSelectImage(img);
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
  );
}
