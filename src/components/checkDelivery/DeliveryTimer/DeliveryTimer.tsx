import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

import type { DeliveryDetailModelType } from '@/models/api';

type DeliveryTimerType = {
  nextDeliveryDate: DeliveryDetailModelType;
};

const renderer = ({ hours, minutes, seconds, completed }: any) => {
  if (completed) {
    const Completion = () => <span>You are good to go!</span>;
    // Render a completed state
    return <Completion />;
  }
  // Render a countdown
  return (
    <div>
      <div className="flex flex-row items-center justify-center font-jekoMedium text-base text-black">
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(hours).toString()[0]}
        </div>
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(hours).toString()[1]}
        </div>
        <span className="pt-2 text-3xl text-grey-dark">:</span>
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(minutes).toString()[0]}
        </div>
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(minutes).toString()[1]}
        </div>
        <span className="pt-2 text-3xl text-grey-dark">:</span>
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(seconds).toString()[0]}
        </div>
        <div className="mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none">
          {zeroPad(seconds).toString()[1]}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center font-jekoBold text-xxs text-grey-dark">
        <div className="mx-3 w-10">HRS</div>
        <div className="mx-3 w-10">MIN</div>
        <div className="mx-3 w-10 pl-2">SEC</div>
      </div>
    </div>
  );
};

const DeliveryTimer: React.FC<DeliveryTimerType> = ({
  nextDeliveryDate,
}: DeliveryTimerType) => {
  const date = nextDeliveryDate?.date ? nextDeliveryDate?.date : '';
  return (
    <div className="m-auto max-w-[332px] rounded-lg border border-off-grey px-2 py-3">
      <p className="pb-3 text-center font-jeko text-sm text-black">
        Time left to order and receive delivery
        <span className="block font-jekoBold text-sm text-success-copy">
          {nextDeliveryDate?.formattedDate}:
        </span>
      </p>
      <Countdown date={new Date(date)} renderer={renderer} />
    </div>
  );
};

export default DeliveryTimer;
