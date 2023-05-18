import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  theme: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  styleType: 'baseStyle' | 'secondaryStyle' | 'tertiaryStyle';
}

type Themes = {
  primary: string;
  secondary: string;
  tertiary: string;
  [key: string]: string;
};

const themes: Themes = {
  primary: 'text-white cursor-pointer bg-black',
  secondary: 'bg-gray16 text-black',
  tertiary:
    'bg-white hover:bg-marble text-black border border-black cursor-pointer',
  disabled: 'cursor-not-allowed bg-grey text-grey-dark',
};

type Styles = {
  baseStyle: string;
  secondaryStyle: string;
  tertiaryStyle: string;
  [key: string]: string;
};

const styles: Styles = {
  baseStyle:
    'rounded-lg w-full px-8 py-3 mr-2 my-4 text-base font-jeko flex items-center justify-center',
  secondaryStyle:
    'rounded-lg w-full px-1 py-1 mr-2 my-3 text-sm font-jeko flex items-center justify-center',
  tertiaryStyle:
    'rounded-full px-2 text-xs md:text-sm font-jeko flex items-center justify-center',
};

const WlpButton: React.FC<ButtonProps> = ({
  children,
  theme = 'primary',
  styleType = 'baseStyle',
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const themeClass = disabled ? themes.disabled : themes[theme];
  const styleClass = styles[styleType];
  const buttonClass = `${styleClass} ${themeClass}`;
  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default WlpButton;
