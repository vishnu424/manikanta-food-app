import type { NextPage } from 'next';
import React, { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi';

import { Card } from '../Card/Card';

export type AccordianPropTypes = {
  showPlansList: any;
  ariaExpanded: any;
  item: any;
  index: number;
  onClick: any;
};

const AccordionItem: NextPage<AccordianPropTypes> = ({
  showPlansList,
  ariaExpanded,
  item,
  index,
  onClick,
}) => {
  return (
    <Fragment>
      <div
        className="faq__question mt-2 flex justify-between overflow-hidden rounded p-2"
        key={item.day}
      >
        <div className="text-3xl font-bold text-black">{item.day}</div>
        <div
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index}_desc`}
          onClick={onClick}
        >
          <HiChevronDown />
        </div>
      </div>
      <div className="pt-6 pl-12">
        <div id={`faq${index}_desc`} className={`faq__desc ${showPlansList}`}>
          <div className="grid grid-cols-7 gap-2 pb-2">
            {item.dietList.map((diet: any) => (
              <Card
                key={diet.title}
                title={diet.title}
                imageSrc={diet.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccordionItem;
