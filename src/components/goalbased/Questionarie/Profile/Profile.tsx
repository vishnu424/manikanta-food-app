import _ from 'lodash';
import { useState } from 'react';

import Button from '@/components/goalbased/Questionarie/Button/Button';
import gbJson from '@/components/goalbased/Questionarie/gb.json';
import LinearProgressBar from '@/components/goalbased/Questionarie/LinearProgress/LinearProgress';

type Props = {
  onHandleChange: (info: {}) => void;
  showActivityLevels: (val: boolean) => void;
};

const initialState = {
  gender: '',
  age: '18-25',
  weight: '',
};

const Profile: React.FC<Props> = ({ onHandleChange, showActivityLevels }) => {
  const [profileInfo, setProfileInfo] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = async (field: string, val: string) => {
    let fieldVal = val;
    let err = { ...error };
    if (fieldVal !== '') {
      err = { [field]: '' };
      if (field === 'weight') {
        if (fieldVal.indexOf('e') >= 0 || _.toNumber(fieldVal) < 45) {
          fieldVal = '';
          err = { [field]: 'Minimum weight is 45' };
        }
      }
    } else if (fieldVal === '') {
      err = { [field]: 'Please enter the value' };
    }
    setError({ ...error, ...err });
    const data = { ...profileInfo, [field]: fieldVal };
    await setProfileInfo(data);
    await onHandleChange(data);
    if (!Object.values(data).includes('') && Object.values(err).includes('')) {
      await showActivityLevels(true);
    }
  };

  const getAgeFromSlider = (e: any) => {
    handleChange('age', e.value);
  };

  return (
    <div className="mt-6 mb-14 px-4 md:p-0">
      <div className="mb-8 font-jekoBold text-4xl font-bold leading-9 text-black md:mb-6">
        Let’s get to know you better!
      </div>
      <div className="mb-8">
        <h4 className="mb-4 font-jekoBold text-base text-black">
          My gender is
        </h4>
        <div className="flex">
          {_.map(gbJson.gender, (val, i) => (
            <Button
              key={i}
              theme={
                _.get(profileInfo, 'gender', null) === val
                  ? 'secondary'
                  : 'primary'
              }
              className={`${
                _.get(profileInfo, 'gender', null) === val
                  ? 'p-2.5 md:py-3.5'
                  : 'p-3 md:py-4'
              } mr-4 w-24 justify-center leading-4 last:mr-0`}
              onClick={() => handleChange('gender', val)}
            >
              {_.capitalize(val)}
            </Button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h4 className="mb-4 font-jekoBold text-base text-black">
          My age range is
        </h4>
        <div className="mt-9 mb-16 md:m-0">
          <div className="hidden md:flex">
            {_.map(gbJson.ages, (age, j) => (
              <Button
                key={j}
                theme={
                  _.get(profileInfo, 'age', null) === age
                    ? 'secondary'
                    : 'primary'
                }
                className="mr-4 w-24 justify-center p-3 leading-4 last:mr-0 md:py-4"
                onClick={() => handleChange('age', age)}
              >
                {age}
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <LinearProgressBar
              onChangeProgress={getAgeFromSlider}
              labels={gbJson.ages || []}
              showLabel={true}
              activeLabel={profileInfo.age}
            />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h4 className="mb-4 font-jekoBold text-base text-black">
          My current weight is
        </h4>
        <div className="relative">
          <input
            type="number"
            id="floating_outlined"
            className="peer focus:border-black-600 focus:border-black-500 block w-32 appearance-none rounded-lg border border-black bg-transparent px-5 py-2 pt-4 text-sm focus:outline-none focus:ring-0"
            placeholder=" "
            defaultValue={0}
            onChange={(e) => handleChange('weight', e.target.value)}
          />
          <label
            htmlFor="floating_outlined"
            className="peer-focus:text-black-600 peer-focus:text-black-500 absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Weight (kg)
          </label>
        </div>
        <div className="mt-1 text-error">{_.get(error, 'weight', null)}</div>
      </div>
    </div>
  );
};

export default Profile;
