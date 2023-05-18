import { getType, Instance, SnapshotIn } from 'mobx-state-tree';
import { types } from 'mobx-state-tree';
import { getSnapshot } from 'mobx-state-tree';
import { applySnapshot } from 'mobx-state-tree';

const DEFAULT_TOP_FILTER = '';
const DEFAULT_SORT = {
	fieldName: 'name',
	sortDirection: 'ASC',
};

export const SelectedFiltersModel = types
	.model('SelectedFiltersModel')
	.props({
		category: types.optional(types.array(types.string), []),
		range: types.optional(types.array(types.string), []),
		proteinType: types.optional(types.array(types.string), []),
		carbs: types.optional(types.array(types.frozen()), []),
		calories: types.optional(types.array(types.frozen()), []),
		dietary: types.optional(types.array(types.string), []),
		marketingTag: types.optional(types.array(types.string), [JSON.stringify(DEFAULT_TOP_FILTER)]),
	})
	.actions((self) => {
		let initialState = {};

		return {
			afterCreate: () => {
				initialState = getSnapshot(self);
			},
			reset: () => {
				applySnapshot(self, initialState);
			},
			setFilter<K extends keyof SnapshotIn<typeof self>, T extends SnapshotIn<typeof self>>(
				key: K,
				value: T[K],
				checked: boolean,
			) {
				if (checked) {
					const updatedFilter = self[key].filter((v: T[K]) => v !== value);
					self[key] = getType(self[key]).create(updatedFilter);
				} else {
					self[key].push(value);
				}
			},
			setSingleFilter<K extends keyof SnapshotIn<typeof self>, T extends SnapshotIn<typeof self>>(
				key: K,
				value: T[K],
				checked: boolean,
			) {
				if (checked) {
					self[key] = getType(self[key]).create([]);
				} else {
					self[key] = [value];
				}
			},
		};
	});

export type SelectedFiltersModelType = Instance<typeof SelectedFiltersModel>;
export type SelectedFilterKey = keyof SnapshotIn<typeof SelectedFiltersModel>;

export const ProductFilterModel = types
	.model('ProductFilter')
	.props({
		sort: types.optional(types.string, JSON.stringify(DEFAULT_SORT)),
		selectedFilters: types.optional(SelectedFiltersModel, {}),
		isFilterOpen: types.optional(types.boolean, false),
		isSortOpen: types.optional(types.boolean, false),
		currentCategory: types.optional(types.string, ''),
    currentSubCategory: types.optional(types.string, ''),
		filterKeyLookup: types.optional(types.frozen(), {}),
	})
	.actions((self) => ({
		setFilterKeyLookup(lookup: any) {
			self.filterKeyLookup = lookup;
		},
		setSort(sort: string) {
			self.sort = sort;
		},
		setCurrentCategory(category: string) {
			self.currentCategory = category;
		},
    setCurrentSubCategory(subCategory: string) {
			self.currentSubCategory = subCategory;
		},
		clearFilters() {
			const filter = self.selectedFilters;
			self.sort = JSON.stringify(DEFAULT_SORT);
			filter.reset();
		},
		openFilter() {
			self.isFilterOpen = true;
		},
		closeFilter() {
			self.isFilterOpen = false;
		},
		openSort() {
			self.isSortOpen = true;
		},
		closeSort() {
			self.isSortOpen = false;
		},
	}))
	.views((self) => ({
		get filterCount(): number {
			const filter = self.selectedFilters;
			return Object.keys(self.selectedFilters).reduce((acc, key) => {
				if (key === 'marketingTag') {
					return acc;
				}
				// @ts-ignore
				return acc + filter[key].length;
			}, 0);
		},
    get isFiltered(): boolean {
      return this.filterCount > 0 || !self.selectedFilters.marketingTag.includes(JSON.stringify(DEFAULT_TOP_FILTER)) || self.sort !== JSON.stringify(DEFAULT_SORT);
    },
		get currentSort() {
			return JSON.parse(self.sort);
		},
	}));

type ProductFilterType = Instance<typeof ProductFilterModel>;
export interface ProductFilter extends ProductFilterType {}
export type ProductFilterKey = keyof SnapshotIn<typeof ProductFilterModel>;
