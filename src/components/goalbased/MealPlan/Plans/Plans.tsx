import 'pure-react-carousel/dist/react-carousel.es.css';

import _ from 'lodash';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React, { memo, useEffect, useRef } from 'react';
import { HiOutlinePlusCircle } from 'react-icons/hi';

import AddItemBox from '@/components/common/AddItemBox/AddItemBox';
import { Card } from '@/components/goalbased/Card/Card';
import { Delete } from '@/components/goalbased/Card/Delete/Delete';
import { NutritionInfo } from '@/components/goalbased/Card/NutritionInfo/NutritionInfo';
import { Swap } from '@/components/goalbased/Card/Swap/Swap';
import { useMediaQuery } from '@/hooks';
import { SetCategoryOnScroll } from '@/utils/helpers';

type DayProps = {
  active?: any;
  days: any;
  mealItems: any;
  activeDay?: any;
  setDayOnScroll: (data: any) => void;
};

const MealsPlan: React.FC<DayProps> = ({
  active,
  activeDay,
  days,
  mealItems,
  setDayOnScroll,
}) => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(days.length).fill(null)
  );

  SetCategoryOnScroll(categoryRefs, setDayOnScroll, 250);

  const isMdDeviceMin = useMediaQuery(`(min-width:768px)`);
  const isMediumDevice = useMediaQuery(
    `(min-width:768px) and (max-width:1023px`
  );
  const isDesktopSM = useMediaQuery(`(min-width:1024px) and (max-width:1200px`);
  const isDesktopLG = useMediaQuery(
    `(min-width:1201px) and (max-width: 1535px`
  );
  const isXL = useMediaQuery(`(min-width: 1536px)`);

  let height: any;
  let slides: any;
  if (isMediumDevice) {
    height = 164;
    slides = 3;
  } else if (isDesktopSM) {
    height = 165;
    slides = 5;
  } else if (isDesktopLG) {
    height = 152;
    slides = 5;
  } else if (isXL) {
    height = 143;
    slides = 5;
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (isMdDeviceMin) {
      categoryRefs.current[activeDay - 1]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [activeDay]);

  const labelText = (val: any) => {
    const isSnack = val === 1 || val === 3 ? '+ Add Snack' : '+ Add Meal';
    const isBreakFast = val === 0 ? '+ Add Breakfast' : isSnack;
    return isBreakFast;
  };
  return (
    <>
      {_.map(days, (day, i: any) => {
        const itemsList = mealItems
          .filter(
            (rec: { properties: { y: number } }) =>
              _.keys(rec).includes('properties') &&
              _.keys(rec.properties).includes('y') &&
              _.get(rec.properties, 'y', '') === i + 1
          )
          .map((rec: { product: any }) => rec.product);
        return (
          <div
            key={i}
            id={day}
            className={`py-9 ${day !== active && 'hidden md:block'}`}
            ref={(el: any) => {
              categoryRefs.current[i] = el;
            }}
          >
            <div className="flex flex-row justify-between">
              <div className="hidden flex-row items-center md:flex">
                <div className="">
                  <p className="font-jeko text-2xl leading-8">
                    Day <span className="font-jekoBold">0{i + 1}</span>
                  </p>
                </div>
                <div className="flex flex-row items-center pl-6 text-attention">
                  <div className="w-4 ">+</div>
                  <span className="font-jeko  text-base leading-4">
                    Add extra Item
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-row justify-center rounded-3xl bg-rhubarb-lite md:w-auto md:justify-start md:rounded-none md:bg-transparent">
                <div className="my-3 border-r-2 border-grey px-2">
                  <p className="font-jekoBold text-lg	leading-4 text-rhubarb-dark md:text-black">
                    1825 <span className="font-jeko">CAL</span>
                  </p>
                </div>
                <div className="my-3 px-2">
                  <p className="font-jekoBold text-lg leading-4 text-rhubarb-dark md:text-black">
                    135 <span className="font-jeko">P</span>
                  </p>
                </div>
                <div className="my-3 px-2">
                  <p className="font-jekoBold text-lg leading-4 text-rhubarb-dark md:text-black">
                    140 <span className="font-jeko">C</span>
                  </p>
                </div>
                <div className="my-3 px-2">
                  <p className="font-jekoBold text-lg leading-4 text-rhubarb-dark md:text-black">
                    126 <span className="font-jeko">F</span>
                  </p>
                </div>
              </div>
            </div>
            <hr className="hidden md:block" />
            <div className="hidden w-full flex-row flex-wrap py-6 md:flex">
              <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={height}
                totalSlides={itemsList?.length || 0}
                visibleSlides={slides}
                className="relative w-full"
              >
                <Slider>
                  {itemsList.map((product: any, j: number) => {
                    return (
                      <Slide
                        key={j}
                        index={j}
                        className="w-1/6 first:ml-0 last:mr-0"
                      >
                        <div className="mx-4 h-full">
                          {_.keys(product).length > 0 ? (
                            <Card
                              imageSrc={product.imageUrl}
                              title={product.title}
                              price={product.price}
                              productType={product.type}
                              gms={250}
                              titleStyle={'h-[44px]'}
                              customStyle={true}
                            >
                              <div className="mb-2 flex lg:justify-center">
                                <NutritionInfo
                                  calories={540}
                                  protein={45}
                                  carbs={32}
                                  fats={28}
                                />
                              </div>

                              <div className="flex justify-end">
                                <Delete />
                                <Swap />
                              </div>
                            </Card>
                          ) : (
                            <AddItemBox label={labelText(j)} />
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
            <div className="md:hidden">
              {itemsList.map((product: any, j: number) => {
                return (
                  <div className="my-4" key={j}>
                    {_.keys(product).length > 0 ? (
                      <Card
                        imageSrc={product.imageUrl}
                        title={product.title}
                        price={product.price}
                        productType={product.type}
                        gms={250}
                      >
                        <div className="mb-2 flex lg:justify-center">
                          <NutritionInfo
                            calories={540}
                            protein={45}
                            carbs={32}
                            fats={28}
                          />
                        </div>
                        <div className="absolute bottom-1 right-1 flex">
                          <Delete />
                          <Swap />
                        </div>
                      </Card>
                    ) : (
                      <AddItemBox label={labelText(j)} />
                    )}
                  </div>
                );
              })}
            </div>
            <button
              className={`mt-1 flex w-full items-center justify-center rounded-xl bg-grey-liter py-5 font-jekoSemibold	text-base leading-4 ${
                day !== active ? 'hidden md:hidden' : 'block md:hidden'
              }`}
            >
              Add an extra item
              <span className="pl-3">
                <HiOutlinePlusCircle />
              </span>
            </button>
          </div>
        );
      })}
    </>
  );
};

export default memo(MealsPlan);
