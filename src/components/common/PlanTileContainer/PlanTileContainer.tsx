import { useSelector } from '@plasmicapp/loader-nextjs';
import type { FC } from 'react';
import React from 'react';

import type {
  GeneralPlanSectionRecordModelType,
  PlanTileRecordModelType,
} from '@/models/api';

import PlanTile, { Plan } from '../PlanTile/PlanTile';

type Props = {
  className?: string;
};

const PlanTileContainer: FC<Props> = ({ className }) => {
  const generalPageData = useSelector('general');
  const sections = generalPageData?.sections;

  const planSection =
    sections &&
    sections.find(
      (item: GeneralPlanSectionRecordModelType) =>
        // eslint-disable-next-line
    item.__typename === 'GeneralPlanSectionRecord'
    );

  if (!planSection) return null;

  const { plans } = planSection;
  return (
    <div
      className={`grid w-auto grid-cols-2 gap-3 md:flex md:space-x-3 ${className}`}
    >
      {plans.map((plan: PlanTileRecordModelType, idx: number) => {
        const mealPlan = (plan.plan as Plan) || Plan.Custom;
        return (
          <PlanTile
            key={idx}
            image={plan?.image?.url}
            plan={mealPlan}
            buttonText={plan?.buttonText}
            link={plan?.buttonLink}
          />
        );
      })}
    </div>
  );
};

export default PlanTileContainer;
