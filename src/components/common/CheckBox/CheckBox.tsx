export type InputTypes = {
  register: any;
  name: string;
  label: string;
  checked: boolean;
  onChange: any;
};

const CheckBox: React.FC<InputTypes> = ({
  register,
  name,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="">
      <input
        {...register(name)}
        name={name}
        checked={checked}
        type="checkbox"
        className="h-4 w-4 rounded-md px-3 align-middle accent-success-copy outline-none"
        onChange={onChange}
      />
      <span className="inline-block px-3 pb-2 text-xs">{label}</span>
    </div>
  );
};

export default CheckBox;
