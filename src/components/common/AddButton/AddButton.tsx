import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const baseStyle =
  'w-8 h-8 text-white cursor-pointer bg-gradient-to-r from-primary to-primary2 hover:from-primary hover:to-primary rounded-full text-base font-jeko flex items-center justify-center';

const AddButton: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const buttonClass = `${baseStyle}`;
  return (
    <button
      type="button"
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AddButton;
