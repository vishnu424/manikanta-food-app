import _ from 'lodash';
import React from 'react';

import { useStore } from '@/models/root-store';

import FilledDiscount from './FilledDiscount';
import FullDiscount from './FullDiscount';
import LinearProgress from './LinearProgress';
import UnfilledDiscounts from './UnfilledDiscounts';

const DiscountProgressBar: React.FC = () => {
  const store = useStore();
  const {
    currentDiscount,
    discount,
    percentage,
    numberOfDiscountedItems,
    discountValues,
    threshold,
  } = store.cartStore.cart.overview;

  const maxDiscount: any = _.max(discountValues);
  const filledDiscount = currentDiscount < maxDiscount ? currentDiscount : '';
  const unfilledDiscounts = _.tail(
    _.filter(discountValues, (value) => value >= discount)
  );

  const fullDiscount = maxDiscount === currentDiscount;

  const width = percentage === 0 ? 0 : percentage * 100;

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col">
          <p className="font-jekoBold text-xs">
            <span className=" text-success-copy">
              Save up to {maxDiscount}% on MEALS{' '}
            </span>
            using our Bulk Discount.
          </p>
        </div>
        {numberOfDiscountedItems >= 0 && (
          <ul
            className={
              'flex h-[18px] w-full items-center justify-between rounded-full font-jekoBold text-xxs leading-[18px]'
            }
          >
            {filledDiscount ? (
              <FilledDiscount filledDiscount={filledDiscount} />
            ) : null}

            {!fullDiscount && (
              <LinearProgress
                width={width}
                numberOfDiscountedItems={numberOfDiscountedItems}
                threshold={threshold}
                discount={discount}
              />
            )}

            {unfilledDiscounts.map((item: any) => (
              <UnfilledDiscounts key={item} item={item} />
            ))}

            {fullDiscount && <FullDiscount maxDiscount={maxDiscount} />}
          </ul>
        )}
      </div>
    </>
  );
};

export default DiscountProgressBar;
