import { Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import { applySnapshot, types } from 'mobx-state-tree';
import { createHttpClient, MSTGQLStore, withTypedRefs } from 'mst-gql';
import { useMemo } from 'react';

import { RootStore as ApiRootStore } from './api/RootStore';
import type { RootStoreType as ApiRootStoreType } from '@/models/api/RootStore';
import { ProductStoreModel } from './product/products-store';
import { CartStoreModel } from './cart/cart-store';
import { CustomerStoreModel } from './customer/customer-store';
import { GeneralStoreModel } from './general/general-store';

import type { ProductStoreType } from '@/models/product/products-store';
import { ObservableMap } from 'mobx';
import * as _ from 'lodash';
import { onPatchFilter } from '@/models/helpers/patch';
import type { CartStoreType } from '@/models/cart/cart-store';

let store: RootStoreType;
type Refs = {
	productStore: ObservableMap<string, ProductStoreType>;
	api: ObservableMap<string, ApiRootStoreType>;
	cartStore: ObservableMap<string, CartStoreType>;
};

export const RootStore: any = withTypedRefs<Refs>()(
  MSTGQLStore.named('RootStore').props({
    productStore: types.optional(ProductStoreModel, {}),
    generalStore: types.optional(GeneralStoreModel, {}),
    cartStore: types.optional(CartStoreModel, {}),
    customerStore: types.optional(CustomerStoreModel, {}),
    api: types.optional(ApiRootStore, {}),
  })
);

export function initializeStore(snapshot = null, ssr = false) {
	const nextStore =
		store ??
		RootStore.create(
			{},
			{
				gqlHttpClient: createHttpClient(
					'https://api-b2c.mycodechef.com/v1/graphql',
          { 
            credentials: 'include'
          },
				),
				ssr,
			},
		);

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here
	if (snapshot) {
		applySnapshot(nextStore, snapshot);
	}
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return nextStore;
	// Create the store once in the client
	if (!store) {
		store = nextStore;

		onPatchFilter(store.productStore.filters, _.debounce(() => store.productStore.getFilteredProducts(), 100));

		// onAction(store, (call) => {
			// console.info('Action was called:', call);
		// });

    // async load of all the products
    store.productStore.getProducts();

    if (!ssr) {
      store.customerStore.loadCustomer();
    }
  }

	return store;
}

export function useStore(initialState: any = null, ssr = false) {
	const memoStore = useMemo(() => initializeStore(initialState, ssr), [initialState]);
	return memoStore;
}

// export type RootStoreType = typeof RootStore
export interface RootStoreType extends Instance<typeof RootStore> {}

export type RootStoreSnapshotIn = SnapshotIn<RootStoreType>;
export type RootStoreSnapshotOut = SnapshotOut<RootStoreType>;
