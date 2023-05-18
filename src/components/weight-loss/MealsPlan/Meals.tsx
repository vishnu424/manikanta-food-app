import router from 'next/router';
import React from 'react';

import { Card } from '@/components/goalbased/Card/Card';
import { Delete } from '@/components/goalbased/Card/Delete/Delete';
import { NutritionInfo } from '@/components/goalbased/Card/NutritionInfo/NutritionInfo';
import { Swap } from '@/components/goalbased/Card/Swap/Swap';

type MealsProps = {
  meals: any;
};

export const Meals: React.FC<MealsProps> = ({ meals }) => {
  return (
    <div className="border-gray16 bg-gray15 mb-8 rounded-md md:border lg:rounded-none lg:border-none lg:bg-white">
      <div className="relative flex space-x-2 border-black p-2 lg:border-t-2 lg:px-0">
        <span className="font-jekoBold lg:font-jekoSemibold">
          Lunch & Dinner
        </span>
      </div>
      <div className="flex w-full flex-col space-y-3 bg-white md:p-3 lg:flex-row lg:space-y-0 lg:space-x-6">
        {meals.map((value: string, i: number) => (
          <Card
            key={i}
            title={`Protein Yoghurt: Vanilla with Choc, Almond & Coconut ${value}`}
            imageSrc="https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1635735079/mymc-web/staging/plated-images/SN031.jpg"
            price={10.5}
            gms={250}
            onClick={() => {
              router.push(`/productDetails/${value}/`);
            }}
          >
            <div className="justify-left mb-2 flex lg:justify-center">
              <NutritionInfo calories={540} protein={45} carbs={32} fats={28} />
            </div>
            <div className="flex justify-end">
              <Delete />
              <Swap />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
