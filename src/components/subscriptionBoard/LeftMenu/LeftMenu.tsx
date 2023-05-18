import _ from 'lodash';
import React, { useState } from 'react';

import CreditCard from '@/components/icons/CreditCard';
import DollarSquare from '@/components/icons/DollarSquare';
import Home from '@/components/icons/Home';
import Location from '@/components/icons/Location';
import Person from '@/components/icons/Person';
import { useMediaQuery } from '@/hooks';

type Props = {
  handleClick: (option: string) => void;
};

const IconImage = (icon: any, isActive: any) => {
  const isMobileDevice = useMediaQuery(`(max-width:767px)`);
  const smallDevice = () => (isActive ? '#F5F6F9' : '#848484');
  const desktop = () => (isActive ? '#DB2430' : '#848484');

  const color = isMobileDevice ? smallDevice() : desktop();
  if (icon === 'Home') {
    return <Home width={11} height={12} color={color} />;
  }
  if (icon === 'Location') {
    return <Location width={11} height={14} color={color} />;
  }
  if (icon === 'DollarSquare') {
    return <DollarSquare width={15} height={10} color={color} />;
  }
  if (icon === 'CreditCard') {
    return <CreditCard width={14} height={11} color={color} />;
  }
  if (icon === 'Person') {
    return <Person width={11} height={11} color={color} />;
  }
  return null;
};
const Menu: React.FC<Props> = ({ handleClick }) => {
  const [profileName] = useState('Celina');
  const menu = [
    { id: 1, name: 'Dashboard', icon: 'Home' },
    { id: 2, name: 'Address', icon: 'Location' },
    { id: 3, name: 'Payment', icon: 'DollarSquare' },
    { id: 4, name: 'Credit', icon: 'CreditCard' },
    { id: 5, name: 'Details', icon: 'Person' },
  ];
  const [active, setActive] = useState(menu[0]);
  return (
    <div className="h-auto w-full bg-rhubarb-lite px-4 pt-3 md:w-1/6 md:py-8 md:px-2 lg:px-5 xl:px-10">
      <div className="pb-3 font-jeko text-2xl leading-[30px] md:pb-8">
        Hello <span className="font-jekoBold">{profileName}</span>
      </div>
      <ul className="flex flex-row overflow-x-auto pb-3 md:flex-col md:pb-0">
        {_.map(menu, (option, i) => {
          const isActive = active && active.id === option.id;
          return (
            <li
              key={i}
              onClick={() => {
                setActive(option);
                handleClick(option.name);
              }}
              className={`${
                isActive
                  ? 'rounded-lg bg-chef-bean text-off-grey md:rounded-none md:border-primary md:bg-transparent md:text-primary'
                  : 'text-grey-dark md:border-transparent'
              } mr-4 cursor-pointer py-1 px-2 last:mr-0 md:mr-0 md:mb-3 md:border-l-4 md:py-2 md:px-5`}
            >
              <div className="flex items-center">
                {IconImage(option.icon, isActive)}
                <div className="flex items-center pl-1.5 pt-0.5 font-jekoBold text-xs leading-4">
                  {option.name}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
