const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export function formatCurrency(amount: number): string {
  return usdFormatter.format(amount);
}

export function calculateOriginalPrice(
  price: number,
  discountPercentage?: number
): string | null {
  if (!discountPercentage || discountPercentage <= 0) {
    return null;
  }
  const original = price / (1 - discountPercentage / 100);
  return usdFormatter.format(original);
}
