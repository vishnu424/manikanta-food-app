import React, { useState } from 'react';

import Referal from '@/components/referral/Referral';
import ReferralsCredit from '@/components/referralsCredit/ReferralsCredit';

const ReferralCredit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <ReferralsCredit onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <Referal
          isOpen={isModalOpen}
          isClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default ReferralCredit;
