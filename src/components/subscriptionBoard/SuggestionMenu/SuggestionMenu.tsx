import _ from 'lodash';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React, { useState } from 'react';

import Button from '@/components/common/Button/Button';
import { NutritionInfo } from '@/components/goalbased/Card/NutritionInfo/NutritionInfo';
import { Card } from '@/components/subscriptionBoard/Card/Card';
import items from '@/components/subscriptionBoard/items.json';
import { useMediaQuery } from '@/hooks';

type MenuProps = {
  menuTabs: any;
};

type CardBoxProps = {
  product: any;
};
const CardBox: React.FC<CardBoxProps> = ({ product }) => {
  return (
    <Card
      imageSrc={product.imageUrl}
      title={product?.title}
      price={product?.price}
      productType={product?.type}
      gms={250}
      titleStyle={'h-[44px]'}
      customStyle={true}
      contentDirection="row"
    >
      <div className="mb-2 flex">
        <NutritionInfo
          calories={540}
          protein={45}
          carbs={32}
          fats={28}
          customStyle="bg-white md:bg-off-white"
        />
      </div>
      <div className="flex md:justify-end">
        <Button>
          <div className="font-jekoSemibold text-xs leading-4">
            Add to order
          </div>
        </Button>
      </div>
    </Card>
  );
};

const SuggestionMenu: React.FC<MenuProps> = ({ menuTabs }) => {
  const [list] = useState(items);
  const [activeMenu, setActiveMenu] = useState(menuTabs[0]);

  const mobileDevice = useMediaQuery(`(max-width:320px)`);
  const isMediumDevice = useMediaQuery(
    `(min-width:768px) and (max-width:1023px`
  );
  const isLg = useMediaQuery(`(min-width: 1024px) and (max-width:1279px`);
  const isXL = useMediaQuery(`(min-width: 1280px) and (max-width:1535px`);
  const isXXL = useMediaQuery(`(min-width: 1536px)`);

  let height: any;
  let slides: any;
  if (isMediumDevice) {
    height = 75;
    slides = 1;
  } else if (isLg) {
    height = 52;
    slides = 1;
  } else if (isXL) {
    height = 50;
    slides = 2;
  } else if (isXXL) {
    height = 50;
    slides = 3;
  }

  return (
    <div className="mt-0 md:mt-10">
      <div className="flex border-b border-grey-liter">
        {_.map(menuTabs, (menuItem, i) => (
          <div
            key={i}
            onClick={() => setActiveMenu(menuItem)}
            className={`${
              activeMenu?.id === menuItem.id
                ? 'border-b-4 border-primary2 text-primary2'
                : 'text-grey-dark'
            } ${
              mobileDevice ? 'mr-0 px-1' : 'mr-4 px-2'
            } cursor-pointer pt-2 pb-4 font-jekoBold text-base leading-[18px] last:mr-0 md:mr-1 lg:mr-4 lg:px-3`}
          >
            {menuItem.name}
          </div>
        ))}
      </div>
      <div>
        <div className="hidden w-full flex-row flex-wrap py-6 md:flex">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={height}
            totalSlides={list?.length || 0}
            visibleSlides={slides}
            className="relative w-full"
          >
            <Slider>
              {list.map((product: any, j: number) => {
                return (
                  <Slide
                    key={j}
                    index={j}
                    className="w-2/6 first:ml-0 last:mr-0"
                  >
                    <div className="h-full md:mx-0 lg:mx-4">
                      {_.keys(product).length > 0 && (
                        <CardBox product={product} />
                      )}
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <ButtonBack className="absolute left-[-30px] top-0 h-full disabled:hidden">
              <Image
                src="/assets/icons/next-button.svg"
                alt="Previous icon"
                style={{ transform: 'scaleX(-1)' }}
                width={48}
                height={48}
              />
            </ButtonBack>
            <ButtonNext className="absolute right-[-30px] top-0 h-full disabled:hidden">
              <Image
                src="/assets/icons/next-button.svg"
                alt="Next icon"
                width={48}
                height={48}
              />
            </ButtonNext>
          </CarouselProvider>
        </div>
        <div className={`flex overflow-x-auto py-6 md:hidden`}>
          {list.map((product: any, j: number) => (
            <div className={`mr-4 w-[88%] last:mr-0`} key={j}>
              <CardBox product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SuggestionMenu;
