import Image from 'next/image';
import React from 'react';

import AddButton from '@/components/common/AddButton/AddButton';
import { DietaryTags } from '@/components/common/DietaryTags/DietaryTags';
import { DiscountLabel } from '@/components/common/DiscountLabel/DiscountLabel';
import { MacrosContainer } from '@/components/common/MacrosContainer/MacrosContainer';
import { PrimaryDisplayTag } from '@/components/common/PrimaryDisplayTag/PrimaryDisplayTag';
import type { ProductModelType } from '@/models/api';

export type OtherProductTileType = {
  product: ProductModelType;
};

export const OtherProductTile: React.FC<OtherProductTileType> = ({
  product,
}) => {
  const { cms, promotionTotal, grossPrice } = product;
  const primaryDisplayTag = cms?.primaryDisplayTag;
  const dietaryTags = cms?.dietaryTags;

  const productImage = cms ? cms.tileImage?.url : '';

  return (
    <div className="relative mr-4 flex rounded bg-off-white">
      <div className="w-1/2 md:w-2/5">
        {/* Tags */}
        {!product.hasSubProducts && primaryDisplayTag && (
          <PrimaryDisplayTag tag={primaryDisplayTag} />
        )}

        {/* Product Image */}
        <div className="hidden shrink-0 md:block">
          <Image
            layout="responsive"
            objectFit="fill"
            className="rounded-l"
            width="100"
            height="145"
            src={productImage}
            alt={''}
          />
        </div>
        <div className="block shrink-0 md:hidden">
          <Image
            layout="responsive"
            objectFit="fill"
            className="rounded-l"
            width="144"
            height="164"
            src={productImage}
            alt={''}
          />
        </div>
      </div>

      <div className="w-1/2 md:w-3/5">
        <div className="p-2 lg:p-2.5">
          <div className="font-jekoBold text-sm leading-5 line-clamp-2 md:text-sm">
            {product.name}
          </div>
          {/* Mobile Weight */}
          {!product.hasSubProducts && (
            <div className="flex justify-between py-1 md:hidden">
              <div className="font-jekoSemibold text-xxs text-black">
                {product.nutritionalInfo?.size}
                {product.nutritionalInfo?.unit}
              </div>

              <DietaryTags dietaryTags={dietaryTags} />
            </div>
          )}

          {/* Discount for bundles */}
          {product.hasSubProducts && promotionTotal && grossPrice && (
            <DiscountLabel
              promotionTotal={promotionTotal}
              grossPrice={grossPrice}
            />
          )}

          {/* Desktop Weight and Dietary Tags */}
          <div className="hidden justify-between py-1 md:flex">
            {!product.hasSubProducts && (
              <div className="font-jekoSemibold text-xxs text-black">
                {product.nutritionalInfo.size}
                {product.nutritionalInfo.unit}
              </div>
            )}
            <DietaryTags dietaryTags={dietaryTags} />
          </div>

          <div className="py-1 font-jekoBold text-sm">${product.netPrice}</div>
          {/* nutritionalInfo */}
          {!product.hasSubProducts && (
            <MacrosContainer
              nutritionalInfo={product?.nutritionalInfo}
              size="small"
            />
          )}

          {/* add button */}
          <div className="absolute bottom-1 right-1">
            <AddButton>+</AddButton>
          </div>
        </div>
      </div>
    </div>
  );
};
