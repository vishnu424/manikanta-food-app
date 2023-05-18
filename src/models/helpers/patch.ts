import { onPatch } from 'mobx-state-tree';
import * as _ from 'lodash';
import type { ProductFilter } from '@/models/product/filters';

const FILTER_OBSERVER_ATTRIBUTES = ['sort', 'selectedFilters'];
export function onPatchFilter(filter: ProductFilter, callback?: any) {
	return onPatch(filter, (patch) => {
		if (patch.path) {
			const attribute = _.nth(_.split(patch.path, '/'), 1);

			if (attribute && FILTER_OBSERVER_ATTRIBUTES.includes(attribute)) {
				callback();
			}
		}
	});
}
