import Image from 'next/image';

import Button from '@/components/common/Button/Button';

interface INoProductFound {
  handleClick: () => void;
}

export const NoProductFound: React.FC<INoProductFound> = ({ handleClick }) => {
  return (
    <div className="md: flex h-full w-full flex-col items-center justify-center pt-32 pb-52 md:py-64">
      <div className="mb-4">
        <Image
          src="/assets/images/svg/search.svg"
          alt="arrow"
          width={40}
          height={40}
          priority
        />
      </div>

      <span className="mb-6 font-jekoBold text-2xl">We found no results.</span>
      <span className="mb-8 text-center font-jeko text-base leading-8 md:w-96 md:text-2xl">
        Try changing or clearing your filter options for more results.
      </span>
      <div>
        <Button theme="secondary" onClick={handleClick}>
          Change Filters
        </Button>
      </div>
    </div>
  );
};
