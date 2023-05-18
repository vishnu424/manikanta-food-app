export type InputTypes = {
  name: string;
  label: string;
  checked: boolean;
  onChange: any;
};

const CheckBox: React.FC<InputTypes> = ({ name, label, checked, onChange }) => {
  return (
    <div className="flex">
      <input
        name={name}
        checked={checked}
        type="checkbox"
        className="h-4 w-4 rounded-md px-3 align-middle accent-success-copy outline-none"
        onChange={onChange}
      />
      <span className="inline-block px-3 font-jekoBold text-sm leading-5">
        {label}
      </span>
    </div>
  );
};

export default CheckBox;
