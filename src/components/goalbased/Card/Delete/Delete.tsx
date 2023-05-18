import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

type DeleteProps = {
  onClick?: () => void;
};

export const Delete: React.FC<DeleteProps> = () => {
  return (
    <div className="px-1 text-xl">
      <HiOutlineTrash />
    </div>
  );
};
