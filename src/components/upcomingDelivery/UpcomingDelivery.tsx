import 'react-sliding-pane/dist/react-sliding-pane.css';

import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import { useMediaQuery } from '@/hooks';

type UpcomingDeliveryProps = {
  isOpen?: boolean;
  isClose: () => void;
};

export const period = ['Weekly', 'Fortnightly', 'Monthly'];
const times = [
  {
    id: 1,
    from: 'Midnight',
    to: '7am',
  },
  { id: 2, from: '8am', to: '6pm' },
];
const dates = [
  {
    id: 1,
    day: 'Tomorrow',
    month: '11 Oct',
  },
  {
    id: 2,
    day: 'Sat',
    month: '12 Oct',
  },
  {
    id: 3,
    day: 'Sun',
    month: '13 Oct',
  },
  { id: 4, day: 'Mon', month: '14 Oct' },
  { id: 5, day: 'Tue', month: '15 Oct' },
  {
    id: 6,
    day: 'Web',
    month: '16 Oct',
  },
];

const UpcomingDelivery: React.FC<UpcomingDeliveryProps> = ({
  isOpen = false,
  isClose,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dates[0]?.id);
  const [selectedTime, setSelectedTime] = useState('');

  const isMobile = useMediaQuery(`(max-width:540px)`);

  const onCloseModel = () => {
    setSelectedDate(selectedDate);
    setIsSuccess(false);
    setSelectedTime('');
  };

  const getSuccessModal = () => {
    return (
      <Modal
        isOpen={isSuccess}
        onRequestClose={() => setIsSuccess(false)}
        customPadding="p-4"
      >
        <div className="relative my-0 py-0">
          <div className="custom-scroll text-center font-jeko lg:px-8 lg:py-6 ">
            <h2 className="mb-8 text-xl font-bold text-black md:text-5xl md:leading-9">
              Success
            </h2>
            <div className="mb-10 grid gap-8 text-base font-semibold md:text-lg md:leading-5">
              <p>The frequency for your subscription has been updated.</p>
              <p>
                Please note this applies to your future orders. Orders already
                processed will not be updated.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Button
                className="h-10 w-20 rounded-32 border border-black py-2 text-center font-semibold text-black md:w-56"
                theme="tertiary"
                onClick={onCloseModel}
              >
                Okay
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  const getmodalContent = () => {
    return (
      <>
        <div className="relative px-3 md:mt-6 md:px-0">
          <div className="custom-scroll h-auto font-jeko  lg:px-8 lg:py-6 ">
            <h2 className=" mb-4 px-4 pt-2 text-center text-2xl font-extrabold md:px-0 md:text-xl">
              Change Upcoming Delivery Day
            </h2>
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="flex-1 md:border-r md:pr-2">
                <p className="mb-3 text-base font-bold text-grey-dark">Date</p>
                <div className="flex gap-2 overflow-x-auto md:grid md:grid-cols-3">
                  {dates.map((data, index) => {
                    return (
                      <SelectedButton
                        onClick={() => {
                          setSelectedDate(data.id);
                          setSelectedTime('');
                        }}
                        selected={data.id === selectedDate}
                        key={index}
                      >
                        <div className="flex w-20 justify-center md:w-auto">
                          {data.day} <br /> {data.month}
                        </div>
                      </SelectedButton>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="mb-3 text-base font-bold text-grey-dark">Time</p>
                <div className="flex flex-wrap gap-4 ">
                  {times.map((data, index) => {
                    return (
                      <SelectedButton
                        onClick={() => setSelectedTime(`${data.id}`)}
                        selected={`${data.id}` === selectedTime}
                        key={index}
                      >
                        {data.from} - {data.to}
                      </SelectedButton>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-xs font-bold leading-4 text-primary">
                Important:
              </p>
              <ul className="mb-2 flex list-disc flex-col gap-2 pl-4 text-xs font-light leading-4">
                <li>
                  Our couriers&nbsp;
                  <span className=" font-semibold text-primary">
                    do not call&nbsp;
                  </span>
                  at time of delivery. You will receive a SMS notification upon
                  delivery. Please provide detailed instructions on where to
                  leave your order if you are not home. Alternatively, please
                  contact us to discuss special delivery arrangements.
                </li>
                <li>
                  Your skipped subscription will be reset if upcoming delivery
                  date is changed.
                </li>
                <li>
                  Your meals will arrive inside an environmentally friendly,
                  recycled insulated and chilled box, staying cool for 5-8
                  hours*
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  const commonButton = (title: String) => {
    return (
      <div className="flex items-center justify-center">
        <Button
          disabled={selectedTime === ''}
          className="h-10 w-28 md:w-64"
          theme={(selectedTime === '' ? 'disabled' : 'primary') as any}
          onClick={() => {
            setIsSuccess(true);
            isClose();
          }}
        >
          {title}
        </Button>
      </div>
    );
  };

  return (
    <>
      {isMobile ? (
        <div className="relative">
          <div>
            <SlidingPane
              className=""
              isOpen={isOpen}
              from="bottom"
              width="100%"
              onRequestClose={() => isClose()}
              hideHeader
            >
              <div
                className="flex justify-center pt-2"
                onClick={() => isClose()}
              >
                <img
                  src="/assets/icons/Chevron - Right.svg"
                  alt=""
                  width="36"
                  height="10"
                />
              </div>
              {getmodalContent()}
              <div className="absolute bottom-0 flex h-16 w-full items-center justify-center border bg-white shadow-2xl">
                {commonButton('Update')}
              </div>
            </SlidingPane>
          </div>
        </div>
      ) : (
        <>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => {
              isClose();
            }}
            footerChildren={<> {commonButton('Apply Delivery Frequency')}</>}
            customPadding="p-4"
          >
            {getmodalContent()}
          </Modal>
        </>
      )}

      {getSuccessModal()}
    </>
  );
};

export default UpcomingDelivery;
