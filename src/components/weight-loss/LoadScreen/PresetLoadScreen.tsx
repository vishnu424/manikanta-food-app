import Image from 'next/image';
import React from 'react';

import { Progress } from '@/components/common/ProgressBar/ProgressBar';

type LoadScreenProps = {
  loadData: any;
};

export const PresetLoadScreen: React.FC<LoadScreenProps> = ({ loadData }) => {
  return (
    <div className="m-auto flex flex-col px-6 md:px-12 md:pb-12">
      <div className="rounded-lg border border-gray-300 py-5 md:container md:mx-auto md:py-6">
        <div className="flex justify-center text-2xl text-black">
          <h2 className="ml-5 mb-3 max-w-sm text-2xl font-semibold">
            {loadData.title}
          </h2>
        </div>
        <div className="mt-5 flex justify-center text-2xl text-black">
          <Image
            src={loadData.image}
            alt=""
            width="300px"
            height="300px"
            className="mx-auto mt-3 w-3/4"
            priority={true}
          />
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm pt-6">
            <Progress />
          </div>
        </div>
        <div className="flex justify-center text-2xl text-black">
          <h2 className="ml-5 mb-3 mt-5 max-w-sm text-base">
            {loadData.description}
          </h2>
        </div>
      </div>
    </div>
  );
};
