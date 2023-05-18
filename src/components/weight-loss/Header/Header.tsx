import React from 'react';
import { HiArrowLeft, HiChevronLeft } from 'react-icons/hi';

type HeaderProps = {
  title: string;
  handleIndexChange: any;
  step: number;
};

export const WlpHeader: React.FC<HeaderProps> = ({
  title,
  handleIndexChange,
  step,
}) => {
  return (
    <div className="m-auto flex flex-col px-6 pt-5 md:px-12">
      <div className="relative flex justify-center pb-8 sm:pb-6 md:container md:mx-auto md:justify-between">
        {step !== 0 && (
          <div className="absolute left-0 top-0 hidden md:flex">
            <button
              className="flex items-center space-x-3 outline-none"
              onClick={() => {
                handleIndexChange();
              }}
            >
              <HiChevronLeft className="w-auto" />
              <span className="cursor-pointer underline">Back</span>
            </button>
          </div>
        )}
        <div className="relative m-auto flex w-full flex-col items-center md:w-auto">
          <div className="w-full sm:w-auto">
            <span className="mb-3 flex w-full justify-center text-sm md:mb-2">
              {title}
            </span>
            <div className="flex w-full space-x-2">
              {step !== 0 && (
                <div className="absolute top-0 left-0 mt-1 w-6 md:hidden">
                  <HiArrowLeft
                    onClick={() => {
                      handleIndexChange();
                    }}
                  />
                </div>
              )}
              <div className="h-1 w-full rounded-lg bg-gradient-to-r from-primary to-primary2 md:w-32"></div>
              <div className="h-1 w-full rounded-lg bg-secondary md:w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
