import type { NextPage } from 'next';
import React from 'react';

export type SelectTypes = {
  register: any;
  data: any;
  name: string;
};

const BaseSelect: NextPage<SelectTypes> = ({ register, data, name }) => {
  return (
    <select
      {...register(name)}
      className="m-0
      block
      w-full
      appearance-none
      rounded
      border
      border-solid
      border-red-300
      bg-white bg-clip-padding bg-no-repeat
      px-3 py-1.5 text-base
      font-normal
      text-gray-700
      transition
      ease-in-out
      focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
      aria-label="Default select example"
    >
      <option>SELECT {name.toUpperCase()}</option>
      {data.map((list: any) => (
        <option key={list.keyValue} value={list.optionValue}>
          {list.optionValue.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default BaseSelect;
