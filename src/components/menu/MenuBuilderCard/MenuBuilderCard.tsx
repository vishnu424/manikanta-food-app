import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback } from 'react';

import AddButton from '@/components/common/AddButton/AddButton';
import { DietaryTags } from '@/components/common/DietaryTags/DietaryTags';
import { DiscountLabel } from '@/components/common/DiscountLabel/DiscountLabel';
import { MacrosContainer } from '@/components/common/MacrosContainer/MacrosContainer';
import { PrimaryDisplayTag } from '@/components/common/PrimaryDisplayTag/PrimaryDisplayTag';
import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import type { ProductModelType } from '@/models/api';
import type { OrderPlan } from '@/models/cart/order-plan';

export type MBCardType = {
  key: string | undefined;
  product: ProductModelType;
  orderPlan?: OrderPlan;
  discount?: number;
};

const MenuBuilderCard: NextPage<MBCardType> = observer(
  ({ product, orderPlan }: MBCardType) => {
    const { cms, sku, promotionTotal, grossPrice } = product;
    const primaryDisplayTag = cms?.primaryDisplayTag;
    const dietaryTags = cms ? cms.dietaryTags : [];

    const productImage = cms ? cms.tileImage?.url : '';

    const quantity = orderPlan?.productQtyBySku[product.sku]?.qty || 0;

    const handleAddProduct = useCallback(() => {
      orderPlan?.increaseLineItem(product);
    }, [orderPlan]);

    const handleDeleteProduct = useCallback(() => {
      orderPlan?.decreaseLineItem(product);
    }, [orderPlan]);

    const backgroundColor = quantity ? 'bg-tofu-lite' : 'bg-off-grey';

    return (
      <div
        id={sku}
        className={`relative rounded-2xl ${backgroundColor} transition-colors`}
      >
        <div>
          {/* Tags */}
          {!product.hasSubProducts && primaryDisplayTag && (
            <PrimaryDisplayTag tag={primaryDisplayTag} />
          )}
          {productImage && (
            <Link href={`/productDetails/${sku}`}>
              <Image
                layout="responsive"
                className="mb-3 cursor-pointer rounded-t-2xl"
                width="100"
                height="100"
                src={productImage}
                alt={''}
              />
            </Link>
          )}
          <div className="p-2 md:p-4">
            <span
              className="mb-2 font-jekoBold text-lg leading-5 line-clamp-2"
              style={{ minHeight: '40px' }}
            >
              {product.name}
            </span>
            {/* Mobile Weight */}
            {!product.hasSubProducts && (
              <div className="flex py-1 font-jekoSemibold text-xxs text-black md:hidden">
                {product.nutritionalInfo.size}
                {product.nutritionalInfo.unit}
              </div>
            )}

            {/* Discount for bundles */}
            {product.hasSubProducts && promotionTotal && grossPrice && (
              <DiscountLabel
                promotionTotal={promotionTotal}
                grossPrice={grossPrice}
              />
            )}

            {/* Price */}
            <div className="mb-4 flex justify-between">
              <div className="py-1 font-jekoBold text-base text-black md:text-lg">
                ${product.getDiscountedPrice(orderPlan?.discount)}
                {/* Original price for bundles */}
                {product.hasSubProducts && (
                  <span className="py-1 px-2 font-jekoBold text-xs text-grey-dark line-through">
                    ${product.grossPrice}
                  </span>
                )}
              </div>

              {/* Desktop Weight */}
              {!product.hasSubProducts && (
                <div className="hidden py-1 font-jekoSemibold text-xs text-black md:flex">
                  {product.nutritionalInfo.size}
                  {product.nutritionalInfo.unit}
                  <DietaryTags dietaryTags={dietaryTags} />
                </div>
              )}
            </div>
            {/* Nutrition Info */}
            {!product.hasSubProducts && (
              <MacrosContainer nutritionalInfo={product.nutritionalInfo} />
            )}

            {quantity > 0 ? (
              <QuantityButton
                handleAddProduct={handleAddProduct}
                handleDeleteProduct={handleDeleteProduct}
                qty={quantity}
                size="large"
              />
            ) : (
              <div className="flex justify-end">
                <AddButton onClick={handleAddProduct}>
                  <Image
                    src="/assets/icons/add.svg"
                    alt="arrow"
                    width={15}
                    height={15}
                    priority
                  />
                </AddButton>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default MenuBuilderCard;
