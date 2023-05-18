import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

import type { ScrollDirection } from '@/hooks/useScrollDirection';
import { useScrollYPosition } from '@/hooks/useScrollYPosition';
import type {
  FilterRecordModelType,
  FilterSectionRecordModelType,
  ProductCategoryRecordModelType,
} from '@/models/api';
import type { RootStoreType } from '@/models/root-store';
import { useStore } from '@/models/root-store';
import { createFilterLookup } from '@/utils/api-helpers';

import FilterButton from '../Filterbutton/FilterButton';
import PrimaryFilterContainer from '../PrimaryFilterContainer/PrimaryFilterContainer';
import { SubCategorySticky } from '../SubCategorySticky/SubCategorySticky';

export type FilterNavProps = {
  primaryFilter: FilterSectionRecordModelType;
  productCategories: ProductCategoryRecordModelType[];
  filterButton: any;
  sortButton: any;
  store?: RootStoreType;
  initialState?: RootStoreType;
  filterCmsData: FilterRecordModelType;
  scrollDirection: ScrollDirection;
};

export const FilterNav: React.FC<FilterNavProps> = observer(
  ({
    primaryFilter,
    filterButton,
    sortButton,
    productCategories,
    filterCmsData,
    scrollDirection,
  }) => {
    const { productStore } = useStore();
    const { filters } = productStore;

    const combinedFilters = JSON.parse(JSON.stringify(filterCmsData.sections));
    combinedFilters.push(primaryFilter);
    useEffect(() => {
      const filterKeyLookup =
        filterCmsData && createFilterLookup(combinedFilters);
      productStore.filters.setFilterKeyLookup(filterKeyLookup);
    }, []);

    const scrollYPosition = useScrollYPosition();

    const isHidden =
      scrollDirection === 'down' && scrollYPosition > 500
        ? 'hidden'
        : 'flex flex-col md:flex-row';
    return (
      <div id="filter-nav" className="sticky top-0 z-20 mb-2 shadow-md">
        <div id="filter-nav" className="bg-white md:container md:mb-6">
          <div className="flex flex-col">
            <div className={`${isHidden} justify-between`}>
              <PrimaryFilterContainer
                primaryFilter={primaryFilter}
                filters={filters}
              />
              <div className="flex items-center md:space-x-3">
                <FilterButton
                  text={filterButton.name}
                  number={filters.filterCount}
                  icon={filterButton.icon}
                  altText="Filter"
                  handleClick={filters.openFilter}
                  svg={filterButton.svg}
                />
                <FilterButton
                  text={sortButton.name}
                  icon={sortButton.icon}
                  altText="Filter"
                  handleClick={filters.openSort}
                />
              </div>
            </div>
            {productCategories.map(
              (category: ProductCategoryRecordModelType) => (
                <SubCategorySticky
                  key={category.key}
                  category={category}
                  isHidden={filters.currentCategory !== category.key}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
);
