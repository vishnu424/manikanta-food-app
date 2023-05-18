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
  primary: 'cursor-pointer bg-primary',
  secondary: 'border-2 border-primary2 cursor-pointer bg-primary3',
  disabled: 'cursor-not-allowed bg-grey text-grey-dark',
};

const baseStyle =
  'rounded-full text-white px-8 text-base font-jeko md:font-jekoBold w-10/12 md:w-[380px] py-4 leading-[22px]';

type CartButtonProps = Omit<ButtonProps, 'link'>;

const CartButton: React.FC<CartButtonProps> = ({
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
      <div className="flex w-full items-center justify-between">{children}</div>
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
        <CartButton {...rest}>{children}</CartButton>
      </Link>
    );
  }
  return <CartButton {...rest}>{children}</CartButton>;
};

export default Button;
