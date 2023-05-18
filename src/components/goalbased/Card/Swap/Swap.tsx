import React from 'react';
import { HiSwitchHorizontal } from 'react-icons/hi';

import WlpButton from '@/components/weight-loss/Button/Button';

type SwapProps = {
  onClick?: () => void;
};

export const Swap: React.FC<SwapProps> = () => {
  return (
    <WlpButton theme="tertiary" styleType="tertiaryStyle">
      Swap <HiSwitchHorizontal className="ml-2" />
    </WlpButton>
  );
};
