import { useState } from 'react';

import Button from '@/components/common/Button/Button';

import RegisterForm from '../RegisterForm/RegisterForm';

type RegisterTabProps = {
  navigatedFrom?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const RegisterTab: React.FC<RegisterTabProps> = (props: RegisterTabProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-7 font-jekoBold text-3xl">
        {props.navigatedFrom === 'checkout' ? (
          <span>Sign up to Checkout</span>
        ) : (
          <span>Get Started!</span>
        )}
      </div>
      <Button className="m-2 w-60" theme="tertiary">
        Sign up with Google
      </Button>
      <Button className="m-2 w-60" theme="tertiary">
        Sign up with Facebook
      </Button>
      <Button className="m-2 w-60" theme="tertiary">
        Sign up with Apple
      </Button>
      <div className="p-3">
        <span className="text-grey-dark">---------- or -----------</span>
      </div>
      {toggle ? (
        <Button
          className="w-60"
          theme="tertiary"
          onClick={() => setToggle(!toggle)}
        >
          Sign up with Email
        </Button>
      ) : (
        <RegisterForm setIsOpen={props.setIsOpen} />
      )}
    </div>
  );
};

export default RegisterTab;
