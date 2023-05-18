import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import TextInput from '@/components/common/TextInput/TextInput';
import { AUTH_SELECTOR } from '@/graphql/selectors/auth';
import type { RootStoreType } from '@/models/api';
import { useStore } from '@/models/root-store';

type RegisterFormValues = {
  email: string;
  validateEmail: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type RegisterFormProps = {
  setIsOpen?: (isOpen: boolean) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = observer(
  (props: RegisterFormProps) => {
    const { register, handleSubmit } = useForm<RegisterFormValues>();
    const store = useStore();
    const router = useRouter();
    const onSubmit: SubmitHandler<RegisterFormValues> = async ({
      email,
      firstName,
      lastName,
      password,
    }) => {
      const payload = {
        email,
        firstName,
        lastName,
        password,
      };
      try {
        const response = await (store.api as RootStoreType).mutateRegister(
          {
            input: payload,
          },
          AUTH_SELECTOR
        );
        store.customerStore.setCustomer(response.register.customerInfo);
        if (props.setIsOpen) {
          props.setIsOpen(false);
        } else {
          router.back();
        }
      } catch (error: any) {
        window.alert(error.message);
      }
    };

    return (
      <form
        className="flex flex-col items-center self-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-80 flex-col self-center">
          <div className="w-full">
            <TextInput
              label="First Name"
              name="firstName"
              placeholder="Eg. John"
              register={() => register('firstName', { required: true })}
            />
          </div>
          <div className="w-full">
            <TextInput
              label="Last Name"
              name="lastName"
              placeholder="Eg. Doe"
              register={() => register('lastName', { required: true })}
            />
          </div>
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
              label="Confirm Email"
              name="validateEmail"
              placeholder="Eg. john@gmail.com"
              register={() => register('validateEmail', { required: true })}
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

        <CheckBox
          label="I would like to receive exclusive offers, menu updates and latest news from My Muscle Chef."
          name="remember"
          checked={true}
          register={register}
          onChange={() => {}}
        />

        <Button className="m-5 w-48" theme="primary" type="submit">
          Sign Up & Continue
        </Button>
      </form>
    );
  }
);

export default RegisterForm;
