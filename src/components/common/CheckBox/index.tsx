import React from 'react';

import CheckIcon from '../../icons/CheckIcon';

interface CheckBoxProps {
  checked?: boolean;
  onClick?: () => void;
  dataInput?: any;
}

const CheckBox = ({
  onClick,
  checked = false,
  dataInput,
  ...rest
}: CheckBoxProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  // remove space and add - between, lowercase and remove brackets ()
  const id = `filter:${dataInput?.name
    .replace(/[{()}]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()}`;

  const onChecked = React.useCallback(() => {
    if (onClick) {
      onClick();
    } else {
      setChecked(!isChecked);
    }
  }, [isChecked]);

  React.useEffect(() => {
    setChecked(checked);
  }, [checked]);
  return (
    <div className="flex cursor-pointer items-center justify-center" {...rest}>
      <div
        id={id}
        onClick={onChecked}
        className="flex items-center justify-center"
        style={{
          height: '15px',
          width: '15px',
          borderWidth: '1pt',
          borderRadius: '2px',
          //   border-green-500
          borderColor: isChecked ? '#22c55e' : '#999',
        }}
      >
        {isChecked && (
          <CheckIcon height={14} width={14} className="fill-green-500" />
        )}
      </div>
    </div>
  );
};
export default CheckBox;
