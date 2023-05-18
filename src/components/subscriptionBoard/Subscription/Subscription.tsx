import _ from 'lodash';
import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/common/Button/Button';
import DeliveryTimer from '@/components/common/DeliveryTimer/DeliveryTimer';
import Item from '@/components/subscriptionBoard/Item/Item';
import items from '@/components/subscriptionBoard/items.json';
import PlanModal from '@/components/subscriptionBoard/PlanModal/PlanModal';
import { useMediaQuery } from '@/hooks';

type Props = {
  tabs: any;
};

type PriceProps = {
  active: any;
};

const PriceContainer: React.FC<PriceProps> = ({ active }) => {
  return (
    <>
      {active?.id !== 4 && (
        <div className="flex justify-between bg-off-grey px-2 font-jekoBold text-lg leading-[18px]">
          <div className="flex items-center">
            <div className="mr-1.5">
              <Image
                src="/assets/images/svg/timer.svg"
                alt="timer"
                width={12}
                height={14}
              />
            </div>
            <div>Time left to edit</div>
          </div>
          <DeliveryTimer
            nextDeliveryDate="2023-01-31T01:02:03"
            theme="secondary"
            days={true}
            hours={true}
            minutes={true}
            columnColor="text-primary"
          />
        </div>
      )}
      <div className="mt-4 flex justify-between">
        <Button className="min-w-[70%]" disabled={active?.id === 4}>
          <div className="py-1 font-jekoSemibold leading-4">Edit Order</div>
        </Button>
        <Button className="min-w-[25%] border-2" theme="tertiary">
          <div className="py-1 font-jekoSemibold leading-4">Skip</div>
        </Button>
      </div>
    </>
  );
};

const Subscription: React.FC<Props> = ({ tabs }) => {
  const itemsList = _.map(items, (el) => ({
    ...el,
    category: 'meal',
    total: 0,
  }));
  const newArr = [];
  newArr.push({
    title: 'Male Calorie Control',
    imageUrl:
      'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dw93a95ac4/images/hi-res/SN030.jpg',
    quantity: 1,
    category: 'plan',
    total: 18,
    price: '159.50',
    type: '',
  });
  _.map(itemsList, (data) => {
    newArr.push(data);
  });
  const [list] = useState(newArr);
  const [subscriptionType] = useState('Weekly');
  const [deliveryDay] = useState('Tue, 29 Oct 2022, Midnight - 7am');
  const [planEnableDay] = useState('25 October');
  const [totalItems] = useState({ total: 15, price: '110.10' });
  const [active, setActive] = useState(tabs[0]);
  const [isPlanModal, setIsPlanModal] = useState(false);
  const [planData, setPlanData] = useState({});
  const mobileDevice = useMediaQuery(`(max-width:320px)`);
  const textType =
    active?.id === 3 || active?.id === 4 ? 'Future Delivery' : 'Delivery On';
  const skippedStyle =
    active?.id === 3
      ? 'bg-caution text-white border-caution'
      : 'bg-error-lite border-caution';
  const typeStyle =
    active?.id === 1
      ? 'bg-success-container border-success-copy'
      : skippedStyle;
  const icon = () => {
    if (active?.id === 1) {
      return (
        <Image
          src="/assets/icons/check_circle.svg"
          alt="Check"
          width={16}
          height={16}
        />
      );
    }
    if (active?.id === 3) {
      return (
        <Image
          src="/assets/icons/skip_next.svg"
          alt="Skip"
          width={10}
          height={10}
        />
      );
    }
    if (active?.id === 4) {
      return (
        <Image src="/assets/icons/lock.svg" alt="Lock" width={12} height={17} />
      );
    }
    return null;
  };
  return (
    <>
      <div className="bg-white">
        <div className="flex flex-wrap p-4 md:py-5 md:px-6">
          <div className="mr-7 font-jekoBold text-2xl leading-[30px] md:text-lg md:leading-6">
            {subscriptionType} Subscription
          </div>
          <div className="flex cursor-pointer items-center rounded-full border border-black px-2 font-jekoMedium text-xs leading-4">
            <Image
              src="/assets/icons/edit_icon.svg"
              alt="Edit"
              width={11}
              height={11}
            />
            <div className="pl-1.5">Manage</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between border-b border-grey-liter px-4 lg:px-4 xl:px-6">
            {_.map(tabs, (tab, i) => (
              <div
                key={i}
                onClick={() => setActive(tab)}
                className={`${
                  active?.id === tab.id
                    ? 'border-b-4 border-primary2 text-primary2'
                    : 'text-grey-dark'
                } ${
                  mobileDevice ? 'px-1' : 'px-2'
                } cursor-pointer pt-2 pb-4 font-jekoBold text-base leading-[18px] lg:px-1 xl:px-3`}
              >
                {tab.day}
              </div>
            ))}
          </div>
          <div>
            <div className="p-4 md:p-6">
              <div className="mb-4 flex flex-wrap items-center font-jekoBold text-base leading-[18px]">
                <div className="mr-3">{textType}</div>
                <>
                  {active?.type && (
                    <div
                      className={`${typeStyle} flex w-auto items-center rounded border p-2 font-jekoBold text-sm leading-[14px]`}
                    >
                      <div>{active?.type}</div>
                      <div className="flex items-center pl-3.5">{icon()}</div>
                    </div>
                  )}
                </>
              </div>
              {active?.id === 4 && (
                <div className="my-3 font-jekoMedium text-sm leading-[18px]">
                  Editing meal plan will open on {''}
                  <strong>{planEnableDay}</strong>
                </div>
              )}
              <div className="mb-4 font-jekoMedium text-base leading-[18px]">
                {deliveryDay}
              </div>
            </div>
            <div className="custom-scroll max-h-[200px] overflow-y-auto p-4 pt-0 md:max-h-[450px] md:p-6 md:pt-0">
              {_.map(list, (item, i) => (
                <div
                  key={i}
                  className={`my-4 first:mt-0 last:mb-0 ${
                    item.category === 'plan' && 'border-b pb-4'
                  }`}
                >
                  <Item
                    item={item}
                    onClickPlan={() => {
                      setPlanData(item);
                      setIsPlanModal(true);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[128px] px-6 py-4 shadow-4xl">
        <div className="mb-4 flex justify-between font-jekoBold text-lg leading-6">
          <div>{`Total (${totalItems.total} Items)`}</div>
          <div>${totalItems.price}</div>
        </div>
        {!(active?.id === 1 || active?.id === 3) && (
          <PriceContainer active={active} />
        )}
        {active?.id === 3 && (
          <div className="flex justify-between rounded-[32px] bg-caution p-3 font-jekoBold text-sm leading-4 text-white">
            <div>You’ve skipped this delivery</div>
            <div className="border-1 flex items-center border-l pl-3">
              <span className="pr-2">Undo</span>
              <Image
                src="/assets/icons/undo.svg"
                alt="Previous icon"
                width={15}
                height={14}
              />
            </div>
          </div>
        )}
      </div>
      <PlanModal
        isOpen={isPlanModal}
        onClose={(val) => setIsPlanModal(val)}
        plan={planData}
      />
    </>
  );
};

export default Subscription;
