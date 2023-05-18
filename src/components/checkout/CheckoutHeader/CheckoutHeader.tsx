import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/common/Button/Button';

interface CheckoutHeaderProps {
  disabled?: boolean;
  onClick?: () => void;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({
  disabled,
  onClick,
}: CheckoutHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-3 md:px-28">
      <div className="flex space-x-2">
        <div className="flex md:hidden">
          <Image
            src="/assets/images/svg/close.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </div>
        {/* TODO: temp router */}
        <Link href={'menu'}>
          <div className="hidden shrink-0 items-center justify-center md:flex">
            <Image
              src="/assets/images/png/arrow-back.png"
              alt="Back"
              width={16}
              height={16}
            />
          </div>
        </Link>
        <h3 className="border-l border-grey-disable px-3 pt-1 text-lg">
          Checkout
        </h3>
      </div>
      <div className="flex md:hidden">
        <Button theme="primary" disabled={disabled} onClick={onClick}>
          <span className="font-jekoSemibold">Confirm Order</span>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutHeader;
