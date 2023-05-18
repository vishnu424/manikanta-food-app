import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

type ManageSubscriptionProps = {
  onClick: (value: string) => void;
};

const ManageSubscriptionList: React.FC<ManageSubscriptionProps> = ({
  onClick,
}) => {
  const baseStyle =
    'grid grid-row lg:gap-4 xl:grid-cols-3 xl:grid-cols-3 xl:gap-4';
  const primaryStyle =
    'bg-off-grey md:bg-white lg:border lg:border-black lg:border-grey lg:rounded-lg p-4';
  const secondaryStyle = 'flex justify-between leading-8';
  const titleStyle = 'text-base';
  const contentStyle = 'text-lg font-bold';

  const subscriptions = {
    deliveryFrequency: 'Weekly',
    upcomingDelivery: '10/29/2022',
    deliveryAddress: '19/1 Danks Street, Waterloo NSW 2017',
    payment: {
      cardType: 'master',
      cardNo: '***************0697',
    },
    subscriptionStatus: 'Active',
  };
  const updateData = (keyValue: string) => {
    return (
      <Image
        src="/assets/icons/edit_icon.svg"
        width="14"
        height="14"
        alt="edit"
        className="cursor-pointer"
        onClick={() => onClick(keyValue)}
      />
    );
  };
  return (
    <div>
      <div className="rounded-t-lg bg-rhubarb-lite py-4 px-2 font-bold md:text-xl lg:rounded-none lg:bg-transparent lg:py-4">
        Manage Subscription
      </div>
      <div className={baseStyle}>
        <div className={primaryStyle}>
          <div className={secondaryStyle}>
            <div className={titleStyle}>Delivery Frequency:</div>
            <div className="mt-1">{updateData('deliveryFrequency')}</div>
          </div>
          <div className={contentStyle}>{subscriptions.deliveryFrequency}</div>
        </div>
        <div className={primaryStyle}>
          <div className={secondaryStyle}>
            <div>Upcoming Delivery Day:</div>
            <div className="mt-1">{updateData('upcomingDelivery')}</div>
          </div>
          <div className={contentStyle}>
            <p>
              {dayjs(subscriptions.upcomingDelivery).format('MMM, D MMM YYYY')}
            </p>
            <p>Midnight - 7am</p>
          </div>
        </div>
        <div className={primaryStyle}>
          <div className={secondaryStyle}>
            <div>Delivery Address:</div>
            <div className="mt-1">{updateData('deliveryAddress')}</div>
          </div>
          <div className={contentStyle}>
            <p className="whitespace-pre-line">
              {subscriptions.deliveryAddress.split(',').join(',\n')}
            </p>
          </div>
        </div>
        <div className={primaryStyle}>
          <div className={secondaryStyle}>
            <div>Payment:</div>
            <div className="mt-1">{updateData('payment')}</div>
          </div>
          <div className={contentStyle}>
            <div className="flex flex-row">
              {subscriptions.payment.cardType === 'master' && (
                <Image
                  src="/assets/icons/master_card_icon.svg"
                  width="32"
                  height="25"
                  alt="master-card"
                />
              )}
              <div className="ml-3">{subscriptions.payment.cardNo}</div>
            </div>
          </div>
        </div>
        <div className={`${primaryStyle} rounded-b-lg md:rounded-lg`}>
          <div className={secondaryStyle}>
            <div>Subscription Status:</div>
            <div className="mt-1">{updateData('subscriptionStatus')}</div>
          </div>
          <div className={`${contentStyle} text-primary2`}>
            {subscriptions.subscriptionStatus}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscriptionList;
