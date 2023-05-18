import type { NextPage } from 'next';
import React from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export type AccordianTypes = {
  title: string;
  children: any;
  indexVal: number;
  activeIndex: number;
  setActiveIndex: any;
};

const BaseAccordian: NextPage<AccordianTypes> = ({
  title,
  children,
  indexVal,
  activeIndex,
  setActiveIndex,
}: AccordianTypes) => {
  const handleSetIndex = (value: number) =>
    activeIndex !== value ? setActiveIndex(value) : setActiveIndex(0);
  return (
    <>
      <div
        onClick={() => handleSetIndex(indexVal)}
        className="mt-2 flex cursor-pointer justify-between overflow-hidden border-b border-grey-lite p-2"
      >
        <div className="flex">
          <div className="font-jekoBold text-2xl text-black">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === indexVal ? <HiChevronUp /> : <HiChevronDown />}
        </div>
      </div>
      {activeIndex === indexVal && (
        <div className="mb-6 rounded-2xl p-4 shadow-cyan-500/50">
          {children}
        </div>
      )}
    </>
  );
};

export default BaseAccordian;
