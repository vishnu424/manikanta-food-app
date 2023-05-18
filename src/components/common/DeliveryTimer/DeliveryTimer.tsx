import dayjs from 'dayjs';
import React from 'react';
import Countdown, { zeroPad } from 'react-countdown';

let currentValues = {
  theme: 'primary',
  days: false,
  hours: false,
  minutes: false,
  seconds: false,
  isSeperately: false,
  columnColor: 'text-black',
};

type Themes = {
  primary: string;
  secondary: string;
  [key: string]: string;
};

const themes: Themes = {
  primary: `flex justify-center w-5 mx-1 mt-1 rounded-md border border-grey-dark bg-off-grey p-1.5 py-1 leading-none`,
  secondary: 'leading-6 text-primary w-5',
};

const getCountType = (type: any, label: string, showColumn = false) => {
  return (
    <>
      {showColumn && (
        <div
          className={`mx-2 flex items-center ${currentValues.columnColor} ${
            currentValues.theme === 'primary' ? 'pb-3' : 'pb-4'
          }`}
        >
          :
        </div>
      )}
      <div className="flex flex-col items-center">
        <div className="flex">
          {currentValues.isSeperately ? (
            <>
              {[...Array(2)].map((_e, i: number) => (
                <div key={i} className={themes[currentValues.theme]}>
                  {zeroPad(type)[i]}
                </div>
              ))}
            </>
          ) : (
            <div
              className={`${themes[currentValues.theme]} ${
                currentValues.theme === 'primary' && 'px-3'
              }`}
            >
              {zeroPad(type)}
            </div>
          )}
        </div>
        <div className="font-jekoSemibold text-xxs leading-4 text-grey-dark">
          {label}
        </div>
      </div>
    </>
  );
};

const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    const Completion = () => <span>You are good to go!</span>;
    // Render a completed state
    return <Completion />;
  }
  // Render a countdown
  const baseStyle =
    'flex flex-row justify-center font-jekoMedium text-lg text-black';

  return (
    <div>
      <div className={baseStyle}>
        {currentValues.days && getCountType(days, 'DAYS', false)}
        {currentValues.hours && getCountType(hours, 'HRS', currentValues.days)}
        {currentValues.minutes &&
          getCountType(
            minutes,
            'MIN',
            currentValues.days || currentValues.hours
          )}
        {currentValues.seconds &&
          getCountType(
            seconds,
            'SEC',
            currentValues.days || currentValues.hours || currentValues.minutes
          )}
      </div>
    </div>
  );
};

type DeliveryTimerType = {
  nextDeliveryDate: any;
  theme: 'primary' | 'secondary';
  days?: boolean;
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
  isSeperately?: boolean;
  showTitle?: boolean;
  columnColor?: string;
};

const DeliveryTimer: React.FC<DeliveryTimerType> = ({
  nextDeliveryDate,
  theme = 'primary',
  days = false,
  hours = false,
  minutes = false,
  seconds = false,
  isSeperately = false,
  showTitle = false,
  columnColor = 'text-black',
}) => {
  const date = nextDeliveryDate || '';
  currentValues = {
    ...currentValues,
    theme,
    days,
    hours,
    minutes,
    seconds,
    isSeperately,
    columnColor,
  };
  return (
    <div className="m-auto max-w-[332px] rounded-lg border border-off-grey px-2 py-3">
      {showTitle && (
        <p className="pb-3 text-center font-jeko text-sm text-black">
          Time left to order and receive delivery
          <span className="block font-jekoBold text-sm text-success-copy">
            {dayjs(nextDeliveryDate).format('ddd, D MMM')}:
          </span>
        </p>
      )}
      <Countdown date={new Date(date)} renderer={renderer} />
    </div>
  );
};

export default DeliveryTimer;
