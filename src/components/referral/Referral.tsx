/* eslint-disable tailwindcss/no-custom-classname */
import 'react-sliding-pane/dist/react-sliding-pane.css';

import Image from 'next/image';
import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import CloseIcon from '@/components/icons/CloseIcon';
import { useMediaQuery } from '@/hooks';

type ReferralProps = {
  isOpen?: boolean;
  isClose: () => void;
};

const Referral: React.FC<ReferralProps> = ({ isOpen = false, isClose }) => {
  const [showReferalModal, setShowReferalModal] = useState<boolean>(true);
  const [copiedCode, setCode] = useState('');
  const [showShare, setShowShare] = useState(false);

  const isMobile = useMediaQuery(`(max-width:767px)`);
  const referralCode = 'RFAX95ZX';

  type ModalFooterProps = {};
  const ModalFooter: React.FC<ModalFooterProps> = () => {
    return (
      <div className="flex items-center justify-center">
        <Button
          theme="custom"
          className="mr-2 hidden md:flex"
          onClick={() => {
            navigator.clipboard.writeText(referralCode);
            setCode('Code copied!');
          }}
        >
          {copiedCode ? 'Code copied!' : 'Copy your code'}
        </Button>

        <Button
          theme="primary"
          className="ml-2 mb-3 md:ml-0 md:mb-0"
          onClick={() => {
            setShowShare(true);
          }}
        >
          Share your code
        </Button>
      </div>
    );
  };

  const onClickcloseModal = (e: any) => {
    if (e.target.id === 'back') {
      setShowShare(false);
    } else if (e.target.id === 'close') {
      setShowShare(false);
      setShowReferalModal(false);
      isClose();
    } else {
      setCode('');
      setShowShare(false);
      setShowReferalModal(false);
    }
  };

  const socialNetworks = [
    {
      imageUrl: '/assets/icons/facebook.svg',
      socialNetwork: 'Facebook',
    },
    {
      imageUrl: '/assets/icons/twitter.svg',
      socialNetwork: 'Twitter',
    },
    {
      imageUrl: '/assets/icons/insta.svg',
      socialNetwork: 'Instagram',
    },
    {
      imageUrl: '/assets/icons/WhatsApp.svg',
      socialNetwork: 'WhatsApp',
    },
  ];

  const commonReferalCard = () => {
    return (
      <>
        <h2 className="hidden text-xl font-extrabold md:flex">
          Refer a Friend
        </h2>

        <p className="p-4 text-base font-medium text-black md:p-0">
          Share your unique code with a friend for $20 off their first order
          over $99, and earn yourself $20 in credit.
        </p>

        <div className="p-4 md:p-0">
          <div className="relative my-4 flex h-36 w-full flex-col items-start justify-center rounded-lg bg-rhubarb-lite p-6">
            <p className="font-jeko text-xs font-bold  text-rhubarb-dark">
              Referral Code:
            </p>
            <p className=" font-jeko text-2xl font-bold text-rhubarb-dark">
              {referralCode}
            </p>
            <div className="absolute -top-4 -right-1">
              <img
                src="/assets/images/png/refer1.png"
                alt="refer"
                width={74.1}
                height={51.7}
              />
            </div>
            <div className="absolute -bottom-4 -right-1">
              <Image
                src="/assets/images/png/refer2.png"
                alt="refer"
                width={115.1}
                height={80.7}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  const referalcomponent = () => {
    return (
      <div className="relative  my-0 py-0">
        <div className="custom-scroll h-[50vh] font-jeko  lg:px-8 lg:py-6 mobile-425:h-auto">
          {commonReferalCard()}
        </div>
      </div>
    );
  };

  const shareComponent = () => {
    return (
      <div className="relative my-0 py-0">
        <div className="align-center custom-scroll flex h-[20vh] justify-between font-jeko  lg:px-8 lg:py-4 mobile-425:h-auto">
          {socialNetworks.map((network: any, index: number) => (
            <div
              key={index}
              className="align-center h-100 w-100 flex flex-col justify-center"
            >
              <div className="align-center flex h-16 w-16 flex-col justify-center rounded-full bg-rhubarb-lite">
                <Image
                  src={network.imageUrl}
                  alt={network.name}
                  width={24}
                  height={24}
                />
              </div>
              <p className="text-center text-xs font-bold">{network.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const styles = {
    closeIconStyle: {
      width: '24px !important',
    },
    titleStyle: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      {isMobile ? (
        <div>
          <SlidingPane
            className="referralSlidingPane"
            isOpen={showReferalModal}
            title={<div style={styles.titleStyle}>Refer a Friend</div>}
            from="bottom"
            width={'100%'}
            closeIcon={
              <div style={styles.closeIconStyle}>
                <CloseIcon />
              </div>
            }
            onRequestClose={() => {
              setShowReferalModal(false);
              isClose();
            }}
          >
            <div className=" flex flex-col justify-between">
              {commonReferalCard()}
              <div
                style={{
                  boxShadow: '0px 0px 40px 6px rgba(154, 154, 154, 0.3)',
                }}
                className="absolute inset-x-0 bottom-0 m-0 flex h-20 items-center justify-center shadow-2xl"
              >
                <ModalFooter />
              </div>
            </div>
          </SlidingPane>
        </div>
      ) : (
        <>
          <Modal
            isOpen={isOpen}
            onRequestClose={onClickcloseModal}
            headerTitle={showShare ? 'Share your code' : ''}
            backButton={!!showShare}
            footerChildren={showShare ? null : <ModalFooter />}
            customPadding="p-4"
            headerTitleStyle="font-jekoBold"
          >
            {showShare ? shareComponent() : referalcomponent()}
          </Modal>
        </>
      )}
    </div>
  );
};

export default Referral;
