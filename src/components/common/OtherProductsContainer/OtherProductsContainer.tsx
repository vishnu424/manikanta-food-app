import 'swiper/css/swiper.css';

import Image from 'next/image';
import { useState } from 'react';
import Swiper from 'react-id-swiper';

import { OtherProductTile } from '@/components/common/OtherProductTile/OtherProductTile';
import type { ProductModelType } from '@/models/api';

export type OtherProductsType = {
  products: ProductModelType[];
  slidesPerView?: number | undefined;
};

export const OtherProductsContainer: React.FC<OtherProductsType> = ({
  products,
  slidesPerView,
}) => {
  const [swiper, updateSwiper] = useState<any>(null);
  const params = {
    spaceBetween: 3,
    slidesPerView: 1.1,
    loop: true,
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      1000: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: slidesPerView || 1.4,
      },
    },
    getSwiper: updateSwiper, // Get swiper instance callback
  };

  // Manipulate swiper from outside
  const goNext = () => {
    if (swiper !== null) {
      swiper?.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper?.slidePrev();
    }
  };

  return (
    <div className="mt-3 mb-12 w-full max-w-full px-4 md:mt-5 md:px-0">
      <div className="mb-4 flex justify-between">
        <div className="my-3 font-jekoBold text-2xl">Others also bought</div>

        <div className="float-right hidden lg:flex">
          <div
            className="swiper-prev w-8 cursor-pointer"
            role="button"
            tabIndex={0}
            onClick={goPrev}
          >
            <Image
              className="swiper-prev"
              width="60"
              height="60"
              src="/assets/images/png/swiper-prev.png"
              alt="prev"
            />
          </div>
          <div
            className="swiper-next ml-2 w-8 cursor-pointer"
            role="button"
            tabIndex={1}
            onClick={goNext}
          >
            <Image
              width="60"
              height="60"
              src="/assets/images/png/swiper-next.png"
              alt="next"
            />
          </div>
        </div>
      </div>

      <Swiper {...params}>
        {products.map((product: any) => (
          <div key={product.sku} className="w-full">
            <OtherProductTile product={product} />
          </div>
        ))}
      </Swiper>
    </div>
  );
};
