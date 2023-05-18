import Image from 'next/image';
import { useCallback, useEffect } from 'react';

import { DiscountLabel } from '@/components/common/DiscountLabel/DiscountLabel';
import QuantityButton from '@/components/common/QuantityButton/QuantityButton';
import type { ProductModelType } from '@/models/api';
import type { OrderPlan } from '@/models/cart/order-plan';

export type ProductType = {
  product: ProductModelType;
  qty: number;
};

export type LineItemTypes = {
  plan: OrderPlan;
  product: ProductType;
  doDelete: boolean;
  setNumberOfDeletedItems: (qty: number) => void;
  deletedLineItem: string;
  setDeletedLineItem: (sku: string) => void;
  call: () => void;
};

const LineItem: React.FC<LineItemTypes> = ({
  plan,
  product,
  setDeletedLineItem,
  setNumberOfDeletedItems,
  call,
  deletedLineItem,
  doDelete,
}: LineItemTypes) => {
  const { name, netPrice, grossPrice, promotionTotal, cms, hasSubProducts } =
    product.product;
  const image = cms ? cms.tileImage?.url : '';

  const { qty } = product;
  const showDeletedMessage = () => {
    setNumberOfDeletedItems(qty);
    setDeletedLineItem(product.product.sku);
    call();
  };

  const handleAddProduct = useCallback(() => {
    if (product && product.product) {
      plan?.increaseLineItem(product.product);
    }
  }, [plan]);

  const handleDeleteProduct = useCallback(() => {
    if (product && product.product) {
      plan?.decreaseLineItem(product.product);
    }
  }, [plan]);

  useEffect(() => {
    if (doDelete && deletedLineItem === product.product.sku) {
      plan?.deleteLineItem(product.product);
    }
  }, [doDelete]);

  return (
    <div className="block px-6">
      <div className="relative mb-4 flex rounded-lg bg-off-white">
        <div className="relative flex">
          {image && (
            <Image
              src={image}
              alt="Cart Basket"
              width={104}
              height={104}
              className="rounded-l-lg"
            />
          )}
        </div>
        <div className="flex flex-col pt-2 pl-3">
          <h5 className="max-w-[167px] pb-2.5 font-jekoBold text-xs leading-snug">
            {name}
          </h5>

          {/* discount */}
          {hasSubProducts && promotionTotal && (
            <DiscountLabel
              promotionTotal={promotionTotal}
              grossPrice={grossPrice}
            />
          )}

          <p className="pb-2.5 font-jekoBold text-xs leading-4">
            ${netPrice}
            {promotionTotal && (
              <del className="pl-1 font-jekoSemibold text-xxs text-grey-dark">
                ${grossPrice}
              </del>
            )}
          </p>
        </div>

        {/* QTY */}
        <div className="absolute bottom-2 right-2 ">
          <QuantityButton
            qty={qty}
            handleDeleteProduct={handleDeleteProduct}
            handleAddProduct={handleAddProduct}
            size={'small'}
          />
        </div>

        <p className="absolute right-2 top-2 cursor-pointer">
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
    </div>
  );
};

export default LineItem;
