import Image from 'next/image';
import React from 'react';

import { useMediaQuery } from '@/hooks';

type CardProps = {
  children?: React.ReactNode;
  title: string;
  imageSrc: string;
  icon?: string;
  productType?: string;
  price?: number;
  gms?: number;
  onClick?: () => void;
  titleStyle?: {};
  customStyle?: boolean;
  contentDirection?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  title,
  imageSrc,
  icon,
  productType,
  price = 0,
  gms = 0,
  onClick,
}) => {
  const mobileDevice = useMediaQuery(`(max-width:319px)`);

  return (
    <div
      className={`relative flex cursor-pointer overflow-hidden rounded-lg bg-off-white md:bg-white ${
        mobileDevice && 'flex-col'
      }`}
      onClick={onClick}
    >
      <div className="absolute top-0 left-0 z-10 flex p-2">
        <p
          className={`${
            !productType && 'hidden'
          } rounded-xl bg-[#1b6dbe99] px-2 text-xs text-white`}
        >
          <span>{productType}</span>
        </p>
      </div>
      <div
        className={`relative inline-block ${
          mobileDevice ? 'w-full' : 'w-36 md:w-[35%]'
        }`}
      >
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt={title}
        />
        <div
          className={`${
            !icon && 'hidden'
          } absolute left-0 bottom-0 flex h-5 w-6 items-center justify-center rounded-tr-md bg-primary`}
        >
          <img width={18} src={icon} alt="tag" />
        </div>
      </div>
      <div
        className={`inline-block p-3 align-top md:p-4 ${
          mobileDevice ? 'w-full' : ' w-44 md:w-[65%]'
        }`}
      >
        <div
          className={`h-9 font-jekoBold text-sm leading-[18px] line-clamp-2 md:mb-2`}
        >
          {title}
        </div>
        <div className="flex flex-col py-2 md:flex-row">
          <div className="order-last w-[72px] md:order-none">
            <span
              className={`${
                price === 0 && 'hidden'
              } font-jekoBold text-base leading-[22px] lg:mr-8`}
            >
              {`$${price}`}
            </span>
          </div>
          <div className="order-first mr-2 pl-0 md:order-none md:pl-2">
            <span
              className={`${
                gms === 0 && 'hidden'
              } font:jekoSemibold text-xxs leading-3 text-grey-dark md:font-jekoBold md:text-xs md:leading-4`}
            >{`${gms}g`}</span>
          </div>
          <div className="hidden items-center md:flex">
            <div className="mr-2 flex items-center">
              <Image
                src="/assets/images/svg/leaf-striked.svg"
                alt="Arrow forward"
                width={17}
                height={14}
              />
            </div>
            <Image
              src="/assets/images/svg/leaf.svg"
              alt="Arrow forward"
              width={14}
              height={12}
            />
          </div>
        </div>
        <div className="relative flex flex-col pt-1">{children}</div>
      </div>
    </div>
  );
};
