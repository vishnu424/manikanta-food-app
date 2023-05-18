import Image from 'next/image';
import { useState } from 'react';

import AuthContainer from '@/components/auth/AuthContainer/AuthContainer';
import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';

export interface IConfirmButtonContainer {}

export const ConfirmButtonContainer: React.FC<IConfirmButtonContainer> = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex w-2/5 flex-col">
        <div className="pb-1 font-jekoBold leading-4">$128.10</div>
        <div className="font-jekoMedium text-xs leading-4 text-grey-dark">
          Shipping calculated at checkout{' '}
        </div>
      </div>
      <div className="pt-2">
        <Button theme="primary" type="button" onClick={() => setIsOpen2(true)}>
          <span className="px-1 font-jekoSemibold">
            <span className="pr-3">Confirm Order</span>
            <Image
              width={18}
              height={14}
              src="/assets/images/svg/Arrow-disabled.svg"
              alt={''}
              className="mt-2"
            />
          </span>
        </Button>
      </div>
      <Modal
        isOpen={isOpen2}
        onRequestClose={() => setIsOpen2(false)}
        customContentStyles={{ maxWidth: 500 }}
      >
        <AuthContainer navigatedFrom="navbar" />
      </Modal>
    </div>
  );
};
