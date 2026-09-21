import React from 'react';

export function ProductCardSkeleton() {
  return (
    <div className="cosmic-card rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between animate-pulse">
=      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="h-4 w-16 bg-amberGold-100/70 rounded-full"></div>
        <div className="h-4 w-12 bg-rose-100/70 rounded-full"></div>
      </div>

      <div className="w-full aspect-square bg-gradient-to-b from-sunshine-200 to-amberGold-100/60 rounded-xl mb-3 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-amberGold-200/50"></div>
      </div>

      <div className="space-y-2 mb-3">
        <div className="h-4 w-4/5 bg-sunshine-300 rounded"></div>
        <div className="h-3 w-3/5 bg-sunshine-200 rounded"></div>
        <div className="h-3 w-2/5 bg-amberGold-100 rounded"></div>
      </div>

      <div className="mt-3 pt-2.5 border-t border-amberGold-100 flex items-center justify-between">
        <div className="h-5 w-14 bg-sunshine-300 rounded"></div>
        <div className="h-7 w-16 bg-amberGold-300/80 rounded-xl"></div>
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, idx) => (
        <ProductCardSkeleton key={`skeleton-${idx}`} />
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="animate-pulse space-y-8 max-w-6xl mx-auto py-8">
      <div className="h-4 w-48 bg-amberGold-100 rounded-md"></div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-4">
          <div className="w-full aspect-square bg-gradient-to-b from-sunshine-200 to-amberGold-100/60 rounded-2xl"></div>
          <div className="flex gap-3">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="w-16 h-16 rounded-xl bg-sunshine-200"
              ></div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="h-6 w-24 bg-amberGold-100 rounded-full"></div>
          <div className="h-8 w-4/5 bg-sunshine-300 rounded"></div>
          <div className="h-4 w-32 bg-amberGold-100 rounded"></div>
          <div className="h-10 w-40 bg-sunshine-300 rounded"></div>
          <div className="space-y-2 pt-4 border-t border-amberGold-100">
            <div className="h-4 w-full bg-sunshine-200 rounded"></div>
            <div className="h-4 w-5/6 bg-sunshine-200 rounded"></div>
            <div className="h-4 w-4/6 bg-sunshine-200 rounded"></div>
          </div>
          <div className="pt-6 flex gap-4">
            <div className="h-12 w-40 bg-amberGold-400/80 rounded-2xl"></div>
            <div className="h-12 w-40 bg-sunshine-300 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
