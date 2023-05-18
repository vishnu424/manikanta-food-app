/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'react';

import LoginTab from '../LoginTab/LoginTab';
import RegisterTab from '../RegisterTab/RegisterTab';
import TabLink from '../TabLink/TabLink';

export type AuthContainerProps = {
  navigatedFrom?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const AuthContainer = (props: AuthContainerProps) => {
  const [tab, setTab] = useState('login');
  return (
    <div className="p-4">
      <div className="mt-5 flex flex-wrap justify-evenly text-center align-middle">
        <div className="flex w-full flex-col items-center">
          <div className="mt-4 flex flex-wrap justify-evenly space-x-8 px-4 text-center align-middle text-sm sm:mt-0">
            <TabLink
              label={'Log In'}
              active={tab === 'login'}
              setTabActive={() => setTab('login')}
            />
            <TabLink
              label={'Sign Up'}
              active={tab === 'register'}
              setTabActive={() => setTab('register')}
            />
          </div>
        </div>
        {tab === 'login' ? (
          <LoginTab
            navigatedFrom={props.navigatedFrom}
            setIsOpen={props.setIsOpen}
          />
        ) : (
          <RegisterTab
            navigatedFrom={props.navigatedFrom}
            setIsOpen={props.setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
