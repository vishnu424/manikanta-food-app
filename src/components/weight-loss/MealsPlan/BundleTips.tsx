import React from 'react';

import { useStore } from '@/models/root-store';

type BundleTipProps = {
  mealsType?: '';
};
export const BundleTips: React.FC<BundleTipProps> = () => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const bundleTips = wlp.content.get('mealPlan').bundleTips['wlp-full'];
  return (
    <div className="text-md grid h-5/6 grid-flow-row md:grid-cols-2 md:gap-4 md:p-6">
      {bundleTips.map((data: any, i: number) => (
        <div
          key={i}
          className={`flex w-full flex-col py-4 px-5 ${
            i === 0 || i === 2 ? 'bg-white md:bg-solitude' : 'bg-solitude'
          } md:rounded-lg`}
        >
          <div className="mb-1 flex">
            <div className="mr-2 w-8">
              <img className="w-full" src={data.icon} />
            </div>
            <span className="font-jekoBold text-sm">{data.title}</span>
          </div>
          <div>
            <span className="block font-jeko text-xs leading-4">
              {data.detail}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
