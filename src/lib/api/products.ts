import { Product, ProductCategory, ProductListResponse } from '@/types/product';

const DUMMY_JSON_BASE_URL = 'https://dummyjson.com';

export interface FetchProductsOptions {
  limit?: number;
  skip?: number;
  category?: string;
  search?: string;
}

/**
 * Fetch a list of products from DummyJSON API
 */
export async function fetchProducts(
  options: FetchProductsOptions = {}
): Promise<ProductListResponse> {
  const { limit = 20, skip = 0, category, search } = options;

  let endpoint = `${DUMMY_JSON_BASE_URL}/products`;

  if (search && search.trim().length > 0) {
    endpoint = `${DUMMY_JSON_BASE_URL}/products/search?q=${encodeURIComponent(
      search.trim()
    )}&limit=${limit}&skip=${skip}`;
  } else if (category && category !== 'all') {
    endpoint = `${DUMMY_JSON_BASE_URL}/products/category/${encodeURIComponent(
      category
    )}?limit=${limit}&skip=${skip}`;
  } else {
    endpoint = `${endpoint}?limit=${limit}&skip=${skip}`;
  }

  const response = await fetch(endpoint, {
    // Next.js fetch caching options
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status} ${response.statusText}`
    );
  }

  const data: ProductListResponse = await response.json();
  return data;
}

/**
 * Fetch a single product by ID from DummyJSON API
 */
export async function fetchProductById(id: string | number): Promise<Product> {
  const response = await fetch(`${DUMMY_JSON_BASE_URL}/products/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Product with ID "${id}" was not found.`);
    }
    throw new Error(
      `Failed to fetch product: ${response.status} ${response.statusText}`
    );
  }

  const data: Product = await response.json();
  return data;
}

/**
 * Fetch product categories from DummyJSON API
 */
export async function fetchCategories(): Promise<ProductCategory[]> {
  const response = await fetch(`${DUMMY_JSON_BASE_URL}/products/categories`, {
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch categories: ${response.status} ${response.statusText}`
    );
  }

  const rawCategories = await response.json();

  // Normalize category response (array of strings or array of objects)
  return rawCategories.map((cat: string | { slug: string; name: string }) => {
    if (typeof cat === 'string') {
      return {
        slug: cat,
        name: cat
          .split('-')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(' '),
      };
    }
    return {
      slug: cat.slug,
      name: cat.name,
    };
  });
}
