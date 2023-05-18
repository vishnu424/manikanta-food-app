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
  titleStyle,
  customStyle,
}) => {
  const XS = useMediaQuery(`(max-width:320px)`);
  const baseStyle = {
    container: 'lg:w-40 lg:flex-col',
    widthResponsive: 'md:w-2/4 lg:w-full',
    title: 'md:text-lg md:line-clamp-none lg:text-sm',
  };
  const customStyles = {
    container: 'md:flex-col',
    widthResponsive: 'md:w-full',
    title: 'text-sm md:text-base',
  };
  const style = customStyle ? customStyles : baseStyle;
  return (
    <div
      className={`bg-gray16 relative flex cursor-pointer overflow-hidden rounded-lg ${style.container}`}
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
      <div className={`relative inline-block w-3/4 ${style.widthResponsive}`}>
        <img
          className={`w-full ${XS ? 'h-full' : 'h-auto'}`}
          src={imageSrc}
          alt={title}
        />
        <div
          className={`${
            !icon && 'hidden'
          } absolute left-0 bottom-0 flex h-5 w-6 items-center justify-center rounded-tr-md bg-primary`}
        >
          <img width={18} src={icon} alt="" />
        </div>
      </div>
      <div
        className={`relative inline-block w-3/4 p-2 align-top ${style.widthResponsive}`}
      >
        <div
          className={`font-bold line-clamp-2 md:mb-2 ${style.title} ${titleStyle}`}
        >
          {title}
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="order-last md:order-none md:mt-1">
            <span
              className={`${
                price === 0 && 'hidden'
              } w-20 text-sm font-bold leading-[18px] md:mr-2 md:py-1 md:text-base md:leading-[22px]`}
            >
              {`$ ${price}`}
            </span>
          </div>
          <div className="order-first md:order-none">
            <span
              className={`${
                gms === 0 && 'hidden'
              } font-jekoSemobold text-xxs leading-3 text-grey-dark md:py-1 md:text-xs md:leading-4`}
            >{`${gms} g`}</span>
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
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};
