import 'react-sliding-pane/dist/react-sliding-pane.css';

import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

import Button from '@/components/common/Button/Button';
import { Card } from '@/components/common/Card/Card';
import CloseIcon from '@/components/icons/CloseIcon';
import { useMediaQuery } from '@/hooks';
import { useStore } from '@/models/root-store';

const SelectPlans = () => {
  const {
    cartStore: { cart },
    generalStore: { config },
  } = useStore();
  const [isPaneOpen, setIsPaneOpen] = useState(true);
  const isSmall = useMediaQuery(`(max-width:767px)`);
  const isMedium = useMediaQuery(`(min-width:768px) and (max-width:1199px)`);
  const { subTotal } = cart;
  const { MOV } = config;

  let paneWidth;
  if (isSmall) {
    paneWidth = '100%';
  } else if (isMedium) {
    paneWidth = '40%';
  } else {
    paneWidth = '25%';
  }

  const styles = {
    closeIconStyle: {
      width: '24px !important',
    },
    titleStyle: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  const plans = [
    {
      imageSrc:
        'https://www.mymusclechef.com/on/demandware.static/-/Sites-mmc-navigation-catalog/default/dwf24ea017/Category_Images/CalorieControl-Header.jpg',
      title: 'Calorie Control',
      description:
        'A high protein, portion-controlled weekly plan designed to keep you feeling healthy.',
      background: 'bg-blue',
    },
    {
      imageSrc:
        'https://www.mymusclechef.com/on/demandware.static/-/Sites-mmc-navigation-catalog/default/dwf24ea017/Category_Images/CalorieControl-Header.jpg',
      title: 'Calorie Control',
      description:
        'A high protein, portion-controlled weekly plan designed to keep you feeling healthy.',
      background: 'bg-eggshell-lite',
    },
  ];

  return (
    <SlidingPane
      isOpen={isPaneOpen}
      title={<div style={styles.titleStyle}>Select a Plan</div>}
      width={paneWidth}
      from="right"
      closeIcon={
        <div style={styles.closeIconStyle}>
          <CloseIcon />
        </div>
      }
      onRequestClose={() => {
        setIsPaneOpen(false);
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex flex-col px-6">
          {plans.map((plan: any, index: number) => (
            <div key={index}>
              <Card
                imageSrc={plan.imageSrc}
                title={plan.title}
                description={plan.description}
                background={plan.background}
              >
                <Button theme="tertiary">Create Plan</Button>
              </Card>
            </div>
          ))}
        </div>
        <div className="border-lite bottom-0 right-0 border-t bg-white p-6">
          <div className="text-xl font-bold leading-7">${subTotal}</div>
          <div className="text-xs font-medium text-chef-bold">
            Minimum order ${MOV}
          </div>
        </div>
      </div>
    </SlidingPane>
  );
};

export default SelectPlans;
