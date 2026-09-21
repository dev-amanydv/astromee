import React from 'react';
import { ProductReview } from '@/types/product';

interface ProductReviewsListProps {
  reviews: ProductReview[];
  rating?: number;
}

export default function ProductReviewsList({
  reviews,
  rating,
}: ProductReviewsListProps) {
  if (!reviews || reviews.length === 0) return null;

  const averageRating = rating ? rating.toFixed(1) : '4.8';

  return (
    <section className="cosmic-card rounded-3xl p-4 sm:p-8 border border-amberGold-200/80 space-y-6">
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
            {averageRating} / 5.0
          </div>
          <div className="text-[10px] text-darkSlate-500 font-bold">
            {reviews.length} Verified Reviews
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((rev, idx) => (
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
  );
}
