import type { NextPage } from 'next';
import React from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

export type AccordianTypes = {
  title: string;
  children: any;
  indexVal: number;
  activeIndex: number;
  setActiveIndex: any;
  titleStyles?: any;
};

const Accordian: NextPage<AccordianTypes> = ({
  title,
  children,
  indexVal,
  activeIndex,
  setActiveIndex,
  titleStyles,
}: AccordianTypes) => {
  const handleSetIndex = (value: number) =>
    activeIndex !== value ? setActiveIndex(value) : setActiveIndex(0);
  return (
    <>
      <div
        onClick={() => handleSetIndex(indexVal)}
        className="no-highlights flex cursor-pointer overflow-hidden px-0 pt-2"
      >
        <div className="flex">
          <div className={titleStyles}>{title}</div>
        </div>
        <div className="flex items-center justify-center pl-2">
          {activeIndex === indexVal ? (
            <HiChevronUp fill="#006CED" />
          ) : (
            <HiChevronDown fill="#006CED" />
          )}
        </div>
      </div>
      {activeIndex === indexVal && (
        <div className="rounded-2xl pt-4">{children}</div>
      )}
    </>
  );
};

export default Accordian;
