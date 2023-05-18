import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import type { FilterValueRecordModelType } from '@/models/api';
import type {
  SelectedFilterKey,
  SelectedFiltersModelType,
} from '@/models/product/filters';
import type { HandleFilterSelectionType } from '@/shared/types';

export interface IPrimaryFilter {
  value: FilterValueRecordModelType;
  handleFilterSelection: HandleFilterSelectionType;
  filtersModel: SelectedFiltersModelType;
}

const PrimaryFilter: React.FC<IPrimaryFilter> = observer(
  ({ value, handleFilterSelection, filtersModel }) => {
    const { name, icon, iconActive, key, data } = value;
    const dataString = JSON.stringify(data?.value);
    const checked =
      filtersModel[key as keyof SelectedFiltersModelType].includes(dataString);

    let border = '';
    let textColor = 'text-gray';
    let iconColor = 'text-gray';
    const iconSrc = icon.url;
    const iconSrcActive = iconActive.url;

    if (checked) {
      border = 'border-b-2 border-primary';
      textColor = 'text-primary';
      iconColor = 'first:fill-primary';
    }

    return (
      <div>
        <div
          className={`relative flex cursor-pointer flex-col items-center justify-center`}
          onClick={() =>
            handleFilterSelection(
              key as keyof SelectedFilterKey,
              dataString,
              checked
            )
          }
        >
          <div className="flex w-5 justify-center">
            {checked ? (
              <Image
                className={iconColor}
                src={iconSrcActive}
                alt={'test'}
                width={20}
                height={20}
                priority
              />
            ) : (
              <Image
                className={iconColor}
                src={iconSrc}
                alt={'test'}
                width={20}
                height={20}
                priority
              />
            )}
          </div>
          <span className={`text-center text-xs ${textColor}`}>{name}</span>
          <div className={`${border} absolute bottom-0 w-full`}></div>
        </div>
      </div>
    );
  }
);

export default PrimaryFilter;
