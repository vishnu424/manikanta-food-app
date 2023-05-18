import React from 'react';

import type { FilterSectionRecordModelType } from '@/models/api';
import type { HandleFilterSelectionType } from '@/shared/types';

import { InputFieldFilter } from '../InputFieldFilter/InputFieldFilter';

interface IFilterList {
  name?: string | null;
  values?: FilterSectionRecordModelType['values'];
  handleSelection: HandleFilterSelectionType;
  inputType?: HTMLInputElement['type'];
  checkbox?: boolean;
  displayType?: string;
}

export const FilterList: React.FC<IFilterList> = ({
  name,
  values,
  handleSelection,
  displayType,
}) => {
  const layoutTheme = {
    grid: 'grid grid-cols-2 gap-4 ml-4',
    column: 'flex flex-col space-y-2 gap-0 ml-4 mobile-425:w-full',
    dropdown:
      'flex flex-col space-y-2 mobile-425:w-full md:grid md:grid-cols-3 md:gap-2 md:px-4 md:space-y-0',
  };

  const listLayout =
    layoutTheme[displayType as keyof typeof layoutTheme] || layoutTheme.column;
  return (
    <React.Fragment>
      <div
        className={`
        
        my-4 mobile-425:my-2 mobile-425:flex  mobile-425:flex-1 mobile-425:flex-wrap mobile-425:items-center mobile-425:gap-[0] mobile-425:rounded-[6px] mobile-425:py-[18px] mobile-425:px-[0px]`}
      >
        <div className="flex items-center mobile-425:w-[100%] mobile-425:items-center mobile-425:gap-2 ">
          <div className="hidden items-center"></div>

          <p className="jeko-bold mb-4 text-xl">{name}</p>
        </div>
        <div className={`${listLayout}`}>
          {values &&
            values.map((value) => {
              return (
                <div key={value.id} className="flex flex-1 items-center">
                  <InputFieldFilter
                    dataInput={value}
                    handleSelection={handleSelection}
                    inputType={'checkbox'}
                    image={value?.icon?.url}
                    displayType={displayType}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
};
