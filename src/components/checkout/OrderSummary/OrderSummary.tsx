import Image from 'next/image';
import { useState } from 'react';

import OrderSummaryContainer from '@/components/checkout/OrderSummaryContainer/OrderSummaryContainer';
import type { Cart } from '@/models/cart/cart';

interface OrderSummaryProps {
  cart: Cart;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cart,
}: OrderSummaryProps) => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  return (
    <>
      <div
        className="my-2 flex w-full cursor-pointer items-center justify-center bg-gradient-to-r from-success to-success-secondary py-2 text-black"
        onClick={() => setShowOrderSummary(!showOrderSummary)}
      >
        <h3 className="pr-2 text-center font-jekoBold text-sm leading-none text-white">
          Order Summary
        </h3>
        <Image
          src="/assets/images/svg/circle_down.svg"
          alt="Expand"
          width={15}
          height={15}
        />
      </div>
      {showOrderSummary && <OrderSummaryContainer cart={cart} />}
    </>
  );
};

export default OrderSummary;
