import Image from 'next/image';
import React from 'react';

import type { DeliveryInfoModelType } from '@/models/api';

export type DeliveryHeaderType = {
  postalData: DeliveryInfoModelType;
};

const DeliveryHeader: React.FC<DeliveryHeaderType> = ({
  postalData,
}: DeliveryHeaderType) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/assets/images/svg/delivery.svg"
        alt=""
        width="94"
        height="62"
      />

      <h2 className="mt-8 mb-6 flex flex-col items-center">
        <div className="font-jekoBold text-base leading-snug text-black md:font-jekoMedium md:text-3xl md:leading-tight">
          Yes, we deliver to
        </div>
        <div className="font-jekoBold text-base leading-snug text-black md:text-3xl md:leading-tight">
          {postalData.name}, {postalData.state}, {postalData.postcode}!
        </div>
      </h2>
    </div>
  );
};

export default DeliveryHeader;
