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
import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import { useStore } from '@/models/root-store';

import { Pill } from '../Pill/Pill';

export interface ISubCategorySticky {
  category: ProductCategoryRecordModelType;
  isHidden: boolean;
}

export const SubCategorySticky: React.FC<ISubCategorySticky> = observer(
  ({ category: { name, subcategories }, isHidden }) => {
    const { productStore } = useStore();

    const hidden = isHidden ? 'hidden' : '';

    const isMobileSM = useMediaQuery(`(max-width:375px)`);
    const isMobile = useMediaQuery(`(min-width:376px) and (max-width:425px)`);
    const isTablet = useMediaQuery(`(min-width:426px) and (max-width:1023px`);
    const isDesktopSM = useMediaQuery(
      `(min-width:1024px) and (max-width:1200px`
    );
    const isDesktopLG = useMediaQuery(`(min-width:1201px)`);

    let height;
    let slides;
    if (isMobileSM) {
      height = 30;
      slides = 2;
    } else if (isMobile) {
      height = 25;
      slides = 2;
    } else if (isTablet) {
      height = 25;
      slides = 4;
    } else if (isDesktopSM) {
      height = 25;
      slides = 5;
    } else if (isDesktopLG) {
      height = 20;
      slides = 7;
    }

    // filter out the subcategories that have no products
    const filteredSubCategories = subcategories?.filter((subCategory) => {
      return productStore.subCategoryCount(subCategory.key!) > 0;
    });

    // finds the current subcategory in the filtered subcategories and defaults to 0 if not found
    const subCateogoryIndex =
      filteredSubCategories?.findIndex(
        (subCategory) =>
          subCategory.key === productStore.filters.currentSubCategory
      ) || 0;

    const currentSlide = Math.max(subCateogoryIndex, 0);

    return (
      <div className={`${hidden} flex p-2`}>
        <div className="flex items-center space-x-4">
          <p className="text-2x border-r pr-3 font-jekoBold">{name}</p>
        </div>
        <div className="w-full pl-1">
          {slides && (
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={height || 100}
              totalSlides={subcategories?.length || 0}
              visibleSlides={slides || 0}
              className="relative w-full"
              {...(isMobileSM || isMobile ? { currentSlide } : {})}
            >
              <Slider>
                {filteredSubCategories?.map((subCategory, index) => {
                  return (
                    <Slide key={index} index={index} className="mx-1">
                      <Pill
                        key={subCategory.key}
                        subCategory={subCategory.key}
                        name={subCategory.name}
                        marginBottom={true}
                        isCurrentTarget={currentSlide === index}
                        hasMargin={true}
                        count={productStore.subCategoryCount(subCategory.key!)}
                      />
                    </Slide>
                  );
                })}
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
      </div>
    );
  }
);
