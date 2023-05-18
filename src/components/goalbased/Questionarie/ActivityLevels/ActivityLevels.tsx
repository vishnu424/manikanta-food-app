import _ from 'lodash';
import { useState } from 'react';

import Button from '@/components/goalbased/Questionarie/Button/Button';
import gbJson from '@/components/goalbased/Questionarie/gb.json';

type Props = {
  onClick: (activity: string) => void;
};

const ActivityLevels: React.FC<Props> = ({ onClick }) => {
  const [level, setLevel] = useState('');

  return (
    <div className="my-14 px-4 md:p-0">
      <div className="mb-8 font-jekoBold text-4xl font-bold leading-9 text-black md:mb-6">
        Describe your weekly activity levels
      </div>
      <div className="md:flex">
        {_.map(gbJson.weeklyActivityLevels, (activity, i) => (
          <Button
            key={i}
            theme={level === activity ? 'secondary' : 'primary'}
            className="mb-6 w-full justify-center px-3 py-5 leading-4 last:mb-0 last:mr-0 md:mr-4 md:mb-0 md:w-44 md:py-4 md:leading-6"
            onClick={() => {
              setLevel(activity);
              onClick(activity);
            }}
          >
            {activity}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ActivityLevels;
