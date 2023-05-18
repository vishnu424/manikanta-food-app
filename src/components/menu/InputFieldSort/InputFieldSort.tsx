import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import Radio from '@/components/common/Radio';
import type { HandleSortSelectionType } from '@/shared/types';

export interface IInputFieldSort {
  dataInput: any;
  filtersModel: any;
  inputType?: HTMLInputElement['type'];
  handleSelection: HandleSortSelectionType;
  checked?: boolean;
}

export const InputFieldSort: React.FC<IInputFieldSort> = observer(
  ({ dataInput, filtersModel, handleSelection }) => {
    const dataString = JSON.stringify(dataInput.data);
    const checked = filtersModel.sort === dataString;

    return (
      <div
        className="flex space-x-2 mobile-425:border-b-[1px] mobile-425:border-[#dedede]  mobile-425:py-5"
        key={dataInput.id}
      >
        <Radio
          checked={checked}
          onClick={() => {
            handleSelection(dataString);
          }}
          dataInput={dataInput}
        />
        <label className="!text-base !font-[600]" htmlFor={dataInput.name}>
          {dataInput.name}
        </label>
        <div className="bg-black">
          {dataInput?.icon?.url && (
            <Image
              src={dataInput?.icon?.url}
              alt="icon"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
    );
  }
);
