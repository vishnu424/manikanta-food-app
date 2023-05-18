import PlanTileContainer from '@/components/common/PlanTileContainer/PlanTileContainer';
import ProductCategoryTileContainer from '@/components/common/ProductCategoryTileContainer/ProductCategoryTileContainer';
import { GeneralPageDataProvider } from '@/components/plasmic/GeneralPageDataProvider';

export default function TestPage() {
  return (
    <GeneralPageDataProvider slug="home">
      <div>
        <div className="">
          <ProductCategoryTileContainer />
        </div>
        <div>
          <PlanTileContainer />
        </div>
      </div>
    </GeneralPageDataProvider>
  );
}
