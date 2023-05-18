import React, { useState } from 'react';

import { Modal } from '@/components/common/Modal/Modal';
import { Card } from '@/components/goalbased/Card/Card';
import { Delete } from '@/components/goalbased/Card/Delete/Delete';
import { NutritionInfo } from '@/components/goalbased/Card/NutritionInfo/NutritionInfo';
import { Swap } from '@/components/goalbased/Card/Swap/Swap';
import { ActivityCard } from '@/components/weight-loss/ActivityCard/ActivityCard';
import { BundleTips } from '@/components/weight-loss/MealsPlan/BundleTips';
import { useStore } from '@/models/root-store';

type BrekkieSnacksProps = {
  brekkieSnacks: any;
  keyValue: number;
  mealsType: string;
};

export const BrekkiesSnacks: React.FC<BrekkieSnacksProps> = ({
  brekkieSnacks,
  keyValue,
  mealsType,
}) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const [isActiveCardOpen, setIsActiveCardOpen] = useState(false);
  const [isBundleTipsOpen, setIsBundleTipsOpen] = useState(false);
  const customContentStyles = {
    width: window.innerWidth > 768 ? 'auto' : '90%',
  };
  const products = {
    productDetails: [
      {
        cardTitle: 'Active 1',
        activity: false,
        productsList: [
          {
            title: 'Oat Slice: Chocolate & Almond',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1647514583/mymc-web/plated-images/BK017.jpg',
          },
          {
            title: 'Low Carb Bar: Honeycomb',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1624515059/mymc-web/staging/plated-images/SN024.jpg',
          },
          // {
          //   title: "Protein Cookie: Salted Caramel Macademia + Apple",
          //   imageUrl:
          //     "https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028811/mymc-web/staging/plated-images/WL009.jpg",
          // },
          // {
          //   title:
          //     "Protein Shake: Vanilla & Cinnamon Flavoured + 2 x Peppermint Creams",
          //   imageUrl:
          //     "https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028815/mymc-web/staging/plated-images/WL008.jpg",
          // },
        ],
      },
      {
        cardTitle: 'Active 2',
        activity: false,
        productsList: [
          {
            title: 'Oat Slice: Chocolate & Almond',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1647514583/mymc-web/plated-images/BK017.jpg',
          },
          {
            title: 'Low Carb Bar: Honeycomb',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1624515059/mymc-web/staging/plated-images/SN024.jpg',
          },
          {
            title: 'Protein Cookie: Salted Caramel Macademia + Apple',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028811/mymc-web/staging/plated-images/WL009.jpg',
          },
          {
            title:
              'Protein Shake: Vanilla & Cinnamon Flavoured + 2 x Peppermint Creams',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028815/mymc-web/staging/plated-images/WL008.jpg',
          },
        ],
      },
      {
        cardTitle: 'Active 3',
        activity: true,
        productsList: [
          {
            title: 'Oat Slice: Chocolate & Almond',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1647514583/mymc-web/plated-images/BK017.jpg',
          },
          {
            title: 'Low Carb Bar: Honeycomb',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1624515059/mymc-web/staging/plated-images/SN024.jpg',
          },
          {
            title: 'Protein Cookie: Salted Caramel Macademia + Apple',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028811/mymc-web/staging/plated-images/WL009.jpg',
          },
          {
            title:
              'Protein Shake: Vanilla & Cinnamon Flavoured + 2 x Peppermint Creams',
            imageUrl:
              'https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1642028815/mymc-web/staging/plated-images/WL008.jpg',
          },
        ],
      },
    ],
  };
  return (
    <div className="border-gray16 bg-gray15 mb-8 rounded-md md:border lg:rounded-none lg:border-none lg:bg-white">
      <Modal
        isOpen={isActiveCardOpen}
        onRequestClose={() => setIsActiveCardOpen(false)}
        customContentStyles={customContentStyles}
      >
        <ActivityCard products={products} isActiveLevel={keyValue} />
      </Modal>
      <Modal
        isOpen={isBundleTipsOpen}
        onRequestClose={() => setIsBundleTipsOpen(false)}
        customPadding="p-0"
      >
        <BundleTips />
      </Modal>
      <div className="flex items-center border-black p-2 lg:border-t-2 lg:px-0">
        <span className="font-jekoBold lg:font-jekoSemibold">
          Breakfast & Snacks
        </span>
        <div className="modal-button relative mb-1 ml-2 flex w-4 cursor-pointer items-center">
          <img
            src="https://res.cloudinary.com/diqfjkeck/image/upload/v1644974802/icons/info_tip_black.png"
            className="w-full"
            onClick={() => {
              setIsBundleTipsOpen(true);
            }}
          />
        </div>
        {mealsType !== 'wlp-lite' && wlp.isFixedPlan.length < 1 && (
          <div className="modal-button open-swap-modal open-swap-modal-day1 ml-auto mb-1 w-6 cursor-pointer lg:ml-2">
            <img
              className="w-full"
              src="https://res.cloudinary.com/diqfjkeck/image/upload/v1645067863/icons/rotate.png"
              onClick={() => {
                setIsActiveCardOpen(true);
              }}
            />
          </div>
        )}
      </div>
      <div className="flex w-full flex-col bg-white md:space-y-3 md:p-3 lg:flex-row lg:space-y-0 lg:space-x-6">
        {brekkieSnacks.map((value: string, bs: number) => (
          <Card
            key={bs}
            title={`Protein Yoghurt: Vanilla with Choc, Almond & Coconut ${value}`}
            imageSrc="https://res.cloudinary.com/diqfjkeck/image/upload/c_scale,w_500,q_auto:best/v1635735079/mymc-web/staging/plated-images/SN031.jpg"
            icon="https://www.mymusclechef.com/on/demandware.static/Sites-au-mmc-Site/-/default/dw50230a9a/images/WLP/breakfast-w.png"
            productType="Snack"
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
