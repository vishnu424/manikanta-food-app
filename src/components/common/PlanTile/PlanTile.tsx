import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Button from '../Button/Button';

export enum Plan {
  Custom = 'custom',
  Muscle = 'muscle',
  Calorie = 'calorie',
  Wlp = 'wlp',
}

export type Props = {
  plan: Plan;
  image: string;
  buttonText?: string | null | undefined;
  link?: string | null | undefined;
  className?: string;
};

const PlanTile: FC<Props> = ({
  plan = Plan.Custom,
  image,
  buttonText = '',
  link = '/#',
  className,
}: Props) => {
  const parsedLink = link && link[0] === '/' ? link : `/${link}`;
  return (
    <div className={`w-full rounded-xl bg-[#FFF9F3] ${className}`}>
      <div className="relative h-60 w-full">
        <Image
          className="rounded-t-xl"
          src={image}
          alt={plan || ''}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-center py-3">
        <Button theme={plan} link={parsedLink}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default PlanTile;
