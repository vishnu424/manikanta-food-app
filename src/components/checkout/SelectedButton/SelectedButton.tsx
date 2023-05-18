import React from 'react';

interface SelectedButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  fullWidth?: boolean;
  selected?: boolean;
}

const baseStayle =
  'rounded-lg p-1 flex items-center justify-center text-base font-jeko';
const disabledStyle =
  'cursor-not-allowed text-grey-disable border border-grey-disable';
const activeStyle =
  'bg-white hover:bg-apricot-lite hover:border-primary2 text-black border cursor-pointer';

const SelectedButton: React.FC<SelectedButtonProps> = ({
  children,
  disabled = false,
  onClick,
  fullWidth = false,
  selected = false,
  ...rest
}: SelectedButtonProps) => {
  const style = disabled ? disabledStyle : activeStyle;
  const selectedStyle = selected
    ? 'bg-apricot-lite border-primary2'
    : 'border-black';
  const width = fullWidth ? 'w-full' : '';

  const className = `${baseStayle} ${style} ${width} ${selectedStyle}`;
  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default SelectedButton;
