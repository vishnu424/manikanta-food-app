import React from 'react';

interface CheckBoxProps {
  checked?: boolean;
  onClick?: () => void;
  dataInput?: any;
}

const Radio = ({
  onClick,
  checked = false,
  dataInput,
  ...rest
}: CheckBoxProps) => {
  const [isChecked, setChecked] = React.useState(checked);

  // remove space and add - between, lowercase and remove brackets ()
  const id = `sort:${dataInput?.name
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
    <div className="flex items-center justify-center" {...rest}>
      <div
        id={id}
        onClick={onChecked}
        className="flex items-center justify-center"
        style={{
          height: '15px',
          width: '15px',
          borderWidth: '1pt',
          borderRadius: '100px',
          borderColor: isChecked ? '#22c55e' : '#999',
        }}
      >
        {isChecked && (
          <span
            style={{
              height: '11px',
              width: '11px',
              borderWidth: '1pt',
              borderRadius: '100px',
              background: '#22c55e',
            }}
          ></span>
        )}
      </div>
    </div>
  );
};
export default Radio;
