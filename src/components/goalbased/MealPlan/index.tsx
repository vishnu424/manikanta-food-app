import _ from 'lodash';
import React, { memo, useRef, useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';

import Button from '@/components/goalbased/MealPlan/AddToCartButton/AddToCartButton';
import DayTabs from '@/components/goalbased/MealPlan/DaysTabs/DaysTabs';
import GbJson from '@/components/goalbased/MealPlan/gbItems.json';
import Header from '@/components/goalbased/MealPlan/Header/Header';
import MealPlan from '@/components/goalbased/MealPlan/Plans/Plans';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useScrollYPosition } from '@/hooks/useScrollYPosition';

type Props = {
  setIsMealPlan: (val: boolean) => void;
};

const items = GbJson;
const daysTabs = [1, 2, 3, 4, 5, 6, 7];
const activeDays = [
  { value: '1-2 ', label: 'Active Days' },
  { value: '4+ ', label: 'Active Days' },
];
const plans = [
  { value: 5, label: 'Day Plan' },
  { value: 6, label: 'Day Plan' },
  { value: 7, label: 'Day Plan' },
];
const MealsPlan: React.FC<Props> = ({ setIsMealPlan }) => {
  const filterDays = (plan: any) => {
    return daysTabs.filter((tab) => tab <= plan);
  };

  const filteredMealsData = (list: any, indexes: any) => {
    const arr: any = indexes.length > 0 ? [] : list;
    if (indexes.length > 0) {
      _.map(list, async (item: any) => {
        let d: any;
        d = item;
        _.map(indexes, (index) => {
          if (item.properties.x === index) {
            d = { ...d, product: {} };
          }
        });
        arr.push(d);
      });
    }
    return arr;
  };

  const [checks, setChecks] = useState({
    breakFast: false,
    snack1: true,
    snacks2: false,
  });
  const [mealItems, setMealItems] = useState(
    filteredMealsData(items.items, [0, 3])
  );
  const [plan, setPlan] = useState(5);
  const [planDays, setPlanDays] = useState(filterDays(plan));
  const [active, setActive] = useState(1);
  const [activeDay, setActiveDay] = useState(0);
  const headerRef: any = useRef(null);
  const daysRef: any = useRef(null);

  const setDayOnScroll = (data: any) => {
    setActive(Number(data));
  };

  const onScrollToDay = async (id: any) => {
    await setActive(id);
    await setActiveDay(id);
  };

  const onChangeSelectPlan = (e: any) => {
    setPlan(e.target.value);
    setPlanDays(filterDays(e.target.value));
    setActive(1);
    setActiveDay(1);
  };

  const onChangeFilter = async (data: any) => {
    let indexes: any = [];
    if (data.breakFast && !data.snack1 && data.snacks2) {
      indexes = [];
    }
    if (data.breakFast && !data.snack1 && !data.snacks2) {
      indexes = [1, 3];
    }
    if (data.breakFast && data.snack1 && !data.snacks2) {
      indexes = [3];
    }
    if (!data.breakFast && !data.snack1 && data.snacks2) {
      indexes = [0];
    }
    if (!data.breakFast && data.snack1 && !data.snacks2) {
      indexes = [0, 3];
    }
    if (!data.breakFast && !data.snack1 && !data.snacks2) {
      indexes = [0, 1, 3];
    }
    await setChecks(data);
    setMealItems(filteredMealsData(items.items, indexes));
  };

  const scrollYPosition = useScrollYPosition();
  const scrollDirection = useScrollDirection();
  const direction = scrollDirection !== 'up';
  const isDaysScrolling =
    scrollYPosition >= (daysRef.current && daysRef.current.offsetTop);
  const daysPosition =
    daysRef.current?.offsetTop !== undefined ? isDaysScrolling : false;
  const isHeaderScrolling =
    scrollYPosition >= (headerRef.current && headerRef.current.offsetTop)
      ? direction
      : false;
  const headerPosition =
    headerRef.current?.offsetTop !== undefined ? isHeaderScrolling : false;

  return (
    <div>
      <div
        className={`${
          headerPosition || daysPosition ? 'hidden md:block' : 'hidden'
        } fixed top-0 z-50 w-full bg-white shadow-3xl`}
      >
        <div className="container py-4">
          <div className="mb-3 w-fit">
            <button
              className="flex items-center space-x-3 outline-none"
              onClick={() => setIsMealPlan(false)}
            >
              <HiChevronLeft className="w-auto" />
              <span className="cursor-pointer underline">Back</span>
            </button>
          </div>
          <div className={`${!headerPosition ? 'hidden' : 'hidden md:block'}`}>
            <Header
              onChangeFilter={onChangeFilter}
              position="fixed"
              onChangeSelect={(e) => onChangeSelectPlan(e)}
              plan={plan}
              checks={checks}
              plans={plans}
              activeDays={activeDays}
            />
          </div>
          <div className={`${!daysPosition ? 'hidden' : 'hidden md:block'}`}>
            <DayTabs
              days={planDays}
              onScrollToDay={onScrollToDay}
              active={active}
            />
          </div>
        </div>
      </div>
      <div className="container py-8 px-4">
        <div className="mb-3 w-fit">
          <button
            className="flex items-center space-x-3 outline-none"
            onClick={() => setIsMealPlan(false)}
          >
            <HiChevronLeft className="w-auto" />
            <span className="cursor-pointer underline">Back</span>
          </button>
        </div>
        <div ref={headerRef}>
          <Header
            onChangeFilter={onChangeFilter}
            onChangeSelect={(e) => onChangeSelectPlan(e)}
            plan={plan}
            checks={checks}
            plans={plans}
            activeDays={activeDays}
          />
        </div>
        <div className="my-6">
          <div ref={daysRef}>
            <DayTabs
              days={planDays}
              onScrollToDay={onScrollToDay}
              active={active}
            />
          </div>
          <MealPlan
            active={active}
            days={planDays}
            mealItems={mealItems}
            setDayOnScroll={setDayOnScroll}
            activeDay={activeDay}
          />
        </div>
      </div>
      <div className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-white py-6 shadow-3xl">
        <Button theme="primary" className="py-4">
          <div>Addto Cart</div>
          <div className="font-jekoBold text-base leading-[30px] md:text-2xl">
            $220.80
          </div>
        </Button>
      </div>
    </div>
  );
};

export default memo(MealsPlan);
