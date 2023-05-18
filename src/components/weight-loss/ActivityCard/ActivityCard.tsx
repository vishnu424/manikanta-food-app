import React from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import Swiper from 'react-id-swiper';

type ProductsProp = {
  products: any;
  isActiveLevel?: number;
};

export const ActivityCard: React.FC<ProductsProp> = ({
  products,
  isActiveLevel,
}) => {
  const activeIndexVal = products.productDetails.findIndex(
    (product: any) => product.activity === true
  );
  const params = {
    centeredSlides: false,
    pagination: {
      el: '',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 280,
      },
      640: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className="bg-white py-8">
      <div className="relative rounded-xl">
        <div className="mt-1 mb-5 text-center font-jekoBold font-bold md:text-3xl">
          Select your snack set for Day <span>{isActiveLevel}</span>
        </div>
        <div className="swiper-div pt-1 md:pt-0">
          <Swiper {...params} activeSlideKey={`${activeIndexVal}`}>
            {products.productDetails.map((data: any, i: number) => {
              return (
                <div
                  className="border-gray12 mt-3 max-w-xs rounded-lg border-2 text-xxs font-bold md:mx-2 md:text-xs"
                  key={i}
                >
                  <div
                    className={`text-1 bundle-title bundle-title-SS007 h-8 rounded-t-lg bg-black pt-1 text-center font-jekoBold text-white ${
                      !data.activity && 'opacity-50'
                    }`}
                  >
                    {data.cardTitle}
                  </div>
                  <HiCheckCircle
                    className={`absolute ${!data.activity && 'hidden'}`}
                    style={{
                      top: '-16px',
                      right: '-10px',
                      fontSize: '25px',
                      zIndex: '1000',
                    }}
                  />
                  {/* <img
                    alt=""
                    className={`absolute ${!data.activity && "hidden"}`}
                    style={{
                      top: "-16px",
                      right: "-10px",
                      fontSize: "25px",
                      zIndex: "1000",
                    }}
                    src="https://www.mymusclechef.com/on/demandware.static/Sites-au-mmc-Site/-/default/dw34ada605/images/WLP/ok.png"
                  /> */}
                  <div className="grid h-5/6 grid-flow-row grid-cols-2 gap-4 p-2 text-xxs">
                    {data.productsList.map((list: any, index: number) => {
                      return (
                        <div key={index}>
                          <div className="mb-4 w-full">
                            <div className="w-full border-b-4">
                              <img
                                alt={list.title}
                                className="lazy rounded-t-lg"
                                src={list.imageUrl}
                              />
                            </div>

                            <div className="bg-gray16 h-24 rounded-b-lg px-2 pt-2 font-jekoSemibold text-black line-clamp-3 md:line-clamp-none">
                              {list.title}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className={`bundle-select-btn bundle-select-btn-SS007 h-12 w-32 md:w-64 ${
                        data.activity
                          ? 'bg-black text-white'
                          : 'bg-white text-black'
                      } rounded-lg border border-black font-jekoSemibold`}
                    >
                      {data.activity ? 'Selected' : 'Select'}
                    </button>
                  </div>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
