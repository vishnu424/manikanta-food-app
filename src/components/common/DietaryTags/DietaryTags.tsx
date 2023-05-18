import Image from 'next/image';

export type DietaryTagsType = {
  dietaryTags: Array<any>;
};

export const DietaryTags: React.FC<DietaryTagsType> = ({ dietaryTags }) => {
  return (
    <div className="flex">
      {dietaryTags &&
        dietaryTags.slice(0, 2).map((tag: any, index: number) => (
          <div key={index} className="mx-1">
            <Image src={tag.icon.url} width={16} height={12} />
          </div>
        ))}
    </div>
  );
};
