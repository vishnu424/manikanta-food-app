import Link from 'next/link';
import React from 'react';

import Button from '@/components/common/Button/Button';

export type CartHeaderTypes = {
  total: number;
  MOV: number;
};

const CartHeader: React.FC<CartHeaderTypes> = ({
  total,
  MOV,
}: CartHeaderTypes) => {
  return (
    <div className="z-50 flex w-full flex-row justify-between p-3">
      <div className="flex items-center">
        <h2 className="border-l border-grey-disable pl-4 pr-3 font-jekoBold text-lg leading-6 text-black">
          Your Cart
        </h2>
      </div>
      <div>
        <Link href="/checkout">
          <Button type="button" theme="primary" disabled={total < MOV}>
            <span className="font-jekoSemibold text-base">Checkout</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartHeader;
