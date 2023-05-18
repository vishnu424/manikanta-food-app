import { BenefitTag } from '@/components/productDetails/BenefitTag/BenefitTag';

export type BenefitTagsContainerType = {
  tags: Array<any>;
};

export const BenefitTagsContainer: React.FC<BenefitTagsContainerType> = ({
  tags,
}) => {
  return (
    <div className="flex flex-wrap">
      {tags &&
        tags.map((tag: any, index: number) => (
          <div key={index}>
            <BenefitTag tag={tag} />
          </div>
        ))}
    </div>
  );
};
