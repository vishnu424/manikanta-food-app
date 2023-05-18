import React from 'react';

export type NutritionalInfoType = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
};

export type MacrosContainerType = {
  nutritionalInfo: NutritionalInfoType;
  size?: string;
};

export const MacrosContainer: React.FC<MacrosContainerType> = ({
  nutritionalInfo,
  size,
}) => {
  const containerStyles = size === 'small' ? 'max-w-fit' : '';
  const styles = size === 'small' ? '' : 'md:px-2';
  const pl = size === 'small' ? 'pl-0.5' : 'pl-1';

  return (
    <div
      className={`flex justify-center rounded-2xl bg-white ${containerStyles} mb-6 px-1`}
    >
      <span
        className={`px-1 font-jekoSemibold text-xxs text-black md:text-xs ${styles}`}
      >
        {nutritionalInfo?.calories?.toFixed(0)}
        <span className={`${pl} font-jeko text-grey-dark`}>CAL</span>
      </span>
      <span
        className={`px-1 font-jekoSemibold text-xxs text-black md:text-xs ${styles}`}
      >
        {nutritionalInfo?.protein?.toFixed(0)}
        <span className={`${pl} font-jeko text-grey-dark`}>P</span>
      </span>
      <span
        className={`px-1 font-jekoSemibold text-xxs text-black md:text-xs ${styles}`}
      >
        {nutritionalInfo?.carbs?.toFixed(0)}
        <span className={`${pl} font-jeko text-grey-dark`}>C</span>
      </span>
      <span
        className={`px-1 font-jekoSemibold text-xxs text-black md:text-xs ${styles}`}
      >
        {nutritionalInfo?.fats?.toFixed(0)}
        <span className={`${pl} font-jeko text-grey-dark`}>F</span>
      </span>
    </div>
  );
};
