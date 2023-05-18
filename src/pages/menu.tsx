import 'react-sliding-pane/dist/react-sliding-pane.css';

import { FiltersContainer } from '@/components/menu/FilterContainer/FilterContainer';
import { FilterNav } from '@/components/menu/Filternav/FilterNav';
import { MenuBuilder } from '@/components/menu/MenuBuilder/MenuBuilder';
import { ViewCartContainer } from '@/components/menu/ViewCartContainer/ViewCartContainer';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { Meta } from '@/layouts/Meta';
import type {
  FilterRecordModelType,
  FilterSectionRecordModelType,
} from '@/models/api';
import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import type { SortOptionRecordModelType } from '@/models/api/SortOptionRecordModel';
import { initializeStore } from '@/models/root-store';
import { Main } from '@/templates/Main';
import type { MenuBuilderData } from '@/utils/api-helpers';
import { getMenuBuilderData } from '@/utils/api-helpers';

type MenuProps = {
  filterCmsData: FilterRecordModelType;
  productCategories: ProductCategoryRecordModelType[];
  sortCmsData: SortOptionRecordModelType[];
  primaryFilter: FilterSectionRecordModelType;
};

const Menu = ({
  filterCmsData,
  primaryFilter,
  sortCmsData,
  productCategories,
}: MenuProps) => {
  const filterButton = {
    name: 'Filters',
    icon: '/assets/images/svg/Filter.svg',
    svg: '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  fill="none"\n  viewBox="0 0 24 24"\n  strokeWidth="1.5"\n  stroke="currentColor"\n  className="h-6 w-6"\n>\n  <path\n    strokeLinecap="round"\n    strokeLinejoin="round"\n    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"\n  />\n</svg>',
  };

  const sortButton = {
    name: 'Sort',
    icon: '/assets/images/svg/Sort.svg',
  };

  const scrollDirection = useScrollDirection();

  return (
    <Main meta={<Meta title="Menu Builder" description="Meals and deals" />}>
      <div>
        <FilterNav
          primaryFilter={primaryFilter}
          filterButton={filterButton}
          sortButton={sortButton}
          productCategories={productCategories}
          filterCmsData={filterCmsData}
          scrollDirection={scrollDirection}
        />
        <MenuBuilder productCategories={productCategories} />
        <ViewCartContainer scrollDirection={scrollDirection} />
      </div>
      <FiltersContainer filtersData={filterCmsData} sortCmsData={sortCmsData} />
    </Main>
  );
};

export async function getStaticProps() {
  const store = initializeStore(null, true);
  const {
    allFiltersCms,
    sortMenuCms,
    allProductCategoriesCms,
  }: MenuBuilderData = await getMenuBuilderData(store);

  const filterCms = allFiltersCms.find(
    (filter: FilterRecordModelType) => filter.key === 'website-main'
  );
  const topFilterCms = allFiltersCms.find(
    (filter: FilterRecordModelType) => filter.key === 'website-top-filter'
  );

  return {
    props: {
      filterCmsData: filterCms,
      // @ts-ignore
      primaryFilter: topFilterCms?.sections?.[0],
      sortCmsData: sortMenuCms.sortOption,
      productCategories: allProductCategoriesCms,
    },
    revalidate: 300,
  };
}

export default Menu;
