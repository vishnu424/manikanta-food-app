import { observer } from 'mobx-react-lite';
import { forwardRef, useRef } from 'react';

import { CheckDeliveryBanner } from '@/components/checkDelivery/CheckDeliveryBanner/CheckDeliveryBanner';
import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import { useStore } from '@/models/root-store';
import { SetCategoryOnScroll } from '@/utils/helpers';

import { CategoryHeader } from '../CategoryHeader/CategoryHeader';
import { SubCategorySection } from '../SubCategorySection/SubCategorySection';

export interface ICategorySection {
  category: ProductCategoryRecordModelType;
  anchor?: string;
}

export type Ref = HTMLDivElement | null;

export const CategorySection = forwardRef<Ref, ICategorySection>(
  ({ category, anchor }, ref) => {
    const { productStore } = useStore();
    const { filters } = productStore;
    const quantity = productStore.categoryCount(category.key!.toUpperCase());
    const categoryRefs = useRef<(HTMLDivElement | null)[]>(
      new Array(category.subcategories?.length).fill(null)
    );
    SetCategoryOnScroll(categoryRefs, filters.setCurrentSubCategory);
    return (
      <>
        {quantity && (
          <div
            key={category.key}
            id={category.key || ''}
            className="space-y-1 md:space-y-6"
            ref={ref}
          >
            <CategoryHeader category={category} quantity={quantity} />
            {category.subcategories!.map((subCategory, i) => {
              return (
                <SubCategorySection
                  key={subCategory.name}
                  subCategory={subCategory}
                  anchor={anchor}
                  ref={(el: any) => {
                    categoryRefs.current[i] = el;
                  }}
                />
              );
            })}
            {category.name === 'Meals' ? <CheckDeliveryBanner /> : ''}
          </div>
        )}
      </>
    );
  }
);

CategorySection.displayName = 'CategorySection';

export const ObserverCategorySection = observer(CategorySection);
