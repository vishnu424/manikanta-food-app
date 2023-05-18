import _ from 'lodash';
import React, { Fragment, useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

import Button from '@/components/common/Button/Button';
import WlpButton from '@/components/weight-loss/Button/Button';
import { PresetTip } from '@/components/weight-loss/Questions/PresetTip';
import { useStore } from '@/models/root-store';

type RegisterProps = {
  baseIndex: number;
  currentSelection: string;
  handleIndexChange: any;
  handleLoadScreen: any;
};

const Questions: React.FC<RegisterProps> = ({
  baseIndex,
  currentSelection,
  handleIndexChange,
  handleLoadScreen,
}) => {
  const { cartStore } = useStore();
  const { wlp } = cartStore;
  const [pregnantTip, setPregnantTip] = useState('');
  const [breastFeedingTip, setBreastFeedingTip] = useState('');
  const [isSelectedId, setIsSelectedId] = useState('');
  const loadingScreenData = wlp.getLoadScreen(`step${wlp.step}`) ?? {};
  const currentStep = `step${wlp.step}`;
  const QuestionsLength = wlp.content.get('preset')[wlp.step].questions.length;

  // Storing Tip for Wlpfemale
  const setTip = (questionId: string, value: string) => {
    if (
      (questionId === 'pregnant' || questionId === 'breastfeeding') &&
      !_.isEmpty(value)
    ) {
      if (questionId === 'pregnant') {
        setPregnantTip(value);
      } else {
        setBreastFeedingTip(value);
      }
    }
  };

  // Checking tip object is undefined
  const tipData = wlp.content.get('preset')[wlp.step].tip ?? {};
  return (
    <Fragment>
      <div className="relative m-auto flex h-[80vh] flex-col px-6 md:px-12 md:pb-12">
        <div className="w-full py-2 pb-16 md:flex md:h-[600px] md:justify-center md:rounded-lg md:border md:py-12">
          <div className="md:max-w-sm">
            <div className="mb-10 md:max-w-sm">
              <div className="mt-6 flex flex-col">
                {wlp.content
                  .get('preset')
                  [wlp.step].questions.map(
                    (question: any, questionIndex: number) => {
                      return (
                        <Fragment key={questionIndex}>
                          {
                            <div
                              className={`${
                                question.id === 'breastfeeding' &&
                                wlp.isPregnant &&
                                'hidden'
                              }`}
                            >
                              <div className="flex flex-col">
                                <h2 className="text-2xl font-bold leading-7 text-black">
                                  {question.question}
                                </h2>
                              </div>
                              {!_.isEmpty(tipData) && (
                                <PresetTip tipData={tipData} />
                              )}
                            </div>
                          }
                          <div
                            className={`flex ${
                              question.id === 'breastfeeding' &&
                              wlp.isPregnant &&
                              'hidden'
                            }`}
                          >
                            <div
                              className={`w-full ${
                                QuestionsLength > 1 && 'inline-flex'
                              }`}
                            >
                              {question.options &&
                                question.options.map(
                                  (option: any, optionIndex: number) => {
                                    return (
                                      <div
                                        key={optionIndex}
                                        className={`${
                                          baseIndex === 1 && 'mr-4'
                                        }`}
                                      >
                                        <WlpButton
                                          key={option.name}
                                          type="button"
                                          value={option.name}
                                          theme={
                                            option.value ===
                                            wlp.getPreset(question.id)
                                              ? 'primary'
                                              : 'secondary'
                                          }
                                          styleType="baseStyle"
                                          onClick={() => {
                                            wlp.setPreset(
                                              question.id,
                                              option.value
                                            );
                                            wlp.setCurrentSelection(
                                              question.id
                                            );
                                            setTip(question.id, option.tip);
                                            wlp.setPresetLoading(
                                              `step${wlp.step}`,
                                              option.loadingScreen
                                            );
                                            setIsSelectedId(question.id);
                                          }}
                                          disabled={false}
                                        >
                                          {option.name}
                                        </WlpButton>
                                        {question.id !== 'pregnant' &&
                                          question.id !== 'breastfeeding' && (
                                            <div>
                                              {option.value ===
                                                currentSelection && (
                                                <div className="my-4 ml-2 border-l border-black pl-2 text-sm font-thin leading-4 text-black">
                                                  <div>{option.tip}</div>
                                                </div>
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    );
                                  }
                                )}
                            </div>
                          </div>
                        </Fragment>
                      );
                    }
                  )}
              </div>
              {((isSelectedId === 'pregnant' && wlp.isPregnant) ||
                (isSelectedId === 'breastfeeding' && wlp.isBreastfeeding)) && (
                <div className="flex">
                  <div className="bg-gray16 text-orange3 max-w-sm rounded-lg py-2 pl-2 text-sm leading-4 text-black md:px-3">
                    {isSelectedId === 'pregnant' &&
                      wlp.isPregnant &&
                      pregnantTip}
                    {isSelectedId === 'breastfeeding' &&
                      wlp.isBreastfeeding &&
                      breastFeedingTip}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray16 fixed bottom-0 left-0 z-20 flex w-full items-center justify-center p-5">
        {wlp.isFemale && wlp.isPregnant ? (
          <Button
            type="button"
            theme="primary"
            disabled={!(wlp.isOptionSelected > -1)}
            link="menu"
          >
            Browse Menu
            <HiArrowSmRight className="ml-12" />
          </Button>
        ) : (
          <Button
            type="button"
            theme="primary"
            disabled={!(wlp.isOptionSelected > -1)}
            onClick={() => {
              if (wlp.isFixedPlan.length > 0) {
                wlp.setMealPlan(true);
              } else {
                handleIndexChange();
              }
              handleLoadScreen(currentStep, loadingScreenData);
            }}
          >
            Continue
            <HiArrowSmRight className="ml-12" />
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default Questions;
