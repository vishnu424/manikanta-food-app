import React from 'react';

export type ColorType = {
  hex: string;
};

export type TagType = {
  text: string;
  fontColor: ColorType;
  backgroundColor: ColorType;
};

export type PrimaryDisplayTagType = {
  tag: TagType;
};

export const PrimaryDisplayTag: React.FC<PrimaryDisplayTagType> = ({ tag }) => {
  return (
    <div
      className="absolute top-1 left-1 z-10 flex items-center rounded"
      style={{ backgroundColor: tag?.backgroundColor?.hex }}
    >
      <div
        className="px-2 font-jekoBold text-xxs"
        style={{ color: tag?.fontColor?.hex }}
      >
        {tag.text}
      </div>
    </div>
  );
};
