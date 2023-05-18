import Image from 'next/image';

export interface IFilterButton {
  text: string;
  handleClick: () => void;
  number?: number;
  icon: string;
  altText: string;
  svg?: any;
}

const FilterButton: React.FC<IFilterButton> = ({
  text,
  handleClick,
  number,
  icon,
  altText,
}) => {
  const numberText = number || '';
  return (
    <button
      className="border-gray box-border flex w-1/2 shrink-0 justify-center space-x-3 border p-3 text-sm md:h-10 md:w-auto md:rounded-lg md:p-2 md:font-jekoBold md:text-lg"
      style={{ marginRight: '-1px', marginTop: '-1px' }}
      onClick={handleClick}
    >
      <div>
        <Image src={icon} alt={altText} width={20} height={20} />
      </div>
      {/* {svg && (
        <div className={style.svg} dangerouslySetInnerHTML={{ __html: svg }} />
      )} */}
      <div>
        <span className="text-xs md:text-sm">
          {numberText} {text}
        </span>
      </div>
    </button>
  );
};

export default FilterButton;
