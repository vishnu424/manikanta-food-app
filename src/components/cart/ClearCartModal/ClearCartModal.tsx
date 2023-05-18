import React from 'react';

import Button from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  clearCart: () => void;
}

export const ClearCartModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  clearCart,
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      headerTitle={''}
    >
      <div className="mx-auto w-auto max-w-sm p-2 lg:max-w-xl tablet-768:p-0">
        <div className="flex w-full flex-col bg-white">
          <h3 className="px-3 pt-5 text-center font-jekoBold text-2xl leading-7 text-black lg:px-16 lg:pt-8 lg:text-5xl lg:leading-10">
            Are you sure you want to <br />
            clear your entire cart?
          </h3>
          <div className="flex flex-col items-center justify-end px-6 pt-8 pb-1 lg:pt-12 lg:pb-3">
            <Button theme="primary" type="button" onClick={clearCart}>
              <span className="px-2 py-1 font-jekoSemibold text-base md:text-xl">
                Yes, clear my cart
              </span>
            </Button>
            <button
              className="px-2 pt-4 font-jekoMedium text-base text-attention outline-none focus:outline-none lg:pt-8"
              type="button"
              onClick={onRequestClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
