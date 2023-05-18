import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import Button from '../Button/Button';

export type Props = {
  icon?: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
};

const DeliveryBanner: FC<Props> = ({
  icon,
  image,
  buttonText,
  buttonLink,
  className,
}: Props) => {
  const parsedLink = buttonLink[0] === '/' ? buttonLink : `/${buttonLink}`;
  return (
    <div className={`flex flex-col ${className}`}>
      <div>
        <Image src={image} alt="arrow" width={8} height={8} />
      </div>
      <div className="flex space-x-2">
        {icon && <Image src={icon} alt="truck" width={8} height={8} />}
        <Button link={parsedLink} theme="secondary">
          <span className="">{buttonText}</span>
        </Button>
      </div>
    </div>
  );
};

export default DeliveryBanner;
