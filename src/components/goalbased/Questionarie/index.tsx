import _ from 'lodash';
import { useRef, useState } from 'react';

import ActivityLevels from '@/components/goalbased/Questionarie/ActivityLevels/ActivityLevels';
import CircularProgress from '@/components/goalbased/Questionarie/CircularProgress/CircularProgress';
import LinearProgressBar from '@/components/goalbased/Questionarie/LinearProgress/LinearProgress';
import Plans from '@/components/goalbased/Questionarie/Plans/Plans';
import Profile from '@/components/goalbased/Questionarie/Profile/Profile';

type Props = {
  showCreateMyPlan: (val: boolean) => void;
  setButtonDisable: (val: boolean) => void;
};

const caloriesTaken = ['3120', '4620', '6104'];

const initialState = {
  profile: {},
  activityLevel: '',
  calories: '',
  plan: '',
};

export const GoalBase: React.FC<Props> = ({
  showCreateMyPlan,
  setButtonDisable,
}) => {
  const activityRef = useRef(null);
  const plansRef = useRef(null);
  const [calories, setCalories] = useState({ percentage: 0, value: '' });
  const [enableActivity, setActivity] = useState(false);
  const [gb, setGb] = useState(initialState);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const executeScroll = (ref: any) => {
    scrollToRef(ref);
  };

  const scrollToActivity = async (val: any) => {
    await setActivity(val);
    executeScroll(activityRef);
  };

  const setActivityLevel = async (activity: string) => {
    await setGb({ ...gb, activityLevel: activity });
    executeScroll(plansRef);
  };

  const getCaloriesFromSlider = async (e: any) => {
    await setGb({ ...gb, calories: e.value });
    setCalories(e);
  };

  const profileInfo = (info: {}) => {
    setGb({ ...gb, profile: info });
    const data = Object.values(info);
    if (data.length > 0 && !data.includes('')) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  const setPlan = (plan: string) => {
    setGb({ ...gb, plan });
    showCreateMyPlan(true);
  };

  return (
    <div className="m-auto flex justify-start sm:justify-center md:px-12 md:py-20">
      <div className="w-full md:w-5/12">
        <div>
          <Profile
            onHandleChange={profileInfo}
            showActivityLevels={(val) => {
              scrollToActivity(val);
            }}
          />
          {Object.values(gb.profile).length > 0 && enableActivity && (
            <>
              <hr className="mt-6 md:hidden" />
              <div ref={activityRef}>
                <ActivityLevels onClick={setActivityLevel} />{' '}
              </div>
            </>
          )}
          {!_.isEmpty(gb.activityLevel) && (
            <div ref={plansRef}>
              <hr className="mt-6 md:hidden" />
              <div className="my-14 px-4 md:p-0">
                <div className="mb-8 font-jekoBold text-4xl font-bold leading-9 text-black md:mb-6">
                  Adjust your daily calorie intake
                </div>
                <div className="">
                  <div className="mb-11 flex justify-center">
                    <CircularProgress
                      strokeWidth={18}
                      sqSize={200}
                      percentageValues={calories}
                    />
                  </div>
                  <div className="mt-2 md:mt-0">
                    <LinearProgressBar
                      labels={caloriesTaken}
                      showLabel={false}
                      onChangeProgress={getCaloriesFromSlider}
                      activeLabel={caloriesTaken[0]}
                      min={30}
                    />
                    <div className="text-center font-jekoBold text-base leading-5 text-black">
                      Intake to support everyday healthy living
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-6 md:hidden" />
              <Plans onClick={setPlan} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
