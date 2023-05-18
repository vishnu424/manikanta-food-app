import _ from 'lodash';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';

import Active1 from '@/assets/active_1.png';
import Active2 from '@/assets/active_2.png';
import Active3 from '@/assets/active_3.png';
import Inactive from '@/assets/inactive.png';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import WlpCard from '@/components/weight-loss/Card/Card';
import { PresetLoadScreen } from '@/components/weight-loss/LoadScreen/PresetLoadScreen';
import { BrekkiesSnacks } from '@/components/weight-loss/MealsPlan/BrekkiesSnacks';
import { Meals } from '@/components/weight-loss/MealsPlan/Meals';
import { useStore } from '@/models/root-store';
import { ActiveStatus, days } from '@/utils/constants';

type MealsPlanProp = {
  activeLevels?: [];
  mealsData: any;
};

export const MealsPlan: React.FC<MealsPlanProp> = ({
  activeLevels,
  mealsData,
}) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const [mealsType, setMealsType] = useState('wlp-full');
  const [activeDay, setActiveDay] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageSrc = [Inactive, Active1, Active2, Active3];
  const [loopMealsPlan, setLoopMealsPlan] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [parentIndex, setParentIndex] = useState(0);
  const [modalContent, setModalContent] = useState('');
  const [isLoadScreen, setIsLoadScreen] = useState(true);
  const [activitySelected, setActivitySelected] = useState(0);
  useEffect(() => {
    if (!_.isEmpty(activeLevels)) {
      setLoopMealsPlan(wlp.activeLevels.get(wlp.activeLevelType));
    } else {
      setLoopMealsPlan([0, 0, 0, 0, 0, 0, 0]);
    }
    if (isLoadScreen) {
      setTimeout(() => {
        setIsLoadScreen(false);
      }, 5000);
    }
    setIsModalOpen(false);
  }, [activeLevels]);

  const loopMeals = mealsData[mealsType];
  const { items } = loopMeals;
  let BrekkieSnacks = Object.keys(items)
    .filter(
      (item) =>
        ['brekkie', 'snacks'].includes(item) &&
        items[item] &&
        items[item].length > 0
    )
    .map((item) => items[item]);
  BrekkieSnacks = _.flatten(BrekkieSnacks);

  return (
    <Fragment>
      {isLoadScreen ? (
        <PresetLoadScreen
          loadData={
            wlp.content.get('mealPlan').loadingScreen[wlp.getPreset('gender')]
          }
        />
      ) : (
        <div className="justify-center md:container">
          <div
            className={`${
              mealsType === 'wlp-lite' ? 'lg:w-3/5' : 'm-auto'
            } flex flex-col px-2 pb-6 md:px-12 md:pb-12`}
          >
            {wlp.isFixedPlan.length < 1 && (
              <div>
                <div className="bg-gray16 flex w-fit rounded-3xl font-jekoSemibold md:max-w-md">
                  <Button
                    theme={mealsType === 'wlp-full' ? 'primary' : 'quaternary'}
                    onClick={() => {
                      setMealsType('wlp-full');
                    }}
                  >
                    <span className="px-2 font-jekoSemibold">
                      <span className="mr-2 h-5">Complete Plan</span>
                      <span
                        className={`price h-5 ${
                          mealsType === 'wlp-lite' && 'hidden'
                        }`}
                      >
                        $209/wk
                      </span>
                    </span>
                  </Button>
                  <Button
                    theme={mealsType === 'wlp-lite' ? 'primary' : 'quaternary'}
                    onClick={() => setMealsType('wlp-lite')}
                  >
                    <span className="px-2 font-jekoSemibold">
                      <span className="mr-2 h-5">Lite Plan</span>
                      <span
                        className={`price h-5 ${
                          mealsType === 'wlp-full' && 'hidden'
                        }`}
                      >
                        $179/wk
                      </span>
                    </span>
                  </Button>
                </div>
                <div className="mt-6 mb-8">
                  <div className="modal-button flex items-center">
                    <div className="mr-2 mb-1 w-5">
                      <img
                        className="w-full"
                        src="https://res.cloudinary.com/diqfjkeck/image/upload/v1647400291/SFCC/wlp/error.png"
                      />
                    </div>
                    <div
                      className="text-1 cursor-pointer font-jekoBold"
                      onClick={() => {
                        setModalContent('reviewModal');
                        setIsModalOpen(true);
                      }}
                    >
                      What&apos;s the difference?
                    </div>
                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={() => setIsModalOpen(false)}
                    >
                      {modalContent === 'activityTips' ? (
                        <div>
                          {wlp.content
                            .get('activeLevelTips')
                            .map((level: any, i: number) => {
                              return (
                                <div
                                  key={i}
                                  className="flex cursor-pointer justify-center"
                                >
                                  <WlpCard
                                    onClick={() =>
                                      wlp.setActiveStatus(
                                        parentIndex,
                                        i + 1,
                                        wlp.activeLevelType
                                      )
                                    }
                                    keyValue={i + 1}
                                    activitySelected={activitySelected}
                                  >
                                    <div className="w-3/5">
                                      <div className="font-semibold text-black">
                                        {level.name}
                                      </div>
                                      <div className="text-base">
                                        {level.detail}
                                      </div>
                                    </div>
                                    <div className="flex w-2/5 flex-col items-center justify-center">
                                      <div className="mb-4 w-12">
                                        <Image
                                          src={imageSrc[level.value]?.src || ''}
                                          alt=""
                                          width="100px"
                                          height="50px"
                                        />
                                      </div>
                                      <div className="text-base text-black">
                                        <span className="mr-2 font-semibold">
                                          {Math.round(
                                            wlp.getMacros(
                                              level.value,
                                              Number(wlp.getPreset('weight')),
                                              wlp.getPreset('gender')
                                            )
                                          )}
                                        </span>
                                        Cal
                                      </div>
                                    </div>
                                  </WlpCard>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <img
                          src={
                            wlp.content.get('mealPlan').reviewModal.image.uri
                              .light
                          }
                        />
                      )}
                    </Modal>
                  </div>
                </div>
              </div>
            )}
            <div className="text-0 mb-6 flex overflow-x-auto text-center font-jekoSemibold lg:hidden">
              <div className="relative flex">
                {_.map(days, (day, i) => (
                  <div
                    key={i}
                    className={`text-md cursor-pointer snap-start rounded-full font-jeko text-grey-dark ${
                      activeDay === day.id &&
                      'bg-rhubarb-lite text-rhubarb-dark'
                    }`}
                  >
                    <p
                      onClick={() => setActiveDay(day.id)}
                      className="flex justify-center px-4 py-1 md:py-2"
                    >
                      Day{' '}
                      <span className="pl-1.5 font-jekoBold text-base">
                        0{i + 1}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {loopMealsPlan.map((level: number, index: number) => {
              const brekkieSnacks = BrekkieSnacks.filter(
                (rec) => rec.properties && rec.properties.y === index + 1
              ).map((rec) => rec.product);
              const meals = loopMeals.items.meals
                .filter(
                  (rec: { properties: { y: number } }) =>
                    rec.properties && rec.properties.y === index + 1
                )
                .map((rec: { product: any }) => rec.product);
              return (
                <div
                  key={index}
                  className={`lg:block ${activeDay !== index && 'hidden'}`}
                >
                  <div className="border-gray16 bg-gray15 mb-8 rounded-md border lg:hidden">
                    <div className="flex w-full items-center justify-between p-2">
                      <div className="text-0 font-jekoBold">
                        Your activity level for Day {activeDay + 1}
                      </div>
                      {wlp.isFixedPlan.length < 1 && (
                        <div
                          className="activity-button flex h-6 cursor-pointer items-center justify-between rounded-md bg-black py-6 px-3 font-jekoBold text-white md:py-1"
                          onClick={() => {
                            setIsModalOpen(true);
                            setModalContent('activityTips');
                            setParentIndex(index);
                            setActivitySelected(level);
                          }}
                        >
                          <div className="active-text">
                            {ActiveStatus[level - 1]}
                          </div>
                          <div className="w-4">
                            <img
                              src="https://res.cloudinary.com/diqfjkeck/image/upload/v1648011587/SFCC/wlp/edit_Pencil.png"
                              className="w-full"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="w-full bg-white p-3">
                      <div className="border-gray16 bg-gray15 text-2 rounded-md border p-2 text-center font-jekoBold">
                        <span>Today&apos;s plan</span>
                        <p className="text-brandLite">
                          <span className="daily-cals">1565</span> cals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 hidden items-center space-x-3 px-3 lg:flex">
                    <span className="text-4 font-jekoBold">
                      Day 0{index + 1}
                    </span>
                    {wlp.isFixedPlan.length < 1 && (
                      <div
                        className="text-0 activity-button flex h-6 cursor-pointer items-center justify-between space-x-2 rounded-md bg-black py-1 px-3 font-jekoBold text-white"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalContent('activityTips');
                          setParentIndex(index);
                          setActivitySelected(level);
                        }}
                      >
                        <div className="active-text">
                          {ActiveStatus[level - 1]}
                        </div>
                        <div className="w-4">
                          <img
                            src="https://res.cloudinary.com/diqfjkeck/image/upload/v1648011587/SFCC/wlp/edit_Pencil.png"
                            className="w-full"
                          />
                        </div>
                      </div>
                    )}
                    <span className="font-jekoBold">Today&apos;s plan</span>
                    <p className="text-brandLite font-jekoBold">
                      <span className="daily-cals">1400</span>cals
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row lg:justify-between">
                    <BrekkiesSnacks
                      brekkieSnacks={brekkieSnacks}
                      keyValue={level}
                      mealsType={mealsType}
                    />
                    <Meals meals={meals} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );
};
