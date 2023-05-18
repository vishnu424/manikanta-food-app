import { observer } from 'mobx-react-lite';

import type { ProductModelType } from '@/models/api';
import { ProductCategory, ProductStatus } from '@/models/api';
import { useQuery } from '@/models/reactUtils';

export const LazyProductGrid: React.FC<any> = observer(() => {
  const { setQuery, error, loading, data } = useQuery();

  const loadProductCategory = (category: ProductCategory) => {
    setQuery((store) =>
      // @ts-ignore
      store.api.queryProducts({
        where: {
          status: ProductStatus.ACTIVE,
          category,
        },
        limit: 10,
      })
    );
  };

  const products = ((data as any)?.products || []) as ProductModelType[];

  return (
    <div>
      <h2>Lazy Product Grid</h2>
      <div>
        <button
          style={{ border: '1px solid black', padding: 5, margin: 5 }}
          onClick={() => loadProductCategory(ProductCategory.MEALS)}
        >
          Load Meals
        </button>
        <button
          style={{ border: '1px solid black', padding: 5, margin: 5 }}
          onClick={() => loadProductCategory(ProductCategory.SNACKS)}
        >
          Load Snacks
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products.map((product) => (
        <div key={product.sku}>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
});
