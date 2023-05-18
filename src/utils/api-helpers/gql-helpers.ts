import type { FilterSectionRecordModelType } from '@/models/api';
import type { SelectedFiltersModelType } from '@/models/product/filters';

export type FilterLookup = {
  singleKey: string;
  multiKey: string;
};

export const createFilterLookup = (combinedFilters: any) => {
  const filterLookup: Record<string, FilterLookup> = {};

  combinedFilters?.forEach((value: FilterSectionRecordModelType) => {
    // @ts-ignore
    const filter = value.values[0];
    const subFilter = filter.subValues[0];
    filterLookup[filter.key] = {
      singleKey: filter.singleKey,
      multiKey: filter.multiKey,
    };
    if (subFilter) {
      filterLookup[subFilter.key] = {
        singleKey: subFilter.singleKey,
        multiKey: subFilter.multiKey,
      };
    }
  });
  return filterLookup;
};

export const createFilterGraphQLQuery = (
  filters: SelectedFiltersModelType,
  filterKeyLookup: Record<keyof SelectedFiltersModelType, FilterLookup>
): Record<keyof SelectedFiltersModelType, any> => {
  const query = {} as Record<keyof SelectedFiltersModelType, any>;
  const filterKeys = Object.keys(filters) as (keyof SelectedFiltersModelType)[];

  filterKeys.forEach((key) => {
    let operator;
    const values = filters[key];
    const parsedValues = values
      .map((value: string) => JSON.parse(value))
      .filter((value: string) => value !== '');

    if (!parsedValues.length) {
      return;
    }

    if (parsedValues.length > 1) {
      operator = filterKeyLookup[key].multiKey;
      query[key] = {
        [operator]: parsedValues,
      };
      return;
    }
    operator = filterKeyLookup[key].singleKey;
    query[key] = {
      ...(operator && { [operator]: parsedValues[0] }),
      ...(!operator && parsedValues[0]),
    };
  });
  return query;
};

export const createSortGraphQLQuery = (sort: string) => {
  const parsedData = JSON.parse(sort);
  if (Array.isArray(parsedData)) {
    return parsedData;
  }
  return [parsedData];
};
