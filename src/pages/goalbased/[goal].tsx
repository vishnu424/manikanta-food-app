import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import MealsPlan from '@/components/goalbased/MealPlan/index';
import { GoalBase } from '@/components/goalbased/Questionarie/index';
import { useMediaQuery } from '@/hooks';
import { Meta } from '@/layouts/Meta';
import type { ProductModelType } from '@/models/api';
import type { GoalBasedPlan } from '@/shared/types';
import { Main } from '@/templates/Main';

type GoalBasedProps = {
  goalbasedplan: GoalBasedPlan;
  products: ProductModelType[];
};

const Goal: NextPage<GoalBasedProps> = ({ goalbasedplan }) => {
  const [enableButton, setButton] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [isMealPlan, setIsMealPlan] = useState(false);
  const mobileDevice = useMediaQuery(`(max-width:767px)`);
  return (
    <Main
      meta={
        <Meta
          title={goalbasedplan.name}
          description={goalbasedplan.description}
        />
      }
    >
      <div>
        {!isMealPlan ? (
          <div>
            <GoalBase
              showCreateMyPlan={(val) => setButton(val)}
              setButtonDisable={(val) => setButtonDisable(val)}
            />
            {enableButton && (
              <div className="fixed bottom-0 z-10 flex w-full justify-center bg-white py-6 px-3 shadow-3xl">
                <Button
                  theme={mobileDevice ? 'secondary' : 'primary'}
                  className="px-16 md:px-24"
                  disabled={buttonDisable}
                  onClick={() => setIsMealPlan(true)}
                >
                  <div className="w-full py-1 font-jekoSemibold text-base leading-4 md:py-2 md:font-jekoBold md:leading-[22px]">
                    Create My Plan
                  </div>
                </Button>
              </div>
            )}
          </div>
        ) : (
          <MealsPlan
            setIsMealPlan={(val) => {
              setIsMealPlan(val);
              setButton(false);
            }}
          />
        )}
      </div>
    </Main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { goal } = context.params!;
  const goalBasedResponse = await fetch(
    `${process.env.BACKEND_API}/mealplan/goalBased`
  );
  const goalbasedplans: GoalBasedPlan[] = await goalBasedResponse.json();
  const goalbasedplan = goalbasedplans.find((plan) => plan.goal === goal);
  const productsResponse = await fetch(`${process.env.BACKEND_API}/products`);
  const products: ProductModelType[] = await productsResponse.json();

  return {
    props: {
      goalbasedplan,
      products,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const goalbasedplans: string[] = ['caloriecontrol', 'musclegain'];

  const paths = goalbasedplans.map((goal) => {
    return {
      params: { goal },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default Goal;
