import React from 'react';

import { useMediaQuery } from '@/hooks';

type NutritionProps = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  customStyle?: string;
};

export const NutritionInfo: React.FC<NutritionProps> = ({
  calories,
  protein,
  carbs,
  fats,
  customStyle,
}) => {
  const XS = useMediaQuery(`(max-width:320px)`);
  const style = `${customStyle || 'bg-white'} ${
    XS ? 'mb-6' : 'mb-1'
  } mt-1 justify-center rounded-lg font-jekoBold md:font-jekobold text-black lg:px-1 text-xxs leading-3 md:text-xs md:leading-4`;
  return (
    <div className={style}>
      <span className={`px-1 font-jekoSemibold text-black`}>
        {calories?.toFixed(0)}
        <span className="pl-0.5 font-jeko text-grey-dark">CAL</span>
      </span>
      <span className={`px-1 font-jekoSemibold text-black`}>
        {protein?.toFixed(0)}
        <span className="pl-0.5 font-jeko text-grey-dark">P</span>
      </span>
      <span className="px-1 font-jekoSemibold text-black">
        {carbs?.toFixed(0)}
        <span className={`pl-0.5 font-jeko text-grey-dark`}>C</span>
      </span>
      <span className="px-1 font-jekoSemibold text-black">
        {fats?.toFixed(0)}
        <span className="pl-0.5 font-jeko text-grey-dark">F</span>
      </span>
    </div>
  );
};
