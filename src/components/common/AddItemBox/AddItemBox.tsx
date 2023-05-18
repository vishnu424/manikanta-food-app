import React from 'react';

export type Props = {
  label?: string;
};

const Box: React.FC<Props> = ({ label }) => {
  return (
    <div className="flex h-full items-center justify-center rounded-xl border border-dashed bg-off-white px-3 py-8 font-jekoBold text-2xl leading-[30px] text-grey-disable md:py-0">
      <span>{label}</span>
    </div>
  );
};

export default Box;
