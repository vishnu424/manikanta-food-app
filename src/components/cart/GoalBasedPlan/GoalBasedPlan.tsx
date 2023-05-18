import Image from 'next/image';
import React, { useState } from 'react';

import MealPlanItems from '@/components/cart/MealPlanItems/MealPlanItems';
import type { OrderPlan } from '@/models/cart/order-plan';

export type GoalBasedPlanTypes = {
  plan: OrderPlan;
  showItemDeletedMsg: boolean;
  setShowItemDeletedMsg: (show: boolean) => void;
};

const GoalBasedPlan: React.FC<GoalBasedPlanTypes> = ({
  plan,
  showItemDeletedMsg,
  setShowItemDeletedMsg,
}: GoalBasedPlanTypes) => {
  const [showMealPlanItems, setShowMealPlanItems] = useState(false);
  const toggleShowMealPlanItems = () => {
    setShowMealPlanItems(!showMealPlanItems);
  };

  const { name, netPrice, image } = plan;
  const planName = name.substr(0, name.indexOf('('));
  const numberOfItems = name.substr(name.indexOf('('));
  const numberOfDays = plan?.attributes?.find(
    (attribute: any) => attribute.name === 'numberOfDays'
  )?.value;

  const getDay = (item: any) => {
    return item.attributes.find((attribute: any) => attribute.name === 'day')
      .value;
  };
  const lineItems = [];
  for (let i = 1; i <= numberOfDays; i += 1) {
    const items = plan.lineItems.filter((item: any) => getDay(item) === i);
    lineItems.push(<MealPlanItems key={i} day={i} lineItems={items} />);
  }

  const showDeletedMessage = () => {
    setShowItemDeletedMsg(!showItemDeletedMsg);
    setTimeout(() => setShowItemDeletedMsg(false), 3000);
  };
  return (
    <div>
      <div className="flex w-full items-center justify-between px-6 pb-7">
        <div className="flex items-center">
          <h2 className="mr-3 font-jekoBold text-2xl">Meal Plan</h2>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-grey-dark font-jekoBold text-base leading-none text-grey-dark">
            1
          </span>
        </div>
      </div>

      <div className="block px-6">
        <div className="relative mb-4 flex flex-col rounded-lg bg-off-white">
          <div className="flex">
            {image && (
              <Image
                src={image}
                alt="Cart Basket"
                width={104}
                height={104}
                className={`${
                  showMealPlanItems ? 'rounded-tl-lg' : 'rounded-l-lg'
                }`}
              />
            )}
            <div className="flex flex-col pt-2 pl-3">
              <h5 className="max-w-[167px] pb-2.5 font-jekoBold text-xs leading-snug">
                {planName}
                <span
                  className="block font-jekoSemibold text-xxs text-attention"
                  onClick={toggleShowMealPlanItems}
                >
                  {numberOfItems}
                </span>
              </h5>
              <p className="pb-2.5 font-jekoBold text-xs leading-4">
                ${netPrice}
              </p>
              <button
                className="w-fit rounded-full border border-black px-2 py-1.5 font-jekoSemibold text-xxs leading-none"
                onClick={toggleShowMealPlanItems}
              >
                Edit Items
              </button>
            </div>
            <p className="absolute right-2 top-2">
              <Image
                src="/assets/images/svg/delete.svg"
                alt="Delete Cart"
                width={20}
                height={15}
                className="rounded-l-lg"
                onClick={showDeletedMessage}
              />
            </p>
          </div>

          <div
            className={`relative bg-off-white px-3 pt-4 ${
              showMealPlanItems ? 'block' : 'hidden'
            }`}
          >
            <div className="absolute top-3 right-3 cursor-pointer">
              <Image
                src="/assets/images/svg/close.svg"
                alt="close"
                width={10.6}
                height={10.6}
                onClick={toggleShowMealPlanItems}
              />
            </div>
          </div>

          {showMealPlanItems && <div className="px-5">{lineItems}</div>}
        </div>
      </div>
    </div>
  );
};

export default GoalBasedPlan;
