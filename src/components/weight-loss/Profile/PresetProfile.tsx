import dayjs from 'dayjs';
import _ from 'lodash';
import React, { Fragment } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

import Button from '@/components/common/Button/Button';
import WlpButton from '@/components/weight-loss/Button/Button';
import GENDER_DATA from '@/mock-data/genders.json';
import { useStore } from '@/models/root-store';

type PresetProfileProps = {
  birthday: string;
  weight: string;
  gender: string;
  step: number;
  handleIndexChange: any;
};

const PresetProfile: React.FC<PresetProfileProps> = ({
  birthday,
  weight,
  gender,
  step,
  handleIndexChange,
}) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const content = wlp.content.get('preset');
  const getProfileData = !_.isEmpty(content) && content[step];
  const years = dayjs().diff(birthday, 'years', false);
  const disabled = !(
    !_.isEmpty(gender) &&
    !_.isEmpty(birthday) &&
    !_.isEmpty(weight) &&
    years > 17 &&
    Number(weight) > 44
  );
  return (
    <Fragment>
      <div className="m-auto flex h-[80vh] flex-col px-6 md:px-12 md:pb-12">
        <div className="w-full py-2 pb-16 md:flex md:h-[600px] md:justify-center md:rounded-lg md:border md:py-12">
          <div className="md:max-w-sm">
            <div className="flex flex-col">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-black">
                  {getProfileData.title}
                </h2>
                <p className="mb-6 w-3/4 text-xs font-bold leading-4">
                  {getProfileData.description}
                </p>
              </div>
              <div className="mb-4 flex flex-col md:mr-2">
                <span className="text-sm text-black">
                  {getProfileData.questions[0].question}
                </span>
                <div className="flex">
                  {GENDER_DATA?.map((g: any, gIndex: number) => {
                    return (
                      <WlpButton
                        key={gIndex}
                        theme={gender === g.name ? 'primary' : 'secondary'}
                        type="button"
                        onClick={() =>
                          wlp.setPreset('gender', g.name.toLowerCase())
                        }
                        styleType="baseStyle"
                        disabled={false}
                      >
                        {_.capitalize(g.name)}
                      </WlpButton>
                    );
                  })}
                </div>
              </div>
              <div className="mb-6 flex flex-col md:mr-2">
                <span className="text-sm text-black">
                  {getProfileData.questions[1].question}
                </span>
                <div className="bg-gray16 mt-2 flex self-start rounded-md border py-1">
                  <div className="px-2">
                    <input
                      type="date"
                      value={birthday}
                      name={birthday}
                      className="bg-gray16 rounded-lg py-1 text-base text-black"
                      onChange={(e) =>
                        wlp.setPreset('birthday', e.target.value)
                      }
                      min="1920-01-01"
                      max={dayjs().format('YYYY-MM-DD')}
                    ></input>
                  </div>
                </div>
                {!_.isEmpty(birthday) && years < 18 && (
                  <div className="text-base text-red-300">min age 18</div>
                )}
              </div>
              <div className="mb-6 flex flex-col md:mr-2">
                <span className="text-sm text-black">
                  {getProfileData.questions[2].question}
                </span>
                <div className="bg-gray16 mt-2 flex self-start rounded-md border py-1">
                  <div className="border-r border-black px-2 py-1">
                    <input
                      className="bg-gray16 border-0 text-base"
                      type="number"
                      value={weight}
                      name="weight"
                      min="45"
                      max="200"
                      onChange={(e) => wlp.setPreset('weight', e.target.value)}
                    />
                  </div>
                  <div className="px-2 py-1 text-base">
                    <span>kg</span>
                  </div>
                </div>
                {Number(weight) > 0 && Number(weight) < 45 && (
                  <div className="text-base text-red-300">min weight 45</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray16 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center p-5">
          <Button
            type="button"
            theme="primary"
            disabled={disabled}
            onClick={handleIndexChange}
          >
            Continue <HiArrowSmRight className="ml-12" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default PresetProfile;
