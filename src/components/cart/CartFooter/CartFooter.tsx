import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/common/Button/Button';
import DiscountProgressBar from '@/components/common/DiscountProgressBar/DiscountProgressBar';

export type CartFooterTypes = {
  total: number;
  MOV: number;
  closeCart: () => void;
};

const CartFooter: React.FC<CartFooterTypes> = ({
  total,
  MOV,
  closeCart,
}: CartFooterTypes) => {
  return (
    <div
      className="sticky bottom-0 left-0 z-50 mt-4 flex flex-col justify-between bg-white px-6 py-4"
      style={{
        boxShadow:
          '0px 32px 64px rgba(0, 0, 0, 0.1876), 0px 2px 21px rgba(0, 0, 0, 0.1474)',
      }}
    >
      <DiscountProgressBar />
      <div className="mt-3 flex justify-between">
        <div>
          <p className="mb-1.5 font-jekoBold text-base leading-none tracking-wide lg:text-[22px]">
            ${total.toFixed(2)}
          </p>
          <p className="mb-1.5 font-jekoMedium text-xs leading-4 text-grey-dark">
            Min. order value ${MOV}
          </p>
          <Link href="/menu">
            <button
              onClick={closeCart}
              className="font-jekoBold text-xs leading-3 text-attention"
            >
              Add more items
            </button>
          </Link>
        </div>
        <div className="h-10">
          <Link href="checkout">
            <Button type="button" theme="primary" disabled={!(total >= MOV)}>
              <span className="pr-1 font-jekoSemibold text-base">Checkout</span>
              <Image
                src={
                  total >= MOV
                    ? '/assets/images/svg/Cart.svg'
                    : '/assets/images/svg/Cart_Disabled.svg'
                }
                alt="Add Cart"
                width={20}
                height={20}
                className="rounded-l-lg"
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
