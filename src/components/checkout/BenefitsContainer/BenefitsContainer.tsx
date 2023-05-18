import Image from 'next/image';

export const BenefitsContainer: React.FC = () => {
  // TO BE UPDATED FROM THE CMS
  const benefits = [
    'Change up your menu or plan easily',
    'No lock in: skip or cancel anytime',
    'All the benefits of one-time purchase',
    'Free shipping on every delivery!',
  ];
  return (
    <div className="flex flex-col">
      {benefits &&
        benefits.map((benefit, index) => (
          <div key={index} className="flex py-1">
            <div className="shrink-0">
              <Image
                width={22}
                height={21}
                src="/assets/images/png/verified.png"
                alt={''}
              />
            </div>
            <span className="inline-block px-2 font-jekoMedium text-xs">
              {benefit}
            </span>
          </div>
        ))}
    </div>
  );
};
