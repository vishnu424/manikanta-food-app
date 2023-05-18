import React, { Fragment, useState } from 'react';

import AccordionItem from './common/AccordionItem/AccordionItem';
// import BaseAccordian from "@/components/common/BaseAccordian";
// import BaseCard from '@/components/common/BaseCard';

const questionsAnswers = [
  {
    day: 'Day1',
    dietList: [
      {
        title: 'Title Value 1',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$10.95',
      },
      {
        title: 'Title Value 2',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$9.95',
      },
    ],
  },
  {
    day: 'Day2',
    dietList: [
      {
        title: 'Title Value 2',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$10.95',
      },
    ],
  },
  {
    day: 'Day3',
    dietList: [
      {
        title: 'Title Value 3',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$10.95',
      },
    ],
  },
  {
    day: 'Day4',
    dietList: [
      {
        title: 'Title Value 4',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$10.95',
      },
    ],
  },
  {
    day: 'Day5',
    dietList: [
      {
        title: 'Title Value 5',
        imageSrc:
          'https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400',
        price: '$10.95',
      },
    ],
  },
];

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showPlansList = index === activeIndex ? 'show-plans' : '';
    const ariaExpanded = index === activeIndex ? 'true' : 'false';
    return (
      <AccordionItem
        key={index}
        showPlansList={showPlansList}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });
  return (
    <Fragment>
      <p>
        View your personalised meal plan below. This plan has been selected
        based on your exercise frequency to help you reach your fitness goal.
        Simply review the meals and swap any to create your dedicated meal plan
        for the week.
      </p>
      {/* <BaseAccordian 
            title="Day 1"
            indexVal={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className="grid grid-cols-7 gap-2">
              <div>
                <BaseCard
                imageSrc = "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwa355b422/images/hi-res/BE032.jpg?sw=400&sh=400"
                title = "Cajun Beef With Sweet Potato Wedges"
                price = "$10.95"
                />
              </div>
            </div>    
          </BaseAccordian>
          <BaseAccordian 
            title="Day 2"
            indexVal={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            <div className="grid grid-cols-7 gap-2">
              <div>
                <BaseCard
                imageSrc = "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dwce70a8fb/images/hi-res/BE017.jpg?sw=400&sh=400"
                title = "Naked Beef Fajitas"
                price = "$10.95"
                />
              </div>
              <div>
              <BaseCard
                imageSrc = "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dw0bedd853/images/hi-res/DR006.jpg?sw=400&sh=400"
                title = "Protein Shake Starberry Flavoured"
                price = "$5.95"
                />
              </div>
              <div>
              <BaseCard
                imageSrc = "https://www.mymusclechef.com/dw/image/v2/BDTZ_PRD/on/demandware.static/-/Sites-mmc-master-catalog/default/dw451655f3/images/hi-res/SN035.jpg?sw=400&sh=400"
                title = "Thai Beef Power Bowl"
                price = "$7.95"
                />
              </div>
            </div>   
          </BaseAccordian> */}
      <div>{renderedQuestionsAnswers}</div>
    </Fragment>
  );
};

export default Plans;
