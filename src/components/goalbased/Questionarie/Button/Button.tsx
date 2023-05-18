import Link from 'next/link';
import React from 'react';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  theme?: 'primary' | 'secondary';
  link?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

type Themes = {
  primary: string;
  secondary: string;
  [key: string]: string;
};

const themes: Themes = {
  primary: 'text-black border border-black cursor-pointer',
  secondary: 'text-black border-2 border-primary2 cursor-pointer bg-primary3',
  disabled: 'cursor-not-allowed bg-grey text-grey-dark',
};

const baseStyle =
  'rounded-lg text-base font-jekoSemibold flex items-center min-w-32';

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
