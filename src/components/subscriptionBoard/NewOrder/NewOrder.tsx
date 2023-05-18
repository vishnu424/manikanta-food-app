import Link from 'next/link';
import React from 'react';

import Button from '@/components/common/Button/Button';

const NewOrder:React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center md:h-72 md:items-center md:rounded-xl md:bg-white md:p-0 md:px-4">
    <p className=" font-jekoBold text-lg opacity-95 md:text-2xl pb-6">
        Start a new order
    </p>

    <div className="flex  items-center gap-3 px-0 md:flex-col md:justify-center mobile-320:gap-1 ">
        <Link href="/menu">
        <Button
            className=" w-fit text-center font-jekoSemibold text-sm text-rhubarb-dark md:w-56 md:text-base mobile-320:leading-4"
            theme="tofu"
        >
            Full Menu
        </Button>
        </Link>
        <Button
        className=" w-fit text-center font-jekoSemibold text-sm text-rhubarb-dark md:w-56 md:text-base mobile-320:leading-4"
        theme="secondary"
        >
        Select a Meal Plan
        </Button>
    </div>
    </div>
  );
};

export default NewOrder;
