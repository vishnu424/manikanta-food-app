import Image from 'next/image';
import React, { memo, useState } from 'react';

import { Modal } from '@/components/common/Modal/Modal';
import Accordion from '@/components/goalbased/MealPlan/Accordian/Accordian';
import CheckBox from '@/components/goalbased/MealPlan/CheckBoxItem/CheckBoxItem';
import SelectBox from '@/components/goalbased/MealPlan/SelectBox/SelectBox';

type InputTypes = {
  checks: any;
  onChange: (val: string) => void;
  onChangeSelect: (val: any) => void;
  mealType?: any;
  plans: [];
  activeDays: [];
};

const Filters: React.FC<InputTypes> = ({
  checks,
  onChange,
  onChangeSelect,
  mealType,
  plans,
  activeDays,
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap items-center pb-4">
        <CheckBox
          label="Breakfast"
          name="breakFast"
          checked={checks.breakFast}
          onChange={() => onChange('breakFast')}
        />
        <CheckBox
          label="1 Snack"
          name="snack1"
          checked={checks.snack1}
          onChange={() => onChange('snack1')}
        />
        <CheckBox
          label="2 Snacks"
          name="snacks2"
          checked={checks.snacks2}
          onChange={() => onChange('snacks2')}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="mr-3 pb-4">
          <SelectBox data={activeDays} />
        </div>
        <div className="pb-4">
          <SelectBox data={plans} onChange={onChangeSelect} value={mealType} />
        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  position?: string;
  onChangeSelect: (val: any) => void;
  plan: any;
  onChangeFilter: (data: {}) => void;
  checks: any;
  plans: any;
  activeDays: any;
};

const MealsPlan: React.FC<HeaderProps> = ({
  position,
  onChangeSelect,
  onChangeFilter,
  plan,
  checks,
  plans,
  activeDays,
}) => {
  const [infoModal, setInfoModal] = useState(false);
  const [enablePreferences, setPreferences] = useState(0);
  const onChange = async (key: any) => {
    const allChecks = { ...checks };
    let data = {
      ...allChecks,
      [key]: !checks[key],
    };
    if (key === 'snacks2') {
      data = { ...data, snack1: false };
    }
    if (key === 'snack1') {
      data = { ...data, snacks2: false };
    }
    onChangeFilter(data);
  };

  return (
    <div>
      <div>
        <div
          className={`grid grid-cols-1 items-center rounded-t-xl p-3 md:columns-2 md:grid-cols-4 md:px-4 md:pt-6 lg:px-4 ${
            position === 'fixed' ? 'bg-white' : 'bg-rhubarb-lite'
          }`}
        >
          <div className="col-span-1 pb-3 font-jekoBold text-2xl leading-7 text-black md:col-span-2 md:pb-0 lg:col-span-3">
            My Calorie Control Plan
          </div>
          <div className="col-span-1 flex flex-wrap md:col-span-2 lg:col-span-1">
            <span className="pr-2 font-jekoBold text-base leading-5">
              Female
            </span>
            <span className="flex items-center pr-2 font-jekoBold text-base">
              <div className="mr-2 h-1 w-1 rounded-full bg-chef-bean">{''}</div>
              <span className="leading-5">18-26 yrs old</span>
            </span>
            <span className="flex items-center font-jekoBold text-base">
              <div className="mr-2 h-1 w-1 rounded-full bg-chef-bean lg:w-[2px]">
                {''}
              </div>

              <span className="leading-5">78kg</span>
            </span>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 rounded-b-xl p-3 md:columns-2 md:grid-cols-4 md:px-4 md:pb-2 md:pt-0 lg:pr-6 ${
            position === 'fixed' ? 'bg-white' : 'bg-off-grey md:bg-rhubarb-lite'
          }`}
        >
          <div className="order-2 col-span-1 md:order-none md:col-span-2 lg:col-span-3">
            <div className="hidden md:block">
              <Filters
                checks={checks}
                mealType={plan}
                onChange={onChange}
                onChangeSelect={onChangeSelect}
                plans={plans}
                activeDays={activeDays}
              />
            </div>
            <div className="block md:hidden">
              <Accordion
                title="Edit Preferences"
                titleStyles="text-attention font-jekoBold text-xs"
                activeIndex={1}
                indexVal={enablePreferences}
                setActiveIndex={() => setPreferences(enablePreferences ? 0 : 1)}
              >
                <Filters
                  checks={checks}
                  mealType={plan}
                  onChange={onChange}
                  onChangeSelect={onChangeSelect}
                  plans={plans}
                  activeDays={activeDays}
                />
              </Accordion>
            </div>
          </div>
          <div className=" order-1 col-span-1 flex  items-center  md:order-none md:col-span-2 lg:col-span-1">
            <div className=" flex  w-full flex-row items-center justify-between  border-b border-neutral-300 pb-3 md:w-auto md:justify-end md:border-b-0 md:pb-0 lg:pb-0 ">
              <span className=" font-jekoMedium text-sm leading-5 text-black md:text-base md:leading-4 lg:text-sm lg:leading-5 ">
                Daily Calorie Intake:
                <span className="pl-1 font-jekoBold text-rhubarb-dark">
                  2184
                </span>
                <span className="pl-1 font-jekoMedium text-black">CAL</span>
              </span>
              <span
                className="flex cursor-pointer items-center pl-2"
                onClick={() => setInfoModal(true)}
              >
                <Image
                  width={16}
                  height={16}
                  alt={''}
                  className="w-full lg:pr-0"
                  src="https://res.cloudinary.com/diqfjkeck/image/upload/v1647400291/SFCC/wlp/error.png"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Important Info Modal */}
      <Modal
        isOpen={infoModal}
        onRequestClose={() => setInfoModal(false)}
        headerTitle={''}
      >
        <div className="my-3 flex flex-col items-center justify-center">
          <div className="py-5 font-jekoBold text-4xl leading-[34px]">
            Daily Calorie Intake
          </div>
          <p className="pt-1 text-center font-jeko text-sm leading-[18px]">
            Please note, we will be operating as normal over the Easter period
            with no changes to our order cycle or delivery schedule. Please
            ensure orders are placed according to your operating hours for this
            period.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default memo(MealsPlan);
