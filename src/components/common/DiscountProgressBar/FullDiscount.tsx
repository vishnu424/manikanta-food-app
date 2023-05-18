export type FullDiscountType = {
  maxDiscount: number;
};

const FullDiscount: React.FC<FullDiscountType> = ({
  maxDiscount,
}: FullDiscountType) => {
  return (
    <>
      <li
        className={
          'w-full rounded-full bg-gradient-to-r from-success to-success-secondary pl-3 leading-[18px] text-white'
        }
      >
        You’re saving {maxDiscount}% 🎉
      </li>
    </>
  );
};

export default FullDiscount;
