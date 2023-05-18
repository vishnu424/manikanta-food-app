import { useRouter } from 'next/router';
import { useState } from 'react';

import Button from '@/components/common/Button/Button';
import { useStore } from '@/models/root-store';

import LoginForm from '../LoginForm/LoginForm';

export type LoginTabProps = {
  navigatedFrom?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const LoginTab: React.FC<LoginTabProps> = (props: LoginTabProps) => {
  const [toggle, setToggle] = useState(false);
  const store = useStore();
  const router = useRouter();
  const onGoogleClick = async () => {
    const { googleAuth } = await store.api.queryGoogleAuth();
    router.push(googleAuth.url);
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="p-7 font-jekoBold text-3xl">
        {props.navigatedFrom === 'checkout' ? (
          <span>Sign in to Checkout</span>
        ) : (
          <span>Welcome Back!</span>
        )}
      </div>
      <Button className="m-2 w-60" theme="tertiary" onClick={onGoogleClick}>
        Continue with Google
      </Button>
      <Button className="m-2 w-60" theme="tertiary">
        Continue with Facebook
      </Button>
      <Button className="m-2 w-60" theme="tertiary">
        Continue with Apple
      </Button>
      <div className="p-3">
        <span className="text-grey-dark">---------- or ----------</span>
      </div>
      {toggle ? (
        <Button
          className="w-60"
          theme="tertiary"
          onClick={() => setToggle(!toggle)}
        >
          Continue with Email
        </Button>
      ) : (
        <LoginForm setIsOpen={props.setIsOpen} />
      )}
    </div>
  );
};

export default LoginTab;
