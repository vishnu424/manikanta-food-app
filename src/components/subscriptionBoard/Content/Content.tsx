import React from 'react';

import Dashboard from '@/components/subscriptionBoard/Dashboard/Dashboard';

type Props = {
  screen: string;
};

const Content: React.FC<Props> = ({ screen }) => {
  return (
    <div className="w-full">
      {screen === 'Dashboard' ? <Dashboard /> : <div>{screen}</div>}
    </div>
  );
};
export default Content;
