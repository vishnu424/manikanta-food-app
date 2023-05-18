import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';

import { ActiveLevels } from '@/components/weight-loss/ActiveLevels/ActiveLevels';
import { WlpHeader } from '@/components/weight-loss/Header/Header';
import { PresetLoadScreen } from '@/components/weight-loss/LoadScreen/PresetLoadScreen';
import { MealsPlan } from '@/components/weight-loss/MealsPlan/MealsPlan';
import PresetProfile from '@/components/weight-loss/Profile/PresetProfile';
import Questions from '@/components/weight-loss/Questions/Questions';
import { useStore } from '@/models/root-store';

type RegisterProps = {
  mealsData: any;
};

const Register: React.FC<RegisterProps> = observer(({ mealsData }) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const gender = wlp.getPreset('gender');
  const birthday = wlp.getPreset('birthday');
  const weight = wlp.getPreset('weight');
  const [isLoadScreen, setIsLoadScreen] = useState(false);
  const [loadingScreenStep, setIsLoadingScreenStep] = useState('');
  const content = wlp.content.get('preset');
  const presetKey = !_.isEmpty(content) && content[wlp.step].key;

  useEffect(() => {
    setInterval(() => {
      setIsLoadScreen(false);
    }, 5000);
  }, []);

  let pageIndex = wlp.step;

  // Check Conditions Count
  const checkCount = (step: number) => {
    pageIndex = step;
    return _.filter(wlp.content.get('preset')[step].conditions).length;
  };

  // Handle Load Screen
  const handleLoadScreen = (step: string, data: any) => {
    if (!_.isEmpty(data)) {
      setIsLoadingScreenStep(step);
      setIsLoadScreen(true);
    }
  };

  // Next and Prev Step
  const handleIndexChange = (pageType: string) => {
    if (!isLoadScreen) {
      pageIndex = pageType === 'next' ? pageIndex + 1 : pageIndex - 1;
      if (checkCount(pageIndex) > 0) {
        const checkStatus = wlp.content
          .get('preset')
          [pageIndex].conditions.every(function (checkValue: {
            key: string;
            value: string;
            ne: boolean;
          }) {
            if (checkValue.ne === true) {
              return checkValue.value !== wlp.getPreset(checkValue.key);
            }
            return checkValue.value === wlp.getPreset(checkValue.key);
          });
        if (checkStatus) {
          wlp.setStep(pageIndex);
        } else {
          handleIndexChange(pageType);
        }
      } else {
        wlp.setStep(pageIndex);
      }
    }
  };

  const handleBack = () => {
    setIsLoadScreen(false);
    wlp.setMealPlan(false);
  };

  const presetSteps =
    presetKey === 'wlpActive' ? (
      <ActiveLevels activeLevels={wlp.activeLevels.get(wlp.activeLevelType)} />
    ) : (
      <div key={wlp.step}>
        <Questions
          baseIndex={wlp.step}
          currentSelection={wlp.questionId}
          handleIndexChange={() => handleIndexChange('next')}
          handleLoadScreen={handleLoadScreen}
        />
      </div>
    );

  const loadProfile = isLoadScreen ? (
    <PresetLoadScreen loadData={wlp.getLoadScreen(loadingScreenStep)} />
  ) : (
    <div>
      {wlp.step === 0 ? (
        <PresetProfile
          gender={gender}
          birthday={birthday}
          weight={weight}
          step={wlp.step}
          handleIndexChange={() => handleIndexChange('next')}
        />
      ) : (
        presetSteps
      )}
    </div>
  );

  return (
    <>
      <WlpHeader
        title={wlp.isMealsPlan ? 'Review Meal Plan' : 'Tell us about yourself'}
        step={wlp.step}
        handleIndexChange={() => {
          if (wlp.isMealsPlan) {
            handleBack();
          } else {
            handleIndexChange('prev');
          }
        }}
      />
      {wlp.isMealsPlan ? (
        <MealsPlan
          activeLevels={wlp.activeLevels.get(wlp.activeLevelType)}
          mealsData={mealsData}
        />
      ) : (
        loadProfile
      )}
    </>
  );
});

export default Register;
