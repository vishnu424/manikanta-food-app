import Image from 'next/image';

export type IconType = {
  url: string;
};
export type TagType = {
  text: string;
  icon: IconType;
};
export type BenefitTagType = {
  tag: TagType;
};

export const BenefitTag: React.FC<BenefitTagType> = ({ tag }) => {
  return (
    <div className="mr-2 mb-2 flex h-8 items-center rounded-57 bg-tofu-lite px-2">
      <div className="mx-1 inline-flex w-5">
        <Image width="20" height="16" src={tag?.icon?.url} alt={''} />
      </div>
      <div className="whitespace-nowrap px-2 font-jekoSemibold text-xxs">
        {tag?.text}
      </div>
    </div>
  );
};
