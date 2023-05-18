export type LinearProgressType = {
  width: number;
  numberOfDiscountedItems: number;
  threshold: number;
  discount: number;
};

const LinearProgress: React.FC<LinearProgressType> = ({
  width,
  numberOfDiscountedItems,
  threshold,
  discount,
}: LinearProgressType) => {
  return (
    <>
      <li className="relative flex h-[18px] flex-1 items-center rounded-full bg-off-grey pr-5">
        <div
          className={
            'flex h-[18px] min-w-[37px] items-center justify-end rounded-full bg-gradient-to-r from-success to-success-secondary pr-px'
          }
          style={{ width: `${width}%`, transition: 'width 500ms ease-in-out' }}
        >
          <span className="z-10 block h-4 w-[34px] rounded-full bg-white text-center text-success-copy">
            {numberOfDiscountedItems}/{threshold}
          </span>
        </div>
        <span className="absolute top-0 right-1  text-success-copy">
          {discount}&#37;
        </span>
      </li>
    </>
  );
};

export default LinearProgress;
