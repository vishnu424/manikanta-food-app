import React from 'react';

type CardTypes = {
  onClick?: () => void;
  children: React.ReactNode;
  keyValue?: number;
  activitySelected?: number;
};

const Card: React.FC<CardTypes> = ({
  children,
  onClick,
  keyValue,
  activitySelected,
}) => {
  return (
    <div onClick={onClick}>
      <div
        className={`my-3 max-w-md overflow-hidden rounded-md ${
          keyValue === activitySelected
            ? 'border-2 border-primary'
            : 'border border-black'
        }`}
      >
        <div className="flex justify-between p-3">{children}</div>
      </div>
    </div>
  );
};

export default Card;
