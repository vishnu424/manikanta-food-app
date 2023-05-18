import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { HiArrowSmRight, HiInformationCircle } from 'react-icons/hi';

import Active1 from '@/assets/active_1.png';
import Active2 from '@/assets/active_2.png';
import Active3 from '@/assets/active_3.png';
import Inactive from '@/assets/inactive.png';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import WlpButton from '@/components/weight-loss/Button/Button';
import Card from '@/components/weight-loss/Card/Card';
import { useStore } from '@/models/root-store';
import { ActiveStatus } from '@/utils/constants';

type ActiveLevelProps = {
  activeLevels: [];
};

export const ActiveLevels: React.FC<ActiveLevelProps> = ({ activeLevels }) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const activeLevelDetails = wlp.content.get('preset')[wlp.step];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeLevelType } = wlp;
  const imageSrc = [Inactive, Active1, Active2, Active3];
  return (
    <Fragment>
      <div className="relative m-auto flex flex-col px-6 md:px-12 md:pb-12">
        <div className="rounded-lg md:container md:mx-auto md:mb-12 md:justify-center md:border md:py-6">
          <div className="m-auto flex flex-col md:pb-12">
            <div className="w-full py-2 pb-16 md:flex md:justify-center">
              <div className="md:max-w-sm">
                <div className="mb-10 md:max-w-sm">
                  <div className="my-4 flex flex-col">
                    <h2 className="text-2xl font-bold leading-7 text-black">
                      {activeLevelDetails.title}
                    </h2>
                    <div className="py-3 text-xs font-normal leading-4 text-black">
                      {activeLevelDetails.description}
                    </div>
                  </div>
                  <div
                    className="mb-6 flex cursor-pointer justify-end text-indigo-600"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <HiInformationCircle className="mr-1 text-xl" />
                    <span className="text-base font-semibold">
                      What are my activity levels?
                    </span>
                  </div>
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                  >
                    <div>
                      {wlp.content
                        .get('activeLevelTips')
                        .map((level: any, i: number) => {
                          return (
                            <div key={i} className="flex justify-center">
                              <Card>
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
                              </Card>
                            </div>
                          );
                        })}
                    </div>
                  </Modal>
                  <div>
                    {activeLevels.map((predefined, index) => {
                      return (
                        <div
                          className="mb-4 max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md"
                          key={index}
                        >
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-gray-90 font-jekoBold text-xl leading-none">
                              Day 0{index + 1}
                            </h3>
                            <div className="w-12">
                              <Image
                                src={imageSrc[predefined]?.src || ''}
                                alt=""
                                width="40px"
                                height="20px"
                                priority={true}
                              />
                            </div>
                          </div>
                          <div className="flex py-1 text-sm">
                            {ActiveStatus.map((value, statusIndex) => {
                              const parentIndex = index;
                              return (
                                <WlpButton
                                  key={statusIndex}
                                  type="button"
                                  theme={
                                    statusIndex + 1 === predefined
                                      ? 'primary'
                                      : 'secondary'
                                  }
                                  styleType="secondaryStyle"
                                  disabled={false}
                                  onClick={() =>
                                    wlp.setActiveStatus(
                                      parentIndex,
                                      statusIndex + 1,
                                      activeLevelType
                                    )
                                  }
                                >
                                  {value}
                                </WlpButton>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray16 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center p-5">
        <Button
          type="button"
          theme="primary"
          disabled={wlp.isContainsZero}
          onClick={() => {
            wlp.setMealPlan(true);
          }}
        >
          Continue <HiArrowSmRight className="ml-12" />
        </Button>
      </div>
    </Fragment>
  );
};
