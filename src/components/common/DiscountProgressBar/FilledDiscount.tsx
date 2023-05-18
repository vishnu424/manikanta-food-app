export type FilledDiscountType = {
  filledDiscount: number;
};

const FilledDiscount: React.FC<FilledDiscountType> = ({
  filledDiscount,
}: FilledDiscountType) => {
  return (
    <>
      <li
        className={
          'mr-1.5 w-7 rounded-full bg-gradient-to-r from-success to-success-secondary text-center text-white'
        }
      >
        {filledDiscount}&#37;
      </li>
    </>
  );
};

export default FilledDiscount;
