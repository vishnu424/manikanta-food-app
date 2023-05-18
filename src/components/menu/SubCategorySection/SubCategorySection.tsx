import { observer } from 'mobx-react-lite';
import { forwardRef, useState } from 'react';

import Button from '@/components/common/Button/Button';
import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import { useStore } from '@/models/root-store';
import { NAV_HEIGHT, SLICED_NUMBER } from '@/shared/constant';

import type { Ref } from '../CategorySection/CategorySection';
import { ProductGrid } from '../ProductGrid/ProductGrid';

export interface ISubCategorySection {
  subCategory: ProductCategoryRecordModelType;
  anchor?: string;
}

export const SubCategorySection = forwardRef<Ref, ISubCategorySection>(
  ({ subCategory, anchor }, ref) => {
    const {
      productStore,
      cartStore: {
        cart: { menuBuilderPlan },
      },
    } = useStore();
    const products =
      productStore.productBySubCategory[subCategory.key as string];
    const quantity = productStore.subCategoryCount(subCategory.key);
    const [showMore, setShowMore] = useState(!!anchor);
    const isRegularMeals = subCategory.key === 'regular-meals';
    const slicedProducts =
      isRegularMeals && !showMore ? products.slice(0, SLICED_NUMBER) : products;

    return (
      <div
        key={subCategory.key}
        id={subCategory.key || ''}
        style={{ scrollMargin: NAV_HEIGHT - 1 }}
        ref={ref}
      >
        {quantity && (
          <div className="mb-6 hidden space-x-2 md:flex">
            <div className="shrink-0">
              <p className="w-full font-jeko text-2xl text-grey-dark">
                {subCategory.name}
              </p>
            </div>
            <div className="mb-1 w-full border-b border-grey-dark"></div>
          </div>
        )}
        <ProductGrid
          key={subCategory.key!}
          products={slicedProducts}
          orderPlan={menuBuilderPlan}
        />
        {isRegularMeals && !showMore && quantity > SLICED_NUMBER && (
          <div className="flex items-center justify-center p-6">
            <Button theme="tertiary" onClick={() => setShowMore(true)}>
              Show all meals
            </Button>
          </div>
        )}
      </div>
    );
  }
);

SubCategorySection.displayName = 'SubCategorySection';

export const ObserverSubCategorySection = observer(SubCategorySection);
