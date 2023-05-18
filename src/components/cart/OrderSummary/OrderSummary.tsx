import Image from 'next/image';
import React, { useState } from 'react';

import OrderSummaryContainer from '@/components/cart/OrderSummaryContainer/OrderSummaryContainer';

export type OrderSummaryType = {
  cart: any;
};

const OrderSummary: React.FC<OrderSummaryType> = ({
  cart,
}: OrderSummaryType) => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  return (
    <div className="">
      {!showOrderSummary && (
        <div
          className="w-full cursor-pointer bg-gradient-to-r from-success to-success-secondary py-2"
          onClick={() => setShowOrderSummary(!showOrderSummary)}
        >
          <div className="flex items-center justify-center">
            <h3 className="pr-2 text-center font-jekoBold text-sm leading-none text-white">
              Order Summary
            </h3>
            <Image
              src="/assets/images/svg/circle_down.svg"
              alt="Expand"
              width={15.83}
              height={15.83}
            />
          </div>
        </div>
      )}

      {showOrderSummary && (
        <OrderSummaryContainer
          setShowOrderSummary={setShowOrderSummary}
          cart={cart}
        />
      )}
    </div>
  );
};

export default OrderSummary;
