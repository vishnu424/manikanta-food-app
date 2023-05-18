import type { DeliveryDetailModelType } from '@/models/api';

type DeliveryDatesType = {
  date: DeliveryDetailModelType;
  index: number;
};

const DeliveryDate: React.FC<DeliveryDatesType> = ({
  date,
  index,
}: DeliveryDatesType) => {
  const rowClass = index % 2 ? 'footer-background rounded' : 'bg-white';
  return (
    <div
      className={`mb-2 flex flex-row justify-between font-jekoMedium text-xs leading-tight md:font-jekoBold md:text-sm ${rowClass}`}
    >
      <div className="px-1.5 py-1">{date.formattedDate}</div>
      <div className="px-1.5 py-1">
        {date && date?.timeslots?.join(', ').replace(/\s&\s/g, '-')}
      </div>
    </div>
  );
};

export default DeliveryDate;
