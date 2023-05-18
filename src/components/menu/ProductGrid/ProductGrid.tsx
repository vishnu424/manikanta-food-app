import { observer } from 'mobx-react-lite';

import MenuBuilderCard from '@/components/menu/MenuBuilderCard/MenuBuilderCard';
import type { ProductModelType } from '@/models/api';
import type { OrderPlan } from '@/models/cart/order-plan';

export interface IProductGrid {
  products: ProductModelType[] | undefined;
  orderPlan?: OrderPlan;
}

export const ProductGrid: React.FC<IProductGrid> = observer(
  ({ products, orderPlan }) => {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
        {products?.map((product: ProductModelType) => (
          <div key={product.sku}>
            <MenuBuilderCard
              key={product.sku}
              product={product}
              orderPlan={orderPlan}
            />
          </div>
        ))}
      </div>
    );
  }
);
