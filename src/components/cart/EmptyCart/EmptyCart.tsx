import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/common/Button/Button';

export type EmptyCartType = {
  closeCart: () => void;
};

const EmptyCart: React.FC<EmptyCartType> = ({ closeCart }: EmptyCartType) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="pt-16">
        <Image
          src="/assets/images/svg/Cart.svg"
          alt="Cart Basket"
          width={46.1}
          height={45.7}
        />
      </div>
      <div className="pt-6">
        <p className="font-jekoBold text-sm text-grey-dark">
          You have no items in your cart
        </p>
      </div>
      <div className="px-12 pt-16">
        <p className="text-center font-jekoMedium text-[21px] leading-7 text-black">
          Discover the right meal plan that suits your taste and goals
        </p>
      </div>
      <div className="pt-6">
        <Link href="/menu">
          <Button type="button" theme="primary" onClick={closeCart}>
            <span className="p-1 font-jekoSemibold text-base">Get Started</span>
          </Button>
        </Link>
      </div>
      <div className="relative flex w-full items-center px-12 py-8">
        <div className="grow border-t border-grey"></div>
        <span className="mx-4 shrink font-jekoMedium text-sm leading-none text-black">
          or
        </span>
        <div className="grow border-t border-grey"></div>
      </div>
      <div className="pb-4">
        <Link href="/menu">
          <Button type="button" theme="secondary" onClick={closeCart}>
            <span className="p-1 font-jekoSemibold text-base text-rhubarb-dark">
              Browse Full Menu
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
