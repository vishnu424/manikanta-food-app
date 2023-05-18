import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';

import Button from '@/components/common/Button/Button';
import DiscountProgressBar from '@/components/common/DiscountProgressBar/DiscountProgressBar';
import type { ScrollDirection } from '@/hooks/useScrollDirection';
import { useStore } from '@/models/root-store';

type ViewCartContainerProps = {
  scrollDirection: ScrollDirection;
};

export const ViewCartContainer: React.FC<ViewCartContainerProps> = observer(
  // @ts-ignore
  ({ scrollDirection }) => {
    const {
      cartStore: {
        cart: { numberOfItems, subTotal, isCartOpen, openCart },
      },
    } = useStore();

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
      setIsHidden(false);
    }, [numberOfItems]);

    useEffect(() => {
      setIsHidden(scrollDirection === 'down');
    }, [scrollDirection]);

    const hide = isHidden ? 'hidden' : 'flex';

    return (
      !isCartOpen && (
        <div
          className={`sticky bottom-0 z-20 flex flex-col bg-white p-3 shadow-lg lg:flex-row lg:items-center lg:justify-between lg:py-5 lg:px-10`}
          style={{
            boxShadow:
              'rgba(0, 0, 0, 0.19) 0px 32px 64px, rgba(0, 0, 0, 0.15) 0px 2px 21px',
          }}
        >
          <div
            className={`${hide} mb-6 w-full justify-between lg:mb-0 lg:flex lg:w-3/5`}
          >
            <DiscountProgressBar />
          </div>
          <Button className="w-56 lg:w-80 lg:py-3" onClick={openCart}>
            <div className="flex w-full justify-between px-2 ">
              <span className="font-jekoBold text-base">
                View Cart ({numberOfItems})
              </span>
              <span className="font-jekoExtrabold text-base lg:text-2xl">
                ${subTotal}
              </span>
            </div>
          </Button>
        </div>
      )
    );
  }
);
