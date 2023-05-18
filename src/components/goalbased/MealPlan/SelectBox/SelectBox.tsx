import _ from 'lodash';
import type { NextPage } from 'next';
import React from 'react';

export type SelectTypes = {
  data: any;
  onChange?: (val: any) => void;
  value?: any;
};

const BaseSelect: NextPage<SelectTypes> = ({ data, onChange, value }) => {
  return (
    <div className="rounded-2xl border border-grey-dark pr-3 font-jekoBold text-xs">
      <select
        className=" bg-transparent py-2 px-3 leading-4 focus:outline-none"
        onChange={onChange}
        value={value}
      >
        {_.map(data, (val, i) => {
          return (
            <option value={val.value} className="px-2" key={i}>
              {val.value} {val.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BaseSelect;
