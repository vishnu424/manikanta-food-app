import _ from 'lodash';
import Image from 'next/image';

export type InputTypes = {
  register: any;
  placeholder: string;
  label: string;
  name: string;
  apply?: boolean;
  error?: any;
  onChange?: (event: any) => void;
  prefix?: any;
  type?: any;
};

const TextInput: React.FC<InputTypes> = ({
  register,
  placeholder,
  label,
  name,
  apply = false,
  error = false,
  onChange,
  prefix,
  type = 'text',
}) => {
  const className =
    'h-12 w-full rounded-md bg-clip-padding p-3 text-gray-700 outline-none';
  const errorStyle = error ? 'text-error' : '';
  const border = error ? ' border-2 border-error' : ' border border-grey-dark';

  return (
    <div className="relative my-1 py-2">
      <div className={className + border}>
        <span className="mr-1 text-grey-dark">{prefix}</span>
        <input
          {...register(name)}
          placeholder={placeholder}
          type={type}
          className={!_.isEmpty(prefix) ? 'w-11/12' : 'w-full'}
          onChange={onChange}
        />
      </div>
      {error && (
        <div className="absolute bottom-9 right-2">
          <Image
            src="/assets/images/svg/error.svg"
            width="24"
            height="24"
            alt="error"
          />
        </div>
      )}
      {apply && (
        <span className="absolute right-6 bottom-1/3 font-jekoMedium text-sm text-attention">
          Apply
        </span>
      )}
      <span
        className={`absolute top-0 left-4 bg-white px-2 text-xs ${errorStyle}`}
      >
        {label}
      </span>
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};

export default TextInput;
