import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import { SkeletonContainer } from '@/components/skeleton/SkeletonContainer/SkeletonContainer';
import menuBuilderData from '@/mock-data/menu-builder.json';
import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import { useStore } from '@/models/root-store';
import { SetCategoryOnScroll } from '@/utils/helpers';

import { ObserverCategorySection } from '../CategorySection/CategorySection';
import { NoProductFound } from '../NoProductFound/NoProductFound';

export interface IMenuBuilder {
  productCategories: ProductCategoryRecordModelType[];
}

export const MenuBuilder: React.FC<IMenuBuilder> = observer(
  ({ productCategories }) => {
    const store = useStore();
    const router = useRouter();
    const { query } = router;
    const anchor = router.asPath.split('#')[1];
    const {
      productStore: {
        filters,
        isLoadingProducts,
        productsCount,
        isFiltering,
        productsLookup,
      },
      cartStore: { cart },
    } = store;
    const [initialLoad, setInitialLoad] = useState(false);

    const categoryRefs = useRef<(HTMLDivElement | null)[]>(
      new Array(productCategories.length).fill(null)
    );

    useEffect(() => {
      // This is for adding a product to the cart from the URL
      const product = productsLookup[query.addSku as string];
      const quantity =
        cart.menuBuilderPlan?.productQtyBySku[query.addSku as string];
      if (query.addSku && !quantity && product && cart.menuBuilderPlan) {
        cart.menuBuilderPlan.increaseLineItem(product);
      }
    }, [isLoadingProducts, query.addSku]);

    useEffect(() => {
      if (!cart.menuBuilderPlan) {
        cart.initOrderPlan(menuBuilderData);
      }
    }, [cart.menuBuilderPlan]);

    useEffect(() => {
      if (!isLoadingProducts && initialLoad) {
        // This is for anchoring after skeleton loading
        router.push(router.asPath);
      }

      if (isLoadingProducts) {
        setInitialLoad(true);
      }
    }, [isLoadingProducts]);

    SetCategoryOnScroll(categoryRefs, filters.setCurrentCategory);

    if (!productsCount && filters.isFiltered && !isFiltering) {
      return (
        <div className="container">
          <NoProductFound handleClick={filters.openFilter} />
        </div>
      );
    }

    if (isLoadingProducts || !productsCount) {
      return (
        <div className="container">
          <SkeletonContainer />
        </div>
      );
    }

    return (
      <div className="container space-y-6 pb-8 md:space-y-6">
        {productCategories.map((category, i) => (
          <ObserverCategorySection
            key={category.key}
            category={category}
            ref={(el: any) => {
              categoryRefs.current[i] = el;
            }}
            anchor={anchor}
          />
        ))}
      </div>
    );
  }
);
