import React, { useState } from 'react';

import Content from '@/components/subscriptionBoard/Content/Content';
import Menu from '@/components/subscriptionBoard/LeftMenu/LeftMenu';

const SubscriptionBoard: React.FC = () => {
  const [screen, setScreen] = useState('Dashboard');
  return (
    <div className="flex flex-col md:flex-row">
      <Menu handleClick={(item) => setScreen(item)} />
      <Content screen={screen} />
    </div>
  );
};
export default SubscriptionBoard;
