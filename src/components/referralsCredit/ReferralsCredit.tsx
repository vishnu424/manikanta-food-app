import Image from 'next/image';
import React, { useState } from 'react';

import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import { useMediaQuery } from '@/hooks';

type ReferralCreditProps = {
  onClick: () => void;
};

const ReferralsCredit: React.FC<ReferralCreditProps> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const baseStyle = 'grid grid-row xl:grid-cols-3 lg:gap-4 pb-2 lg:pb-0';
  const primaryStyle = 'lg:rounded-lg';
  const secondaryStyle = 'flex justify-between';
  const isMobile = useMediaQuery(`(max-width:767px)`);
  const imageDimensions = {
    width: isMobile ? '112.62' : '74.88',
    height: isMobile ? '80.11' : '52.97',
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        customPadding="p-8"
      >
        <div>Information Comes Here...</div>
      </Modal>
      <div className="mb-4 flex flex-wrap">
        <div className="mr-4 hidden pt-2 font-jekoBold text-3xl md:block">
          Referrals & Credit
        </div>
        <div className="hidden rounded-full bg-white py-2 px-4 font-jekoBold md:mt-2 md:block xl:mt-0">
          <span className="text-xs text-success-copy">
            You have $20 credit, which will be automatically applied to your
            next order
          </span>
          <span>🎉</span>
        </div>
      </div>
      <div className={baseStyle}>
        <div
          className={`${primaryStyle} rounded-t-lg bg-rhubarb-lite xl:col-span-2`}
        >
          <div className="grid lg:grid-cols-3">
            <div className="order-2 lg:order-none lg:row-span-2 lg:h-[110px] lg:w-[177px] lg:rounded-l-lg lg:bg-[url('/assets/icons/refer-a-friend-bg.svg')]">
              <div className="flex justify-center lg:my-6">
                <div className="py-4 lg:py-0">
                  <Image
                    src="/assets/icons/Refer-a-Friend.svg"
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    alt="Refer a Friend"
                  />
                </div>
              </div>
            </div>
            <div className="pt-5 lg:col-span-2 lg:px-4 lg:pl-14 xl:px-8">
              <div className={`lg:${secondaryStyle} order-1 lg:order-none`}>
                <div className="flex justify-center font-jekoBold text-4xl text-rhubarb-dark lg:justify-start lg:text-lg">
                  Refer a Friend
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/assets/icons/arrow-forward.svg"
                    width="15"
                    height="15"
                    alt="Arrow Forward"
                    onClick={onClick}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="order-3 leading-10 lg:col-span-2 lg:px-4 lg:pl-14 lg:leading-none xl:px-8">
              <div className="order-3 flex justify-center font-jekoBold text-2xl text-black md:text-base lg:justify-start lg:text-xl xl:text-2xl">
                Give 20$, get 20$
              </div>
            </div>
            <div className="order-4 mt-4 mb-8 flex justify-center lg:hidden">
              <Button theme="tertiary" onClick={onClick}>
                <span className="font-jekoBold text-xl">Get my code</span>
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`${primaryStyle} rounded-b-lg bg-off-grey p-4 md:bg-white xl:border xl:border-grey`}
        >
          <div className={secondaryStyle}>
            <div className="text-sm md:text-base">Account Credit</div>
            <div>
              <Image
                src="/assets/icons/info-blue.svg"
                width="19"
                height="19"
                onClick={() => setIsOpen(true)}
                className="cursor-pointer"
                alt="Information"
              />
            </div>
          </div>
          <div className="text-base font-bold text-success-copy md:text-xl">
            $20.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralsCredit;
