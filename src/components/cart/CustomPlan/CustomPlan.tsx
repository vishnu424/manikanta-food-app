import React from 'react';

import LineItem from '@/components/cart/LineItem/LineItem';
import type { OrderPlan } from '@/models/cart/order-plan';

export type CustomPlanTypes = {
  categories: Array<any>;
  plan: OrderPlan;
  doDelete: boolean;
  setNumberOfDeletedItems: (qty: number) => void;
  deletedLineItem: string;
  setDeletedLineItem: (sku: string) => void;
  call: () => void;
};

const CustomPlan: React.FC<CustomPlanTypes> = ({
  categories,
  plan,
  doDelete,
  deletedLineItem,
  setDeletedLineItem,
  setNumberOfDeletedItems,
  call,
}: CustomPlanTypes) => {
  const formatCategory = (category: string) => {
    return (
      category.slice(0, 1) + category.slice(1, category.length).toLowerCase()
    );
  };
  return (
    <div>
      {categories &&
        categories.map((category: any) => (
          <div key={category.title}>
            <div className="flex w-full items-center justify-between px-6 pt-10 pb-7">
              <div className="flex items-center">
                <h2 className="mr-3 font-jekoBold text-2xl text-black">
                  {formatCategory(category.title)}
                </h2>
                <span className="flex w-8 items-center justify-center rounded-full border border-grey-dark py-1 px-2.5 font-jekoBold text-base leading-none text-grey-dark">
                  {category.data.length}
                </span>
              </div>
            </div>
            {category.data.map((product: any) => (
              <LineItem
                key={product?.product?.sku}
                plan={plan}
                product={product}
                doDelete={doDelete}
                setDeletedLineItem={setDeletedLineItem}
                setNumberOfDeletedItems={setNumberOfDeletedItems}
                call={call}
                deletedLineItem={deletedLineItem}
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default CustomPlan;
