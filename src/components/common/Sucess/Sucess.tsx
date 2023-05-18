import 'react-sliding-pane/dist/react-sliding-pane.css';

import React, { useState } from 'react';
import SlidingPane from 'react-sliding-pane';

import SelectedButton from '@/components/checkout/SelectedButton/SelectedButton';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';
import { useMediaQuery } from '@/hooks';

export const period = ['Weekly', 'Fortnightly', 'Monthly'];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 632,
    minWidth: 750,
    maxHeight: 'unset',
    padding: 0,
    borderRadius: '10px',
  },
  overlay: {
    background: 'rgba(0,0,0,.7)',
    zIndex: 1000,
  },
};

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

const SucessComponent = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const [showModal, setShowModal] = useState<boolean>(true);

  const [selectedDate, setSelectedDate] = React.useState<any>(dates[0]);
  const [selectedTime, setSelectedTime] = React.useState<String>('');

  const isMobile = useMediaQuery(`(max-width:540px)`);

  const onCloseModel = () => {
    setSelectedDate(dates[0]);
    setIsSuccess(false);
    setSelectedTime('');
  };

  const getSuccessModal = () => {
    return (
      <Modal
        isOpen={isSuccess}
        onRequestClose={() => setIsSuccess(false)}
        headerTitle={'    '}
        customPadding="p-4"
      >
        <div className="relative  my-0 py-0">
          <div className="custom-scroll   text-center  font-jeko lg:px-8 lg:py-6 mobile-425:h-auto">
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
                className="h-10 w-20 rounded-32 border border-black py-2 text-center font-semibold text-black md:w-56 "
                theme={'outline' as any}
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
        <div className="relative  my-0 py-2 px-3">
          <div className="custom-scroll h-auto font-jeko  lg:px-8 lg:py-6 mobile-425:h-auto">
            <h2 className=" mb-4 px-4 text-center text-2xl font-extrabold md:px-0  md:text-xl">
              Change Upcoming Delivery Day
            </h2>
            <div className="flex flex-col gap-7 md:flex-row">
              <div className="flex-1">
                <p className="mb-4 text-base font-bold  text-grey-dark">Date</p>
                <ul
                  style={{
                    overflow: isMobile ? 'auto' : 'unset',
                  }}
                  className="flex w-full items-center space-x-4 overflow-x-auto pb-3  md:grid  md:grid-cols-3 md:gap-4 md:space-x-0 md:overscroll-none"
                >
                  {dates.map((data, index) => {
                    return (
                      <SelectedButton
                        style={{
                          height: '65px',
                          width: '95px',
                          flexShrink: 0,
                        }}
                        onClick={() => {
                          setSelectedDate(data);
                          setSelectedTime('');
                        }}
                        selected={data.id === selectedDate.id}
                        key={index}
                      >
                        {data.day} <br /> {data.month}
                      </SelectedButton>
                    );
                  })}
                </ul>
              </div>
              <div className="h-px w-full bg-slate-400 md:h-0 md:w-px "></div>
              <div className="flex-1">
                <p className="mb-4 text-base font-bold  text-grey-dark">Time</p>
                <ul className="flex flex-wrap gap-4 ">
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
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-xs font-bold leading-4 text-primary">
                Important:
              </p>
              <ul className="mb-2 flex list-disc flex-col gap-2 pl-4 text-xs font-light  leading-4">
                <li>
                  Our couriers{' '}
                  <span className=" font-semibold text-primary">
                    do not call
                  </span>{' '}
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
          className="ml-2 h-10 w-28 md:w-64"
          theme={(selectedTime === '' ? 'disabled' : 'primary') as any}
          onClick={() => {
            setShowModal(false);
            setIsSuccess(true);
          }}
        >
          {title}
        </Button>
      </div>
    );
  };

  return (
    <>
      <div className="static">
        <div
          onClick={() => setShowModal(true)}
          className="absolute bottom-0 flex w-full items-center justify-center rounded-t-2xl pt-2 pb-1 shadow-2xl md:hidden"
        >
          <div>
            <img
              src="/assets/icons/Chevron - Right.svg"
              alt=""
              width="36"
              height="10"
            />
          </div>
        </div>
      </div>
      {isMobile ? (
        <div className="relative">
          <div className="custom-delivert-sliderpane absolute bottom-0">
            <SlidingPane
              isOpen={showModal}
              from="bottom"
              width="100%"
              onRequestClose={() => setShowModal(false)}
              hideHeader
              className="static"
            >
              <div
                className="flex justify-center  pt-2"
                onClick={() => setShowModal(false)}
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
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
            footerChildren={<> {commonButton('Apply Delivery Frequency')}</>}
            customContentStyles={customStyles}
            headerTitle={'    '}
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

export default SucessComponent;
