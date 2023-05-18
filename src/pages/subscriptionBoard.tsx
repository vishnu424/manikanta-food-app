import React from 'react';

import SubscriptionBoard from '@/components/subscriptionBoard/SubscriptionBoard';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const subscriptionBoard: React.FC = () => {
  return (
    <Main
      meta={
        <Meta title="Subscription Board" description="Subscription Board" />
      }
    >
      <div className="h-auto w-full">
        <SubscriptionBoard />
      </div>
    </Main>
  );
};

export default subscriptionBoard;
