import { useSelector } from '@plasmicapp/loader-nextjs';
import type { FC } from 'react';
import React from 'react';

import type {
  ProductCategoryCardRecordModelType,
  ProductCategorySectionRecordModelType,
} from '@/models/api';

import ProductCategoryTile from '../ProductCategoryTile/ProductCategoryTile';

type Props = {
  className?: string;
};

const ProductCategoryTileContainer: FC<Props> = ({ className }) => {
  const generalPageData = useSelector('general');
  const sections = generalPageData?.sections;

  const categorySection =
    sections &&
    sections.find(
      (item: ProductCategorySectionRecordModelType) =>
        // eslint-disable-next-line
    item.__typename === 'ProductCategorySectionRecord'
    );

  if (!categorySection) return null;

  const { cards } = categorySection;
  return (
    <div
      className={`grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 ${className}`}
    >
      {cards &&
        cards.map((card: ProductCategoryCardRecordModelType, idx: number) => (
          <ProductCategoryTile
            key={idx}
            category={card?.text}
            image={card?.image?.url}
            link={card?.link}
          />
        ))}
    </div>
  );
};

export default ProductCategoryTileContainer;
