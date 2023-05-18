import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React from 'react';

import { DietaryTags } from '@/components/common/DietaryTags/DietaryTags';
import { MacrosContainer } from '@/components/common/MacrosContainer/MacrosContainer';
import { SkeletonContainer } from '@/components/skeleton/SkeletonContainer/SkeletonContainer';
import { useStore } from '@/models/root-store';

export type SubProductTileType = {
  sku: string;
  qty: number;
};

export const SubProductTile: React.FC<SubProductTileType> = observer(
  ({ sku, qty }) => {
    const {
      productStore: { productsLookup },
    } = useStore();

    const product = productsLookup[sku];

    if (!product) {
      return <SkeletonContainer />;
    }

    const { cms, nutritionalInfo, name } = product;
    const dietaryTags = cms?.dietaryTags;

    const productImage = cms ? cms.tileImage?.url : '';

    return (
      <div
        className="mr-2 mb-2 rounded bg-off-white md:mr-8"
        style={{ maxWidth: '236px' }}
      >
        {/* Product Image */}
        <div className="relative w-full">
          <div className="block w-full md:hidden">
            <Image
              layout="responsive"
              className="mb-3 rounded-t"
              width="158"
              height="76"
              src={productImage}
              alt={''}
              objectFit="cover"
            />
          </div>
          <div className="hidden w-full md:block">
            <Image
              layout="responsive"
              className="mb-3 rounded-t"
              width="236"
              height="168"
              src={productImage}
              alt={''}
            />
          </div>

          <div className="absolute left-0 bottom-0 mx-1 -mb-2 flex h-5 w-9 items-center justify-center rounded-47 border border-off-white bg-primary2 font-jekoBold text-sm text-white md:h-7 md:w-11 md:text-base">
            <span>x{qty}</span>
          </div>
        </div>

        <div className="px-1 py-2 md:px-2 md:py-4">
          <div
            className="pt-1 font-jekoBold text-xs leading-4 line-clamp-2 md:text-sm"
            style={{ minHeight: '38px' }}
          >
            {name}
          </div>

          {/* Weight and Dietary Tags */}
          {!product.hasSubProducts && (
            <div className="flex justify-between py-1">
              <div className="font-jekoSemibold text-xxs text-black md:text-xs">
                {nutritionalInfo?.size}
                {nutritionalInfo?.unit}
              </div>

              <DietaryTags dietaryTags={dietaryTags} />
            </div>
          )}

          {/* Nutrition Info */}
          <MacrosContainer nutritionalInfo={product.nutritionalInfo} />
        </div>
      </div>
    );
  }
);
