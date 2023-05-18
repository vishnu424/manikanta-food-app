import {
  FILTER_SELECTOR,
  PRODUCT_CATEGORY_SELECTOR,
  SORT_SELECTOR,
} from '@/graphql/selectors';
import type {
  FilterRecordModelType,
  ProductCategoryRecordModelType,
  SortMenuRecordModelType,
} from '@/models/api';
import type { RootStoreType } from '@/models/root-store';

export type MenuBuilderData = {
  allFiltersCms: FilterRecordModelType[];
  sortMenuCms: SortMenuRecordModelType;
  allProductCategoriesCms: ProductCategoryRecordModelType[];
};

export const getMenuBuilderData = async (
  store: RootStoreType
): Promise<MenuBuilderData> => {
  const { allFiltersCms }: { allFiltersCms: FilterRecordModelType[] } =
    await store.api.queryAllFiltersCms(
      {
        filter: {
          key: { in: ['website-main', 'website-top-filter'] },
        },
      },
      FILTER_SELECTOR
    );

  const { sortMenuCms }: { sortMenuCms: SortMenuRecordModelType } =
    await store.api.querySortMenuCms(
      {
        filter: {
          key: { eq: 'website-product-sort' },
        },
      },
      SORT_SELECTOR
    );

  const {
    allProductCategoriesCms,
  }: { allProductCategoriesCms: ProductCategoryRecordModelType[] } =
    await store.api.queryAllProductCategoriesCms(
      {
        filter: {
          visible: {
            eq: true,
          },
        },
      },
      PRODUCT_CATEGORY_SELECTOR
    );

  return {
    allFiltersCms,
    sortMenuCms,
    allProductCategoriesCms,
  };
};
