import Image from 'next/image';

const FreeShippingBanner: React.FC = () => {
  return (
    <div className="my-11 block px-6">
      <div className="flex bg-rhubarb-lite p-6">
        <Image
          src="/assets/images/svg/mymc-vehicle.svg"
          alt="Add Cart"
          width={66}
          height={41}
          className="rounded-l-lg"
        />
        <p className="flex-1 pl-8 font-jekoSemibold text-sm leading-5 text-rhubarb-dark lg:text-xs">
          Get FREE SHIPPING <br></br>on every delivery when <br></br>you
          subscribe at checkout
        </p>
      </div>
    </div>
  );
};

export default FreeShippingBanner;
