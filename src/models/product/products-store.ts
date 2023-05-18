import type { Instance } from 'mobx-state-tree';
import { applySnapshot, flow, types } from 'mobx-state-tree';

import {
	ProductCategory,
	ProductStatus,
	ProductModel,
	ProductModelType,
  ProductSubCategory,
  ProductSubcategoryRecordModelType,
} from '@/models/api';

import { createFilterGraphQLQuery, createSortGraphQLQuery } from '@/utils/api-helpers';

import { withRootStore } from '@/models/helpers/with-root-store';

import { ProductFilterModel } from './filters';
import _ from 'lodash';
import { PRODUCT_SELECTOR } from '@/graphql/selectors';

export const ProductStoreModel = types
	.model('ProductStore')
	.props({
		products: types.optional(types.array(ProductModel), []),
    isLoadingProducts: types.optional(types.boolean, false),
    isFiltering: types.optional(types.boolean, false),
    initialFilter: types.optional(types.boolean, false),
		filteredProducts: types.optional(
			types.array(types.late(() => types.reference(ProductModel))),
			[],
		),
		filters: types.optional(ProductFilterModel, {}),
	})
	.extend(withRootStore)
	.views((self) => ({
		get productsLookup(): Record<string, ProductModelType> {
			return _.keyBy(self.products, 'sku');
		},
    get menuBuilder(): ProductModelType[] {
      return self.products.filter((product: ProductModelType) => {
        if (!product.displaySubCategory) return true;
        for (const subCategory of product.displaySubCategory) {
          if (subCategory === ProductSubCategory.WLP_BUNDLES || subCategory === ProductSubCategory.WLP_SNACKS ) {
            return false;
          }
        }
        return true;
      });
    },
		get productsList(): ProductModelType[] {
      const { filters } = self;
			return self.initialFilter && filters.isFiltered ? self.filteredProducts : this.menuBuilder;
		},
		get productsCount(): number {
			return this.productsList.length;
		},
		get productsByCategory(): Record<ProductCategory, ProductModelType[]> {
			return _.groupBy(this.productsList, 'displayCategory') as Record<
				ProductCategory,
				ProductModelType[]
			>;
		},
		get productBySubCategory(): Record<string, ProductModelType[]> {
      return _.groupBy(this.productsList, (product: ProductModelType) => {
      return product.cms.displaySubcategory!.map((subCategory: ProductSubcategoryRecordModelType) => subCategory.key);
    }) as Record<
				ProductCategory,
				ProductModelType[]
			>;
		},
		get meals(): ProductModelType[] {
			return this.productsByCategory.MEALS;
		},
		get salads(): ProductModelType[] {
			return this.productsByCategory.SALADS;
		},
		get snacks(): ProductModelType[] {
			return this.productsByCategory.SNACKS;
		},
		get soups(): ProductModelType[] {
			return this.productsByCategory.SOUPS;
		},
		get brekkie(): ProductModelType[] {
			return this.productsByCategory.BREKKIE;
		},
		get drinks(): ProductModelType[] {
			return this.productsByCategory.DRINKS;
		},
		categoryCount(category: ProductCategory): number | undefined {
			return this.productsByCategory[category] && this.productsByCategory[category].length;
		},
    subCategoryCount(subCategory: string): number | undefined {
			return this.productBySubCategory[subCategory] && this.productBySubCategory[subCategory]!.length;
		},
	}))
	.actions((self) => ({
		setProducts(products: ProductModelType[]) {
			applySnapshot(self.products, products);
		},
		setFilterdProducts(products: string[]) {
			applySnapshot(self.filteredProducts, products);
		},
		getFilteredProducts: flow(function* () {
			try {
				const { filters } = self;
				const { filterKeyLookup, selectedFilters, sort } = filters;
				const query = createFilterGraphQLQuery(selectedFilters, filterKeyLookup);
        self.isFiltering = true;

				const sortQuery = createSortGraphQLQuery(sort);

				// @ts-ignore
				const response = yield self.rootStore.api.queryProducts(
					{
						where: {
							status: {
								_eq: ProductStatus.ACTIVE,
							},
              displaySubCategory: {
                _nin: [ProductSubCategory.WLP_BUNDLES, ProductSubCategory.WLP_SNACKS]
              },
							...query,
						},
						sort: sortQuery,
						
					},
					'sku',
				).promise;

				const productSkus = response.products.map((product: { sku: string }) => product.sku);
				applySnapshot(self.filteredProducts, productSkus);
        self.initialFilter = true;
        self.isFiltering = false;
			} catch (error) {
				console.log(error);
			}
		}),
    getProducts: flow(function* () {
      try {
        self.isLoadingProducts = true;
        const { products }: { products: ProductModelType[] } = yield self.rootStore.api.queryProducts(
          {
            where: {
              status: {
                _eq: ProductStatus.ACTIVE,
              },
            },
          },
          PRODUCT_SELECTOR
				).promise;
        applySnapshot(self.products, products);
        self.isLoadingProducts = false;
      } catch (error) {
				console.log(error);
			}
    })
	}));

export type ProductStoreType = Instance<typeof ProductStoreModel>;
export interface ProductStore extends ProductStoreType {}
