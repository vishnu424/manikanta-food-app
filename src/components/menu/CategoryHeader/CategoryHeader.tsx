import { observer } from 'mobx-react-lite';

import type { ProductCategoryRecordModelType } from '@/models/api/ProductCategoryRecordModel';
import { useStore } from '@/models/root-store';

import { Pill } from '../Pill/Pill';

export interface ICategoryHeader {
  category: ProductCategoryRecordModelType;
  quantity: number;
}

const HeaderData = {
  mobileImage:
    'https://res.cloudinary.com/diqfjkeck/image/upload/v1664440780/SFCC/landingPage/Desktop_1.png',
  desktopImage:
    'https://res.cloudinary.com/diqfjkeck/image/upload/v1664440780/SFCC/landingPage/Desktop_1.png',
  text: 'Enjoy our range of 70+ high-protein meals crafted by our Chef and Nutritionist. Nourishing and packed with flavour.',
};

export const CategoryHeader: React.FC<ICategoryHeader> = observer(
  ({ category: { name, subcategories, categoryDescription }, quantity }) => {
    const { productStore } = useStore();

    return (
      <div className="flex flex-col bg-cover bg-center bg-no-repeat lg:mb-6 lg:flex-row-reverse lg:justify-between lg:rounded lg:bg-rhubarb-lite lg:px-6 lg:py-8">
        <div
          className={
            'mb-4 flex rounded bg-cover bg-center bg-no-repeat px-3 py-5 lg:justify-end lg:!bg-none'
          }
          style={{ backgroundImage: `url(${HeaderData.mobileImage})` }}
        >
          <p className="w-4/5 font-jekoMedium text-xs text-rhubarb-dark lg:font-jekoBold lg:text-sm">
            {categoryDescription}
          </p>
        </div>

        <div className="mb-6 flex flex-col lg:mb-0">
          <div className="mb-4 flex items-center space-x-3">
            <p className="text-2x font-jekoBold lg:text-7xl">{name}</p>
            <span className="rounded-2xl border border-grey px-2 text-grey-dark">
              {quantity}
            </span>
          </div>
          <div className="flex flex-wrap space-x-2">
            {subcategories?.map((subCategory) => (
              <Pill
                key={subCategory.key}
                subCategory={subCategory.key}
                name={subCategory.name}
                count={productStore.subCategoryCount(subCategory.key!)}
                marginBottom={true}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);
