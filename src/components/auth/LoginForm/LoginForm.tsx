import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import LinkText from '@/components/common/LinkText/LinkText';
import TextInput from '@/components/common/TextInput/TextInput';
import { useStore } from '@/models/root-store';

type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  setIsOpen?: (isOpen: boolean) => void;
};

const LoginForm: React.FC<LoginFormProps> = observer(
  (props: LoginFormProps) => {
    const { register, handleSubmit } = useForm<LoginFormValues>();
    const store = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<LoginFormValues> = async ({
      email,
      password,
    }) => {
      try {
        await store.customerStore.loginEmailPass(email, password);
        if (props.setIsOpen) {
          props.setIsOpen(false);
        } else {
          router.back();
        }
      } catch (error: any) {
        window.alert(error);
      }
    };

    return (
      <form
        className="flex w-full flex-col items-center justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-80 flex-col justify-between">
          <div className="w-full">
            <TextInput
              label="Email"
              name="email"
              placeholder="Eg. john@gmail.com"
              register={() => register('email', { required: true })}
            />
          </div>
          <div className="w-full">
            <TextInput
              label="Password"
              name="password"
              placeholder=""
              register={() => register('password', { required: true })}
            />
          </div>
        </div>

        <div className="flex w-80 items-baseline justify-between">
          <CheckBox
            label="remember me"
            name="remember"
            checked={true}
            register={register}
            onChange={() => {}}
          />

          <LinkText
            className="text-xxs"
            text="forgot password"
            hasArrow={true}
            link="menu"
          />
        </div>

        <Button className="m-5 w-48" theme="primary" type="submit">
          Sign In & Continue
        </Button>
      </form>
    );
  }
);

export default LoginForm;
