import { memo } from 'react';

type TabProps = {
  onScrollToDay: (id: any) => void;
  days: any;
  active?: any;
};

const Tabs: React.FC<TabProps> = ({ onScrollToDay, days, active }) => {
  const handleClick = (tab: number) => {
    onScrollToDay(tab);
  };

  return (
    <div className="flex flex-row space-x-8 overflow-x-auto bg-white">
      {days.map((tab: any, index: number) => {
        return (
          <div
            key={index}
            className={`cursor-pointer snap-start rounded-full px-4 py-2 font-jeko text-sm text-grey-dark ${
              active === tab && 'bg-rhubarb-lite text-rhubarb-dark'
            }`}
          >
            <p onClick={() => handleClick(tab)}>
              Day
              <span className="pl-1.5 font-jekoBold text-base">
                0{index + 1}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Tabs);
