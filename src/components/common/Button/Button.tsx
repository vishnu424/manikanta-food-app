import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'custom'
    | 'wlp'
    | 'calorie'
    | 'muscle'
    | 'tofu'
    | 'quaternary';
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

type Themes = {
  primary: string;
  secondary: string;
  tertiary: string;
  custom: string;
  wlp: string;
  calorie: string;
  muscle: string;
  quaternary: string;
  [key: string]: string;
};

const themes: Themes = {
  primary:
    'text-white cursor-pointer bg-gradient-to-r from-primary to-primary2 hover:from-primary hover:to-primary',
  secondary: 'bg-secondary hover:bg-secondary2 text-black cursor-pointer',
  tertiary: 'hover:bg-marble text-black border border-black cursor-pointer',
  custom: 'bg-plan-custom text-black cursor-pointer',
  wlp: 'bg-plan-wlp text-black cursor-pointer',
  calorie: 'bg-plan-calorie text-black cursor-pointer',
  muscle: 'bg-plan-muscle text-black cursor-pointer',
  disabled: 'cursor-not-allowed bg-grey text-grey-dark',
  tofu: 'rounded-32 bg-tofu-dark',
  quaternary: 'text-black cursor-pointer',
};

const baseStyle =
  'rounded-full px-4 py-2 text-sm sm:text-base font-jeko flex items-center justify-center min-w-32';

type BaseButtonProps = Omit<ButtonProps, 'link'>;

const BaseButton: React.FC<BaseButtonProps> = ({
  className,
  children,
  theme = 'primary',
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) => {
  const themeClass = disabled ? themes.disabled : themes[theme];
  const buttonClass = `${baseStyle} ${themeClass} ${className}`;

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

const Button: React.FC<ButtonProps> = ({
  link,
  children,
  ...rest
}: ButtonProps) => {
  if (link) {
    const parsedLink = link[0] === '/' ? link : `/${link}`;
    return (
      <Link href={parsedLink}>
        <BaseButton {...rest}>{children}</BaseButton>
      </Link>
    );
  }
  return <BaseButton {...rest}>{children}</BaseButton>;
};

export default Button;
