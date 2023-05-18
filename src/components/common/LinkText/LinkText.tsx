import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

export type Props = {
  text: string;
  hasArrow: boolean;
  link: string;
  className?: string;
};

const LinkText: FC<Props> = ({
  text,
  hasArrow,
  link = '',
  className,
}: Props) => {
  const parsedLink = link[0] === '/' ? link : `/${link}`;
  return (
    <Link href={parsedLink} className={className}>
      <div className="flex cursor-pointer items-center space-x-1">
        <span className="text-xs text-blueberry">{text}</span>
        {hasArrow && (
          <div style={{ marginBottom: '1px' }}>
            <Image
              src="/assets/icons/arrow-blue.svg"
              alt="arrow"
              width={8}
              height={8}
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default LinkText;
