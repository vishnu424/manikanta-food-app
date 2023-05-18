import { observer } from 'mobx-react-lite';

export interface IPill {
  name: string;
  subCategory?: string;
  count?: number;
  marginBottom: boolean;
  isCurrentTarget?: boolean;
  hasMargin?: boolean;
}

export const Pill: React.FC<IPill> = observer(
  ({ name, count, subCategory, marginBottom, isCurrentTarget, hasMargin }) => {
    if (!count) return null;
    return (
      <a
        href={`#${subCategory}`}
        className={
          `${'flex justify-between w-auto shrink-0 cursor-pointer items-center space-x-4 rounded-full border border-grey px-4 py-1 text-sm mx-2'}` +
          `${
            isCurrentTarget ? ' bg-apricot border-primary ' : ' text-black'
          }${`${marginBottom ? ' mb-2' : ''}
          ${hasMargin ? ' mx-2' : ''}`}`
        }
      >
        <span className="sm:jekoBold overflow-hidden text-ellipsis whitespace-nowrap font-jekoBold ">
          {name}
        </span>
        <span className="font-jekoBold">{count}</span>
      </a>
    );
  }
);
