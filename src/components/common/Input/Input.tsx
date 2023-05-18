import type { NextPage } from 'next';
import React from 'react';

export type InputTypes = {
  register: any;
  placeholder: string;
  name: string;
  type: string;
};

const FormInput: NextPage<InputTypes> = ({
  register,
  placeholder,
  name,
  type,
}) => {
  return (
    <input
      {...register(name)}
      placeholder={placeholder}
      type={type}
      className="
      m-0
      block
      w-full
      rounded
      border
      border-solid
      border-red-300
      bg-white bg-clip-padding
      px-3 py-1.5 text-base
      font-normal
      text-gray-700
      transition
      ease-in-out
      focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
      "
    />
  );
};

export default FormInput;
