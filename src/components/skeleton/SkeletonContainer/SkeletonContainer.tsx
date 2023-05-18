import { SkeletonCard } from '../SkeletonCard/SkeletonCard';
import { SkeletonCategorySection } from '../SkeletonCategorySection/SkeletonCategorySection';

const renderSkeletonCards = (numberOfCards: number) => {
  const skeletonCards = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfCards; i++) {
    skeletonCards.push(<SkeletonCard key={i} />);
  }
  return skeletonCards;
};

export const SkeletonContainer: React.FC = () => {
  return (
    <div className="container p-2">
      <div className="mb-4">
        <SkeletonCategorySection />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
        {renderSkeletonCards(8)}
      </div>
    </div>
  );
};
