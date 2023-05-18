import React from 'react';

import { Modal } from '@/components/common/Modal/Modal';

type Props = {
  isOpen: boolean;
  onClose: (val: boolean) => void;
  plan: any;
};

const days = ['1', '2', '3', '4', '5', '6', '7'];

const maleCalorie: React.FC<Props> = ({ isOpen, onClose, plan }) => {
  const getDayContent = () => {
    return (
      <div>
        {days.map((day, i) => {
          return (
            <div className="mb-5 font-jekoBold last:mb-0" key={i}>
              <div className="mb-1.5 text-sm leading-[18px] md:text-lg md:leading-6">
                Day {day}
              </div>
              <div className="font-jekoSemibold text-xxs leading-4 md:text-xs">
                <div className="pb-0.5">Naked Chicken Fajitas</div>
                <div className="pb-0.5">
                  Plant Based Smoothie: Banana Super Greens
                </div>
                <div>Coconut Turmeric Chicken with Pumpkin</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  const { title, total, price } = plan;
  return (
    <Modal isOpen={isOpen} onRequestClose={() => onClose(false)}>
      <div className="border-b-2 border-grey px-3 pt-12 md:px-8">
        <div className="font-jekoBold text-base md:font-jekoExtrabold md:text-xl">
          {title}
          <span className="text-attention">{` (${total} Items) `}</span>
        </div>
        <div className="pt-2 pb-4 font-jekoBold text-sm md:pb-6 md:text-lg">
          ${price}
        </div>
      </div>
      <div className="px-3 py-5 md:px-8 md:py-6">
        <div className="custom-scroll h-[45vh] overflow-auto">
          {getDayContent()}
        </div>
      </div>
    </Modal>
  );
};

export default maleCalorie;
