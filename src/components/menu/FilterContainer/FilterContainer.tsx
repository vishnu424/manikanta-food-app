import 'react-sliding-pane/dist/react-sliding-pane.css';

import { observer } from 'mobx-react-lite';
import React from 'react';
import SlidingPane from 'react-sliding-pane';

import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import CloseIcon from '@/components/icons/CloseIcon';
import { useMediaQuery } from '@/hooks';
import type {
  FilterRecordModelType,
  FilterSectionRecordModelType,
} from '@/models/api';
import type { SortOptionRecordModelType } from '@/models/api/SortOptionRecordModel';
import type { RootStoreType } from '@/models/root-store';
import { useStore } from '@/models/root-store';
import type {
  HandleFilterSelectionType,
  HandleSortSelectionType,
} from '@/shared/types';

import { FilterList } from '../FilterList/FilterList';
import { InputFieldSort } from '../InputFieldSort/InputFieldSort';

type FiltersContainerProps = {
  filtersData: FilterRecordModelType;
  sortCmsData: SortOptionRecordModelType[];
  store?: RootStoreType;
};

type ModalFooterProps = {
  onSave?: () => void;
  onClear?: () => void;
  value: string;
};

const ModalFooter: React.FC<ModalFooterProps> = ({
  onClear,
  onSave,
  value,
}) => {
  return (
    <div className="flex items-center justify-between">
      <span className="cursor-pointer text-blueberry" onClick={onClear}>
        Clear Filters
      </span>
      <Button theme="primary" onClick={onSave}>
        {value}
      </Button>
    </div>
  );
};

export const FiltersContainer: React.FC<FiltersContainerProps> = observer(
  ({ filtersData, sortCmsData }) => {
    const { productStore } = useStore();
    const { filters, productsCount } = productStore;

    const handleFilterSelection: HandleFilterSelectionType = async (
      key,
      value,
      checked
    ) => {
      filters.selectedFilters.setFilter(key, value, checked);
    };

    const handleSortSelection: HandleSortSelectionType = async (value) => {
      filters.setSort(value);
    };

    const handleClearFilters = () => {
      filters.clearFilters();
    };

    const onCloseModel = () => {
      filters.closeFilter();
    };
    const isMobile = useMediaQuery(`(max-width:425px)`);

    return (
      <>
        {isMobile ? (
          <>
            <SlidingPane
              overlayClassName="z-50"
              isOpen={filters.isFilterOpen}
              hideHeader={true}
              from="bottom"
              width="100%"
              onRequestClose={onCloseModel}
              className="mx-auto !h-[auto] max-w-2xl overflow-hidden rounded-2xl
         mobile-425:mx-auto mobile-425:!mt-0 mobile-425:!h-full mobile-425:max-w-none mobile-425:rounded-none"
            >
              <div className="flex items-center justify-between border-b border-grey bg-grey-lite py-4 px-5">
                <h2 className="font-jeko text-base font-bold">Filters</h2>
                <button
                  onClick={onCloseModel}
                  className="grid h-[24px] w-[24px] place-content-center rounded-full border border-black mobile-425:border-none"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="relative px-5 pb-[70px]">
                {filtersData.sections?.map(
                  (filter: FilterSectionRecordModelType, index: number) => {
                    return (
                      <FilterList
                        key={index}
                        name={filter!.name}
                        values={filter.values}
                        handleSelection={handleFilterSelection}
                        displayType={filter.displayType || 'column'}
                      />
                    );
                  }
                )}
              </div>
              <div className="fixed bottom-0 z-20 flex w-full justify-center space-x-4 border-t bg-white px-5 py-4">
                <button
                  className="text-base text-blueberry"
                  onClick={handleClearFilters}
                >
                  Clear Filters
                </button>
                <Button onClick={filters.closeFilter}>
                  Show {productsCount} items
                </Button>
              </div>
            </SlidingPane>
            <SlidingPane
              className="mx-auto !h-[auto] max-w-2xl rounded-2xl
            mobile-425:mx-auto mobile-425:!mt-0 mobile-425:!h-full mobile-425:max-w-none mobile-425:rounded-none
            "
              overlayClassName="z-50"
              isOpen={filters.isSortOpen}
              hideHeader={true}
              from="bottom"
              width="100%"
              onRequestClose={() => filters.closeSort()}
            >
              <div className="flex items-center justify-between border-b border-grey bg-grey-lite py-4 px-5">
                <h2 className="font-jeko text-base font-bold">Sort</h2>
                <button
                  onClick={() => filters.closeSort()}
                  className="grid h-[24px] w-[24px] place-content-center rounded-full border border-black mobile-425:border-none"
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="relative px-5 py-6 mobile-425:py-0">
                <div className="custom-scroll flex h-[53vh] flex-col gap-[18px] overflow-auto mobile-425:h-[90vh] mobile-425:gap-0">
                  {sortCmsData.map((sort: SortOptionRecordModelType) => (
                    <InputFieldSort
                      key={sort.id}
                      dataInput={sort}
                      filtersModel={filters}
                      handleSelection={handleSortSelection}
                      inputType="radio"
                    />
                  ))}
                </div>
              </div>
              <div className="hidden justify-center space-x-4 border-t p-6">
                <button onClick={filters.closeSort}>Close Sort</button>
              </div>
            </SlidingPane>
          </>
        ) : (
          <>
            <Modal
              isOpen={filters.isFilterOpen}
              onRequestClose={onCloseModel}
              headerTitle={'Filters'}
              footerChildren={
                <ModalFooter
                  onClear={handleClearFilters}
                  onSave={filters.closeFilter}
                  value={`Show ${productsCount} items`}
                />
              }
            >
              <div className=" relative  mobile-425:mx-[-8px] mobile-425:py-0">
                <div className="custom-scroll h-[55vh] overflow-auto lg:px-4 mobile-425:h-auto">
                  {filtersData.sections?.map(
                    (filter: FilterSectionRecordModelType, index: number) => {
                      return (
                        <FilterList
                          key={index}
                          name={filter!.name}
                          values={filter.values}
                          handleSelection={handleFilterSelection}
                          displayType={filter.displayType || 'column'}
                        />
                      );
                    }
                  )}
                </div>
              </div>
            </Modal>
            <Modal
              isOpen={filters.isSortOpen}
              onRequestClose={() => filters.closeSort()}
              headerTitle={'Sort'}
            >
              <div className="relative lg:p-3 mobile-425:py-0">
                <div className="custom-scroll flex h-[65vh] flex-col gap-[18px] overflow-auto mobile-425:h-[90vh] mobile-425:gap-0">
                  {sortCmsData.map((sort: SortOptionRecordModelType) => (
                    <InputFieldSort
                      key={sort.id}
                      dataInput={sort}
                      filtersModel={filters}
                      handleSelection={handleSortSelection}
                      inputType="radio"
                    />
                  ))}
                </div>
              </div>
            </Modal>
          </>
        )}
      </>
    );
  }
);
