import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

export type Props = {
  category?: string | null | undefined;
  image: string;
  link?: string | null | undefined;
  className?: string;
};

const ProductCategoryTile: FC<Props> = ({
  category = '',
  image,
  link = '/#',
  className,
}: Props) => {
  const parsedLink = link && link[0] === '/' ? link : `/${link}`;
  return (
    <Link href={parsedLink} className={className}>
      <div className="relative h-32 w-full cursor-pointer overflow-hidden rounded-lg bg-grey md:h-52">
        <Image
          src={image}
          alt={category || ''}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-2 left-2 flex space-x-1">
          <span className="text-base md:text-xl">{category}</span>
          <div className="flex items-center justify-center">
            <Image
              src="/assets/icons/arrow-black.svg"
              alt="arrow"
              width={8}
              height={8}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryTile;
