import Image from 'next/image';
import React from 'react';

import { Frequency } from '@/models/api';

export type OrderSummaryContainerType = {
  setShowOrderSummary: (show: boolean) => void;
  cart: any;
};

const OrderSummaryContainer: React.FC<OrderSummaryContainerType> = ({
  setShowOrderSummary,
  cart,
}: OrderSummaryContainerType) => {
  const { subTotal, total, numberOfItems, gst, frequency, discount } = cart;

  return (
    <div className="footer-background relative w-full">
      <div
        className="flex cursor-pointer items-center justify-center text-black"
        onClick={() => setShowOrderSummary(false)}
      >
        <h3 className="py-2 pr-2 text-center font-jekoBold text-sm leading-none text-black">
          Order Summary
        </h3>
        <Image
          src="/assets/images/svg/Circle_Up.svg"
          alt="Expand"
          width={15.83}
          height={15.83}
        />
      </div>

      <div className="sticky z-20 w-full overflow-hidden rounded bg-inherit shadow-lg">
        <div className="px-6 py-4">
          <div className="flex flex-col gap-4 font-jekoMedium">
            <div className="flex justify-between font-jekoBold">
              <p className="text-xs text-gray-700">
                Subtotal ({numberOfItems} items)
              </p>
              <p className="text-base text-gray-700">${subTotal.toFixed(2)}</p>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <>
                  <p className="text-xs text-black">Order Discount</p>
                  <p className="text-base text-success-copy">-${discount}</p>
                </>
              </div>
            )}
            <div className="flex justify-between">
              <p className="-mb-2 font-jekoMedium text-xs leading-4 text-grey-dark">
                Shipping calculated at checkout
              </p>
            </div>
            {frequency === Frequency.ONCE ? (
              <div className="flex items-center justify-center rounded-md bg-rhubarb-lite py-1.5 text-xs text-rhubarb-dark">
                <Image
                  src="/assets/images/svg/shipping.svg"
                  alt="Shipping"
                  width={24}
                  height={15}
                />
                <p className="pl-2.5 font-jekoSemibold">
                  Get FREE SHIPPING when you subscribe 🎉
                </p>
              </div>
            ) : null}
            <div className="flex justify-between text-xs text-black">
              <p>GST (incl)</p>
              <p className="text-base">${gst}</p>
            </div>
            <div className="flex justify-between font-jekoBold text-xs text-black">
              <p>Total</p>
              <p className="text-base">${total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryContainer;
