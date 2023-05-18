import Image from 'next/image';

type Size = {
  small: string;
  large: string;
};
interface QuantityButtonProps {
  qty: number;
  handleDeleteProduct: () => void;
  handleAddProduct: () => void;
  size?: keyof Size;
}
const widthSize: Size = {
  small: 'w-24',
  large: 'w-32',
};

const heightSizes: Size = {
  small: 'h-[24px]',
  large: 'h-[32px]',
};

const QuantityButton: React.FC<QuantityButtonProps> = ({
  qty,
  handleDeleteProduct,
  handleAddProduct,
  size = 'small',
}: QuantityButtonProps) => {
  const width = widthSize[size] || widthSize.small;
  const height = heightSizes[size] || heightSizes.small;

  return (
    <div className={`flex ${height} justify-end`}>
      <div
        className={`relative flex ${width} items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary2 py-1`}
      >
        <button
          className="absolute left-1 px-3 text-xl text-white"
          onClick={handleDeleteProduct}
        >
          <Image
            src="/assets/icons/remove.svg"
            alt="arrow"
            width={12}
            height={12}
            priority
          />
        </button>
        <span className=" font-jekoBold text-sm text-white">{qty}</span>
        <button
          className="absolute right-1 px-3 text-xl text-white"
          onClick={handleAddProduct}
        >
          <Image
            src="/assets/icons/add.svg"
            alt="arrow"
            width={12}
            height={12}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default QuantityButton;
