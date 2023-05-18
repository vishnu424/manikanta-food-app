import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React from 'react';

import CheckBox from '@/components/common/CheckBox';
import type { SelectedFilterKey } from '@/models/product/filters';
import { useStore } from '@/models/root-store';
import type { HandleFilterSelectionType } from '@/shared/types';

export interface IInputFieldFilter {
  dataInput: any;
  inputType?: HTMLInputElement['type'];
  handleSelection: HandleFilterSelectionType;
  image: any;
  displayType?: string;
}

export const InputFieldFilter: React.FC<IInputFieldFilter> = observer(
  ({ dataInput, handleSelection, image, displayType }) => {
    const { productStore } = useStore();
    const { filters } = productStore;
    const filtersModel = filters.selectedFilters;
    const mb = displayType === 'column' ? 'mb-3' : '';
    const dataString = JSON.stringify(dataInput.data?.value);
    const checked =
      filtersModel[dataInput.key as keyof SelectedFilterKey].includes(
        dataString
      );
    const activeBg = checked ? 'bg-eggshell-lite' : 'bg-off-grey';
    const dropdownBg = displayType === 'dropdown' ? `${activeBg} p-3` : '';
    const count = productStore.categoryCount(dataInput.value!.toUpperCase());

    return (
      <div
        className={`flex flex-1 justify-between rounded-[6px] ${mb} ${dropdownBg}`}
      >
        <div className="flex items-center space-x-2 " key={dataInput.id}>
          <CheckBox
            checked={checked}
            onClick={() => {
              handleSelection(dataInput.key, dataString, checked);
            }}
            dataInput={dataInput}
          />
          <label
            className="whitespace-nowrap text-base"
            htmlFor={dataInput.name}
          >
            {dataInput.name} {count}
          </label>
          <div className="flex shrink-0 items-center">
            {image && <Image src={image} alt="icon" width={20} height={20} />}
          </div>
        </div>
      </div>
    );
  }
);
