import React, { useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';

import { Modal } from '@/components/common/Modal/Modal';

type PresetTipProps = {
  tipData: any;
};

export const PresetTip: React.FC<PresetTipProps> = ({ tipData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div
        className="my-4 flex cursor-pointer text-indigo-600"
        onClick={() => setIsModalOpen(true)}
      >
        <HiInformationCircle className="text-xl" />
        &nbsp;
        <span className="text-sm font-bold">{tipData.title}</span>
      </div>
      {isModalOpen && (
        <Modal isOpen={true} onRequestClose={() => setIsModalOpen(false)}>
          <img src={tipData.image.uri.light} alt="" />
        </Modal>
      )}
    </div>
  );
};
