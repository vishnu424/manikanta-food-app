import Image from 'next/image';
import { useState } from 'react';

import { Modal } from '@/components/common/Modal/Modal';

export const ShippingNote: React.FC = () => {
  const [infoModal, setInfoModal] = useState(false);

  return (
    <div className="my-3 flex h-16 items-center justify-center rounded border-2 border-error bg-error-container p-2 font-jekoBold text-xs leading-4">
      <div className="flex" role="button" onClick={() => setInfoModal(true)}>
        <div className="shrink-0 px-1 py-2">
          <Image
            src="/assets/images/svg/info.svg"
            width={16}
            height={16}
            alt={''}
          />
        </div>
        <div className="px-2 underline">
          Note: Our couriers do not call or buzz. <br />
          We do not deliver to PO Boxes or Post Office.
        </div>
      </div>

      {/* Important Info Modal */}
      <Modal
        isOpen={infoModal}
        onRequestClose={() => setInfoModal(false)}
        headerTitle={''}
      >
        <div className="my-3 flex flex-col items-center justify-center">
          <div className="py-5 font-jekoBold text-3xl">IMPORTANT INFO</div>
          <p className="text-center">
            <span className="font-jekoBold">Important:</span> Our couriers{' '}
            <span className="font-jekoBold">do not call or buzz</span> at time
            of delivery. You will receive a SMS notification upon delivery.
            Please provide detailed instructions on where to leave your order if
            you are not home. Alternatively, please contact us to discuss
            special delivery arrangements.
          </p>
          <p className="pt-4 text-center">
            Your meals will arrive inside an environmentally friendly, recycled
            insulated and chilled box, staying cool for 5-8 hours*
          </p>
        </div>
      </Modal>
    </div>
  );
};
