import React from 'react';

import { SubProductTile } from '@/components/productDetails/SubProductTile/SubProductTile';

export type SubProductsContainerType = {
  subProducts: any;
};

export const SubProductsContainer: React.FC<SubProductsContainerType> = ({
  subProducts,
}) => {
  return (
    <div>
      <div className="px-4 pb-4 font-jekoBold text-lg md:px-0 md:text-2xl">
        What&apos;s in this pack
      </div>
      <div className="mb-0 grid grid-cols-2 px-4 md:mb-6 md:grid-cols-4 md:px-0">
        {subProducts &&
          subProducts?.map((subProduct: any) => (
            <div key={subProduct.sku}>
              <SubProductTile sku={subProduct.sku} qty={subProduct.qty} />
            </div>
          ))}
      </div>
      <hr className="mt-12 mb-4" />
    </div>
  );
};
