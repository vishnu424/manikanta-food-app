/* eslint-disable react/jsx-key */
import 'pure-react-carousel/dist/react-carousel.es.css';

import dayjs from 'dayjs';
import Image from 'next/image';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import React from 'react';

import Button from '@/components/common/Button/Button';
import { useMediaQuery } from '@/hooks';

import Orders from '../orders.json';

type Props = {
  setOrderDetails: (val: boolean) => void;
};

const MyOrders:React.FC<Props> = ({ setOrderDetails }) => {
  const cardContent = (order: any) => {
    return (
      <div className="p-4 md:border border-neutrals-liteGrey text-base rounded-xl shadow-lg md:shadow-none min-h-[100%]">
        <div className="flex justify-between pb-4">
          <div className="font-jekoBold text-base">#{order.id}</div>
          <div className="font-jekoBold  text-success-copy">{order.status}</div>
        </div>
        <div className="font-jekoMedium">
          {dayjs(order.date).format('MMMM D, YYYY')}
        </div>
        <div className="font-jekoBold">${order.cost}</div>
        <div className="flex justify-between pt-4 flex-wrap">
          <button className="font-jekoMedium  text-attention" onClick={() => setOrderDetails(true)}>
            View details
          </button>
          <Button theme="primary" className="text-xs">
            Edit & Reorder
          </Button>
        </div>
      </div>
    );
  };

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
    <div className="my-6 md:my-4">
      <div className="flex justify-between">
        <div className="font-jekoBold text-2xl">My Orders</div>
        <button className="font-jekoMedium text-base text-attention">
          View all
        </button>
      </div>
      <div className="pt-2 font-jekoMedium text-base">
        View your past orders, or start a new order by editing them
      </div>
      <div>
        <div className="hidden w-full flex-row flex-wrap  md:flex">
          {slides && (
            <CarouselProvider
              naturalSlideHeight={height || 100}
              naturalSlideWidth={100}
              totalSlides={Orders.length}
              visibleSlides={slides}
              className="relative w-full"
            >
              <Slider>
                <div className="flex space-x-4 mt-4">
                  {Orders.map((order: any, index: number) => {
                    return (
                      <Slide index={index} key={index}>
                        <div className="md:mx-0 lg:mx-3">{cardContent(order)}</div>
                      </Slide>
                    );
                  })}
                </div>
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
          )}
        </div>
        <div className={`flex overflow-x-auto py-6 md:hidden`}>
          {Orders.map((order: any, index: number) => (
            <div className={`mr-4 min-w-[88%] last:mr-0`} key={index}>
              {cardContent(order)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
