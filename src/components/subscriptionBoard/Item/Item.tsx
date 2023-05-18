import React from 'react';

type Props = {
  item: any;
  onClickPlan?: () => void;
};

const Item: React.FC<Props> = ({ item, onClickPlan }) => {
  const { title, imageUrl, quantity, category, total } = item;
  return (
    <div className="flex justify-between font-jekoBold bg-off-white rounded-lg w-full">
      <div className="flex w-4/5 items-center">
        <div className="h-[52px] w-[61px]">
          <img
            src={imageUrl}
            alt="img"
            className="h-[inherit] w-[inherit] rounded-l-lg"
          />
        </div>
        <div className="flex w-full items-center">
          <div className="px-3 text-sm leading-[18px]">
            <div className={`${category === 'plan' ? 'line-clamp-1' : 'line-clamp-2'}`}>{title}</div>
            {category === 'plan' && (
              <div
                className="cursor-pointer text-attention"
                onClick={onClickPlan}
              >{`(${total} Items)`}</div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-1/5 items-center justify-end px-3">
        <div className="h-fit rounded-[47px] bg-neutrals-liteGrey py-1 px-3 text-base leading-4">
          x{quantity}
        </div>
      </div>
    </div>
  );
};

export default Item;
