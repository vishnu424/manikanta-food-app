import { DataProvider } from '@plasmicapp/loader-nextjs';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

// create hook that fetches product data by slug
export const useFetchProduct = (slug?: string) => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const response = await fetch(
      `https://api-online.mycodechef.com/products/${slug}`
    );
    if (response.ok) {
      const data = await response.json();
      setProduct(data);
    }
  };

  useEffect(() => {
    if (slug) {
      getProduct();
    }
  }, [slug]);

  return product;
};

export function ProductBox(props: {
  children?: ReactNode;
  className?: string;
  productSlug?: string;
}) {
  const { children, className, productSlug } = props;

  const data = useFetchProduct(productSlug);

  return (
    <div className={className}>
      {
        // Make this data available to this subtree via context,
        // with the name "product"
      }
      <DataProvider name="product" data={data}>
        {children}
      </DataProvider>
    </div>
  );
}
