import Image from 'next/image';
import React, { useRef } from 'react';

import CheckIfWeDeliverModal from '@/components/checkDelivery/CheckIfWeDeliverModal/CheckIfWeDeliverModal';
import Button from '@/components/common/Button/Button';

export const CheckDeliveryBanner: React.FC = () => {
  const checkIfDeliverRef = useRef<any | null>(null);

  return (
    <div>
      <div className="flex w-full flex-col-reverse items-center justify-evenly overflow-hidden bg-apricot-lite md:flex-row md:rounded-xl">
        <div
          className="flex w-full items-center justify-center bg-secondary py-5 md:w-1/2 md:bg-transparent"
          onClick={() => checkIfDeliverRef.current?.showCheckIfWeDeliverModal()}
        >
          <div className="pr-5 md:pr-8">
            <div className="hidden md:block">
              <Image
                src="/assets/images/svg/mymc-vehicle.svg"
                alt=""
                width={84}
                height={52}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src="/assets/images/svg/mymc-vehicle.svg"
                alt=""
                width={51}
                height={32}
              />
            </div>
          </div>
          <Button
            theme="tertiary"
            className="hidden bg-apricot-lite px-6 py-3 md:block"
            onClick={() =>
              checkIfDeliverRef.current?.showCheckIfWeDeliverModal()
            }
          >
            <span className="font-jekoSemibold">
              Check if we deliver to you
            </span>
          </Button>
          <div className="font-jekoMedium text-base leading-none text-rhubarb-dark md:hidden">
            <span className="pr-1.5">Check if we deliver to you</span>
            <Image
              src="/assets/images/svg/caret-right.svg"
              alt=""
              width={5}
              height={9}
            />
          </div>
        </div>

        <div className="relative h-32 w-full bg-white md:h-64 md:w-1/2">
          <Image
            src="/assets/images/jpg/delivery-desktop.jpg"
            alt="delviery banner"
            layout="fill"
            objectFit="cover"
            className="hidden md:block"
          />
          <Image
            src="/assets/images/jpg/delivery-mobile.jpg"
            alt="delviery banner"
            layout="fill"
            objectFit="cover"
            className="md:hidden"
          />
        </div>
      </div>
      {/* The model */}
      <CheckIfWeDeliverModal ref={checkIfDeliverRef} />
    </div>
  );
};
