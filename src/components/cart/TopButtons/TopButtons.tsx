import Link from 'next/link';

import Button from '@/components/common/Button/Button';

export type TopButtonsType = {
  closeCart: () => void;
};
const TopButtons: React.FC<TopButtonsType> = ({
  closeCart,
}: TopButtonsType) => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center space-x-4 bg-white py-4 shadow-lg">
      <Link href="/menu">
        <Button onClick={closeCart} theme="tofu">
          <span className="px-1 font-jekoBold text-sm">Add more Items</span>
        </Button>
      </Link>
      <Button theme="secondary">
        <span className="px-1 font-jekoBold text-sm">Add a Meal Plan</span>
      </Button>
    </div>
  );
};

export default TopButtons;
