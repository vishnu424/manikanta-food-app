import Image from 'next/image';

export type PaymentCardType = {
  cardType: string;
  creditCardExpired: string;
  expirationMonth: number;
  expirationYear: number;
  holder: string;
  maskedNumber: number;
  numberLastDigits: number;
  type: string;
};

export type PaymentType = {
  paymentCard: PaymentCardType;
  paypalAccountEmail: string;
  preferred: boolean;
  paymentMethodId: string;
};

export interface IPaymentMethod {
  payment: PaymentType;
}

export const PaymentMethod: React.FC<IPaymentMethod> = ({ payment }) => {
  const defaultStyle = 'border-2 border-primary2 bg-apricot-lite';
  // 'border border-black bg-white';
  const { paymentCard } = payment;
  return (
    <div className={`my-3 rounded-lg p-3 ${defaultStyle}`}>
      <div className="flex w-full">
        <div className="pr-4 font-jekoBold text-sm">
          <div className="leading-4">{paymentCard.holder}</div>
          <div className="font-jekoMedium text-xs">
            ****{paymentCard.numberLastDigits}
          </div>
        </div>
        <div className="shrink-0">
          <Image
            width={35}
            height={28}
            src="/assets/images/svg/Mastercard.svg"
            alt={paymentCard.cardType}
          />
        </div>
      </div>
    </div>
  );
};
