import React from 'react';

const CreditCard = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 1.25V8.75C15.5 9.09375 15.3533 9.38813 15.0597 9.63313C14.7657 9.87771 14.4125 10 14 10H2C1.5875 10 1.2345 9.87771 0.941 9.63313C0.647 9.38813 0.5 9.09375 0.5 8.75V1.25C0.5 0.90625 0.647 0.612083 0.941 0.3675C1.2345 0.1225 1.5875 0 2 0H14C14.4125 0 14.7657 0.1225 15.0597 0.3675C15.3533 0.612083 15.5 0.90625 15.5 1.25ZM2 2.5H14V1.25H2V2.5ZM2 5V8.75H14V5H2Z"
        fill={props.color}
      />
    </svg>
  );
};

export default CreditCard;
