import { useForm } from 'react-hook-form';

import Button from '@/components/common/Button/Button';
import TextInput from '@/components/common/TextInput/TextInput';

const CheckOrderStatus: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};
  return (
    <div className="mt-7">
      <div className="p-3 font-jekoBold text-3xl">
        <span>Check Order Status!</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full">
            <TextInput
              label="Order Number"
              name="orderNumber"
              placeholder="Eg. MYMCA00001234"
              register={() => register('orderNumber', { required: true })}
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
          <Button className="w-44" theme="secondary" link="menu" type="submit">
            Check Status
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckOrderStatus;
