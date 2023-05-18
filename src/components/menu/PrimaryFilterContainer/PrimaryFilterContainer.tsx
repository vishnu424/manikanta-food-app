import 'pure-react-carousel/dist/react-carousel.es.css';

import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';

import { useMediaQuery } from '@/hooks';
import type { FilterSectionRecordModelType } from '@/models/api';
import type {
  ProductFilter,
  SelectedFilterKey,
} from '@/models/product/filters';
import type { HandleFilterSelectionType } from '@/shared/types';

import PrimaryFilterButton from '../PrimaryFilterButton/PrimaryFilterButton';

export type PrimaryFilterContainerProps = {
  primaryFilter: FilterSectionRecordModelType;
  filters: ProductFilter;
};

const PrimaryFilterContainer: React.FC<PrimaryFilterContainerProps> = observer(
  ({ primaryFilter, filters }) => {
    const handleFilterSelection: HandleFilterSelectionType = async (
      key,
      value,
      checked
    ) => {
      filters.selectedFilters.setSingleFilter(
        key as SelectedFilterKey,
        value,
        checked
      );
    };

    const isMobile = useMediaQuery(`(max-width:425px)`);
    const isTablet = useMediaQuery(`(min-width:426px) and (max-width:1023px`);
    const isDesktopSM = useMediaQuery(
      `(min-width:1024px) and (max-width:1200px`
    );
    const isDesktopLG = useMediaQuery(`(min-width:1201px)`);

    let height;
    let slides;
    if (isMobile) {
      height = 45;
      slides = 4;
    } else if (isTablet) {
      height = 50;
      slides = 6;
    } else if (isDesktopSM) {
      height = 50;
      slides = 8;
    } else if (isDesktopLG) {
      height = 52;
      slides = 12;
    }

    return (
      <div className="flex w-full space-x-4 overflow-x-auto border-b p-2 md:block md:w-4/5 md:border-none md:px-0">
        {slides && (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={height || 100}
            totalSlides={primaryFilter.values?.length || 0}
            visibleSlides={slides}
            className="relative w-full"
          >
            <Slider>
              {primaryFilter.values!.map((filter, index) => (
                <Slide key={index} index={index} className="mx-2">
                  <PrimaryFilterButton
                    key={filter.name}
                    value={filter}
                    handleFilterSelection={handleFilterSelection}
                    filtersModel={filters.selectedFilters}
                  />
                </Slide>
              ))}
            </Slider>
            <ButtonBack className="absolute left-0 top-[3px] disabled:hidden lg:top-[6px]">
              <Image
                src="/assets/icons/next-button.svg"
                alt="Previous icon"
                style={{ transform: 'scaleX(-1)' }}
                width={30}
                height={30}
              />
            </ButtonBack>
            <ButtonNext className="absolute right-0 top-[3px] disabled:hidden lg:top-[6px]">
              <Image
                src="/assets/icons/next-button.svg"
                alt="Next icon"
                width={30}
                height={30}
              />
            </ButtonNext>
          </CarouselProvider>
        )}
      </div>
    );
  }
);

export default PrimaryFilterContainer;
