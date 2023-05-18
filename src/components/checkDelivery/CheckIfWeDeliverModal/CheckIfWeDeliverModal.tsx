import { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from 'react-hook-form';

import DeliveryDetails from '@/components/checkDelivery/DeliveryDetails/DeliveryDetails';
import PostcodeEntry from '@/components/checkDelivery/PostcodeEntry/PostcodeEntry';
import { Modal } from '@/components/common/Modal/Modal';

export type Ref = HTMLDivElement | null;

const CheckIfWeDeliverModal = forwardRef<any | null>((_, ref) => {
  const [showModal, setShowModal] = useState(false);
  useImperativeHandle(ref, () => ({
    showCheckIfWeDeliverModal(): void {
      setShowModal(true);
    },
  }));

  const { register } = useForm();
  const [isShownDeliveryComp, setIsShownDeliveryComp] = useState(false);

  const [postalData, setPostalData] = useState<any>([]);

  const handleClick = (props: any) => {
    setIsShownDeliveryComp((current) => !current);
    setPostalData(props);
  };

  const customContentStyles = {
    width: 'fit-content',
    minWidth: 300,
    maxHeight: '90%',
    overflow: 'initial',
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      headerTitle={''}
      customContentStyles={customContentStyles}
    >
      {!isShownDeliveryComp && (
        <div
          className={`h-[194px] w-[270px] md:h-[244px] md:max-h-[244px] md:w-[348px]`}
        >
          <PostcodeEntry register={register} handleClick={handleClick} />
        </div>
      )}
      {isShownDeliveryComp && (
        <div
          className={`mt-7 h-[75vh] overflow-y-scroll scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 md:h-[552px]`}
        >
          <div className={`md:h-[552px] md:w-[546px]`}>
            <DeliveryDetails postalData={postalData} />
          </div>
        </div>
      )}
    </Modal>
  );
});

CheckIfWeDeliverModal.displayName = 'CheckIfWeDeliverModal';

export default CheckIfWeDeliverModal;
