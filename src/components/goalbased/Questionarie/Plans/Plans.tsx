import _ from 'lodash';
import { useState } from 'react';

import Button from '@/components/goalbased/Questionarie/Button/Button';
import gbJson from '@/components/goalbased/Questionarie/gb.json';

type Props = {
  onClick: (activity: string) => void;
};

const Plans: React.FC<Props> = ({ onClick }) => {
  const [planType, setPlanType] = useState('');

  return (
    <div className="my-14 px-4 md:p-0">
      <div className="mb-8 font-jekoBold text-4xl font-bold leading-9 text-black md:mb-6">
        How many days would you like in your plan?
      </div>
      <div>
        {_.map(gbJson.daysPlan, (plan, i: any) => (
          <Button
            key={i}
            theme={planType === plan.plan ? 'secondary' : 'primary'}
            className="mb-4 w-full justify-start p-2 last:mb-0"
            onClick={() => {
              setPlanType(plan.plan);
              onClick(plan.plan);
            }}
          >
            <div
              className={`${
                planType === plan.plan ? 'bg-primary3' : 'bg-rhubarb-lite'
              } mr-4 flex items-center rounded-md px-2 py-1`}
            >
              <span className="pr-1 text-5xl leading-8">{plan.plan}</span>{' '}
              <span className="text-xxs font-bold leading-4">Days</span>
            </div>
            <span>
              <span className="font-jekoBold">meals</span> from
              <span className="pl-1 text-success-secondary1">
                ${plan.price} each
              </span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Plans;
