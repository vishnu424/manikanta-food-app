import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  imageSrc?: string;
  title?: string;
  description?: string;
  background?: string;
  theme?: 'primaryStyle' | 'secondaryStyle';
  imageStyle?: 'imageStylePrimary' | 'imageStyleSecondary';
}

type Themes = {
  primaryStyle: string;
  secondaryStyle: string;
};

const themes: Themes = {
  primaryStyle: 'flex flex-col rounded-lg',
  secondaryStyle: 'flex flex-row rounded-lg bg-white',
};

type Styles = {
  imageStylePrimary: string;
  imageStyleSecondary: string;
  [key: string]: string;
};

const styles: Styles = {
  imageStylePrimary: 'object-cover rounded-t-lg',
  imageStyleSecondary:
    'w-[104px] h-auto md:w-[130px] md:h-[186px] object-cover rounded-l-lg md:rounded-none md:rounded-l-lg',
};

export const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  children,
  background,
  theme = 'primaryStyle',
  imageStyle = 'imageStylePrimary',
}: CardProps) => {
  const themeStyle = themes[theme];
  const themeClass = `${themeStyle} ${background}`;
  const styleClass = styles[imageStyle];
  const imageClass = `${styleClass}`;
  return (
    <div className="flex justify-center pt-6">
      <div className={themeClass}>
        <img className={imageClass} src={imageSrc} alt={title} />
        <div className="relative flex flex-col justify-start p-6">
          <div className="text-base leading-[22px] font-jekoBold">
            {title}
          </div>
          <div className="py-2 font-jekoMedium text-black text-base leading-[22px]">
            {description}
          </div>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
